/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i =0;i<dog_names.length;i++){
      if(dog_string.includes(dog_names[i])){
        console.log(`Matched ${dog_names[i]}`)
      }
      else{
        console.log("No Matches")
      }
    }
}
findWords()
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* Given */ 
let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
 

  for(let i= 0;i<arr.length;i++){

    if(i%2==0){
      arr.splice(i,1,"even index")
      
    } 
    
  }console.log(arr)
}

replaceEvens(arr1)


//////////// The Following are the Code Wars Problems///////////
/* 

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.


*/
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
  
  return dna.replaceAll("T","U")
  }

/* 

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. 
Health can't be less than 0.
*/
  
function combat(health, damage) {
    if (health-damage > 0){
      return health - damage
    }
    return 0
  }

  
//Given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and the negatives become positives.

function invert(lst){
  for (let i =0;i<lst.lenght;i++){
    return lst[i]*(-1)
  }
}

/* 
Convert number to reversed array of digits
Given a random non-negative number, 
you have to return the digits of this 
number within an array in reverse order.
*/
function digitize(n) {
  return n.toString().split('').reverse().map(nString=>parseInt(nString))
}





