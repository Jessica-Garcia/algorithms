const elementsList = [2, 3, 2, 3, 2, 4, 5, 5, 6, 8, 9, 9 , 2, 3];
const min = Math.min(...elementsList);
const max = Math.max(...elementsList);

console.log(min);
console.log(max);

console.log(elementsList.sort((a, b) => a - b));


const removeDuplicateElements = (list) => {
    const uniqueElementsList = new Set(list);
    
    return list = [...uniqueElementsList];
}

console.log(removeDuplicateElements(elementsList));
console.log(elementsList);

function NumbersList (array) {
    let index = 0;

    this.remove = (number) => {
        index = array.indexOf(number);
        if(index > -1){
            array.splice(index, 1);
        } else {
            return `O elemento ${number} Não existe na lista`;
        }
    }

    this.print = () => {
        console.log(array);
    }
}

const numbers = [1, 2, 300, 4, 5, 600, 300, 7, 88, 9];
const numbersList = new NumbersList(numbers);

numbersList.print();
numbersList.remove(300);
numbersList.print();


const otherNumbers = [1, 2, 300, 4, 5, 600, 300, 7, 300, 88, 9];
const removeNumbers = (number, list) => {

    return list.filter(e => e !== number); 
}

const newNumbersList = removeNumbers(300, otherNumbers);
console.log(newNumbersList);


const n = [300, 2, 200, 3, 300, 4, 400, 5, 300]

const rmv = (list, element) => {

    for(let index = 0; index < list.length; index++){
        if(index === list.indexOf(element)){
            list.splice(index, 1);
            index--
        }
    }

    return list;
}

rmv(n, 300);

console.log('última ', n);
