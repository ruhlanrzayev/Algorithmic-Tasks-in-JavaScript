const str = "Bu gun hava cox gozeldir";
const newStr = str.split(" ");
let result = '';

for(let i = 0; i < newStr.length; i++) {
    if(newStr[i].length > result.length) result = newStr[i];
}

console.log(result);

