import { LitElement, html } from "lit";

/**
 * @name HomePage
 * @returns {{HTMLElement}}
 */
export class HomePage extends LitElement {
  render() {
    return html`
      <navbar-component></navbar-component>
      <main>
        <featured-projects></featured-projects>
      </main>
      <footer-component></footer-component>
    `;
  }
}
