const hour_el = document.getElementById('hr');
const minute_el = document.getElementById('mn');
const second_el = document.getElementById('sec');
const ampm_el = document.getElementById('pm');


function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = 'AM';

    if(hour > 12){
        hour = hour-12;
        ampm = 'PM';
    }

    hour_el.innerText = hour;
    minute_el.innerText = minute;
    second_el.innerText = second;
    ampm_el.innerText = ampm;
    let sound = new Audio('sound.mp3');
    
    setTimeout(function(){
        updateClock();
        sound.play();
    }, 1000)
}
updateClock();