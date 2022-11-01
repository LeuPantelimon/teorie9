fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    const app = document.getElementById('app')
    json.forEach(post => {
        app.innerHTML += `<div class='col'>
         <h3>${post.title}</h3>
         <p>${post.body}</p>
         </div>`
        
    });
  })
  const moon = document.getElementById('moon')
  moon.addEventListener('click',(col)=>{
    const cols =document.querySelectorAll('.col')
     cols.forEach(col=>{
        col.classList.add('dark')
        
     })
    

  const nav = document.querySelector('nav')
  nav.classList.add('nav-dark')
})
