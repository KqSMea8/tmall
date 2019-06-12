$.ajax({
  url: 'http://10.31.164.68/tmall/php/details.php',
  success: (rd) => {
    let d = JSON.parse(rd);
    $bpic = $('.tb-booth img');
    $slpic=$('#J_UlThumb li');
    $slpic.each((i,li)=>{
      $(li).find('img').attr('src',d['imgsrc'+i]);
    });
    $bpic.attr('src', d.imgsrc1);
  }
});
