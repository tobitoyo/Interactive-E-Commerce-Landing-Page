


function openNavColumn() {
  let column = document.getElementById("nav-column");
  column.style.display = "flex"
}

function closeNavColumn() {
  let column = document.getElementById("nav-column");
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

function toSlide(n) {
  slideShow(carouselPosition = n);
}

// ADDING ITEMS FOR PURCHASE

  function increment(){
    //   console.log("incremented");
    let count = Number(document.getElementById("count-el").innerText);
    // console.log(typeof count);
    count += 1;
  
    //   console.log(count);
      document.getElementById("count-el").innerText = count;
  
      return count
  }
  
  function decrement(){
    //   console.log("decremented");
    let count = document.getElementById("count-el").innerText;
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
  //I apply media query so lightbox does not open in some devices 
  if (window.matchMedia("(min-width: 48em)").matches) {
      document.getElementById('lightbox').style.display = 'flex';
    }
    
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
        thumbnailBorder[j].style.background = "none";
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

    // cartDisplay = "block"; this did not work
      document.getElementById("cart").style.display = "block";
      if (document.getElementById("count-el").innerText == 0) {
        return empty();
       }
       else {
        return fullCart();
       }          
  }

  function cart() {
    // close an open cart here!
    if (document.getElementById("cart").style.display != "none") {
      return (document.getElementById("cart").style.display = "none");
   }

   // open cart for first time
   else {
    openCart();
   }
  }

  function checkout() {
    if (document.getElementById("cart").style.display != "none") {
      document.getElementById("cart").style.display = "none"
      document.getElementById("cart-num").innerText = "";
      document.getElementById("count-el").innerText = "0";
    }

  }

  function addToCart() {
     let count = document.getElementById("count-el").innerText;
     let open = document.getElementById("empty-div").style.display;
    //  console.log(count);
     document.getElementById("num").innerText = count
    let answer = 125.00 * count;
    // console.log(answer);
     document.getElementById("result").innerText = "$" + answer +".00";
     document.getElementById("cart-num").innerText = count;
     if (count == 0) {
        document.getElementById("cart-num").innerText = "";
     }

    //  console.log(open);

    //  THIS WILL CHANGE THE CONTENT OF AN OPEN CART
    //  if (open == "block") {
    //   openCart();
    //  }

     //THIS OPENS CART ASS SOON AS YOU ADD TO CART
    openCart();

    //  document.getElementById("cart").style.display = "block";
  }

  function empty() {
    document.getElementById("empty-div").style.display = "block";
    document.getElementById("checkout").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("cart-num").innerText = "";
    document.getElementById("count-el").innerText = "0";
  }

  function fullCart() {
    document.getElementById("empty-div").style.display = "none";
    document.getElementById("checkout").style.display = "block";
    document.getElementById("product").style.display = "grid";
  }



  

  //  EMPTY CART MESSAGE

 

 


  

  