document.addEventListener('loaded', ()=>{loaded()})

function loaded() {
  document.removeEventListener('loaded', loaded)
  let columns = document.querySelector('.columns')
  let a = columns.querySelectorAll('a')
  let detail = new Event('detail')

  a.forEach(element => {
    element.addEventListener('click', () => {
      document.dispatchEvent(detail) 
    })
  });
}