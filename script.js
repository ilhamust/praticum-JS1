// Variabel
let nama = "Ilham Mustaqim"; // String
let umur = 20; // Number
let sudahMenikah = false; //Boolean

//Operator
let hasilTambah = umur + 5;
let hasilPerkalian = umur * 2;

// Tampilkan di halaman
document.getElementById("demo").innerHTML = `Nama: ${nama}, Umur: ${umur}, Sudah Menikah: ${sudahMenikah}`;
console.log("Hasil Tambah : ", hasilTambah);
console.log("Hasil Perkalian : ", hasilPerkalian);

// Kondisional
if (umur >= 18) {
  console.log(`${umur} sudah dewasa`);
} else {
  console.log(`${umur} belum dewasa`);
}

// loop
for (let i = 1; i <=5; i++){
  console.log(`Perulangan ke-${i}`);
}

// Fungsi
function hitungLuasPersegi(sisi){
  return sisi * sisi;
}

let sisi = 4;
let luas = hitungLuasPersegi(sisi);
console.log(`Luas Persegi dengan sisi ${sisi} adalah ${luas}`);

// Memanipulasi DOM dan Event Handling
document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("message").innerHTML = "Tombol telah diklik!";
  document.body.style.backgroundColor = "#f0f";
})

// Fungsi Luas Persegi Panjang
function hitungLuasPersegiPanjang(lebar, tinggi){
  return lebar * tinggi;
}

let lebar = 7;
let tinggi = 3;
let luasPersegiPanjang = hitungLuasPersegiPanjang(lebar, tinggi);
console.log(`Luas Persegi Panjang dengan lebar ${lebar} dan tinggi ${tinggi} adalah ${luasPersegiPanjang}`);

// Menampilkan nama dan umur setelah button di klik
document.getElementById("button").addEventListener("click", function(){
  event.preventDefault();
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let error = document.getElementById("error");
  
  error.innerText = '';

  
  if (!nama) {
      error.innerText = 'Nama tidak boleh kosong.';
      return;
  }

  if (!umur || isNaN(umur)) {
      error.innerText = 'Umur harus berupa angka.';
      return;
  }

  document.getElementById("namaUmur").innerHTML = `Hallo, Nama: ${nama}, Umur: ${umur}`;
})
