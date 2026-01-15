function addition() {
    var add = 1 + 2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add;
}

function subtraction() {
    var sub = 9 - 7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub;
}

function multiplication() {
    var mult = 12 * 5;
    document.getElementById("Mlt").innerHTML = "12 × 5 = " + mult;
}

function division() {
    var divide = 39 / 3;
    document.getElementById("Div").innerHTML = "39 ÷ 3 = " + divide;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random() * 10;
}

function modulus_operator() {
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML =
        "38 ÷ 4 has a remainder of " + modulus;
}

function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value;
}

function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value;
}
