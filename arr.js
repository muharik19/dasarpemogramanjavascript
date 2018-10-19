// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Harik";
// arr[1] = "Mikayla";
// arr[2] = "Malvina";
// arr[6] = "Desy";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Harik", "Mikayla", "Malvina"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Harik", "Mikayla", "Malvina"];

// for(var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// var arr = ['Harik', 'Mikayla', 'Malvina', 'Desy', 'Setiawan'];
// 1. join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Desy', 'Setiawan');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// arr.splice(1, 0, 'Desy', 'Anto');
// console.log(arr.join(' - '));

// 5. slice
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// foreach
// var angka = [1,2,3,4,5,6,7,8];

// for(var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// var cetak = function(e) {
// 	console.log(e);
// }
// angka.forEach(cetak);

// angka.forEach(function(e) {
// 	console.log(e);
// });

// arr.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map(mengembalikan array)
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,5,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
// var angka2 = angka.filter(function(e) {
// 	return e > 5;
// });
// console.log(angka2.join(' - '));

// angka2.sort(function(a, b) {
//  return a - b;
// });
// console.log(angka2.join(' - '));

var angka2 = angka.find(function(e) {
	return e > 21;
});
console.log(angka2);

