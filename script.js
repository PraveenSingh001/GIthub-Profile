const apiURL = "https://api.github.com/users/";


const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');


getUser("Praveen-Singh0");




async function getUser(username){
  const resp = await fetch(apiURL + username);
  const respData = await resp.json();
  
  createUserCard(respData);

  getRepo(username);

  // console.log(respData);
}

async function getRepo(username){
    const resp = await fetch(apiURL + username + "/repos");
    const respData = await resp.json();
      
      getRepocard(respData);
    }


function createUserCard(username){
  
  const {avatar_url, login, bio, public_repos, followers, following, repos_url, html_url} = username;
  
  // const readme = "https://github.com/${login}/florinpop17.github.io/blob/master/README.md";
   
   main.innerHTML = `<div class= "card">
  <div><img id="img" src="${avatar_url}" alt=""></div>
   
    <div class="user-info"><h3>${login}</h3
      <p>${bio}</p>
      <ul>
        <li>${followers}
        <strong>Follower</strong></li>
        <li>${following} <strong>Following</strong></li>
        <li>${public_repos} <strong>Repos</strong></li>
      </ul></div>
  </div>
  <div class="repo"></div>`;
  
  const imgClick = document.getElementById("img");
  imgClick.addEventListener('click', ()=>{
    window.open(html_url); });
}


function getRepocard(repos){
  
  // console.log(respData);
  repos.forEach((repo)=>{
    const reposEl = document.querySelector(".repo");
    const repoEl = document.createElement('a');
    repoEl.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
    
    // repoEl.href = repo.html_url;
    // repoEl.innerText = repo.name;
    repoEl.target = "_blank";
    
    reposEl.appendChild(repoEl);
    
  });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
 const user = search.value;
 console.log(user);
 if(user){
   getUser(user);
//    getRepo(user);
   search.value = " ";
 }})







