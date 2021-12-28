import { css } from "lit";

export const componentStyle = css`
  .infinite-scroll {
    overflow: hidden;
    padding: var(--spacing-4) 0;
  }

  .infinite-scroll__img {
    background: url(./images/icons/tech-banner.svg) repeat-x;
    background-position: center;
    background-size: contain;
    height: 2rem;
    width: 7680px;
    animation: slide 160s linear infinite;
  }

  @media (width >= 40rem) {
    .infinite-scroll__img {
      height: 3rem;
      animation: slide 180s linear infinite;
    }
  }

  @media (width >= 80rem) {
    .infinite-scroll {
      padding: var(--spacing-8) 0;
    }

    .infinite-scroll__img {
      animation: slide 200s linear infinite;
    }
  }

  @keyframes slide {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-3840px);
    }
  }
`;
