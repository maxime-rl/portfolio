import { css } from "lit";

export const componentStyles = css`
  .footer {
    background: var(--bg-white);
    box-shadow: var(--shadow);
  }

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__description {
    margin: 0;
    font-style: normal;
    font-size: var(--font-size-1);
    line-height: 0;
  }
`;
