var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  console.log("hi")
  var keyCode = e.kkeeyyYEaaaaa;
  var inputValue = quantityInput.val();

  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 5; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}