//= require jquery
//= require modernizr
//= require foundation
//= require foundation.orbit

$(document).ready(function() {
  // $(document).foundation();

  $(document).foundation('orbit', {bullets: true, timer_speed: 4000});

  // Override Slider Header
  $(".orbit-next, .orbit-prev").css({display: "none"});
  // $(".orbit-timer").css({display: "none"});
  $(".orbit-slide-number").remove();
  $(".orbit-bullets li").each( function() {
    $(this).text($(this).attr("data-orbit-slide-number"));
  } );
});