//Flatten an array of arrays
const array  = [[1,2,3],[4,5,6],[7,8,9]]
let flattened = array.reduce ((total,value)=>total.concat(value),[])
console.log(flattened)

//Concatenate Strings
const words = ['Hello', 'world', 'this', 'is', 'reduce']
let concatenated = words.reduce ((total,value)=>total.concat(value+" ")," ")
console.log(concatenated)

//Find the Vote Count
const votes = ['yes','no','yes','no','yes','whatever']
let votecount = votes.reduce((accum,vote) => {accum[vote] = (accum[vote]||0)+1; return accum}, {})
console.log(votecount)

//Find the Maximum Number
const numbers = [10,50,300,70,40]
let maxnumber = numbers.reduce ((accum,value) => {
    accum = ((accum>=value)? accum:value)
    return accum
})
console.log(maxnumber)

//Group objects by property
const people = [
  { name: 'Alice', city: 'NY' },
  { name: 'Bob', city: 'LA' },
  { name: 'Charlie', city: 'NY' },
  { name: 'David', city: 'LA' },
  { name: 'Eve', city: 'TX' }
]
  
 let objectedKey = people.reduce ((accum,value)=>{
     accum[value.city] =(accum[value.city]? accum[value.city]:[])
     accum[value.city].push(value)
     return accum
 },{})
console.log(objectedKey)

//Calulate Average
const scores  = [90,80,70,100]
let average = scores.reduce ((accum,value)=>accum+value,0)/scores.length
console.log(average)

//Create a Lookup Object
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
let lookedUp = users.reduce ((accum,value)=>{
   accum[value.id] = value 
   return accum
},{})
console.log(lookedUp)

//Remove duplicates
const items = [1,2,2,3,4,4,5]
let new_items = items.reduce ((accum,value)=>{
    (accum.findIndex(v => v===value)===-1? accum.push(value):null)
    return accum
},[])
console.log(new_items)

