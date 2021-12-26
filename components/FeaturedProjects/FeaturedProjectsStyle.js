import { css } from "lit";

export const componentStyle = css`
  .featured-projects {
    display: grid;
    padding: var(--spacing-4);
    gap: 1rem;
  }

  @media (width >= 40rem) {
    .featured-projects {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  @media (width >= 60rem) {
    .featured-projects {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (width >= 75rem) {
    .featured-projects {
      padding: var(--spacing-4) var(--spacing-8);
    }
  }

  @media (width >= 80rem) {
    .featured-projects {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
