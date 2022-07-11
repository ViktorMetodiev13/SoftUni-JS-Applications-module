function solve(str) {
    for (let i = 0; i < str.length; i++) {
        str[i] += i + " ";
    }

    console.log(str);
}

solve('hi');