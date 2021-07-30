const arr = [50, 30, 55, 10, 2, 1, 0, 1, -1];

const findSmallest = (arr) => {
  const smallest = Math.min(...arr);
  const smallestIndex = arr.indexOf(smallest);
  return smallestIndex;
}

const selectionSort = (arr)=> {
  if(arr.length === 0) return [];

  const newArr = [];

  while(arr.length > 0) {
    const smallestIndex = findSmallest(arr); 
    const smallest = arr.splice(smallestIndex, 1);
    newArr.push(smallest);  
  }

  return newArr.flat();
}

console.log(selectionSort(arr));
