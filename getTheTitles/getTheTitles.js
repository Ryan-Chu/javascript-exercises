const getTheTitles = function(arrayOfbooks) {
    let tempArray = [];
    for(let i = 0; i < arrayOfbooks.length; i++){
        tempArray.push(arrayOfbooks[i].title);
    }
    return tempArray;
}

module.exports = getTheTitles;
