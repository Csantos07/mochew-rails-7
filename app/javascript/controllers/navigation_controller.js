import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropDown", "toggleButton"]

  connect() {
    this.menu_open = false
  }

  menuToggle() {
    if (this.menu_open) {
      this.menu_open = false
      this.dropDownTarget.classList.add("hidden")
      this.toggleButtonTarget.classList.remove("open")
    } else {
      this.menu_open = true
      this.dropDownTarget.classList.remove("hidden")
      this.toggleButtonTarget.classList.add("open")
    }
  }
}
