import { GithubFetcher } from "./fetcher.js";

const fetcher = new GithubFetcher();

function makeRepoElement(repo) {
  const { name, forks, watchers, stargazers_count } = repo;
  const divElement = document.createElement("div");
  divElement.className = "d-flex p-3 mx-3 border justify-content-between";

  const titleDivElement = document.createElement("div");
  titleDivElement.innerText = name;

  const badgeListDivElement = document.createElement("div");
  badgeListDivElement.className = "d-flex gap-2 text-white";

  const starsDivElement = document.createElement("div");
  starsDivElement.className = "bg-secondary rounded px-3";
  starsDivElement.innerHTML = `Stars: ${stargazers_count}`;
  const watchersDivElement = document.createElement("div");
  watchersDivElement.className = "bg-success rounded px-3";
  watchersDivElement.innerText = `watchers: ${watchers}`;
  const forksDivElement = document.createElement("div");
  forksDivElement.className = "bg-warning rounded px-3";
  forksDivElement.innerText = `forks: ${forks}`;

  badgeListDivElement.appendChild(starsDivElement);
  badgeListDivElement.appendChild(watchersDivElement);
  badgeListDivElement.appendChild(forksDivElement);

  divElement.appendChild(titleDivElement);
  divElement.appendChild(badgeListDivElement);

  return divElement;
}

//TODO company 등 정보 아직 안함
export async function getUserInfo(user) {
  const repoList = document.querySelector(".repo-list");
  repoList.innerHTML = "";
  const spinner = document.querySelector(".spinner");
  spinner.classList.remove("d-none");

  const response = await fetcher.getUserInfo(user);

  if (response.status !== 200) {
    //TODO 에러 처리
  }

  const mainSection = document.querySelector(".main-section");
  mainSection.classList.remove("invisible");
  const {
    avatar_url,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    repos_url,
  } = response.data;

  const profileImage = document.querySelector(".profile-image");
  profileImage.style.background = `url(${avatar_url})`;
  profileImage.style.backgroundRepeat = "no-repeat";
  profileImage.style.backgroundSize = "cover";

  const profileUrl = document.querySelector(".profile-url");
  profileUrl.href = html_url;

  const followerElement = document.querySelector(".info-followers");
  followerElement.innerText = followers;

  const followingElement = document.querySelector(".info-following");
  followingElement.innerText = following;

  const publicGistElement = document.querySelector(".info-public-gists");
  publicGistElement.innerText = public_gists;

  const publicReposElement = document.querySelector(".info-public-repos");
  publicReposElement.innerText = public_repos;

  const { data } = await fetcher.getRepos(repos_url);
  data.sort((a, b) => {
    if (new Date(a.pushed_at) >= new Date(b.pushed_at)) return -1;
    else return 1;
  });

  spinner.classList.add("d-none");
  data.forEach((repo) => {
    repoList.appendChild(makeRepoElement(repo));
  });
}

const findBtn = document.querySelector(".find-btn");
const nameInput = document.querySelector(".name-input");
findBtn.addEventListener("click", () => getUserInfo(nameInput.value));
