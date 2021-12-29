import { LitElement, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
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
    enabledAll: { type: Boolean },
    enabledFrontend: { type: Boolean },
    enabledWebdesign: { type: Boolean },
    enabledGestion: { type: Boolean },
  };

  static styles = [
    sharedStyles,
    componentStyle,
    css`
      .enabledAll,
      .enabledFrontend,
      .enabledWebdesign,
      .enabledGestion {
        background-color: var(--bg-primary);
        color: var(--bg-white);
      }
    `,
  ];

  constructor() {
    super();
    this.projects = data.projects;
    this.isAscending = false;
    this.filteredProjectsArr = [];
    this.showFilters = false;
    this.enabledAll = true;
    this.enabledFrontend = false;
    this.enabledWebdesign = false;
    this.enabledGestion = false;
  }

  render() {
    return html`
      <div class="featured-projects-header">
        <div class="featured-projects-filter">
          <button
            class="btn-toggle-filters"
            @click=${() => {
              this.showFilters = !this.showFilters;
            }}
          >
            filtrer
            <i class="icon-filter" aria-hidden="true"></i>
          </button>
          ${this.showFilters
            ? html`
                <button
                  class="btn-filter ${classMap({
                    enabledAll: this.enabledAll,
                  })}"
                  @click=${() => this.getAllProjects(data.projects)}
                >
                  tous
                </button>
                <button
                  class="btn-filter ${classMap({
                    enabledFrontend: this.enabledFrontend,
                  })}"
                  @click=${() =>
                    this.filteredProjects(data.projects, "frontend")}
                >
                  frontend
                </button>
                <button
                  class="btn-filter ${classMap({
                    enabledWebdesign: this.enabledWebdesign,
                  })}"
                  @click=${() =>
                    this.filteredProjects(data.projects, "webdesign")}
                >
                  webdesign
                </button>
                <button
                  class="btn-filter ${classMap({
                    enabledGestion: this.enabledGestion,
                  })}"
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
    this.toggleEnabledAll();
    if (this.isAscending) {
      this.sortedByDate((this.isAscending = !this.isAscending));
    }

    for (let project of projects) {
      this.filteredProjectsArr.push(project);
      this.projects = [...this.filteredProjectsArr];
    }
  }

  filteredProjects(projects, matchTag) {
    this.filteredProjectsArr = [];
    if (this.isAscending) {
      this.sortedByDate((this.isAscending = !this.isAscending));
    }
    if (matchTag === "frontend") {
      this.toggleEnabledFrontend();
    } else if (matchTag === "webdesign") {
      this.toggleEnabledWebdesign();
    } else if (matchTag === "gestion") {
      this.toggleEnabledGestion();
    }

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

  toggleEnabledAll() {
    this.enabledAll = !this.enabledAll;
    this.enabledFrontend = false;
    this.enabledWebdesign = false;
    this.enabledGestion = false;
  }

  toggleEnabledFrontend() {
    this.enabledFrontend = !this.enabledFrontend;
    this.enabledAll = false;
    this.enabledWebdesign = false;
    this.enabledGestion = false;
  }

  toggleEnabledWebdesign() {
    this.enabledWebdesign = !this.enabledWebdesign;
    this.enabledAll = false;
    this.enabledFrontend = false;
    this.enabledGestion = false;
  }

  toggleEnabledGestion() {
    this.enabledGestion = !this.enabledGestion;
    this.enabledAll = false;
    this.enabledFrontend = false;
    this.enabledWebdesign = false;
  }
}
