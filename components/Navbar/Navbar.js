import { LitElement, html } from "lit";
import { componentStyles } from "./NavbarStyles";
import { sharedStyles } from "../../helpers";

/**
 * @name Nav
 * @returns {HTMLElement}
 */
export default class Nav extends LitElement {
  static styles = [sharedStyles, componentStyles];

  render() {
    return html`
      <nav class="navbar">
        <div class="navbar__wrapper page-width">
          <img
            class="site__logo"
            src="./images/logos/blue-logo.svg"
            alt="logo du site de Maxime Robil-Leprêtre"
          />
          <network-list></network-list>
        </div>
      </nav>
    `;
  }
}
