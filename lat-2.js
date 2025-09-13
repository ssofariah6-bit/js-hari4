function faktorial(n){
    if (n===0){
        return 1;
    }
    return n*faktorial (n-1);
}

let n;
hasil = faktorial(n);
console.log('faktorial '+n+' Adalah '+hasil);
