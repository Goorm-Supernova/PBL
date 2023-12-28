const github = new Github();
const view = new View();

const searchUser = document.querySelector(".search .search__input");

searchUser.addEventListener("keyup", (e) => {
    const user = e.target.value;
    if (user !== "") {
        const userData = github.getUser(user).then((data) => {
            if (data.message === "Not Found") {
                view.viewNotFound();
            } else {
                // console.log("result", data);
                view.viewProfile(data);
                view.viewCommitChart(user);
                github.getRepo(user).then((repos) => {
                    // console.log("repo", repos);
                    view.viewRepo(repos);
                });
            }
        });
    } else {
        document.getElementById("profiles").innerHTML = ``;
    }
});
