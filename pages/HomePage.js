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
      <main class="page-width">
        <featured-projects></featured-projects>
      </main>
      <btn-top></btn-top>
      <infinite-scroll></infinite-scroll>
      <footer-component></footer-component>
    `;
  }
}
