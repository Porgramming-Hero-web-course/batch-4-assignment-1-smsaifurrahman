{
//
// Problem 1:


const sumArray = (params: number[]): number => {
    const sum = params.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
      
    
    return  sum;
}

console.log(sumArray([1,2,3,4,5]));










//

}