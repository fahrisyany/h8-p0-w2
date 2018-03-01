
var sent1= "Halo";
var sent2= "Function!";


function shoutOut(sent1, sent2) {
    return(sent1 +" "+ sent2);
  }
  
console.log(shoutOut(sent1, sent2))

//////////////////////////


var num1 = 5;
var num2 = 6;


function calculateMultiply(num1, num2) {
    return (num1 * num2);
}


var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 

///////////////////////////

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby) {
    console.log("\"Nama saya " + name + ' umur saya ' + age +' tahun '+', alamat saya di ' + address+ ', dan saya punya hobby yaitu '+ hobby+"!\"");
}
  




var fullSentence = processSentence(name,age,address,hobby);




