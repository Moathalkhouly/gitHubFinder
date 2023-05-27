let image = document.getElementById("img");
let h4 = document.getElementById("h4");
let img = document.getElementById("img1");
let input = document.getElementById("btn");
let follower = document.getElementById("num");
let following = document.getElementById("num2");
let serch = document.getElementById("serch-btn");
let project = document.getElementsByClassName("card-p");
let lng = document.getElementsByClassName("lang");
let sty = document.getElementsByClassName("sty");

async function getUser1() {
  const response = await fetch(`https://api.github.com/users/Moathalkhouly`);
  const response2 = await fetch(
    `https://api.github.com/users/Moathalkhouly/repos`
  );

  const data = await response.json();
  const reposData = await response2.json();

  follower.innerText = `${data.followers}`;
  following.textContent = `${data.following}`;
  document.getElementById("img").src = `${data.avatar_url}`;
  document.getElementById("img1").src = `${data.avatar_url}`;

  h4.textContent = `${data.login}`;

  renderData(reposData);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getUser()
window.onload = () => {
  getUser1();
  console.log("hi");
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function getUser() {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  const response2 = await fetch(
    `https://api.github.com/users/${input.value}/repos`
  );

  const data = await response.json();
  const reposData = await response2.json();

  follower.innerText = `${data.followers}`;
  following.textContent = `${data.following}`;
  document.getElementById("img").src = `${data.avatar_url}`;
  document.getElementById("img1").src = `${data.avatar_url}`;

  h4.textContent = `${data.name}`;

  renderData(reposData);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getUser()
serch.addEventListener("click", () => {
 
  getUser();
  console.log("hi");
});

function renderData(reposData) {
  const cards = document.getElementById("cards-container");
  cards.innerHTML=''


  for (let i = 0; i < 6; i++) {
    if (reposData[i]) {
      cards.innerHTML += `<li class="card">
            <div class="card-details">
                <p class="card-p">${reposData[i].name}</p>
                <div class="type-language">
                <div class="sty"></div>
                <p  class="lang" >${reposData[i].language}</p>
              </div>
            </div>
            <p>public</p>
        </li>`;
    }

    if (`${reposData[i].language}` == "JavaScript") {
      sty[i].style.background = "yellow";
    } else if (`${reposData[i].language}` == "CSS") {
      sty[i].style.background = "#563d7c";
    } else if (`${reposData[i].language}` == "HTML") {
      sty[i].style.background = "red";
    }
  }
}


// https://github.com/Moathalkhouly/gitHubApis