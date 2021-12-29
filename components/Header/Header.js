import { LitElement, html } from "lit";
import { componentStyles } from "./HeaderStyles";
import { sharedStyles } from "../../helpers/sharedStyles";

/**
 * @name Header
 * @returns {HTMLElement}
 */
export default class Header extends LitElement {
  static styles = [sharedStyles, componentStyles];

  render() {
    return html`
      <header class="header page-width">
        <h1 class="header__title">
          <span><span>Bienvenue</span></span>
          <span><span>je suis Maxime,</span></span>
          <span><span>Développeur Frontend</span></span>
          <span><span>& Webdesigner</span></span>
        </h1>
        <img class="header__img" src="./images/profile-photo.jpg" alt="photo de profil"></img>
      </header>
    `;
  }
}