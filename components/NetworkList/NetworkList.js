import { LitElement, html } from "lit";
import { componentStyles } from "./NetworkListStyles";
import { sharedStyles } from "../../helpers/styles/sharedStyles";

import data from "../../assets/data.json";

/**
 * @name NetworkList
 * @returns {HTMLElement}
 */
export default class NetworkList extends LitElement {
  static properties = {
    networks: [],
  };

  static styles = [sharedStyles, componentStyles];

  constructor() {
    super();
    this.networks = data.networks;
  }

  render() {
    return html`
      <ul class="network-list">
        ${this.networks.map(
          (network) => html` <li>
            <a
              href="${network.link}"
              target="_blank"
              rel="noreferrer"
              class="focus-visible"
              title="Voir le profil ${network.name} de Maxime Robil-Leprêtre"
            >
              <span
                class="network-list__icon network-list__icon--${network.name.toLowerCase()}"
                aria-hidden="true"
              ></span>
            </a>
          </li>`
        )}
      </ul>
    `;
  }
}
