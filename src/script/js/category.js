let categoryLi = $(".j_MenuNav");
let pannelCon = $(".pannel-con");

categoryLi.hover(function() {
  $(this).addClass("selected").siblings().removeClass("selected");
  pannelCon.eq($(this).index()).show().siblings().hide();

}, function() {
  pannelCon.hover(function() {
    categoryLi.eq($(this).index()).stop().addClass("selected");
    $(this).stop().show();
  });

  $(this).removeClass("selected");
  pannelCon.eq($(this).index()).hide();

});
