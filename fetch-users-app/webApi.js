const userList =document.getElementById("userList");

function fetchUsers(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      if(!response.ok){
        throw new Error("veri çekme başarisiz");
      }
      return response.json();
    })
    .then(data=>{
      displayUsers(data);
    })
    .catch(error=>{
      console.error("hata:",error);
      userList.innerHTML= "<p> Veri alinamaditekrar deneyinzi </p>";
    })
}

function displayUsers(users){
  userList.innerHTML="";
  users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name}-${user.email}`;
    userList.appendChild(listItem);
  })
}

document.addEventListener("DOMContentLoaded",fetchUsers);