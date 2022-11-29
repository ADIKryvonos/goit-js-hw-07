import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const addGalleryMarking = createGalleryMarking(galleryItems);

function createGalleryMarking(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", addGalleryMarking);
galleryList.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.classList.contains(".gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">`);
  instance.show();

  galleryList.addEventListener("keydown", onGalleryClose);
  function onGalleryClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
