//Page Loader 
const loaderContainer = document.querySelector('.page-loader');
const loader = document.querySelector('.loader');

const fadeEffect = setInterval(() => {
  if (!loader.style.opacity && !loaderContainer.style.opacity) {
    loader.style.opacity = 1;
    loaderContainer.style.opacity = 1;
  }
  if (loader.style.opacity > 0 && loaderContainer.style.opacity > 0) {
    loader.style.opacity -= 0.1;
    loaderContainer.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 100);

//repo link: https://api.github.com/users/ahos333/repos

let newRequest = new XMLHttpRequest();
      newRequest.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200) {
              let repoObj = JSON.parse(this.response);
              for (i = 0; i < repoObj.length; i++) {
                let repoSection = `
                                    <h3 class="repo-name">Project Name: ${repoObj[i].name}</h3>
                                    <h3 class="repo-id">Project Id: ${repoObj[i].id}</h3>
                                    <a class="btn repo-btn" href="${repoObj[i].html_url}">Go to Project</a>
                                  `
                let repoNode = document.createElement("li");
                repoNode.classList.add("repo-item");
                document.querySelector(".repo-section").appendChild(repoNode);
                repoNode.innerHTML = repoSection;
              }
              
          }
              
      } 
    newRequest.open('GET', 'https://api.github.com/users/ahos333/repos', true);
    newRequest.send();


