import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // remove data-navigation-target="toggleButton"
  static targets = ["dropDown", "toggleButton"]

  connect() {
    this.menu_open = false
  }

  menuToggle(event) {
    if (this.menu_open) {
      this.menu_open = false
      this.dropDownTarget.classList.add("hidden")
      if (event.target.classList.contains("stroke")) {
        event.target.parentElement.classList.remove("open")
      } else {
        event.target.parentElement.classList.remove("open")
      }
    } else {
      this.menu_open = true
      this.dropDownTarget.classList.remove("hidden")
      if (event.target.classList.contains("stroke")) {
        console.log(event.target.parentElement.classList.add("open"))
      } else {
        event.target.parentElement.classList.remove("open")
      }
    }
  }
}
