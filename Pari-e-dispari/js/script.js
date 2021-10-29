let choice = prompt('Digitare o pari o dispari: ')
const num1 = prompt('Inserire un numero da 1 a 5: ') 

const num2 = Math.floor(Math.random() * 5) + 1;

const sum = parseInt(num1) + parseInt(num2);

console.log(num2);

console.log(num1);
console.log(sum);

const value = checkeven(sum);

if(value == choice){
    document.getElementById('vincitore').innerHTML = 'Hai vinto, bravissimo';   
} else {
    document.getElementById('vincitore').innerHTML = 'Mi spiace ma hai perso, ritenta e sarai più fortunato';
}


function checkeven(num) {
    if (num % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}
