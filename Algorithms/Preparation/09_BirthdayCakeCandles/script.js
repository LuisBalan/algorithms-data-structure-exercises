const candlesOne = [5, 2, 2, 2, 2, 1];
const candlesTwo = [5, [2, 2, 2, 2, 1]];
const candlesThree = [2, 2, 2, 2, 2]
const candlesFour = [3, 2, 1, 3, 3, 5, 3]


const getMaxCandles = (array) => {

    // const candlesList = array.slice(1); //for inputs candlesOne-type
    // console.log(candlesList);
    // const candlesList = array[1]; //for inputs candlesOne-two

    // const candlesList = array; //for inputs candlesOne-three

    // console.log(candlesList);


    let candles = array;

    const typesOfCandles = candles.reduce((accum, occur) => {
        !accum.includes(occur)? accum.push(occur):null;
        return accum;
    }, []);

    // console.log(typesOfCandles);

    const candlesCounter = typesOfCandles.reduce((accum, occur) => {
        accum[occur] = 0;
        return accum;
    },{});

    // console.log(candlesCounter);

    for(let prop in candlesCounter){
     candles.forEach((item) => {
            prop == item? candlesCounter[prop] += 1 : null;
        });
    };

    // console.log(candlesCounter);

    console.log(Math.max(...Object.values(candlesCounter)));

};


function birthdayCakeCandles(candles){
    let sortedCandles = candles.sort((a, b) => {return b -a});
    let maxHeight = sortedCandles[0];
    return console.log(candles.filter(item => item == maxHeight).length);

}



getMaxCandles(candlesFour);

let testBirthdayArray = [3, 4, 5, 5, 5, 5, 3, 2, 1, 0, 5];
birthdayCakeCandles(testBirthdayArray);