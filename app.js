/*Kerjakan kode kalian di bawah ini*/

var nama = 'sulthan';
var nilai= -2;

if (nilai < 0 || nilai > 100) {
    console.log(nama+ ' ' + "nilai kamu gak valid nih, periksa lagi ya!");
}  else if (nilai >= 0 && nilai <= 30) {
    console.log(nama+ ' ' + "nilai kamu E nih, ayo jangan patah semangat!");
}  else if (nilai >= 31 && nilai <= 49) {
    console.log(nama+ ' ' + "nilai kamu D tingkatkan belajarmu ya" );
}  else if (nilai >= 50 && nilai <= 67) {
    console.log(nama+ ' ' + "nilai kamu C ")
}  else if (nilai >= 68 && nilai <=81) {
    console.log(nama+ ' ' +"nilai kamu B, bagus")
}  else if (nilai >= 82 && nilai <= 100) {
    console.log(nama+ ' ' +"nilai kamu A, pasti nyontek kan");
}