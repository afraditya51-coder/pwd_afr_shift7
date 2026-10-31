//display alert box
function disp_alert() {
    alert("alert box ini merupakan unload");
}

//display confirm box
function disp_confirm() {
    var setuju = confirm("apakah anda setuju dengan term yang ada");
    if(setuju==true){
        document.write("Terima kasih telah menyetujui kesepakatan!")
    }else{
        document.write("Kesepakatan gagal!")
    }
}

//display prompt box
function disp_prompt() {
    var name = prompt("enter your name : "," ");
    if(name!=null && name!=""){
        document.write("selamat datang "+name+", bagaimana hari-mu?")
    }
}

//display push data >< unshift
function pushData() {
    var kota = [" Jakarta", " Bogor", " Depok", " Tangerang", " Bekasi",];
    document.write(kota);
    kota.push(" Cianjur ");
    kota.push("<br>");
    document.write(kota);
}

//display pop data >< shift
function popData() {
    var kota = [" Jakarta", " Bogor", " Depok", " Tangerang", " Bekasi",];
    document.write(kota);
    kota.pop();
    document.write("<br>");
    document.write(kota);
}

//reverse stack
function reverseData() {
    var kota = [" Jakarta", " Bogor", " Depok", " Tangerang", " Bekasi",];
    document.write(kota);
    kota.reverse();
    document.write("<br>");
    document.write(kota);
}

//index of / index ke berapa
function indexOfData() {
    //              0   ,   1   ,     2     ,   3      ,    4
    var kota = [" Jakarta", " Bogor", " Depok", " Tangerang", " Bekasi",];
    document.write(kota);
    document.write("<br>");
    document.write(kota.indexOf("Bogor"));
}

//concatenating / penggabung 2 jenis atribut jadi 1
function concatData() {
    //              0   ,   1   ,     2     ,     3     ,     4
    var kota = [" Jakarta", " Bogor", " Depok", " Tangerang", " Bekasi",];
    var motor = [" BEat", " Mio", " Fino", " Vario", " Nmax",];
    document.write("Nama kota : " + kota);
    document.write("<br>");
    document.write("Nama Motor : " + motor);
    document.write("<br>");
    var gabung = kota.concat(motor);
    document.write("Hasil penggabungan : " + gabung);
}


var kendaraan = {
    merk : "Mitsubishi",
    series : "Lancer Evo VIII",
    jenis : "mobil",
    warna : "Gray"
}

console.log("Jenis  : " + kendaraan.jenis)
console.log("Merk   : " + kendaraan.merk)
console.log("Series : " + kendaraan.series)
console.log("Warna  : " + kendaraan.warna)

var dom = document.getElementById('text') 

dom.style.color = 'red'
dom.style.fontSize = '50px'
dom.innerHTML = 'ini adalah tulisan'

function ubahWarna(){
    dom.style.color = 'cyan'
}

var kotak = document.getElementById('kotak')

function munculKotak(){
    kotak.style.height = '200px'
    kotak.style.width = '200px'
    kotak.style.backgroundColor = 'blue'
}

function perbesarKotak(){
    kotak.style.height = '400px'
    kotak.style.width = '400px'
    kotak.style.backgroundColor = 'magenta'
}

function hilangkanKotak(){
    kotak.style.height = '0px'
    kotak.style.width = '0px'
}








