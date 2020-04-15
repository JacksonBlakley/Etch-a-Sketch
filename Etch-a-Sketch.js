var num_rows = 100;
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


drawGrid();
listen();


