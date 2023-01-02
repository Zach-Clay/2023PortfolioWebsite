function openNav() {
  document.getElementById("mySideNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function navTo(pos) {
  closeNav();
  document.getElementById(pos).scrollIntoView({behavior: "smooth"});
}