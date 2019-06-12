// 搜索框焦点事件
let oInput = $("#mallSearch input#mq");
oInput.focus(() => {
  oInput.parent().next().css('color', '#ddd');
});
oInput.blur(() => {
  oInput.parent().next().css('color', '#666');
});
oInput.on('input',() => {
  if(oInput.val()==''){
    oInput.parent().next().css('visibility', 'visible');
  }else{
    oInput.parent().next().css('visibility', 'hidden')
  }
});
// 焦点事件-结束
