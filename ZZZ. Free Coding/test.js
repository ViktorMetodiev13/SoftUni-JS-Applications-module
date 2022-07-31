let answer = '';
answer = (160000 * 12).toString();
let result = '';

for (let index = 0; index < answer.length; index++) {
    if (index % 3 == 1) {
        result += answer[index];
    } else {
        result += ',' + answer[index];
    }
}

console.log(result);
