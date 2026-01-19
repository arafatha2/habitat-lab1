$(document).ready(function(){
  $(".toggle-btn").click(function(){
    // Toggle all img, audio, and p inside the same card
    $(this).closest(".content-card").find("img, p, audio").slideToggle(400);
  });

  // Subtle hover effect (optional)
  $(".content-card").hover(
    function(){ $(this).css("transform", "scale(1.02)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
