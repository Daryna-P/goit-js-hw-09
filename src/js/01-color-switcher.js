const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

refs.btnStop.disabled = true;
let timerId = null;

function onBtnStartClick() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()}, 1000) 
};

function onBtnStopClick() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(timerId);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }