# JavaScript

it is used to add interation engagement animations and validations in a website

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
- we will use let always because it has new features an more features then const

- error dushman nhi hai dushman hai ek aisa code jo error naa de galat hone par bhi woh dushman hai

- hum hamesha let use karenge.
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

- const kaha use hoga - Jaise humne kisi cheez par discount lagaya aur fir hum usey hatana nnhi chahte iss condition mein const use hota hai.

# for printing

- console.log();
- console.info();

- dono hi same hai
- kuchh kuchh browser bas console.info ko thode alg tareeke se show karte hai unke aage ek i sign aajata hai

- console.table({name:"harsh"});// this will create a table.

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
- `` - backtick(these are called template-strings)
- agar koi number likha ho aur uske saath koi bhi special character likh do toh woh ek string ban jaata hai. (1234a)

- wrapped data between single quotes , double quotes or backtick is called strings.

## Number

- 12 : Number
- 12.3 : Number

## boolean 

Writing true or False is boolean

## Null 

- null ka matlab hai aapne jaan boojh kar koi value nhi di
- jab aapke pass koi value na ho dene ke liye


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

- -1 is also truthy value
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

## First class function

- aise functions jinko value ki tarah treat karte hai

- example :
     ```
    function abcd(val){
      val();
    } 
    abcd(function(){
        console.log("Hey!!");
    })
    ```



## Higher Order Functions

- aise function jo return kare ek function ya fir return kare ek function apne parameter mein
- ya fir dono kare return aur accept.

- Example1 : ```
            function abcd(val){

            }
            abcd(function(){
                console.log("Hey")
            })
            ```

            - here function abcd is higher order function because it is accepting a function as a parameter.
- Example2 : ```
              function abcd(){
                  return function(){
                      console.log("Hey!!")
                  }
              }
              abcd()()
              ```

              - in this case it is returning a function.

## Pure vs Impure functions

- aisa function jo bahar ki value na badle woh hai pure function

- example :```
            let a = 12;
            function abcd(){
              console.log("Hey!!");
            }
            ```

- aisa function jo ki baahar ki value ko badal de wo hai impure function

- example :```
            let a = 12;
            function abcd(){
              a++;
            }
            ```

## Closures 

- ek function jo return kare ek aur function aur return hone wala function humesha use karega parent function ka koi variable

- example :```
            function abcd(){
              let a = 12;
              return function(){
                console.log(a);
              }
            }
            ```

## Lexical Scoping


- example :```
            function abcd(){
              let a = 12;
              function defg(){
                let b = 13;
                function ghij(){
                  let c = 14;
                }
              }
            }
            ```
- from the above example , a can be used in the whole function abcd but not outside abcd anywhere and b can used in the whole function defg and similarly c can be used inside ghij function.

## IIFE (Immediately invoked function expressions)

- example :```
            (function(){

            })()
            ```
- bas yeh hai ife bas ek function banao aur use pack kar do round bracket se aur turant hi call marrdo.
- yeh function turant chalega bina call kiye

## hoisting differnces betweeen declaration and expression

- isme yeh hota hai jaise humne koi function statement banaye 9 line pe aur call kiya 1 line pe toh woh run ho jaayega 

- example :```
            abcd();



            function abcd(){
              console.log("Hey!!");
            }
            ```
- par agar hum iss function declare kare as a function expression then it will not work. 

- example :```
            abcd();
            
            let abcd = function(){
              console.log("Hey!!");
            }
            ```

            - this function will give error.
  

# Questions :

## Questions 1 : What is the difference between function declaration  and expression in terms of hoisting ?
- agar aap function statements likh rhje hai toh use aap jahan par aapne create kiya hai usse upar access kar sakte ho 
- aur agar aap function expressions likh rhe hai toh aapko pehle usse likhna padega agar aapne ne jaha function likha hai usse pehle call kiya toh error aayega

## Convert a function to arrow function 

- Answer :```
            let abcd = function(a,b)=>{
              return(a*b);
            }
      
      ```

## what is parameter and what is argument in a function?

- jo hum function mein pass karte hai woh parameter aur jo hum call karte waqt pass karte hai woh argument

## What does the ... operator mean in parameter ?

- this operatior is also called rest operator.

- example :```
            function abcd(...val){
              console.log(val);//array
            }
            abcd(1,2,3,4,5,6,67);
            ```
            - yeh saari value array mein chali jaayegi aur val aapka ek array hoga

## aisa function jo kuch return nhi kar rha toh woh kya print karega ?

- undefined


## What does it mean when we say "functions are first class citizens"?

- isme functionns treat kiye jaate hai values ke jaise .

## What is a higher order function ? 

- aisa function jo return kare ek function ya fir uske parameter mein ek function acept ho toh woh higher order function hote hai.

## what is closure

- ek aisa function jo return kare ek aur function aur andar wala function bahar wali value ko use kare kaise bhi chahe print hi kyu na kara rhe ho.

