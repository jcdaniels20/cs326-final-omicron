var slideIndex = 1;
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function cottontail() {
  document.getElementById('SpeciesName').innerHTML = "New England Cottontail"
  var img = document.createElement("img")
  img.src = "Images/cottontail_bunny.jpg"
  img.height = 250; 
  img.width = 400;
  document.body.appendChild(img);
}

function cottontail() {
  document.getElementById('SpeciesName').innerHTML = "New England Cottontail"
  var img = document.createElement("img")
  img.src = "Images/cottontail_bunny.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.body.appendChild(img);
  document.getElementById("shortBio").innerHTML = "The New England cottontail lives in parts of New England and New York. Over the last 50 years the range of this once-common rabbit has shrunk and its population has dwindled so that today it needs our help to survive. A critical threat is the loss of habitat, places where rabbits can find food, raise their young, and escape predators. Development has taken much land once inhabited by cottontails and other wildlife. And thousands of acres that used to be young forest (ideal cottontail habitat) have grown up into older woods, where rabbits don't generally live. Today the New England cottontail is restricted to southern Maine, southern New Hampshire, and parts of Massachusetts, Connecticut, Rhode Island, and New York east of the Hudson River - less than a fifth of its historic range."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.fws.gov/northeast/pdf/necotton.fs.pdf'>here</a>"
}


