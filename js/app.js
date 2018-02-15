//Función para previsualización
$(".text-input").keyup(showPreview);


function showPreview() {
  var $textInput = $(".text-input").val();
  console.log($textInput);

  if($($textInput).val().length > 0) {
    $($preview).html($textInput);
  }

}







//Función para pintar
$("#add-text").click(paintText);
var $textInput = $(".text-input");

function paintText(text) {
  var $text = $textInput.val();
  // console.log($text);

  var $commentContainer = $("<div />");
  var $containerP = $("<p />");

  $commentContainer.append($containerP);
  $containerP.append($text);


  $(".comment-area").prepend($commentContainer);
}
