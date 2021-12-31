import { css } from "lit";

export const componentStyles = css`
  .wrapper {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 5;
    transition: opacity 0.1s ease-in;
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
    width: calc(100% - var(--spacing-6));
    height: calc(100% - var(--spacing-6));
  }

  .dialog__content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: var(--spacing-6);
  }

  .dialog__description {
    padding-right: var(--spacing-4);
    font-weight: 300;
  }

  .dialog__content::-webkit-scrollbar {
    width: 5px;
  }

  .dialog__content::-webkit-scrollbar-track {
    background: var(--bg-primary-lighten);
    border-radius: var(--radius-2);
  }

  .dialog__content::-webkit-scrollbar-thumb {
    background: var(--bg-dark-lighten);
    border-radius: var(--radius-2);
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
    filter: invert(30%) sepia(67%) saturate(3969%) hue-rotate(346deg)
      brightness(93%) contrast(106%);
    transition: filter 0.2s;
  }

  .dialog__video-wrapper {
    width: 100%;
    margin: auto;
  }
  .dialog__video {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    border-radius: var(--radius-1);
  }

  .dialog__video iframe,
  .dialog__video object,
  .dialog__video embed {
    position: absolute;
    top: 0;
    left: -2px;
    width: 100%;
    height: 100%;
  }
`;
