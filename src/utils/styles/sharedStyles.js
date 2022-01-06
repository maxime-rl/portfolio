import { css } from "lit";

export const sharedStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--bg-dark);
  }

  h1 {
    font-size: var(--font-size-5);
    line-height: 1.8rem;
  }

  @media screen and (min-width: 20rem) {
    h1 {
      font-size: var(--font-size-6);
      line-height: 2rem;
    }
  }

  h2 {
    font-size: var(--font-size-5);
  }

  @media screen and (min-width: 40rem) {
    h2 {
      font-size: var(--font-size-6);
    }
  }

  @media screen and (min-width: 80rem) {
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
    font-size: revert;
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

  @media screen and (min-width: 80rem) {
    .page-width {
      padding: var(--spacing-4) var(--spacing-8);
    }
  }

  .focus-visible:focus-visible {
    outline: var(--focus-visible);
  }

  .site__logo {
    object-fit: contain;
    width: 3.7rem;
  }

  .sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    -webkit-clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
`;

export default sharedStyles;
