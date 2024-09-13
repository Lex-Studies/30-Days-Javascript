let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDeg = second*6+90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = min*6+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (hour%12)*30 + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`

    let hands = document.querySelectorAll(".hand");
    for(let i = 0; i < hands.length; i++){
        hands[i].classList.add = "noTransition";
    }
}

setInterval(setDate, 1000);