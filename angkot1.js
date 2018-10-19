var s = '';
for( var a = 0; a < 10; a++ ) {
	for( var b = 0; b <= a; b++ ) {
		s += ' ';
		s += '*';
	}
	s += '\n';
}

for( var c = 10; c > 0; c-- ) {
	for( var d = 0; d < c; d++ ) {
		s += ' ';
		s += '*';
	}
	s += '\n';
}
console.log(s);