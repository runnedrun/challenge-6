var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();

  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	
  $(".element-display").html("");

  for (var i = 0; i < numberOfElements; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}