let hostname = 'http://localhost:3030';

async function request(url, options) {
    try {
        let response = await fetch(hostname, + url, options)
    } catch (error) {
        
    }
}