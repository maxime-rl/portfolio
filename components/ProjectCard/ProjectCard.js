import { LitElement, html, css } from "lit";
import { componentStyles } from "./ProjectCardStyles";
import { sharedStyles, btnStyles, tagStyles } from "../../helpers";

/**
 * @name ProjectCard
 * @returns {HTMLElement}
 */
export default class ProjectCard extends LitElement {
  static properties = {
    id: { type: String },
    name: { type: String },
    date: { type: String },
    tags: { type: Array },
    shortDescription: { type: String },
    description: { type: String },
    thumbnail: { type: String },
    alt: { type: String },
    medias: { type: Array },
    links: { type: Array },
  };

  static styles = [sharedStyles, btnStyles, tagStyles, componentStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <article class="project-card">
        ${
          this.medias
            ? html`<button
                  class="btn btn--see-more focus-visible"
                  aria-label="Voir plus de contenu"
                  title="Voir plus de contenu"
                  @click=${() => this.handleModal()}
                >
                  voir plus
                </button>
                <modal-component
                  .name=${this.name}
                  .medias=${this.medias}
                  .description=${this.description}
                >
                </modal-component>`
            : null
        }
        ${
          new Date(this.date) > new Date()
            ? html`<div class="tag tag--in-progress">en cours</div>`
            : null
        }
        <img class="project-card__img" src="./images/projects/${
          this.thumbnail
        }" alt="${this.alt}" width="460" height="410"></img>
        <h3 class="project-card__title">${this.name}</h3>
        <div class="project-card__links">
        ${
          this.links.preview
            ? html` <a
                class="project-card__link project-card__link--preview focus-visible"
                href="${this.links.preview}"
                target="_blank"
                rel="noreferrer"
                title="Voir un aperçu live"
              >
                <span
                  class="project-card__icon project-card__icon--preview"
                  aria-hidden="true"
                ></span>
              </a>`
            : html` <span
                class="project-card__icon project-card__icon--preview project-card__icon--not-available"
                aria-hidden="true"
              >
              </span>`
        }
        ${
          this.links.github
            ? html` <a
                class="project-card__link project-card__link--github focus-visible"
                href="${this.links.github}"
                target="_blank"
                rel="noreferrer"
                title="Voir le répertoire Github"
              >
                <span
                  class="project-card__icon project-card__icon--github"
                  aria-hidden="true"
                >
                </span>
              </a>`
            : html` <span
                class="project-card__icon project-card__icon--github project-card__icon--not-available"
                aria-hidden="true"
              >
              </span>`
        }
        </div>
        <p class="project-card__description">${this.shortDescription}</p>
        <div class="project-card__tags">${this.tags.map((tag) =>
          tag != "frontend" && tag != "webdesign" && tag != "gestion"
            ? html` <span class="tag">${tag}</span> `
            : null
        )}</div>
      </article>
    `;
  }

  handleModal() {
    const modal = this.shadowRoot.querySelector("modal-component");
    modal.open = true;
  }
}
