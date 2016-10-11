/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function(){
  $(".element").typed({
    strings: ["A Student.^1000", "A Programmer.^1000", "A Daydreamer.^1000", "Chris Lu."],
    typeSpeed: -1,
    loop: false,
     showCursor: true	
  });
});

var feed = new Instafeed({
  clientId: '95dc5191787b4844a97ee15bfdbba3a1',
  get: 'user',
  userId: 319141685,
  resolution: 'standard_resolution',
  accessToken: '319141685.1677ed0.86d0d28554574e198afc54c04c7f2b36',
  sortBy:'most-recent',
  limit: 15

});

feed.run();