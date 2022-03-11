const randomArray = [3, [11, 2, 4], [4, 5, 6], [10, 8 , -12]]
const secondRndArray = [2, [1, 1], [1, 1]]

function diagonalDifference(arr) {
    const n = arr[0];
    let primDiag = 0;
    let secondDiag = 0;

    for(let index = 0; index < n; index++){
        primDiag += arr[index + 1][index];
        secondDiag += arr[index + 1][n - 1 - index];
    };

    const previousResult = primDiag - secondDiag;
    const result = previousResult >= 0? previousResult : -previousResult;

    return result
    
};

console.log(diagonalDifference(randomArray));
console.log(diagonalDifference(secondRndArray));


// edit code in order to make it according to hacker Rank