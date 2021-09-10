// Code your solution here

function findMatching(array, string){

    let result = array.filter(function(str){
        let isEqual = str.toUpperCase() === string.toUpperCase();
        return isEqual;
    })

   return result;
}

function fuzzyMatch(array,string){
    let result = array.filter(function(str){
        let isEqual = str.charAt(0).toUpperCase() === string.charAt(0).toUpperCase();
        return isEqual;
    })

   return result;
}

function matchName(array,string){
    let result = array.filter(function(str){
        let isEqual = str.name === string;
        return isEqual;
    })

   return result;
}