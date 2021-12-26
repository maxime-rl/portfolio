import { css } from "lit";

export const sharedStyles = css`
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
    max-width: var(--max-wrapper);
  }
`;
