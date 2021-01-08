const hamburger = document.querySelector(".hamburger");

// function e() {

// }

hamburger.addEventListener("click", (e) => {
  console.log("This is e; ", e);
  // let doohickey = document.getElementsByClassName("main-navigation");
  // console.log("What is doohickey? ",doohickey);
  // doohickey[0].setAttribute("class", "main-navigation extended");

  var toggle = document.getElementById("toggle");

  if (toggle.classList.contains("extended")) {
    toggle.classList.remove("extended");
  } else {
    toggle.classList.add("extended");
  }

});


// $('.hamburger').on('click', function() {
//   $('.dropdown-nav').toggleclass('active');
// });
// function myFunction(){
//   let doohickey = document.getElementsByClassName('dropdown-nav');
//   doohickey.setAttribute("class", "dropdown-nav-active");
//   doohickey.setAttribute("disabled", "");

// }

// =============== Temp delete ===
// var x = document.getElementById("test");
// console.log("This is x; ", x);

// function myFunction(){
//   var el = document.getElementById("test");
//   el.setAttribute("class", "dropdown-nav-active");
//   el.setAttribute("disabled", "");
// }