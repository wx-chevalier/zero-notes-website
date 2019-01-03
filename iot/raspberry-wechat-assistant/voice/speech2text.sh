#!/bin/bash
 
KEY="DEIN_KEY"
URL="https://www.google.com/speech-api/v2/recognize?output=json&lang=de-de&key=$KEY"
 
echo "Aufnahme... Zum stoppen STRG+C drücken und warten."
arecord -D plughw:1,0 -f cd -t wav -d 0 -q -r 44100 | flac - -s -f --best --sample-rate 44100 -o file.flac;
echo ""
echo "Ausführen..."
wget -q -U "Mozilla/5.0" --post-file file.flac --header "Content-Type: audio/x-flac; rate=44100" -O - "$URL" >stt.txt
 
echo -n "Google Antwort: "
OUTPUT=$(cat stt.txt  | sed -e 's/[{}]/''/g' | awk -F":" '{print $4}' | awk -F"," '{print $1}' | tr -d '\n')
 
echo $OUTPUT
echo ""
 
rm file.flac  > /dev/null 2>&1
 
strindex() {
  x="${1%%$2*}"
  [[ $x = $1 ]] && echo -1 || echo ${#x}
}
 
# Damit Groß- und Kleinschreibung ignoriert wird.
# Falls wichtig, nächste Zeile auskommentieren
OUTPUT=$(echo $OUTPUT | tr '[:upper:]' '[:lower:]')
 
# Die zu suchende Zeichenkette muss klein geschrieben sein
# (ansonsten den Befehl vorher auskommentieren)
if (($(strindex "$OUTPUT" "licht an") != -1));  then
  # Befehle ausführen, Skripte startem, etc.
  echo "Licht wird eingeschaltet"
fi
if (($(strindex "$OUTPUT" "licht aus") != -1));  then
  echo "Licht wird ausgeschaltet"
fi