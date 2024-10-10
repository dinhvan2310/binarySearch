export const binarySearch = (arr: number[], target: number): number => {
    const sortedArr = sortArray(arr);
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) {
        return mid;
        } else if (sortedArr[mid] < target) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }
    return -1;
}

export const sortArray = (arr: number[]): number[] => {
    return arr.sort((a, b) => a - b);
}