import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { componentStyles } from "./ModalStyles";
import { sharedStyles } from "../../helpers";

/**
 * @name Modal
 * @returns {HTMLElement}
 */
export default class Modal extends LitElement {
  static properties = {
    open: { type: Boolean },
    name: { type: String },
    medias: { type: Array },
    description: { type: String },
  };

  static styles = [sharedStyles, componentStyles];

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <div class="${classMap({ wrapper: true, open: this.open })}">
        <div class="overlay" @click="${this.close}"></div>
        <div class="dialog">
          <button
            class="dialog__btn"
            aria-label="Fermer la modale"
            title="Fermer la modale"
            @click=${this.handleClick}
          >
            <span class="dialog__btn-icon"></span>
          </button>
          <div class="dialog__content">
            ${this.description != null
              ? html` <p class="dialog__description">${this.description}</p> `
              : null}
            ${this.medias != null
              ? this.medias.map((media) =>
                  media.includes(
                    ".webp" || ".jpg" || ".png" || ".gif" || ".svg"
                  )
                    ? html`<img 
                          src="./images/projects/other/${media}" 
                          alt="Miniature servant de description approfondie du projet ${this.name}" 
                          width="460" height="205">
                        </img>
                      `
                    : html`<a
                        href="${media}"
                        class="dialog__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vidéo de présentation
                      </a> `
                )
              : null}
          </div>
        </div>
      </div>
    `;
  }

  close() {
    this.open = false;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent("button-click"));
    this.close();
  }
}
