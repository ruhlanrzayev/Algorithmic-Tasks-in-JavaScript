const str = "alma armud alma nar alma";
const newStr = str.split(" ");
let sum;
let rsltSum = 0;
let result = '';

for(let i = 0; i < newStr.length; i++) {
    sum = 0;
    for(let j = 0; j < newStr.length; j++){
        result = newStr[i];
        if(result == newStr[j]) sum++;
    }
    if(sum > rsltSum) rsltSum = sum;
}

console.log(rsltSum);
