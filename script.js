//Tehtävä 1:
document.getElementById("task1").innerHTML =
    '<p><i>"If I had nine hours to chop down a tree, I\'d spend the first six sharpening my ax."</i></p>' +
    '<p>-- Abraham Lincoln</p>';

//Tehtävä 2:
function repeatingText() {
    let text = "";
    for (let i = 0; i < 50; i++) {
        text += "<p> Toistuva teksti</p>";
    }
    return text;
}
document.getElementById("task2").innerHTML = repeatingText();

//Tehtävä 3:
let task3Text = "";
if (navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) 
{
    task3Text = "<p>Käytät Mozilla-selainta.</p>";
    //window.location.href = "http://www.mozilla.org"; //kommenttina tehtävän 5 testauksen vuoksi
}
else 
{
    task3Text = "<p>Käytät muuta selainta.</p>";
    //window.location.href = "http://www.google.com"; //kommenttina tehtävän 5 testauksen vuoksi
}
document.getElementById("task3").innerHTML = task3Text;

//Tehtävä 4:
let isStudent = confirm("Oletko opiskelija?");
let task4Text = isStudent ?
    "<p>Welcome student</p>" :
    "<p>Sorry, this page is for students only</p>";
document.getElementById("task4").innerHTML = task4Text;

//Tehtävä 5;
var images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];

let task5Div = document.getElementById("task5");
task5Div.innerHTML = '<p>Ensimmäinen kuva:</p>' +
    '<img src="' + images[0] + '" alt="Kuva">';
function showRandomImage() {
    let index = Math.floor(Math.random() * images.length);
    return '<p>Satunnainen kuva:</p>' +
           '<img src="' + images[index] + '" alt="Satunnainen kuva">';
}
task5Div.innerHTML += showRandomImage();
