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


  $("button#geo").click(function() {
    $("body").removeClass();
    $("body").addClass("georgia-text");
  });
  $("button#cour").click(function() {
    $("body").removeClass();
    $("body").addClass("courier-text");
  });
  $("button#luci").click(function() {
    $("body").removeClass();
    $("body").addClass("lucida-text");
  });

});
