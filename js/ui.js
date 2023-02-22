class UI {
    constructor() {
        this.profile = document.querySelector('.profile-output');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="profile-output-avatar">
                <img id="output-img" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" id="output-img-link">View Profile</a>
            </div>
            <div class="profile-output-public-items">
                <span id="output-repos>Public Repos: ${user.public_repos}</spam>
                <span id="output-gists>Public Gists: ${user.public_gists}</spam>
                <span id="output-followers>Public Followers: ${user.public_followers}</spam>
                <span id="output-following>Public Following: ${user.public_followings}</spam>
            </div>
            <ul class="profile-output-list-private-items">
                <li id="output-list-item">Company: ${user.company}</li>
                <li id="output-list-item">Website/Blog: ${user.blog}</li>
                <li id="output-list-item">Location: ${user.location}</li>
                <li id="output-list-item">Member Since: ${user.created_at}</li>
            </ul>
        `;
    }
}