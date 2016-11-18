// index.js


function update() {
  $('#clock').html(Date());
}

setInterval(update, 1000);
