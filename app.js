const stopWatchControl = document.getElementsByClassName("stopWatch")[0];
const milliSecondControl = document.getElementsByClassName("miliSecond")[0];
const startBtnControl = document.getElementsByClassName("startButton")[0];
const pauseBtnControl = document.getElementsByClassName("pauseButton")[0];
const continueBtnControl = document.getElementsByClassName("continueButton")[0];
const restartBtnControl = document.getElementsByClassName("restartButton")[0];


let millisecond = 0;
    seconds = 0, 
    minutes = 0, 
    hours = 0;

const startTime = () => {
  millisecond += 10;
  
  if( millisecond === 1000) {
      millisecond = 0;
      seconds += 1;

      if ( seconds === 60) {
          seconds = 0;
          minutes += 1;

      }if (minutes === 60){
          minutes = 0;
          hours += 1;
      }
  }

  const millisecText = millisecond < 100 ? "00" + millisecond.toString() : millisecond;
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  milliSecondControl.textContent = millisecond;
  stopWatchControl.textContent = hourText +":" + minuteText +":"+ secondText;

};

//1000ms = 1 S
let intervalID;
startBtnControl.addEventListener("click", () => {
    intervalID = setInterval(startTime, 10);
});

pauseBtnControl.addEventListener("click", () => {
    clearInterval(intervalID);
});

continueBtnControl.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = setInterval(startTime, 10);
});

restartBtnControl.addEventListener("click", () => {
   clearInterval(intervalID);
    seconds = 0;
    minutes = 0;
    hours = 0;
    intervalID = setInterval(startTime, 10);
});
