class Lightbox {
  constructor(id, url) {
    this.id = id
    this.url = url
    this.lighboxIsOpen = true
  }

  closeLightbox() {
    this.lighboxIsOpen = false
  }
}

export default Lightbox