import { elements } from "./DOMSelectors";

const renderImage = image => {
  const element = `
    <figure class="gallery-container__image-wrapper">
      <img class="gallery-container__image" src=${image.url} id=${image.id} />
      <figcaption>
        Display
      </figcaption>
    </figure>
  `;

  elements.galleryContainer.insertAdjacentHTML("beforeend", element);
}

export const renderResults = images => {
  return images.forEach(renderImage)
}