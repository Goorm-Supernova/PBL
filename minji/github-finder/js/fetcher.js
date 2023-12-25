import { Octokit } from "https://esm.sh/@octokit/core";

export class GithubFetcher {
  constructor() {
    this.octokit = new Octokit({
      auth: "",
    });
  }

  #request(url) {
    return this.octokit.request(`GET ${url}`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  }

  getRepos(url) {
    return this.#request(url);
  }

  getUserInfo(userName) {
    return this.#request(`/users/${userName}`);
  }
}
