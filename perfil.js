const id = localStorage.getItem('id')
window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    fetch('https://dummyjson.com/users/'+id)
    .then(res => res.json())
    .then((user)=>{
        const foto = document.querySelector('.foto')
        const nome = document.querySelector('h1')
        const cidade = document.querySelector('h2')
        foto.setAttribute('src', user.image)
        nome.innerHTML = user.firstName
        cidade.innerHTML = user.address.city
    });
    fetch('https://dummyjson.com/quotes/'+id)
    .then(res => res.json())
    .then((frase)=>{
        const descricao = document.querySelector('.descricao')
        descricao.innerHTML = frase.quote
    });
})

const voltarReseta = window.history.forward()
voltarReseta.addEventListener('click', ()=>{
    localStorage.clear();
    window.history.back()
})