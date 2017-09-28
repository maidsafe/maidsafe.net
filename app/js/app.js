/* global $: false, document: false, window: false */
if (window.location.protocol !== 'https:') {
  window.location = window.location.toString().replace(/^http:/, 'https:');
}

// var CAROUSEL_INTERVAL = 5000;
// var carouselIndex = 1;
var carouselTimer = null;
var carouselBase = null;
var carouselNav = null;
var windowWidth = 0;
var setCarousel = null;

var sliderTimer = null;

window.platform = null;
window.OS = {
  'Mac OS': 'osx',
  'Windows': 'win',
  'UNIX': 'unix'
};

// var INTRO_VIDEO_SRC = 'https://www.youtube.com/embed/bXOaxjvefGc';

var updateHeader = function() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop :
      document.body.scrollTop;
  $('#navDropdown').removeClass('open');
  if (y > 0) {
    $('header').addClass('invert onScroll');
    $('#site-logo').addClass('invert');
    $('#alphaBtn').addClass('invert');
    $('#secNav').addClass('invert');
    $('#secNavButton').addClass('invert');
    return;
  }
  $('header').removeClass('onScroll');
  if (window.invertedHeader) {
    return;
  }
  $('header').removeClass('invert');
  $('#site-logo').removeClass('invert');

  $('#secNav').removeClass('invert');
  $('#alphaBtn').removeClass('invert');
  $('#secNavButton').removeClass('invert');
};

var setActiveNav = function() {
  var pNav = $('.primary-nav .primary-nav-b');
  var pNavChildren = pNav.children();
  pNavChildren.removeClass('active');
  for (var i = 0; i < pNavChildren.length; i++) {
    var hash = $(pNavChildren[i]).children('a').attr('href');
    if (!hash) {
      return;
    }
    hash = hash.split('/');
    hash = hash[hash.length - 1];
    var path = window.location.pathname.split('/');
    path = path[path.length - 1];
    if (path === 'alpha.html') {
      $('#alphaBtn').removeClass();
    }
    if (hash && hash === path) {
      return $(pNavChildren[i]).addClass('active');
    }
  }
};

