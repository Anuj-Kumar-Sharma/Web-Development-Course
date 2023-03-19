function myFunction() {
    console.log('I was clicked');
}

const mouseOver = () => {
    console.log('mouse over');
}

function keyPressEvent() {
    console.log('key was pressed');
}

function keyUpEvent() {
    console.log('key up was pressed');
}

function keyDownEvent() {
    console.log('key down was pressed');
}

//// event listeners

const box1 = document.getElementById('box-1');
// box1.addEventListener('mousemove', (e) => {
//     console.log('event object', e.clientX, e.clientY);
// })

box1.addEventListener('click', () => {
    console.log('clicked on box');
})

const container = document.getElementById('container');
container.addEventListener('click', () => {
    console.log('clicked on container');
}, true)

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown', (e) => {
    console.log('key', e.key);
})

nameInput.addEventListener('focus', (e) => {
    console.log('key', e);
})