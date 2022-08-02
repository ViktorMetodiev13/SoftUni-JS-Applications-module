function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/messenger';
    document.querySelector('#refresh').addEventListener('click', displayComments);
    document.querySelector('#submit').addEventListener('click', createComment);

    async function displayComments() {
        try {
            let res = await fetch(baseUrl);
            if (res.ok == false) {
                throw new Error('Error');
            }

            let data = await res.json();

            let textArea = document.querySelector('#messages');
            let messages = [];
            Object.values(data).forEach(u => messages.push(`${u.author}: ${u.content}`));
            textArea.value = messages.join('\n');
        } catch (error) {
            alert(error.messsage);
        }
    }

    async function createComment() {
        try {
            let nameField = document.querySelector('[name="author"]').value;
            let messageField = document.querySelector('[name="content"]').value;

            const res = await fetch(baseUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: nameField.trim(),
                    content: messageField.trim()
                })
            })
        } catch (error) {
            alert('Wrong input, try again');
        }
        displayComments();

    }
}



attachEvents();