//You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

function checkGivenArray(givenArray, aValue){
    if (givenArray.indexOf(aValue) > -1){
        return true;
    } else {
        return false;
    }
}

console.log(checkGivenArray(['January', 'New Year', 'Health', '2019'], '2019'));