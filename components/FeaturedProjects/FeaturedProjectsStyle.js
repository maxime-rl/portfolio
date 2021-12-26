import { css } from "lit";

export const componentStyle = css`
  .featured-projects {
    display: grid;
    gap: 1rem;
  }

  @media (width >= 40rem) {
    .featured-projects {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  @media (width >= 60rem) {
    .featured-projects {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (width >= 80rem) {
    .featured-projects {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .sort-by-date-wrapper {
    display: flex;
  }

  .icon-sort {
    display: inline-block;
    background-image: url(./images/icons/arrow.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
  }

  .icon-sort--desc {
    transform: rotate(180deg);
  }

  .icon-sort:hover {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: filter 0.3s;
  }
`;
