const container = document.querySelector('.container');

function createGrids(gridsNum) {
    container.style.setProperty('--gridNumber', gridsNum);

    for (let i = 0; i < gridsNum**2; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

createGrids(16);

function randomColor() {
    let resColor = [];
    let hexTemp;
    for (let i = 0; i < 6; i++) {
        hexTemp = Math.floor(Math.random() * 16)
        switch (hexTemp) {
            case 15:
                resColor[i] = 'f';
                break;
            case 14:
                resColor[i] = 'e';
                break;
            case 13:
                resColor[i] = 'd';
                break;
            case 12:
                resColor[i] = 'c';
                break;
            case 11:
                resColor[i] = 'b';
                break;
            case 10:
                resColor[i] = 'a';
                break;
            default:
                resColor[i] = hexTemp;
        }
    }
    let result = '#' + resColor.join('')
    return result
}

function painter(){
    let gridItem = document.querySelectorAll('div.grid');
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function() {
            gridItem[i].style.backgroundColor = 'rgb(0,0,0)';
        })
    }
}

function grayScalePainter(currentBg) {
    const grayToBlack = ['rgb(234,234,234)', 'rgb(208,208,208)', 'rgb(182,182,182)', 'rgb(156,156,156)', 'rgb(130,130,130)',
                            'rgb(104,104,104)', 'rgb(78,78,78)', 'rgb(52,52,52)', 'rgb(26,26,26)', 'rgb(0,0,0)'];
    switch (gridItem[i].style.backgroundColor) {
        case grayToBlack[0]:
            currentBg = grayToBlack[1];
            break;  
        case grayToBlack[1]:
            currentBg = grayToBlack[2];
            break;
        case grayToBlack[2]:
            currentBg = grayToBlack[3];
            break;
        case grayToBlack[3]:
            currentBg = grayToBlack[4];
            break;
        case grayToBlack[4]:
            currentBg = grayToBlack[5];
            break;
        case grayToBlack[5]:
            currentBg = grayToBlack[6];
            break;
        case grayToBlack[6]:
            currentBg = grayToBlack[7];
            break;
        case grayToBlack[7]:
            currentBg = grayToBlack[8];
            break;
        case grayToBlack[8]:
            currentBg = grayToBlack[9];
            break;
        default:
            currentBg = grayToBlack[0];
    }
    return currentBg
}

function randomPainter(){
    let gridItem = document.querySelectorAll('div.grid');
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function() {
            gridItem[i].style.backgroundColor = randomColor();
        })
    }
}

painter()

function resetButton(){
    let gridItem = document.querySelectorAll('div.grid');
    for (let i = 0; i < gridItem.length; i++)
        container.removeChild(gridItem[i]);
    
    let gridsNum = +prompt('grid line number (1-64)')

    if (gridsNum > 64) {
        gridsNum = 64
    } else if (gridsNum < 1 || !gridsNum) {
        gridsNum = 1
    }

    createGrids(gridsNum);
    painter();
}

function grayScaleButton(){
    let gridItem = document.querySelectorAll('div.grid');
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function(){
            let currentBacgroundColor = gridItem[i].style.backgroundColor;
            gridItem[i].style.backgroundColor = grayScalePainter(currentBacgroundColor);
        }
    )}
}


const rstBtn = document.getElementById('resetBtn');
rstBtn.addEventListener('click', resetButton);

const grayBtn = document.getElementById('grayBtn');
grayBtn.addEventListener('click', grayScaleButton);

const rndmBtn = document.getElementById('randomBtn');
rndmBtn.addEventListener('click', randomPainter);