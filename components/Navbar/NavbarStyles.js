import { css } from "lit";

export const componentStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg-white);
    box-shadow: var(--shadow);
  }

  @media screen and (min-width: 70rem) {
    .navbar {
      margin-bottom: var(--spacing-7);
    }
  }

  @media screen and (min-width: 70rem) {
    .navbar {
      margin-bottom: var(--spacing-10);
    }
  }

  .navbar__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
