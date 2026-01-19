$(document).ready(function () {

  // Toggle navigation menu
  $("#menuToggle").click(function () {
    $("nav ul").slideToggle();
  });

  // Image hover effect
  $("img").hover(
    function () {
      $(this).fadeTo("fast", 0.5);
    },
    function () {
      $(this).fadeTo("fast", 1);
    }
  );

  // Play audio on button click
  $("#playAudio").click(function () {
    $("#habitatAudio")[0].play();
  });

});
