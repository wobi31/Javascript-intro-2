//Program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function
const nama = [ 
  "Abigail",
 "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
//Mengguunakan 3 parameter searchQuery,limit,callback
  function searchingNama(serachQuery, limit, callback) {
    const result = nama.filter((nama) => nama.toLowerCase().indexOf(serachQuery.toLowerCase()) !== -1);
    callback(result.slice(0, limit));
  }
  searchingNama('ca', 3,(result) => {
    console.log(result);
  });