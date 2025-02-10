const arr = [1,2,3,4,5,6];
let k = arr.length / 2;
const partOne = [];
const partTwo = [];

for(let i = 0; i < k; i++){
    partOne.push(arr[i]);
}

for(let i = k; i < arr.length; i++){
    partTwo.push(arr[i]);
}

console.log(partOne, partTwo);
