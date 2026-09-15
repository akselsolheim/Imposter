# Imposter — Remastered

Et norsk ordspill for 3–12 personer som spiller sammen på én mobil.

## Spill

Åpne `index.html` i nettleseren. Velg én eller flere kategorier, skriv inn navn og trykk **Start runde**. Send mobilen rundt, se rollen hver for dere, gi hint og stem sammen på én mistenkt.

Spill på nett: [Imposter](https://akselsolheim.github.io/Imposter/)

Den separate filen **Imposter.html** er en samlet utgave som kan åpnes direkte uten nett. Den trenger ingen av de andre filene. Kildepakken i denne mappen støtter også installering og bruk uten nett etter første besøk fra en HTTPS-adresse.

## Hva som er forbedret

- Nytt turkis og grønt design for mobil og datamaskin, med en startknapp som er lett tilgjengelig på mobilen.
- 24 ordkategorier med totalt 6 686 oppføringer og hint, søk og egne visninger for nye, valgte og egne kategorier. Kunstige varianter som «Norge klassisk» og hint basert på første bokstav/ordlengde er fjernet.
- Velg flere kategorier i samme runde.
- Egne spiller-ID-er og poengkontoer. Like navn stoppes før runden starter, og resultatet gir bare poeng én gang.
- Spillere, poeng, innstillinger og de siste ti ordene lagres i nettleseren. En aktiv runde kan gjenopptas etter oppdatering av samme fane.
- Hemmelige roller skjules ved fanebytte, tap av vindusfokus og gjenopptakelse. Raske dobbelttrykk skal ikke avsløre neste spillers kort.
- Egne kategorier kan opprettes, redigeres, slettes, eksporteres og importeres. Skriv ett `ord | hint` per linje. Duplikater fjernes.
- Gamle egne kategorier fra `imposterSavedCategories` importeres første gang remasteren åpnes på samme nettadresse og i samme nettleser. Legg til hint i gamle kategorier eller slå av imposterhint.
- Valgfri tidtaker på 3, 5 eller 8 minutter, med pause. Tiden beregnes fra klokken og driver derfor ikke når fanen er i bakgrunnen.
- De opprinnelige sjeldne overraskelsene er bevart og kan slås av: alle imposter, spillernavn og det opprinnelige bildet.

De tolv nye kategoriene er Dyr, Natur og vær, Byer, Kropp og sanser, Musikkartister, Sanger, Merkevarer, Myter og eventyr, Sport og fritid, Yrker og arbeidsliv, Kjøretøy og transport og Skole og teknologi. Alle kategoriene har mer enn 200 oppføringer; Karakterer har 459.

## Lagring og regler

Lagring gjelder denne nettleseren og denne nettadressen. Den synkroniseres ikke automatisk mellom enheter. Eksporter egne kategorier før du sletter nettleserdata eller bytter enhet. Spillet varsler hvis nettleseren ikke kan lagre.

Vanlige ord gjentas ikke i de neste ti rundene når de valgte kategoriene har minst elleve ulike ord. Med mindre egne kategorier brukes alle ordene før det eldste ordet blir tilgjengelig igjen. En sjelden navnerunde hoppes over hvis navnet er brukt blant de siste ti ordene.

Gruppen gjør ett felles valg i avstemningen. Hvis imposteren blir tatt, får alle andre ett poeng. Ellers får imposteren to. I en runde der alle er imposter får alle ett poeng.

Skjuling av kort hindrer vanlige utilsiktede avsløringer. En person som bruker nettleserens utviklerverktøy kan lese lokal spilltilstand; spillet forutsetter ærlig deling av én enhet.

## Vedlikehold

Ingen byggetrinn eller eksterne kjøretidsavhengigheter er nødvendige. Publiser filene samlet. `engine.js` inneholder spillreglene, `app.js` brukergrensesnittet, `styles.css` utseendet og `packs-*.js` ord/hint.

Kjør regeltestene med Node.js: `npm test`.

Ved en ny utgivelse må `VERSION` i `sw.js` og versjonene i ressursadressene oppdateres samlet. En installert ny versjon aktiveres når fanene som bruker forrige versjon er lukket. Den første remasterutgivelsen er **2.1.0**.

## Testomfang

Regeltester dekker blant annet identiteter, poeng, duplikatnavn, 500 ordtrekninger, små ordlister, manglende hint, feilformatert lagring, rollebeskyttelse og grensene for sjeldne runder.

Nettlesertester i Edge dekker hele runder, fanefokus og oppdatering, timer/pause, avstemning, poeng, redigering og lagring av egne kategorier, store sikkerhetskopier, spillergrenser, uventet HTML i navn og avbrutte runder. Visningen kontrolleres i mobil- og datamaskinstørrelser, inkludert 320 piksler bredde. En fysisk iPhone/Android-enhet er ikke brukt i disse testene.
