$(document).ready(function(){
  $(".toggle-btn").click(function(){
    // Find all media/text inside the same card
    $(this).closest(".content-card").find("img, p, audio").slideToggle(400);
  });

  // Optional hover effect for cards
  $(".content-card").hover(
    function(){ $(this).css("transform", "scale(1.02)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
