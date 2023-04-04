//Написати функцію, яка поверне кількість днів, яка пройшла від початку року.  
function days_passed(dt) { 
  var current = new Date(dt.getTime()); 
  var previous = new Date(dt.getFullYear(), 1, 1); 
 
  return Math.ceil((current - previous + 1) / 86400000); 
} 
console.log(days_passed(new Date(2022, 03, 07)));