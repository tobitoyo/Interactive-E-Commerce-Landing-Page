
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
      console.log("incremented");
      count += 1;
  
      console.log(count);
      document.getElementById("count-el").innerText = count;
  
      return count
  }
  
  function decrement(){
      console.log("decremented");
      count -= 1;
      
      console.log(count);
      if (count < 0){
          count = 0;
          //I need to sort out negative values
      }
      document.getElementById("count-el").innerText = count;
      
      return count
  }

  

  