import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryRefItem = document.querySelector(".gallery__item");

galleryRef.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");

const onImgClick = (e) => {
  if (e.target.nodeName !== "IMG") return;

  let lightbox = new SimpleLightbox(`.gallery__item`, {
    captionsData: `alt`,
    captionDelay: 250,
    captionPosition: "bottom",
  });
};

galleryRef.addEventListener("click", onImgClick);