## What is the use of IIFE ? Name one real-world use case.

- IIFE (Immediately Invoked Function Expression) ka use hota hai code ko turant execute karne aur variables ko global scope se safe rakhne ke liye.

Real-life example:
Jaise exam hall me rough work sheet—kaam khatam, sheet discard; waise hi IIFE temporary logic run karke clean ho jata hai.  


# Practice

## BMI Calculator

- example :```
            function bmi(weight , height){
              return weight / (height * height);
            }
            console.log(bmi(76 , 1.8).tofixed(2));
            ```
- toFixed point ke baad kitni vlaue chahiye uske liye hai

## Create reusable discount calculator (HOF)

- example :```
            function discountCalculator(){
              return function(){
                return price - price(discount/100);
              }
            }
            let ten = discountCalculator(10);
            let twenty = discountCalculator(20);

            console.log(ten(1200));
            console.log(twenty(1200));
            ```


# Arrays

- in javascript arrays can hold values of different type.

- let arr = [1,2,3,4,5,6];

- if we try arr[50] --> it will give undefined because it does not exist.

- indexing in array starts from 0;

- let arr = new Array(); // can also be created like this

- Modification : arr[4] = 100;//this will update array element..

## Methods in array

### Push 
- add a new value in the array  at lasst
- example : arr.push(100);[1,2,3,4,5,6,100]

### Pop
- to remove a element from the last
- example : arr.pop()//[1,2,3,4,5]

### Shift
- yeh shuru se value hata deta hai
- example : arr.shfit(); // [2,3,4,5,6]

### Unshift

- yeh shuruat mein ek value add karta hai
- example : arr.unshift(0);//[0,1,2,3,4,5,6]

### Splice

- aap kahi se koi bhi value hata sakte ho kahi beech mein se bhi
- arr.splice(from_where_you_want_to_remove_element , how much value you want to remove)

- example : arr.splice(2,1);//[1,2,4,5,6]//3 removed

- yeh actual array mein changes karta hai

### Slice 

- ek portion of the array nikaal ke deta hai jo ki copy hoga uss part ka jo hume chahiye bina main array mein change kiye

- ar.slice(starting_inde  , ending_index);//here ending index is excluded
- example : arr.slice(0,4);//[1,2,3,4]

### Reverse

- reverses a array
- example : arr.reverse();
- yeh copy nhi banata main array hi chnage karta hai

### Sort

- sort function se hum log ya toh ascending order ya fir descending order mein arrange karega

- sort chalane ke liye ek function ki jaruruat padegi

- (a-b) karne se ascending order mein arrange ho jayega

- (b-a) karne se descending order mein arrange ho jayega 

## For-Each
 
- forEach har element par jata hai.

- foreach ,map, filter ya reduce lagaoge toh inn sab mein ek cheez common hai , yeh sab ek function accept karte hai jaise sort function karta tha. 

- example : ```
          arr.forEach(function(val){
              console.log(val); // this will print all element of array.
          })
            ```

## Map

- map sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke basis par

- map dikhte hi saath mann mein ek blank array bana liya karo
- example : ```
          let newarr = arr.map(function(val){
              return 12; // [12,12,12,12,12]
          })
            ```
- if we wil not return anything then it will return new array of same length full of undefined.

- jab bhi aapko koi case dukh jaaye jaha par ek aray se naya array banega and woh naya array kuch values ko rakhega.


## Filter

- isme jaha bhi hum return karenge wahi value new array mein aayegi.

- example : ```
          let arr = [1,23,4,5,6,7]
          let newarr = arr.filter(function(val){
              if(val > 4) return true; // [23,5,6,7]
          })
            ```
- map dikhte hi saath mann mein ek blank array bana liya karo


## Reduce

- ek array se ek value banana

- example : ```
          arr.reduce(function(accumulator , val){
              return accumulator+val
          },0);
            ```// it will give sum of the array.

- in the upper code "0" at the end reflects the value of accumulator
- accumulator kaise kaam karta hai? -> jaise pehle accumulator ki value 0 hai fir (suppose arr = [1,2,3,4,5,6]) arr ki pehle value aayi accumulator + val hojayegi ab accumulator mein value gyi 1 aur val ki value 2 ho gyi ab similarly ab yeh aise hi aage kaam karega. --> it is working like a variable that holds the sum of a array(but accumulator aur bhi jagah use ho sakta hai). 

## Find

- example : ```
          arr.find(function(val){
              return val === 1; // 1
          }) // yeh jab 1 return karega agar array mein present hoga
            ```
- agar value array mein milegi toh yeh wahi return kar dega
- aur agar ek se jyada value hoga toh yeh pehli wali value return karegi.(jaha pehli baar mil rha ho)

## some

- example : ```
          let arr = [1,2,3,4,5]
          let any = arr.some(function(val){
              return val > 4; // true
          })
            ```
- agar puri array mein ek bhi value given condition ke according hogi toh yeh method true print kar dega.

