function faktorial(n){
    let hasil =1;
    for(let i=1; i<=n; i++){
        hasil *=i;
    }
    return hasil;
}
for (let n=0; n<=5; n++){
    console.log('Faktorial ${n} adalah ${faktorial(n)}');
}