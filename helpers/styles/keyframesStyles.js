import { css } from "lit";

export const keyframesStyles = css`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export default keyframesStyles;
