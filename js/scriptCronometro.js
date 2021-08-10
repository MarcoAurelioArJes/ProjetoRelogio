//Variaveis para controlar o tempo
let hour = 0;
let minutes = 0;
let seconds = 0;
let milesimos = 0;

//Variáveis para receber os elementos do HTML
let hr = document.querySelector('.hour');
let min = document.querySelector('.minutes');
let seg = document.querySelector('.seconds');
let ms = document.querySelector('.milliseconds');

//Divisão do tempo no cronômetro
let divisao1 = document.querySelector('.divisao1');
let divisao2 = document.querySelector('.divisao2');

//Variáveis para parar o cronômetro
let intervalo;

//Variável para verificar o click;
let verifyClick = 0;

//Variável para armazenar o tempo marcado
let marcaTempo = 0;

//Events

//Função para o cronômetro começar
document.querySelector('.btn.btnCronometro').addEventListener('click', event => { 

    verifyClick = event.currentTarget.classList = 'btn btnCronometro';
    verificaClique(verifyClick);

    intervalo = setInterval( () => {
        //Definindo variáveis do cronometro
        hr.innerHTML = fixTime(hour);
        seg.innerHTML = fixTime(seconds);
        min.innerHTML = fixTime(minutes);
        ms.innerHTML = fixTime(milesimos);
        
        //Os milésimos que iniciam controlando o tempo
        milesimos++;
        
        if (milesimos == 99) {
            milesimos = 0;
            
            seconds++;
        } else if (seconds > 59) {
            milesimos = 0;
            seconds = 0;
            
            min.style.display = 'block';
            minutes++;
            divisao2.style.display = 'block';
            
            seconds++;
        } else if (minutes > 59) {
            milesimos = 0;
            seconds = 0;
            minutes = 0;
            
            hr.style.display = 'block';
            divisao2.style.display = 'block';
            hour++;
            
            minutes++;
            min.style.display = 'block';

            seconds++;
        }
    }, 10);
});

//Evento para pausar o cronômetro
document.querySelector('.btnPausar').addEventListener('click', event => {

    verifyClick = event.currentTarget = 'btn btnPausar';
    verificaClique(verifyClick);

    clearInterval(intervalo);
});

document.querySelector('.btn.btnMarcar').addEventListener('click', () => {
    if (verifyClick == "btn btnCronometro") {
        marcaTempo = `<span class="hms">${fixTime(hour)}:${fixTime(minutes)}:${fixTime(seconds)}</span> ${fixTime(milesimos)}<br>`;

        document.querySelector('.marcaTempo').innerHTML += marcaTempo;
    }
});

//Evento para zerar o cronometro
document.querySelector('.btnZerar').addEventListener('click', (event) => {
    verifyClick = event.currentTarget = 'btn btnZerar';
    verificaClique(verifyClick);
    
    hour = 0;
    minutes = 0;
    seconds = 0;
    milesimos = 0;

    hr.innerHTML = fixTime(hour);
    seg.innerHTML = fixTime(seconds);
    min.innerHTML = fixTime(minutes);
    ms.innerHTML = fixTime(milesimos);
});

//Functions

//Função para resolver o problema de ficar somente com uma casa em unidades
function fixTime(time) {

    return time < 10 ? '0' + time : time;
}

//Function para verificar o clique e desabilitar o botao que foi clicado
function verificaClique(verifyClick) {
    if (verifyClick == "btn btnCronometro") {
        document.querySelector('.btn.btnPausar').disabled = false;
        document.querySelector('.btn.btnCronometro').disabled = true;
    } else if ((verifyClick == "btn btnPausar")) {
        document.querySelector('.btn.btnCronometro').disabled = false;
        document.querySelector('.btn.btnPausar').disabled = true;
    } else if (verifyClick == "btn btnZerar") {
        document.querySelector('.btn.btnCronometro').disabled = false;
        document.querySelector('.btn.btnPausar').disabled = false;
        clearInterval(intervalo);
        document.querySelector('.marcaTempo').innerHTML = '';
        hr.style.display = 'none';
        min.style.display = 'none';
        divisao1.style.display = 'none';
        divisao2.style.display = 'none';
    }
}