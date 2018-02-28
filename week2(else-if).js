
var nama =''
var peran =''


if (nama =='' ) 
{console.log("nama dan peran mohon di isi");}

else if (nama =='' || peran =='') 
{console.log("hey " + nama + " silahkan isi peranmu untuk memulai game");}

if (nama && peran) 
{console.log("Selamat datang di Dunia Ivalice, " + nama);}

if (nama && peran==='tabib') 
{console.log("Halo "+ peran +" "+ nama + ", kamu akan membantu temanmu yang terluka!.");}

if (nama && peran==='kesatria') 
{console.log("Halo "+ peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!.");}

if (nama && peran==='penyihir') 
{console.log("Halo "+ peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!.");}

