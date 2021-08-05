let ms = new Date();

let hour = 0;
let minutes = 0;
let seconds = 0;
let milesimos = 1000 * 10**-3;

let divisao1 = document.querySelector('.divisao1');
let divisao2 = document.querySelector('.divisao2');

let intervalo1;
let intervalo2;

function pontaPe() {    

    intervalo1 = setInterval( () => {
        document.querySelector('.millisegundos').innerHTML = milesimos++;
        if (milesimos >= 99) {
            milesimos = 0;
        }
    }, 10);

    
    intervalo2 = setInterval( () => {

        if (milesimos < 99) {
            let seg = document.querySelector('.seconds');
            seg.innerHTML = `${fixTime(seconds)}`;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                let min = document.querySelector('.minutes');
                minutes++;
                min.innerHTML = `${fixTime(minutes)}`;
                min.style.display = 'block';
                divisao2.style.display = 'block';

                if (minutes == 60) {
                    minutes = 0;
                    let hr = document.querySelector('.hour');
                    hour++;
                    hr.innerHTML = h`${fixTime(hour)}`;
                    hr.style.display = 'block';
                    divisao1.style.display = 'block';
                }
            } 
        }
    }, 1000);
}

function fixTime(time) {

    return time < 10 ? '0' + time : time;
}

document.querySelector('.btnParar').addEventListener('click', () => {
    clearInterval(intervalo1);
    clearInterval(intervalo2);
});