{

//     Problem 6:

interface  Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (params: Profile, updates: Partial<Profile> ) => {

    return {...params, ...updates}
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));



}