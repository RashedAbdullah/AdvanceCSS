//Change innerHTML text
// mainhead.innerHTML ='هذا القرآن للتي هي أقوم'
const d = new Date();
document.getElementById('Date').innerHTML = d.getMinutes();

//Switch
switch (new Date().getDay()) {
    case 0:
    day: 'Sunday';
    break;
    case 1:
    day: 'Mondayy';
    break;
    case 2:
    day: 'Tuesday';
    break;
    case 3:
    day: 'Wednesday';
    break;
    case 4:
    day: 'Thursday';
    break;
    case 5:
    day: 'Friday';
    break;
    case 6:
    day: 'Saturday';
}
console.log(new Date().getDay());



//For in
const rsd = {
    fName: 'Rashed',
    Lname: 'Abdullah',
    Age: 23
};

for (let forRsd in rsd) {
    console.log(forRsd)
    console.log(rsd[forRsd])
}



//For of
let a = 'Khalid'
for (b of a) {
    console.log(b)
}

//while loop
let i = 0;
let text = '';

while(i < 10) {
    text += 'The number is ' + i;
    i++;
}
console.log(text);


//do while loop
let j = 0;
let texts = "htis is my naem";

do {
    texts += 'The number is ' + j;
    j++;
} while (j < 10);
console.log(texts);


const lbb = new Set('Labib irfan')
// console.log(lbb)
for (const hmm of lbb) {
    console.log(hmm)
}

const persons = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
])
    persons.set('apple', 600);
    persons.set('banana', 400);
    persons.set('orange', 100)

    console.log(persons)



    try {
        //code
    } catch(error) {
        console.log(error)
    }

//--------------------
//String Methods and Search
// var rsd = 'Rashed Abdullah';
// console.log(rsd.slice(7,15));
// console.log(rsd);
// console.log(rsd.substring(7,15));
// console.log(rsd.substr(0,6));
// console.log(rsd.split(""))
// console.log(rsd.match('Abdullah'))
// console.log(rsd.includes('Abdullah'))

// //Template Literals ``
//     var BD = `Bangladesh`
//     var life = `it's my Life
//     my god's ruls`
//     var country = 'Afganistan';
//     var a = 100;
//     var b = 250;
//     var Literals = `i love all muslim ${country} and all muslim country population is ${a + b} million muslims`
//     console.log(BD);
//     console.log(life);
//     console.log(Literals);


// //Numner
// console.log(typeof(NaN));
// var y = new Number (200);
// console.log(y);

// //Number Methods
//     //toString()
//     var x = 123;
//     x.toString();
//     console.log(x);

//     var x = 123;
//     var newN = x.toString();
//     console.log(newN);
//     console.log(typeof(newN));



//     const tech = [
//         'Apple', 'Samsung', 'Vivo', 'Walton', 'Oppo', 'One plus',
//     ];
//     // for (i = 0; i < tech.length; i++) {
//     //     console.log(i);
//     //     console.log(tech[i]);
//     // }


//     function myFunction(value) {
//         console.log(value);
//     }

//     tech.forEach(myFunction);
//     console.log('Finished');


    
//     const tech2 = {
//         name:'Apple',
//         brand: 'Samsung',
//         country: 'America',
//     }
    //------------------
    // document.getElementById('demo').innerHTML = tech2;

// const p1 = {
//     name: 'Rashed Abdullah',
//     mail: 'maarashed42@gmail.com',
// }
// const p2 = {
//     name: 'Faruque Abdullah',
//     mail: 'maarashed43@gmail.com',
// }
// const p3 = {
//     name: 'Irfan Abdullah',
//     mail: 'maarashed44@gmail.com',
// }
// console.log(p1);
// const people = [
//     p1, p2, p3,
// ]
// console.log (people);

// function rsd(a, b) {
//     var c = a - b;
//     console.log('my Name is Rashed ' + c);
//     return;
//     console.log(39)
// }
// rsd();
// rsd(20, 30);
// rsd(38, 42);
// rsd(50, 20);
// const abdahd = 'Rashed Abdullah';
// var rsd = 'Rashed Abdullah'

// function logoThis () {
//     console.log(this);
// }
// logoThis();

// function rsdThis() {
//     console.log(this);
// }
// rsdThis();

// "so a'm happy for this and also be no carefull so so so so so so so so so so so so so so so so so so so so so so so so so so so and and and and and and and and and and and i not care about this who can buy me? you ? no way. you diserve better then me"

// var b = 30;
// var a = 20;
// if (a > b) {
//     console.log('im happy')
// } else if (b > a) {
//     console.log ('You are my boy')
// }

// for(var c = 1; c < 10; c++) {
//     console.log(c+ ' And you know about this')
// }

// for(var d = 1; d < 101; d++) {
//     console.log( d + ' List of students');
// }

// for(var e = 55; e < 99; e++) {
//     console.log('this is serial of ' + e)
// }

// if(a < b) {
//     console.log('print this')
// }
// if(c <= d){
//     console.log('Dont print this')
// }

// function thisFunc(names) {
//     console.log('You know ' + names +' is not happy')
// }

// thisFunc('Anayet')
// thisFunc('Rashed')
// thisFunc('Shamim')
// thisFunc('Shakil')
// thisFunc('others')

// function anayet(nyt) {
//     console.log('Rashed Abdullah is a ' + nyt + ' man')
// }
// anayet('nice')
// anayet('beutyful')
// anayet('hop')


// function AnayetEveryThing(anayet) {
//     console.log(anayet + 'Powerful man')
// }
// console.log('Rashed')
// console.log('Shakil')
// console.log('Anayet')


// for (var z = 1; z < 20; z++) {
//     console.log(z +'Rashed')
// }


// var objectThis = {
//     Name: 'Rahsed Abdullah',
//     Fother: 'Mawlana Abdullah',
//     Mother: 'Rabeya akter',
//     Age: 23,
//     msg: function() {
//         console.log(this);
//     }
// }
// console.log(objectThis);

// var Rashed = 'Rashed Abdullah';
// console.log(Rashed)
// console.log(Rashed)
// console.log(Rashed)
// console.log(Rashed)

// //"this" on function
// var rsd = {
//     name: 'Rashed Abdullah',
//         age: 23,
//         fother: 'mowlaba Abdullah',
//         anotherObject: {
//         name: 'Abdul Ahad Rashed',
//             age: 43,
//             msg: function() {
//             console.log('My name is ' + this.name)
//             }
//         }
// }
// console.log(rsd.anotherObject.msg.call(rsd));

// function thisis(unknown) {
//     console.log('my name is ' + unknown)
// }
// thisis('Saad Rayhan')


// const rsdBD = {
//     name: 'Rashed Abdullah',
//     age: 23,
//     marketValue: '40M',
// }
// console.log(rsdBD.marketValue);
// console.log(rsdBD['marketValue']);

// var text = 'ABCDEFGHIJKL \'MNOPQR\' STUVWXYZ';
// console.log(text);