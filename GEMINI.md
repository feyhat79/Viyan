# Projekt-Richtlinien: Lernportal Viyan

## Synchronisation & Git-Workflow

1. **Webseiten & Lerninhalte (HTML / CSS / JS):**
   - Neue oder überarbeitete Inhalte für das interaktive Lernportal werden direkt in die jeweiligen Dateien eingepflegt.
   - Das Portal wird anschließend automatisch über `publish-portal.ps1 -Push` mit GitHub Pages synchronisiert.
   - Auf Nicht-Mathe-Seiten (Englisch, Deutsch) ausschließlich natives HTML (z. B. `&rarr;`) verwenden, kein ungerendertes LaTeX (`$\rightarrow$`).

2. **Arbeitsblätter & Druck-PDFs:**
   - Arbeitsblätter zum Ausdrucken werden lokal erstellt (z. B. im Ordner `arbeitsblaetter/`).
   - **Wichtig:** Arbeitsblätter und PDFs dürfen **NIEMALS automatisch** zu GitHub gepusht werden!
   - Vor einem eventuellen Git-Push für Arbeitsblätter muss der Assistent immer **zuerst ausdrücklich nachfragen**:
     *„Soll dieses Arbeitsblatt zu GitHub synchronisiert werden oder nur lokal zum Ausdrucken bleiben?“*
