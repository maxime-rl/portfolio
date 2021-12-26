import { css } from "lit";

export const componentStyle = css`
  .footer {
    background: var(--bg-white);
    box-shadow: var(--shadow);
  }

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-dark);
  }

  .footer__description {
    margin: 0;
    font-weight: 500;
    font-style: normal;
    font-size: 0.7rem;
    line-height: 0;
    color: var(--bg-white);
  }
`;
