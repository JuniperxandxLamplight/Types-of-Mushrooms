$(document).ready(function() {

  $(".chantrelle .clickable").click(function() {
    $("#chan-showing").toggle();
    $("#chan-hidden").toggle();
  });

  $(".morel .clickable").click(function() {
    $("#morel-showing").toggle();
    $("#morel-hidden").toggle();
  });

  $(".fly .clickable").click(function() {
    $("#fly-showing").toggle();
    $("#fly-hidden").toggle();
  });

  $(".miataki .clickable").click(function() {
    $("#mia-showing").toggle();
    $("#mia-hidden").toggle();
  });

  $(".enoki .clickable").click(function() {
    $("#enoki-showing").toggle();
    $("#enoki-hidden").toggle();
  });

});
