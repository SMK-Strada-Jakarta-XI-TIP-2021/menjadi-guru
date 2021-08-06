// Kerjakan kode kalian di bawah ini
var namaSiswa = "Adri Gunawan";
var nilaiSiswa = 40;
console.log ("===== Hasil Nilai Ujian SMK Strada =====")
if (nilaiSiswa <= 0) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Invalid")
} else if (nilaiSiswa >= 82) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu A")
} else if (nilaiSiswa >= 68) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu B")
} else if (nilaiSiswa >= 50) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu C")
} else if (nilaiSiswa >= 31) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu D")
} else if (nilaiSiswa <= 30) {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu E")
} else {
    console.log (namaSiswa + " " + "=" + " " + " Nilai Kamu B")
}

console.log ("========================================")