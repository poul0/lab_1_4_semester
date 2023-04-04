//Написати функцію, яка вставить стрічку у відповідну позицію іншої стрічки
function insertString(originalString, stringToInsert, position) {
    // Перевіряємо, чи позиція в межах довжини рядка
    if (position > originalString.length) {
      return originalString + stringToInsert;
    } else {
      // Вставляємо стрічку в позицію за допомогою методів substring()
      return originalString.substring(0, position) + stringToInsert + originalString.substring(position);
    }
  }
  
  // Приклад використання
  var originalString = "Hello world!";
  var stringToInsert = " beautiful ";
  var position = 6;
  var newString = insertString(originalString, stringToInsert, position);
  console.log(newString);
  // Результат: "Hello beautiful world!"