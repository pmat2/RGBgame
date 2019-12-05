// variables
var colors = [];
var pickedColor;
var circlesNum = 6;

// selector variables
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#newColors")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupCircles();
    setupButtons();
    reset();
}

function setupCircles() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function() {
            var clickedColor = this.style.background
            if (clickedColor === pickedColor) { //win
                header.style.background = clickedColor;
                changeAllSquaresColors(clickedColor);
                resetButton.textContent = "Play again"
                message.textContent = "Correct!";
            } else { //lose
                this.style.background = "#232323"
                message.textContent = "Try again!"
            }
        });
    };
};

function setupButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? circlesNum = 3 : circlesNum = 6;
            reset();
        });
    }
};

function reset() {
    colors = generateRandomColors(circlesNum);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    message.textContent = "";
    header.style.background = "steelblue"
    for (var i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.display = "block";
            circles[i].style.background = colors[i]
        } else {
            circles[i].style.display = "none";
        }
        circles[i].style.background = colors[i]
    }
}

// reset button handler
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(circlesNum)
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    message.textContent = "";
    header.style.background = "steelblue"
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.background = colors[i]
    }
});

function changeAllSquaresColors(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.background = color;
    }
};

function randomColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
};

function generateRandomColors(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        var val = "rgb(" + r + ", " + g + ", " + b + ")"
        arr.push(val)
    }
    return arr;
};