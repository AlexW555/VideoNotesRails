// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Add some debugging for Turbo events
document.addEventListener("turbo:before-fetch-request", (event) => {
  console.log("Turbo request starting:", event.detail.url)
})

document.addEventListener("turbo:before-fetch-response", (event) => {
  console.log("Turbo response received:", event.detail.fetchResponse.response.status)
})

document.addEventListener("turbo:frame-missing", (event) => {
  console.log("Turbo frame missing:", event.detail)
})

document.addEventListener("turbo:submit-start", (event) => {
  console.log("Form submission via Turbo started")
})

document.addEventListener("turbo:submit-end", (event) => {
  console.log("Form submission via Turbo ended")
})
