const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const buttonStartRef = document.querySelector('[data-action="start"]');
const buttonStopRef = document.querySelector('[data-action="stop"]');

buttonStartRef.addEventListener('click', onClickStart);
buttonStopRef.addEventListener('click', onClickStop);

const changeBackground = () => {
  const randomIndex=randomIntegerFromInterval(0, 5);
  const color= colors[randomIndex];
  let value= `background-color: ${color}`;
  bodyRef.setAttribute('style',value);
  console.log(color);
}
let intervalId = null
const onClickStart = () => { 
  intervalId= setInterval(changeBackground,1000);
  buttonStartRef.disabled = true;
}

const onClickStop = () => {
  if(intervalId){
    clearInterval(intervalId);
    buttonStartRef.disabled =false;
  }
}


