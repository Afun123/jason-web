let ValueDisplays = document.querySelectorAll('.num');
let interval = 1000;

ValueDisplays.forEach((ValueDisplay) =>{
    let startValue = 0;
    let endValue =  parseInt(ValueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue +=1;
        ValueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }
    , duration);
});
