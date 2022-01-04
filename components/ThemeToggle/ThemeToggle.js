import { LitElement, html } from "lit";
import { componentStyles } from "./ThemeToggleStyles";
import { sharedStyles } from "../../utils";

export default class ThemeToggle extends LitElement {
  static properties = {
    theme: {
      type: String,
      reflect: true,
    },
  };

  static styles = [sharedStyles, componentStyles];

  constructor() {
    super();
    this.theme = localStorage.getItem("portfolio-mrl-theme")
      ? localStorage.getItem("portfolio-mrl-theme")
      : "blue";
  }

  render() {
    return html`
      <div class="theme-toggle">
        <input
          type="checkbox"
          id="themeToggle"
          class="theme-toggle__input"
          tabindex="0"
          @change=${() => this.toggleTheme()}
        />
        <label for="themeToggle" class="sr-only">Choix du thème</label>
        <div class="theme-toggle__slider"></div>
        <div class="theme-toggle__colors">
          <span class="theme-toggle__blue"></span>
          <span class="theme-toggle__orange"></span>
        </div>
      </div>
    `;
  }

  toggleTheme() {
    if (this.theme === "blue") {
      this.theme = "orange";
    } else {
      this.theme = "blue";
    }

    window.localStorage.setItem("portfolio-mrl-theme", this.theme);
    this.initTheme();
  }

  firstUpdated() {
    this.initTheme();
  }

  initTheme() {
    document.querySelector("html").setAttribute("theme", this.theme);
  }
}
