function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name)
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }

}
