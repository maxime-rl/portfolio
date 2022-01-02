import { LitElement, html, css } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { componentStyles } from "./FeaturedProjectsStyles";
import { sharedStyles, btnStyles } from "../../helpers";

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
    btnStyles,
    componentStyles,
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
      <section class="featured-projects">
        <header>
          <h2>
            Projets
            <span class="featured-projects__length">
              (${this.projects.length})
            </span>
          </h2>
          <div class="featured-projects__filters-and-sort">
            <div class="featured-projects__filter">
              <button
                class="btn-toggle-filters focus-visible"
                aria-label="Afficher les filtres"
                title="Afficher ou cacher les filtres"
                @click=${() => {
                  this.showFilters = !this.showFilters;
                }}
              >
                filtrer
                <span class="icon-filter" aria-hidden="true"></span>
              </button>
              ${this.showFilters
                ? html`
                    <button
                      class="btn focus-visible ${classMap({
                        enabledAll: this.enabledAll,
                      })}"
                      aria-label="Filtrer et afficher tous les projets"
                      title="Filtrer et afficher tous les projets"
                      @click=${() => this.getAllProjects(data.projects)}
                    >
                      tous
                    </button>
                    <button
                      class="btn focus-visible ${classMap({
                        enabledFrontend: this.enabledFrontend,
                      })}"
                      aria-label="Filtrer et afficher les projets frontend"
                      title="Filtrer et afficher les projets frontend"
                      @click=${() =>
                        this.filteredProjects(data.projects, "frontend")}
                    >
                      frontend
                    </button>
                    <button
                      class="btn focus-visible ${classMap({
                        enabledWebdesign: this.enabledWebdesign,
                      })}"
                      aria-label="Filtrer et afficher les projets webdesign"
                      title="Filtrer et afficher les projets webdesign"
                      @click=${() =>
                        this.filteredProjects(data.projects, "webdesign")}
                    >
                      webdesign
                    </button>
                    <button
                      class="btn focus-visible ${classMap({
                        enabledGestion: this.enabledGestion,
                      })}"
                      aria-label="Filtrer et afficher les projets gestion"
                      title="Filtrer et afficher les projets gestion"
                      @click=${() =>
                        this.filteredProjects(data.projects, "gestion")}
                    >
                      gestion
                    </button>
                  `
                : null}
            </div>
            <button
              class="btn-sort focus-visible"
              aria-label="Trier les projets par date"
              title="Trier les projets par date"
              @click=${() =>
                this.sortedByDate((this.isAscending = !this.isAscending))}
            >
              trier par date
              ${this.isAscending
                ? html`<span class="icon-sort" aria-hidden="true"></span>`
                : html`<span
                    class="icon-sort icon-sort--desc"
                    aria-hidden="true"
                  ></span>`}
            </button>
          </div>
        </header>
        <div class="featured-projects__wrapper">
          ${this.projects.map(
            (project) => html` <project-card
              id=${project.id}
              .name=${project.name}
              .date=${project.date}
              .tags=${project.tags}
              .shortDescription=${project.shortDescription}
              .description=${project.description}
              .thumbnail=${project.thumbnail}
              .alt=${project.alt}
              .medias=${project.medias}
              .links=${project.links}
            >
            </project-card>`
          )}
        </div>
      </section>
    `;
  }

  getAllProjects(projects) {
    this.filteredProjectsArr = [];
    this.toggleEnabledFilter();

    for (let project of projects) {
      this.filteredProjectsArr.push(project);
      this.projects = [...this.filteredProjectsArr];
    }

    if (this.isAscending) {
      this.sortedByDate(this.isAscending);
    } else {
      this.projects = [
        ...this.projects.sort((a, b) => b.date.localeCompare(a.date)),
      ];
    }
  }

  filteredProjects(projects, matchTag) {
    this.filteredProjectsArr = [];

    switch (matchTag) {
      case "frontend":
        this.toggleEnabledFilter("frontend");
        break;
      case "webdesign":
        this.toggleEnabledFilter("webdesign");
        break;
      case "gestion":
        this.toggleEnabledFilter("gestion");
        break;
    }

    for (let project of projects) {
      if (project.tags.includes(matchTag)) {
        this.filteredProjectsArr.push(project);
        this.projects = [...this.filteredProjectsArr];
      }
    }

    if (this.isAscending) {
      this.sortedByDate(this.isAscending);
    } else {
      this.projects = [
        ...this.projects.sort((a, b) => b.date.localeCompare(a.date)),
      ];
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

  toggleEnabledFilter(filter) {
    switch (filter) {
      case "frontend":
        this.enabledFrontend = !this.enabledFrontend;
        this.resetFilters(filter);
        break;
      case "webdesign":
        this.enabledWebdesign = !this.enabledWebdesign;
        this.resetFilters(filter);
        break;
      case "gestion":
        this.enabledGestion = !this.enabledGestion;
        this.resetFilters(filter);
        break;
      default:
        this.enabledAll = !this.enabledAll;
        this.resetFilters(filter);
    }
  }

  resetFilters(filter) {
    switch (filter) {
      case "frontend":
        this.enabledAll = false;
        this.enabledWebdesign = false;
        this.enabledGestion = false;
        break;
      case "webdesign":
        this.enabledAll = false;
        this.enabledFrontend = false;
        this.enabledGestion = false;
        break;
      case "gestion":
        this.enabledAll = false;
        this.enabledFrontend = false;
        this.enabledWebdesign = false;
        break;
      default:
        this.enabledFrontend = false;
        this.enabledWebdesign = false;
        this.enabledGestion = false;
    }
  }
}
