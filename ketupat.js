var s = '';
for(var a = 10; a > 0; a--) {

  for(var i = 1; i < a; i++) {
    s += ' ';
  }

  for(var a1 = 10; a1 >= a; a1--) {
    s += '*';
  }

  for(var a2 = 10; a2 > a; a2--) {
    s += '*';
  }

s += '\n';
}

for(var b = 1; b <= 10; b++) {

  for(var j = 1; j < b; j++) {
    s += ' ';
  }

	for(var b1 = 10; b1 >= b; b1--) {
	  s += '*';
	}

	for(var b2 = 10; b2 > b; b2--) {
	  s += '*';
	}

s += '\n';
}
console.log(s);
