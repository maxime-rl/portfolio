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
            src="../assets/images/logos/blue-logo.svg"
            alt="logo"
          />
          <ul class="navbar__networks-list">
            ${this.networks.map(
              (network) => html` <li>
                <a href="${network.link}">
                  <img
                    class="navbar__network-icon"
                    src="../assets/images/icons/${network.icon}"
                    alt="icône ${network.name}"
                  />
                </a>
              </li>`
            )}
          </ul>
        </div>
      </nav>
    `;
  }
}
