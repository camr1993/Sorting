function bubbleSort(array) {
  let counter = 0;
  let flag = false;

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

function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
  return array;
}
