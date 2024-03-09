function calculatePrice() {
  var selectedSize = document.querySelector('input[name="size"]:checked').value;
  var price = 0;

  if (selectedSize === 'Small') {
    price = 28;
  } else if (selectedSize === 'Medium') {
    price = 30;
  } else if (selectedSize === 'Large') {
    price = 33;
  }

  document.getElementById("price").innerHTML = price;
}


function validateForm(event) {
  return true;
}

function placeOrder(event) {
  event.preventDefault()
    alert('Order placed successfully! Thank you for your order.');
}

