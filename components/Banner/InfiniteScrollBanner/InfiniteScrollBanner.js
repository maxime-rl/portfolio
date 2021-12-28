import { LitElement, html, css } from "lit";
import { componentStyle } from "./InfiniteScrollBannerStyle";
import { sharedStyles } from "../../../helpers/sharedStyles";

/**
 * @name InfiniteScrollBanner
 * @returns {HTMLElement}
 */
export default class InfiniteScrollBanner extends LitElement {
  static styles = [sharedStyles, componentStyle];

  render() {
    return html`
      <div class="infinite-scroll">
        <div class="infinite-scroll__img"></div>
      </div>
    `;
  }
}
