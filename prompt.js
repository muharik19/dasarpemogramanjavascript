function tambah (a, b) {
	return a + b;
}

function kali(a, b) {
	return a * b;
}

var a = parseInt(prompt('Masukkan Nilai 1 :'));
var b = parseInt(prompt('Masukkan Nilai 2 :'));

var hasil = kali(tambah(a, b), tambah(a, b));
alert(hasil);