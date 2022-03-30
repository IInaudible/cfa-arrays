//1 create an array of strings (has to be of at least length 10)
let strings = ["test", "dog", "cat", "wolf", "penguin", "tiger", "bear", "fish", "rock", "tree"];

//2 print out the second element in the array
console.log(strings[1]);

//3 print out the length of the array
console.log(strings.length);
  
 //4 remove the last element from the array and then console.log the array
 strings.pop();
 console.log(strings);
 
 //5 remove the first element from the array and then console.log the array
 strings.shift();
 console.log(strings);

 //6 add a string to the end of the array and then console.log the array
 strings.push("end");
 console.log(strings);
 
 //7 add a string to the beginning of the array and then console.log the array
 strings.unshift("start");
 console.log(strings);

 //8 create another array of 6 veggies 
    //create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]
    let veggies = ["veggie1", "veggie2", "veggie3", "veggie4", "veggie5", "veggie6"];
    var twoVeggies = veggies.slice(2,4);
    console.log(twoVeggies);

 //9 create another array of 4 fruits
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array
   let fruits = ["fruit1", "fruit2", "fruit3", "fruit4"];
   let fruitsVeggies = fruits.concat(veggies);
   console.log(fruitsVeggies);

 //10 get the index of one the fruits or veggies in your fruitsAndveggies array
   
   console.log(fruitsVeggies.indexOf("veggie4"));