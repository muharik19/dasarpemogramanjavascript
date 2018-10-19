// global scope / window scope
var a = 1;

function tes() {
	// name conflict
	a = 2;
	
}
tes();
console.log(a);