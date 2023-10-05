let rsd = new Date().toUTCString();
console.log(rsd);
console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log(Date.parse(1999,10,15));
console.log(typeof Date)
console.log(Math.random())
console.log(Math.floor(Math.random() * 6)+1);

var a = false;
var b = true;
var c = Boolean(4 == 4);
console.log(a);
console.log(b);
console.log(c);


let switching = 6;
switch (switching) {
        case 1:
        console.log("My name is Rashed Abdullah")
        break;
        case 2:
        console.log("My name is Labib")
        break;
        case 3:
        console.log("My name is Irfan")
        break;
        case 4:
        console.log("My name is Faruque")
        break;
        case 5:
        console.log("My name is Noman")
        break;
        case 6:
        console.log("My name is Maria")
        break;
        case 7:
        console.log("My name is Jannat")
        break;

    default:
        console.log("meybe i don't have any name")
        break;
}


let names = [`Rashed`, `Labib`, `Khalid`, `Noman`, `Abrar`, `Mahmud`]

for(i = 0; i < names.length; i++) {
    console.log(names[i]);
}



// for in loop
const myDetailes = {
    fName: `Rashed`,
    lName: `Abdullah`,
    age: 23,
    father: `Mowlana Abdullah`,
    mother: `Rabea Akter`
}
for(let x in names) {
    console.log(names[x]);
}

let rsdBD = "Rashed"
for(let rsd of rsdBD) {
    console.log(rsd);
}

let j =0;
let text = '';
while (j < 10) {
    console.log( `Hello Bangladesh ` + j);
    j++;
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {continue;}
    console.log(i);
}

const newNumber = new Set([1,1,1,3,2,4,5,6])
const newNumber2 = new Set(['Rashed', 'Labib','Rashed', 'Irfan', 'Faruque'])
console.log(newNumber)
console.log(newNumber2)
console.log(newNumber.size);
console.log(newNumber2.size);

const newMap = new Map([
    ['Apple', 400],
    ['Banana', 344],
    ['orange', 222],
    ['cat', 345],
]);
newMap.set('Rashed', 555)
console.log(newMap);
console.log(newMap.has('Rashed'));
var rsdbdt = 'Rashed'
console.log(typeof rsdbdt.constructor);

var a = 'Hello Rashed Abdullah';
console.log(a.search('Rashed'));
//Can return uppercase or lowercase;
console.log(a.search(/rashed/i));

//Car replace
console.log(a.replace('Rashed', 'Labib'));
console.log(a.replace(/rashed/i,'Labib'));


//JS class
class Myname {
    constructor( Fname, Lname) {
        this.Fname = Fname;
        this.Lname = Lname;
    }
}

const fullName = new Myname('Rashed', 'Abdullah');

console.log(fullName);



