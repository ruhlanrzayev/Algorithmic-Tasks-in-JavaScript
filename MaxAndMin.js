
const arr = [7,2,9,1,5];
let maxElmnt = arr[0];
let minElmnt = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i]>maxElmnt) maxElmnt = arr[i];
    if(arr[i]<minElmnt) minElmnt = arr[i];
}

console.log(maxElmnt,minElmnt);
