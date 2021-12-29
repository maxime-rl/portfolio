import { css } from "lit";

export const componentStyles = css`
  .project-card {
    position: relative;
    display: grid;
    grid-template-areas:
      "image image image image"
      "title title title links"
      "description description description description"
      "tags tags tags tags";
    color: var(--bg-dark);
    padding-bottom: var(--spacing-3);
    background: var(--bg-white);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow);
  }

  .project-card__work-in-progress {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 var(--spacing-2) 0.11rem var(--spacing-2);
    top: 0.55rem;
    right: 0.55rem;
    font-size: var(--font-size-1);
    background: var(--bg-primary);
    color: var(--bg-white);
    border-radius: var(--radius-1);
  }

  .project-card__img {
    grid-area: image;
    border-radius: var(--radius-2) var(--radius-2) 0 0;
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
    gap: var(--spacing-4);
    padding-right: var(--spacing-2);
    line-height: 0;
  }

  .project-card__link:hover .project-card__icon {
    filter: var(--svg-hover);
    transition: filter 0.2s;
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
    padding: 0 var(--spacing-2) 0.11rem var(--spacing-2);
    height: 1.2rem;
    border-radius: var(--radius-1);
    font-size: var(--font-size-1);
    color: var(--bg-white);
    background: var(--bg-primary);
  }

  .project-card__link--preview::after,
  .project-card__link--github::after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    content: "";
    height: 0;
    width: 0;
    border-top: 10px solid var(--bg-primary);
    border-right: 4px solid #fff0;
    border-left: 4px solid #fff0;
    background: transparent;
    bottom: 1.8rem;
  }

  .project-card__link--preview::before {
    content: "preview";
    left: -0.5rem;
    bottom: 2.3rem;
  }

  .project-card__link--preview::after {
    left: 0.4rem;
  }

  .project-card__link--github::before {
    content: "github";
    left: -2.3rem;
    bottom: 2.25rem;
  }

  .project-card__link--github::after {
    left: 0.4rem;
  }

  .project-card__icon {
    display: flex;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .project-card__icon--preview {
    position: relative;
    background-image: url(./images/icons/preview-card.svg);
    background-size: contain;
    width: 1.3rem;
    height: 1.3rem;
  }

  .project-card__icon--github {
    background-image: url(./images/icons/github-card.svg);
    background-size: contain;
    width: 1.2rem;
    height: 1.2rem;
  }

  .project-card__icon--not-available,
  .project-card__icon--not-available:hover {
    filter: var(--svg-not-available);
  }

  .project-card__icon--not-available::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    background: transparent;
  }

  .project-card__description {
    grid-area: description;
    margin: var(--spacing-2) 0;
    padding: 0 var(--spacing-2);
    font-weight: 300;
  }

  .project-card__tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    padding: 0 var(--spacing-2);
    gap: 0.8rem;
  }

  .project-card__tag {
    padding: 0 0.5rem 0.11rem 0.5rem;
    font-size: var(--font-size-1);
    background-color: var(--bg-white);
    color: var(--bg-primary);
    border-radius: var(--radius-1);
    box-shadow: var(--shadow);
  }
`;
