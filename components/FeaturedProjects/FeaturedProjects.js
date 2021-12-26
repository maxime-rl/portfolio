import { LitElement, html } from "lit";
import { componentStyle } from "./FeaturedProjectsStyle";
import { sharedStyles } from "../../helpers/sharedStyles";

import data from "../../assets/data.json";

/**
 * @name FeaturedProjects
 * @returns {HTMLElement}
 */
export default class FeaturedProjects extends LitElement {
  static properties = {
    projects: { type: Object },
    isAscending: { type: Boolean },
    tags: { attribute: "tags" },
  };

  static styles = [sharedStyles, componentStyle];

  constructor() {
    super();
    this.projects = data.projects;
    this.isAscending = false;
  }

  render() {
    return html`
      <div class="sort-by-date-wrapper">
        trier par date :
        <button
          aria-label="Trier les projets par date"
          @click=${() =>
            this.sortByDate((this.isAscending = !this.isAscending))}
        >
          ${this.isAscending
            ? html`<i class="icon-sort" aria-hidden="true"></i>`
            : html`<i
                class="icon-sort icon-sort--desc"
                aria-hidden="true"
              ></i>`}
        </button>
      </div>
      <div class="featured-projects">
        ${this.projects.map(
          (project) => html` <project-card
            id=${project.id}
            tags=${project.tags.map((tag) =>
              tag.toLowerCase().replace(/\s/g, "-")
            )}
            .name=${project.name}
            .date=${project.date}
            .description=${project.description}
            .thumbnail=${project.thumbnail}
            .links=${project.links}
          >
          </project-card>`
        )}
      </div>
    `;
  }

  sortByDate(isAscending) {
    if (isAscending) {
      this.projects = [
        ...this.projects.sort((a, b) => a.date.localeCompare(b.date)),
      ];
    } else if (!isAscending) {
      this.projects = [
        ...this.projects.sort((a, b) => b.date.localeCompare(a.date)),
      ];
    }
  }
}
