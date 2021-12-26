import { LitElement, html } from "lit";
import { componentStyle } from "./NavbarStyle";
import { sharedStyles } from "../../helpers/sharedStyles";

import data from "../../assets/data.json";

/**
 * @name Nav
 * @returns {HTMLElement}
 */
export default class Nav extends LitElement {
  static properties = {
    networks: [],
  };

  static styles = [sharedStyles, componentStyle];

  constructor() {
    super();
    this.networks = data.networks;
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="navbar__wrapper page-width">
          <img
            class="navbar__logo"
            src="./images/logos/blue-logo.svg"
            alt="logo"
          />
          <ul class="navbar__networks-list">
            ${this.networks.map(
              (network) => html` <li>
                <a href="${network.link}">
                  <i
                    class="navbar__network-icon navbar__network-icon--${network.name.toLowerCase()}"
                  ></i>
                </a>
              </li>`
            )}
          </ul>
        </div>
      </nav>
    `;
  }
}
