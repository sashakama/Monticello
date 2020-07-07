'use string';

$(() => {
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                autoplay: true,
                autoplaySpeed: 1000,
              },
            },
          ],
    
    })
})


$(() => {
  $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    dots:true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  })
})

function initMap() {
    let map = new google.maps.Map(document.querySelector('#map'), {
          zoom: 12,
          center: { lat: 40.682280, lng: -73.899075 },
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
        });
  
    let imageMarker = 'img/maps_pin.png';
    let marker = new google.maps.Marker({
      position: { lat: 40.682280, lng: -73.899075 },
      map: map,
      icon: imageMarker,
    });
  
  }
  
  // $('.aboutus').hide();
  // $('.news').hide();
  // $('.galary').hide();
  // $('.map').hide();
  // $('.form').hide();
  // $('.footer').hide();
  
  // $( () => {
  //   $(window).scroll(() => {
  //     if ($(this).scrollTop() > 200) {
  //       $('.aboutus').fadeIn(1200);
  //     } 
  //     if ($(this).scrollTop() > 400) {
  //       $('.news').fadeIn(1200);
  //     } 
  //     if ($(this).scrollTop() > 600) {
  //       $('.galary').fadeIn(1200);
  //     } 
  //     if ($(this).scrollTop() > 800) {
  //       $('.map').fadeIn(1200);
  //     }
  //     if ($(this).scrollTop() > 1000) {
  //       $('.form').fadeIn(1200);
  //     } 
  //     if ($(this).scrollTop() > 1000) {
  //       $('.footer').fadeIn(1200);
  //     } 
  //   });
  // });