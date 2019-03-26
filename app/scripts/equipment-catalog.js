'use strict';

const catalogItems = document.querySelectorAll('.catalog__item');
const catalogItemCaptions = document.querySelectorAll('.catalog__item-caption');
const catalogItemContents = document.querySelectorAll('.catalog__item-content');

const onCatalogItemClick = function catalogItemClickHandler(caption, item, content) {
  caption.addEventListener('click', () => {
    item.classList.toggle('is-active');
    content.classList.toggle('is-active');
  });
};

for (let i = 0; i < catalogItems.length; i += 1) {
  onCatalogItemClick(catalogItemCaptions[i], catalogItems[i], catalogItemContents[i]);
}
