function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPost(data))
}
loadPosts()
function showPost(posts){
    const postDiv = document.getElementById('posts')
    for (const post of posts){
        const div = document.createElement('div');
        // console.log(post)
        div.classList.add('post')
        div.innerHTML=`
        <h2>
            Title: ${post.title}
        </h2>
        <p>
            Description: ${post.body}
        </p>
        `
        postDiv.appendChild(div);
        console.log(postDiv)
    }
}