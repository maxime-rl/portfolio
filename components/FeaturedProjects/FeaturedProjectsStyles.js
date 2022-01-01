import { css } from "lit";

export const componentStyles = css`
  .featured-projects-wrapper {
    display: grid;
    gap: 1rem;
  }

  @media screen and (min-width: 40rem) {
    .featured-projects-wrapper {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  @media screen and (min-width: 60rem) {
    .featured-projects-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 80rem) {
    .featured-projects-wrapper {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }

  .featured-projects-header {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 33rem) {
    .featured-projects-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .featured-projects-filter {
    display: flex;
    flex-wrap: wrap;
    order: 1;
    padding-bottom: var(--spacing-4);
    gap: 0.8rem;
  }

  @media screen and (min-width: 33rem) {
    .featured-projects-filter {
      order: 0;
      padding: 0;
    }
  }

  .btn-sort,
  .btn-toggle-filters {
    display: flex;
    width: fit-content;
    gap: 0.4rem;
    opacity: 0.7;
  }

  .btn-sort {
    padding-bottom: var(--spacing-4);
  }

  .btn-sort:hover,
  .btn-toggle-filters:hover {
    color: var(--bg-primary);
    opacity: 1;
    transition: all 0.2s;
  }

  .btn-sort:hover .icon-sort,
  .btn-toggle-filters:hover .icon-filter {
    filter: var(--svg-hover);
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
