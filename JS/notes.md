# Words vs Keywords

keywords are the words that are predefined 
JS mein aise words jinse hum kuch kar sakte hai woh saare words JS ke keywords hai

--if
  else
  function

above words are all keywords

--harsh
  no
  yes
  satwik

above words are not keywords these are words


# Variables and Declaration


types of variables 
1.var(we will not use it because it is old)
2.let(can be changed)
3.const(cannot be changed)

jab bhi language mein ek container banana hai toh hum varibale banayenge

var - ES5
let,const - ES6

future mein kabhi bhi kisi bhi container ki value ko access kar sakte hai

1. a = 12;(should not use this method is very bad)
2. var a = 12;
3. var a;
4. let a;
5. let a = 5;
6. const a;(this is not possible)
7. const a = 12;


- declare means like we only declare a element without giving its value to it like `let a;` or `var a;`
- initialization means we also give value to it like `let a = 12;` or `var a = 20` or `const a = 30;`;

### Var
- jabhi element var se bana ho toh woh ek window mein add karta hai 
- function scoped hota hai var
- agar same variable ko firse declare karein toh error nhi aayega

--- Problems 

- like if we have a function and a inner if-else loop then and if we declare a variable inside if-else then we can access that varible in whole function because it is function scoped
- Var do not respect block because it is functional scoped like there is a if-else block and a var is initialized inside that if-else block so it can accessed in all code from anywhere because var do not respect block  

### Let

- firse declare karne par error aayega
- let is blocked scoped , let will respect that block and can be accessed only inside of block and cannot be acccessed from outside of the block 

### const

- we cannot change value of these varibles


# Scope (Functional , Block , Global)

### Global Scoped 
- can be accessed in whole code 

### Functional Scoped
- can only be accessed in a function

### Block Scoped
- can only be accessed in a block


# Reassignment and Redeclaration

### Reassignment - 
- let and var can be reassigned

### ReDeclaration
- var can only be redaclare.

# Temporal Dead Zone

- Utna Area jite mein js ko pta toh hai ki variable exist karta hai par wo value nhi de sakta

- In this there are two types of error
1. Not Defined
2. Cannot access without initialisation

### 1. Not Defined 
- when we directly print anything in the JS

### 2. Cannot access without initailization
- when we print a nuber like num and it is initialized under the statement print 


**It happens in let and const**


# Hoisting Impact per type 

#### Hoisting 
- ek varible ko jab js mein banate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala  jaata hai and uska initialization part neeche reh jaata hai

- var -> hoist -> undefined(value set hoti hai)
- let -> hoist -> koi value set nhi hoti
- const -> hoist -> koi value set nhi hoti


### Examples

```
console. log(nm) ;

var nm = "Harsh" ;

```

- output -> Undefined


### Example 2 .

```
if(true){
  var a = 1;
  let b = 2;
}
console.log(a); //✅1
console.log(b); //Reference Error
```

### Example 3 :

```
const person = {name : "Harsh"};
person.name = "Sharma"; // Allowed ✅
person = {}; // Not allowed ❌
```

***Object.freeze() can be used to fix the values of the objects***


# Datatypes

**There are two types of Datatypes :**
## 1. Primitives
- aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
- For example : String , num,ber , boolean , null , undefined, symbol, bigint
## 2. Reference
- inko copy karne par real copy nhi milegi but aapko reference milega parent ka
- for example : arrays ,objects , funtions
- {} , [] , ()

- Agar brackets ho toh peference aur agar bracket na ho toh primitives

- jab hum koi bhi reference datatype ko copy karte hai toh woh real copy nhi leta balki woh sirf parent ka address leta hai 
  EXAMPLE:
          ```
          let a = [1,2,3]
          let b = a;
          ```
          In this if we make changes in b it will be reflected in a


# Primitives

## Strings

- '' - single quotes
- "" - double quotes
- `` - backtick

- wrapped data between sigle quotes , double quotes or backtick is called strings.

## Number

- 12 : Number
- 12.3 : Number

## boolean 

Writing true or False is boolean

## Null 

- null ka matlab hai aapne jaan boojh kar koi value nhi di

## Undefined

- undefined ka matlab ki aapne ek variable banaya aur usey value nhi di to jo value by default mili woh hai undefined
**EXAMPLE** : let a; //undefined

- undefined aapko milti hai aur null aap value dete ho


## Symbol 

- hum isse unique value create kar sakte hai

