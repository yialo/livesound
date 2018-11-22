var catalogItems = document.querySelectorAll('.catalog__item');
var catalogItemCaptions = document.querySelectorAll('.catalog__item-caption');
var catalogItemContents = document.querySelectorAll('.catalog__item-content');

var addCatalogItemClickHandler = function (caption, item, content) {
  caption.addEventListener('click', function () {
    item.classList.toggle('is-active');
    content.classList.toggle('is-active');
  });
}

for (var i = 0; i < catalogItems.length; i++) {
  addCatalogItemClickHandler(catalogItemCaptions[i], catalogItems[i], catalogItemContents[i]);
}
