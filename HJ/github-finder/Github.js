class Github {
    constructor() {}

    GITHUB_URL = "https://api.github.com";

    async getUser(user) {
        const userResponse = await fetch(this.GITHUB_URL + `/users/${user}`);

        return await userResponse.json();
    }

    async getRepo(user) {
        const repoResponse = await fetch(
            this.GITHUB_URL + `/users/${user}/repos?per_page=5&sort="asc"`
        );

        return await repoResponse.json();
    }
}
