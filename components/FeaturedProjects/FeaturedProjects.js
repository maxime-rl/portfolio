import { LitElement, html, css } from "lit";
import { componentStyle } from "./FeaturedProjectsStyle";
import { sharedStyles } from "../../helpers/sharedStyles";

import data from "../../assets/data.json";

/**
 * @name FeaturedProjects
 * @returns {HTMLElement}
 */
export default class FeaturedProjects extends LitElement {
  static properties = {
    projects: { type: Array },
    isAscending: { type: Boolean },
    filteredProjects: { type: Array },
  };

  static styles = [sharedStyles, componentStyle];

  constructor() {
    super();
    this.projects = data.projects;
    this.isAscending = false;
    this.filteredProjects = [];
  }

  render() {
    return html`
      <div class="sort-by-date-wrapper">
        trier par date :
        <button
          aria-label="Trier les projets par date"
          @click=${() =>
            this.sortedByDate((this.isAscending = !this.isAscending))}
        >
          ${this.isAscending
            ? html`<i class="icon-sort" aria-hidden="true"></i>`
            : html`<i
                class="icon-sort icon-sort--desc"
                aria-hidden="true"
              ></i>`}
        </button>
      </div>
      <div>
        filtrer par :
        <button @click=${() => this.getAllProjects(data.projects)}>all</button>
        <button @click=${() => this.getFrontendProjects(data.projects)}>
          frontend
        </button>
        <button @click=${() => this.getWebdesignProjects(data.projects)}>
          webdesign
        </button>
      </div>
      <div>${this.projects.length}</div>
      <div class="featured-projects">
        ${this.projects.map(
          (project) => html` <project-card
            id=${project.id}
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

  getAllProjects(projects) {
    this.filteredProjects = [];
    for (let project of projects) {
      this.filteredProjects.push(project);
      this.projects = [...this.filteredProjects];
    }
  }

  getFrontendProjects(projects) {
    this.filteredProjects = [];
    for (let project of projects) {
      if (project.tags.includes("frontend")) {
        this.filteredProjects.push(project);
        this.projects = [...this.filteredProjects];
      }
    }
  }

  getWebdesignProjects(projects) {
    this.filteredProjects = [];
    for (let project of projects) {
      if (project.tags.includes("webdesign")) {
        this.filteredProjects.push(project);
        this.projects = [...this.filteredProjects];
      }
    }
  }

  sortedByDate(isAscending) {
    if (isAscending) {
      this.projects = [
        ...this.projects.sort((a, b) => a.date.localeCompare(b.date)),
      ];
    } else {
      this.projects = [...this.projects.reverse()];
    }
  }
}
