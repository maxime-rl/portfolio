import { LitElement, html } from "lit";

/**
 * @name HomePage
 * @returns {{HTMLElement}}
 */
export class HomePage extends LitElement {
  render() {
    return html`
      <navbar-component></navbar-component>
      <featured-projects></featured-projects>
    `;
  }
}
