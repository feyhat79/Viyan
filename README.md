# 🎓 Lernportal Viyan (Gymnasium Klasse 5/6)

Ein modernes, touch-optimiertes Schulportal für Schulfächer, Kapitel, Rechenregeln, Grammatik und interaktive Selbsttests.

---

## 📁 Ordner- & Projektstruktur

```text
W:/home/Feyhat/Viyan/
│
├── index.html                           <-- Zentrales Dashboard (Hauptseite mit allen Fach-Kacheln)
├── assets/
│   ├── css/
│   │   └── main.css                     <-- Design-System (iPad-tauglich, Farbwelten für jedes Fach)
│   └── js/
│       └── main.js                      <-- Interaktive Helfer (Aufklappbare Lösungen, KaTeX)
│
├── mathe/                               <-- Fachbereich Mathematik
│   ├── index.html                       <-- Mathe Kapitelübersicht
│   └── kapitel-1-grundrechenarten.html  <-- Lernmodul 1 (Rechenregeln, KaTeX, interaktive Übungen)
│
├── deutsch/                             <-- Fachbereich Deutsch
│   ├── index.html                       <-- Deutsch Kapitelübersicht
│   └── kapitel-1-wortarten.html         <-- Lernmodul 1 (Wortarten, Proben & Übungen)
│
├── englisch/                            <-- Fachbereich Englisch
│   ├── index.html                       <-- Englisch Kapitelübersicht
│   └── kapitel-1-simple-present.html    <-- Lernmodul 1 (Simple Present, he/she/it, Signalwörter)
│
├── publish-portal.ps1                   <-- 1-Klick-Skript zum Pushen zu GitHub Pages
├── .gitignore                           <-- Filter für ungespeicherte Hilfsdateien
└── README.md                            <-- Diese Anleitung
```

---

## 🚀 Schritt-für-Schritt: Auf GitHub Pages online stellen

In nur wenigen Schritten ist das Portal über das Internet erreichbar:

### Schritt 1: Neues Repository auf GitHub erstellen
1. Öffne im Browser [github.com/new](https://github.com/new).
2. Vergib einen Namen für das Repository, z. B. `viyan` oder `lernportal-viyan`.
3. Wähle **Public** (Öffentlich), damit GitHub Pages kostenlos nutzbar ist.
4. Setze **keine** Haken bei *„Add a README file“* oder *„Add .gitignore“* (diese haben wir bereits lokal erstellt).
5. Klicke auf **Create repository**.

### Schritt 2: Lokales Verzeichnis mit GitHub verknüpfen
Öffne PowerShell im Ordner `W:\home\Feyhat\Viyan` und führe folgende Befehle aus (ersetze `<DEIN-NUTZERNAME>` und `<REPO-NAME>` durch deine GitHub-Daten, z. B. `feyhat79` und `viyan`):

```powershell
# 1. Git initialisieren
git init -b main

# 2. Alle Dateien hinzufügen und committen
git add .
git commit -m "Initiales Lernportal fuer Viyan mit Mathe, Deutsch und Englisch"

# 3. Mit deinem GitHub-Repository verbinden
git remote add origin https://github.com/feyhat79/viyan.git

# 4. Hochladen
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren
1. Gehe in deinem Repository auf GitHub auf den Reiter **Settings** (oben rechts).
2. Klicke links im Menü auf **Pages**.
3. Wähle unter **Build and deployment -> Branch**:
   - Branch: `main`
   - Ordner: `/ (root)`
4. Klicke auf **Save**.
5. Nach ca. 1–2 Minuten ist das Portal unter deiner persönlichen Adresse online:
   👉 **`https://feyhat79.github.io/viyan/`**

---

## 🔄 Zukünftige Änderungen & neue Kapitel hochladen

Sobald du neue Inhalte oder Kapitel hinzufügst, führst du einfach folgenden Befehl im Ordner aus:

```powershell
.\publish-portal.ps1 -Push -Message "Neues Kapitel ergänzt"
```

Das Skript übernimmt automatisch das Hinzufügen aller Dateien, das Committen und das Hochladen zu GitHub Pages.

---

## 📱 Auf dem iPad als App einrichten

1. Öffne die Webadresse (z. B. `https://feyhat79.github.io/viyan/`) in **Safari** auf dem iPad.
2. Tippe oben auf das **Teilen-Symbol** (Rechteck mit Pfeil nach oben).
3. Wähle **„Zum Home-Bildschirm“** und tippe auf **„Hinzufügen“**.
4. Jetzt erscheint das Lernportal wie eine native App auf Viyans Homescreen!
