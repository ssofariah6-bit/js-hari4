var myfunc=function(){
    console.log ("Hello World");
}

var myarr=['text', 2, false, myfunc];
var mycamp=['text', 2, false, myfunc, [4, 5, 6]];
console.log(mycamp[4][1]);
console.log(mycamp[4][0]);
console.log(mycamp[4][2]);