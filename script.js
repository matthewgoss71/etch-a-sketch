let x = 256;
let y = 16;
let z = 16;
gridSizeSet(x, y, z);

function gridSizeSet(x, y, z) {
    for (let i = 0; i < x; i++) {
        newWidth = 480/y;
        newHeight = 480/z;
        const container = document.querySelector('#container');
        container.style.gridTemplateRows = 'repeat(' + z + ', ' + newHeight + 'px)';
        container.style.gridTemplateColumns = 'repeat(' + y + ', ' + newWidth + 'px)';
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('id', 'div' + i);
        content.style.height = newHeight + 'px';
        content.style.width = newWidth + 'px';
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
    let changedSquares = document.querySelectorAll('.add-color');
    let arrayChangedSquares = Array.from(changedSquares);
    for (let i = 0; i < arrayChangedSquares.length; i++) {
        arrayChangedSquares[i].classList.remove('add-color');
    }
}

const buttonResize = document.getElementById('resize');
buttonResize.addEventListener('click', function resizeGridHeight() {
    do {var newHeight = parseInt(prompt('Please enter new grid height:', ''))
    } while (isNaN(newHeight) || newHeight < 1 || newHeight > 100);
    do {var newWidth = parseInt(prompt('Please enter new grid width:', ''))
    } while (isNaN(newWidth) || newWidth < 1 || newWidth > 100);
    x = newHeight * newWidth;
    y = newHeight;
    z = newWidth;
    setNewGrid();
    gridSizeSet(x, y, z);
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

function addColor(selectedId) {
    let changedSquare = document.getElementById(selectedId);
    changedSquare.classList.add('add-color');
}
