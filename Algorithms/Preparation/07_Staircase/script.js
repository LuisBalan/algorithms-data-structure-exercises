const staircaseGenerator = (n) => {
    let space = ' ';
    let char = '#';
    for(let i = 1; i <= n; i++){
        let line = '';
        for(let j = 1; j <= n-i; j++){
            line += space;
        }
        // line += space.repeat(n-1);
        line += char.repeat(i);
        console.log(line);
    };
};

//staircaseGenerator(50)

const generatePattern = (n) => {
    const firstChar = "*";
    const secondChar = "#";
    let output = "";

    for(let i = 1; i <= n; i++ ){
        output += firstChar;
        for(let j = 1; j <= n - i; j++){
            output += secondChar;   
        }
    }
    
    console.log(output)
}

//generatePattern(5)

const goodArrayMaker = (input) => {

    let inputToArray = input.split("");

    const minimizedArray = inputToArray.reduce((accum, curr, index) => {
      
        if(index == 0){
            accum.push(curr)
        }else{
            curr == inputToArray[index - 1] ? null : accum.push(curr)
        }
    
        return accum

    }, []);

    return minimizedArray.join("");

}

let testingArray = "aaBBccCCcbbbccdeeefgghiik11123344tttTt"
console.log(goodArrayMaker(testingArray))
