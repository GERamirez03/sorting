/**
 * Helper function for mergeSort which accepts
 * two sorted arrays of numbers and returns one
 * array with both of their contents, sorted.
 */

function merge(arr1, arr2) {
    const out = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            out.push(arr1[i]);
            i++;
        } else {
            out.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        out.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        out.push(arr2[j]);
        j++;
    }
    return out;
}

/**
 * Implementation of Merge Sort algorithm for sorting
 * arrays of numbers. Pure function.
 * 
 * Returns sorted array.
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middleIdx = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middleIdx));
    const right = mergeSort(arr.slice(middleIdx, arr.length));

    return merge(left, right);
}

module.exports = { merge, mergeSort};