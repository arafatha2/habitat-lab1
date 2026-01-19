$(document).ready(function(){
  $(".toggle-btn").click(function(){
    // Toggle only the media container inside this card
    $(this).siblings(".media-container").slideToggle(400);
  });

  // Optional hover effect for cards
  $(".content-card").hover(
    function(){ $(this).css("transform", "scale(1.02)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
