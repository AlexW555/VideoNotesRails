import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["timestampInput", "timestampDisplay"]
  static values = { timestamp: Number }

  connect() {
    console.log("VideoNotesController connected")
  }

  get player() {
    // Our mux-player has id="player"
    const player = document.getElementById("player")
    if (player && player.readyState !== undefined) {
      return player
    }
    console.log("Player not ready or not found")
    return null
  }

  // Called by: button data-action="click->video-notes#stampNow"
  stampNow() {
    console.log("Stamp Now clicked")
    
    // Try multiple ways to get the player
    let p = document.getElementById("player")
    
    if (!p) {
      console.log("Player element not found")
      return
    }
    
    // Wait for player to be ready if it's a mux-player
    if (p.tagName === 'MUX-PLAYER') {
      if (typeof p.currentTime === 'undefined') {
        console.log("Mux player not ready, waiting...")
        setTimeout(() => this.stampNow(), 100)
        return
      }
    }

    // Get current time
    const seconds = Math.floor(p.currentTime || 0)
    console.log("Current time:", seconds)
    
    // Update the hidden field
    if (this.hasTimestampInputTarget) {
      this.timestampInputTarget.value = seconds
      console.log("Updated input to:", seconds)
    } else {
      console.log("No timestampInput target found")
    }
    
    // Update the display
    if (this.hasTimestampDisplayTarget) {
      this.timestampDisplayTarget.textContent = seconds
      console.log("Updated display to:", seconds)
    } else {
      console.log("No timestampDisplay target found")
    }
  }

  // Called by: note click data-action="click->video-notes#jump"
  jump(event) {
    const p = this.player
    if (!p) return

    const seconds = Number(event.currentTarget.dataset.videoNotesTimestampValue || 0)
    p.currentTime = seconds
    p.play?.()
  }
}
