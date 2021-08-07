for (let i = 0; i < 256; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', 'div' + i);
    container.appendChild(content);
}

const gridSquares = document.querySelectorAll('.content');
    Array.from(gridSquares).forEach((div) => {
    let selectedSquare = div.addEventListener('mouseover', () => {
    console.log(div.id);
    addColor(div.id);
  });
});

function addColor(selectedId) {
    let changedSquare = document.getElementById(selectedId);
    changedSquare.classList.add('add-color');
}