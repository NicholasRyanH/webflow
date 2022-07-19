function splidegallery() {
  let splides = $('.splidegallery');
  const numberOfSlides = $(".splidegallery .splide__slide").length
  const breakpointSettings = {
  	mobilePortrait: {
    	maxWidth: 480,
      perPage: 2,
    },
  	mobileLandscape: {
    	maxWidth: 768,
      perPage: 3,
    },
  	tablet: {
    	maxWidth: 992,
      perPage: 3,
    },
  	desktop: {
      perPage: 4,
    },
  }
  for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
    let splide = new Splide( splides[ i ], {
      // Desktop on down
      perPage: breakpointSettings.desktop.perPage,
//		autoplay: numberOfSlides > breakpointSettings.desktop.perPage,
//		interval : 1000, // autoplay interval duration in ms
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '2em', // space between slides
      arrows: numberOfSlides > breakpointSettings.desktop.perPage,
      pagination: numberOfSlides > breakpointSettings.desktop.perPage,
      speed : 600, // transition speed in miliseconds
      drag: 'free',
      dragAngleThreshold: 350, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : true, // go back to beginning when reach end
      rewindSpeed : 400,
      waitForTransition : true,
      updateOnMove : true,
      trimSpace: true, // true removes empty space from end of list
      breakpoints: {
        [breakpointSettings.tablet.maxWidth]: {
          // Tablet
          perPage: breakpointSettings.tablet.perPage,
          arrows: numberOfSlides > breakpointSettings.tablet.perPage,
          pagination: numberOfSlides > breakpointSettings.tablet.perPage,
          autoplay: numberOfSlides > breakpointSettings.tablet.perPage,
        },
        [breakpointSettings.mobileLandscape.maxWidth]: {
          // Mobile Landscape
          perPage: breakpointSettings.mobileLandscape.perPage,
          arrows: numberOfSlides > breakpointSettings.mobileLandscape.perPage,
          pagination: numberOfSlides > breakpointSettings.mobileLandscape.perPage,
          autoplay: numberOfSlides > breakpointSettings.mobileLandscape.perPage,
        },
        [breakpointSettings.mobilePortrait.maxWidth]: {
          // Mobile Portrait
          perPage: breakpointSettings.mobilePortrait.perPage,
          arrows: numberOfSlides > breakpointSettings.mobilePortrait.perPage,
          pagination: numberOfSlides > breakpointSettings.mobilePortrait.perPage,
          autoplay: numberOfSlides > breakpointSettings.mobilePortrait.perPage,
        }
      }
    }).mount();
    function handleResize () {
    	if (window.innerWidth <= breakpointSettings.mobilePortrait.maxWidth && numberOfSlides <= breakpointSettings.mobilePortrait.perPage) {
      	$('.splidegallery .splide__arrows').hide();
      } else if (window.innerWidth > breakpointSettings.mobilePortrait.maxWidth && window.innerWidth <= breakpointSettings.mobileLandscape.maxWidth && numberOfSlides <= breakpointSettings.mobileLandscape.perPage) {
				$('.splidegallery .splide__arrows').hide();
      } else if (window.innerWidth > breakpointSettings.mobileLandscape.maxWidth && window.innerWidth <= breakpointSettings.tablet.maxWidth && numberOfSlides <= breakpointSettings.tablet.perPage) {
				$('.splidegallery .splide__arrows').hide();
      } else if (window.innerWidth > breakpointSettings.tablet.maxWidth && numberOfSlides <= breakpointSettings.desktop.perPage) {
				$('.splidegallery .splide__arrows').hide();
      } else {
				$('.splidegallery .splide__arrows').show();
      }
    }
    splide.on( 'resize', handleResize);
    handleResize()
  }
}
splidegallery();