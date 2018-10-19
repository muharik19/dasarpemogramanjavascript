// menentukan pilihan games
alert('Tebak angka dari 1 - 10\nKamu punya 3 kesempatan.');

// membangkitkan bilangan random 1 - 10
var x = 10;
var comp = Math.floor(Math.random() * x + 1);

// pengulangan untuk kesempatan memilih angka
var maksimal = 3;
while(maksimal > 0) {
	// menangkap pilihan player
	var p = parseInt(prompt('masukkan angka tebakkan :'));
	if(p > 10) {
		alert('nilai harus 1 - 10');
		break;
	}
	maksimal--;
	
	// menentukan rules
	if(maksimal != 0)
	{
			if(p > comp) 
		{
			alert('terlalu TINGGI!\nayo masih ada ' + maksimal + ' kesempatan');
		} 
		else if(p < comp)
		{
			alert('terlalu RENDAH!\nayo masih ada ' + maksimal + ' kesempatan');
		} 
		else 
		{
			alert('anda benar ' + p);
			break;
		}
	}
	else
	{
		if(p > comp) 
		{
			alert('terlalu TINGGI!\nkesempatan anda sudah habis');
		} 
		else if(p < comp)
		{
			alert('terlalu RENDAH!\nkesempatan anda sudah habis');
		} 
		else 
		{
			alert('anda benar ' + p);
			break;
		}
	}
}

alert('Terima kasih sudah bermain TEBAK ANGKA...!');
