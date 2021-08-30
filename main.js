let digiHour = document.getElementById('hours');
let digiMinute = document.getElementById('minutes');
let digiSecond = document.getElementById('seconds');
let digiAmPm = document.getElementById('ampm');

function setClock(){
    // Current Time 
    let currentTime  = new Date();

    let theHour = currentTime.getHours();
    let theMinute = currentTime.getMinutes();
    let theSecond = currentTime.getSeconds();
// Conditions 
// 24 hours 
if (theHour === 0 ){
    theHour = 12;
}
else{
    theHour;
}
// 12 Hours 
if (theHour > 12){
    theHour = theHour - 12;
    digiAmPm.innerText = "PM";
}
//  Input "0" digit 
if (theHour < 10 ){
    theHour =  "0" +theHour ;
}
if (theMinute < 10 ){
    theMinute = "0" + theMinute ;
}
if (theSecond < 10 ){
    theSecond = "0"+ theSecond ;
}
// get hour = min = seconds
    digiHour.innerText = theHour;
    digiMinute.innerText = theMinute;
    digiSecond.innerText = theSecond;
}
setInterval(setClock, 1000);
setClock();