// Kerjakan kode kalian di bawah ini
// bahan
let namaSiswa = 'max';
let nilaiSiswa = 100;

// cara 1
if (nilaiSiswa < 0 || nilaiSiswa > 100) {
    console.log(namaSiswa + " nilai kamu invalid.");
}else if (nilaiSiswa >= 0 && nilaiSiswa <= 30) {
    console.log(namaSiswa + " nilai kamu E.");
}else if (nilaiSiswa >= 31 && nilaiSiswa <= 49) {
    console.log(namaSiswa + " nilai kamu D.");
} else if (nilaiSiswa >= 50 && nilaiSiswa <= 67) {
    console.log(namaSiswa + " nilai kamu C.")
} else if (nilaiSiswa >= 68 && nilaiSiswa <= 81) {
    console.log(namaSiswa + " nilai kamu B.");
} else {
    console.log(namaSiswa + ' nilai kamu A.');
};

// cara 2
// if (nilaiSiswa >= 82 && nilaiSiswa <= 100) {
//     console.log(namaSiswa + " nilai kamu A");
// }

// if (nilaiSiswa >= 68 && nilaiSiswa <= 81) {
//     console.log(namaSiswa + " nilai kamu B");
// }

// if (nilaiSiswa >= 50 && nilaiSiswa <= 67) {
//     console.log(namaSiswa + " nilai kamu C");
// }

// if (nilaiSiswa >= 31 && nilaiSiswa <= 49) {
//     console.log(namaSiswa + " nilai kamu D");
// }

// if (nilaiSiswa >= 0 && nilaiSiswa <= 30) {
//     console.log(namaSiswa + " nilai kamu E");
// } 

// if (nilaiSiswa < 0 || nilaiSiswa > 100) {
//     console.log(namaSiswa + " nilai kamu invalid");
// }