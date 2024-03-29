var prevScrollpos = window.pageYOffset;
const key = "65acea2790880b217c3a0f88"
/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    // Collapse the navbar by triggering the 'collapse' command if it is open
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapsible = document.getElementById('navbarNav');
    if (window.getComputedStyle(navbarToggler).display !== 'none' && !navbarToggler.classList.contains('collapsed')) {
      new bootstrap.Collapse(navbarCollapsible, {
        toggle: false
      }).hide();
    }
  
    /* if we're scrolling up, or we haven't passed the header,
       show the header at the top */
    if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
      headerDiv.style.top = "0";
    }
    else{
      /* otherwise we're scrolling down & have passed the header so hide it */
      headerDiv.style.top = "-70px";
    } 
  
    prevScrollpos = currentScrollPos;
}



//check if user is logged in
function isLoggedIn(){
  var id = localStorage.getItem("userid")
  return !(id == null || id === "undefined")
}
function isEmpty(str){
  return str.trim() == ""
}
//check if user is logged in before redirecting to the page
function checkLogin(path){
  if (isLoggedIn()){
    location.href = path
  }
  else{
    location.href = "./login.html"
    //save the place to redirect after user signs in
    localStorage.setItem("profileRedirect",path)
  }
}
//retrieve from API
async function getAPI(url){
  let settings = {
    method: "GET",
    crossDomain: true,
    headers: {
      "content-type": "application/json",
      "x-apikey": key,
      "cache-control": "no-cache",
      
    }
  }
  const response = await fetch(url, settings)
  //check if the response was successful
  if (!response.ok){
    location.href = "error.html"
    console.log(response)
  }
  const json = await response.json()
  return json

}

async function getAccount(){
  var id = localStorage.getItem("userid")
  console.log(id)
  //return some dummy data for display purposes
  if (id == null || id === "undefined"){
    console.log("Not logged in")
    return {
    "email": "",
    "password": "",
    "username": "",
    "pulls": 0,
    "game-cds": "{\"2d-aim-trainer\":0, \"typing-speed-tester\":0}",
    "points": 0,
    "pity": 0,
    "country": "Singapore",
    "birthday": "2024-01-17"
    }
  }
  //else, get the user data
  var resp = await getAPI(`https://jsbtech-84ac.restdb.io/rest/profiles?q={"_id":"${id}"}`)
  var out = resp[0]
  //convert gacha-items to a array
  var gachaArray = JSON.parse(out["gacha-items"])
  out["gacha-items"] = gachaArray
  console.log(out)
  console.log(gachaArray)
  console.log(out["gacha-items"])

  return out
}

async function post(url, jsondata){
  let settings = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-apikey": key,
      "cache-control": "no-cache"
    },

    body: JSON.stringify(jsondata)
  }
  const response = await fetch(url, settings)
  const json = await response.json()
  return json
  
}
//update data
//dont use async function, nothing to return and makes it easy to use with non-async functions
//use keepalive, since this is usually called at the end
function update(url, id, jsondata){
  let settings = {
    keepalive: true,
    async: true,
    crossDomain: true,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "x-apikey": key,
      "cache-control": "no-cache"
    },
    body: JSON.stringify(jsondata)
  }

  fetch(url+`/${id}`, settings)
      .then(response => response.json())
      .then(response => {
        console.log(response)
  })
  
}

function updateAccount(jsondata){
  var id = localStorage.getItem("userid")
  //stringify gacha-items
  //create a deep clone of the parameter. We do not want changes made here to affect the variable passed in.
  //Avoid pass by sharing
  var dataCopy = structuredClone(jsondata)
  dataCopy["gacha-items"] = JSON.stringify(dataCopy["gacha-items"])
  update("https://jsbtech-84ac.restdb.io/rest/profiles", id, dataCopy)
  localStorage.setItem("userdata", JSON.stringify(dataCopy))
}

/* Handle which product category to show based */
function setProdCat(cat){
  //stored the category selected. To be retrieved by the next page
  localStorage.setItem("pCategory",cat)
}

//triggers when item is clicked
//stores the product object and redirects the user
function selectProduct(obj){
  localStorage.setItem("product",obj)
  location.href = "product-details.html"
}

