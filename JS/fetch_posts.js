function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}


function displayPosts(data) {
    const postContainer = document.getElementById('post-container')
    for (const post of data) {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML = `
            <h4> User-${post.userId} </h4>
            <h5> Post: ${post.title} </h5>
            <p> Description: ${post.body} </p>
        `
        postContainer.appendChild(postDiv)
    }
}

loadPosts();