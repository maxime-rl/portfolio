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
    projects: { type: Array },
    isAscending: { type: Boolean },
    filteredProjectsArr: { type: Array },
    showFilters: { type: Boolean },
  };

  static styles = [sharedStyles, componentStyle];

  constructor() {
    super();
    this.projects = data.projects;
    this.isAscending = false;
    this.filteredProjectsArr = [];
    this.showFilters = false;
    this.isActive = false;
  }

  render() {
    return html`
      <div class="featured-projects-header">
        <div class="featured-projects-filter">
          <button
            class="btn-filter"
            @click=${() => {
              this.showFilters = !this.showFilters;
            }}
          >
            filtrer
            <i class="icon-filter" aria-hidden="true"></i>
          </button>
          ${this.showFilters
            ? html`
                <button @click=${() => this.getAllProjects(data.projects)}>
                  tous
                </button>
                <button
                  @click=${() =>
                    this.filteredProjects(data.projects, "frontend")}
                >
                  dev
                </button>
                <button
                  @click=${() =>
                    this.filteredProjects(data.projects, "webdesign")}
                >
                  design
                </button>
                <button
                  @click=${() =>
                    this.filteredProjects(data.projects, "gestion")}
                >
                  gestion
                </button>
              `
            : null}
        </div>
        <button
          class="btn-sort"
          aria-label="Trier les projets par date"
          @click=${() =>
            this.sortedByDate((this.isAscending = !this.isAscending))}
        >
          trier par date
          ${this.isAscending
            ? html`<i class="icon-sort" aria-hidden="true"></i>`
            : html`<i
                class="icon-sort icon-sort--desc"
                aria-hidden="true"
              ></i>`}
        </button>
      </div>
      <div class="featured-projects-wrapper">
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
    this.filteredProjectsArr = [];
    this.isAscending = false;

    for (let project of projects) {
      this.filteredProjectsArr.push(project);
      this.projects = [...this.filteredProjectsArr];
    }
  }

  filteredProjects(projects, matchTag) {
    this.filteredProjectsArr = [];
    this.isAscending = false;

    for (let project of projects) {
      if (project.tags.includes(matchTag)) {
        this.filteredProjectsArr.push(project);
        this.projects = [...this.filteredProjectsArr];
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
