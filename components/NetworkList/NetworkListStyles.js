import { css } from "lit";

export const componentStyles = css`
  .network-list {
    display: flex;
    margin: 0;
    gap: var(--spacing-3);
    line-height: 0;
  }

  @media screen and (min-width: 75rem) {
    .network-list {
      gap: var(--spacing-4);
    }
  }

  .network-list__icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
  }

  .network-list__icon:hover {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: filter 0.2s;
  }

  .network-list__icon--linkedin {
    background-image: url(./images/icons/linkedin-network.svg);
  }

  .network-list__icon--github {
    background-image: url(./images/icons/github-network.svg);
  }

  .network-list__icon--codepen {
    background-image: url(./images/icons/codepen-network.svg);
  }
`;
