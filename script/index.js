$("h1").hover(function(){
  $(this).css("animation-name","fadeInDown");
  $(this).css("animation-duration","2s");
});



// on sample works
$(".sample").mouseenter(function(){
  $(this).css("animation-name","pulse");
  $(this).css("animation-duration","2s");
});

$("#exit").click(function(){
  $("html").css("animation-name","hinge");
  $("html").css("animation-duration","2s");
});