async function productCategoryLoad(){
  //get the category selected
  var category = localStorage.getItem("pCategory")
  var bannerURL = "./Images/"
  var bannerTitle = "THE ULTIMATE PC EXPERIENCE\nInsane Series: Ultracore"
  var bannerSubtitle = "From $2000"
  var cutoff = "Mouse"
  //change the banner image, title, subtitle based on what category is selected
  if (category == "pc"){
    bannerURL += "PC-banner-1.png"
    cutoff = /,|-/ //use a regex statement to split by either commas or dashes
  }else if (category == "mice"){
    bannerURL += "Mouse-banner-1.png"
    bannerTitle = "Gaming\nMice"
    bannerSubtitle = "Award-winning wireless and wired gaming mice. Constantly innovating from sensors to shape, find the right one for you."
    cutoff = "Mouse"
  }else if (category == "keyboard"){
    bannerURL += "Keyboard-banner-1.webp"
    bannerTitle = "GAMING\nKEYBOARDS"
    bannerSubtitle = "Speed. Accuracy. Durability. Gaming keyboards are designed with the technology and materials required for high performance gaming."
    cutoff = "Keyboard"
  }else{
    bannerURL += "Audio-banner-1.jpg"
    bannerTitle = "GAMING\nHEADSETS & AUDIO"
    bannerSubtitle = "Immersive sound, crystal-clear mics, customizable EQ and optional 7.1 surround. Everything you need to get into the game and perform with the added benefit of precise audio."
    cutoff = /:|,|with|\|/ //use a regex statement to split by: with , | :
  }
  
  //Update banner image, text and advertisment
  document.getElementById("product-banner").style.backgroundImage = `url(${bannerURL})`
  document.getElementsByTagName("h1")[0].innerText = bannerTitle
  document.getElementsByTagName("p")[0].innerText = bannerSubtitle
  document.getElementById("advertisment").src = `./Images/mini_banner_${category}.png`
  
  //get the items from the api. Use a query to get items only from the category in descending order of sales
  var apiData = await getAPI(`https://jsbtech-84ac.restdb.io/rest/items?q={"category":"${category}"}&h={"$orderby":{"sales":-1}}`)
  //iterate through all items and display them
  for (var i = 0; i < apiData.length; i++){
    var data = apiData[i]
    //Shorten the name, get only the relevant text using the cutoff variable 
    var name = data["name"].split(cutoff)[0]
    if (typeof cutoff == "string") name += cutoff //Only add the cutoff back if it is a string. This is to avoid adding the regex statement
    //create the product item
    var productDiv = document.createElement("div") //create a div element
    productDiv.className = "product-display" //apply the class
    productDiv.id = JSON.stringify(data) //store the object as its id
    productDiv.setAttribute("onclick","selectProduct(this.id)") //trigger the function on click. Pass the object into the function
    productDiv.setAttribute("data-aos","fade-up") //apply aos
    productDiv.setAttribute("data-aos-once","true")
    //fill in the div's content
    productDiv.innerHTML+= ` 
      <img src="https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/${data["_id"]}_1.png" referrerpolicy="no-referrer" alt="${name}">
      <div class = "text">
        <label class = "title">${name}</label>
        <label class = "price">S$${data["price"]}</label>
      </div>
    `

    //add the first 4 popular items to the best sellers section
    if (i < 4){
      document.getElementById("best-seller").appendChild(productDiv)
    }
    else{
      //add the item to the all products grid
      document.getElementById("more-products").appendChild(productDiv)
    }
  }
  //hide the loading screen and show the content
  document.getElementById("loading-screen").style.display = "none"
  document.getElementById("loaded-content").style.display = "block"
  //load aos
  AOS.init()

}

function showProduct(){
  //hide the success alert
  document.getElementById("cart-success").style.display = "none"
  //retrieve the product object
  pObj = JSON.parse(localStorage.getItem("product"))
  //update the page's elements
  document.getElementById("product-name").innerText = pObj["name"]
  console.log(pObj["description"].replace("\n","\n\n"))
  document.getElementById("product-details").innerText = pObj["description"].replaceAll("&amp;","&").replaceAll("\n","\n\n")
  document.getElementById("price").innerText = `S$${pObj["price"]}`
  img_src = `https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/${pObj["_id"]}_1.png`
  document.getElementById("productImg").src = img_src
  document.getElementById("productImg_original").src = img_src
}

function addToCart(){
  cart = localStorage.getItem("cart")
  //check if a cart exists
  //if it doesnt, make a new one
  if (cart == null){
    cart = []
  }
  else{
    cart = JSON.parse(cart) //convert from string to array
  }
  //get the product object
  pObj = JSON.parse(localStorage.getItem("product"))
  //get the quantity and add it to the object
  out = {
    "_id": pObj["_id"],
    "name": pObj["name"],
    "quantity": parseInt(document.getElementById("quantity").value),
    "price": pObj["price"],
    "src": `https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/${pObj["_id"]}_1.png`
  }
  cart.push(out)
  console.log(cart)
  //save the cart
  localStorage.setItem("cart", JSON.stringify(cart))

  //shows the success alrt for 2 secs
  //start playing the lottie animation + enter text
  document.getElementById("cart-success-content").innerHTML = 
  `<dotlottie-player src="https://lottie.host/4377115b-47bb-4c44-9302-598d7f225602/qpO9TCh4pH.json" background="transparent" speed="0.9" style="width: 60px; height: 60px;" autoplay></dotlottie-player>
  Item Added To Cart`
  //use a slide down animation
  $("#cart-success").slideDown(400)
  setTimeout(function() {
    document.getElementById("cart-success").style.display = "none";
  }, 2000)

}



