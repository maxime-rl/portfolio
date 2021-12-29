import { LitElement, html } from "lit";
import { sharedStyles } from "../helpers/sharedStyles";

/**
 * @name HomePage
 * @returns {HTMLElement}
 */
export class HomePage extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <navbar-component></navbar-component>
      <header class="page-width">
        <banner-component>
          <h1>Bienvenue je suis Maxime, Développeur Frontend & Webdesigner</h1>
          <img class="banner-component__img" src="./images/profile-photo.jpg" alt="photo de profil"></img>
        </banner-component>
      </header>
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
