
const inputUsername = document.getElementById("username");
const showUsername = document.getElementById("name");

async function createUser(){
    let username = inputUsername.value;
    const { newUser } = await fetch('https://first-orm.onrender.com/user',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username})
    }).then(res=> res.json());

    showUsername.innerHTML = newUser.username;
}

// {
//     "newUser": {
//         "id": "373c905f-33be-46bb-b78a-9c8991357b64",
//         "statusOn": false,
//         "username": "teste deploy 1",
//         "updatedAt": "2024-08-19T21:59:31.479Z",
//         "createdAt": "2024-08-19T21:59:31.479Z"
//     }
// }