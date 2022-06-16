/*
Big O Notation Examples
*/

/*
O(1) example
Time complexity: O(1)
Space complexity: O(1) 
*/

number = 3;
power = 2;

function fastPower(number, power){
    return number**power;
};

console.log(fastPower(number, power))



/*----------------------------------------
O(n) example
*/

/*
Time complexity: O(power)
Space complexity: O(1)
*/

function iterativePower(number, power){
    let result = 1;

    for(let i = 0; i < power; i += 1){
        result *= number;
    };

    return result;
};

console.log(iterativePower(number, power));

/*
O(n) recursive example
*/

number = 5;
output = 120;

function factorial(number){
    if(number === 0){
        return 1;
    };
    return factorial(number - 1)*number;
};

console.log(factorial(number));

/*
O(n2) example
*/

let letters = ["a", "b"];

function pairs(letters){
    const result = [];

    for(let i = 0; i < letters.length; i+=1){
        for(let j = 0; j < letters.length; j+=1){
            result.push(`${letters[i]}${letters[j]}`);
        };
    };
    return result;
};
