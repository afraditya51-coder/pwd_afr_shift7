<?php

//class + nama class
class Hewan{
    private $nama = "";
    // private $jenis = "";
    private $kaki = 0;
    private $speak = "";
    // + public (Visibility)
    // - private
    // # protected

    //construct hanya berjalan 1 kali (setiap instansiasi)
    // function __construct($name, $type, $feet)
    // {
    //     $this->nama = $name;
    //     $this->jenis = $type;
    //     $this->kaki = $feet;
    // }

    //function (berjalan setiap di panggil)


    //set untk mengambil nilai dan di simpan pada database
    public function SetNama($name){
        $this->nama=$name;
    }
    // public function SetJenis($type){
    //     $this->jenis=$type;
    // }
    public function SetKaki($feet){
        $this->kaki=$feet;
    }
    
    function Setspeak($com){
        $this->speak=$com;
    }



    //get utk mengambil data
    public function GetNama(){
        return $this->nama;
    }

    function speak(){
        return $this->speak;
    }    
    public function GetKaki(){
        return $this->kaki;
    }
    // public function GetJenis(){
    //     return $this->jenis;
    // }

    public function GetAllData(){
        echo "Nama Hewan : ". $this->GetNama() ."<br>";
        // echo "Jenis Hewan: ". $this->GetJenis() ."<br>";
        echo "Kaki Hewan : ". $this->GetKaki() ."<br>";
    }

    //destruct 
    function __destruct()
    {
        echo "<br>Object " .$this->GetNama(). " Selesai Digunakan";
    }
    
}

class Mamalia extends Hewan{

}

$hwn = new Hewan();
$hwn->SetNama("Papatong");
// $hwn->SetJenis("Serangga");
$hwn->SetKaki(8);
$hwn->GetAllData();
// $hwn->nama = "Katak Amazon";
// echo $hwn->nama;

$Primata = new Mamalia();
$Primata->SetNama("Gorilla");
$Primata->Setspeak("HHugh! HHugh!");
$Primata->SetKaki(2);

$Primata->GetAllData();

echo "Suara nya : " .$Primata->speak() ;

