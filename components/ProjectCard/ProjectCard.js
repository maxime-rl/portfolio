import { LitElement, html } from "lit";

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

  render() {
    return html`
      <article class="project-card">
        <img class="project-card__img" src="./assets/images/projects/${this.thumbnail}" alt="${this.name}"></img>
        <h2 class="project-card__title">${this.name}</h2>
        <p class="project-card__description">${this.description}</p>
      </article>
    `;
  }
}
