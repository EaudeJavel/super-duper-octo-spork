// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    const like = ' like this'
    names = names || [];
    switch(names.length) {
        case 0: return'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + like; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + like; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length -2) + ' others' + like; break;
    }
}

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    const a = text.toLowerCase().split('')
    const map = a.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    const array = [...map.values()]
    const r = array.filter(i => i !== 1).length
    return r
}

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    //split => split every words separated by ' '
    //join => takes every elements of array and join them into 1
    const b = string.toLowerCase().split(' ').join('')
    //replace punctuation by ''
    const c = b.replace(regex, '')
    //split -> takes every elements separated by '' -> every letters
    const d = c.split('').sort()
    //duplicate array and remove duplicate elements
    const r = [...new Set(d)];
    //filter numbers
    const s = r.filter(x => isNaN(x));

    if (s.length == 26) {
      return true
    } else {
      return false
    }
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter(
    //filter everything but numbers in array
      a => typeof a === 'number'
    )
}



// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
  //filter elements which have a length of 4
  return friends.filter(l => l.length == 4)
}


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  const a = s.split('')
  const indexes = []

  for (let i = 0; i<a.length; i++) {
    const b = a[i].repeat(i+1)
    indexes.push(b.charAt(0).toUpperCase() + b.slice(1).toLowerCase())
  }

  return indexes.join('-')
}


// s="ZpglnRxqenU"
function accum2(s) {
  //split => 'Z'; 'p'...
  //map => c = 'Z'; 'p'... / i = index
  //repeat c.toLowerCase * i
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'); //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
}


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  arr.map((z, i) => {
    for (let i = 0; i< arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1)
        arr.push(0)
      }
    }
  })
  return arr
}

//other
const moveZeros = arr => [
  ...arr.filter(n => n !== 0),
  ...arr.filter(n => n === 0)
];


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  const c = a.values()
  const e = []

  for(const i of c) {
    if (!b.includes(i)) {
      e.push(i)
    }
  }
  return e
}

//other
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}




function generateStrongPassword (length) {
  const password = []
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const special = '!@#$%^&*()_+'

  for (let i = 0; i < length; i++) {
    password.push(lower[Math.floor(Math.random() * lower.length)])
    password.push(upper[Math.floor(Math.random() * upper.length)])
    password.push(numbers[Math.floor(Math.random() * numbers.length)])
    password.push(special[Math.floor(Math.random() * special.length)])
  }

  return password.join('')
}
