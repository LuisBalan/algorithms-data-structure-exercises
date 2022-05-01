/*
Chunky Monkey

Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns
them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let arrsContainer = [];
  
    while(arr.length !== 0){
      if(arr.length >= size){
        let sizedArr = [];
        for(let i = 0; i < size; i++){
          sizedArr.push(arr.shift());
        };
        arrsContainer.push(sizedArr);    
      }else if(arr.length < size){
        arrsContainer.push(arr.slice())
        break;
      };
    };
    return arrsContainer;
  };

 console.log(["a", "b", "c", "d"], " : ", chunkArrayInGroups(["a", "b", "c", "d"], 2)) 
 console.log([0, 1, 2, 3, 4, 5], " : ", chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) 
 console.log([0, 1, 2, 3, 4, 5], " : ", chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))  
 console.log([0, 1, 2, 3, 4, 5], " : ", chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
 console.log([0, 1, 2, 3, 4, 5, 6], " : ", chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) 
 console.log([0, 1, 2, 3, 4, 5, 6, 7, 8], " : ", chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
 console.log([0, 1, 2, 3, 4, 5], " : ",chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) 

 //Old and wrong first solution
/*  let arrsContainer = [];

  while(arr.length !== 0){
    if(arr.length >= size){
      let sizedArr = [];
      for(let i = 0; i < size; i++){
        sizedArr.push(arr.shift());
      };
      arrsContainer.push(sizedArr);    
    }else if(arr.length > size){
      arrsContainer.push(arr.slice());
      break;
    };
  };
  return arrsContainer;
*/

