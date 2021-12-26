import { LitElement, html } from "lit";
import { sharedStyles } from "../helpers/sharedStyles";

/**
 * @name HomePage
 * @returns {{HTMLElement}}
 */
export class HomePage extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <navbar-component></navbar-component>
      <header class="page-width">
        <banner-component>
          <h1 class="banner-component__title">Bienvenue je suis Maxime, Développeur Frontend & Webdesigner</h1>
          <img class="banner-component__img" src="./assets/images/profile-photo.jpg" alt="photo de profil"></img>
        </banner-component>
      </header>
      <main>
        <section class="page-width">
          <h2>Projets</h2>
          <featured-projects></featured-projects>
        </section>
      </main>
      <footer-component></footer-component>
    `;
  }
}
