import { css } from "lit";

export const sharedStyles = css`
  ::slotted(.banner-component__img) {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-1);
    box-shadow: var(--shadow);
  }

  ::slotted(.banner-component__title) {
    line-height: 2.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--bg-dark);
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
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  .page-width {
    margin: 0 auto;
    padding: var(--spacing-4);
    max-width: var(--max-wrapper);
  }

  @media (width >= 75rem) {
    .page-width {
      padding: var(--spacing-4) var(--spacing-8);
    }
  }
`;
