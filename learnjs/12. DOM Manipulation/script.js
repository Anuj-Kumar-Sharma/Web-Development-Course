const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h1>Hello</h1> <p> Hello World</p>"

box1.style.backgroundColor = "red"

const boxes = document.getElementsByClassName('box');

for(let i = 0; i<boxes.length; i++) {
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');


// creating new element

const newParagraph = document.createElement('p');
newParagraph.innerText = "This is brand new";
newParagraph.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newParagraph);




// const myBody = document.body;

// console.log(myBody);

// const box2 = document.getElementById('box-2');

// console.log(box2);

// const divs = document.getElementsByTagName('p');

// console.log(divs);

// const boxes = document.getElementsByClassName('random');

// console.log(boxes);

// const random = document.querySelectorAll('.container .random');

// console.log(random);