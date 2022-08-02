async function loadRepos() {
	let username = document.getElementById('username').value;
	let list = document.getElementById('repos');

	try {
		let response = await fetch(`https://api.github.com/users/${username}/repos`)

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		let data = await response.json();

		list.textContent = '';

		for (let repo of data) {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			list.appendChild(li);
		}
	} catch (error) {
		let li = document.createElement('li');
		li.textContent = `${error.message}`;
		list.appendChild(li);
	}
}