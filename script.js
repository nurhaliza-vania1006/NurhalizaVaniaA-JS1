//If
var suhutubuh = 40;

if (suhutubuh >= 37){
    console.log("Badan Demam");
}

//Else
var usia = 5
if (usia >= 17 ){
    console.log("Memiliki KTP")
} else (usia <= 16);{
    console.log("Tidak memiliki KTP")
}

// If Else
let nilaimatkul = 80

if (nilaimatkul > 90) {
    console.log ("Nilai A")
} else if (nilaimatkul > 80){
    console.log ("Nilai B")
} else if (nilaimatkul >= 70){
    console.log ("Nilai C")
} else {
    console.log ("Nilai D")
}

//Switch case
const hewan = "panda"
switch (hewan) {
 case "panda" :
    console.log("Hewan Herbivora")
    break
 case "burung elang" :
    console.log("Hewan Karnivora")
    break
 case "tupai" :
    console.log("Hewan Omnivora")
    break
 default:
    console.log("Tidak tau hal itu")
}

//For Statement
const namamahasiswa = ["Harriz", "Vania","Indah", "Liza"]
for ( mulai = 0; mulai < namamahasiswa.length; mulai++) {
   console.log(namamahasiswa[mulai])
}

//While
const merksabun = ["Biore", "Nuvo", "Lifebuoy", "Lux", "Dettol"];
let index = 0
while (true) {
    console.log (merksabun[index])
    index++
    if (index === merksabun.length - 1) {break}
}

// Do While
let nomer = 0
do {
    console.log ('Room Number'+nomer)
    nomer++
} while (nomer <= 20);

// Function
let r = 27
let luas_lingkaran = luas(r)
function luas(r) {
    const phi = 3.14
    L = phi * (r * r)
    return L
}
console.log('Luas: '+luas_lingkaran)