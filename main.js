const container = document.querySelector('.container')

function createGrids(gridsNum) {
    container.style.setProperty('--gridNumber', gridsNum)

    for (let i = 0; i < gridsNum**2; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

createGrids(64);

let gridItem = document.querySelectorAll('div.grid');

function painter(){
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function() {
            gridItem[i].style.backgroundColor = 'black';
        })
    }
}

painter()

function resetButton(){
    for (let i = 0; i < gridItem.length; i++)
        container.removeChild(gridItem[i]);
    let gridsNum = +prompt('grid line number (16-128')
    if (gridsNum > 128) {
        gridsNum = 128
    } else if (gridsNum < 16 || !gridsNum) {
        gridsNum = 16
    }
    createGrids(gridsNum);
    gridItem = document.querySelectorAll('div.grid');
    painter();
}

const btn = document.getElementById('resetBtn');

btn.addEventListener('click', resetButton)
