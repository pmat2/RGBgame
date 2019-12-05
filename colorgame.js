// variables
var colors = [];
var pickedColor;
var squaresNum = 6;

// selector variables
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#newColors")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // main logic
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
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

    // easy/hard buttons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? squaresNum = 3 : squaresNum = 6;
            reset();
        });
    }
    reset();
}

function reset() {
    colors = generateRandomColors(squaresNum);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    message.textContent = "";
    header.style.background = "steelblue"
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.background = colors[i]
    }
}

// reset button handler
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(squaresNum)
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    message.textContent = "";
    header.style.background = "steelblue"
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
});

function changeAllSquaresColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
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