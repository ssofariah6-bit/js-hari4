var arr = [];
arr[0]="ade";
arr[1]="asep";
arr[2]="agus";
console.log(arr);

arr[1]=undefined;
console.log(arr.splice(1,1));
console.log(arr);