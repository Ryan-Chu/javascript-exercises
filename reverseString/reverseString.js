const reverseString = function(phraseToreverse) {
    var tempWord = phraseToreverse.charAt(phraseToreverse.length - 1);
    for(var i = phraseToreverse.length - 2; i > -1; i--){
        tempWord = tempWord + phraseToreverse.charAt(i);
    }
    return tempWord;
}

module.exports = reverseString
