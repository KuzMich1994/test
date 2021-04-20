const clickableCounter = () => {
    const button = document.querySelector('.button');
    let counter = 0;

    button.addEventListener('click', () => {
        counter++;
        button.textContent = counter;
    });
};

clickableCounter();
