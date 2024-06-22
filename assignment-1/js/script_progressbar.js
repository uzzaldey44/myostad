// let circularProgress = document.querySelector(".circular-progress"),
  let  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue} +`
    // circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);


let  Value = document.querySelector(".value");

let StartValue = 0,    
    EndValue = 98,    
    speed1 = 100;
    
let progress2 = setInterval(() => {
    StartValue++;

   Value.textContent = `${StartValue} %`
    // circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(StartValue == EndValue){
        clearInterval(progress2);
    }    
}, speed);




let  Value1 = document.querySelector(".value1");

let StartValue1 = 0,    
    EndValue1 = 92,    
    speed2 = 100;
    
let progress3 = setInterval(() => {
    StartValue1++;

   Value1.textContent = `${StartValue1} %`
    // circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(StartValue1 == EndValue1){
        clearInterval(progress3);
    }    
}, speed);


                    