import { css } from "lit";

export const tagStyles = css`
  .tag {
    padding: 0 var(--spacing-2);
    height: 1.3rem;
    font-size: var(--font-size-1);
    font-weight: 600;
    color: var(--bg-dark);
    border-radius: var(--radius-1);
    border: 1px solid var(--bg-primary);
    transition: all 0.2s;
  }
`;

export default tagStyles;
