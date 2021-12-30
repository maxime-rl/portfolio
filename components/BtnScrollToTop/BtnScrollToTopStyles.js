import { css } from "lit";

export const componentStyles = css`
  .scrolltotop-wrapper {
    position: sticky;
    z-index: 15;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
  }

  .btn-scrolltotop {
    width: 1.8rem;
    height: 1.8rem;
    background: white;
    border-radius: 50%;
  }

  .btn-scrolltotop__icon {
    position: relative;
    display: inline-block;
    right: 6px;
    bottom: 2px;
    background-image: url(./images/icons/arrow.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
  }

  .btn-scrolltotop__icon:hover {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: filter 0.2s;
  }
`;
