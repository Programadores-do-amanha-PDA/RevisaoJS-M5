async function createRowUser(username, id,status, created){
    const listUser = document.getElementById("list");
    const tr = document.createElement("tr");
    const usernameTh = document.createElement("th");
    const idTh = document.createElement("th");
    const statusTh = document.createElement("th");
    const createdTh = document.createElement("th");

    // alterando valores 
    usernameTh.innerHTML = username;
    idTh.innerHTML = id;
    statusTh.innerHTML = status;
    createdTh.innerHTML = created;

    // adicionando no nó
    tr.appendChild(usernameTh);
    tr.appendChild(idTh);
    tr.appendChild(statusTh);
    tr.appendChild(createdTh);
    listUser.appendChild(tr);
}

async function getAllUsers(){
    const {teste} = await fetch('https://first-orm.onrender.com/user').then(res=> res.json());
    console.log(teste);
    teste.map(user => {
        createRowUser(user.username, user.id, user.statusOn, user.createdAt);
    });
}

// get all users 
[
    {
        "id": "f664f359-7485-456b-bf23-942d194377bf",
        "username": "teste bea 1",
        "statusOn": false,
        "createdAt": "2024-08-20T21:14:14.675Z",
        "updatedAt": "2024-08-20T21:14:14.675Z"
    }
]

// CRIANDO UM USUARIO 
const inputUsername = document.getElementById("username");

async function createUser(){
    let username = inputUsername.value;
    const { newUser } = await fetch('https://first-orm.onrender.com/user',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username})
    }).then(res=> res.json());
    console.log(newUser);
    getAllUsers();
}

// create user
// {
//     "newUser": {
//         "id": "373c905f-33be-46bb-b78a-9c8991357b64",
//         "statusOn": false,
//         "username": "teste deploy 1",
//         "updatedAt": "2024-08-19T21:59:31.479Z",
//         "createdAt": "2024-08-19T21:59:31.479Z"
//     }
// }