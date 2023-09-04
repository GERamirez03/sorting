/**
 * Implementation of Bubble Sort algorithm for sorting arrays.
 */

function bubbleSort(arr) {
    if (arr.length <= 1) return arr;

    for (let i = arr.length - 1; i > -1; i--) {
        let haveSwapped = false;

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                haveSwapped = true;
            }
        }

        if (haveSwapped === false) return arr;
    }

    return arr;
}

module.exports = bubbleSort;