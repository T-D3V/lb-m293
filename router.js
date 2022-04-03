export class Router {
  constructor(config){
    this.config = config
    this._loadInitialRoute()
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loadRoute(...UrlSegments){
    var loadingstyle = document.createElement("LINK")
    loadingstyle.rel = "stylesheet"
    loadingstyle.href = './assets/css/' + this.config.loading.css + '.css'
    loadingstyle.type = "text/css"
    loadingstyle.dataset.include = 'loading'

    document.body.innerHTML = this.config.loading.body
    
    document.head.appendChild(loadingstyle)

    document.title = `Loading ... | BBB TimeTable`

    const matchedRoute = this._matchUrlRoute(UrlSegments)

    const url = `/${UrlSegments.join('/')}`
    if(window.location.pathname !== url){
      history.pushState({}, '', url)
    }

    let body = document.createElement('body')
    body.innerHTML =  matchedRoute.body

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
      link.type = "text/css"
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

    let nav = body.querySelector('nav')
    let navicon = body.querySelector('#nav-icon')
    nav.innerHTML = ''
    let i = 0
    if(window.sessionStorage.getItem('permissions')){
      this.config.routes.forEach(route => {
        if(route.path !== '/404'){
          if(window.sessionStorage.getItem('permissions') >= route.permissions){
            if(route.path !== '/login' && route.path !== '/detail' && route.path !== '/imprint'){
              i++
              let navbutton = document.createElement('a')
              navbutton.innerText = route.title
              navbutton.classList.add('nav-button', 'hover')
              navbutton.dataset.to = route.path.split('/').slice(1)
              navbutton.tabIndex = i
              navbutton.href = '#'
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
      navbutton.tabIndex = i
      navbutton.href = '#'
      navbutton.addEventListener('click', () => {
        window.sessionStorage.clear()
        this.loadRoute('')
      })
      i++
      nav.appendChild(navbutton)
    }else{
      this.config.routes.forEach(route => {
        if(route.path !== '/404' && route.path !== '/imprint'){
          if(0 >= route.permissions){
            i++
            let navbutton = document.createElement('a')
            navbutton.innerText = route.title
            navbutton.classList.add('nav-button', 'hover')
            navbutton.dataset.to = route.path.split('/').slice(1)
            navbutton.tabIndex = i
            navbutton.href = '#'
            navbutton.addEventListener('click', () => {
              this.loadRoute(navbutton.dataset.to)
            })
            nav.appendChild(navbutton)
          }
        }
      })
    }

    let imprintlink = body.querySelector('#linkimprint')
    imprintlink.addEventListener('click', () => {
      this.loadRoute(imprintlink.dataset.to)
    })


    navicon.addEventListener('click', () => {
      this.loadRoute(navicon.dataset.to)
    })

    nav.style.width = i*10+'%'
    await this.sleep(1000);
    loadingstyle.remove()
    document.title = `${matchedRoute.title} | BBB TimeTable`
    document.body = body

    let loaded = new Event('loaded')
    document.dispatchEvent(loaded)
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