const posts = document.querySelector(".posts")
const post = document.querySelectorAll(".post")
const countpost = document.querySelector("#countpost")
const showpost = document.querySelector("#showpost")

posts.style.display="none"
countpost.innerHTML=post.length
showpost.addEventListener("click", function(){
 posts.style.display= "grid"
}) 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json() )
.then(json=>{
    let template=''
    json.forEach(element => {
        template+=`
        <div class="post">  
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
    </div>`            
    });
    posts.innerHTML = template
})