- Unique immutable value 

- future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuch fields hoti hai jinse similar hum bhi bana dete hai aur galti se humaari banaai hui fields us library ki original fields ko change kar deta hai


## Big Int

- a number max value which can be held properly can be known by using 
`Number.MAX_SAFE_INTEGER`

- and if we want to take bigger number than that then we have to use **Big Int** .

##### Creation of bigint
` let a = 56149867697967678687687n`

# Reference Datatype

- agar kahi par bhi bracket dikh gya toh samajh jao woh reference hai 


# dynamic typing

- js mein static typing nhi hai and yaha apr hai dunamic typing jiska matlab hai aap data ko change kar sakte ho  kyuki yaha par dynamic dtata types hai

- ```
  let a = 1;
  a = true;
  a = [];
  a = null;
  a=undefined;
  
  ```
  this will not give error because there is no sttaic typing there is dynamic typing 

- then which is better dynamic typing or static typing
 --> the answer is static typing because you always know that the value will be particular type.


 # typeof quirks (e.g. typeof null === 'object')

 - we can check type of any data by keyword --- ` typeof `

 - NaN it is called Not a Number but when we check its type it is a number

 - type of null is object


 # type coersion (== vs ===)
 
 - concept jismein ek type automatically convert ho jayega 
 - `"5" + 1 ` --> `'51'` 
 - '+' yeh operator concatenation bhi karta hai aur add bhi karta hai

 - `"5" - 1 ` --> 4


# Truthy vs Falsy values

- False : 
         0
         false
         ""
         null
         undefined
         NaN
         document.all

- these all values are falsy values

- for checking that a value is falsy or truthy just put 2 exclamation marks in front of it  `!!0 // false`

- -1 is alsoa truthy value
- apart from these values all are truthy values


### Confusion parts

- true + false  = 1
- null + 1 = 1
- 5 + "5" = '55'
- !!undefined = false
- typeof NaN === 'number' //true
       when we add 
       "harsh" + 1 == NaN
       yeh ek failed number operation hai 
- ["String" - 1] ==> this will not converted to string this will convert in number. Because "-" this symbol do not perform concatenation.

# Operators

- `+ - * / % **`
- `= == ===`
- `< > <= >= ! != !== !!`
- `&& ||`
- `?:`
- Basically the data uses these operators are called operands.



## Arithmetic 

### Addition

- 1+2 = 3

### Subtraction

- 12-2 = 10

### Division

- 12/3 = 4

### Multiplication

- 12*5 = 60

### Modulus

- 12%5 = 2

### Power

- 12**2 = 144


## Comparison


### double equal

- yeh check karta hai sirf value equal hai ya nhi 
- yeh datatype nhi check karta sirf value check karta hai

- Example:
          `12 == '12' --->  True`

- isi problem ko solve karta hai triple equal(===).

- not strict comparison

### Triple Equal

- yeh check karta hai value ke saath saath datatype of the operands.
- Example: `12 === "12" --->  False`

- strict comparison 

### Not equal

- yeh bas double equal ka ulta answer deta hai

- Example :` 12 != 13 --> true `

- not strict

### Not double equal

- yeh bas triple equal ka ulta hota hai

- strict comparison


### Greater than equal to

- Example : `22 >= 22 --> True` 
            `23 >= 25 --> False`

### Smaller than equal to

- Example : `22 <= 22 --> true`
            `22 <= 21 --> False`

### Greater than

- Example : `22 > 22 --> false`
            `22 > 21 --> true`

### Smaller than

- Example : `22 < 22 --> false`
            `22 < 25 --> true`


## Assignment 

### Equal

- value daalna hi equal ka matlab hai {Assignment operator}

### combined with equal

- ```
  a += 10 --> a = a + 10;
  ```
- this is the main thing for all these operators
  like : a-=10 , a*= 10 , a/=10 , a%=10 .

## Logical

### AND(&&)

- agar dono operand true hai toh true aayega warna false

### OR(||)

- agar dono operand mein ek bhi true hai toh answer true aayega warna false

### NOT(!)

- isme sirf ek hi oerand hota hai aur yeh uski value invert kardeta hai

## unary operator

- jo sirf ek hi operand par chalta hai

### +

- agar aapke pass koi string hai aur aapko use number mein convert karna hai toh uss string ke aage plus laga do toh woh number mein convert ho jayegi

- example : 
           ```
           +"5" //5
           +"vishu" // NaN
           ```

