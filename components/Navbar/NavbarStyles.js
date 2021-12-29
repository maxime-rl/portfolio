import { css } from "lit";

export const componentStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg-white);
    box-shadow: var(--shadow);
  }

  .navbar__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
