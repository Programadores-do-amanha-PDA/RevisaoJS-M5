// CRUD

// C - CREATE
async function createUser(){
    const inputUsername = document.getElementById("username");
    let username = inputUsername.value;

    const result = await fetch("https://first-orm.onrender.com/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
    });
    console.log(result)
}

// R - READ
function createRowUser(username, id, statusOn, created){
    const listUser = document.getElementById("list");

    // criar tags 
    const tr = document.createElement("tr");
    const usernameTh = document.createElement("th");
    const idTh = document.createElement("th");
    const statusTh = document.createElement("th");
    const createdTh = document.createElement("th");

    // alterar os valores
    usernameTh.innerHTML = username;
    idTh.innerHTML = id;
    statusTh.innerHTML = statusOn;
    createdTh.innerHTML = created;

    // adicionar os elementos no HTML
    tr.appendChild(usernameTh);
    tr.appendChild(idTh);
    tr.appendChild(statusTh);
    tr.appendChild(createdTh);
    listUser.appendChild(tr);
}

async function getAllUsers(){
    const { teste } = await fetch("https://first-orm.onrender.com/user").then(res => res.json());
    console.log(teste)
    teste.map(user => {
        createRowUser(user.username, user.id, user.statusOn, user.createdAt)
    });
}


// U - UPDATE
async function updateUser(){
    const inputUsername = document.getElementById("username");
    const inputUserID = document.getElementById("userID");
    let username = inputUsername.value;

    const result = await fetch(`https://first-orm.onrender.com/user/${inputUserID.value}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
    });
}


// D - DELETE
async function deleteUser(){
    const inputUserID = document.getElementById("userID");
    let userID = inputUserID.value;
    const result = await fetch(`https://first-orm.onrender.com/user/${userID}`, {
        method: "DELETE",
    }).then(res=> res.json());
    console.log(result)
}

// FILTROS
async function getUserStatus(){
    const { teste } = await fetch("https://first-orm.onrender.com/user").then(res => res.json());
    const listUsers = teste.filter(user => user.statusOn === true);
    console.log(listUsers)
    listUsers.map(user => {
        createRowUser(user.username, user.id, user.statusOn, user.createdAt)
    });
}



// {
//     "id": "4218f85e-50ef-4ac4-9e96-60203296d7b1",
//     "username": "andrei",
//     "statusOn": false,
//     "createdAt": "2024-08-20T22:50:19.101Z",
//     "updatedAt": "2024-08-20T22:50:19.101Z"
// }