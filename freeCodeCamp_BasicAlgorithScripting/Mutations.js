/*
Mutations

Return true if the string in the first element of the array contains all of the letters of the
string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string
are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr){
    const firstString = arr[0].toLowerCase().split("");
    const secondString = arr[1].toLowerCase().split("");
    let ocurr = 0;
    for(let i = 0; i < secondString.length ; i++){
        // console.log(firstString.includes(secondString[i]))
        firstString.includes(secondString[i]) ?
        ocurr++ : null;
    //   if(firstString.includes(secondString[i]) === true){
    //     console.log(firstString.includes(secondString[i]))
    //     ocurr += 1;
    //   }else{
    //       ocurr += 0;
    //   };
    };
    // console.log(ocurr);
    // console.log(firstString, secondString, ocurr)
    // console.log(result = ocurr === secondString.length ?  true : false); 
    return result = ocurr === secondString.length ?  true : false
};

console.log(mutation(["hello", "hey"])) 
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["zyxwvutsrqponmljihgfedcba", "qrstu"]))
console.log(mutation(["Mary", "Army"]))
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["Alien", "line"]))
console.log(mutation(["floor", "for"]))
console.log(mutation(["hello", "neo"])) 
console.log(mutation(["voodoo", "no"]))  
console.log(mutation(["ate", "date"])) 
console.log(mutation(["Tiger", "Zebra"]))  
console.log(mutation(["Noel", "Ole"]))

//mutation(["hello", "hey"]) 
// mutation(["hello", "Hello"])
// mutation(["zyxwvutsrqponmljihgfedcba", "qrstu"])
// mutation(["Mary", "Army"])
// mutation(["Mary", "Aarmy"])
// mutation(["Alien", "line"])
// mutation(["floor", "for"])
// mutation(["hello", "neo"]) 
// mutation(["voodoo", "no"])  
// mutation(["ate", "date"]) 
// mutation(["Tiger", "Zebra"])  
// mutation(["Noel", "Ole"])