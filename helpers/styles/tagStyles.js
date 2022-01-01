import { css } from "lit";

export const tagStyles = css`
  .tag {
    padding: 0 var(--spacing-2);
    height: 1.3rem;
    font-size: var(--font-size-1);
    line-height: initial;
    background-color: var(--bg-primary-lighten);
    color: var(--bg-primary);
    border-radius: var(--radius-1);
  }

  .tag--primary {
    background: var(--bg-primary);
    color: var(--bg-white);
  }
`;

export default tagStyles;
