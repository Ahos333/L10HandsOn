//repo link: https://api.github.com/users/ahos333/repos
$(document).ready(function() {
    $(".icon").hover(function(){
        $(this).css("fontSize", "2.5rem");
        }, function(){
        $(this).css("fontSize", "2rem");
      });
});

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        let repoObj = JSON.parse(this.responseText);
        let repoContainer = document.getElementById("repo-item");
        for (i = 0; i < repoContainer.length; i++) {
            document.getElementById('repo-name').innerHTML = "Project Name: " + repoObj[0].name;
            document.getElementById('repo-url').innerHTML = "Link: " +  repoObj[1].html_url;
        }
        console.log(repoObj);
        console.log(repoObj[1].html_url);
        
        
    } 
}

newRequest.open("GET", "https://api.github.com/users/ahos333/repos", true);
newRequest.send();