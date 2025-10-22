// ===== Exercise 1 =====
document.getElementById("btn1").onclick = function() {
    alert("You clicked me! " + new Date());
};

// Show/Hide table logic
let tableVisible = false;
let btn2 = document.getElementById("btn2");
let tableContainer = document.getElementById("tableContainer");

btn2.onclick = function() {
    if (!tableVisible) {
        let html = "<table class='display'><tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
        html += "<tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>";
        html += "<tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>";
        html += "<tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>";
        html += "<tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>";
        html += "<tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>";
        html += "</table>";

        tableContainer.innerHTML = html;
        tableVisible = true;
        btn2.textContent = "Hide table";
    } else {
        tableContainer.innerHTML = "";
        tableVisible = false;
        btn2.textContent = "Show table";
    }
};

document.getElementById("btn3").onclick = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let coords = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
            console.log(coords);
            document.getElementById("output").innerHTML = coords;
            window.location.href = "https://www.google.com/maps?q=" + position.coords.latitude + "," + position.coords.longitude;
        });
    } else {
        alert("Geolocation ei ole tuettu tässä selaimessa.");
    }
};

// ===== Exercise 2 =====
let heading2 = document.getElementById("exercise2");
heading2.onmouseover = function() {
    console.log("Stepped over my a mouse!");
};
heading2.onmouseout = function() {
    alert("Bye bye mouse!");
};

// ===== Exercise 3 =====
let textarea = document.getElementById("textdata");
let charCount = document.getElementById("charcount");
let keyPresses = 0;

textarea.onfocus = function() {
    textarea.value = "Please fill in the form with proper data.";
    textarea.style.backgroundColor = "#e0f7fa";
};

textarea.onkeydown = function() {
    keyPresses++;
    charCount.innerHTML = "Key presses: " + keyPresses;
};

document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();
    if (textarea.value.trim() === "") {
        alert("Textarea cannot be empty!");
    } else {
        alert("Form submitted successfully!");
    }
};

// ===== Exercise 4 =====
let div = document.getElementById("coordinates");
let coordsHeading = document.getElementById("coords");

div.onmousemove = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log("X: " + x + ", Y: " + y);
    coordsHeading.innerHTML = "X: " + x + ", Y: " + y;
};