import { LitElement, html } from "lit";
import { componentStyles } from "./FooterStyles";
import { sharedStyles } from "../../helpers/sharedStyles";

/**
 * @name Footer
 * @returns {HTMLElement}
 */
export default class Footer extends LitElement {
  static styles = [sharedStyles, componentStyles];

  render() {
    return html`
      <footer class="footer">
        <div class="footer__wrapper page-width">
          <img
            class="site__logo"
            src="./images/logos/blue-logo.svg"
            alt="logo du site de Maxime Robil-Leprêtre"
          />
          <p class="footer__description">
            © ${new Date().getFullYear()} - Maxime RL
          </p>
        </div>
      </footer>
    `;
  }
}
