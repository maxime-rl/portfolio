import { css } from "lit";

export const btnStyles = css`
  .btn {
    padding: 0 var(--spacing-2);
    height: 1.3rem;
    background-color: var(--bg-white);
    color: var(--bg-primary);
    border-radius: var(--radius-1);
    box-shadow: var(--shadow);
    transition: all 0.2s;
  }
  .btn:hover {
    background-color: var(--bg-primary);
    color: var(--bg-white);
    transition: all 0.2s;
  }
`;

export default btnStyles;
