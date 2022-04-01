export class Router {
  constructor(config){
    this.config = config
    this._loadInitialRoute()
  }

  loadRoute(...UrlSegments){
    document.body.style.display = 'none'
    const matchedRoute = this._matchUrlRoute(UrlSegments)

    const url = `/${UrlSegments.join('/')}`
    if(window.location.pathname !== url){
      history.pushState({}, '', url)
    }
    
    document.title = `BBB TimeTable | ${matchedRoute.title}`

    let scripts = document.head.querySelectorAll('script[data-include="route"]')
    let links = document.head.querySelectorAll('link[rel="stylesheet"][data-include="route"]')

    links.forEach(link => {
      link.remove()
    })

    scripts.forEach(script => {
      script.remove()
    })

    matchedRoute.css.forEach(element => {
      var link = document.createElement("LINK")
      link.rel = "stylesheet"
      link.href = './assets/css/' + element + '.css'
      link.dataset.include = 'route'
      document.head.appendChild(link)
    })

    matchedRoute.js.forEach(element => {
      var script = document.createElement("script")
      script.src = './assets/js/' + element.src + '.js'
      script.type = element.type
      script.dataset.include = 'route'
      document.head.appendChild(script)
    })

    let nav = document.querySelector('nav')
    nav.innerHTML = ''
    let i = 0
    if(window.sessionStorage.getItem('permissons')){
      this.config.routes.forEach(route => {
        if(route.path !== '/404'){
          if(window.sessionStorage.getItem('permissons') >= route.permissions){
            if(route.path !== '/login'){
              i++
              let navbutton = document.createElement('a')
              navbutton.innerText = route.title
              navbutton.classList.add('nav-button', 'hover')
              navbutton.dataset.to = route.path.split('/').slice(1)
              navbutton.addEventListener('click', () => {
                this.loadRoute(navbutton.dataset.to)
              })
              nav.appendChild(navbutton)
            }
          }
        }
      })
      let navbutton = document.createElement('a')
      navbutton.innerText = 'Logout'
      navbutton.classList.add('nav-button', 'hover')
      navbutton.addEventListener('click', () => {
        window.sessionStorage.clear()
        this.loadRoute('')
      })
      i++
      nav.appendChild(navbutton)
    }else{
      this.config.routes.forEach(route => {
        if(route.path !== '/404'){
          if(0 >= route.permissions){
            i++
            let navbutton = document.createElement('a')
            navbutton.innerText = route.title
            navbutton.classList.add('nav-button', 'hover')
            navbutton.dataset.to = route.path.split('/').slice(1)
            navbutton.addEventListener('click', () => {
              this.loadRoute(navbutton.dataset.to)
            })
            nav.appendChild(navbutton)
          }
        }
      })
    }

    nav.style.width = i*10+'%'
    let main = document.querySelector('main')

    main.innerHTML = matchedRoute.body
    document.body.style.removeProperty('display')
  }

  _matchUrlRoute(UrlSegments){
    const matchedRoute = this.config.routes.find(route => {
      const routePathSegments = route.path.split('/').slice(1)
      if(routePathSegments.length !== UrlSegments.length){
        return false;
      }

      if(window.sessionStorage.getItem('permissions')){
        if(window.sessionStorage.getItem('permissions') < route.permissions){
          return false
        }
      }
      else if(0 < route.permissions){
        return false;
      }

      return routePathSegments.every((routePathSegments, i) => routePathSegments === UrlSegments[i])
    })

    return matchedRoute
  }
  
  _loadInitialRoute() {
    const pathnameSplit = window.location.pathname.split('/');
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';
    this.loadRoute(...pathSegments );
  }
}