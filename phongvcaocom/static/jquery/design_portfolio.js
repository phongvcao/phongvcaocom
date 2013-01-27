$(document).ready(function() {
  $("#design-portfolio-carousel").CloudCarousel({
    xPos: 550,
    yPos: 75,
    xRadius: 450,
    yRadius: 75,
    reflHeight: 100,
    reflGap: 10,
    buttonLeft: $("#left-but"),
    buttonRight: $("#right-but"),
    altBox: $("#alt-text"),
    titleBox: $("#title-text"),
    mouseWheel: true,
    bringToFront: true,
    speed: 0.1
  });
});
