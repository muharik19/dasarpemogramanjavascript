// this
// var a = 10;
// console.log(this.a);

// Membuat Object
// Object Literal
// var mhs1 = {
//   nama : 'Muharik',
//   nim : '2011140023',
//   ipSemester : [3.02, 2.02, 2.25],
//   lulus : true,
//   alamat : {
//     jalan : 'jl masjid al barkah',
//     kota : 'tangerang selatan',
//     provinsi : 'banten'
//   },
// };

// var mhs2 = {
//   nama : 'Desy',
//   nim : '2011141123',
//   ipSemester : [3.02, 2.02, 2.25],
//   lulus : true,
//   alamat : {
//     jalan : 'jl masjid al barkah',
//     kota : 'tangerang selatan',
//     provinsi : 'banten'
//   },
// };

// Function Declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan)
// {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// var mhs1 = buatObjectMahasiswa('Mikayla', '2011148211', 'mikayla@yahoo.com', 'Sastra Inggris');

// var mhs2 = buatObjectMahasiswa('Malvina', '2011148220', 'malvina@yahoo.com', 'Sastra Arab');

// Constructor
// function Mahasiswa(nama, nim, email, jurusan)
// {
//   // var this = {};
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
//   this.jurusan = jurusan;
//   // return this;
// }

// var mhs3 = new Mahasiswa('Anto', '2011145587', 'anto@golang.com', 'Teknik Informatika');

// cara 1 - function declaration
// function halo()
// {
//   console.log(this);
//   console.log('halo');
// }
// this mengembalikan object Global
// this.halo();

// cara 2 - object literal
// var obj = {a : 10, nama : 'harik'};
// obj.halo = function()
// {
//   console.log(this);
//   console.log('halo');
// }
// this mengembalikan object yang bersangkutan
// obj.halo();

// cara 3 - constructor
function Halo()
{
  console.log(this);
  console.log('halo');
}
// this mengembalikan object yang baru dibuat
var obj1 = new Halo();
var obj2 = new Halo();
