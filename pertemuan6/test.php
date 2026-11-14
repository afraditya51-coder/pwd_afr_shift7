<?php

nama_variable
// $angka = $_POST["score"];
// $pilihan = "";

// echo "Nilai anda = $nilai <br>";
// pengkondisian if else
// if ($nilai >= 80 && $nilai <= 100) {
//     $keterangan = "Nilai Anda : GG";
// } else if ($nilai < 80 && $nilai >= 70) {
//     $keterangan = "Nilai Anda : NT";
// } else if ($nilai < 70 && $nilai >= 50) {
//     $keterangan = "Nilai Anda : LOL";
// } else if ($nilai < 50 && $nilai >= 0) {
//     $keterangan = "Nilai Anda : ZONK";
// } else {
//     $keterangan = "Masukan Nilai Ulang";
// }

//switch
$pilihan = $_POST['pilihan'];
$menu = "";
switch ($pilihan) {
    case 1: {
            $menu = "Mie Bakso Biawak";
            break;
        }
    case 2: {
            $menu = "Mie Bakso Kobra";
            break;
        }
    case 3: {
            $menu = "Mie Sapi Wagyu";
            break;
        }
    default: {
            $menu = "pilihan tidak ada";
        }
}

//loop(perulangan); Inisialisasi + terminasi(kondisi) + Iterasi(angka yang berubah)
// for ($i = 0; $i <= 5; $i++) {
//     for ($j = 0; $j <= $i; $j++) {
//         echo " * ";
//     }
//     echo "<br>";
// }

// $nama = array("Dadang", 
//               "Diding", 
//               "Dudung", 
//               "Dedeng",
//               "Dodong");
// foreach($nama as $absen){
//     echo "<li>$absen";
// }