- minus lagane se sirf woh number negative ho jaata hai

### typeof

- yeh kisi bhi element ka type batata hai

### Increment

- yeh kisi bhi value ko ek 1 se increment karta hai

#### ++a(Pre Increment)

- value ko turant badhake print karo

#### a++(Post Increment)

- value ko print karo fir badhao

- example : ` a++ + a --> 5(output)`

### Decrement

- yeh kisi bhi value mein decrement karta hai

#### --a(pre decrement)

- value ko pehle ghatao fir print karo

#### a--(post decrement)

- value ko pehle print karo fir ghatao


## ternary

### ?:

-  condition ? if condition is true : if consition is false .

- Example : 
           `12 > 13 ? console.log("true") : console.log("false") --> false`


## Some points where typreof quirks comes

- typeof null //object

- typeof [] //object

- typeof NaN //number

## instanceof

- variable instanceof ____

- yeh check karega ki yeh variable iss identity ka part hai 
  ( aur hum keh skate hai ki iss identity se janam liya hua hai)

- yeh sirf refernce value ke saath kaam karta hai primitive values ke saath kaam nhi karta.

- Example : ```
            let a = 12;
            a instanceof Number // false❌ 
            ```
            ```
            let a = {}
            a instanceof object // true✅ 
            ```


 ***Double Exclamation exposes original nature of a number that it is truthy or falsy***




 # Control Flow

 ## if else else-if

 - hum if ke andar ek consition dete hai aur agar consition true hai toh if block ka code chalega nhi toh else block ka code chalega

 - else if use hota hai - jab humare pass multiple consitions ho

 ## switch case

 - switch case mein ek value di jaati hai 

 - jo bhi value di jaati hai aur woh kisi case se match kar jaati hai toh fir wahi case run hota hai(aur agar hum chahte hai ki kuch aur na chale toh hum break keyword laga dete hai)

 - agar hum break statement nhi lagayenge toh saare cases print ho jaayenge thats a bug.

 ## early return pattern

- isme humlog if else else-if ka block nhi banate direct return karte hai

- Example:
            ```
            function getVal(val){
              if(val < 25) return "D";
              else if (val < 50) return "C";
              else if(val < 75) return "B";
              else return "A";
            }
            ```
- humara code thoda cleaner hota hai.



# Loops

- repeat karne ko hi loop kehte hai

## for loop

- kaha se jana hai -> kaha tak jaana hai -> kaise jana hai 
- iss scenerio mein for loop
- jab 1-40 tak toh isme for loop
- jab 20-30 - for loop


- Syntax : 
          ```
          for(start ; end ; change){

          }
          ```
- Example: Print 1 to 100
        ```
        for(let i = 1; i<101; i++){
          console.log(i);
        }
        ```
## while

- kaha se jaana hai -> kab rukna hi -> kaise jaana hai
- iss scenerio mein while loop
- hello na aajaye - while loop
- laal color ka ped - while


- Syntax :  
          ```
          start
          while(end){
            change
          }
          ```

- Example : start from 1 and stops at 32
            ```
            let i = 1;
            while(i <= 32){
              console.log(i);
              i++;
            }
            ```

  ## Do while

  - Syntax:
           ```
           do{

           }while(end)
           ```
  - Example:
            ```
            let i = 1;
            do{
              console.log(i);
              i++;
            }while(i < 20)
            ```
  - chahe humara input galat hi kyu na ho do while loop ek baar toh jarur chalega 

## Break

- yeh loop rokne ka kaam karta hai 

- Example : 
          ```
          for(let i = 0 ; i < 201 ; i++){
            console.log(i);
            if(i == 32){
              break;
            }
          }
          ```
          this loop will print till 32 and then it will be stopped.

## Continue

- yeh loop ke kisi specific iteration ko nhi chalane ke kaaam mein aata hai

- Example : 
          ```
          for(let i = 0 ; i < 201 ; i++){
            
            if(i == 32){
              continue;
            }
            console.log(i);
          }
          ```
          this loop will print all from 1 to 200 except 32.



# Prompt Keyword 

- this keyword is used to take input in Js

- syntax : `prompt("message for user","default value")`
# Practice Questions Loops

## 1. Print 1 to 10

```
for(let i = 0 ; i < 11 ; i++){
  console.log(i);
}
```
## 2. Print 10 to 1 - while loop

