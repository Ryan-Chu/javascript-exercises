const caesar = function(unencryptedMessage, encryption) {
    if(unencryptedMessage.charAt(0).toUpperCase() != unencryptedMessage.charAt(0).toLowerCase()){
        var encryptedMessage = String.fromCharCode(unencryptedMessage.charCodeAt(0) + encryption);
    }
    else{
        var encryptedMessage = unencryptedMessage.charAt(0);
    }
        for(var i = 1; i < unencryptedMessage.length; i ++){
            if(unencryptedMessage.charAt(i).toUpperCase() != unencryptedMessage.charAt(i).toLowerCase()){
                encryptedMessage = encryptedMessage + String.fromCharCode(unencryptedMessage.charCodeAt(i) + encryption) ;
            }
            else{
                encryptedMessage = encryptedMessage + String.fromCharCode(unencryptedMessage.charCodeAt(i));
            }
        }
        return encryptedMessage;
}

module.exports = caesar
