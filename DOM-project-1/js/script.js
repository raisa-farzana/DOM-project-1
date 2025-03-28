const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;

const updateCounter = () => {
    //..... plus button code......
    counter = counter + 1;
    counterElement.textContent = counter;

    if (counter >= 10) {
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled');
    };

    //..... minus button code......

    counter = counter - 1;
    counterElement.textContent = counter;

    if(counter <= 0) {
        minusBtn.setAttribute('disabled', true);
    }
    else{
        minusBtn.removeAttribute('disabled');
    }

}

plusBtn.addEventListener('click', () => {
    
    
});

minusBtn.addEventListener('click', () => {
    
    
});