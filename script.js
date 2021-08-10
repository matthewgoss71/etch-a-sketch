let x = 256;
let y = 16;
gridSizeSet(x, y);

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

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', resetGrid); 

function resetGrid() {
    let changedSquares = document.querySelectorAll('.content');
    let arrayChangedSquares = Array.from(changedSquares);
    for (let i = 0; i < arrayChangedSquares.length; i++) {
        arrayChangedSquares[i].style.removeProperty('background-color');
    }
}

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

const gridSquares = document.querySelectorAll('.content');
    Array.from(gridSquares).forEach((div) => {
    div.addEventListener('mouseover', () => {
    addColor(div.id);
  });
});

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
    changedSquare.style.backgroundColor = 'black';
}

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
