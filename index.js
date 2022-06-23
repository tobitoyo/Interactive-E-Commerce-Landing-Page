
let column = document.getElementById("nav-column");

function openNavColumn() {
    column.style.display = "flex"
}

function closeNavColumn() {
    column.style.display = "none"
}

// LANDING PAGE CAROUSEL
let carouselPosition = 1;
slideShow(carouselPosition);

//forward/back controls
function move(n) {
    slideShow(carouselPosition += n);
}

function slideShow(n){
    let i;
    let slides = document.getElementsByClassName("containers");
    let thumbnail = document.getElementsByClassName("img-thumb");
    let thumbnailBorder = document.getElementsByClassName("thumbnail-img");
    // console.log(slides);
    if (n > slides.length) {carouselPosition = 1}
    if (n < 1) {carouselPosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        thumbnailBorder[i].style.border = "none";
        thumbnail[i].style.opacity = "1";
    }
    slides[carouselPosition - 1].style.display = "block";
    thumbnail[carouselPosition - 1].style.opacity = "0.5"
    thumbnailBorder[carouselPosition - 1].style.border = "0.4rem solid hsl(26, 100%, 70%) ";
    // thumbnailBorder[carouselPosition - 1].style.background = "white"
}


// ADDING ITEMS FOR PURCHASE

function toSlide(n) {
    slideShow(carouselPosition = n);
  }

  let count = 0;

  function increment(){
    //   console.log("incremented");
      count += 1;
  
    //   console.log(count);
      document.getElementById("count-el").innerText = count;
  
      return count
  }
  
  function decrement(){
    //   console.log("decremented");
      count -= 1;
      
    //   console.log(count);
      if (count < 0){
          count = 0;
          //I need to sort out negative values
      }
      document.getElementById("count-el").innerText = count;
      
      return count
  }

//   LIGHTBOX

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

  //forward/back controls
function movelight(n) {
    lightbox(boxPosition += n);
}

  let boxPosition = 0;
  lightbox(boxPosition);

  function lightbox(m){
    
    let box = document.getElementsByClassName("lightbox-div");
    let thumbnail = document.getElementsByClassName("img-light");
    let thumbnailBorder = document.getElementsByClassName("lightnail-img");

    // console.log(box);
    // console.log(thumbnail);
    // console.log(thumbnailBorder);

    if (m >= box.length) {boxPosition = 0};
    if (m < 0) {boxPosition = box.length -1};
    for (let j = 0; j < box.length; j++) {
        box[j].style.display = "none";
        thumbnailBorder[j].style.border = "none";
        thumbnail[j].style.opacity = "1";
    
    }
    box[boxPosition].style.display = "block";
    thumbnailBorder[boxPosition].style.border = "0.4rem solid hsl(26, 100%, 70%)";
    thumbnail[boxPosition].style.opacity = "0.7";
    thumbnailBorder[boxPosition].style.background = "white";
  }

  function toBox(n) {
    lightbox(boxPosition = n);
  }


  // CART

  function openCart() {
    
    // this did not work
    // cartDisplay = "block"; 
    if (document.getElementById("count-el").innerText == 0) {
     return empty();
    }
    else{
      return document.getElementById("cart").style.display = "block";
    }
     
  }

  function closeCart() {
    if (document.getElementById("cart").style.display != "none") {
      document.getElementById("cart").style.display = "none"
    }
  }

  function addToCart() {
     let count = document.getElementById("count-el").innerText;
     console.log(count);
     document.getElementById("num").innerText = count
    let answer = 125.00 * count;
    console.log(answer);
     document.getElementById("result").innerText = "$" + answer +".00";
     document.getElementById("cart-num").innerText = count;
     if (count == 0) {
        document.getElementById("cart-num").innerText = "";
     }
    //  document.getElementById("cart").style.display = "block";
    openCart();
  }

  function empty() {
    document.getElementById("empty-div").style.display = "block";
    document.getElementById("checkout").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("cart-num").innerText = "";

  }

  let cartDisplay = document.getElementById("cart").style.display;

  

  //  EMPTY CART MESSAGE

 

 


  

  