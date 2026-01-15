// Global variable
var X = 10;

function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

// Function with local variable
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}

function Add_numbers_4() {
    document.write(Y + 100);
}

Add_numbers_3();

// Function using time
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
s