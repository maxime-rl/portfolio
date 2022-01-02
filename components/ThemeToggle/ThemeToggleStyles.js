import { css } from "lit";

export const componentStyles = css`
  :host {
    display: inline-block;
    position: relative;
    width: 54px;
    height: 32px;
    transform: translateY(-2px);
  }

  .theme-toggle-input {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .theme-toggle-slider {
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

  .theme-toggle-colors {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 55%;
    background: var(--bg-white);
    border: 3.5px solid var(--bg-dark);
    border-radius: 50%;
    transition: transform 300ms ease;
  }

  :host([theme="blue"]) .theme-toggle-colors {
    transform: translate(0, -50%);
  }

  :host([theme="orange"]) .theme-toggle-colors,
  .theme-toggle-input:checked .theme-toggle-colors {
    transform: translate(calc(100% - 18px), -50%);
  }

  .theme-toggle-blue,
  .theme-toggle-orange {
    display: inline-block;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
  }

  .theme-toggle-blue {
    background-color: var(--bg-primary);
  }

  .theme-toggle-orange {
    display: none;
    background-color: var(--bg-primary);
  }

  :host([theme="orange"]) .theme-toggle-blue {
    display: none;
  }

  :host([theme="orange"]) .theme-toggle-orange {
    display: inline-block;
  }
`;
