class Github {
    constructor() {}

    GITHUB_URL = "https://api.github.com";

    async getUser(user) {
        const userResponse = await fetch(this.GITHUB_URL + `/users/${user}`);

        return await userResponse.json();
    }
}
