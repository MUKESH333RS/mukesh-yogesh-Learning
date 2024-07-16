const character = "!";
const count = 10;
const rows = [];
let result = ""
let condition = false;


if (condition){
    for (let i = 1; i <= count; i++) {
        rows.push(" ".repeat(count - i) + character.repeat(2*i-1) + " ".repeat(count - i));
    }
}else {
    for (let i = count; i >= 1; i--)
        rows.push(" ".repeat(count - i) + character.repeat(2*i-1) + " ".repeat(count - i));
    }
    


for (const row of rows) {
    result += "\n" + row;
}

console.log(result)