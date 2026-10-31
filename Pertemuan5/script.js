//  var txt = document.getElementById("text");
//  txt.innerHTML = "Selamat Sore!";

var tex = $("#txt");


    $(document).ready(function(){
        $('#btn').click(function(){
            tex.text("Selamat Sore!")
        });

        $('#btn1').click(function(){
            $('ol').hide();
        });

        $('#btn2').click(function(){
            $('ol').show();
        });
    
        $('#btn3').click(function(){
            $('ol').toggle();
        });
        
        //prepend/append
        $('#btn4').click(function(){
            $('ol').append("<li>data baru added</li>");
        });
        
        //empty atau remove
        $('#btn5').click(function(){
            $('ol li:last').remove();
        });

        $('#fadein').click(function(){
            $('#div1').fadeIn();
            $('#div2').fadeIn("slow");
            $('#div3').fadeIn(1000);
        })
        
        $('#fadeout').click(function(){
            $('#div1').fadeOut();
            $('#div2').fadeOut("slow");
            $('#div3').fadeOut(1000);
        })
// panggil id/class/nama + . + aksi        
        $('#fadetoggle').click(function(){
            $('#div1').fadeToggle();
            $('#div2').fadeToggle("slow");
            $('#div3').fadeToggle(1000);
        })
        
        $('#submit').click(function(){
            var nama = $('#Name');
            $('p').html(nama);
        })
            $('#mati').hide();

        $('#btnmati').click(function(){
            $('#mati').show();
            $('#nyala').hide();
        });
        
        $('#btnnyala').click(function(){
            $('#nyala').show();
            $('#mati').hide();
        });



    });