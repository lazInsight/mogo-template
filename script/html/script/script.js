// Burger Menu
const burgerContainer = document.querySelector('#burger-container');
const navMenu = document.querySelector('#header__nav');
const header = $('#header');

burgerContainer.addEventListener('click', () => {
  burgerContainer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// OnScroll Event

$(function() {

  var introHeight = $("#intro").innerHeight();
  var scroolOffset = 0;

  $(window).on("scroll", () => {
    scrollOffset = $(this).scrollTop();
    var burgetButton = $('#burger-container');
    var headerNav = $("#header__nav");
    var headerCondition = $(header__nav).is(".active");

    if ($(headerCondition)) {
      headerNav.removeClass("active");
      burgetButton.removeClass("active");
    } else {
      return 0;
    }

    if ((scrollOffset + $('#header').height() + 1) > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

})

// Navigation Pure JS, only for desktops

// const navLinks = document.querySelectorAll('a.nav__link');
// navLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     burgerContainer.classList.toggle('active');
//     navMenu.classList.toggle('active');

//     let href = event.target.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);
//     const topOffset = document.querySelector('#header').offsetHeight;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;
//     window.scrollBy({
//       left: 0,
//       top: offsetPosition,
//       behavior: 'smooth',
//     });
//   });
// });

// Navigation With JQuery, work on mobiles browsers


$('a[href*="#"].nav__link')
  .click(function(event) {
    event.preventDefault();

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();

        var scrollTop = target.offset().top - $('#header').height();

        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000)
      }
    }
});