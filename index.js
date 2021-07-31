
let position = 0;
function leftButton() {

    const left = document.getElementById("click");
    // if(position < 0)
    // {
    //     position += 400;
    // }
    if (position > -600) {
        position = -1800;
    }
    else {
        position += 600;
    }
    console.log(position);


    left.style.transform = `translateX(${position}px)`;

}

function rightButton() {

    const right = document.getElementById("click");
    // if(position > -800)
    // {
    //     position -= 400;
    // }
    if (position <= -1800) {
        position = 0;
    }
    else {
        position -= 600;
    }
    console.log(position);



    right.style.transform = `translateX(${position}px)`;

}
