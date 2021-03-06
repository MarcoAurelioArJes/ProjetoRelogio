let seconds = document.querySelector('.marca_s');
let minutes = document.querySelector('.marca_m');
let hours = document.querySelector('.marca_h');

relogioDigital();
setInterval(relogioDigital, 1000);
setInterval(relogioAnalogico, 0);

function relogioDigital() {
    let hora = new Date();

    seconds = hora.getSeconds();
    minutes = hora.getMinutes();
    hours = hora.getHours();

    document.querySelector('.digital').innerHTML = `${fixTime(hours)}:${fixTime(minutes)}:${fixTime(seconds)}`;
}

function fixTime(time) {
    if (time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}

function relogioAnalogico() {

    let sec = document.querySelector('.marca_s');
    let min = document.querySelector('.marca_m');
    let hr = document.querySelector('.marca_h');

    let sDeg = (((360 / 60) * seconds) - 90);
    let mDeg = (((360 / 60) * minutes) - 90);
    let hDeg = (((360 / 12) * hours) - 90);

    sec.style.transform = `rotate(${sDeg}deg)`;
    min.style.transform = `rotate(${mDeg}deg)`;
    hr.style.transform = `rotate(${hDeg}deg)`;
}

