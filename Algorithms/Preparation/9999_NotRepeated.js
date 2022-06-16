const array = [12,15,18,12,10,50,18,13,10];

let occurr = {};

array.forEach(item => {
    if(!occurr.hasOwnProperty(item)){
        occurr[Number(item)] = 0}
        else{
            null
        };
});

//console.log(occurr);
//console.log(Object.keys(occurr));

array.forEach(item => {
     if(occurr.hasOwnProperty(item)){
         occurr[`${item}`] ++;
     }else{
         null
     }
 })

//console.log(occurr);
//console.log(Object.entries(occurr))

let notRepeated = Object.entries(occurr).reduce((accum, occur) => {
    if(occur[1] === 1)
    accum.push(Number(occur[0]))
    return accum;
}, []);
    
console.log(notRepeated);
