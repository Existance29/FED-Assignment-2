const cartRow = document.getElementById("cart-row")
const subtotalText = document.getElementById("subtotal")
const gstText = document.getElementById("gst")
const totalText = document.getElementById("total")
const drawText = document.getElementById("draws")

function round(n) {
  return n.toFixed(2)
}
function loadCart() {
  console.log(cartRow)
  cart = JSON.parse(localStorage.getItem("cart"))
  console.log(cart)
  var subtotal = 0
  //loop through each item in the cart and display it
  cart.forEach(function (x, i) {
    //calculate subtotal
    var itemsubtotal = x["price"] * x["quantity"]
    subtotal += itemsubtotal
    cartRow.innerHTML += `
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img src="${x["src"]}" class="img-thumbnail me-2" style = "width:20%">
            <div>
              <h6>${x["name"]}</h6>
              <small class="text-muted">Price: $${x["price"]}</small>
              <div><a href = "" class="text-decoration-none cursor-pointer" onclick = "remove(${i})">Remove</a></div>
            </div>
          </div>
        </td>
        <td>
          <input type="number" class="form-control" value="${x["quantity"]}" disabled>
        </td>
        <td class="text-end">$${itemsubtotal}</td>
      </tr>  
      `

  });

  subtotalText.innerText = subtotal
  //calculate gst and total
  var gst = subtotal * 9 / 100
  gstText.innerText = round(gst)
  var total = gst + subtotal
  totalText.innerText = round(total)
  //calculate number of draws earned and display
  draws = Math.floor(total/50)
  drawText.innerText = draws
}

async function checkOut() {
  //dont let user check out unless they are logged in
  if (!isLoggedIn()) {
    localStorage.setItem("profileRedirect", "./cart.html")
    //save the place to redirect after user signs in
    location.href = "./login.html"
    return
  }

  //allocate draws
  var data = await getAccount()
  data["pulls"] += draws
  updateAccount(data)
  //clear the cart
  localStorage.removeItem("cart")
  location.href = "./index.html"
}

function remove(i) {
  //remove the item from cart and save it
  cart.splice(i, 1)
  localStorage.setItem("cart", JSON.stringify(cart))
  //since clicking the remove text reloads the page and thus calls loadCart again, 
  //there is no need to update the page's contents here
}
