const TimeText = document.querySelector('.text-data');


setInterval(()=> {
    const time = new Date();
const realtime = time.toLocaleTimeString();
TimeText.innerText = realtime;

}, 1000);

// setTimeout(()=> {
//     alert('Your time us ended');
// }, 3000)

// ________________************** Time&Timer Toggling funtionality*************____________

const liveTimeBtn = document.querySelector('.get-liveTime');
const TimerBtn = document.querySelector('.get-timer');
const getLiveTime = document.querySelector('.watch-box');
const getTimer = document.querySelector('.timer');


 const liveTimeBtnFunc= ()=> {
    getLiveTime.style.opacity = "1";
    getTimer.style.opacity = "0";
    document.body.style.backgroundColor = "#434343";
 }

 const TimerBtnFunc= ()=> {
     getTimer.style.opacity = "1";
    getLiveTime.style.opacity = "0";
    document.body.style.backgroundColor = "slateblue";
 }

 liveTimeBtn.addEventListener('click', liveTimeBtnFunc);
 TimerBtn.addEventListener('click', TimerBtnFunc);
// _______________________________________________________
// _____**************functionality for Timer*************____

const countDownEle = document.getElementById('countDown');
const resetValueEle = document.querySelector('.reset-value');

let countStart = 0;
let intervalId;

// Function to start timer...
const startTimer = ()=> {
    intervalId = setInterval(()=> { 
        const count = countStart++;
        countDownEle.innerText = count;
    },1000);   
}

// Function to stop timer...
const stopTimer = ()=> {
    clearInterval(intervalId);  
}

// Function to reset timer...
const resetTimer = ()=> {
    countStart = 0;
    countDownEle.innerText = countStart;
    clearInterval(intervalId);
}

// Function to get specific timer...
const getSpecTimer = ()=> {
    const ele = document.createElement('p');
    ele.classList.add('paragraph');
    resetValueEle.append(ele);
    ele.innerText = `Your current Time is: ${countStart-1}`;
    console.log(countStart);
}

// Function to clear timer...
const clearTimer = ()=> {
    resetValueEle.innerHTML = "";
}





// References of buttons...
document
.querySelector('.start-btn')
.addEventListener('click', startTimer)

document
.querySelector('.stop-btn')
.addEventListener('click', stopTimer)

document
.querySelector('.reset-btn')
.addEventListener('click', resetTimer)

document
.querySelector('.get-timeBtn')
.addEventListener('click', getSpecTimer)

document
.querySelector('.clr-timeBtn')
.addEventListener('click', clearTimer)


