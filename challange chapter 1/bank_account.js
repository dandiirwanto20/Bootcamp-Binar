// Inisialisasi variabel saldo dengan nilai awal 0
let saldo = 0;

// Implementasi fungsi tambahSaldo() dengan arrow function
const tambahSaldo = () => {
  // Implement window.prompt() untuk memunculkan pop up inputan saldo yang ingin ditambahkan
  let sumInput = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));

  // validasi apakah jumlah yang dimasukkan adalah angka yang valid
  if (!isNaN(sumInput) && sumInput > 0) {
    saldo += sumInput;
    alert(`Saldo berhasil ditambahkan sebesar ${sumInput} dan saldo sekarang adalah ${saldo}`);
  } else {
    alert(`Mohon masukkan jumlah saldo yang valid (lebih dari 0).`);
  }
}

// Implementasikan fungsi kurangiSaldo() dengan arrow function
const kurangiSaldo = () => {
  // Implement window.prompt() untuk memunculkan pop up input saldo yang ingin dikurangi
  let subInput = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));

  // Periksa apakah jumlah yang dimasukkan adalah angka yang valid dan saldo mencukupi
  if (!isNaN(subInput) && subInput > 0) {
    if (saldo >= subInput) {
      saldo -= subInput;
      alert(`Saldo berhasil dikurangi sebesar ${subInput} dan saldo sekarang adalah ${saldo}`);
    } else {
      alert(`Saldo tidak mencukupi untuk melakukan pengurangan sebesar ${subInput}`);
    }
  } else {
    alert(`Mohon masukkan jumlah saldo yang valid (lebih dari 0).`);
  }
}

// Panggil fungsi tambahSaldo() dan kurangiSaldo() sesuai kebutuhan
tambahSaldo();
kurangiSaldo();