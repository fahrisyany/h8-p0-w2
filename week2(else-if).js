var nama ='ade'
var peran ='penyihir'


if (nama ==='' && peran ==='' ){
    console.log("nama dan peran mohon di isi");
}

if (nama && peran==='') {
    console.log("hey " + nama + " silahkan isi peranmu untuk memulai game");}

    
    else if(nama && peran === "tabib") {
    console.log("Selamat datang di Dunia Ivalice, " + nama);

    console.log("Halo "+ peran +" "+ nama + ", kamu akan membantu temanmu yang terluka!.");
    }

    else if (nama && peran ==='kesatria') {
    console.log("Selamat datang di Dunia Ivalice, " + nama);
   
    console.log("Halo "+ peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!.");
    }
    
    else if (nama && peran ==='penyihir'){
    console.log("Selamat datang di Dunia Ivalice, " + nama);
    
    console.log("Halo "+ peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!.");
    }
    
