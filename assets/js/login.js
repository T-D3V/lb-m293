document.addEventListener('loaded', ()=>{loaded()})

function loaded() {
  document.removeEventListener('loaded', loaded)
  let user = {username: 'test', password: 'test', permissions: 1}
  let loginbutton = document.querySelector('#login-btn')
  loginbutton.addEventListener('click', function() {
    let userfield = document.querySelector('#username')
    let passwordfield = document.querySelector('#password')
    if(passwordfield.value === user.password && userfield.value === user.username) {
      window.sessionStorage.setItem('permissions', 1)
      let loggedin = new Event('loggedin')
      document.dispatchEvent(loggedin) 
    }else{
      alert('Login Credentials are incorrect!')
    }
  })
}