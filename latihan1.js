var nilaiSiswa=[90, 70, 50, 40, 80];
var statusSiswa= [];

for(let i =0 ; i <5; i++){
    if(nilaiSiswa[i]>=70){
        statusSiswa.push('Lulus');
    }
    else{
        statusSiswa.push('Tidak Lulus');
    }
}
console.log(nilaiSiswa);
console.log(statusSiswa);
