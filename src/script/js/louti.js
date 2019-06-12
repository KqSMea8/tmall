;
(($) => {
  class louti {
    constructor() {
      this.loutinav = $('#loutinav');
      this.navli = $('#loutinav li:not(.last)');
      this.louceng = $('.louceng');
      this.last = $('.last');

      this.headheight = $('.new-floor-con').offset().top;
    }

    init() {
      //滚轮事件，显示左侧loutinav
      $(window).scroll(() => {
        let $top = $(window).scrollTop() + $(window).height();
        let $isshownav = $top >= (this.headheight + parseInt(this.louceng.first().height() / 4));
        if ($isshownav) {
          this.loutinav.show();
          this.navli.first().css('background','#c00');
					// 顶部搜索显示
					$(".as-shelter,#J_ASTotalContainer").addClass("show").removeClass("hide");
        } else {
          this.loutinav.hide();
					// 顶部搜索隐藏
					$(".as-shelter,#J_ASTotalContainer").addClass("hide").removeClass("show");
        }

        //遍历楼层，楼层offset().top+一半楼层高度>scrollTop()+可视区高度,所有符合匹配改变nav的active，但执行一次就return中断
        this.louceng.each((index, ele) => {
          let $isactive = ($top >= $(ele).offset().top) && ($top <= $(ele).offset()
            .top + $(ele).height());
          if ($isactive) {
            this.navli.removeClass('active');
            this.navli.eq(index + 1).addClass('active');
            return false;
          }
        });

      });

      //点击左侧导航，切换到对应楼层
      $('#loutinav li').click(function(eve) {
        if ($(this).is('li')) {
          if ($(this).hasClass('last')) {
            $('html,body').animate({
              scrollTop: 0
            });
          } else {
            $(this).addClass('active').siblings('li').removeClass('active');
            $('html,body').animate({
              scrollTop: $('.louceng').eq($(this).index()-1).offset().top
            });
          }
        }
      });

    }
  }
  new louti().init();

})(jQuery);
