// A function using a while loop
function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// A function using a for loop
var Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute"
];

var content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// A function with an array
function color_array() {
    var Colors = [];
    Colors[1] = "Green";
    Colors[2] = "Red";
    Colors[3] = "Blue";
    Colors[4] = "Yellow";
    Colors[5] = "Orange";
    Colors[6] = "Purple";
    document.getElementById("Array").innerHTML =
        "My favorite color is " + Colors[6] + ".";
}

// Creating an object with the let keyword
function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black"
    };
    document.getElementById("car").innerHTML =
        "I have a " + car.year + " " + car.color + " " + car.make + ".";
}
