async function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let list = document.getElementById('commits');

    try {
        let response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
        
        if (response.ok == false) {
			throw new Error(`${response.status} (${response.statusText})`);
		}

        let data = await response.json();

        list.textContent = '';

        console.log(data);

        for (let {commit} of data) {
            let li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            list.appendChild(li);
        }
    } catch (error) {
        let li = document.createElement('li');
        li.textContent = `${error.message} (Not Found)`;
        list.appendChild(li);
    }

}