import { css } from "lit";

export const componentStyle = css`
  .project-card {
    display: grid;
    grid-template-areas:
      "image image image image"
      "title title title links"
      "description description description description";
    color: var(--bg-dark);
    padding-bottom: var(--spacing-3);
    background: var(--bg-white);
    border-radius: var(--radius-1);
    box-shadow: var(--shadow);
  }

  .project-card__img {
    grid-area: image;
    border-radius: var(--radius-1) var(--radius-1) 0 0;
  }

  .project-card__title {
    grid-area: title;
    margin: var(--spacing-2) 0;
    padding: 0 var(--spacing-2);
    font-size: var(--font-size-3);
  }

  .project-card__links {
    grid-area: links;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    line-height: 0;
  }

  .project-card__link {
    padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-2);
  }

  .project-card__link:hover .project-card__icon {
    filter: invert(27%) sepia(69%) saturate(520%) hue-rotate(176deg)
      brightness(93%) contrast(86%);
    transition: filter 0.3s;
  }

  .project-card__link:hover.project-card__link--preview::before,
  .project-card__link:hover.project-card__link--preview::after,
  .project-card__link:hover.project-card__link--github::before,
  .project-card__link:hover.project-card__link--github::after {
    visibility: visible;
    opacity: 1;
  }

  .project-card__link--preview,
  .project-card__link--github {
    position: relative;
    display: flex;
  }

  .project-card__link--preview::before,
  .project-card__link--github::before {
    position: absolute;
    visibility: hidden;
    content: "";
    opacity: 0;
    content: "preview";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 1.5rem;
    background: white;
    bottom: 45px;
    left: 3px;
    border-radius: 0.2rem;
    font-weight: 500;
    font-style: normal;
    font-size: 0.7rem;
  }

  .project-card__link--preview::after,
  .project-card__link--github::after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    content: "";
    height: 0;
    width: 0;
    border-top: 10px solid white;
    border-right: 5px solid #fff0;
    border-left: 5px solid #fff0;
    background: transparent;
    bottom: 38.5px;
  }

  .project-card__link--preview::before {
    content: "preview";
    left: 3px;
  }

  .project-card__link--preview::after {
    left: 13px;
  }

  .project-card__link--github::before {
    content: "github";
    left: -37px;
  }

  .project-card__link--github::after {
    left: 11px;
  }

  .project-card__icon {
    display: flex;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .project-card__icon--preview {
    position: relative;
    background-image: url(./images/icons/preview-card.svg);
    background-size: 20px;
    width: 20px;
    height: 20px;
  }

  .project-card__icon--github {
    background-image: url(./images/icons/github-card.svg);
    background-size: 15px;
    width: 15px;
    height: 20px;
  }

  .project-card__icon--not-available {
    padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-2);
    filter: brightness(3.3);
  }

  .project-card__icon--not-available::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    background: transparent;
  }

  .project-card__icon--not-available:hover {
    filter: brightness(3.3);
  }

  .project-card__description {
    grid-area: description;
    margin: var(--spacing-2) 0;
    padding: 0 var(--spacing-2);
    font-weight: 300;
  }
`;
