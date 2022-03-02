let promoTimeInSeconds;
let promoTimer;
let countdown = document.getElementById("countdown")

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(promoTimer)
})

document.getElementById("clearBtn").addEventListener("click", () => {
    clearInterval(promoTimer)
    countdown.innerHTML = ""
})

document.getElementById("btn").addEventListener("click", () => {
    promoTimeInSeconds = parseInt(document.getElementById("input").value) * 60;
    clearInterval(promoTimer)
    startCountdown();
});

function startCountdown() {   
    promoTimer = setInterval(function(){
        if(promoTimeInSeconds <= 0){
            clearInterval(promoTimer);
            countdown.innerHTML = "Countdown has ended!";
        }
        else {
            promoTimeInSeconds--;
            const days = Math.floor(promoTimeInSeconds / 3600 / 24);
            const hours = Math.floor(promoTimeInSeconds / 3600) % 24;
            const min = Math.floor(promoTimeInSeconds / 60) % 60;           
            const sec = Math.floor(promoTimeInSeconds % 60);
            countdown.innerHTML = `TIME: ${hours} hours : ${min} minutes : ${sec} seconds`
        }
    }, 1000);
}