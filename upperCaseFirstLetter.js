const str = "bu gun hava cox gozeldir"
const words = str.split(" ");
let result = '';

for(let i = 0; i < words.length; i++){
    result += words[i][0].toUpperCase() + words[i].slice(1);
    if(i < str.length - 1) result += " ";
}

console.log(result);
