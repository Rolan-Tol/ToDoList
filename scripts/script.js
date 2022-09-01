let input = document.getElementById('input');
let task = document.querySelector('.card');
let buttonssa = document.querySelector('.create');

function toggleVisible() {
    input.classList.toggle('visible');
    buttonssa.classList.toggle('visible');
}

document.addEventListener('keyup', (event) => {
    let keyName = event.key;
    if (keyName === 'Enter') {
        toggleVisible();
    }
}) 