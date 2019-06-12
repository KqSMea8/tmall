// 获取-猜你喜欢-内容
$.ajax({
  url: "http://10.31.164.68/tmall/php/content.php",
  data: "typeid=J_FloorCNXH",
  datatype: "json",
  success: (rd) => {
    let d = JSON.parse(rd);
    let $oCon = $("#J_FloorCNXH .module-content");
    let str = `<ul class="wonderful-line j_exposureExtra1">`;
    for (let v of d) {
      str +=
        `
      <li class="wonderful-item ">
        <a class="card-item  " href="${v.ahref}">
          <span class="item-pic">
            <img src="${v.imgsrc}"
              width="100%">
          </span>
          <span class="item-info">
            <span class="item-desc">
              <em class="item-name" title="${v.content}">${v.content}</em>
            </span>
            <span class="item-detail">
              <span class="item-price">
                <span class="mui-price  ">
                  <i class="mui-price-rmb">¥</i>
                  <span class="mui-price-integer">${v.price}</span>
                </span>
              </span>
            </span>
          </span>
        </a>
      </li>
      `;
    }
    str += `</ul>`;
    // str+=`<div class="tm-end show"></div>`;
    $oCon.html(str);
    $("#J_FloorCNXH ul.wonderful-line li:nth-child(5n)").addClass('last');
    $("#J_FloorCNXH ul.wonderful-line li:nth-child(5n) a").addClass('last-1920');
  }
});
// 获取-猜你喜欢-内容-结束



// 获取-户外出行，打造爱巢，居家生活，潮电酷玩，美丽人生，天猫国际，天猫超市-内容
// 遍历数组，输出结构
let arr = ['J_FloorHWCX', 'J_FloorDZAC', 'J_FloorJJSH', 'J_FloorCDKW', 'J_FloorMLRS', 'J_FloorTMGJ', 'J_FloorTMCS'];
for (let tid of arr) {
  // ajax请求数据部分
  $.ajax({
    url: "http://10.31.164.68/tmall/php/content.php",
    data: `typeid=${tid}`,
    datatype: "json",
    success: (rd) => {
      let d = JSON.parse(rd);
      let $oCon = $(`#${tid} .middle-column-con`);
      let str = $oCon.html();
      for (let v of d) {
        str +=
          `
            <a class="grid one-grid-price  last-1230 " href="${v.ahref}">
              <div class="floor-item-content-wrap">
                <div class="floor-item-tag color-type-cyan" style="visibility:hidden"></div>
                <img class="floor-item-img" src="${v.imgsrc}">
                <div class="floor-item-title">${v.content}</div>
                <div class="floor-price">￥${v.price}</div>
                <div class="floor-item-reason" style="display:none">
                  <div class="floor-item-reason-content"></div>
                </div>
                <div class="item-activity-icon" style="display:none"></div>
              </div>
            </a>
        `;
      }
      $oCon.html(str);
    }
  });
  // ajax请求数据部分-结束
}

// 获取-户外出行-内容-结束

// 获取品牌brand-list
$.ajax({
  url: "http://10.31.164.68/tmall/php/brand.php",
  data: "typeid=brand-list",
  datatype: "json",
  success: (rd) => {
    let d = JSON.parse(rd);
    let $oCon = $(".brand-list ul");
    let str = ``;
    for (let v of d) {
      str +=
        `
        <li class="brand-item">
          <div class="brand-img">
            <img src="${v.imgsrc}">
          </div>
          <a class="brand-mask" href="${v.ahref}">
            <div class="coupon">
              <span>${v.coupon}</span>
            </div>
            <div class="enter">
              <span>点击进入</span>
            </div>
          </a>
        </li>
      `;
    }
    $oCon.html(str);
  }
});
// 获取品牌结束
