// Kerjakan kode kalian di bawah ini
var namaSiswa = "Fancois.N.P.S";
var nilaiSiswa = 2;

if (nilaiSiswa <= 0 || nilaiSiswa > 100){ 
    console.log(namaSiswa + " Nilai invalid ");
} else if (nilaiSiswa >= 82 && nilaiSiswa <= 100) {
    console.log(namaSiswa + " Nilai A ");
} else if (nilaiSiswa >= 68 && nilaiSiswa <= 81) {
    console.log(namaSiswa + " Nilai B ");
} else if (nilaiSiswa >= 50 && nilaiSiswa <= 62) {
    console.log(namaSiswa + " Nilai C ");
} else if (nilaiSiswa >= 31 && nilaiSiswa <= 49) {
    console.log(namaSiswa + " Nilai D ");
} else {
    console.log(namaSiswa + " Nilai E ");
} 
