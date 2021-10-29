let str = prompt('Inserisci una parola: ')

const value = checkPalindrome(str);

function checkPalindrome(string) {
    
    const len = string.length;

    for(let i= 0; i < len/2; i++){
        
        if(str[i] == str[len - 1 - i]){
            return 'è palindromo';
        }
        else{
            return 'non è palindromo';
        }
    }
  }

console.log(value);