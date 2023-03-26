$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "../data/data.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});

function processData(allText) {
let allTextLines = allText.split(/\r\n|\n/);
let main = $("#main");
let ma = `<div class='ma' style="width:${data[1]};height:${data[1]};></div>`;
let b = `<div class='b' style="width:${data[2]};height:${data[2]};></div>`;
let r = `<div class='r' style="width:${data[3]};height:${data[3]};></div>`;
let a = `<div class='a' style="width:${data[4]};height:${data[4]};></div>`;
let f = `<div class='f' style="width:${data[5]};height:${data[5]};></div>`;
let mo = `<div class='mo' style="width:${data[6]};height:${data[6]};></div>`;
let t = Math.round(data[7] / 2);
let total = `<div class='total' style="width:${t};height:${t};></div>`;
for (let i = 1; i < parseInt(allTextLines.length); i++) {
    let country = $('.country');
    country.append(ma+b+r+a+f+mo+total);
  }
}
