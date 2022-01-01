import { LitElement, html, css } from "lit";
import { componentStyles } from "./InfiniteScrollBannerStyles";
import { sharedStyles, keyframesStyles } from "../../helpers";

/**
 * @name InfiniteScrollBanner
 * @returns {HTMLElement}
 */
export default class InfiniteScrollBanner extends LitElement {
  static styles = [sharedStyles, keyframesStyles, componentStyles];

  render() {
    return html`
      <div class="infinite-scroll">
        <div class="infinite-scroll__img"></div>
      </div>
    `;
  }
}
