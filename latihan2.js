// Pilihan games
alert('Tebak angka dari 1 - 10\nAnda mempunyai 3 kesempatan');

// Membangkitkan bilangan random 1 -10
var x = 10;
var comp = Math.floor(Math.random() * x + 1);

// Pengulangan inputan
var y = 3;
while(y > 0) {
	var p = prompt('Masukkan angka tebakkan :');
	if(p > 10) {
		alert('Anda memasukkan angka yang salah.');
		break;
	}
y--;

	if(y != 0) {
		if(p > comp) {
			alert('terlalu TINGGI!\nAnda mempunyai ' + y + ' kesempatan.');
		} else if(p < comp) {
			alert('terlalu RENDAH!\nAnda mempunyai ' + y + ' kesempatan.');
		} else {
			alert('Anda benar!\nangka yang dicari adalah : ' + p);
			break;
		}
	} else {
		if(p > comp) {
			alert('terlalu TINGGI!\nkesempatan anda habis.');
		} else if (p < comp) {
			alert('terlalu RENDAH!\nkesempatan anda habis.');
		}
		alert('Angka yang dicari adalah : ' + comp);
	}
}

alert('Terima kasih.');
