import { css } from "lit";

export const componentStyle = css`
  .featured-projects-wrapper {
    display: grid;
    gap: 1rem;
  }

  @media (width >= 40rem) {
    .featured-projects-wrapper {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  @media (width >= 60rem) {
    .featured-projects-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (width >= 80rem) {
    .featured-projects-wrapper {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }

  .featured-projects-header {
    display: flex;
    flex-direction: column;
    padding-bottom: var(--spacing-4);
  }

  @media (width >= 40rem) {
    .featured-projects-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .featured-projects-filter {
    display: flex;
    gap: 0.8rem;
  }

  .btn-sort,
  .btn-filter {
    display: flex;
    gap: 0.4rem;
  }

  .icon-sort,
  .icon-filter {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 1.15rem;
    height: 1.15rem;
  }

  .icon-sort {
    background-image: url(./images/icons/arrow.svg);
  }

  .icon-filter {
    background-image: url(./images/icons/filter.svg);
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
