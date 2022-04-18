let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.752682, 37.591223],
    zoom: 11,
    controls: [],
  });

  let coords = [
      [55.751305, 37.607898],
      [55.753625, 37.625882],
      [55.743049, 37.581600],
      [55.757937, 37.582896],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: '/project2/img/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);