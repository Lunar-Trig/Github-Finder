class UI {
    constructor() {
        this.profile = document.querySelector('.profile-output');
    }

    showProfile(user) {
        function slice(sli){
           var a = sli.toString();
           var b = a.slice(0,10);
           return b;
        } 
        this.profile.innerHTML = `
            <div class="profile-output-avatar">
                <img id="output-img" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" id="output-img-link">View Profile</a>
            </div>
            <div class="profile-output-public-items">
                <span id="output-repos-count">Public Repos: ${user.public_repos},</spam>
                <span id="output-gists">Public Gists: ${user.public_gists},</spam>
                <span id="output-followers">Followers: ${user.followers},</spam>
                <span id="output-following">Following: ${user.following};</spam>
            </div>
            <ul class="profile-output-private-list">
                <li id="output-list-item">Company: ${user.company}</li>
                <li id="output-list-item">Website/Blog: ${user.blog}</li>
                <li id="output-list-item">Location: ${user.location}</li>
                <li id="output-list-item">Member Since: ${slice(user.created_at)}</li>
            </ul>
            <h2 id="repos-heading">Latest Repos:</h2>
            <div class="output-repos"></div>
        `;
   }

   showRepos(repos){
    let output = '';

    repos.forEach(function(repo) {
        output += `
            <div class="profile-output-repos">
                    <a href="${repo.html_url}" target="_blank" id="output-repo-url">${repo.name}</a>
                <br>
                    <span id="output-repo-stargaze-count">Stars: ${repo.stargazers_count}</span>
                <br> 
                    <span id="output-repo-watchers">Watchers: ${repo.watchers_count}</span>
                <br>
                    <span id="output-repo-forks">Forks: ${repo.forms_count}</span>
            </div>
        `;
    });

    document.querySelector('.output-repos').innerHTML = output; 
   }

  showAlert(message, className) {
    var div = document.createElement('div');
    div.className = className; 
    div.appendChild(document.createTextNode(message));
    var container = document.querySelector('.container');
    var search = document.querySelector('.search');
    container.insertBefore(div, search);

   setTimeout(() => {
        this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    var currentAlert = document.querySelector('.profile-error-alert');

    if(currentAlert){
        currentAlert.remove();
    }
  }

  
  clearProfile(){
    this.profile.innerHTML = '';
  }

}
