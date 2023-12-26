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

export async function getUserInfo(user) {
  const repoList = document.querySelector(".repo-list");
  repoList.innerHTML = "";
  const spinner = document.querySelector(".spinner");
  spinner.classList.remove("d-none");

  const mainSection = document.querySelector(".main-section");
  const warningSection = document.querySelector(".warning-section");

  try {
    const response = await fetcher.getUserInfo(user);

    if (response.status !== 200) {
      throw Error();
    }

    mainSection.classList.remove("d-none");
    warningSection.classList.add("d-none");

    const {
      avatar_url,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      repos_url,
      company,
      location,
      created_at,
      blog,
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

    const companySpan = document.querySelector(".info-company");
    companySpan.innerText = company ?? "x";

    const websiteSpan = document.querySelector(".info-website");
    websiteSpan.innerText = blog === "" ? "x" : blog;

    const locationSpan = document.querySelector(".info-location");
    locationSpan.innerText = location ?? "x";

    const sinceSpan = document.querySelector(".info-member-since");
    sinceSpan.innerText = new Date(created_at).toLocaleDateString();

    const { data } = await fetcher.getRepos(repos_url);
    data.sort((a, b) => {
      if (new Date(a.pushed_at) >= new Date(b.pushed_at)) return -1;
      else return 1;
    });

    spinner.classList.add("d-none");
    data.forEach((repo) => {
      repoList.appendChild(makeRepoElement(repo));
    });
  } catch (err) {
    mainSection.classList.add("d-none");
    warningSection.classList.remove("d-none");
  }
}

const findBtn = document.querySelector(".find-btn");
const nameInput = document.querySelector(".name-input");
findBtn.addEventListener("click", () => getUserInfo(nameInput.value));
