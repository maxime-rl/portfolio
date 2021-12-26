import { LitElement, html } from "lit";
import { componentStyle } from "./FooterStyle";
import { sharedStyles } from "../../helpers/sharedStyles";

/**
 * @name Footer
 * @returns {HTMLElement}
 */
export default class Footer extends LitElement {
  static styles = [sharedStyles, componentStyle];

  render() {
    return html`
      <footer class="footer">
        <div class="footer__wrapper page-width">
          <img
            class="footer__logo"
            src="./images/logos/blue-logo.svg"
            alt="logo"
          />
          <p class="footer__description">Je suis un super footer</p>
        </div>
      </footer>
    `;
  }
}
