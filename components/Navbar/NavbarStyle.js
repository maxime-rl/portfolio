import { css } from "lit";

export const componentStyle = css`
  .navbar {
    position: sticky;
    top: 0;
    background: var(--bg-white);
    box-shadow: var(--shadow);
  }

  .navbar__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-4);
  }

  @media (width >= 75rem) {
    .navbar__wrapper {
      padding: var(--spacing-4) var(--spacing-8);
    }
  }

  .navbar__logo {
    object-fit: contain;
    width: 4rem;
  }

  .navbar__networks-list {
    display: flex;
    margin: 0;
    gap: var(--spacing-3);
    line-height: 0;
  }

  @media (width >= 75rem) {
    .navbar__networks-list {
      gap: var(--spacing-4);
    }
  }

  .navbar__network-icon {
    width: 2rem;
  }
`;
