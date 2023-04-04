//Написати функцію, яка посортує масив вставкою 
const array = [3, 0, 2, 5, -1, 4, 1]; 
function insert(array){ 
  array.sort(function(a, b){ 
    return a-b; 
  }); 
  return array; 
} 
console.log(insert(array));