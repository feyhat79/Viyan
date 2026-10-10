# Projekt-Richtlinien: Lernportal Viyan

## 1. Webseiten & Lerninhalte (HTML / CSS / JS)
- Neue oder überarbeitete Inhalte für das interaktive Lernportal werden direkt in die jeweiligen Dateien eingepflegt.
- Das Portal wird anschließend automatisch über `publish-portal.ps1 -Push` mit GitHub Pages synchronisiert.
- Auf Nicht-Mathe-Seiten (Englisch, Deutsch) ausschließlich natives HTML (z. B. `&rarr;`) verwenden, kein ungerendertes LaTeX (`$\rightarrow$`).

## 2. Arbeitsblätter & Druck-PDFs (Druckerfreundlich & Lokal)
1. **Nur PDF-Dateien (kein HTML im Zielordner):**
   - Für Arbeitsblätter wird **ausschließlich die finale PDF-Datei** im Ordner `arbeitsblaetter/` abgelegt.
   - Es werden **keine `.html`-Dateien** im Ordner `arbeitsblaetter/` belassen (temporäre HTML-Dateien zum PDF-Generieren werden nach dem Rendern sofort gelöscht).

2. **Drucker- & Tintensparend (Eco-Print):**
   - **Keine bunten Flächen oder Hintergründe:** Tintenpatronen schonen!
   - Nur Schwarz/Weiß und dezente Graustufen.
   - Dünne, saubere Rahmen und Linien statt flächiger Farbbalken.

3. **Papiersparende Lösungsblätter (2 Seiten auf 1 Blatt):**
   - Lösungsblätter werden so formatiert, dass **2 Seiten auf ein Blatt** passen (z. B. kompaktes 2-Spalten-Layout oder 2-Up A4-Querformat), um gezielt Papier zu sparen.

4. **Kein automatischer Git-Push für Arbeitsblätter:**
   - Arbeitsblätter und PDFs dürfen **NIEMALS automatisch** zu GitHub gepusht werden!
   - Vor einem eventuellen Git-Push für Arbeitsblätter muss immer **zuerst ausdrücklich nachgefragt** werden:
     *„Soll dieses Arbeitsblatt zu GitHub synchronisiert werden oder nur lokal zum Ausdrucken bleiben?“*
