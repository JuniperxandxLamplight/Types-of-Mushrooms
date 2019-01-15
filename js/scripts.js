$(document).ready(function() {

  $(".chantrelle .clickable").click(function() {
    $("#chan-showing").fadeToggle();
    $("#chan-hidden").fadeToggle();
  });

  $(".morel .clickable").click(function() {
    $("#morel-showing").fadeToggle();
    $("#morel-hidden").fadeToggle();
  });

  $(".fly .clickable").click(function() {
    $("#fly-showing").fadeToggle();
    $("#fly-hidden").fadeToggle();
  });

  $(".miatake .clickable").click(function() {
    $("#mia-showing").fadeToggle();
    $("#mia-hidden").fadeToggle();
  });

  $(".enoki .clickable").click(function() {
    $("#enoki-showing").fadeToggle();
    $("#enoki-hidden").fadeToggle();
  });

});
