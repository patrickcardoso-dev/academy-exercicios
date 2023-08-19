const cards = document.getElementsByClassName('card');

async function getUsers() {
  try {
    const response = await api.get("/users");
    
    let i = 0;
    for (const user of response.data) {
      cards[i].querySelector("h1").innerText = user.name;
      cards[i].querySelector("span").innerText = user.email;
      cards[i].querySelector("strong").innerText = user.phone;
      i++;
    }
  } catch (error) {
    console.log(error);      
  }
}

getUsers();

