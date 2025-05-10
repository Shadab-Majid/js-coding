// types of data 
// there are two types of data primitive data and reference.
// premitive data is string boolean number this data can be copy completely.
// reference data like [] , {}, ()
var a = 'shadab'; // this is the primitive data
var c = a + "haris"; // now c is storing the same data and we can do changes on it. It will not change the data of a.

var b = [1,2,3]; // this is reference data
var d = remove_last(b); // this reference data means we have b data inside d so if we do changes in d then b will also get effect


function remove_last(b) {
    b.pop();
    return b;
}
console.log(b);
console.log(d);
console.log(a);
console.log(c);

//--------------------------

var i; 
for(i = 25; i<=50; i++) {
    console.log(i);
}