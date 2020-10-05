const alphabet = "abcdefghijklmnopqrstuvwxyz";

try {
    function crypt(text, shift, action) {
        let outputText = "";

        if (action == "decrypt") {
            shift = -shift;
        }

        [...text].forEach(char => {
            
            if (alphabet.indexOf(char.toLowerCase()) != -1) {
                let isUpperChar = char == char.toUpperCase();
                let newCharIdx = alphabet.indexOf(char.toLowerCase()) + shift;
                if (newCharIdx >= alphabet.length) {
                    newCharIdx = newCharIdx - alphabet.length;
                } else if (newCharIdx < 0) {
                    newCharIdx = newCharIdx + alphabet.length;
                }

                let newChar = isUpperChar ? alphabet[newCharIdx].toUpperCase() : alphabet[newCharIdx];
                
                outputText = outputText + newChar;
            } else {
                outputText = outputText + char;
            }
            
            
        });
        //console.log(outputText);
        return outputText;
    };

    //crypt("Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.", 7, "decrypt")


} catch(err) {
    //console.log(err.message);
}

module.exports.crypt = (text, shift, action) => crypt(text, shift, action);
