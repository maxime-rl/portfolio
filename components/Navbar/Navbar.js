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
            class="site__logo"
            src="./images/logos/blue-logo.svg"
            alt="logo du site de Maxime Robil-Leprêtre"
          />
          <ul class="navbar__network-list">
            ${this.networks.map(
              (network) => html` <li>
                <a
                  target="_blank"
                  href="${network.link}"
                  class="focus-visible"
                  title="Voir le profil ${network.name} de Maxime Robil-Leprêtre"
                >
                  <span
                    class="navbar__network-icon navbar__network-icon--${network.name.toLowerCase()}"
                    aria-hidden="true"
                  ></span>
                </a>
              </li>`
            )}
          </ul>
        </div>
      </nav>
    `;
  }
}
