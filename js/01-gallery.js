import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt = "${description}"
            />
        </a>
    </div>`
  )
  .join("");

const onImgClick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">)`
  );

  instance.show();
};

galleryRef.addEventListener("click", onImgClick);
