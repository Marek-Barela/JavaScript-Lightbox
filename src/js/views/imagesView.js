import { elements } from "./DOMSelectors";

const renderImage = image => {
  const { id, url } = image;
  const element = `
    <figure class="gallery-container__image-wrapper" id=${id}>
      <img class="gallery-container__image" src=${url} />
      <figcaption>
        Display
      </figcaption>
    </figure>
  `;

  elements.galleryContainer.insertAdjacentHTML("beforeend", element);
};

export const renderResults = images => {
  return images.forEach(renderImage);
};
