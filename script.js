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


/*

let newRequest = new XMLHttpRequest();
      newRequest.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200) {
              let repoObj = JSON.parse(this.response);
              for (i = 0; i < repoObj.length; i++) {
                let repoSection = `
                                    <h3 class="repo-name">Project Name: ${repoObj[i].name}</h3>
                                    <h3 class="repo-id">Project Id: ${repoObj[i].id}</h3>
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

*/