```
let i = 10;

while(i >= 0){
  console.log(i);
  i--;
}
```

## 3. Print even numbers 1 to 20 - for loop

```
for(let i = 1 ; i < 21 ; i++){
  if(i%2 == 0){
    console.log(i);
  }
}
```

## 4. Print odd numbers from 1 to 15 - while loop

```
let i = 1;

while(i < 16){
  if(i%2 != 0){
    console.log(i);
  }
  i++;
}
```

## 5. Print table of 5

```
for(let i = 1 ; i < 11 ; i++){
  console.log(`5 x ${i} = ${5*i}`);
}
```

## 6. Print sum of numbers from 1 to 100 

```
let sum  = 0;
for(let i = 1 ; i < 101 ; i++){
  sum += i;
}
console.log(sum);
```

## 7. Print all numbers from 1 to 50 that are divisible by 3

```
for(let i = 1 ; i < 51 ; i++){
  if(i%3 == 0){
    console.log(i);
  }
}
```

## 8. Ask the user for a number and print wheteher each number is even or odd

```
let num = prompt("Enter any number : ")
for(let i = 1 ; i <= num ; i++){
  if(i%2 == 0){
    console.log(`${i} is even`);
  }else if(i == 0){
    console.log("0 is neither even nor odd");
  }else{
    console.log(`${i} is odd`);
  }
}
```

## 9. Count how many numbers are divisible by 3 and 5 both between 1 to 100

```
let count = 0;

for(let i = 1 ; i < 101 ; i++){
  if(i % 3 == 0 && i % 5 == 0){
    count++;
  }
}
console.log(count);
```


# How to search properly

## Prompt : 
- I am completely beginner in js and i prefer hinglish , give me some quesstions to solve around {the_topic_you_want} .{Number_of_questions} questions which are ultimate beginner friendly.

# Functions

- What is function ? --> jo hum code likhe woh turant na chale kisi particular situation mein hi chale .
- Code readability badhata hai
- code reusability bhi increase hoti hai

- Why function ? 

- Syntax 1: ```
          function lolo(){
            console.log(""Happy Makar Sankranti");
          }
          ```
  
  - Syntax 2: ```
          let fnc = function(){

          }
          ```
          - variable name is the function name.
          - this is also called function expression.

  - these synatx are called function syntax.

- Syntax : 
          ```
          let fnc = () => {
            console.log("Hello");
          }
          ```
          - these functions are also called Arrow Function.
          - also known as fat arrow function.

  - Parameter and arguments :

  - Example :
                ```
                function dance(v1){
                  console.log(`${v1} naach rha hai`);
                }
                dance("gadha");
                dance("ghoda");
                dance("cheel");
                dance("lakadbagha");
                ```

    - jab hum function mein value accept karte hai toh woh value **parameter** hoti hai

    - jab hum function call mein value passs karte hai toh **arguments** use hota hai 

    - agar hum parameters ke liye function calling ke time pe koi value call n kare toh undefined jaayega parameters ke liye 


    - Example 2: 
                 ```
                function add(v1 , v2){
                  console.log(v1 + v2);
                }
                add(); // NaN
                ```
            - in this example  we didnt pass as arguments so the value of v1 and v2 will go as undefined and if we add two undefined
            it will give NaN.

    - Now one more thing , we can pass default value of parameters in case of no arguments pass in the function calling.

  - Example 3 :
                 ```
                function add(v1 = 1 , v2 = 1){
                  console.log(v1 + v2);
                }
                add(); // 2
                ```

                - now as default values are 1 of v1 and v2 so the output will be 2;

  - aur agar humne values function calling k time pe bhi pass kardi toh jo hum values function calling ke time pe pass karenge woh hi values use hongi function ke andar na ki default values(default values sirf tab use hoti hhai jab koi value pass na kari gyi ho arguments mein).

## Rest Operator(...)

- jab argument kai saare ho toh humein utne hi parameter banane padenge , issey bachne ke liye , hum rest ka use karte hai ... agr ... function ke parameter space mein laga toh toh rest operator hai and agar
woh arrays and objects mein lage toh woh spread operators hote hai 

- Example : ```
            function name(...n){
              console.log(n);
            }
            name(1,2,3,4,5,6,7,8,9,0);
            ```


## Return Keyword

- jaha se aaye ho wahi daal denge

- Example : ```
            function name(){
              return 12;
            }
            let ans = name(); // ans = 12;
            console.log(ans);//12
            ```