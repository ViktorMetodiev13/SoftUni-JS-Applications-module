async function solve() {

    let url = 'http://localhost:3030';

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
}

solve()