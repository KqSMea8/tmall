// 天猫超市tab切换
let tabheadLi=$("#J_FloorTMCS .floor-tab-head li");
let tabCon=$("#J_FloorTMCS .floor-tab-content .floor-tab-detail");
tabheadLi.mouseover(function(){
	alert(1);
  $(this).addClass("floor-current-tab").siblings().removeClass();
  tabCon.eq($(this).index()).show().siblings().hide();
});
// tabheadLi.on('mouseover',function(){
//   $(this).addClass("floor-current-tab").siblings().removeClass();
//   tabCon.eq($(this).index()).show().siblings().hide();
// });