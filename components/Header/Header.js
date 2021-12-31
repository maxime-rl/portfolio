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
      <header class="header">
        <div class="header__wrapper page-width">
          <h1 class="header__title">
          <span><span>Bienvenue</span></span>
          <span><span>je suis Maxime,</span></span>
          <span><span>Développeur Frontend</span></span>
          <span><span>& Webdesigner</span></span>
          </h1>
          <img 
            class="header__img" 
            src="./images/profile-photo.png" 
            alt="photo de profil" 
            width="1000" height="450">
          </img>
        </div>
      </header>
    `;
  }
}
