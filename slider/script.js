const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpeg', '5.jpg', '6.jpeg', '7.jpg', '8.jpg', '9.png', '10.jpg']
let frame = 0;

const dotsParent = document.querySelector(".dotsParent")
const imgStyle = document.querySelectorAll(".img")
const btnL = document.getElementById("btnL")
const btnR = document.getElementById("btnR")

function setImg(img) {
    document.getElementById("scr").style.backgroundImage = "url(" + img + ")";
}

window.addEventListener('load', function () {
    setImg(img[0])
    for (let i = 0; i < img.length; i++) {
        let dot = document.createElement("div")
        dot.className = "dot"
        dotsParent.appendChild(dot)
        dot.addEventListener("click", function () {
            dotsClick(i)
        })
    }

})

function dotsClick(number) {
    frame = number
    setImg(img[number])
    setDot(number)
}


function setDot(number) {
    let dots = document.querySelectorAll(".dot")
    for (let i = 0; i < dots.length; i++) {
        if (i !== number) {
            dots[i].style.background = "#5379d1"
        } else {
            dots[number].style.background = "white" // текущая картинка
        }
    }
}

let pos;
let animation;


function toLeft() {
    pos = -150;
    imgStyle[0].style.left = pos + 'px';
    btnL.disabled = true // когда кликнули, кликнуть еще раз сразу же нельяз
    btnR.disabled = true

    const changePosition = () => {
        if (pos === 0) {
            clearInterval(animation);
            btnL.disabled = false
            btnR.disabled = false
        } else {
            pos++;
            imgStyle[0].style.left = pos + 'px';
        }
    }
    animation = setInterval(changePosition, 5) // анимация через setInterval
}

function toRight() {
    pos = -150;
    imgStyle[0].style.right = pos + 'px';
    btnL.disabled = true
    btnR.disabled = true
    const changePosition = () => {
        if (pos === 0) {
            clearInterval(animation);
            btnL.disabled = false
            btnR.disabled = false
        } else {
            pos++;
            imgStyle[0].style.right = pos + 'px';
        }
    }
    animation = setInterval(changePosition, 5)
}


function left() {
    frame--;
    if (frame < 0) frame = img.length - 1;
    setImg(img[frame]);
    setDot(frame)
    toLeft()
}

function right() {
    frame++;
    if (frame === img.length) frame = 0;
    setImg(img[frame]);
    setDot(frame)
    toRight()
}

