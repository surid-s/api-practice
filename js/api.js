function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userName(data))
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function userName(data){
    const ul = document.getElementById('users');
    for (const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}
        Email: ${user.email}
        Id: ${user.id}
        Address: ${user.address.city};
        Website: ${user.website}`;
        ul.appendChild(li);
    }
}