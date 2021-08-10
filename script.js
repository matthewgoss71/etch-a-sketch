//initial values of grid
let x = 256;
let y = 16;
gridSizeSet(x, y);

//makes grid, adjustable by user input and listens for 'mouseover'
function gridSizeSet(x, y) {
    for (let i = 0; i < x; i++) {
        newCellDim = 480/y;
        const container = document.querySelector('#container');
        container.style.gridTemplateRows = 'repeat(' + y + ', ' + newCellDim + 'px)';
        container.style.gridTemplateColumns = 'repeat(' + y + ', ' + newCellDim + 'px)';
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('id', 'div' + i);
        content.style.height = newCellDim + 'px';
        content.style.width = newCellDim + 'px';
        container.appendChild(content);
    }
        const gridSquares = document.querySelectorAll('.content');
        Array.from(gridSquares).forEach((div) => {
        div.addEventListener('mouseover', () => {
        addColor(div.id);
    });
    });
}

//reset grid button and functionality
const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', resetGrid); 

function resetGrid() {
    let changedSquares = document.querySelectorAll('.content');
    let arrayChangedSquares = Array.from(changedSquares);
    for (let i = 0; i < arrayChangedSquares.length; i++) {
        arrayChangedSquares[i].style.removeProperty('background-color');
    }
}

//resize grid button and functionality
const buttonResize = document.getElementById('resize');
buttonResize.addEventListener('click', function resizeGridHeight() {
    do {var newDim = parseInt(prompt('Please enter new grid dimension:', ''))
    } while (isNaN(newDim) || newDim < 1 || newDim > 100);
    x = newDim * newDim;
    y = newDim;
    setNewGrid();
    gridSizeSet(x, y);
})

function setNewGrid() {
    Array.from(document.querySelectorAll('.content')).forEach((div) => {
        div.remove();
    });
}

//black and white mode button and functionality
const buttonBAW = document.querySelector('#black-and-white');
buttonBAW.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.content');
        Array.from(gridSquares).forEach((div) => {
        div.addEventListener('mouseover', () => {
        addColor(div.id);
    });
    });
}); 

function addColor(selectedId) {
    let changedSquare = document.getElementById(selectedId);
    changedSquare.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

//rainbow button and functionality
const buttonRainbow = document.querySelector('#rainbow');
buttonRainbow.addEventListener('click', function rainbowColor() {
    Array.from(document.querySelectorAll('.content')).forEach((div) => {
        div.addEventListener('mouseover', () => {
            addRainbowColor(div.id);
        });
    });
});

function addRainbowColor(selectedId) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    let changedSquare = document.getElementById(selectedId);
    changedSquare.style.backgroundColor = '#' + randomColor;
}

//tint button and functionality
/* const buttonTint = document.querySelector('#tint');
buttonTint.addEventListener('click', function tintColor() {
    Array.from(document.querySelectorAll('.content')).forEach((div) => {
        div.addEventListener('mouseover', () => {
            addTintColor(div.id);
        });
    });
});

function addTintColor(selectedId) {
    let changedSquare = document.getElementById(selectedId);
    let alphaOriginal = window.getComputedStyle(changedSquare).getPropertyValue('background-color');
    console.log(alphaOriginal);
    let alpha = parseFloat(alphaOriginal.split(',')[3]);
    console.log(alpha);
    let alphaUp = alpha + 0.1;
    console.log(alphaUp);
    changedSquare.style.backgroundColor = 'rgba(0, 0, 0,' + alphaUp + ')';
}
 */