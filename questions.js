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
    return array.splice(0, array.findIndex(x => x >5));
}

var convertArrayToObject = function (array) {
    return 'Write your method here';
}

var getAllLetters = function (array) {
    return 'Write your method here';
}

var swapKeysAndValues = function (object) {
    return 'Write your method here';
}

var sumKeysAndValues = function (object) {
    return 'Write your method here';
}

var removeCapitals = function (string) {
    return 'Write your method here';
}

var roundUp = function (number) {
    return 'Write your method here';
}

var formatDateNicely = function (date) {
    return 'Write your method here';
}

var getDomainName = function (string) {
    return 'Write your method here';
}

var titleize = function (string) {
    return 'Write your method here';
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
