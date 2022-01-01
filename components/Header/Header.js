import { LitElement, html } from "lit";
import { componentStyles } from "./HeaderStyles";
import { sharedStyles, keyframesStyles } from "../../helpers";

/**
 * @name Header
 * @returns {HTMLElement}
 */
export default class Header extends LitElement {
  static styles = [sharedStyles, keyframesStyles, componentStyles];

  render() {
    return html`
      <header class="header">
        <div class="header__wrapper page-width">
          <h1 class="header__title">
          <span><span>Bienvenue</span></span>
          <span><span>je suis Maxime,</span></span>
          <span><span><strong class="header__title-strong">Développeur</strong> Frontend</span></span>
          <span><span>& <strong class="header__title-strong">Webdesigner</strong></span></span>
          </h1>
          <img 
            class="header__img" 
            src="./images/profile-photo.png" 
            alt="Portrait de face en plan buste sur fond blanc, tee-shirt orange et lunettes de vue noir" 
            width="1000" height="450">
          </img>
        </div>
      </header>
    `;
  }
}
