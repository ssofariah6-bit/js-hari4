

var calonKetua=[];
var iqbal=[];
var dede=[];
var deden=[];

for (i=1; i<=5; i++){
    var calon=prompt('Masukkan nama calon ketua :\n (calon :iqbal, dede, deden)');
    calonKetua.push(calon);
    if(calon=='iqbal'){
        iqbal.push(calon);
    }
    else if(calon=='dede'){
        dede.push(calon);
    }
    else{
        deden.push(calon);
    }
}


console.log(calonKetua);
console.log(length.iqbal);
console.log(dede);
console.log(deden);