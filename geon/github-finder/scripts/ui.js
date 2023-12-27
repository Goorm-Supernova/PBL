class UI {
    constructor() {
        this.result = document.getElementById('result');
    }
    showResult(user, repos){
        this.result.innerHTML = `
        <div class="container" id="profile-container">
            <div id="profile">
                <img src="${user.avatar_url}" alt="avatar" id="avatar">
                <div id="info">
                    <div class="btn-list">
                        <button class="blue">Public Repos: ${user.public_repos}</button>
                        <button class="gray">Public Gist: ${user.public_gists}</button>
                        <button class="green">Followers: ${user.followers}</button>
                        <button class="skyblue">Following: ${user.following}</button>
                    </div>
                    <div class="container" id="user-info">
                        <div>Company: ${user.company}</div>
                        <div>Website/Blog: ${user.blog}</div>
                        <div>Location: ${user.location}</div>
                        <div>Member Since: ${user.created_at}</div>
                    </div>
                </div>
            </div>
            <button class="blue" id="view-btn">
                <a href="${user.html_url}" target="_blank">View Profile</a>
            </button>
        </div>
        <h2>Lates Repos</h2>
        <div class="container" id="repos-container">
            <a href="${repos[0].html_url}">${repos[0].html_url}</a>
            <div>
                <button class="blue">Stars: ${repos[0].stargazers_count}</button>
                <button class="gray">Watchers: ${repos[0].watchers_count}</button>
                <button class="green">Forks: ${repos[0].forks_count}</button>
            </div>
        </div>
        <div class="container" id="repos-container">
            <a href="${repos[1].html_url}">${repos[1].html_url}</a>
            <div>
                <button class="blue">Stars: ${repos[1].stargazers_count}</button>
                <button class="gray">Watchers: ${repos[1].watchers_count}</button>
                <button class="green">Forks: ${repos[1].forks_count}</button>
            </div>
        </div>
        <div class="container" id="repos-container">
            <a href="${repos[2].html_url}">${repos[2].html_url}</a>
            <div>
                <button class="blue">Stars: ${repos[2].stargazers_count}</button>
                <button class="gray">Watchers: ${repos[2].watchers_count}</button>
                <button class="green">Forks: ${repos[2].forks_count}</button>
            </div>
        </div>
        <div class="container" id="repos-container">
            <a href="${repos[3].html_url}">${repos[3].html_url}</a>
            <div>
                <button class="blue">Stars: ${repos[3].stargazers_count}</button>
                <button class="gray">Watchers: ${repos[3].watchers_count}</button>
                <button class="green">Forks: ${repos[3].forks_count}</button>
            </div>
        </div>
        <div class="container" id="repos-container">
            <a href="${repos[4].html_url}">${repos[4].html_url}</a>
            <div>
                <button class="blue">Stars: ${repos[4].stargazers_count}</button>
                <button class="gray">Watchers: ${repos[4].watchers_count}</button>
                <button class="green">Forks: ${repos[4].forks_count}</button>
            </div>
        </div>
        <h2>Contributions</h2>
        <img src="https://ghchart.rshah.org/${user.login}" id="cont">
        `
    }
}