var showMobPrimaryNav = function() {
  $('#navDropdown > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });
  $('#navDropdown .nav-dropdown-b > li a').on('click', function() {
    $('#navDropdown').parent().toggleClass('open');
  });
};

// Modal events
var Modal = {
  target: $('#Modal'),
  open: function() {
    this.target.show();
  },
  close: function() {
    this.target.hide();
  }
};

// Load Team Banner
var loadTeamBanner = function() {
  var teamImg = $('.team-img');
  var teamImgWidth = teamImg.width();
  var teamImgItem = null;
  var itemCount = 8;
  teamImg.empty();

  // Small screen
  if (teamImgWidth <= 1134 && teamImgWidth >= 830) {
    itemCount = 6;
  }

  // Tablet screen
  if (teamImgWidth <= 829) {
    itemCount = 5;
  }
  var teamArr = {
    'Adam': './img/team/adam.JPG',
    'Andrew': './img/team/Andrew.jpg',
    'Bartlomiej': './img/team/Bartlomiej.JPG',
    'Benjamin': './img/team/Benjamin.jpg',
    'David': './img/team/david.jpg',
    'Francis': './img/team/francis-brunelle.jpg',
    'Fraser': './img/team/fraser.jpg',
    'Gabriel': './img/team/gabriel.jpg',
    'Hunter': './img/team/Hunter.jpg',
    'Josh': './img/team/Josh.jpeg',
    'Krishna': './img/team/krishna.jpg',
    'Marcin': './img/team/Marcin.jpg',
    'Michael': './img/team/michael.jpg',
    'Nick': './img/team/nick.jpg',
    'Nikita': './img/team/Nikita.jpg',
    'Qi': './img/team/qi.jpg',
    'Shankar': './img/team/Shankar.jpg',
    'Sharon': './img/team/Sharon.jpg',
    'Shona': './img/team/shona.JPG',
    'Spandan': './img/team/spandan.jpg',
    'Srini': './img/team/Srini.jpg',
    'Victoria': './img/team/Victoria.jpg',
    'Viv': './img/team/viv.jpg'
  };
  var teamImgItemHg = parseFloat(teamImgWidth / itemCount);
  for (var key in teamArr) {
    if (teamArr[key]) {
      teamImgItem = '<div class="team-img-i"><img height="' + teamImgItemHg + '" src="' +
        teamArr[key] + '" alt="' + key + '" title="' + key + '"></div>';
      teamImg.append(teamImgItem);
    }
  }
};

/**
 * Accordian
 */
var accordian = function() {
  $('#accordian ul li').on('click', function() {
    var self = $(this);
    if (self.hasClass('active')) {
      self.removeClass('active');
      return;
    }
    $('#accordian ul li').removeClass('active');
    self.addClass('active');
  });
};

/**
 * Typing effecting
 */
var typingEffect = function() {
  var typeString = [ 'a secure', 'a free' ];
  var i = 0;
  var count = 0;
  var selectedText = '';
  var text = '';
  var timeout;
  var target = document.getElementById('typing');
  if (!target) {
    return;
  }
  var type = function() {
    if (count === typeString.length) {
      count = 0;
    }

    // Initiation
    if (i === 0) {
      document.getElementById('typing').innerHTML = '';
      clearTimeout(timeout);
      timeout = setTimeout(type, 1500);
      i++;
      return;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    target.innerHTML = text;

    // change Next word
    if (text.length === selectedText.length) {
      count++;
      i = 0;
      clearTimeout(timeout);
      timeout = setTimeout(type, 4000);
      return;
    }

    // timing to type each word
    timeout = setTimeout(type, 200);
  };
  type();
};

// set download link
var setDownloadLink = function() {
  var PLATFORM_CLASSNAMES = {
    'Mac OS': 'osx-platform',
    'Windows': 'win-platform',
    'UNIX': 'unix-platform'
  };

  var platformEle = $('.platform');

  if (!platformEle) {
    return;
  }

  // reset
  for (var i in PLATFORM_CLASSNAMES) {
    if (PLATFORM_CLASSNAMES[i]) {
      platformEle.removeClass(PLATFORM_CLASSNAMES[i]);
    }
  }
  var targetPlatformClass = PLATFORM_CLASSNAMES[ $.ua.os.name ] || PLATFORM_CLASSNAMES.UNIX;
  if (!$.ua.device.type) {
    targetPlatformClass += ' desktop-view';
    $('.no-support-content').removeClass('touch-view').addClass('desktop-view');
  } else {
    targetPlatformClass += ' touch-view';
    $('.no-support-content').removeClass('desktop-view').addClass('touch-view');
    $('.al-bg-blue').addClass('touch-view');
  }
  platformEle.addClass(targetPlatformClass);
  platformEle.show();
};

// set platform
var setPlatform = function() {
  var EXCLUDED_DEVIVES = [
    'console', 'mobile', 'tablet', 'smarttv', 'wearable', 'embedded'
  ];
  if (EXCLUDED_DEVIVES.indexOf($.ua.device.type) > -1) {
    return;
  }
  window.platform = window.OS[ $.ua.os.name ] || window.OS.UNIX;
};

var downloadLauncher = function(e) {
  if (e) {
    e.preventDefault();
  }
  var winExe = 'https://github.com/maidsafe/safe_launcher/releases/download/0.8.0/safe_launcher-v0.8.0-win.exe';
  var osxExe = 'https://github.com/maidsafe/safe_launcher/releases/download/0.8.0/safe_launcher-v0.8.0-osx.pkg';
  var unix = 'https://github.com/maidsafe/safe_launcher/releases/tag/0.8.0';
  if (window.platform === window.OS.UNIX) {
    window.location.assign(unix);
  } else {
    window.location.assign((window.platform === window.OS.Windows) ? winExe : osxExe);
  }
};

var downloadDemoApp = function(e) {
  if (e) {
    e.preventDefault();
  }
  var winExe = 'https://github.com/maidsafe/safe_examples/releases/download/0.6.0/safe_demo_app-v0.6.0-win.exe';
  var osxExe = 'https://github.com/maidsafe/safe_examples/releases/download/0.6.0/safe_demo_app-v0.6.0-osx.pkg';
  var unix = 'https://github.com/maidsafe/safe_examples/releases/tag/0.6.0';
  if (window.platform === window.OS.UNIX) {
    window.location.assign(unix);
  } else {
    window.location.assign((window.platform === window.OS.Windows) ? winExe : osxExe);
  }
};

// var handleCarousel = function(index) {
//   carouselBase = $('.carousel .carousel-b');
//   if (!carouselBase.is('.carousel .carousel-b')) {
//     return;
//   }
//   windowWidth = $(window).width();
//   carouselNav = $('.carousel .carousel-nav');
//   var items = carouselBase.children();
//   carouselBase.css('visibility', 'visible');
//   carouselBase.width(windowWidth * items.length);
//   $(carouselBase.children()).width(windowWidth);
//   carouselIndex = index || carouselIndex;
//
//   carouselTimer = setInterval(function() {
//     setCarousel(carouselIndex);
//     carouselIndex++;
//     if (carouselIndex === items.length) {
//       carouselIndex = 0;
//     }
//   }, CAROUSEL_INTERVAL);
// };

setCarousel = function(index, stopTimer) {
  carouselBase.css('margin-left', windowWidth * index * -1);
  var navs = carouselNav.children();
  navs.removeClass('active');
  $(navs[index]).addClass('active');
  if (stopTimer) {
    clearInterval(carouselTimer);
    // handleCarousel(index);
  }
};

// var resetCarousel = function() {
//   clearInterval(carouselTimer);
//   carouselIndex = 1;
//   carouselBase.css('margin-left', 0);
//   handleCarousel();
// };

var setSliderNavActive = function(index) {
  var navItem = $('.slider .slider-nav .slider-nav-b span');
  navItem.removeClass('active');
  $(navItem[index]).addClass('active');
};

var stopSlider = function() {
  clearInterval(sliderTimer);
};

var runSlider = function() {
  clearInterval(sliderTimer);
  var speed = 5000;
  var sliderBase = $('.slider .slider-b');
  var windowWidth = $(window).width();
  var sliderChildren = sliderBase.children().length;
  var totalWidth = windowWidth * sliderChildren;
  var sliderMargin = 0;
  sliderBase.css('margin-left', 0);
  sliderBase.width(totalWidth);
  sliderBase.children().width(windowWidth);
  var index = 0;
  setSliderNavActive(index);
  sliderTimer = setInterval(function() {
    if (index === sliderChildren - 1) {
      index = -1;
    }
    index++;
    setSliderNavActive(index);
    sliderMargin = index * windowWidth;
    sliderBase.css('margin-left', -sliderMargin);
  }, speed);
};

var navSlider = function(index) {
  var sliderBase = $('.slider .slider-b');
  var windowWidth = $(window).width();
  var sliderMargin = index * windowWidth;
  setSliderNavActive(index);
  sliderBase.css('margin-left', -sliderMargin);
};

$(function() {
  typingEffect();
  accordian();
  showMobPrimaryNav();
  setActiveNav();
  loadTeamBanner();
  setPlatform();
  setDownloadLink();
  // handleCarousel();
  runSlider();

  // carouselNav.children().on('click', function(e) {
  //   var index = carouselNav.children().index(e.target);
  //   setCarousel(index, true);
  // });

  var downloadTokens = window.location.hash.split('?');
  if ((downloadTokens.length === 2) && (downloadTokens.pop() === 'download')) {
    if (downloadTokens[0] === '#launcher') {
      downloadLauncher();
    } else {
      downloadDemoApp();
    }
    window.location.hash = downloadTokens[0];
  }

  $('.slider .slider-nav .slider-nav-b span').on('click', function(e) {
    var index = e.target.dataset.index;
    stopSlider();
    navSlider(index - 1);
  });

  // $(document).on('click', '.al-download-tab .al-download-tab-nav ul li', function() {
  //   var target = $(this).data('target');
  //   var targetEle = $('#' + target);
  //   if (!targetEle.is('.al-download-tab .al-download-tab-cnt')) {
  //     return;
  //   }
  //   // reset
  //   $(this).siblings().removeClass('active');
  //   $(this).parents('.al-download-tab').find('.al-download-tab-cnt').removeClass('active');
  //
  //   $(this).addClass('active');
  //   targetEle.addClass('active');
  // });

  // Intro video
  // $('#IntroVideoTrigger').on('click', function(e) {
  //   e.preventDefault();
  //   Modal.open();
  //   $('#IntroVideo').attr('src', INTRO_VIDEO_SRC);
  // });

  // Close Modal
  $('#Modal').on('click', function(e) {
    e.stopPropagation();
    Modal.close();
    $('#IntroVideo').attr('src', 'about:blank');
  });

  $('.info').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
  });

  // $('.list-content .tbl-view .tbl-c .title').on('click', function() {
  //   $(this).siblings('.tbl-cnt').toggle();
  // });

  $(document).on('mouseup', function(e) {
    var listItems = $('#navDropdown > a');
    if (!listItems.is(e.target) && listItems.has(e.target).length === 0) {
      listItems.parent().removeClass('open');
    }
    var infoItems = $('.info');
    if (!infoItems.is(e.target) && infoItems.has(e.target).length === 0) {
      infoItems.removeClass('open');
    }
  });
});

$(window).on('hashchange load', function() {
  var currentPage = window.location.pathname.split('/').pop();
  setTimeout(function() {
    var targetHash = window.location.hash.split('?')[0].split('#').pop();
    if (!targetHash) {
      return;
    }
    var targetEle = $('#' + targetHash);
    if (currentPage === 'alpha.html') {
      window.scroll(0, targetEle.offset().top - 80);
    }
    if (currentPage === 'careers.html') {
      $('.tbl-cnt').hide();
      targetEle.children('.tbl-cnt').show();
      window.scroll(0, targetEle.offset().top - 80);
    }
  }, 10);
});

$(window).resize(function() {
  loadTeamBanner();
  setPlatform();
  setDownloadLink();
  // resetCarousel();
  runSlider();
});
/**
 * Change header on scroll
 */
$(window).scroll(updateHeader);
