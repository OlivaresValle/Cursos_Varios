// let arr = [1,2];

// arr=[];

// forma 1
// let arr =[1,2];
// let arr2= arr;
// arr=[];

// console.log(arr2, arr);

//forma 2
// let arr = [1,2];
// arr.length = 0;
// console.log(arr)

// forma 3
// let arr = [1,2];
// arr.splice(0, arr.length);
// console.log(arr);

// forma 4 NO RECOMENDADA
let arr = [1,2];
while (arr.length > 0){
    arr.pop();
}
console.log(arr);