import { css } from "lit";

export const componentStyles = css`
  .wrapper {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 5;
    transition: opacity 0.2s ease-in;
  }

  .wrapper:not(.open) {
    visibility: hidden;
  }

  .wrapper.open {
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .overlay {
    position: relative;
    background: var(--bg-white);
    border-radius: var(--radius-2);
    height: 100%;
    width: 100%;
  }

  .dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - var(--spacing-6));
    height: calc(100% - var(--spacing-6));
  }

  .dialog h1 {
    margin: 0 0 10px;
  }

  .dialog__btn {
    position: absolute;
    display: inline-block;
    padding: 0;
    top: 0;
    right: 0;
  }

  .dialog__btn-icon {
    display: inline-block;
    background-image: url(./images/icons/close.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 0.8rem;
    height: 0.8rem;
  }

  .dialog__btn:hover .dialog__btn-icon {
    filter: invert(18%) sepia(82%) saturate(3471%) hue-rotate(354deg)
      brightness(88%) contrast(86%);
    transition: filter 0.2s;
  }
`;
