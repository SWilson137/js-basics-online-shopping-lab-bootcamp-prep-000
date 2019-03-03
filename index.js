var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)
 var cartItem = { [item] : price }
 cart = [...cart, cartItem]
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var message = 'In your cart, you have'
  var len = cart.length
  var lastIndex = len - 1
  var item
  var itemPrice
  if (len == 0) {
    message = 'Your shopping cart is empty.'
  } else if (len == 1) {
    [item, itemPrice] = getItemKeyAndValue(cart[0])
    message += ` ${item} at $${itemPrice}.`
  } else {
    for (var i = 0; i < len; i++) {
      [item, itemPrice] = getItemKeyAndValue(cart[i])
      if (i !== lastIndex) {
        message += ` ${item} at $${itemPrice},`
        if (len == 2) {
          message = message.substring(0, message.length - 1)
        }
      } else {
        message += ` and ${item} at $${itemPrice}.`
      }
    }
  }
  console.log(message)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
