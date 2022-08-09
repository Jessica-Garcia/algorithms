const numbersList = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];

const findSmallestIndex = (list) => {
    const smallestNumber = Math.min(...list);
    const smallestIndex = list.indexOf(smallestNumber);
    return smallestIndex;
}
console.log(findSmallestIndex(numbersList));

const sortBySelection = (list) => {
    const newList = [];

    for(let index = 0; index < list.length; index++){
        const smallestIndex = findSmallestIndex(list);
        newList.push(list.splice(smallestIndex, 1)[0]);
        index--;
    }
    return newList;
}

console.log(sortBySelection(numbersList));
