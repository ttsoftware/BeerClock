function timeForBeer(){

  var today = new Date();
  var beerDate = new Date();
  var n = beerDate.getDay();

  switch(n){
    case 0:
      beerDate.setDate(today.getDate()+5);
      break;
    case 1:
      beerDate.setDate(today.getDate()+4);
      break;
    case 2:
      beerDate.setDate(today.getDate()+3);
      break;
    case 3:
      beerDate.setDate(today.getDate()+2);
      break;
    case 4:
      beerDate.setDate(today.getDate()+1);
      break;
    case 5:
      if(beerDate.getHours() >= 13 && beerDate.getMinutes() >= 30){
        beerDate.setDate(today.getDate()+7);
      }
      break;
    case 6:
      beerDate.setDate(today.getDate()+6);
      break;
  }
  beerDate.setHours(13);
  beerDate.setMinutes(30);
  beerDate.setSeconds(0);

  var diff  = beerDate.getTime()/1000 - today.getTime()/1000;
  return diff;
}

$(document).ready(function() {
  clock = $('.clock').FlipClock(timeForBeer(), {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
          stop: function() {
            clock.setTime(timeForBeer());
            clock.start();
          }
        }
    });
});
