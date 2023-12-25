import { octokit } from "./octokit.js";

function request(url) {
  return octokit.request(`GET ${url}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

export const GITHUB_API = {
  getRepos(url) {
    return request(url);
  },
  getUserInfo(userName) {
    return request(`/users/${userName}`);
  },
};
