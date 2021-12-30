import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { componentStyles } from "./ModalStyles";
import { sharedStyles } from "../../helpers/sharedStyles";

export default class Modal extends LitElement {
  static properties = {
    open: { type: Boolean },
    title: { type: String },
    text: { type: String },
    images: { type: Array },
  };

  static styles = [sharedStyles, componentStyles];

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <div class="${classMap({ wrapper: true, open: this.open })}">
        <div class="overlay" @click="${this.close}"></div>
        <div class="dialog">
          <button class="dialog__btn" @click=${this.handleClick}>
            <span class="dialog__btn-icon"></span>
          </button>
          <h3>${this.title}</h3>
          <p class="content">${this.text}</p>
          <div class="test">${this.images}</div>
        </div>
      </div>
    `;
  }

  close() {
    this.open = false;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent("button-click"));
    this.close();
  }
}
