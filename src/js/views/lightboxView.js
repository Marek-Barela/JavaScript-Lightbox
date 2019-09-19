import { elements } from "./DOMSelectors";

export const setLightboxImage = url => {
  elements.lightboxImage.src = url;
};

export const switchLightbox = lightboxIsOpen => {
  const currentClass = lightboxIsOpen ? "lightbox-container--open" : "lightbox-container--close";
  elements.lightboxContainer.className = currentClass
};
