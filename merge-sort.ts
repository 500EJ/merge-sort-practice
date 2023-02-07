// Merge Sort out-of-place
// Do not modify the original array
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const division = Math.floor(arr.length / 2);
  let [arr1, arr2] = [arr.slice(0, division), arr.slice(division)];

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
}

// Takes in two sorted arrays and returns them merged into one
export function merge(arrA: number[], arrB: number[]): number[] {
  const arr = [];
  let [aIndex, bIndex] = [0, 0];
  while (arrA[aIndex] != null || arrB[bIndex] != null) {
    let min: number = 0;
    const [aNum, bNum] = [arrA[aIndex], arrB[bIndex]];
    if (aNum != null && bNum != null) {
      min = Math.min(aNum, bNum);
      min === aNum ? aIndex++ : bIndex++;
    } else if (aNum != null) {
      min = aNum;
      aIndex++;
    } else if (bNum != null) {
      min = bNum;
      bIndex++;
    }
    arr.push(min);
  }
  return arr;
}
