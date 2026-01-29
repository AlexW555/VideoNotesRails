import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Form debug controller connected")
    
    this.element.addEventListener('submit', (event) => {
      console.log("Form submitted via:", event.submitter)
      console.log("Form action:", this.element.action)
      console.log("Form method:", this.element.method)
      console.log("Turbo enabled:", !this.element.hasAttribute('data-turbo-false'))
    })
  }
}