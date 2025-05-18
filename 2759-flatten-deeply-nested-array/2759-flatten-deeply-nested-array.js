/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if(n === 0){
    return arr.slice() // array ki shallow copy return hui hai
  } 
  let flatarr = []

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){ //agr koi nested array mila
       const nested = flat(arr[i], n-1) 
       flatarr.push(...nested)
    }else{
       flatarr.push(arr[i]) 
    }
  } 
  return flatarr
};