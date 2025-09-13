var bil=[];
var genap=[];
var ganjil=[];

for(var i=1; i<=20; i++){
    bil.push(i);
    if(i%2===0){
        genap.push(i);
    }
    else{
        ganjil.push(i);
    }

}
console.log(bil);
console.log(genap);
console.log(ganjil);