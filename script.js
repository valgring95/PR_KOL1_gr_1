let button = document.querySelector('.button');
button.addEventListener('click',changeColour);


function changeColour() {
    let box = document.querySelector(".box");
    box.style.backgroundColor = "#ff0000";
}

