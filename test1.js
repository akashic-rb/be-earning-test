function lexicographicSort(input) {
    return Number(
        input
            .sort(function(a, b) {
               return Number("" + b + a) - Number("" + a + b);
            })
            .join("")
        );
}

const arr1 = [1, 10, 11]
const arr2 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]
const arr3 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
const arr4 = [1, 10, 19, 11, 13, 16, 19]

console.log(lexicographicSort(arr1))
console.log(lexicographicSort(arr2))
console.log(lexicographicSort(arr3))
console.log(lexicographicSort(arr4))