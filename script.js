
let finish;
const spinnerContainer = document.getElementById("spinner-container");
const spinBtn = document.getElementById("spin-btn");
spinBtn.addEventListener('click', startSpinner);


function startSpinner(){
    spinnerContainer.classList.toggle('loading');
     if(spinnerContainer.classList.contains('loading')){
        spinBtn.textContent = "Stop"
        finish = setTimeout(()=>{
            spinBtn.textContent = "Finished"
        }, 10000);
    } else {
        if (finish) clearTimeout(finish)
        spinBtn.textContent = "Start";
    }
};
