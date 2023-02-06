import { expect } from "chai";

import { merge, mergeSort } from "../merge-sort.js";

describe("Better Sorting Algorithms", function () {
  let arr: number[];

  beforeEach(function () {
    arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  });

  it("merges two sorted arrays", function () {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8, 10];

    const merged = merge(arr1, arr2);

    expect(merged).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("merges two sorted arrays of different lengths", function () {
    const arr1 = [1, 3];
    const arr2 = [2, 4, 6, 8, 10];

    expect(merge(arr1, arr2)).to.deep.equal([1, 2, 3, 4, 6, 8, 10]);

    const arr3 = [3, 6, 9];
    const arr4: number[] = [];

    expect(merge(arr3, arr4)).to.deep.equal([3, 6, 9]);
  });

  it("performs a out-of-place merge sort", function () {
    let newArr = mergeSort(arr);

    expect(newArr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(arr).to.deep.equal([2, 4, 6, 8, 1, 3, 5, 7, 9]);
  });
});
