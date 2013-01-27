$(window).load(function() {  
  var soft_portfolio_flow = new ImageFlow();
  
  soft_portfolio_flow.init({
    ImageFlowID: "soft-portfolio-flow",
    reflections: false,
    reflectionP: 0.0,
    captions: true,
    onClick: function() {},
    imageFocusMax: 1,
    imageFocusM: 1.45,
    xStep: 80,
    opacity: true,
    opacityArray: [10, 9, 8, 7, 6],
    animationSpeed: 50,
    imagesHeight: 0.5,
    scrollbarP: 0.64
  });
  
  var htmlStr = "";
  
  $("#view-source-code").mouseenter(function() {
    htmlStr = soft_portfolio_flow.captionDiv.innerHTML;
    soft_portfolio_flow.captionDiv.innerHTML = "<div class=\"caption\" style=\"font-family: 'Times New Roman', serif; text-align: left; width: 700px; margin-left: auto; margin-right: auto; color: white\"> <div class=\"title\" style=\"font-size: 22px; font-family: 'Times New Roman', serif; font-weight: bold; text-align: center; text-transform: uppercase\"> View Source Code </div> </div>";
  }).mouseleave(function() {
    soft_portfolio_flow.captionDiv.innerHTML = htmlStr;
  });
});

