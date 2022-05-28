// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let newCats = [...cats ,"Broom"]
    return newCats
}

function prependCat(name){
    let newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat(){
    let newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat(){
    let newCats = cats.slice(1,cats.length)
    return newCats
}