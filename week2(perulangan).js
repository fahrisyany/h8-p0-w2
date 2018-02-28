var i=1
var j=20

console.log("Lopping pertama")
while(i <= 20){
  if (i%2 ===0)
  console.log(i + "-" + "i love coding")
   i++
}
console.log("looping kedua")
while(j >= 1){
  if (j%2===0)
    console.log (j + "-"+ "I will become fullstack developer")
    j--
}  

//////////////////////

console.log("looping pertama")
for(var angka = 1; angka <=20; angka++)

  {console.log(angka +'-'+ " I love coding")}

console.log("looping kedua")
for(var angka = 20; angka >=1; angka--)
  
  {console.log(angka +'-'+ " I will become fullstack developer")}

//////////////////////

for(var angka = 1; angka <= 100; angka++){
if(angka % 2===0) {
  console.log(angka + "-genap")
}
 else {
    console.log(angka + "-ganjil")
}
 }

////////////////////////////////////////////////
for(var angka = 1; angka <= 100; angka+=2 ){
  
  if(angka % 3===0){
    console.log(angka + "-kelipatan-" +3)
  }else{
    console.log(angka+"-")
  }
}

///////////////////////////////////////////////
for(var angka = 1; angka <= 100; angka +=5){
  
  if (angka % 6===0){
    console.log(angka + "-kelipatan-"+6)
  }else{
    console.log(angka + "-")
  }
}
///////////////////////////////////////////////
for (var angka = 1; angka<= 100; angka +=9){
  
  if(angka %10===0 ){
    console.log(angka+'-kelipatan-'+10)
  }else{
    console.log(angka+'-')
  }
}




