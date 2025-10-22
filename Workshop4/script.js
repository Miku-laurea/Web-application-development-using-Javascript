// ===== Exercise 1 =====

// Button 1:
document.getElementById("btn1").onclick = function() {
  const heading = document.getElementById("mainHeading");
  heading.textContent = "Modified Heading!";
};

// Button 2:
document.getElementById("btn2").onclick = function() {
  const ex2Heading = document.getElementById("exercise2Heading");
  ex2Heading.style.fontSize = "28px";
  ex2Heading.style.fontStyle = "italic";
  ex2Heading.style.color = "white";
  ex2Heading.style.backgroundColor = "#1966a2";
};

// Button 3:
document.getElementById("btn3").onclick = function() {
  const paragraphs = document.getElementsByTagName("p");
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML =
    "<i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus etvel auctor vitatiseer, consectetuer adipiscing.</i>";
  document.body.insertBefore(newParagraph, paragraphs[4].nextSibling);

  document.body.style.backgroundColor = "#f0f8ff";

  const img = document.createElement("img");
  img.src = "https://peda.net/alavus/varhaiskasvatus/ptr/ajankohtaista/aurinko-png2:file/download/1387c185b2c2d43d4b3b18e98ffc48f1fe826df8/aurinko.png";
  img.width = 100;
  document.body.insertBefore(img, newParagraph.nextSibling);
};

// ===== Exercise 2 =====

document.getElementById("hideMe").onchange = function() {
  document.getElementById("me").style.display = "none";
};

document.getElementById("showMe").onchange = function() {
  document.getElementById("me").style.display = "block";
};

document.getElementById("surprise").onchange = function() {
  const surpriseElems = document.getElementsByClassName("surprise");
  for (let elem of surpriseElems) {
    elem.style.fontSize = "20px";
    elem.style.color = "#dc0614";
  }
};

// ===== Exercise 3 =====

document.getElementById("carSelect").onchange = function() {
  const choice = this.value;
  alert("You selected: " + choice);

  const carImg = document.getElementById("carimage");

  if (choice === "tesla") {
    carImg.src = "https://muropaketti.com/wp-content/uploads/2025/01/0116-tesla-model-y.jpg";
  } else if (choice === "audi") {
    carImg.src = "https://img.ilcdn.fi/gYYrNuSx4p7s-q5QEMoDK-Xp6kQ=/full-fit-in/920x0/img-s3.ilcdn.fi/b35f5f137a8722d4d6791326454409d4616bcc9898750d5bab3b06d310717c7b.jpg";
  } else if (choice === "bmw") {
    carImg.src = "https://images.sanoma-sndp.fi/aa35c55f86e94e83b22677652370a394.jpg/normal/978.jpg";
  }

  carImg.onmouseover = function() {
    carImg.style.border = "5px solid red";
  };
  carImg.onmouseout = function() {
    carImg.style.border = "none";
  };
};

// ===== Exercise 4 =====
function moveCar() {
  const img = document.getElementById("carimage");
  img.style.position = "relative";
  img.style.left = "200px";
  img.style.top = "500px";
}

let pos = 0;
let direction = 1;
function doMove() {
  const img = document.getElementById("carimage");
  img.style.position = "relative";
  setInterval(() => {
    if (pos > 300 || pos < 0) direction *= -1;
    pos += direction * 5;
    img.style.left = pos + "px";
  }, 30);
}

function fadeOut() {
  const img = document.getElementById("carimage");
  let opacity = 1.0;
  const interval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(interval);
    } else {
      opacity -= 0.05;
      img.style.opacity = opacity;
    }
  }, 100);
}

function disappear() {
  const img = document.getElementById("carimage");
  img.remove();
}

// ===== Exercise 5 =====

document.getElementById("addRowBtn").onclick = function() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const salary = document.getElementById("salary").value;

  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = name || "Unknown";
  newRow.insertCell(1).textContent = position || "N/A";
  newRow.insertCell(2).textContent = salary || "$0";
};

