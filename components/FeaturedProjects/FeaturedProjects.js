import { LitElement, html } from "lit";

import data from "../../assets/data.json";

/**
 * @name FeaturedProjects
 * @returns {HTMLElement}
 */
export default class FeaturedProjects extends LitElement {
  static properties = {
    projects: { type: Object },
  };

  constructor() {
    super();
    this.projects = data.projects;
  }

  render() {
    return html`
      <section class="featured-projects">
        ${this.projects.map(
          (project) => html` <project-card
            .id=${project.id}
            .name=${project.name}
            .date=${project.date}
            .tags=${project.tags}
            .description=${project.description}
            .thumbnail=${project.thumbnail}
            .links=${project.links}
          >
          </project-card>`
        )}
      </section>
    `;
  }
}
