import { css } from "lit";

export const componentStyles = css`
  .header {
    position: relative;
  }

  @media (width >= 40rem) {
    .header {
      position: relative;
      display: grid;
      grid-template-columns: repeat(14, 1fr);
    }
  }

  .header__img {
    margin-top: -5rem;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-2);
  }

  @media (width >= 40rem) {
    .header__img {
      grid-column: 6/15;
      margin: 0;
    }
  }

  @media (width >= 50rem) {
    .header__img {
      max-height: 350px;
    }
  }

  @media (width >= 65rem) {
    .header__img {
      max-height: 430px;
    }
  }

  @media (width >= 25rem) {
    .header__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: var(--font-size-7);
      line-height: 2.3rem;
    }
  }

  .header__title {
    background: white;
    margin-top: -20px;
    padding: 2rem 1rem 7rem 1.5rem;
    width: 100%;
    margin-left: -1.5rem;
    margin-bottom: 0;
  }

  @media (width >= 30rem) {
    .header__title {
      font-size: var(--font-size-8);
      line-height: 2.4rem;
    }
  }

  @media (width >= 35rem) {
    .header__title {
      font-size: var(--font-size-9);
      line-height: 2.7rem;
    }
  }

  @media (width >= 40rem) {
    .header__title {
      position: absolute;
      margin: 0;
      padding: var(--spacing-6) var(--spacing-4);
      width: auto;
      top: 50%;
      left: var(--spacing-4);
      transform: translateY(-50%);
      font-size: var(--font-size-8);
      line-height: 2.4rem;
      background: var(--bg-white);
      border-radius: var(--radius-2);
    }
  }

  @media (width >= 55rem) {
    .header__title {
      padding: var(--spacing-7) var(--spacing-4);
      font-size: var(--font-size-9);
      line-height: 2.8rem;
    }
  }

  @media (width >= 60rem) {
    .header__title {
      padding: var(--spacing-8) var(--spacing-6);
    }
  }

  @media (width >= 70rem) {
    .header__title {
      font-size: var(--font-size-10);
      line-height: 3rem;
    }
  }

  @media (width >= 80rem) {
    .header__title {
      padding: var(--spacing-9) var(--spacing-6);
      left: var(--spacing-8);
      font-size: var(--font-size-11);
      line-height: 3.5rem;
    }
  }

  @media (width >= 90rem) {
    .header__title {
      padding: var(--spacing-10) var(--spacing-7);
    }
  }

  @media (width >= 100rem) {
    .header__title {
      padding: var(--spacing-11) var(--spacing-11);
      font-size: var(--font-size-12);
      line-height: 3.8rem;
    }
  }

  .header__title > span {
    display: block;
    overflow: hidden;
  }

  .header__title > span:nth-child(2) span {
    animation-delay: 200ms;
  }

  .header__title > span:nth-child(3) span {
    animation-delay: 400ms;
  }

  .header__title > span:nth-child(4) span {
    animation-delay: 600ms;
  }

  .header__title > span > span {
    display: block;
    transform: translateY(100%);
    animation: reveal 700ms ease forwards;
  }

  @keyframes reveal {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
