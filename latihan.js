// Pilihan permainan
alert('Tebak angka 1 - 10\nAnda mempunyai 3 kesempatan.');

// Menentukan bilangan random 1 - 10
var x = 10;
var comp = Math.floor(Math.random() * x + 1);

// Pengulangan untuk inputan
for(var i = 2; i >= 0; i--)
{
	// Menentukan pilihan player
	var p = parseInt(prompt('Masukkan angka tebakkan :'));
	if(p > 10)
	{
		alert('Anda memasukkan angka yang salah');
		break;
	}

	// Menentukan rules
	if(i != 0)
	{
		if(p > comp)
		{
			alert('terlalu TINGGI!\nayo masih ada ' + i + ' kesempatan');
		}
		else if(p < comp)
		{
			alert('terlalu RENDAH!\nayo masih ada ' + i + ' kesempatan');
		}
		else
		{
			alert('Anda benar!\nangka yang dicari adalah : ' + p);
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
		alert('Angka yang dicari adalah : ' + comp);
	}
}

alert('Terima kasih sudah bermain TEBAK ANGKA...!');
