for (let i = 0; i < 256; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', 'div' + i);
    container.appendChild(content);
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

const button = document.getElementById('reset');
console.log(button);
button.addEventListener('click', function resetGridButton() {
    let changedSquares = document.querySelectorAll('.add-color');
    let arrayChangedSquares = Array.from(changedSquares);
    for (let i = 0; i < arrayChangedSquares.length; i++) {
        arrayChangedSquares[i].classList.remove('add-color');
    }
});