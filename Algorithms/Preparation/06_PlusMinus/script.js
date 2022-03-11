function plusMinus(arr) {
    // Write your code here
    let positiveProp = 0;
    let negativeProp = 0;
    let zeroProp = 0;
        
    arr.forEach((item) => {
        if(item > 0){
            positiveProp += 1/arr.length;
        }else if(item < 0){
            negativeProp += 1/arr.length;
        }else {
            zeroProp += 1/arr.length;
        }
    })
    
    
    console.log(positiveProp.toFixed(6));
    console.log(negativeProp.toFixed(6));
    console.log(zeroProp.toFixed(6));

};


const plusMinusVersionTwo = (arr) => {

    const propsArray = arr.reduce((accum, occur) => {
        if(occur > 0){
            accum[0] += 1/arr.length
        }else if(occur < 0){
            accum[1] += 1 /arr.length
        }else {
            accum[2] += 1 /arr.length
        }

        return accum;
    }, [0, 0, 0]);

    return propsArray.forEach(item => console.log(item.toFixed(6)));

}




arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
plusMinusVersionTwo(arr)