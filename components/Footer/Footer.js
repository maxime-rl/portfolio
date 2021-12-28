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
            class="site__logo"
            src="./images/logos/white-logo.svg"
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
