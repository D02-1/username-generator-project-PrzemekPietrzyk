const fs = require('fs'); // File System, zum lesen des Dateisystems
const path = require('path'); // Path, zum arbeiten mit Dateipfaden

// Benutzernamen Generator
//Beispiel für Benutzer: ShinySunflower555555 ode FlyingAutomobile34567 oder BeautyCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die Werte aus der JSON Datei zu lesen
/**
 * @returns @functiongetWords()
 * @description Reads words from json file.
 * @returns { object }
 */
function getWords()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
}

// - Eine Funktion um die zufällige Nummer hinter dem Namen zugenerieren
/**
 * @createRandomNumber
 * @description
 * @param { number } minNumber 
 * @param { number} maxNumber 
 * @returns { number}
 */
function createRandomNumber(minNumber, maxNumber)
{
    // Wir erschaffen eine Zufallszahl aus einer minimalen und maximalen Zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // 

    // Wir geben die zufällige nummer zurück
    return num

}

// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
/**
 * @function capitaliseString
 * @description Takesthe first letter of a String and changes it to Uppercase, then returns string
 * @param { string } word 
 * @returns { string }
 */
function capitalizeString(word)
{
    // Prüfe ob ein Wort vorhanden ist
    if(word === undefined || word.length === 0 || !isNaN(word))
    {
        return "Default";
    }

    // Wir nehmen den ersten Buchstaben von unserem String, und ändern ihn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();

    // Wir nehmen den Rest des Strings, und ändern ihn auf LowerCase
    const  wordRest = word.substring(1).toLowerCase();

    // Wir geben den fertigen String zurück
    return wordStart + wordRest;

}


// - Eine Funktion mit der wie den Benutzernamen generieren und auf die Ergebnisse der anderen Funktinen zugreifen

function createRandomUserName(maxNumber)  
{
    // wir holen uns die Wörter
    const words = getWords();

     // wir holen uns aus der Wortliste die Ajektive
     const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length -1)) ] ;

     // wir holen uns aus der Wortliste die Nomen
     const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length - 1)) ];

     // Wir hollen uns unsere zufalszahl
     const randomNumber = createRandomNumber(10000, maxNumber);


     const finalUserName = `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNumber !== 0 ? randomNumber : ''}`

     // Wir geben einen zusamengesetzten Namen zurück

     return finalUserName; 

}
createRandomUserName(50000);

// - Einen Export, um die Application in einer anderen zu nutzen

exports.createUserName = (maxNumber) => createRandomUserName(maxNumber);
