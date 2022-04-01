import {Router} from './router.js'
import {config} from './config/config.js' 

document.addEventListener('DOMContentLoaded', function() {
   const router = new Router(config)

   config.global.css.forEach(element => {
      var link = document.createElement("LINK")
      link.rel = "stylesheet"
      link.href = './assets/css/' + element + '.css'
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