let amountsOfPushes = 0;

const btnText = document.getElementById('btnText');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    amountsOfPushes++;
    if(amountsOfPushes == 1)btnText.innerText = "Taaaaak";
    if(amountsOfPushes == 2)btnText.innerText = "Hov hov, kun én gang";
    if(amountsOfPushes == 3)btnText.innerText = "Aaaav!! Stop!";
    if(amountsOfPushes == 4){
        btn.style.backgroundColor = "red";
        btnText.innerText = "Nu er jeg sur!!";}
    if(amountsOfPushes == 5)btnText.innerText = "Stop eller jeg går!";
    if(amountsOfPushes == 6)btnText.innerText = "Jeg mener det!!";
    if(amountsOfPushes == 7){
        btnText.innerText = "Farveeeel"
        const fadeEffect = setInterval(function () {
            if (!btn.style.opacity) {
                btn.style.opacity = 1;
            } // hello
            if (btn.style.opacity > 0) {
                btn.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 200);


    };



});

