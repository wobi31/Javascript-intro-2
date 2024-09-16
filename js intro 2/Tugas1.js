//1.Method mengubah string/kata kecil menjadi kata kapital
let huruf = 'hari ini hari senin';
console.log(huruf.toUpperCase());

//2.Methode mengubah  string/kata kapital menjadi kata kecil
let kata = 'HARI INI HARI SENIN';
console.log(kata.toLowerCase());

//3.Method penggunan push untuk menambah data baru
let angka = [1,2,3,4,5];
angka.push(6,7,8);
console.log(angka);

//4.Method untuk menggabungkn Object data menjadi satu (Data Object) 
let obj1 = {1:'melon', 2:'semangka', 3:'anggur',};
let obj2 = {4:'jambu', 5:'mangga', 6:'rambutan',};
let obj3 = {7:'mentimun', 8:'pepaya', 9:'leci',};

let newObj = Object.assign({}, obj1, obj2, obj3);
console.log(newObj);

//5.Method Concat penggabungan (Data Array)
const data1 = ['a', 'b', 'c'];
const data2 = [1, 2, 3];
const data3 = data1.concat(data2);
console.log(data3); 

//6.Method Slice() mengambsil bagian dari string atau array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let slicedArr = arr.slice(1, 9);
console.log(slicedArr); // [2, 3]

//7.Method Indexof() di fungsikan untuk mecari data yang di inginkan
let hewan = ['zebra', 'sapi', 'kuda', 'angsa', 'kancil',];
let index = hewan.indexOf('kancil');
console.log(index); 

//8,Method Pop() menghapus data terakhir
let siswa = ["Jono", "Udin", "Saep", "Sintia"];
let lastsiswa = siswa.pop();
console.log(siswa); // Output Sintia akan hilang

//9.Method Join() menggabungkan data yang di inginkan 
const siswa2 = ["Ucok", "Mulyadi", "Lela"];
const result2 = siswa2.join(" Dini ");
console.log(result2); // Output Dini akan masuk ke data

//10.Method toStirng di gunakan untuk mengubah nilai menjadi string
const date = new Date();
let result = date.toString();
console.log(result); //Outputnya akan berupa Hari,bulan,tanggal,tahun dan jam