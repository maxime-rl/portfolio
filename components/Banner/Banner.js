import { LitElement, html } from "lit";
import { sharedStyles } from "../../helpers/sharedStyles";

export default class Banner extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
