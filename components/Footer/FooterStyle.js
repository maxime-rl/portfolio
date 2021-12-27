import { css } from "lit";

export const componentStyle = css`
  .footer {
    background: var(--bg-dark);
    box-shadow: var(--shadow);
  }

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__description {
    margin: 0;
    font-weight: 500;
    font-style: normal;
    font-size: var(--font-size-1);
    line-height: 0;
    color: var(--bg-white);
  }
`;
