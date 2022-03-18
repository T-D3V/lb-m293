import {header,footer} from './modules/footer_header.js'
import {landing} from './modules/landing.js'
import {login} from './modules/login.js'
import {overview} from './modules/overview.js'
import {detail} from './modules/detail.js'
import {changeview} from './modules/changeview.js'
import {error404} from './modules/errors.js'

const routes = {
  '/' : landing,
  '/login' : login,
  '/overview' : overview,
  '/detail' : detail,
  '/changeview' : changeview,
  '/404': error404
};

const onNavigate = (pathname) => {
  if(window.location.href !== window.location.origin + pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
  }
  loadPage()
}

window.addEventListener('DOMContentLoaded', function(){
  loadPage()
})

window.onpopstate = () => {
  loadPage()
}

function loadPage(){
  document.body.innerHTML = `${header}${routes[window.location.pathname]?routes[window.location.pathname]:routes['/404']}${footer}`
  if(!routes[window.location.pathname]){
    onNavigate('/404')
  }
  let navButtons = document.querySelectorAll('.nav-button')
  navButtons.forEach(button => {
    let curId = button.id
    button.addEventListener('click', function(){
      onNavigate(`/${curId !== 'landing'? curId : ''}`)
      return false
    })
  })
}