const github = new Github();

const searchUser = document.querySelector(".search .search__input");

searchUser.addEventListener("keyup", (e) => {
    const user = e.target.value;
    if (user !== "") {
        const userData = github.getUser(user).then((data) => {
            if (data.message === "Not Found") {
                document.getElementById(
                    "profiles"
                ).innerHTML = `<h1>Not Found</h1>`;
            } else {
                console.log("result", data);
                document.getElementById(
                    "profiles"
                ).innerHTML = `<div class="profile">
            <div class="profile__row">
                <div class="user__left-box">
                    <img class="user__image" src="${data.avatar_url}"/>
                    <a class="user__view-profile" href="${data.html_url}">View Profile </a>
                </div>
                <div class="user__right-box">
                    <span class="user__public-repo">Public Repo: ${data.public_repos}</span>
                    <span class="user__public-gists">Public Gists: ${data.public_gists}</span>
                    <span class="user__follower">Followers: ${data.followers}</span>
                    <span class="user__following">Following: ${data.following}</span>
                    <div class="user__info">
                        <div>Company: ${data.company}</div>
                        <div>Website/Blog: ${data.blog}</div>
                        <div>Location: ${data.location}</div>
                        <div>Member Since: ${data.created_at}</div>
                    </div>
                </div>
            </div>
        </div>`;
                let addHTML = "";
                github.getRepo(user).then((repos) => {
                    console.log("repo", repos);
                    for (const repo of repos) {
                        addHTML += `<div class="repo">
                <div class="repo__row">
                    <div>
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
    
                    <div>
                        <span class="repo__star">Stars: ${repo.stargazers_count}</span>
                        <span class="repo__watcher">Watchers: ${repo.watchers_count}</span>
                        <span class="repo__fork">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>`;
                    }
                    document.getElementById("repos").innerHTML = addHTML;
                });
            }
        });
    } else {
        document.getElementById("profiles").innerHTML = ``;
    }
});
