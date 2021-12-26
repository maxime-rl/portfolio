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
  }

  .footer__logo {
    object-fit: contain;
    width: 4rem;
  }

  .footer__description {
    margin: 0;
    gap: var(--spacing-3);
    font-weight: 500;
    font-style: normal;
    font-size: 0.7rem;
    line-height: 0;
  }

  @media (width >= 75rem) {
    .footer__description {
      gap: var(--spacing-4);
    }
  }
`;
