function bubbleSort(array) {
  let counter = 0;
  let flag = false;

  function swap(OGArray, indexOne, indexTwo) {
    let temp = OGArray[indexOne];
    OGArray[indexOne] = OGArray[indexTwo];
    OGArray[indexTwo] = temp;
    return OGArray;
  }

  while (!flag) {
    let initialCounter = counter;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
        counter++;
      }
    }
    if (initialCounter === counter) {
      flag = true;
    }
  }
  return array;
}
