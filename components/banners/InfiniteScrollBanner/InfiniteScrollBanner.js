import { LitElement, html, css } from "lit";
import { componentStyles } from "./InfiniteScrollBannerStyles";
import { sharedStyles } from "../../../helpers/sharedStyles";

/**
 * @name InfiniteScrollBanner
 * @returns {HTMLElement}
 */
export default class InfiniteScrollBanner extends LitElement {
  static styles = [sharedStyles, componentStyles];

  render() {
    return html`
      <div class="infinite-scroll page-width">
        <div class="infinite-scroll__img"></div>
      </div>
    `;
  }
}
