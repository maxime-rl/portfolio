import { LitElement, html } from "lit";
import { componentStyles } from "./BtnScrollToTopStyles";
import { sharedStyles } from "../../utils";

/**
 * @name BtnScrollToTop
 * @returns {HTMLElement}
 */
export default class BtnScrollToTop extends LitElement {
  static properties = {
    isVisible: { type: Boolean },
  };

  static styles = [sharedStyles, componentStyles];

  constructor() {
    super();
    this.isVisible = false;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this.toggleVisible.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.scrollToTop());
    super.disconnectedCallback();
  }

  toggleVisible() {
    if (window.pageYOffset > 1500) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return html`
      ${this.isVisible
        ? html` <div class="scrolltotop-wrapper page-width">
            <button
              @click=${() => this.scrollToTop()}
              class="btn-scrolltotop focus-visible"
              aria-label="Remonter en haut de la page"
              title="Remonter en haut de la page"
            >
              <span class="btn-scrolltotop__icon" aria-hidden="true"></span>
            </button>
          </div>`
        : null}
    `;
  }
}
