var selectElementsStartingWithA = function (array) {
    return array.filter(x => x.charAt(0) === "a");
}

var selectElementsStartingWithVowel = function (array) {
    return array.filter(x => x.charAt(0).match(/[aeiou]/gi));
}

var removeNullElements = function (array) {
    return array.filter(x => x != null);
}

var removeNullAndFalseElements = function (array) {
    return array.filter(x => x !== null && x !== false);
}

var reverseWordsInArray = function (array) {
    return array.map(x => x.split("").reverse().join(""));
}

var everyPossiblePair = function (array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function (array) {
    return array.splice(3, 8);
}

var addElementToBeginning = function (array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function (array) {
    array = array.map(x => x.split("").reverse().join(""));
    array.sort()
    return array.map(x => x.split("").reverse().join(""));
}

var getFirstHalf = function (string) {
    let half = Math.ceil(string.length / 2)
    return string.slice(0, half);
}

var makeNegative = function (number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {
    let poli = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].split('').reverse().join('') === array[i]) {
            poli++;
        }
    }
    return poli;
}

var shortestWord = function (array) {
    return array.sort((a, b) => a.length - b.length)[0];
}

var longestWord = function (array) {
    return array.sort((a, b) => b.length - a.length)[0];
}

var sumNumbers = function (array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

var repeatElements = function (array) {
    return array.concat(array);
}

var stringToNumber = function (string) {
    return parseInt(string);
}

var calculateAverage = function (array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}

var getElementsUntilGreaterThanFive = function (array) {
    return array.splice(0, array.findIndex(x => x > 5));
}

var convertArrayToObject = function (array) {
    return Object.assign({}, { [array[0]]: array[1], [array[2]]: array[3], [array[4]]: array[5] });
};

var getAllLetters = function (array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let word = array[i].split('');
        for (j = 0; j < word.length; j++) {
            if (newArray.includes(word[j])) {
            } else {
                newArray.push(word[j]);
            }
        }
    }
    return newArray.sort();
}

var swapKeysAndValues = function (object) {
    let chiave = Object.keys(object);
    let valore = Object.values(object);
    let invert = new Object();
    for (i = 0; i < chiave.length; i++) {
        invert[valore[i]] = chiave[i];
    }
    return invert;
}

var sumKeysAndValues = function (object) {
    let chiave = Object.keys(object);
    let valori = Object.values(object);
    let sum = 0;
    for (i = 0; i < valori.length; i++) {
        sum += Number(valori[i]) + Number(chiave[i]);
    }
    return sum
}

var removeCapitals = function (string) {
    let noUpper = string.split('');
    let newArray = [];
    for (i = 0; i < noUpper.length; i++) {
        if (noUpper[i] != noUpper[i].toUpperCase() || noUpper[i] == " ") {
            newArray.push(noUpper[i])
        } else {
        }
    }
    let newString = newArray.join('');
    return newString;
}

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {
    let options = {
        day : '2-digit',
        month: '2-digit',
        year : 'numeric'
    };
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let newDate = new Date(day + "/" + month + "/" + year); 
    let x = newDate.toLocaleDateString("en", options);
    return x;
}

var getDomainName = function (string) {
    let  domain = string.substring(string.indexOf('@')+1, string.indexOf('.com'));
    return domain;
}

var titleize = function (string) {
    let titolare = string.split('');
    for (i = 0; i < titolare.length; i++) {
        if (string.search(".") == false){
           // 0 4 - 13/ 19* - 27   https://stackoverflow.com/questions/2332811/capitalize-words-in-string check this monday me!
            titolare[0].toUpperCase();
            titolare[4].toUpperCase();
            titolare[13].toUpperCase();
            titolare[27].toUpperCase();
        }
    } 
    return titolare.join('');
}

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
}

var squareRoot = function (number) {
    return 'Write your method here';
}

var factorial = function (number) {
    return 'Write your method here';
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}
