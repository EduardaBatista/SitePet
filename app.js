const feed = document.querySelector('.feed')
window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(({users})=>{
        users.forEach(user =>{
            fetch('https://dummyjson.com/posts/'+user.id)
           .then(res => res.json())
           .then((posts)=>{
            fetch('https://jsonplaceholder.typicode.com/photos/'+user.id)
            .then(res => res.json())
            .then((photo)=>{
                const postagem = `<div class="post">
                <div class ="perfil">
                    <img src="${user.image}" alt="beagle">
                    <p>${user.username}</p>
                    </div>
                <img class="foto-post" src="${photo.url}" alt="kiara">
                <div class="reacao">
                    <div>
                    <img class="like butom" src="like.png" alt="curte">
                    <img class="butom" src="comenta.png" alt="comenta">
                    <img class="butom" src="compartilha.png" alt="compartilha">
                </div>
                <img class="butom" src="salve.png" alt="salve">
                </div>
                <p> ${posts.body} </p>
            </div>`
            feed.innerHTML += postagem
                                        var like = document.querySelectorAll('.like')
                                        like.forEach((i)=>{
                                        i.addEventListener('click', ()=>{
                                            i.classList.remove('butom')
                                            i.classList.add('Anima')
                                        });
                                            i.addEventListener('animationend', ()=>{
                                            i.classList.remove('Anima')
                                            i.classList.add('butom')
                                        });
                                    })
            })
           })
        })
    })
})