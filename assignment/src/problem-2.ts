{

    // Problem -8


const removeDuplicates = (arr: number[]): number[] => {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


}