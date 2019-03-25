/* eslint-disable */

ymaps.ready(init);

function init() {
  var mapCenter = [55.76796, 37.531756];
  var mapElement = document.getElementById('map');
  var mapOptions = {
      center: mapCenter,
      zoom: 16,
      controls: []
  };

  var map = new ymaps.Map(mapElement, mapOptions);

  var fullscreenControlObject = new ymaps.control.FullscreenControl({
      options: {
          position: {
              top: 10,
              right: 10
          }
      }
  });

  var zoomControlObject = new ymaps.control.ZoomControl({
      options: {
          position: {
              top: 10,
              left: 10
          },
          size: 'small'
      }
  });

  var marker = new ymaps.Placemark(mapCenter, {
    balloonContentHeader: 'Live Sound Agency',
    balloonContentBody: 'г. Москва, ул. 1-ая Магистральная, д. 2'
  }, {
    preset: 'islands#redIcon'
  });

  map.behaviors.disable('scrollZoom');
  map.controls.add(zoomControlObject);
  map.controls.add(fullscreenControlObject);
  map.geoObjects.add(marker);
}
