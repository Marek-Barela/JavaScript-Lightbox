import Images from "./js/models/Images";
import * as renderView from "./js/views/imagesView";
import "./styles/style.sass";

// Global State
const state = {}

const controller = async () => {
  state.images = new Images();
  await state.images.getImages()
  renderView.renderResults(state.images.result)
}

window.addEventListener("DOMContentLoaded", controller)