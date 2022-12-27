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