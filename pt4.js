function onlyPositive (array){
    const arr = [];
    for (i = 0; i < array.length; i++){
        let element = array[i];
        if( element > 0){
            arr.push(element);
        }
        else {
            break;
        }
    } return arr;
    
}
const numbers = [ 45, 87, 96, 11, 63, -56, 71, 28];
 const result = onlyPositive(numbers);
console.log( result);