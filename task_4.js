//Знайти елемент із найбільшою частотою повторень
function findMostFrequentElement(arr) {
    var freqMap = {};
    var maxFreq = 0;
    var mostFrequentElement = null;
  
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      freqMap[element] = (freqMap[element] || 0) + 1;
      if (freqMap[element] > maxFreq) {
        maxFreq = freqMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  var arr = [1, 2, 3, 2, 3, 3, 4, 5, 5];
  var mostFrequentElement = findMostFrequentElement(arr);
  console.log(mostFrequentElement);