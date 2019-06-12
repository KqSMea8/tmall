// 轮播模块
;
(($) => {
  class banner {
    constructor() {
      this.aLi = $('.slider-nav li');
      this.aPannel = $('.slider-pannel');
      this.num = 0;
      this.flag = 1;
    }
    init() {
      this.aLi.each((index, ele) => {
        $(ele).hover(() => {
          setTimeout(() => {
            this.num = index;
            this.tabswitch();
            this.flag = 0;
          }, 100);
        }, () => {
          this.flag = 1;
        });
      });
      setInterval(() => {
        if (this.flag) {
          this.num++;
          this.num = this.num > this.aLi.length - 1 ? 0 : this.num;
          this.tabswitch();
        }
      }, 3000);
    }
    tabswitch() {
      this.aLi.eq(this.num).addClass('selected').siblings().removeClass();
      this.aPannel.eq(this.num).css({
        "z - index": 1,
        "opacity": 1,
        "display": "block"
      }).siblings().css({
        "z - index": 0,
        "opacity": 0,
        "display": "none"
      });
    }
  }
  new banner().init();
})(jQuery);
