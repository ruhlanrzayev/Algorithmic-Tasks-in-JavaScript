const arr = [1, null, 2, undefined, 3, null ] 
const newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== null && arr[i] !== undefined) {
    newArr.push(arr[i]);
    }
}

console.log(newArr);
