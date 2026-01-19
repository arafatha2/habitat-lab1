$(document).ready(function(){
  // Toggle image and audio on button click
  $(".toggle-btn").click(function(){
    $(this).siblings("img, audio").fadeToggle(500);
  });

  // Optional: subtle hover effect
  $(".card").hover(
    function(){ $(this).css("transform", "scale(1.02)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
