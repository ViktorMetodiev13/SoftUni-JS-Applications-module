async function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;

    try {
        let response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
        
        if (response.ok == false) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
    } catch (error) {
        
    }


}