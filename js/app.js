//Función para previsualización

var $textInput = $("#text-input");
var $commentPreview = $("#preview");

$textInput.on("keyup", function() {
  $commentPreview.text($textInput.val());
})

//Función para pintar
// $("#add-text").click(paintText);
// var $textInput = $("#text-input");
//
// function paintText(text) {
//   var $text = $textInput.val();
//   // console.log($text);
//
//   var $commentContainer = $("<div />");
//   var $containerP = $("<p />");
//
//   $commentContainer.append($containerP);
//   $containerP.append($text);
//
//
//   $(".comment-area").prepend($commentContainer);
// }


//Variables

var changeToLarge = document.getElementById("change-to-large");
var changeToMedium = document.getElementById("change-to-medium");
var changeToSmall = document.getElementById("change-to-small");
var changeTextColor = document.getElementById("change-text-color");
var changeBackgroundColor = document.getElementById("change-background-color");
var leftAlign = document.getElementById("left-align");
var centerAlign = document.getElementById("center-align");
var rightAlign = document.getElementById("right-align");
//Función aumentar el tamaño del texto

var textInput = document.getElementById("text-input");
var commentPreview = document.getElementById("preview");

//Función agrandar el texto.
// $("#change-to-large").click(makeTextLarge);
changeToLarge.addEventListener("click", makeTextLarge);
function makeTextLarge() {
  commentPreview.style.fontSize = "100px";
}

//Función hacer de tamaño mediano el texto.
changeToMedium.addEventListener("click", makeTextMedium);
function makeTextMedium() {
  commentPreview.style.fontSize = "60px";
}

//Función hacer pequeño el texto.
changeToSmall.addEventListener("click", makeTextSmall);
function makeTextSmall() {
  commentPreview.style.fontSize = "30px";
}

//Función para cambiar el Color
changeTextColor.addEventListener("click", coloredText);
function coloredText () {
  var chooseTextColor = prompt("Escribe un color, en inglés");
  commentPreview.style.color = chooseTextColor;
}

//Función para cambiar el background
changeBackgroundColor.addEventListener("click", coloredBackground);
function coloredBackground () {
  var chooseBackgroundColor = prompt("escribe un color, en inglés");
  commentPreview.style.background = chooseBackgroundColor;
}

//Función para alinear texto a la izquierda
leftAlign.addEventListener("click", alignTextToLeft);
function alignTextToLeft () {
  commentPreview.style.textAlign = "left";
}

//Funcion para alinear texto al centro
centerAlign.addEventListener("click", alignTextToCenter);
function alignTextToCenter () {
  commentPreview.style.textAlign = "center";
}

//Función para alinear texto a la derecha
rightAlign.addEventListener("click", alignTextToRight);
function alignTextToRight () {
  commentPreview.style.textAlign = "right";
}
