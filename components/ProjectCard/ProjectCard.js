import { LitElement, html, css } from "lit";
import { componentStyles } from "./ProjectCardStyles";
import { sharedStyles } from "../../helpers/sharedStyles";

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
    description: { type: String },
    thumbnail: { type: String },
    links: { type: Array },
  };

  static styles = [sharedStyles, componentStyles];

  render() {
    return html`
      <article class="project-card">
        ${
          new Date(this.date) > new Date()
            ? html`<div class="project-card__work-in-progress">en cours</div>`
            : null
        }
        <img class="project-card__img" src="./images/projects/${
          this.thumbnail
        }" alt="${this.name}"></img>
        <h3 class="project-card__title">${this.name}</h3>
        <div class="project-card__links">
        ${
          this.links.preview
            ? html`<a
                class="project-card__link project-card__link--preview focus-visible"
                target="_blank"
                href="${this.links.preview}"
                title="Voir un aperçu live"
              >
                <span
                  class="project-card__icon project-card__icon--preview"
                  aria-hidden="true"
                ></span>
              </a>`
            : html`<span
                class="project-card__icon project-card__icon--preview project-card__icon--not-available"
                aria-hidden="true"
              ></span>`
        }
        ${
          this.links.github
            ? html`<a
                class="project-card__link project-card__link--github focus-visible"
                target="_blank"
                href="${this.links.github}"
                title="Voir le répertoire Github"
              >
                <span
                  class="project-card__icon project-card__icon--github"
                  aria-hidden="true"
                ></span>
              </a>`
            : html` <span
                class="project-card__icon project-card__icon--github project-card__icon--not-available"
                aria-hidden="true"
              ></span>`
        }
        </div>
        <p class="project-card__description">${this.description}</p>
        <div class="project-card__tags">${this.tags.map((tag) =>
          tag != "frontend" && tag != "webdesign" && tag != "gestion"
            ? html` <span class="project-card__tag">${tag}</span> `
            : null
        )}</div>
      </article>
    `;
  }
}
