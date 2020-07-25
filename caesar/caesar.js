const caesar = function(unencryptedMessage, encryption) {


    const mod = (n,m) => (n%m + m) % m;
    const codeSet = code => (code < 97 ? 65 : 97);
    var firstChar= unencryptedMessage.charCodeAt(0);
    var encryptedMessage = String.fromCharCode(mod(firstChar + encryption - codeSet(firstChar), 26) + codeSet(firstChar));
    
    for(var i = 1; i < unencryptedMessage.length; i++){
        var code = unencryptedMessage.charCodeAt(i)
        if((code >= 65 && code <= 90) || (code>= 97 && code<= 122)){
            encryptedMessage = encryptedMessage + String.fromCharCode(mod(code + encryption - codeSet(code), 26) + codeSet(code)) ;
            }
        else{
            encryptedMessage = encryptedMessage + String.fromCharCode(unencryptedMessage.charCodeAt(i));
            }
        }

    
        return encryptedMessage.toString();
    }

module.exports = caesar
