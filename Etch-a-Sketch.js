var num_rows = 16;
var numGrid = num_rows * num_rows;



function drawGrid() {
        const container = document.querySelector('#container');
        
    for(var i = 0; i < numGrid; i++) {
        const content = document.createElement('div');
        content.classList.add('pixel');
        content.setAttribute('id', i+1);
        //content.textContent = i+1;
        container.appendChild(content);
    }

    var col_str = [];
    for(var a = 1; a <= num_rows; a++){
        col_str = col_str + " 1fr";
    }

        console.log(col_str);
        container.style.gridTemplateColumns = `${col_str}`;
           
}

function listen() {

            const allpix = document.querySelectorAll('.pixel');
            allpix.forEach((div) => {
            div.addEventListener('mouseover', () => {
            div.style.background = 'red';
            });
        });

}

function clear() {
    const btn = document.querySelector('#clear');
    btn.addEventListener('click', () => {
        var new_rows = prompt("Enter how many columns you would like?", "100");
        num_rows = new_rows;
        numGrid = num_rows * num_rows;
        const container = document.querySelector('#container');    
        const allpix = document.querySelectorAll('.pixel');
        allpix.forEach((div) => {
        div.remove();
        
        });
        drawGrid();
        listen();
    });
}


drawGrid();
listen();
clear();


