/*join untuk membuat array berada dalam satu baris dengan pemisah ada dalam kurung dan petik.
push untuk menambah tapi valuenya ada di posisi index terakhir.
pop untuk menghapus index terakhir.*/

var arr=['ade', 'asep', 'agus'];
console.log(arr.join('-'));

arr.push('deni');
console.log(arr.join('-'));

arr.pop();
console.log(arr.join('-'));