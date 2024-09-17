# Javascript-intro-2

#Tugas 1:
##Deskripsi
Program menggunakan 10 method javscript

##Rincian Kode
1.Method mengubah string/kata kecil menjadi kata kapital Menggunakan toUpperCase
2.Methode mengubah  string/kata kapital menjadi kata kecil Menggunakan toLowerCase
3.Method Push untuk menambah data baru
4.Method untuk menggabungkn Object data menjadi satu (Data Object) 
5.Method Concat penggabungan (Data Array)
6.Method Slice() mengambsil bagian dari string atau array
7.Method Indexof() di fungsikan untuk mecari data yang di inginkan
8.Method Pop() menghapus data terakhir
9.Method Join() menggabungkan data yang di inginkan 
10.Method toStirng di gunakan untuk mengubah nilai menjadi string

#Tugas 2:
##Deskripsi
Program Mencari nama di dalam data array,Hasil output akan memberikan sesuai ke inginan data yang dinginkan oleh user

##Rincian kode
Terdapat 3 parameter
searchQuery: String yang berisi query pencarian
limit: Integer yang berisi jumlah maksimal nama yang ingin ditampilkan
callback: Function yang akan dijalankan setelah pencarian selesai

#Tugas 3;
Program menyeleksi Nilai

##Rincian kode
Fuction menampung tiga parameter:
nilaiAwal: Nilai awal untuk filter.
nilaiAkhir: Nilai akhir untuk filter.
dataArray: Array yang akan difilter

Fungction pertama-tama memeriksa kondisi:
nilaiAkhir lebih besar dari nilaiAwal: Jika tidak, akan dicetak pesan kesalahan.
nilaiAwal dan nilaiAkhir adalah angka: Jika tidak, akan ditampilkan pesan kesalahan.
dataArray adalah array: Jika tidak, ia akan mencetak pesan kesalahan.
dataArray memiliki lebih dari 5 elemen: Jika tidak, akan mencetak pesan kesalahan.
Semua elemen dalam dataArray adalah angka: Jika tidak, akan dicetak pesan kesalahan.
Jika semua kondisi terpenuhi, fungsi tersebut memfilter untuk dataArrayhanya menyertakan nilai yang lebih besar dari atau sama dengan nilaiAwaldan kurang dari atau sama dengan nilaiAkhir. Kemudian, fungsi tersebut mengurutkan array yang difilter dalam urutan menaik dan mengembalikan hasilnya. Jika tidak ada elemen yang memenuhi kriteria, fungsi tersebut mengembalikan string "Nilai tidak ditemukan".
