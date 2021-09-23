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
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wie den Benutzernamen generieren und auf die Ergebnisse der anderen Funktinen zugreifen
// - Einen Export, um die Application in einer anderen zu nutzen