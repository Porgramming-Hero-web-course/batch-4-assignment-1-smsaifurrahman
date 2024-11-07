{

    // Problem -3

const countWordOccurrences = (sentence: string, word: string): number => {

    const count = sentence.split(word).length-1;


    return count
}

console.log(countWordOccurrences("I love typescript", "typescript"));

}