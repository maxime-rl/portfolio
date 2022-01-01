import { LitElement, html } from "lit";
import { sharedStyles } from "../helpers/styles/sharedStyles";

/**
 * @name HomePage
 * @returns {HTMLElement}
 */
export class HomePage extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <navbar-component></navbar-component>
      <header-component></header-component>
      <main>
        <section class="page-width">
          <h2>Projets</h2>
          <featured-projects></featured-projects>
        </section>
      </main>
      <btn-top></btn-top>
      <infinite-scroll></infinite-scroll>
      <footer-component></footer-component>
    `;
  }
}
