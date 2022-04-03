function mobileNav() {
  let nav = document.querySelector("nav");
  if(window.outerWidth <= 675){
    if(!nav.classList.contains("active")){
      nav.classList.add("active")
    }else {
      nav.classList.remove("active")
    }
  }
}