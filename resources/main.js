const grandparent = document.querySelector(".continer-lg");

// function e() {

// }

grandparent.addEventListener("click", e => {
  console.log(e);
});

// $('.hamburger').on('click', function() {
//   $('.dropdown-nav').toggleclass('active');
// });
// function myFunction(){
//   let doohickey = document.getElementsByClassName('dropdown-nav');
//   doohickey.setAttribute("class", "dropdown-nav-active");
//   doohickey.setAttribute("disabled", "");

// }
var x = document.getElementById("test").nodeType;
console.log(x);

function myFunction(){
  var el = document.getElementById("test");
  el.setAttribute("class", "dropdown-nav-active");
  el.setAttribute("disabled", "");
}