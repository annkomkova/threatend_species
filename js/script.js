$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/annkomkova/threatend_species/main/data/data_header.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});

function processData(allText) {
  let allTextLines = allText.split(/\r\n|\n/);
  let main = $(".main");

  for (let i = 1; i < 46; i++) {
      let data = allTextLines[i].split(',');
      let t = Math.round(data[7] / 3 - 20);
      let name = data[0];

      let ma = ' <div class="ma" style="width:'+data[1]/2+'px;height:'+data[1]/2+'px";></div> ';
      let b = ' <div class="b" style="width:'+data[2]/2+'px;height:'+data[2]/2+'px";></div> ';
      let r = ' <div class="r" style="width:'+data[3]/2+'px;height:'+data[3]/2+'px";></div> ';
      let a = ' <div class="a" style="width:'+data[4]/2+'px;height:'+data[4]/2+'px";></div> ';
      let f = ' <div class="f" style="width:'+data[5]/2+'px;height:'+data[5]/2+'px";></div> ';
      let mo = ' <div class="mo" style="width:'+data[6]/2+'px;height:'+data[6]/2+'px";></div> ';

      let total = '<div class="total" style="z-index: 0;width:'+t/15+'vw;height:'+t/15+'vw;"></div>'

      let rotate = 'transform:rotate('+(i*10)+'deg);';
      let all = ma+b+r+a+f+mo+total;


      let country = `<div class="country bg${i}">${total}</div><div class="h1">${name}</div>`;

      let card = `<div class="card">${country}</div>`

      main.append(card);


      let deg = 0;

      $('.counry').click(function (){
        for (let j = 0; j < maD; j++) {
          let angle = Math.PI*2/maD;
          let x = Math.cos(angle*j);
          let y = Math.sin(angle*j);
          maSvg.css('top', x).css('left', y);
          $('.ma').append(maSvg)
        }
      })

      // for (let a = 0; a < bD; a++) {
      //   let bBall = $('<div class="wrap" style="transform: rotate('+deg+'deg);"><div class="bBall"></div></div>');
      //   $('.b').append(bBall)
      //   deg+=10;
      //   if (deg >= 360) {
      //     $('.bBall').css('margin-top', '-10px');
      //   }
      // }

    }
}
