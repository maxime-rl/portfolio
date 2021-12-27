import { LitElement, html, css } from "lit";
import { componentStyle } from "./ProjectCardStyle";
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

  static styles = [sharedStyles, componentStyle];

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
                class="project-card__link project-card__link--preview"
                href="${this.links.preview}"
                aria-label="Voir un aperçu live"
              >
                <i class="project-card__icon project-card__icon--preview"></i>
              </a>`
            : html`<i
                class="project-card__icon project-card__icon--preview project-card__icon--not-available"
              ></i>`
        }
        ${
          this.links.github
            ? html`<a
                class="project-card__link project-card__link--github"
                href="${this.links.github}"
                aria-label="Voir le répertoire Github"
              >
                <i class="project-card__icon project-card__icon--github"></i>
              </a>`
            : html` <i
                class="project-card__icon project-card__icon--github project-card__icon--not-available"
              ></i>`
        }
        </div>
        <p class="project-card__description">${this.description}</p>
      </article>
    `;
  }
}
