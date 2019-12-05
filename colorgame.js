var colors = generateRandomColors(6);

var pickedColor = randomColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#newColors")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
var squaresNum = 6;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    squaresNum = 3;
    colors = generateRandomColors(squaresNum);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    squaresNum = 6;
    colors = generateRandomColors(squaresNum);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; squares.length; i++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(squaresNum)
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    header.style.background = "#232323"
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            header.style.background = clickedColor;
            changeAllSquaresColors(clickedColor);
            resetButton.textContent = "Play again"
        } else {
            this.style.background = "#232323"
            message.textContent = "Try again!"
        }
    });
};

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