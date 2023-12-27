const form = document.getElementById('form');
const input = document.getElementById('input');
const cont = document.getElementById('cont')

const ui = new UI();

form.addEventListener('submit', e => {

    e.preventDefault();
    getGithub();
});

async function getGithub () {
    try{
        document.getElementById('spinner').style.display='block';
        const response1 = await fetch(`https://api.github.com/users/${input.value}`);
        const user = await response1.json();
        const resposne2 = await fetch(`https://api.github.com/users/${input.value}/repos`);
        const repos = await resposne2.json();
        console.log(user);
        const ordedRepos = repos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).reverse();
        document.getElementById('spinner').style.display='none';
        ui.showResult(user, ordedRepos);

    } catch (e) {
        alert("This username does not exist.");
    }
}