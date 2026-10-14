if (!localStorage.getItem('quiz-question-pack-v2')) {
  localStorage.removeItem('quiz-duell-state-v2');
  localStorage.setItem('quiz-question-pack-v2', 'ready');
}
window.quizBoards = [[
['ALLGEMEINWISSEN',[
['Welcher Kontinent liegt gleichzeitig auf der Nord-, Süd-, Ost- und Westhalbkugel?','Afrika'],
['Welches Element trägt die Ordnungszahl 74?','Wolfram'],
['Wer schrieb den Roman „1984“?','George Orwell'],
['Welche Meerenge trennt Europa von Afrika?','Straße von Gibraltar']]],
['GAMING',[
['Welches Studio entwickelte „Elden Ring“?','FromSoftware'],
['Wie heißt die Prinzessin des Königreichs Hyrule?','Zelda'],
['Welche Engine bildet die technische Grundlage von „Fortnite“?','Unreal Engine'],
['Wie beginnt der berühmte Konami-Code?','Hoch, hoch, runter, runter, links, rechts, links, rechts']]],
['YOUTUBE',[
['Welches Musikvideo erreichte als erstes eine Milliarde YouTube-Aufrufe?','Gangnam Style von Psy'],
['Wie heißt YouTubes System zur automatischen Erkennung geschützter Inhalte?','Content ID'],
['Wie hieß YouTube Premium ursprünglich?','YouTube Red'],
['Welche drei Personen gründeten YouTube?','Chad Hurley, Steve Chen und Jawed Karim']]],
['TWITCH',[
['Wie heißt das bekannte Twitch-Emote, das häufig Sarkasmus ausdrückt?','Kappa'],
['Wie nennt Twitch das Weiterleiten der eigenen Zuschauer zu einem anderen Livekanal?','Raid'],
['In welcher Stadt fand die erste TwitchCon 2015 statt?','San Francisco'],
['Wie heißt die Software-Schnittstelle, mit der Entwickler Twitch-Daten abrufen?','Twitch API / Helix API']]],
['IT-BASICS',[
['Wofür steht die Abkürzung „API“?','Application Programming Interface'],
['Wie viele Bit enthält eine IPv6-Adresse?','128 Bit'],
['Wofür steht die Datenbanksprache „SQL“?','Structured Query Language'],
['Welche logische Verknüpfung ist nur wahr, wenn beide Aussagen wahr sind?','UND / AND']]],
['INTERNET',[
['Welcher HTTP-Statuscode steht für eine dauerhafte Weiterleitung?','301'],
['Welchen Standard-Port verwendet DNS normalerweise?','Port 53'],
['Wie heißt der oberste Teil einer Domain wie „.de“ oder „.com“?','Top-Level-Domain / TLD'],
['Welches Protokoll verteilt IP-Adressen automatisch im Netzwerk?','DHCP']]]
],[
['GAME-KLASSIKER',[
['Welches Studio entwickelte das ursprüngliche „Doom“ von 1993?','id Software'],
['Wie hieß das Nintendo Entertainment System in Japan?','Famicom'],
['Wer entwickelte das ursprüngliche „Tetris“?','Alexei Paschitnow / Alexey Pajitnov'],
['Wie heißt die Hauptfigur der „Metroid“-Reihe?','Samus Aran']]],
['ESPORTS',[
['Wie heißt das große jährliche Dota-2-Turnier von Valve?','The International'],
['Um welchen Pokal spielen Teams bei der League-of-Legends-Weltmeisterschaft?','Summoner’s Cup'],
['Welche drei spielbaren Völker gibt es in „StarCraft II“?','Terraner, Zerg und Protoss'],
['Wie viele Runden muss ein Team regulär zum Sieg eines CS2-Matches gewinnen?','13 Runden']]],
['CREATOR-WISSEN',[
['Wofür steht „VOD“ im Streaming-Bereich?','Video on Demand'],
['Was beschreibt der „CPM“ bei Onlinewerbung?','Kosten beziehungsweise Einnahmen pro 1.000 Einblendungen'],
['Wie heißt das Entfernen eines einfarbigen Hintergrunds, etwa eines Greenscreens?','Chroma Keying'],
['Was ist in OBS eine „Szene“?','Eine gespeicherte Anordnung mehrerer Bild- und Audioquellen']]],
['PROGRAMMIEREN',[
['Welcher JavaScript-Operator prüft Wert und Datentyp auf Gleichheit?','==='],
['Wofür steht „JSON“?','JavaScript Object Notation'],
['Wie nennt man eine Funktion, die sich selbst aufruft?','Rekursive Funktion / Rekursion'],
['Welche durchschnittliche Laufzeit hat eine binäre Suche?','O(log n)']]],
['HARDWARE',[
['Wofür steht die Abkürzung „PSU“ in einem Computer?','Power Supply Unit / Netzteil'],
['Über welche Schnittstelle kommunizieren moderne NVMe-SSDs typischerweise?','PCI Express / PCIe'],
['Welche Aufgabe hat Wärmeleitpaste zwischen CPU und Kühler?','Sie füllt Unebenheiten und verbessert die Wärmeübertragung'],
['Was gibt die Abkürzung „TDP“ bei Prozessoren näherungsweise an?','Die thermische Verlustleistung / Thermal Design Power']]],
['NERD-WISSEN',[
['Welchen Dezimalwert hat die Hexadezimalzahl FF?','255'],
['Welche Adresse bezeichnet bei IPv4 den eigenen Rechner?','127.0.0.1 / Localhost'],
['Wie viele Byte enthält ein Gibibyte genau?','1.073.741.824 Byte'],
['Welche Zugriffsrechte beschreibt „chmod 755“ vereinfacht?','Besitzer: lesen, schreiben, ausführen; andere: lesen und ausführen']]]
]];
