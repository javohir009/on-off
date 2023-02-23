"use strict";

var on = document.querySelector(".on");
var off = document.querySelector(".off");
var body = document.querySelector(".body");
off.style.display = 'none';
on.addEventListener("click", function () {
  off.style.display = "block";
  on.style.display = "none";
  body.style.backgroundColor = "black";
});
off.addEventListener("click", function () {
  on.style.display = "block";
  off.style.display = "none";
  body.style.backgroundColor = "white";
});