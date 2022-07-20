function solve() {
    let person = {
        firstName: "Peter",
        lastName: "Peterson",
        age: "18",
        salary: "7000$"
    }

    for (const key in person) {
        console.log(key);
    }
}

solve();