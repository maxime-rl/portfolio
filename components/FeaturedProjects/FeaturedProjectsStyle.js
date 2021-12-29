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
  .btn-toggle-filters {
    display: flex;
    gap: 0.4rem;
  }

  .btn-sort:hover,
  .btn-toggle-filters:hover {
    color: var(--bg-primary);
    transition: all 0.2s;
  }

  .btn-sort:hover .icon-sort,
  .btn-toggle-filters:hover .icon-filter {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: all 0.2s;
  }

  .btn-filter {
    padding: 0 0.5rem 0.11rem 0.5rem;
    line-height: 0;
    background-color: var(--bg-white);
    color: var(--bg-primary);
    border-radius: var(--radius-1);
    box-shadow: var(--shadow);
    transition: all 0.2s;
  }

  .btn-filter:hover {
    background-color: var(--bg-primary);
    color: var(--bg-white);
    transition: all 0.2s;
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
`;
