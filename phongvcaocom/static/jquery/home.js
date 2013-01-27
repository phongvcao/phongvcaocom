$(document).ready(function() {  
  $("#resume").fancybox({
    fitToView : false,
    width : 855,
    height : 542,
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic'
  });

  var browser_userAgent = navigator.userAgent;
  
  if (browser_userAgent.indexOf("MSIE") >= 0) {
    var browser_version = navigator.appVersion.match(/MSIE ([\d.]+)/)[1];
    browser_version = parseFloat(navigator.appVersion.match(/MSIE ([\d.]+)/)[1]);
    
    if (browser_version < 8) {
      $("<p style='color:red; font-family: 'Arial', san-serif; font-size: 22px; text-align: center;'><span style='font-weight:bold; text-decoration:underline;'>WARNING:</span> This page DOES NOT support IE 6/7/8 <br /> Please <a href='http://windows.microsoft.com/en-us/internet-explorer/products/ie/home/' target='_blank' style='color:white'>upgrade to IE 9</a> or <a href='http://internet-browser-review.toptenreviews.com/' target='_blank' style='color:white;'>use another browser</a> to view the website</p>").insertBefore("#first-row");
    }
  }
  
  $("#about").fancybox({
    fitToView : false,
    width : 820,
    height : 520,
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic'
  });
  
  $("#design-portfolio").fancybox({
    fitToView : false,
    width : 1130,
    height : 550,
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic'
  });
  
  $("#soft-portfolio").fancybox({
    fitToView : false,
    width : 1050,
    height : 565,
    autoSize : false,
    closeClick : false,
    openEffect : 'elastic',
    closeEffect	: 'elastic'
  });
  
  $("#pic-2--3_screenshots").cycle({
    speed: 2000,
    timeout: 2000
  });
  
  $("#pic-2--3").mouseenter(function() {
    $("#pic-2--3_screenshots").cycle('pause');
  }).mouseleave(function() {
    $("#pic-2--3_screenshots").cycle('resume');
  });
  
  $("#pic-5--2_screenshots").cycle({
    speed: 2000,
    timeout: 2000
  });
  
  $("#pic-5--2").mouseenter(function() {
    $("#pic-5--2_screenshots").cycle('pause');
  }).mouseleave(function() {
    $("#pic-5--2_screenshots").cycle('resume');
  });
  
  $("#pic-4--5_screenshots").cycle({
    speed: 2000,
    timeout: 2000
  });
  
  $("#pic-4--5").mouseenter(function() {
    $("#pic-4--5_screenshots").cycle('pause');
  }).mouseleave(function() {
    $("#pic-4--5_screenshots").cycle('resume');
  });
});
