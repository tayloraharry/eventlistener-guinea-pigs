var output = document.getElementById("output-target");
var input = document.getElementById("keypress-input");
var gpig = document.getElementById("guinea-pig;")
var h1 = document.getElementById("page-title");
var article = document.getElementById("article");


h1.addEventListener("mouseover", function() {
  output.innerHTML = "";
  output.innerHTML = "You moved your mouse over the header";
});

h1.addEventListener("mouseleave", function() {
  output.innerHTML = "";
  output.innerHTML = "You left me!!";
});

article.addEventListener("click", function() {
  output.innerHTML = "";
  var targetedValue = event.target.innerHTML;
  output.innerHTML = "You clicked on the " + targetedValue + " section";
});

input.addEventListener("click", function(input) {
  output.innerHTML = "";
});

input.addEventListener("keypress", function(input) {
  output.innerHTML += input.key;
});

function addColor () {
  document.getElementById("guinea-pig").classList.add("red");
};

function increaseSize () {
  document.getElementById("guinea-pig").classList.add("big-font");
};

function addBorder () {
  document.getElementById("guinea-pig").classList.add("border-add");
};

function addBorderRadius () {
  document.getElementById("guinea-pig").classList.add("border-radius");
};