const minMaxValue = (array) => {

    let sumationsArray = [];

    for(let iter = 0; iter < array.length; iter++){

        const filteredArray = array.filter((item, index) => {

            return index != iter;
        });

        console.log(filteredArray);
        
        const valuesSumation = filteredArray.reduce((accum, occur) => {
            accum += occur;
            return accum;
        }, 0);

        console.log(valuesSumation)

        sumationsArray.push(valuesSumation);

    };

    console.log(sumationsArray)

    console.log(Math.min(...sumationsArray), Math.max(...sumationsArray));

};

const testArray = [5, 5, 5, 5, 5];
minMaxValue(testArray);