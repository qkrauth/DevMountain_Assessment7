function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true
            } else {
                return false
            }
        }
    }
}

console.log(addToZero([1,-1,3,4,5]));

// runtime: O(n^2)
// spacetime: O(1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function uniqueCharacters(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            } else {
                return true;
            }
        }
    }    
}

console.log(uniqueCharacters("soul"));

// runtime: O(n^2)
// spacetime: O(1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = string.toLowerCase().replace(regex, "");
   
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

   return true;
 }
 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// runtime: O(n)
// spacetime: O(1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findLongestWord(str) {
    let strSplit = str.split(" ");
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// runtime: O(n)
// spacetime: O(1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////