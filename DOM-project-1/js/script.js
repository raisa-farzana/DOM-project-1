const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;

const updateCounter = (value) => {
    //..... plus button code......
    counter = counter + value;
    counterElement.textContent = counter;

    if (counter >= 10) {
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled');
    };

    //..... minus button code......

    if(counter <= 0) {
        minusBtn.setAttribute('disabled', true);
    }
    else{
        minusBtn.removeAttribute('disabled');
    }

}

plusBtn.addEventListener('click', () => {
    updateCounter(1);
    
});

minusBtn.addEventListener('click', () => {
    updateCounter(-1);
    
});


