function tampilkanAngka(n) {

	if(n === 0) return;

	console.log(n);
	tampilkanAngka(n-1);
	
}

tampilkanAngka(10);
