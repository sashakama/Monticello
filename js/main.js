'use string';

$(() => {
  $(document).scroll(() => {
    if ($(window).scrollTop() > 400) {
      $('.nav-bar').addClass('nav-bar-scroll');
    }
    else {
      $('.nav-bar').removeClass('nav-bar-scroll');
    }
  });


  $(document).scroll(() => {
    if ($(window).scrollTop() < 600) {
      $('.menu-item__link_checked').removeClass('menu-item__link_checked');
      $('.menu__link-about-us').addClass('menu-item__link_checked');
    }
  });

  $(document).scroll(() => {
    if ($(window).scrollTop() > 600 && $(window).scrollTop() < 2200) {
      $('.menu-item__link_checked').removeClass('menu-item__link_checked');
      $('.menu__link-projects').addClass('menu-item__link_checked');
    }
  });

  $(document).scroll(() => {
    if ($(window).scrollTop() > 1800 && $(window).scrollTop() < 3400) {
      $('.menu-item__link_checked').removeClass('menu-item__link_checked');
      $('.menu__link-news').addClass('menu-item__link_checked');
    }
  });

  $(document).scroll(() => {
    if ($(window).scrollTop() > 3400) {
      $('.menu-item__link_checked').removeClass('menu-item__link_checked');
      $('.menu__link-contact').addClass('menu-item__link_checked');
    }
  });


  $(document).scroll(() => {
    if ($(window).scrollTop() > 400) {
      $('.aboutus-block-img__first').addClass('aboutus-block-img__showing');
    }
  });

  $(document).scroll(() => {
    if ($(window).scrollTop() > 900) {
      $('.aboutus-block-img__second').addClass('aboutus-block-img__showing');
    }
  });

  $('.header-slider').slick({
    dots: true,
    slidesToShow: 1,
    focusOnSelect: false,
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $('.news-slider').slick({
    dots: true,
    slidesToShow: 3,
    focusOnSelect: false,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
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
