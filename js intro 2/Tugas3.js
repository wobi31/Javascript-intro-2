//seleksiNilai yang menerima 3 parameter: nilaiAwal, nilaiAkhir, dan dataArray
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // Langkah 1: nilaiAkhir harus lebih besar dari nilaiAwal 
  if (nilaiAwal >= nilaiAkhir) return console.log("Nilai akhir harus lebih besar dari nilai awal");
  
  // Langkah 2: parameter pertama dan kedua harus bertipe number, lalu parameter ketiga harus bertipe array
  if (!isNumber(nilaiAwal) || !isNumber(nilaiAkhir) || !isArray(dataArray)) return console.log("Parameter pertama dan kedua harus bertipe number, lalu parameter ketiga harus bertipe array");
  
  // Langkah 3: jumlah elemen dalam dataArray harus lebih dari 5 jika tidak maka akan di cetak error
  if (dataArray.length <= 5) return console.log("Jumlah elemen dalam dataArray harus lebih dari 5");
  
  // langkah 4: semua elemen dalam dataArray harus bertipe number
  if (!dataArray.every(isNumber)) return console.log("Semua elemen dalam dataArray harus bertipe number");
  
  // Langkah ke 5 seleksi nilai yang sesuai dengan kriteria
  const hasil = dataArray.filter((item) => item >= nilaiAwal && item <= nilaiAkhir).sort((a, b) => a - b);
  
  // Cetak hasil seleksi nilai
  console.log(hasil.length > 0 ? hasil : "Nilai tidak ditemukan");
};

// mengecek apakah suatu nilai bertipe number
const isNumber = (value) => typeof value === "number";

// Fungsi isArray untuk mengecek apakah suatu nilai bertipe array
const isArray = (value) => Array.isArray(value);


//seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); // tidak memenuhi kriteria

//seleksiNilai(true, "8", undefined); // tidak bertipe array

//seleksiNilai(5, 17, [27, undefined, null]); // tidak lebih dari 5

//seleksiNilai(5, 17, [2, 25, 4]); // jumlah elemen data harus lebih dari 5

//seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // nilai tidak ditemukan

//seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // berhasil output [8, 14, 17]