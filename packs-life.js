/* Individually authored, short Norwegian associations for each entry. */
globalThis.IMPOSTER_PACKS ??= [];
(() => {
  const entries = text => text.trim().split('\n').map(line => {
    const [word, hint] = line.split('|');
    return { word: word.trim(), hint: hint.trim() };
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'sports', name: 'Sport og fritid', icon: 'trophy',
    description: 'Aktiviteter, utstyr og opplevelser på fritiden.',
    words: entries(`
Fotball|Offside
Håndball|Strekspiller
Basketball|Retur
Volleyball|Rotasjon
Sandvolleyball|Barføtt
Tennis|Deuce
Bordtennis|Celluloid
Badminton|Fjær
Squash|Bakvegg
Padel|Glassbur
Golf|Handikap
Minigolf|Vindmølle
Baseball|Hjemløp
Softball|Underarmskast
Cricket|Wicket
Rugby|Oval
Amerikansk fotball|Hjelmgitter
Australsk fotball|Fire stolper
Ishockey|Icing
Bandy|Oransje ball
Innebandy|Hullball
Landhockey|Krummet kølle
Lacrosse|Nettkurv
Ultimate|Selvdømming
Diskgolf|Kjettingkurv
Bowling|Ti kjegler
Boccia|Målball
Petanque|Grus
Curling|Kosting
Biljard|Grønn filt
Snooker|Fargepoeng
Dart|180
Sjakk|Opposisjon
Go|Omringing
Poker|Bløff
Bridge|Meldinger
Backgammon|Slagbrikke
Ludo|Hjemmebane
Yatzy|Fem like
Domino|Prikkrekke
Orientering|Postjakt
Terrengløping|Røtter
Maraton|42 kilometer
Sprint|Eksplosjon
Hekkeløp|Mellomsteg
Stafett|Veksling
Lengdehopp|Planke
Høydehopp|Fosbury
Stavsprang|Bøyelig
Tresteg|Hink
Spydkast|Tilløp
Kulestøt|Ringkant
Diskoskast|Rotasjonskraft
Sleggekast|Wire
Tikamp|Allsidighet
Kappgang|Bakkekontakt
Triatlon|Skiftesone
Skiskyting|Strafferunde
Langrenn|Smøring
Alpint|Fallinje
Slalåm|Porter
Utfor|Fartdress
Skihopping|Telemarksnedslag
Kombinert|Gundersen
Snowboard|Brettkant
Telemarkskjøring|Fri hæl
Freestyle|Kuleløype
Randonee|Feller
Kunstløp|Pirouett
Hurtigløp på skøyter|Ytre bane
Kortbaneløp|Tette svinger
Bob|Startdytt
Aking|Ryggleie
Skeleton|Hodet først
Svømming|Vendingsvegg
Stup|Sviktbrett
Vannpolo|Flytende mål
Kunstsvømming|Neseklype
Roing|Åregaffel
Kajakk|Dobbelåre
Kano|Enkelåre
Seiling|Kryssing
Vindsurfing|Mastfot
Kitesurfing|Trekkraft
Bølgesurfing|Lineup
Padlebrett|Stående balanse
Rafting|Stryk
Fekting|Maskeledning
Boksing|Hjørnepause
Kickboksing|Leggtreff
Judo|Fallteknikk
Karate|Kata
Taekwondo|Høye spark
Bryting|Mattekant
Sumo|Dohyo
Jiu-jitsu|Låsegrep
MMA|Burkant
Aikido|Avledning
Kendo|Bambussverd
Vektløfting|Rykk
Styrkeløft|Tre øvelser
Kroppsbygging|Posering
Crossfit|Dagens økt
Turn|Svingstang
Rytmisk gymnastikk|Silkebånd
Trampoline|Sprettduk
Parkour|Hinderovergang
Cheerleading|Pyramide
Akrobatikk|Mennesketårn
Yoga|Solhilsen
Pilates|Kjernestyrke
Aerobic|Stepkasse
Zumba|Latinrytmer
Spinning|Stasjonært tråkk
Jogging|Pratetempo
Turmarsj|Stemplingskort
Klatring|Sikringspartner
Buldring|Tjukkas
Rappellering|Bremsehånd
Isklatring|Øksegrep
Via ferrata|Stålvaier
Ridning|Sjenkel
Dressurridning|Piruett på hest
Sprangridning|Bommefall
Feltritt|Faste hinder
Hestepolo|Lang kølle
Hundekjøring|Lederhund
Agility|Slalåmpinner
Frisbee|Skrukast
Skateboarding|Griptape
Longboarding|Myke hjul
Rulleskøyter|Hjulrekke
BMX|Halfpipe
Terrengsykling|Støtdemper
Landeveissykling|Felt
Banesykling|Velodrom
Motocross|Jordhopp
Speedway|Sladd
Trial|Balansehinder
Rally|Kartleser
Karting|Lavt sete
Bueskyting|Ankerpunkt
Sportsskyting|Avtrekk
Leirdueskyting|Flygende skive
Femkamp|Fem disipliner
Fallskjermhopping|Reserveskjerm
Paragliding|Termikk
Hanggliding|Trekantvinge
Dykking|Trykkutlikning
Fridykking|Pustehold
Snorkling|Overflatesyn
Fjellvandring|Varding
Geocaching|Loggboks
Fuglekikking|Artsliste
Fritidsfiske|Napp
Fluefiske|Kasteløkke
Isfiske|Pilking
Krabbefiske|Klypeagn
Camping|Teltplass
Hengekøye|To trær
Sovepose|Komforttemperatur
Liggeunderlag|Bakkeisolasjon
Stormkjøkken|Vindskjerm
Termos|Vakuumvegg
Turkopp|Karabinkrok
Pannelykt|Frie hender
Kompass|Nordpil
Turkart|Høydekurver
Førstehjelpspakke|Gnagsår
Vandrestaver|Avlastning
Bålpanne|Glør
Opptenningsstål|Gnister
Speiding|Knuter
Knivspikking|Flis
Kaninhold|Høyhekk
Hagearbeid|Jord under neglene
Strikking|Rett og vrang
Hekling|Luftmasker
Brodering|Korssting
Sying|Sømmonn
Quilting|Lappeteppe
Origami|Papirbrett
Keramikk|Dreieskive
Maling|Palett
Akvarell|Vannpigment
Tegning|Skravering
Kalligrafi|Pennetrykk
Fotografering|Lukkertid
Scrapbooking|Minneramme
Modellbygging|Målestokk
Puslespill|Kantbrikker
Rubiks kube|Fargeflater
Brettspill|Turtaking
Rollespill|Terningkast
Improvisasjonsteater|Ja, og
Karaoke|Tekstskjerm
Kor|Stemmegruppe
Korps|Marsjhefte
Gitarspill|Båndgrep
Pianospill|Tangentanslag
Trommespill|Backbeat
Dans|Taktfølelse
Ballett|Tåspiss
Salsa|Partnerbytte
Swing|Rockesteg
Tango|Tett føring
Breakdance|Gulvspinn
Folkedans|Bunad
Halling|Hattespark
Stjernekikking|Mørketilvenning
Myntsamling|Årgang
Frimerkesamling|Tagger
Slektsforskning|Kirkebok
Lesesirkel|Felles bok
Matlaging|Smaksprøve
Baking|Hevetid
Syltetøykoking|Sylteglass
Ølbrygging|Gjæringskar
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'jobs', name: 'Yrker og arbeidsliv', icon: 'briefcase',
    description: 'Menneskene, redskapene og hverdagen på jobb.',
    words: entries(`
Lærer|Rettebunke
Barnehagelærer|Samlingsstund
Professor|Forelesning
Rektor|Skoleledelse
Spesialpedagog|Tilrettelegging
Bibliotekar|Hylleorden
Arkivar|Proveniens
Historiker|Kildekritikk
Arkeolog|Utgravingsrute
Antropolog|Feltarbeid
Sosiolog|Samfunnsmønster
Statsviter|Maktfordeling
Filosof|Tankeforsøk
Oversetter|Språkbro
Tolk|Samtidstale
Journalist|Kildevern
Redaktør|Publiseringsansvar
Forfatter|Manusutkast
Tekstforfatter|Slagord
Korrekturleser|Trykkfeil
Fotograf|Utsnitt
Filmregissør|Tagning
Filmklipper|Råopptak
Kamerafotograf|Fokusdragning
Lydtekniker|Miksebord
Lysdesigner|Lyskaster
Scenograf|Kulisse
Rekvisitør|Scenegjenstander
Kostymedesigner|Rolleplagg
Skuespiller|Prøvespill
Stemmeskuespiller|Dubbing
Stuntutøver|Sikkerhetsline
Danser|Koreografi
Koreograf|Trinnmønster
Musiker|Øvingsrom
Komponist|Partitur
Dirigent|Taktstokk
Sanger|Pustestøtte
DJ|Overgang
Illustratør|Bildeoppdrag
Grafisk designer|Typografi
Animatør|Nøkkelbilder
Spilldesigner|Spilleregler
Programmerer|Feilsøking
Systemutvikler|Arkitekturvalg
IT-driftstekniker|Oppetid
Nettverksadministrator|Trafikkruting
Datasikkerhetsanalytiker|Sårbarhet
Dataanalytiker|Mønsterfunn
Statistiker|Usikkerhetsmargin
UX-designer|Brukertest
Webdesigner|Skjermoppsett
Produkteier|Prioriteringsliste
Prosjektleder|Milepæl
Ingeniør|Beregning
Byggingeniør|Bæreevne
Maskiningeniør|Mekanisme
Elektroingeniør|Kretsanalyse
Kjemiingeniør|Prosessanlegg
Arkitekt|Plantegning
Landskapsarkitekt|Uterom
Interiørarkitekt|Romfølelse
Landmåler|Totalstasjon
Geolog|Bergprøve
Geofysiker|Seismikk
Meteorolog|Isobar
Oseanograf|Havstrøm
Astronom|Observatorium
Fysiker|Partikler
Kjemiker|Reagens
Biolog|Arter
Mikrobiolog|Petriskål
Botaniker|Herbarium
Zoolog|Dyreatferd
Økolog|Næringsnett
Lege|Diagnose
Sykepleier|Visitt
Helsefagarbeider|Daglig omsorg
Jordmor|Fødeavdeling
Ambulansearbeider|Utrykning
Kirurg|Operasjonsfelt
Anestesilege|Narkose
Radiograf|Bildeundersøkelse
Bioingeniør|Prøvesvar
Farmasøyt|Reseptkontroll
Tannlege|Karies
Tannpleier|Tannstein
Tanntekniker|Kroneform
Optiker|Synstest
Audiograf|Hørselstest
Fysioterapeut|Bevegelsesøvelse
Ergoterapeut|Hverdagshjelpemiddel
Logoped|Uttaletrening
Psykolog|Tankemønster
Psykiater|Medisinsk samtale
Sosionom|Støtteordning
Barnevernspedagog|Omsorgsvurdering
Vernepleier|Mestring
Veterinær|Dyrepasient
Dyrepleier|Pelsstell
Fiskehelsebiolog|Oppdrettshelse
Advokat|Prosedyre
Dommer|Rettsledelse
Politi|Etterforskning
Etterforsker|Sporanalyse
Kriminaltekniker|Fingeravtrykk
Fengselsbetjent|Celleavdeling
Tollbetjent|Grensekontroll
Vekter|Adgangskort
Brannkonstabel|Røykdykking
Redningsdykker|Undervannssøk
Soldat|Øvelse
Offiser|Kommando
Diplomat|Forhandling
Prest|Preken
Imam|Fredagsbønn
Rabbiner|Synagoge
Gravferdskonsulent|Avskjed
Ordfører|Kjede
Kommunedirektør|Saksframlegg
Revisor|Kontrollspor
Regnskapsfører|Bilag
Økonom|Ressursfordeling
Bankrådgiver|Lånesamtale
Forsikringsrådgiver|Dekningsbehov
Eiendomsmegler|Visning
Takstingeniør|Tilstandsrapport
Aksjemegler|Ordrebok
Aktuar|Risikoberegning
HR-rådgiver|Personalsak
Rekrutterer|Kandidatjakt
Karriereveileder|Kompetansekart
Sekretær|Møtebok
Resepsjonist|Velkomstskranke
Kundeservicemedarbeider|Henvendelse
Telefonselger|Ringeliste
Butikkmedarbeider|Varepåfyll
Kasserer|Veksel
Innkjøper|Leverandørvalg
Logistiker|Vareflyt
Lagerarbeider|Plukkliste
Truckfører|Palleløft
Postbud|Rutekasse
Bud|Leveringsfrist
Lastebilsjåfør|Fraktbrev
Bussjåfør|Holdeplass
Drosjesjåfør|Takstameter
Lokfører|Signallys
Konduktør|Billettkontroll
Trikkefører|Sporveksel
Pilot|Sjekkliste
Flygeleder|Rullebaneklaring
Flymekaniker|Vedlikeholdslogg
Kabinansatt|Sikkerhetsdemonstrasjon
Kaptein|Broansvar
Styrmann|Navigasjonsvakt
Matros|Fortøyning
Maskinist|Maskinrom
Los|Lokalkunnskap
Fisker|Garnsetting
Bonde|Avlingsår
Agronom|Jordforbedring
Gartner|Prikling
Skogsarbeider|Felling
Skogbruksleder|Hogstplan
Birøkter|Bikube
Reindriftsutøver|Flyttleie
Hovslager|Hestesko
Hestetrener|Tilridning
Dyrepasser|Fôrrunde
Kokk|Mise en place
Baker|Elting
Konditor|Glasur
Slakter|Stykningsdel
Pølsemaker|Tarmfylling
Fiskehandler|Filetering
Servitør|Bordnummer
Bartender|Shaker
Barista|Melkeskum
Sommelier|Årgangskart
Hotellsjef|Beleggsprosent
Renholder|Mopperute
Husholder|Lintøy
Vaktmester|Nøkkelknippe
Frisør|Ettervekst
Barberer|Knivskum
Hudpleier|Ansiktsrens
Makeupartist|Kontur
Negledesigner|Geléherding
Massør|Muskelknute
Personlig trener|Treningsplan
Treningsinstruktør|Gruppetime
Turguide|Severdighet
Reiseleder|Gruppesamling
Fjellfører|Rutevalg
Skiinstruktør|Pløging
Livredder|Bassengkant
Tømrer|Bindingsverk
Snekker|Møbelledd
Murer|Mørtelfuge
Betongarbeider|Forskaling
Elektriker|Sikringsskap
Rørlegger|Vannlås
Blikkenslager|Takrenne
Taktekker|Membran
Maler|Maskeringstape
Gulvlegger|Underlag
Flislegger|Fugekryss
Glassmester|Vindusrute
Isolatør|Varmetap
Ventilasjonstekniker|Luftmengde
Låsesmed|Sylinder
Sveiser|Lysbue
Industrimekaniker|Lagerbytte
CNC-operatør|Programstyrt fres
Bilmekaniker|Feilkode
Biloppretter|Karosseri
Billakkerer|Sprøyteboks
Dekkmontør|Balansering
Sykkelreparatør|Girjustering
Urmakeren|Gangverk
Gullsmed|Lodding
Keramiker|Brennovn
Skomaker|Såle
Skredder|Målsøm
Seilmaker|Dukspenning
Båtbygger|Spant
Orgelbygger|Piper
Pianostemmer|Kammertone
Instrumentmaker|Resonans
Møbelsnekker|Sinkeforbindelse
Tapetserer|Trekkstoff
Steinhugger|Meisel
Feier|Sot
Anleggsmaskinfører|Skuffe
Kranfører|Løfteplan
Stillasmontør|Rekkverk
Bergsprenger|Tennplan
Gruvearbeider|Stoll
Prosessoperatør|Kontrollrom
Plastmekaniker|Formstøping
Trykker|Fargeseparasjon
Bokbinder|Rygglim
Pakkerimedarbeider|Emballasje
Renovasjonsarbeider|Tømming
Gjenvinningsoperatør|Sorteringsanlegg
Vannverksoperatør|Rensing
Avløpsoperatør|Slam
Arbeidsavtale|Underskrifter
Lønnsslipp|Trekk
Timeliste|Registrering
Turnus|Vaktbytte
Overtid|Ekstratimer
Fleksitid|Kjernetid
Prøvetid|Nyansatt
Lærling|Fagbrev
Praksisplass|Erfaring
Jobbintervju|Førsteinntrykk
CV|Erfaringsoversikt
Søknadsbrev|Motivasjon
Referanse|Tidligere leder
Oppsigelse|Sluttdato
Pensjon|Etter arbeidslivet
Fagforening|Medlemskap
Tillitsvalgt|Representasjon
Verneombud|Arbeidsmiljø
Tariffavtale|Felles vilkår
Streik|Arbeidsstans
Medarbeidersamtale|Tilbakemelding
Personalhåndbok|Interne rutiner
Hjemmekontor|Kjøkkenbord
Kantine|Lunsjkø
Pauserom|Kaffekopp
Reiseregning|Kvitteringer
Firmabil|Kjørebok
Vernebriller|Øyevern
Hørselsvern|Støydemping
Vernesko|Tåkappe
Hjelm|Hodevern
Refleksvest|Synlighet
Sikkerhetssele|Fallsikring
Arbeidshansker|Grep
ID-kort|Navnebilde
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'transport', name: 'Kjøretøy og transport', icon: 'car',
    description: 'På vei, på skinner, til sjøs og i luften.',
    words: entries(`
Personbil|Baksete
Elbil|Ladestopp
Hybridbil|To energikilder
Stasjonsvogn|Lang bagasjeplass
Sedan|Eget bagasjerom
Kabriolet|Åpen himmel
Sportsbil|Lav bakkeklaring
Limousin|Lang akselavstand
SUV|Høy sittestilling
Pickup|Åpent lasteplan
Varebil|Skyvedør
Minibuss|Flere seterader
Bybuss|Stoppknapp
Ledd­buss|Trekkspill
Turbuss|Bagasjeluke
Trolleybuss|Strømstenger
Skolebuss|Morgentransport
Nattbuss|Sene avganger
Dobbeltdekker|Overetasje
Drosje|Taklampe
Ambulanse|Båre
Brannbil|Slangetrommel
Politibil|Blålys
Lastebil|Førerhus
Semitrailer|Svingskive
Vogntog|Tilhengerledd
Tankbil|Væskelast
Betongbil|Roterende trommel
Renovasjonsbil|Komprimering
Bergingsbil|Vinsj
Kranbil|Løftearm
Tippbil|Vippbart plan
Tømmerbil|Stokklast
Feiebil|Roterende koster
Strøbil|Saltspreder
Brøytebil|Snøkant
Campingbil|Seng på hjul
Campingvogn|Trekkrok
Matvogn|Serveringsluke
Hestetransporter|Spiltau
Motorsykkel|Knepute
Moped|Lett motor
Scooter|Fotbrett
Sidevogn|Sidepassasjer
ATV|Fire terrenghjul
Snøscooter|Belte og ski
Vannscooter|Vannstråle
Sykkel|Kjededrift
Elsykkel|Tråkkhjelp
Tandemsykkel|Doble pedaler
Lastesykkel|Foranliggende kasse
Liggesykkel|Tilbakelent
Enhjulssykkel|Pedalbalanse
Sparkesykkel|Fraspark
Elektrisk sparkesykkel|Tommelgass
Spark|Meier
Rullestol|Drivringer
Elektrisk rullestol|Styrespak
Rullator|Gangstøtte
Barnevogn|Kalesje
Trillebår|Ett hjul
Handlevogn|Myntlås
Bagasjetralle|Flyplasskofferter
Pallevogn|Gaffeljekk
Gaffeltruck|Motvekt
Traktor|Kraftuttak
Skurtresker|Skjærebord
Gravemaskin|Beltegraver
Hjullaster|Frontskuffe
Bulldoser|Skyveskjær
Veihøvel|Jevning
Veivals|Trommeltrykk
Asfaltutlegger|Varm masse
Dumper|Masser
Teleskoplaster|Uttrekkbar bom
Beltevogn|Myrlende
Stridsvogn|Kanontårn
Amfibiekjøretøy|Land og vann
Gokart|Åpent chassis
Formelbil|Frontvinge
Dragster|Akselerasjonsstripe
Rallybil|Sikkerhetsbur
Veteranbil|Patina
Hestevogn|Kusk
Rikshaw|Passasjervogn
Hundeslede|Spann
Pulk|Trekksele
Lokomotiv|Trekkraft
Damplokomotiv|Kullfyring
Diesellokomotiv|Forbrenningsdrift
Elektrisk lokomotiv|Strømavtaker
Persontog|Kupé
Godstog|Fraktvogner
Høyhastighetstog|Strømlinje
Sovevogn|Køye
Restaurantvogn|Servering underveis
Trikk|Gateskinner
T-bane|Undergrunnsstasjon
Monorail|Enkel bjelke
Maglevtog|Magnetisk svev
Fløibane|Motvektvogner
Taubane|Bærekabel
Gondolbane|Hengende kabin
Stolheis|Bøyle
Skiheis|Trekkanker
Rulletrapp|Bevegelige trinn
Heis|Etasjeknapp
Rullefortau|Gangbånd
Ferje|Bilrader
Hurtigbåt|Kystpendling
Cruiseskip|Lugarrekke
Containerskip|Stablekasser
Tankskip|Flytende last
Bulkskip|Løs last
Fiskebåt|Not
Tråler|Akternett
Seilbåt|Kjøl
Motorbåt|Påhengsmotor
Robåt|Åretoll
Jolle|Liten slepebåt
Gummibåt|Luftkammer
RIB|Fast skrog
Katamaran|Dobbeltskrog
Trimaran|Tre skrog
Skonnert|To master
Fullrigger|Råseil
Galei|Årebenker
Langskip|Dragebaug
Dampskip|Skorstein
Hjuldamper|Skovlhjul
Slepebåt|Havneassistanse
Losbåt|Bording
Redningsskøyte|Sjøassistanse
Isbryter|Forsterket baug
Forskningsskip|Instrumenttokt
Forsyningsskip|Plattformlast
Kabelskip|Sjøbunnsrute
Hangarskip|Flydekk
Ubåt|Dykket
Fregatt|Eskorte
Korvett|Kystforsvar
Minesveiper|Ryddet farvann
Landgangsfartøy|Strandrampe
Luftputebåt|Sveveskjørt
Hydrofoil|Undervannsvinger
Flåte|Sammenbundne stokker
Lekter|Flatbunnet
Kanalbåt|Sluser
Passasjerfly|Kabingang
Propellfly|Roterende blad
Jetfly|Turbinstøy
Seilfly|Oppdrift
Sjøfly|Flottører
Helikopter|Halefinne
Gyrokopter|Frittroterende rotor
Tiltrotorfly|Vippbare motorer
Luftballong|Brenner
Luftskip|Gasskropp
Drone|Fjernpilot
Jagerfly|Etterbrenner
Transportfly|Lasterampe
Brannfly|Vanndropp
Ambulansehelikopter|Landingsplass
Rakett|Trinndeling
Romferge|Varmeskjold
Romkapsel|Gjeninntreden
Satellitt|Banehøyde
Rover|Planetoverflate
Ratt|Svingutslag
Gasspedal|Pådrag
Bremsepedal|Nedbremsing
Clutch|Frikobling
Girspak|Utveksling
Håndbrems|Parkering
Dashbord|Instrumenter
Speedometer|Fartsnål
Kilometerteller|Kjørelengde
Drivstoffmåler|Tanknivå
Vindusvisker|Regnsveip
Sidespeil|Blindsone
Bakspeil|Bakoversikt
Blinklys|Retningsvarsel
Frontlykt|Mørkekjøring
Tåkelys|Lav lyskjegle
Bremselys|Rødt varsel
Sikkerhetsbelte|Trepunkt
Kollisjonspute|Oppblåsing
Barnesete|Isofix
Nakkestøtte|Piskesnert
Støtfanger|Ytterkant
Panser|Motorlokk
Bagasjerom|Kofferter
Takboks|Ekstra oppbevaring
Tilhengerfeste|Kule
Eksosrør|Utløpsgass
Lyddemper|Støykammer
Katalysator|Avgassrensing
Radiator|Kjølevæske
Startmotor|Igangsetting
Dynamo|Strømproduksjon
Tennplugg|Gnistgap
Drivaksel|Kraftoverføring
Differensial|Ulik hjulfart
Støtdemper|Ujevnheter
Fjæring|Komfortvei
Felg|Hjulring
Dekk|Kontaktflate
Ventil|Lufttrykk
Reservehjul|Punktering
Snøkjetting|Vinterfeste
Nav|Hjulsentrum
Bremseskive|Friksjonsflate
Bremsekloss|Slitedel
Motorvei|Planskilte kryss
Rundkjøring|Sirkulasjon
Veikryss|Møtende retninger
Gangfelt|Hvite striper
Sykkelfelt|Tohjulssone
Fortau|Fotgjengere
Fotgjengerbro|Trygg kryssing
Tunnel|Fjellgjennomgang
Viadukt|Høy bru
Bomstasjon|Passeringstakst
Bensinstasjon|Pumpe
Ladestasjon|Kontaktplugg
Rasteplass|Pausebenk
Parkeringshus|Etasjeparkering
Garasje|Biloppbevaring
Bussholdeplass|Rutetavle
Togstasjon|Plattform
Jernbanespor|Sviller
Planovergang|Bommer
Pens|Sporvalg
Kontaktledning|Overheng
Signal|Kjør eller vent
Havn|Kai
Molo|Bølgevern
Fyr|Lyskarakter
Farled|Sjøvei
Sluse|Vanntrapp
Bøye|Flytemerke
Anker|Bunnfeste
Ror|Kursendring
Propell|Fremdrift
Fortøyning|Trosse
Landgang|Bordstigning
Flyplass|Avgangshall
Rullebane|Takeoff
Taksebane|Bakkeforflytning
Hangar|Flyoppbevaring
Kontrolltårn|Luftoversikt
Gate|Ombordstigningskø
Bagasjebånd|Koffertkarusell
Sikkerhetskontroll|Røntgenbrett
Innsjekking|Setetildeling
Boardingkort|Skannekode
Billett|Reiserett
Rutetabell|Avgangstid
Reisekort|Tapping
GPS|Posisjonsberegning
Autopilot|Automatisk kurs
Fartsskriver|Kjørepauser
Veiskilt|Trafikkbeskjed
Trafikklys|Fargeskifte
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'schooltech', name: 'Skole og teknologi', icon: 'book',
    description: 'Fra klasserom og forskning til dingser og den digitale verden.',
    words: entries(`
Norsk|Sidemål
Matematikk|Ukjent størrelse
Engelsk|Uregelmessige verb
Naturfag|Forsøksrapport
Samfunnsfag|Maktfordeling
Kroppsøving|Gymsal
Kunst og håndverk|Leire på hendene
Mat og helse|Kjøkkenforkle
Musikk|Notelinjer
Fransk|Nasale vokaler
Spansk|Omvendt spørsmålstegn
Tysk|Tre grammatiske kjønn
Geografi|Høydekurver
Fysikk|Krefter i bevegelse
Kjemi|Reaksjonslikning
Biologi|Levende celler
Filosofi|Grunnleggende spørsmål
Programmering|Instruksjoner i rekkefølge
Skolebibliotek|Stille friminutt
Klasserom|Faste plasser
Lærerværelse|Pauser bak lukket dør
Rektor|Kontoret ved administrasjonen
Kontaktlærer|Utviklingssamtale
Vikar|Nytt ansikt ved tavla
Elevråd|Klassens representant
Foreldremøte|Voksne på små stoler
Lekser|Skolearbeid hjemme
Prøve|Lukket bok
Eksamen|Lang dag med vakter
Karakter|Et tall på innsatsen
Vitnemål|Papiret etter siste skoledag
Friminutt|Ringeklokken frigjør
Timeplan|Mandag til fredag
Skolesekk|Bøker på ryggen
Pennal|Glidelås rundt skriveredskaper
Blyant|Grafittspor
Kulepenn|Liten rullende spiss
Viskelær|Smuler på arket
Blyantspisser|Trespon
Linjal|Rett strek
Passer|Sirkel fra et punkt
Vinkelmåler|Halvsirkel med tall
Kalkulator|Regne på knapper
Notatbok|Tanker mellom to permer
Lærebok|Kapittelprøve
Ordbok|Oppslagsord
Atlas|Verden mellom permer
Tavle|Hele klassen ser
Kritt|Hvitt støv på fingrene
Tusj|Farge som sitter
Overheadprojektor|Gjennomsiktig ark
Smarttavle|Trykk foran klassen
Pult|Skuff under skriveflaten
Skoleklokke|Felles start og stopp
Matpakke|Brødskiver i papir
Termos|Varmt innhold lenge
Gruppearbeid|Fordele oppgavene
Presentasjon|Alle ser på deg
Kildekritikk|Hvem står bak påstanden
Fotnote|Liten henvisning nederst
Innholdsfortegnelse|Finn riktig kapittel
Sammendrag|Det viktigste på få linjer
Tankekart|Ideer med forgreninger
Høytlesing|Ordene får stemme
Diktat|Skriv det du hører
Debatt|Argument mot argument
Disposisjon|Plan før teksten
Problemstilling|Spørsmålet arbeidet svarer på
Hypotese|Antakelse som kan prøves
Eksperiment|Endre én ting om gangen
Mikroskop|Verden i en vanndråpe
Teleskop|Fjerne lys kommer nærmere
Reagensrør|Liten reaksjon i glass
Vernebriller|Ekstra lag foran øynene
Laboratoriefrakk|Hvitt vern mot søl
Pipette|Dråpevis overføring
Termometer|Grader i rødt og blått
Stoppeklokke|Tid siden start
Magnet|Frastøting og tiltrekning
Batteri|Lagret ladning
Strømkrets|En sluttet runde
Lyspære|Glød over hodet
Solcelle|Tak som høster lys
Vindturbin|Roterende energifanger
Vannkraft|Fall blir strøm
Atom|Kjerne og elektroner
Molekyl|Atomer i fellesskap
Grunnstoff|Én slags atom
Periodesystemet|Rader med kjemiske symboler
Fotosyntese|Sollys blir sukker
Tyngdekraft|Alt faller samme vei
Friksjon|Motstand mellom flater
Lyd|Svingninger i luft
Elektrisitet|Ladninger på vandring
Prosent|Deler av hundre
Brøk|Teller over nevner
Likning|Balanse på begge sider
Geometri|Former og vinkler
Statistikk|Mønster i mange tall
Gjennomsnitt|Summen fordelt likt
Sannsynlighet|Hvor stor er sjansen
Koordinatsystem|To akser møtes
Desimaltall|Sifre etter komma
Multiplikasjon|Gjentatt addisjon
Divisjon|Dele i like store grupper
Substantiv|En, ei eller et
Verb|Noe som skjer
Adjektiv|Beskriver egenskapen
Avsnitt|Ny tanke på ny linje
Datamaskin|Skrivebord uten møbler
Bærbar PC|Kontoret i fanget
Nettbrett|Stor berøringsflate
Smarttelefon|Lomme med mange funksjoner
Smartklokke|Varsler på håndleddet
Tastatur|Mellomrom under tommelen
Datamus|Peker følger hånden
Styreflate|Fingeren flytter pilen
Skjerm|Piksler foran deg
Webkamera|Ansiktet i møtet
Mikrofon|Fanger stemmen
Høyttaler|Vibrerende membran
Hodetelefoner|Privat lydspor
Skriver|Digitalt blir papir
Skanner|Papir blir digitalt
Prosessor|Milliarder av små beregninger
Hovedkort|Komponentenes møteplass
Arbeidsminne|Kortvarig digitalt arbeidsbord
Harddisk|Roterende lagring
SSD|Lagring uten bevegelige deler
Grafikkort|Bilder i høy fart
Minnepinne|Filer på nøkkelknippet
Minnekort|Lite lager i kameraet
USB|Kontakt som ofte snus
HDMI|Lyd og bilde i samme kabel
Lader|Prosenten stiger
Ruter|Fordeler forbindelsen
Modem|Bro til nettleverandøren
Wi-Fi|Forbindelse uten ledning
Bluetooth|Paring på kort avstand
Fiberkabel|Lyspulser under bakken
Nettleser|Faner langs toppen
Søkemotor|Spørsmål blir treff
Nettside|En adresse med innhold
Lenke|Klikk videre
Domene|Navnet før skråstreken
IP-adresse|Nummerert nettverksadresse
Server|Svarer mange maskiner
Nettsky|Lagring et annet sted
E-post|Digital konvolutt
Vedlegg|Filen som følger meldingen
Søppelpost|Uønsket i innboksen
Passord|Hemmelig tegnrekke
Tofaktorautentisering|En ekstra kode ved døren
Fingeravtrykk|Mønster som låser opp
Ansiktsgjenkjenning|Blikket åpner skjermen
Brannmur|Regler ved den digitale grensen
Antivirus|Jakt på skadelig kode
Kryptering|Uleselig uten riktig nøkkel
Sikkerhetskopi|En ekstra utgave i reserve
Oppdatering|Nye rettelser lastes inn
Operativsystem|Styrer maskinens hverdag
App|Lite program i lommen
Fil|Digitalt innhold med navn
Mappe|Samler digitale dokumenter
Papirkurv|Angre før endelig sletting
Utklippstavle|Mellomlager ved kopiering
Skjermbilde|Øyeblikket fryses på displayet
Hurtigtast|To taster sparer klikk
Regneark|Celler med formler
Tekstbehandler|Avsnitt og skrifttyper
Lysbildefremvisning|Ett poeng per skjerm
Videomøte|Dempet mikrofon i rutemønster
Direktesending|Alle ser det samtidig
Podkast|Stemmer i episoder
Strømming|Avspilling før alt er lastet ned
Spilleliste|Valgt rekkefølge i øret
QR-kode|Firkantet snarvei for kameraet
Strekkode|Svarte striper ved kassen
Algoritme|Oppskrift med presise trinn
Kunstig intelligens|Maskinen finner mønstre
Maskinlæring|Bedre gjennom eksempler
Chatbot|Samtalepartner i et tekstfelt
Robot|Handlinger på kommando
Drone|Propeller uten pilot om bord
3D-printer|Lag på lag blir en ting
Virtuell virkelighet|Briller bytter ut omgivelsene
Utvidet virkelighet|Digitale ting oppå verden
Sensor|Merker en endring
Berøringsskjerm|Fingeren er pekeren
Smarthus|Lamper følger kommandoer
Satellitt|Kretser og sender signaler
Kildekode|Programmet skrevet ut
Feilsøking|Finne hvor det stopper
Variabel|Navngitt verdi som kan endres
Løkke|Samme instruksjon flere ganger
Funksjon|Gjenbrukbar bit av et program
Database|Opplysninger i ordnede tabeller
HTML|Sidens byggesteiner
CSS|Utseendet på nettsiden
JavaScript|Klikk får siden til å reagere
Python|Kode med innrykk
Nedlasting|Filen kommer til deg
Opplasting|Filen sendes fra deg
Skjermdeling|Andre ser ditt digitale skrivebord
Flymodus|Radiosignalene tar pause
`)
  });
})();
