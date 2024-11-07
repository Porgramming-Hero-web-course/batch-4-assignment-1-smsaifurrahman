{
//     Problem 5:

const getProperty = <T, K extends keyof T > (params: T , params1: K) => {
   return params[params1]
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));









}


