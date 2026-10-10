# Projekt-Richtlinien: Lernportal Viyan

## 1. Webseiten & Lerninhalte (HTML / CSS / JS)
1. **Design & Seitenaufbau:**
   - Bewährter Stil: Moderner, touch- und iPad-optimierter Aufbau (Plus Jakarta Sans, saubere Badges, farblich abgestimmte Merkkästen).
   - Auf Nicht-Mathe-Seiten (Englisch, Deutsch) ausschließlich natives HTML (z. B. `&rarr;`) verwenden, kein ungerendertes LaTeX (`$\rightarrow$`).

2. **Interaktiver Selbsttest (Standard für jedes Thema / jede Kachel):**
   - Der Selbsttest am Ende jedes Themas wird **immer als interaktives Multiple-Choice Quiz** umgesetzt (`quiz-engine.js` & `quiz.css`).
   - **Fragenpool:** Jedes Thema erhält einen festen Pool aus **20 bis 25 Fragen**.
   - **Zwei Spielmodi zur Auswahl auf dem Startscreen:**
     - ⚡ **Schnelltest:** 10 zufällig gezogene Fragen für die schnelle Runde zwischendurch.
     - 📚 **Kompletter Test:** Alle 20–25 Fragen am Stück für das intensive Prüfungstraining.
   - **Interaktivität & Feedback:**
     - Sofortige visuelle Rückmeldung beim Antippen (Grün bei richtig, Rot bei falsch mit automatischer Hervorhebung der richtigen Lösung).
     - Zu jeder Frage eine kurze, verständliche didaktische Erklärbox.
     - Fortschrittsbalken, Live-Punktestand und Auswertungsscreen mit motivierendem Ergebnis-Feedback & Neustart-Option.
   - Zusätzliche schriftliche Aufgaben (z. B. Übersetzungen, freies Schreiben) werden optional darunter in einem aufklappbaren `<details>`-Bereich bereitgestellt.

3. **Automatische Synchronisation:**
   - Neue Webseiten-Inhalte werden nach dem Einpflegen automatisch über `publish-portal.ps1 -Push` mit GitHub Pages synchronisiert.

## 2. Arbeitsblätter & Druck-PDFs (Druckerfreundlich & Lokal)
1. **Fachspezifische Unterordner & nur PDF-Dateien:**
   - Arbeitsblätter werden **immer in fachspezifischen Unterordnern** abgelegt:
     - `arbeitsblaetter/englisch/`
     - `arbeitsblaetter/mathe/`
     - `arbeitsblaetter/deutsch/`
   - Für Arbeitsblätter wird **ausschließlich die finale PDF-Datei** im jeweiligen Fachordner abgelegt.
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

5. **Gymnasiales Niveau & Gestaffelte Anforderungsbereiche (AFB I – III):**
   - Aufgaben dürfen **niemals trivial oder zu einfach** sein; der Anspruch orientiert sich klar am **Gymnasium**.
   - Jedes Arbeitsblatt muss **unterschiedliche Schwierigkeitsgrade** bieten und alle drei Anforderungsbereiche abdecken:
     - **AFB I (Basis & Reproduktion, ca. 30 %):** Fachbegriffe, Regeln nennen, Basissätze und einfache Zuordnungen/Lücken.
     - **AFB II (Anwendung & Transfer, ca. 50 %):** Typische Klassenarbeitsfallen, Satztransformationen, anspruchsvolle Lückentexte im Fließtext, Fehlerdetektiv mit gezielter Korrektur, strukturierte Übersetzungen.
     - **AFB III (Transfer, Begründung & freies Gestalten, ca. 20 %):** Eigene Textproduktion (z. B. Dialoge, freie Texte), grammatikalische Entscheidungen schriftlich begründen, knifflige Sonderfälle analysieren und lösen.
