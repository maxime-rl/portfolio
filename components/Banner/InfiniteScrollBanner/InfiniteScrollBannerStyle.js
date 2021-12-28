import { css } from "lit";

export const componentStyle = css`
  .infinite-scroll {
    overflow: hidden;
  }

  .infinite-scroll__list {
    overflow: hidden;
    display: flex;
    width: 3000px;
    margin: 0 auto;
    animation: slide 15s linear infinite;
  }

  .infinite-scroll__item {
    background-image: url(./images/icons/tech-banner.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 100%;
    height: 5rem;
  }

  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-1750px, 0, 0); /* The image width */
    }
  }
`;
