import { css } from "lit";

export const sharedStyles = css`
  ::slotted(.banner-component__img) {
    margin-top: var(--spacing-4);
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-2);
    box-shadow: var(--shadow);
  }

  ::slotted(.banner-component__title) {
    line-height: 2.3rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--bg-dark);
  }

  h1 {
    font-size: var(--spacing-9);
  }

  @media (width >= 80rem) {
    h1 {
      font-size: var(--spacing-10);
      line-height: 3rem;
    }
  }

  h2 {
    font-size: var(--font-size-7);
  }

  @media (width >= 80rem) {
    h2 {
      font-size: var(--font-size-9);
    }
  }

  img,
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  button {
    font-size: inherit;
    text-decoration: inherit;
    background: inherit;
    border: inherit;
    cursor: pointer;
  }

  .page-width {
    margin: 0 auto;
    padding: var(--spacing-4);
    max-width: var(--max-wrapper);
  }

  @media (width >= 80rem) {
    .page-width {
      padding: var(--spacing-4) var(--spacing-8);
    }
  }

  .focus-visible:focus-visible {
    border: var(--focus-visible);
  }

  .site__logo {
    object-fit: contain;
    width: 3.7rem;
  }
`;
