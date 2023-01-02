function openNav() {
  document.getElementById("mySideNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function navTo(pos) {
  document.getElementById("mySideNav").style.width = "0";
  
  setTimeout(() => {
    document.getElementById(pos).scrollIntoView({behavior: "smooth"});
  }, 200)
  
}