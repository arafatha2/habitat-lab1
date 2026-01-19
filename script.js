$(document).ready(function(){
  $(".toggle-btn").click(function(){
    $(this).siblings("img, p, audio").slideToggle(400);
  });

  // Optional: subtle hover effect for cards
  $(".content-card").hover(
    function(){ $(this).css("transform", "scale(1.02)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
