import { css } from "lit";

export const componentStyles = css`
  @media screen and (min-width: 80rem) {
    .header {
      margin-bottom: var(--spacing-8);
      background: var(--bg-white);
    }
  }

  .header__wrapper {
    position: relative;
    overflow: hidden;
  }

  .header__img {
    position: absolute;
    right: -49px;
    bottom: 16px;
    margin-top: -5rem;
    width: 62%;
    height: auto;
    border-radius: var(--radius-2);
    animation: opacity 1.5s ease;
  }

  @media screen and (min-width: 25rem) {
    .header__img {
      width: 55%;
    }
  }

  @media screen and (min-width: 30rem) {
    .header__img {
      width: 50%;
    }
  }

  @media screen and (min-width: 30rem) {
    .header__img {
      width: 45%;
    }
  }

  @media screen and (min-width: 50rem) {
    .header__img {
      width: 40%;
    }
  }

  @media screen and (min-width: 50rem) {
    .header__img {
      width: 35%;
    }
  }

  @media screen and (min-width: 65rem) {
    .header__img {
      width: 35%;
    }
  }

  @media screen and (min-width: 80rem) {
    .header__img {
      right: 30px;
      bottom: 0;
      width: 30%;
    }
  }

  @media screen and (min-width: 25rem) {
    .header__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: var(--font-size-7);
    }
  }

  .header__title {
    margin-top: -20px;
    padding: var(--spacing-8) var(--spacing-4) 12rem var(--spacing-6);
    width: 100%;
    margin-left: -1.5rem;
    margin-bottom: 0;
    background: var(--bg-white);
  }

  @media screen and (min-width: 30rem) {
    .header__title {
      font-size: var(--font-size-8);
    }
  }

  @media screen and (min-width: 35rem) {
    .header__title {
      font-size: var(--font-size-9);
    }
  }

  @media screen and (min-width: 40rem) {
    .header__title {
      font-size: var(--font-size-10);
    }
  }

  @media screen and (min-width: 55rem) {
    .header__title {
      padding: 3rem var(--spacing-4) 10rem var(--spacing-6);
      font-size: var(--font-size-13);
    }
  }

  @media screen and (min-width: 80rem) {
    .header__title {
      margin: 0;
      padding: 3rem 0 8rem 0;
      background: transparent;
      font-size: var(--font-size-13);
    }
  }

  @media screen and (min-width: 100rem) {
    .header__title {
      font-size: var(--font-size-16);
    }
  }

  .header__title > span {
    display: block;
    overflow: hidden;
  }

  @media screen and (min-width: 25rem) {
    .header__title > span {
      line-height: 2.4rem;
    }
  }

  @media screen and (min-width: 30rem) {
    .header__title > span {
      line-height: 2.6rem;
    }
  }

  @media screen and (min-width: 35rem) {
    .header__title > span {
      line-height: 2.9rem;
    }
  }

  @media screen and (min-width: 35rem) {
    .header__title > span {
      line-height: 3.2rem;
    }
  }

  @media screen and (min-width: 55rem) {
    .header__title > span {
      line-height: 4.1rem;
    }
  }

  @media screen and (min-width: 100rem) {
    .header__title > span {
      line-height: 5rem;
    }
  }

  .header__title > span:nth-child(2) span {
    animation-delay: 150ms;
  }

  .header__title > span:nth-child(3) span {
    animation-delay: 300ms;
  }

  .header__title > span:nth-child(4) span {
    animation-delay: 450ms;
  }

  .header__title > span > span {
    display: block;
    transform: translateY(100%);
    animation: reveal 500ms ease forwards;
  }

  .header__title-strong {
    color: var(--bg-primary);
  }
`;
