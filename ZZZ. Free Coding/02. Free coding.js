function solve() {
    let people = {
        person1: {
            firstName: "Peter",
            lastName: "Peterson",
            age: "18",
            salary: "7000$"
        }
    }

    people[person2] = {
        firstName: "Ivan",
        lastName: "Venelinov",
        age: "29",
        salary: "3000$"
    }

    for (const person in people) {
        console.log(`${person} - ${people[person]}`);
    }
}

solve();