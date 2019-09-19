import Images from "./js/models/Images";
import Lightbox from "./js/models/Lightbox";
import { renderResults } from "./js/views/imagesView";
import { setLightboxImage, switchLightbox } from "./js/views/lightboxView";
import { elements } from "./js/views/DOMSelectors";
import "./styles/style.sass";

// Global State
const state = {};

const imagesController = async () => {
  state.images = new Images();
  try {
    await state.images.getImages();
  } catch (err) {
    console.log(err);
  }
  renderResults(state.images.result);
};

// On gallery image click
const lightboxController = e => {
  const { id } = e.target;
  if (id) {
    // Find clicked image
    const element = state.images.result.find(image => image.id === id);
    state.lightbox = new Lightbox(element.id, element.url);
    setLightboxImage(state.lightbox.url);
    switchLightbox(state.lightbox.lighboxIsOpen);
  }
};

elements.galleryContainer.addEventListener("click", lightboxController);

elements.closeLightbox.addEventListener("click", function() {
  state.lightbox.closeLightbox();
  switchLightbox(state.lightbox.lighboxIsOpen);
});

window.addEventListener("DOMContentLoaded", imagesController);