## Every

- it will check agar saare element usss condition ko follow kar rhe hai toh true nhi toh false.
- example : ```
          let arr = [10,20,30,4];
          arr.every(function(val){ 
                return val>5;//false
          })
 
           ```
- it will give true , when condition === val > 1.

## Destructuring

- Destructuring of an array -> Extracting a new array using old array by assigning array to variables inside square bracket

- example : ```
          let arr = [1,2,3,4,5];
          let [a,b,,c] = arr;// [1,2](a = 1 , b = 2 , c = 4)
            ```

## Spread Operator

- old array ki saari values uthao aur nayi array mein bikher do
- example : ```
          let arr = [1,2,3,4,5];
          let arr2 = [...arr];
            ```
- isse naya array ban jaayega (matlab copy ssamajh lo par iss baar reference copy nhi hoga).

# Questions related to Array

## What is the difference between .push() and .unshift()?
- push add element from the left and unshift adds the element from the right.

## splice use to add ?
 let arr = ["Green" , "Yellow"];
 arr.splice(1,0,"Red","Blue");
 -> [Green , Red , Blue , Yellow]

## Alphabetically sort array?

- arr.sort();//it will sort without any function

## merge two arrays

let a = [1,2,3];
let b = [4,5,6];

let c = [...a , ...b]; // [1,2,3,4,5,6]

## Splice slice 

- splice value hata deta hai(yeh original array pe kaam karta hai) aur slice values ko extract kar ke deta hai(yeh array ka copy deta hai).

## ForEach vs Map

- Map return karta hai foreach return nhi karta
- agar nyi array banani hai toh map ka istemaal karenge.


# Objects

- object hum jab banate hai jab hume ek entity ke baare mein sab janna chahte hai .

- ek bande ki baat karte hai isme .

- let obj = {
  name:"vishu",
  age:21,
  khaana:"daal chaawal",
};

- obj.age or obj[age]--> age access kar paate hai
- obj.name or obj[name] --> name access kar paate hai
- obj.khaana or obj[khaana]--> khaana access kar sakte hai

- . notation se hum uss value ko dhundte hai jo object mein present ho aur obj[key] is se hum kisi bhi value se data get kar sakte hai

- obj[value] Example : 
                      ```
                      let obj = {
                        name: "harsh",
                        age:26,
                        khaana:"Daal chawal",
                      };
                      let aa = "name";
                      console.log(obj[aa]);//harsh
                      ```

- it is a key-value structure.

## Nesting and Deep Access

- nesting ek ke andar ek.
- Example : 
            ```
            const user = {
              name:"Harsh",
              address:{
                city:"bhopal",
                pin:462001,
                location:{
                  lat: 23.2,
                  lng: 77.4,
                },
              },
            };
            //Method 1
            user.address.location.lng;(for accessing ln location)
            // Method 2
            let {lng , lat} = user.address.location//(this is destructuring)
            ```
- iss mein jab bhi error aayega toh jisme error dikha rha hai usse ek pehle mein error hoga , chalo upar waale example ko leke samjhte hai --> user.address.locations.lng; (isme maine location ki jagah locations likh diya hai) yeh error dega lng mein toh hume location wale ko check karna hoga.

## For In

- it is used to iterate over objects.

- ```
  let obj = {
    name:"harsh",
    age:26,
    email"test@test.com",
  };

  for(let key in obj){
    console.log(key , object[key]);
  }
  ```
- Output:
```
name harsh
age 26

```

## Object.keys

- object.keys --> array ki saari keys ko ek array mein daal deta hai

## Object.entries

- it makes arrays of arrays.

## Spread operator in obj

- it is used to copy objects.

## Assign operator

- it is also used to copy objects

- 
```
  let obj = {
    name:"harsh",
    age:26,
    email"test@test.com",
  };

  let obj2 = object.assign({price: Infinity} , obj);
```
- iss code se naya object ban jaayega jisme ek nya key value pair hoga price:infinity.

## Deep Clone

- jab hum nested objects ki copy karte hai sirf top level va;ues are real baaki sab firse reference pass karne lagti hai 

- isko fix karne ke liye hum use karte hai 
 JSON.stringify(Objectname); // isse object string mein convert ho jata hai
- aur agar iss string ko firse object banana ho toh 
JSON.parse() kardete hai

## Optional Chaining & computed properties

- obj?address?.city
- optional chaining karne se agar jaise koi property nhi hai toh woh error de dega but optional chaining karne se woh error nhi aayega agar value nhi hai toh undfined de dega.
- Jab deep object ke andar value ho bhi sakti hai ya nahi bhi, aur error se bachna ho.

- Jab object ke key ka naam dynamic ho (variable se aaye), tab computed properties use hoti hain.

## Deepcopy vs shallowcopy

Shallow copy sirf first level copy karta hai (nested object ka reference same rehta hai),
Deep copy poora object including nested objects ka separate copy banata hai.