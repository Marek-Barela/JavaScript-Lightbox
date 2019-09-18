import { elements } from "./DOMSelectors";

const renderImage = image => {
  const element = `
    <div class="gallery-container__image-wrapper">
      <img class="gallery-container__image" src=${image.url} id=${image.id} />
    </div>
  `;
  
  elements.galleryContainer.insertAdjacentHTML("beforeend", element);
}

export const renderResults = images => {
  return images.forEach(renderImage)
}