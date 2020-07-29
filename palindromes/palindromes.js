const palindromes = function(wordChecker) {
    processed = wordChecker.toLowerCase().replace(/[^A-Za-z]/g,"");
    return (
        processed
          .split("")
          .reverse()
          .join("") == processed
      );
}

module.exports = palindromes
