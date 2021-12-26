import { css } from "lit";

export const componentStyle = css`
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
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
  }

  .navbar__network-icon:hover {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: filter 0.3s;
  }

  .navbar__network-icon--linkedin {
    background-image: url(./images/icons/linkedin-network.svg);
  }

  .navbar__network-icon--github {
    background-image: url(./images/icons/github-network.svg);
  }

  .navbar__network-icon--codepen {
    background-image: url(./images/icons/codepen-network.svg);
  }
`;
