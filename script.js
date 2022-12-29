function filterOutOdds(...nums){
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(num =>{
        return num % 2 === 0;
    });
}

function findMin(...arr){
    return Math.min(...arr);
}

function mergeObjects(obj1, obj2){
    const newObj = {...obj1, ...obj2};
    return newObj;
}

function doubleAndReturnArgs(arr1, ...args){
    return [...arr1, ...args.map(ele => ele *2)];
}

function removeRandom(items) {

    const rando = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rando), ...items.slice(rando + 1)];
}

function extend(array1, array2) {
    return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}

function removeKey(obj, key) {

}

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

function update(obj, key, val) {

}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        } 
    }

}

function raceResults(array){
    //const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
   let newObj = {
    first: array[0],
    second: array[1],
    third: array[2],
    rest: array.slice(3)
   }
   return newObj;
}

function hasDuplicate(array){
    const noDupes = new Set(array).size;
    return noDupes !== array.length;
}

function isVowel(char){
    return "aeiou".includes(char);
  }

function vowelCount(strang){
    const vowelMap = new Map();
    for(let char of strang){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
}