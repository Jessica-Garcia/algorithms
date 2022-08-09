/*
    Two Sum is quite common during interviews. 
    Its objective is to identify a pair of numbers 
    that add up to match the value of the target variable.
*/

const array = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];

// solution 1:

const twoSum_1 = (numbers, target_sum) => {

    let firstNumber = numbers[0];
    let nextNumber = numbers [1];
    let newIndex = 2;
    
   for(const number of numbers){
        if((firstNumber + nextNumber) === target_sum) return [firstNumber, nextNumber];

        firstNumber = nextNumber;
        nextNumber = numbers[newIndex];
        newIndex++;
    };
    
    return [];   
}

console.log('Solution 1: ', twoSum_1(array, 9));

// solution 2

const twoSum_2 = (numbers, target_sum) => {
    
    const calculedNumbers = new Map();

    for (const number of numbers) {
        
        let y = target_sum - number;

        if(calculedNumbers.has(y)) {
            
            return [y, number];
        } 
        
        else{

            calculedNumbers.set(number, true);
        }
    }
    return [];
}

console.log('Solution 2: ', twoSum_2(array, 9));
