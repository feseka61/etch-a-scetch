function resetButton() {
    location.reload(false);
}

const container = document.querySelector('.container')

function createGrids(gridsNum) {
    container.style.setProperty('--gridNumber', gridsNum)

    for (let i = 0; i < gridsNum**2; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

createGrids(16);

const gridItem = document.querySelectorAll('div.grid');

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', function() {
        gridItem[i].style.backgroundColor = 'black';
    })
}



const btn = document.getElementById('resetBtn');

btn.addEventListener('click', resetButton);

