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
            fetch('https://dog.ceo/api/breeds/image/random') 
            .then(res => res.json())
            .then((photo)=>{
                fetch('https://dummyjson.com/comments/'+user.id)
                .then(res => res.json())
                .then((comment) => {
                const postagem = `<div class="post">
                <div class ="perfil">
                    <img src="${user.image}" alt="beagle">
                    <a href="perfil.html" class="link" data-id="${user.id}"><p>${user.username}</p></a>
                    </div>
                <img class="foto-post" src="${photo.message}" alt="kiara">
                <div class="reacao">
                    <div>
                    <img class="like butom" src="like.png" alt="curte">
                    <img class="butom" src="comenta.png" alt="comenta">
                    <img class="butom" src="compartilha.png" alt="compartilha">
                </div>
                <img class="butom" src="salve.png" alt="salve">
                </div>
                <p> ${posts.body} </p>
                <div class="sessaoComentarios">
                <div class="comentario">
                    <h3>@${comment.user.username}</h3>
                    <p>${comment.body}</p>
                </div>
            </div>
            <div class="comentar-wrapper">
                <input type="text" class="comment-box" placeholder="adicionar comentário">
         </div>
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
                                    const link = document.querySelectorAll(".link");
                                    link.forEach(i =>{
                                        i.addEventListener('click', ()=>{
                                            const dataId = i.getAttribute("data-id")
                                            localStorage.setItem('id',dataId)
                                        })
                                    })
            })
           })
        })
    })
})
})
