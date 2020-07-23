const repeatString = function(givenWord, i) {
    //parseInt's aren't needed with current tests,
    //added for future use
    if(parseInt(i) > 0){
        return givenWord.repeat(parseInt(i));
    }
    else if(parseInt(i) == 0){
        return "";
    }
    else{
        return "ERROR";
    }
}

module.exports = repeatString
