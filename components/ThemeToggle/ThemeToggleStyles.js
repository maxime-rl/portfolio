import { css } from "lit";

export const componentStyles = css`
  :host {
    display: inline-block;
    position: relative;
    width: 54px;
    height: 32px;
    transform: translateY(-2px);
  }

  .theme-toggle__input {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .theme-toggle__slider {
    position: absolute;
    width: 84%;
    height: 14px;
    top: 63%;
    transform: translateY(-50%);
    border-radius: 1rem;
    background-color: var(--bg-dark);
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .theme-toggle__color-ship {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 60%;
    background: var(--bg-white);
    border: 3.5px solid var(--bg-dark);
    border-radius: 50%;
    transition: transform 300ms ease;
  }

  :host([theme="blue"]) .theme-toggle__color-ship {
    transform: translate(0, -50%);
  }

  .theme-toggle__input:checked ~ .theme-toggle__color-ship,
  :host([theme="orange"]) .theme-toggle__color-ship {
    transform: translate(calc(100% - 18px), -50%);
  }

  .theme-toggle__blue-ship,
  .theme-toggle__orange-ship {
    display: inline-block;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
  }

  .theme-toggle__blue-ship {
    background-color: var(--bg-primary);
  }

  .theme-toggle__orange-ship {
    display: none;
    background-color: var(--bg-primary);
  }

  :host([theme="orange"]) .theme-toggle__blue-ship {
    display: none;
  }

  :host([theme="orange"]) .theme-toggle__orange-ship {
    display: inline-block;
  }
`;
