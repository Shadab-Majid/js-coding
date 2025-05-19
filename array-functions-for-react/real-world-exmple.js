/**
 * 
 * real world example in reduce, map and filter
 */
const users = [
    { firstName: 'Shadab', lastName: 'Majid', age:'25'},
    { firstName: 'haris', lastName: 'khan', age:'25'},
    { firstName: 'saqlain', lastName: 'khan', age:'25'},
    { firstName: 'rayyan', lastName: 'khan', age:'25'},
    { firstName: 'sharif', lastName: 'khan', age:'25'},
    { firstName: 'tauhid', lastName: 'raza', age:'27'},
]

// filter the firstname whose age is 25
const filter_by_age = users.filter((x) => x.age == 25).map((x) => x.firstName);
console.log(filter_by_age);

// list of full names
const output = users.map((x) => x.firstName + ' ' + x.lastName);
// console.log(output);

// find the people who has particular unique age.
// ie: { 25: 1 , 22: 2, 27:1 }
function getAge (users) {

   let count = 0;

    for(let i = 0; i < users.length; i++) {
        if( users[i].age > 35) {
            count ++;
        }
    }
    // console.log('35:', count);
}
getAge(users);

const output_peole_age = users.reduce(function(acc, curr){
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
// console.log(output_peole_age);

// first name of all the people whose age is 25 using reduce

const filter_age_using_reduce = users.reduce(function(acc, curr){
    if(curr.age == 25) {
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(filter_age_using_reduce);

// function filter_age(users) {
//     console.log(users.length)
//     let firsnames = [];
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].age == 25) {
//             firsnames.push(users[i].firstName);
//         }
//     }
//     console.log(firsnames);
// }

// filter_age(users);
// console.log(filter_by_age);