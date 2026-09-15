/* Genuine entries with individually authored Norwegian association clues. */
(() => {
  const entries = text => text.trim().split('\n').map(line => {
    const [word, hint] = line.split('|');
    return { word: word.trim(), hint: hint.trim() };
  });
  globalThis.IMPOSTER_PACKS ??= [];
  globalThis.IMPOSTER_PACKS.push({
    id: 'countries', name: 'Land og steder', icon: 'globe',
    description: 'Land, øyer og territorier fra hele verden.',
    words: entries(`
Norge|Brunost
Sverige|Flatpakke
Danmark|Kloss
Finland|Damp
Island|Jordvarme
Tyskland|Motorvei
Frankrike|Baguette
Spania|Siesta
Italia|Støvel
Portugal|Kork
Nederland|Dike
Belgia|Pralin
Sveits|Urverk
Østerrike|Vals
Polen|Rav
Hellas|Olivenlund
Tyrkia|Basar
Storbritannia|Ettermiddagste
Irland|Kløver
Ukraina|Solsikke
Russland|Tundra
USA|Delstat
Canada|Lønnesirup
Mexico|Agave
Brasil|Samba
Argentina|Bandoneon
Chile|Salpeter
Peru|Alpakka
Colombia|Smaragd
Ecuador|Ekvator
Bolivia|Saltørken
Paraguay|Guaraní
Uruguay|Mate
Venezuela|Oljefelt
Guyana|Engelskspråklig
Surinam|Nederlandsk
Panama|Sluse
Costa Rica|Tåkeskog
Nicaragua|Vulkansjø
Honduras|Mesoamerika
El Salvador|Pupusa
Guatemala|Mayavev
Belize|Korallrev
Cuba|Sigar
Jamaica|Reggae
Haiti|Kreolsk
Den dominikanske republikk|Merengue
Bahamas|Gruntvann
Barbados|Sukkerrør
Trinidad og Tobago|Ståltromme
Antigua og Barbuda|Seilregatta
Dominica|Varmekilder
Grenada|Muskatnøtt
Saint Kitts og Nevis|Tvillingøyer
Saint Lucia|Pitoner
Saint Vincent og Grenadinene|Øyhopping
Egypt|Papyrus
Marokko|Tagine
Algerie|Saharasand
Tunisia|Karthago
Libya|Kyrene
Sør-Afrika|Rooibos
Nigeria|Nollywood
Kenya|Langdistanseløp
Etiopia|Injera
Ghana|Kakao
Uganda|Fjellgorilla
Tanzania|Serengeti
Somalia|Røkelse
Sudan|Nubia
Sør-Sudan|Hvite Nilen
Republikken Kongo|Brazzaville
DR Kongo|Kobolt
Angola|Kizomba
Zambia|Kobberbelte
Zimbabwe|Steinruiner
Namibia|Sanddyner
Botswana|Innlandsdelta
Mosambik|Dhow
Madagaskar|Lemur
Rwanda|Tusen åser
Burundi|Trommedans
Senegal|Baobab
Mali|Timbuktu
Niger|Sahel
Tsjad|Ørkensjø
Kamerun|Fotballøver
Elfenbenskysten|Kakaobønner
Sierra Leone|Freetown
Liberia|Frigjorte
Gambia|Elvestripe
Mauritania|Jernmalmtog
Eritrea|Rødehavskyst
Djibouti|Saltinnsjø
Benin|Dahomey
Togo|Lomé
Gabon|Skogelefant
Kapp Verde|Morna
Seychellene|Granittstrand
Mauritius|Dodo
Malawi|Ciklider
Lesotho|Høylandsrike
Eswatini|Sivdans
Ekvatorial-Guinea|Spansktalende
Den sentralafrikanske republikk|Ubangi
Guinea|Bauksitt
Guinea-Bissau|Cashewnøtter
Burkina Faso|Ouagadougou
Komorene|Ylang-ylang
São Tomé og Príncipe|Sjokoladeøyer
India|Kryddermarked
Kina|Porselen
Japan|Bonsai
Sør-Korea|Kimchi
Nord-Korea|Juche
Thailand|Tuk-tuk
Vietnam|Risterrasser
Indonesia|Batik
Malaysia|Durian
Singapore|Havneby
Filippinene|Jeepney
Myanmar|Pagoder
Kambodsja|Angkor
Laos|Mekong
Brunei|Sultanat
Mongolia|Gresssteppe
Nepal|Sherpa
Bhutan|Druk
Bangladesh|Elvedelta
Pakistan|Indus
Sri Lanka|Ceylon
Afghanistan|Hindu Kush
Kasakhstan|Kosmodrom
Usbekistan|Samarkand
Turkmenistan|Gasskrater
Kirgisistan|Jurter
Tadsjikistan|Pamir
Iran|Safran
Irak|Mesopotamia
Syria|Alepposåpe
Jordan|Sandstein
Libanon|Sedertre
Israel|Kibbutz
Saudi-Arabia|Daddelpalme
De forente arabiske emirater|Skyskrapere
Qatar|Perlefiske
Kuwait|Persiabukta
Oman|Sjøfarere
Jemen|Mokkasmak
Bahrain|Øyrike
Australia|Didgeridoo
New Zealand|Haka
Fiji|Kava
Samoa|Tatovering
Tonga|Polynesisk kongerike
Papua Ny-Guinea|Paradisfugl
Solomonøyene|Melanesia
Vanuatu|Landdykking
Kiribati|Datolinje
Palau|Maneter
Marshalløyene|Atoll
Mikronesia|Stillehavsøyene
Tuvalu|Lavtliggende
Nauru|Fosfat
Albania|Ørnemotiv
Andorra|Pyreneene
Belarus|Bison
Bosnia-Hercegovina|Brokonstruksjon
Bulgaria|Roseolje
Kroatia|Dalmatiner
Kypros|Halloumi
Tsjekkia|Krystallglass
Estland|Digitalt
Latvia|Rugbrød
Litauen|Basketball
Luxembourg|Storhertug
Malta|Malteserkors
Moldova|Vinkjeller
Monaco|Fyrstedømme
Montenegro|Svarte fjell
Nord-Makedonia|Ohrid
Romania|Transilvania
Serbia|Balkan
Slovakia|Tatra
Slovenia|Bled
Ungarn|Paprika
Vatikanstaten|Konklave
San Marino|Middelaldertårn
Liechtenstein|Alpefyrste
Armenia|Aprikos
Aserbajdsjan|Ildtempler
Georgia|Qvevri
Kosovo|Prizren
Taiwan|Boblete
Palestina|Olivenhøsting
Øst-Timor|Tetum
Maldivene|Vannvilla
Grønland|Innlandsis
Færøyene|Torvtak
Skottland|Tistel
Wales|Rød drage
England|Cricket
Nord-Irland|Basaltsøyler
Puerto Rico|Bomba
Hongkong|Trikk
Bermuda|Triangel
Aruba|Divi-divi
Curaçao|Pastellhus
Guam|Chamorro
Macau|Kasino
Fransk Polynesia|Lagune
Ny-Caledonia|Nikkel
Gibraltar|Apekatt
Isle of Man|Tre bein
Jersey|Melkekyr
Guernsey|Kanaløy
Åland|Østersjøferge
Svalbard|Frøhvelv
Antarktis|Forskningsstasjon
Falklandsøyene|Søratlantisk
Cookøyene|Rarotonga
Niue|Korallklippe
Tokelau|Tre atoller
Montserrat|Vulkanaske
Anguilla|Åleform
Caymanøyene|Skilpadder
Turks- og Caicosøyene|Saltbasseng
Réunion|Lava
Madeira|Levader
Azorene|Hvalsafari
Kanariøyene|Vulkansand
Bali|Rismarker
Sicilia|Etna
Sardinia|Nurager
Korsika|Napoleon
Kreta|Labyrint
Santorini|Blå kupler
Hawaii|Lei
Påskeøya|Steinhoder
Tahiti|Svarte perler
Galápagosøyene|Finker
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'food', name: 'Mat', icon: 'utensils',
    description: 'Fra fredagstaco til råvarer, bakst og smågodt.',
    words: entries(`
Burger|Stablet
Sushi|Rull
Pannekake|Vend
Sjokolade|Kakao
Brus|Bobler
Is|Smelting
Lasagne|Lagvis
Eple|Kjerne
Kebab|Spyd
Nudler|Tråder
Grøt|Røring
Salat|Blader
Vaffel|Hjerter
Ost|Modning
Smoothie|Blender
Popcorn|Popping
Donut|Hull
Taco|Fredag
Pizza|Skorpe
Pasta|Al dente
Ris|Korn
Kylling|Vinger
Biff|Stekegrad
Fisk|Gjeller
Suppe|Øse
Brød|Skiver
Egg|Skall
Bacon|Sprøtt
Pølse|Tarm
Pommes frites|Strimler
Kake|Lys
Muffins|Papirform
Kjeks|Smuler
Jordbær|Kurv
Banan|Bøy
Appelsin|Båter
Vannmelon|Svarte frø
Gulrot|Knasking
Potet|Knoll
Mais|Kolbe
Yoghurt|Syrnet
Melk|Kartong
Kaffe|Bønner
Te|Trekking
Juice|Pressing
Cola|Koffein
Chips|Pose
Nachos|Trekanter
Honning|Bikube
Kanel|Bark
Avokado|Stein
Tomat|Drivhus
Agurk|Skiver
Løk|Tårer
Hvitløk|Fedd
Paprika|Hulrom
Brokkoli|Små trær
Blomkål|Buketter
Spinat|Grønne blader
Erter|Belger
Bønner|Belgfrukt
Linser|Dhal
Kikerter|Hummus
Sjampinjong|Hatt
Asparges|Skudd
Aubergine|Lilla
Squash|Gresskarfamilie
Gresskar|Halloween
Rødbete|Fargeflekk
Selleri|Stilker
Purre|Lag
Hodekål|Fårikål
Rødkål|Julemiddag
Salami|Speket
Skinke|Pålegg
Ribbe|Svor
Pinnekjøtt|Bjørkepinner
Kjøttkaker|Brun saus
Fårikål|Høstkål
Lapskaus|Terninger
Lutefisk|Geléaktig
Rakfisk|Fermentering
Brunost|Karamellfarge
Knekkebrød|Knas
Lefse|Kjevle
Krumkake|Kremmerhus
Riskrem|Rød saus
Risgrøt|Mandel
Rømmegrøt|Smørøye
Fiskeboller|Hvit saus
Makrell|Striper
Laks|Rosa
Torsk|Skjeggtråd
Reker|Pilling
Krabbe|Klør
Hummer|Kokekar
Tunfisk|Hermetikk
Sild|Glasskrukke
Omelett|Sammenbrettet
Eggerøre|Luftig
Toast|Ristet
Baguette|Langstrakt
Croissant|Halvmåne
Rundstykke|Frokostkurv
Pitabrød|Lomme
Naan|Tandoor
Tortilla|Innpakning
Quesadilla|Brettet ost
Burrito|Pakke
Guacamole|Mos
Salsa|Hakkede grønnsaker
Hummus|Sesampasta
Falafel|Kikertkule
Ramen|Kraft
Pho|Urter
Pad thai|Wokpanne
Curry|Krydderblanding
Butter chicken|Tomatsaus
Tikka masala|Marinade
Biryani|Aromatisk ris
Dumplings|Små puter
Wok|Høy varme
Vårrull|Sprø innpakning
Poke bowl|Rå terninger
Tempura|Frityrrøre
Misosuppe|Soyapasta
Kimchi|Gjæring
Bibimbap|Blandet bolle
Sandwich|Mellomlag
Wrap|Rullet
Cæsarsalat|Krutonger
Gresk salat|Feta
Potetsalat|Grilltilbehør
Coleslaw|Finsnittet
Boller|Gjær
Kanelsnurr|Spiral
Wienerbrød|Flak
Brownie|Seig kjerne
Ostekake|Kjeksbunn
Gulrotkake|Kremost
Eplekake|Høstfrukt
Pai|Lokk
Pavlova|Marengsbunn
Makron|Mandelmel
Gelé|Skjelving
Pudding|Form
Karamell|Smeltet sukker
Lakris|Rot
Marsipan|Mandelmasse
Peanøttsmør|Nøtteglass
Syltetøy|Bærkoking
Nutella|Hasselnøtt
Sirup|Seigt
Ketchup|Rød flaske
Sennep|Sterke frø
Majones|Emulsjon
Aioli|Hvitløkskrem
Béarnaise|Estragon
Soyasaus|Salt dråpe
Wasabi|Grønn styrke
Ingefær|Knudrete rot
Chili|Het
Pepper|Kvern
Salt|Krystaller
Smør|Kjerning
Fløte|Pisking
Rømme|Syrlig
Feta|Saltlake
Mozzarella|Laker
Parmesan|Rivjern
Cheddar|Oransje
Drue|Klase
Kiwi|Lodden
Mango|Flat stein
Ananas|Krone
Pære|Dråpeform
Plomme|Steinfrukt
Fersken|Flaum
Bringebær|Hul kjerne
Blåbær|Tungefarge
Bjørnebær|Tornebusk
Granateple|Røde perler
Lime|Grønn syrlighet
Sitron|Sitruspresse
Kokos|Hardt skall
Mandel|Marsipanråvare
Valnøtt|Hjerneform
Cashew|Buet nøtt
Pistasj|Åpent skall
Havregryn|Frokostbolle
Cornflakes|Flak
Granola|Ristet blanding
Milkshake|Sugerør
Iskaffe|Kalde bønner
Kakao|Vinterkopp
Mineralvann|Kilde
Saft|Blanding
Iste|Kjølig trekking
Bulgur|Knust hvete
Couscous|Små gryn
Quinoa|Spirehale
Polenta|Maismel
Risotto|Kremet ris
Gnocchi|Potetputer
Ravioli|Fylte lommer
Tortellini|Små ringer
Spaghetti|Lange tråder
Linguine|Flate bånd
Focaccia|Oljegroper
Brioche|Smørdeig
Pretzel|Knute
Bagel|Kokt deig
Scone|Bakepulver
Ciabatta|Tøffelform
Surdeig|Starter
Skolebolle|Vaniljeøyne
Skillingsbolle|Bergensbakst
Fastelavnsbolle|Kremfyll
Berlinerbolle|Syltetøyfyll
Smultring|Julegryte
Pepperkake|Former
Kransekake|Mandelringer
Sandkake|Små former
Kokosmakron|Topp
Tiramisu|Mascarpone
Crème brûlée|Sukkerlokk
Panna cotta|Fløtedessert
Sorbet|Fruktis
Profiteroles|Vannbakkels
Éclair|Avlang glasur
Baklava|Nøttelag
Halva|Sesamkonfekt
Churros|Riller
Mochi|Klebrig
Edamame|Grønne belger
Tofu|Soyablokk
Tempeh|Pressede bønner
Seitan|Hvetegluten
Halloumi|Grillost
Ricotta|Myk ost
Brie|Hvit skorpe
Camembert|Treboks
Roquefort|Blå årer
Gorgonzola|Muggmarmor
Oliven|Tapenade
Kapers|Små knopper
Ansjos|Salt filet
Sardiner|Tett boks
Blåskjell|Skjellgryte
Østers|Sitronbåt
Kamskjell|Vifteform
Blekksprut|Armer
And|Sprøtt skinn
Kalkun|Stor stek
Lammelår|Påskestek
Reinsdyrkjøtt|Vidde
Elgstek|Viltsaus
Tyttebær|Rød skog
Multer|Gylne myrer
Rabarbra|Sure stilker
Stikkelsbær|Stripete bær
Solbær|Mørk saft
Rips|Små klaser
Pasjonsfrukt|Rynket skall
Litchi|Hvit fruktkule
Dadler|Palmefrukt
Fiken|Frøfylt
Aprikos|Oransje steinfrukt
Nektarin|Glatt fersken
Persimon|Oransje topp
Kumquat|Spiselig skall
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'mixed', name: 'Blandet', icon: 'shuffle',
    description: 'Dyr, steder, sport og små ting fra hverdagen.',
    words: entries(`
Fotball|Offside
Strand|Tidevann
Skole|Friminutt
Kino|Mørk sal
Snø|Spor
Tog|Perrong
Mobil|Varsel
Bursdag|Ønskeliste
Hytte|Vedstabel
Musikk|Takt
Butikk|Kvittering
Ferie|Avkobling
Regn|Vanndråper
Spill|Regler
Hund|Bånd
Sykkel|Kjede
Flyplass|Innsjekking
Bibliotek|Lånekort
Svømmehall|Klor
Fjell|Høydekurver
Restaurant|Meny
Park|Benk
Museum|Utstilling
Hotell|Resepsjon
Busstopp|Rutetabell
Klasserom|Tavle
Stadion|Tribune
Katt|Værhår
Hest|Hover
Løve|Manke
Pingvin|Vagging
Hai|Brusk
Kanin|Lange ører
Slange|Hamskifte
Elefant|Elfenben
Frosk|Rumpetroll
Bjørn|Hi
Kontroller|Tomler
Hodetelefoner|Øreputer
Basketball|Dribling
Ski|Feller
Tennis|Strenger
Lekse|Innlevering
Sommer|Lyse netter
Vinter|Lagvis klær
Høst|Løvfall
Vår|Knopper
Sol|Skygge
Måne|Faser
Stjerne|Lysår
Sky|Vanndamp
Torden|Buldring
Lyn|Utladning
Vind|Trykkforskjell
Hav|Dybde
Elv|Strøm
Skog|Stammer
Ørken|Oase
Bro|Spenn
Tunnel|Gjennomslag
Bil|Blinklys
Buss|Holdeplass
Trikk|Skinnegate
Båt|Skrog
Fly|Oppdrift
Rakett|Nedtelling
Romskip|Vektløshet
Robot|Programmering
Laser|Lysstråle
Magnet|Tiltrekning
Batteri|Poler
Lader|Ledning
Kamera|Blender
Mikrofon|Lydopptak
Skjerm|Piksler
Tastatur|Mellomrom
Datamus|Peker
Høyttaler|Vibrasjon
Fjernkontroll|Kanalbytte
Klokke|Visere
Kalender|Dato
Kart|Målestokk
Kompass|Nord
Nøkkel|Tenner
Lås|Sylinder
Dør|Hengsler
Vindu|Gjennomskinn
Tak|Møne
Gulv|Fottrinn
Trapp|Avsatser
Heis|Etasjeknapp
Sofa|Armlene
Bord|Bein
Stol|Ryggstøtte
Lampe|Lyskjegle
Seng|Drømmer
Pute|Fjær
Teppe|Vev
Speil|Refleksjon
Skap|Hylleplass
Dusj|Stråler
Jakke|Glidelås
Sko|Såle
Lue|Topplokk
Sekk|Skulderrem
Briller|Linser
Ring|Sirkelbånd
Penger|Valør
Kortstokk|Fire sorter
Gave|Innpakning
Ballong|Helium
Flagg|Vimpel
Bok|Kapitler
Avis|Overskrift
Blyant|Grafitt
Penn|Blekk
Viskelær|Gnis
Linjal|Måling
Lim|Hefting
Saks|To blader
Maling|Pigment
Pensel|Børstehår
Fotografi|Øyeblikk
Film|Rulletekst
TV-serie|Cliffhanger
Sang|Refreng
Dans|Trinn
Teater|Sceneteppe
Konsert|Ekstranummer
Festival|Armbånd
Sirkel|Radius
Firkant|Fire hjørner
Trekant|Tre vinkler
Hjerte|Puls
Krone|Regalier
Sverd|Egg
Skjold|Beskyttelse
Drage|Ildpust
Slott|Tårn
Pirat|Kapring
Ninja|Skygger
Zombie|Sleping
Romvesen|Signal
Spøkelse|Gjennomsiktig
Monster|Brøl
Superhelt|Kappe
Detektiv|Ledetråd
Lege|Stetoskop
Politi|Håndjern
Brannkonstabel|Slangebil
Kokk|Forkle
Lærer|Undervisning
Pilot|Cockpit
Bonde|Åker
Fisker|Garn
Artist|Publikum
Sjåfør|Ratt
Dommer|Fløyte
Trener|Øvelse
Kaptein|Kommando
Konge|Trone
Dronning|Tiara
Prins|Arverekkefølge
Prinsesse|Eventyr
Ridder|Rustning
Viking|Langskip
Astronaut|Romdrakt
Forsker|Hypotese
Oppfinner|Patent
Bank|Renter
Postkontor|Frimerke
Sykehus|Korridor
Lekeplass|Sandkasse
Camping|Plassnummer
Bål|Glør
Grill|Kull
Telt|Barduner
Sovepose|Kokong
Hammer|Slag
Spiker|Hode
Skrue|Gjenger
Tau|Knute
Stige|Trinn
Bøtte|Hank
Kost|Busting
Støvsuger|Sug
Kjøleskap|Kald hylle
Ovn|Forvarming
Mikroovn|Piping
Brødrister|Spretter
Tallerken|Servering
Gaffel|Tinder
Kniv|Skjæreegg
Skje|Øsing
Glass|Klirr
Flaske|Kork
Matpakke|Mellomlegg
Plakat|Oppslag
Premie|Belønning
Pokal|Seiersløft
Quiz|Svarark
Hemmelighet|Hvisking
Skateboard|Gripetape
Snowboard|Binding
Rulleskøyter|Hjulrekke
Skøyter|Stålegg
Badminton|Fjærball
Bordtennis|Liten racket
Håndball|Sjumeter
Volleyball|Smash
Golf|Green
Bowling|Kjegler
Biljard|Kø
Sjakk|Rokade
Klatring|Karabinkrok
Turn|Balansebom
Yoga|Matte
Boksing|Runder
Judo|Kast
Karate|Beltegrader
Svømming|Baneskille
Stuping|Sprettbrett
Roing|Årer
Padling|Åreblad
Seiling|Kryssing
Surfing|Bølgetopp
Skiskyting|Standplass
Skihopp|Svev
Langrenn|Smurning
Slalåm|Porter
Ishockey|Puck
Curling|Kosting
Orientering|Kontrollpost
Maraton|Langdistanse
Triatlon|Tre øvelser
Kenguru|Pung
Koala|Eukalyptus
Panda|Bambus
Sjiraff|Høy hals
Sebra|Stripemønster
Flodhest|Elvebad
Neshorn|Tykk hud
Krokodille|Panser
Skilpadde|Skall
Delfin|Klikkelyd
Hval|Blåsehull
Sel|Sveiver
Hvalross|Støttenner
Blekksprut|Sugekopper
Manet|Brenntråder
Sjøstjerne|Fem armer
Krabbe|Sidegang
Hummer|Klør
Reke|Følehorn
Sommerfugl|Puppe
Bie|Pollen
Maur|Tue
Mygg|Stikk
Flue|Summing
Edderkopp|Spinn
Marihøne|Prikker
Øyenstikker|Dobbel vinge
Gresshoppe|Springbein
Meitemark|Jordgang
Snegl|Slimspor
Ugle|Nattjakt
Ørn|Sveving
Papegøye|Etterligning
Flamingo|Ett bein
Påfugl|Fjærvifte
Struts|Løpefugl
Rev|Buskete hale
Ulv|Flokk
Elg|Gevir
Reinsdyr|Vidde
Ekorn|Nøttegjemme
Pinnsvin|Pigger
Grevling|Stripet snute
Oter|Elvelek
Bever|Demning
Flaggermus|Ekkolokalisering
Vaskebjørn|Øyemaske
Ilder|Lang kropp
Marsvin|Piping
Hamster|Kinnposer
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'house', name: 'Husobjekter', icon: 'home',
    description: 'Ting du finner i rommene, skuffene og boden.',
    words: entries(`
Sofa|Armlene
Bord|Bein
Stol|Ryggstøtte
Lampe|Lyskjegle
Seng|Madrass
Pute|Fyll
Teppe|Vev
Speil|Refleksjon
Skap|Hyller
Dusj|Vanndråper
Tannbørste|Bust
Såpe|Skum
Håndkle|Frotté
Dør|Hengsel
Vindu|Karm
Tak|Himling
Gulv|Fottrinn
Trapp|Avsats
Kjøleskap|Kjølig
Fryser|Rim
Stekeovn|Rist
Mikroovn|Dreieskive
Brødrister|Sprett
Kaffetrakter|Filter
Vannkoker|Kokepunkt
Airfryer|Varmluft
Oppvaskmaskin|Spylearm
Vaskemaskin|Sentrifuge
Tørketrommel|Lofilter
Støvsuger|Sug
Mopp|Fuktig
Kost|Busting
Bøtte|Hank
Klut|Tørking
Svamp|Porer
Søppelbøtte|Avfall
Matboks|Lokk
Tallerken|Servering
Skål|Fordypning
Glass|Klirr
Kopp|Hank
Gaffel|Tinder
Kniv|Egg
Skje|Øsing
Stekepanne|Fresing
Kasserolle|Håndtak
Gryte|Småkoking
Visp|Lufting
Sleiv|Røring
Rivjern|Spon
Skjærebrett|Hakkemerker
Ostehøvel|Tynn skive
Boksåpner|Metallkant
Flaskeåpner|Kork
Målebeger|Desiliter
Kjøkkenvekt|Gram
Serviett|Bretting
Kjøkkenpapir|Absorbering
Oppvaskbørste|Skrubbing
Forkle|Søl
Saltbøsse|Små hull
Pepperkvern|Knusing
Vase|Stilker
Potteplante|Vanning
Gardin|Folder
Persienne|Lameller
Lyspære|Sokkel
Skjøteledning|Rekkevidde
Stikkontakt|Uttak
Lader|Batteripåfyll
Powerbank|Reserve
Fjernkontroll|Kanalvalg
TV|Sending
Høyttaler|Membran
Spillkonsoll|Kontroller
Ruter|Nettverk
PC|Prosessor
Bærbar datamaskin|Hengslet skjerm
Tastatur|Mellomrom
Datamus|Markør
Skjerm|Piksler
Printer|Blekkpatron
Ringeklokke|Besøk
Termostat|Temperatur
Brannalarm|Varsling
Røykvarsler|Takpip
Brannslukker|Pulver
Paraplystativ|Våte spiler
Skohylle|Par
Skoskje|Hælhjelp
Dørmatte|Velkommen
Nøkkelknippe|Rasling
Kleshenger|Skuldre
Knagg|Oppheng
Kommode|Skuffer
Nattbord|Sengekant
Bokhylle|Ryggtitler
Skrivebord|Arbeidsplass
Kontorstol|Hjul
Notatbok|Sider
Penn|Blekk
Blyant|Grafitt
Saks|To blader
Teip|Klebeside
Lim|Feste
Stiftemaskin|Metallbøy
Kalender|Dato
Klokke|Viser
Vekkerklokke|Slumring
Bilderamme|Innramming
Maleri|Penselstrøk
Plakat|Oppslag
Lysestake|Voks
Stearinlys|Veke
Peis|Glør
Fyrstikker|Svovel
Lighter|Gnist
Putevar|Trekk
Dynetrekk|Åpning
Laken|Sengetøy
Dyne|Dun
Madrass|Fjæring
Nattlampe|Leselys
Kosedyr|Myk venn
Kleskurv|Skittentøy
Strykejern|Glatt stoff
Strykebrett|Trekkplate
Hårføner|Luftstrøm
Rettetang|Varmeplater
Barberhøvel|Skjegg
Sjampo|Hodebunn
Balsam|Floker
Dusjsåpe|Kroppsskum
Deodorant|Armhule
Parfyme|Duft
Tannkrem|Tube
Tanntråd|Mellomrom
Toalettpapir|Rull
Toalettbørste|Skålskrubb
Badevekt|Kilogram
Badekar|Skumbad
Dusjforheng|Ringer
Håndsåpe|Pumpetrykk
Plaster|Skrubbsår
Medisinskap|Førstehjelp
Hylle|Bæreflate
Kurv|Fletting
Oppbevaringsboks|Sortering
Verktøykasse|Håndverk
Hammer|Slag
Skrutrekker|Spor
Tang|Gripekjever
Målebånd|Utrulling
Vater|Luftboble
Drill|Boring
Spiker|Spiss
Skrue|Gjenger
Lykt|Håndlys
Batteri|Poler
Lommelykt|Lyskegle
Stige|Trinn
Postkasse|Brev
Hagebord|Utendørs servering
Hagestol|Sommerplass
Grill|Kull
Vannkanne|Tut
Hageslange|Vannstråle
Gressklipper|Kort plen
Snøskuffe|Måking
Pensel|Bustehår
Malerull|Veggmønster
Dørhåndtak|Trykk ned
Hengelås|Bøyle
Bag|Bærerem
Koffert|Reisehjul
Ryggsekk|Skulderstropper
Vifte|Propell
Luftrenser|Filterpartikler
Varmeovn|Vinterrom
Blendegardin|Mørklegging
Rullegardin|Opptrekk
Gardinstang|Ringer
Vindushaspe|Lukking
Dørstopper|Støtdemper
Dørkikkert|Besøkssjekk
Dørklokke|Dingdong
Brevsprekk|Levering
Nøkkelskap|Kroker
Konsollbord|Entré
Fotskammel|Beinstøtte
Lenestol|Hvileplass
Puff|Polstret
Sofabord|Salong
TV-benk|Medieplass
Veggklokke|Veggtid
Bokstøtte|Oppreiste bøker
Bokmerke|Sidenummer
Bladkurv|Lesestoff
Vedkurv|Kubbe
Peissett|Ildtang
Gnistskjerm|Beskyttelsesnett
Askebøtte|Etterglør
Lysmansjett|Voksfang
Telysholder|Liten flamme
Duftlys|Aroma
Røkelsesholder|Røykstripe
Gulvlampe|Lang fot
Taklampe|Overlys
Lampeskjerm|Lysspredning
Dimmer|Lysstyrke
Lysslynge|Små pærer
Led-stripe|Lyskant
Smartplugg|Tidsstyring
Klestørkestativ|Våte plagg
Klesklype|Fjærgrep
Tørkesnor|Oppspent
Vaskepose|Finvask
Vaskeball|Trommelvenn
Skyllemiddel|Mykhet
Vaskemiddel|Flekkfjerning
Flekkfjerner|Forbehandling
Skobørste|Pussing
Skokrem|Glans
Lofjerner|Små nupper
Klesrulle|Klebeark
Nål|Øye
Sytråd|Sting
Fingerbøl|Fingervern
Sikkerhetsnål|Låst spiss
Symaskin|Undertråd
Måleskje|Teskjemål
Pastasleiv|Tagger
Hullsleiv|Avrenning
Potetskreller|Tynt skall
Stekespade|Vending
Slikkepott|Restene
Øse|Suppehjelp
Dørslag|Avsil
Sil|Finmasket
Trakt|Smal hals
Kjevle|Flat deig
Bakebolle|Elting
Deigskrape|Klebrig kant
Bakepensel|Pensling
Kakeform|Stekeomriss
Muffinsbrett|Små groper
Brødform|Avlang bakst
Stekebrett|Ovnsspor
Bakepapir|Slippflate
Aluminiumsfolie|Sølvark
Plastfolie|Innpakking
Kjøkkenmaskin|Eltekrok
Blender|Knivblad
Stavmikser|Puré
Håndmikser|Dobbel visp
Juicepresse|Fruktpress
Sitruspresse|Ribber
Morter|Støting
Pizzahjul|Rullende egg
Eggdeler|Strenger
Eggkopp|Frokoststøtte
Korketrekker|Spiral
Isbitform|Fryserom
Termokopp|Holder varmen
Termos|Vakuum
Drikkeflaske|Skrulokk
Matpapir|Niste
Brødboks|Bakstlager
Krydderglass|Smaksstøv
Tekanne|Trekking
Tesil|Løse blader
Presskanne|Stempel
Kaffekvern|Bønnestøv
Melkeskummer|Luftbobler
Serveringsbrett|Bæring
Gryteklut|Varmt grep
Gryteunderlag|Bordvern
Kjøkkentimer|Nedtelling
Steketermometer|Kjernetemperatur
Oppvaskstativ|Drypping
Oppvaskkum|Avløp
Vannkran|Vrider
Vaskeservant|Håndvask
Toalett|Sisterne
Toalettsete|Hengslet ring
Såpeskål|Avrenning
Tannbørsteglass|Baderomskopp
Hårbørste|Floker
Kam|Tinder
Hårstrikk|Hestehale
Hårspenne|Hold frisyren
Negleklipper|Korte negler
Neglefil|Jevn kant
Pinsett|Presis klype
Bomullspad|Sminkefjerning
Bomullspinne|Liten vatt
Sminkespeil|Forstørrelse
Barbermaskin|Summende skjegg
Varmeflaske|Varmt vann
Badekåpe|Belte
Tøfler|Innesko
Sengegavl|Hodestøtte
Sengebunn|Spiler
Overmadrass|Øverste lag
Vektdyne|Tyngde
Morgenkåpe|Frokostplagg
Vifteovn|Varm luft
Panelovn|Veggvarme
Luftfukter|Vanntåke
Avfukter|Kondens
Termometer|Grader
Hygrometer|Luftfuktighet
Multikontakt|Flere uttak
Kabelboks|Ledningsskjul
Kabelstrips|Stramming
Musematte|Glideflate
Webkamera|Videosamtale
USB-minne|Liten lagring
Ekstern harddisk|Sikkerhetskopi
Dokkingstasjon|Tilkobling
Dokumentmappe|Papirorden
Ringperm|Hullark
Hullemaskin|Arkpar
Binders|Papirklemme
Viskelær|Blyantspor
Blyantspisser|Spon
Linjal|Rett kant
Kalkulator|Regnestykke
Skriveunderlag|Bordbeskyttelse
Papirkurv|Kasserte ark
Whiteboard|Tørrvisk
Magnettavle|Festeplater
Oppslagstavle|Tegnestifter
`)
  });
})();
