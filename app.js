import {Router} from './router.js'
import {config} from './config/config.js' 

document.addEventListener('DOMContentLoaded', function() {
   const router = new Router(config)

   document.addEventListener('loggedin', () => {
     router.loadRoute('overview')
   })

   document.addEventListener('detail', () => {
    router.loadRoute('detail')
  })

   config.global.css.forEach(element => {
      var link = document.createElement("LINK")
      link.rel = "stylesheet"
      link.href = './assets/css/' + element + '.css'
      link.type = "text/css"
      link.dataset.include = 'global'
      document.head.appendChild(link)
    })

    config.global.js.forEach(element => {
      var script = document.createElement("script")
      script.src = './assets/js/' + element.src + '.js'
      script.type = element.type
      script.dataset.include = 'global'
      document.head.appendChild(script)
    })
})

document.addEventListener('loaded', function() {eventMobileNav()})

function eventMobileNav(){
  document.removeEventListener('loaded', eventMobileNav)
  let icon = document.querySelector('.icon')
  icon.addEventListener('click', function() {
    mobileNav()
  })
}


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