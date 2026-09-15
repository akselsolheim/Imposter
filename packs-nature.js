/* Individually authored word and association pairs. */
(() => {
  const entries = text => text.trim().split('\n').map(line => {
    const [word, hint] = line.split('|');
    return { word: word.trim(), hint: hint.trim() };
  });
  globalThis.IMPOSTER_PACKS ??= [];
  globalThis.IMPOSTER_PACKS.push({
    id: 'animals', name: 'Dyr', icon: 'paw',
    description: 'Pels, fjær, finner og småkryp fra hele verden.',
    words: entries(`
Hund|Bånd
Katt|Maling
Hest|Man
Esel|Bærelast
Sebra|Mønster
Ku|Drøv
Sau|Ull
Geit|Klatrestein
Gris|Tryne
Kanin|Gnaging
Hare|Vinterdrakt
Elg|Skogkonge
Reinsdyr|Vidde
Hjort|Brøling
Rådyr|Spinkle bein
Moskus|Ullfrakk
Bison|Prærie
Bøffel|Hornbue
Lama|Spytting
Alpakka|Garn
Dromedar|Én pukkel
Kamel|Karavane
Sjiraff|Trekroner
Elefant|Støttenner
Neshorn|Tykk hud
Flodhest|Elvebad
Tapir|Liten snabel
Løve|Manke
Tiger|Snikjakt
Leopard|Rosetter
Gepard|Akselerasjon
Jaguar|Regnskog
Puma|Fjelljeger
Gaupe|Øredusker
Snøleopard|Halen som skjerf
Ulv|Hyl
Rev|Buskete hale
Fjellrev|Polarvinter
Prærieulv|Ørkenhyl
Hyene|Kjevekraft
Bjørn|Hi
Isbjørn|Iskant
Panda|Bambus
Vaskebjørn|Øyemaske
Grevling|Stripet snute
Jerv|Matlager
Røyskatt|Svarthaletipp
Oter|Elvelek
Skunk|Luktforsvar
Surikat|Utkikk
Ekorn|Nøttegjemme
Bever|Demning
Pinnsvin|Pigger
Mus|Små poter
Rotte|Gnagefortenner
Hamster|Kinnposer
Marsvin|Piping
Chinchilla|Støvbad
Lemen|Fjelleng
Muldvarp|Jordhauger
Flaggermus|Ekkolokalisering
Kenguru|Pung
Koala|Eukalyptus
Tasmansk djevel|Hylende natt
Nebbdyr|Egglegger
Maureter|Klebrig tunge
Beltedyr|Rustningsplater
Dovendyr|Tregt tempo
Kapivar|Stor gnager
Sjimpanse|Redskaper
Gorilla|Knoker
Orangutang|Rød pels
Bavian|Bakkeliv
Lemur|Ringhale
Delfin|Klikking
Spekkhogger|Svart og hvitt
Blåhval|Bardefilter
Knølhval|Sang
Narhval|Spiralstøttann
Kaskelott|Dypdykk
Sel|Svømmeluffer
Sjøløve|Øreklaffer
Hvalross|Bart
Høne|Verping
Hane|Morgengal
And|Snadring
Gås|V-formasjon
Svane|Lang hals
Kalkun|Hengende hud
Påfugl|Fjærvifte
Fasan|Fargerik stjert
Rype|Snøkamuflasje
Orrfugl|Spillplass
Tiur|Vårspill
Struts|Løpefugl
Emu|Australsk løper
Kiwi|Nattnebb
Pingvin|Vagging
Lundefugl|Fargerikt nebb
Albatross|Langt vingespenn
Pelikan|Strupesekk
Flamingo|Ett bein
Stork|Pipehekking
Trane|Vårparade
Hegre|Stillestående fisker
Skarv|Vingetørking
Måke|Havneskrik
Due|Kurring
Spurv|Smuler
Kjøttmeis|Gul vest
Blåmeis|Liten blå lue
Dompap|Rød brystflekk
Bokfink|Vårtrille
Rødstrupe|Hagerøst
Svarttrost|Kveldssang
Stær|Flokkbølge
Svale|Sommerluft
Kråke|Krakking
Ravn|Mørk intelligens
Skjære|Lang stjert
Nøtteskrike|Blå vingeflekk
Ørn|Svev
Hauk|Rask jakt
Falk|Stupfart
Gribb|Opprydding
Ugle|Stille vinger
Hubro|Store øretopper
Spett|Tromming
Gjøk|Lånerede
Papegøye|Etterligning
Undulat|Burkvitter
Kakadue|Fjærtopp
Tukan|Stort fargenebb
Kolibri|Stillestående flyging
Isfugl|Blå blink
Krokodille|Panserrygg
Alligator|Bred snute
Skilpadde|Skall
Leguan|Ryggkam
Kameleon|Uavhengige øyne
Gekko|Klebeføtter
Firfisle|Solstein
Stålorm|Beinløs øgle
Huggorm|Sikksakk
Pyton|Kvelning
Kobra|Nakkeskjold
Klapperslange|Halerasling
Anakonda|Vannkveler
Frosk|Rumpetroll
Padde|Vortete hud
Salamander|Fuktig hud
Axolotl|Ytre gjeller
Laks|Elvevandring
Torsk|Skjeggtråd
Makrell|Ryggstriper
Sild|Sølvstim
Ørret|Prikker
Gjedde|Bakhold
Abbor|Piggfinne
Ål|Buktning
Kveite|Flat kjempe
Rødspette|Oransje prikker
Steinbit|Kraftige tenner
Breiflabb|Fiskestang
Hai|Bruskskjelett
Rokke|Vingesvømming
Sjøhest|Griphale
Klovnefisk|Anemone
Gullfisk|Hagedam
Piraja|Skarp stim
Sverdfisk|Spisst rostrum
Tunfisk|Rask svømmer
Blekksprut|Sugekopper
Krabbe|Sidegang
Hummer|Klør
Reke|Følehorn
Kreps|Elvebunn
Manet|Brenntråder
Sjøstjerne|Fem armer
Kråkebolle|Piggkule
Blåskjell|Festetråder
Østers|Perlemor
Snegl|Slimspor
Meitemark|Jordlufter
Sommerfugl|Puppe
Møll|Nattlys
Bie|Pollen
Humle|Pelskledd flyger
Veps|Papirbol
Maur|Tue
Mygg|Surrende stikk
Flue|Fasettøyne
Øyenstikker|Dobbelvinger
Gresshoppe|Springbein
Siriss|Nattsang
Marihøne|Prikker
Bille|Dekkvinger
Stankelbein|Lange bein
Saksedyr|Haleklype
Kakerlakk|Nattløper
Sølvkre|Baderom
Edderkopp|Spinn
Skorpion|Halebrodd
Flått|Festebitt
Tusenbein|Mange ledd
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'nature', name: 'Natur og vær', icon: 'leaf',
    description: 'Landskap, årstidsvær, planter og det som ligger under føttene.',
    words: entries(`
Fjell|Høydekurver
Dal|Mellom tinder
Fjord|Dyp innskjæring
Innsjø|Ferskvann
Elv|Strøm
Bekk|Sildring
Foss|Fritt fall
Stryk|Skummende vann
Kilde|Oppkomme
Hav|Horisont
Havbunn|Dyp mørke
Strand|Tidevann
Sanddyne|Vindformet
Klippe|Bratt kant
Øy|Omgitt
Halvøy|Landfast
Skjær|Grunn fare
Holme|Liten landflekk
Sund|Smal passasje
Bukt|Innkurving
Nes|Fremspring
Vannskille|To avrenningsretninger
Kyst|Landmøte
Lagune|Beskyttet vann
Delta|Forgrening
Elvemunning|Utløp
Myr|Torv
Sump|Vannmettet
Våtmark|Fugleliv
Slette|Flatt terreng
Vidde|Åpent høyland
Tundra|Tregrense
Taiga|Barskogbelte
Savanne|Gresshav
Steppe|Tørt gress
Ørken|Sparsom nedbør
Oase|Vannlomme
Regnskog|Tett kronetak
Skog|Stammer
Lund|Treklynge
Eng|Blomsterteppe
Hei|Lav vegetasjon
Isbre|Langsom bevegelse
Morene|Avsatte steiner
Grotte|Underjordisk
Juv|Dyp sprekk
Ravine|Erosjonsfure
Krater|Skålform
Vulkan|Utbrudd
Geysir|Varm sprut
Regn|Dråper
Yr|Fin dusj
Snø|Krystaller
Sludd|Våt vinter
Hagl|Iskuler
Tåke|Dårlig sikt
Dis|Sløret horisont
Sky|Svevende dråper
Solskinn|Skarpe skygger
Vind|Luftbevegelse
Bris|Lett drag
Kuling|Hvite bølgetopper
Storm|Takstein
Orkan|Ekstreme kast
Tornado|Trakt
Syklon|Roterende uvær
Monsun|Sesongskifte
Torden|Buldring
Lyn|Utladning
Regnbue|Fargespekter
Nordlys|Dansende bånd
Polarnatt|Langt mørke
Midnattssol|Søvnmaske
Soloppgang|Østlig glød
Solnedgang|Vestlig glød
Skumring|Dempet kveld
Demring|Første lys
Frost|Minusgrader
Rim|Hvitt belegg
Dugg|Morgendråper
Is|Frosset flate
Istapp|Hengende spiss
Skare|Hard overflate
Fonn|Samlet snø
Snøskred|Rasfare
Flom|Oversvømmelse
Tørke|Sprukket jord
Hetebølge|Langvarig varme
Kuldebølge|Isende dager
Lavtrykk|Ustabilt vær
Høytrykk|Klart vær
Luftfuktighet|Klamt
Lufttrykk|Barometer
Nedbør|Millimeter
Smeltevann|Vårbekker
Gran|Korte nåler
Furu|Parvise nåler
Bjørk|Hvit bark
Eik|Nøtter
Bøk|Glatt stamme
Alm|Skjeve blad
Ask|Vingefrø
Lønn|Håndformet blad
Rogn|Røde bær
Osp|Skjelvende blad
Selje|Gåsunger
Or|Små kongler
Barlind|Røde frøkapper
Lerk|Nålefall
Lind|Hjerteblad
Hegg|Hvite blomsterklaser
Hassel|Nøttekjerne
Kristtorn|Blankt piggblad
Einer|Blå bærkongler
Palme|Tropisk krone
Baobab|Tykk stamme
Sequoia|Kjempehøyde
Bambus|Hule ledd
Kaktus|Vannlager
Aloe|Saftige blader
Mose|Mykt dekke
Lav|Samliv
Bregne|Sporer
Lyng|Lilla hei
Blåbærlyng|Tungefarge
Tyttebærlyng|Vintergrønne blad
Molteplante|Gylne myrbær
Bringebærbusk|Hule bær
Nyperose|Frukt etter blomsten
Løvetann|Fallskjermfrø
Prestekrage|Hvite kronblad
Blåveis|Tidlig vår
Hvitveis|Skogbunnsteppe
Liljekonvall|Hengende bjeller
Blåklokke|Liten bjelle
Smørblomst|Gul glans
Forglemmegei|Små blå øyne
Hestehov|Gul veikant
Solsikke|Frøskive
Rose|Torner
Tulipan|Løkplante
Stemorblomst|Fargerikt ansikt
Krokus|Tidlig løk
Snøklokke|Nikkende hvit
Orkidé|Luftrøtter
Lavendel|Duftpose
Valmue|Frøkapsel
Peon|Store fylte blomster
Storkenebb|Flikete blad
Fiol|Liten lilla
Rhododendron|Sur jord
Hortensia|Blomsterball
Syrin|Duftende klase
Kaprifol|Kveldslukt
Eføy|Klatrende blad
Humle|Ølkongler
Nesle|Brennhår
Løpstikke|Suppeduft
Basilikum|Pesto
Rosmarin|Kryddernåler
Timian|Små aromablad
Mynte|Frisk duft
Salvie|Fløyelsblad
Kløver|Tre småblad
Gress|Strå
Takrør|Fjærkost
Tang|Fjærebeltet
Tare|Undervannsskog
Siv|Vannkant
Vannlilje|Flyteblad
Stein|Hard klump
Berg|Fast grunn
Granitt|Kornete mønster
Gneis|Båndmønster
Skifer|Tynne plater
Marmor|Skulptur
Kalkstein|Skallrester
Sandstein|Pressede korn
Basalt|Størknet strøm
Obsidian|Svart glass
Pimpstein|Luftlommer
Kvarts|Seks kanter
Ametyst|Lilla glans
Krystall|Ordnet struktur
Diamant|Hardhet
Rubin|Rød glød
Safir|Blå glans
Smaragd|Grønn glans
Opal|Fargespill
Rav|Fanget insekt
Gull|Elvesiling
Sølv|Blankt metall
Kobber|Grønn patina
Jern|Rust
Svovel|Gul farge
Salt|Krystallsmak
Sand|Små korn
Grus|Småstein
Leire|Formbar masse
Jord|Rotfeste
Humus|Nedbrutte blader
Lava|Glødende strøm
Magma|Under overflaten
Fossil|Avtrykk fra fortiden
Jordskjelv|Rystelser
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'cities', name: 'Byer', icon: 'building',
    description: 'Norske favoritter, europeiske gater og storbyer verden rundt.',
    words: entries(`
Oslo|Trikk
Bergen|Brostein
Trondheim|Pilegrim
Stavanger|Oljemuseum
Tromsø|Ishav
Kristiansand|Palmesus
Drammen|Elvepromenade
Fredrikstad|Festningsvoll
Bodø|Malstrøm
Ålesund|Jugendstil
Lillehammer|Hoppbakke
Røros|Kobberverk
Haugesund|Sild
Tønsberg|Slottsfjell
Sandefjord|Hvalfangst
Larvik|Steinbrudd
Molde|Jazz
Kristiansund|Klippfisk
Hammerfest|Meridianstøtte
Alta|Helleristninger
Stockholm|Skjærgård
Göteborg|Trikkehjul
Malmö|Dreid tårn
Uppsala|Studentluer
Lund|Domkirke
Umeå|Bjørketrær
København|Sykkelfelt
Aarhus|Regnbuepanorama
Odense|Eventyrforfatter
Aalborg|Limfjord
Helsinki|Design
Turku|Skjærgårdsferge
Tampere|Innsjøer
Reykjavik|Jordvarme
Akureyri|Nordlig havn
London|Undergrunn
Manchester|Industriby
Liverpool|Mersey
Birmingham|Kanaler
Leeds|Ullhandel
Bristol|Hengebro
Oxford|Universitetsgårder
Cambridge|Staking
Bath|Romerske bad
York|Bymur
Edinburgh|Åskam
Glasgow|Verft
Aberdeen|Grå granitt
Cardiff|Walisisk borg
Belfast|Skipsbygging
Dublin|Litteraturpub
Cork|Elveøyer
Paris|Fortauskafé
Lyon|Silke
Marseille|Havnesuppe
Nice|Strandpromenade
Cannes|Rød løper
Bordeaux|Vinkjellere
Toulouse|Rosa tegl
Strasbourg|Bindingsverk
Lille|Nordfransk marked
Nantes|Mekanisk elefant
Berlin|Gjenforening
Hamburg|Lagerhus
München|Ølhage
Frankfurt|Skyskrapere
Köln|Tvillingtårn
Düsseldorf|Rhinen
Dresden|Barokk
Leipzig|Bokmesse
Nürnberg|Julemarked
Stuttgart|Bilfabrikk
Bremen|Stadsmusikanter
Hannover|Messehaller
Roma|Brosteinsruiner
Milano|Moteuke
Napoli|Vedovn
Venezia|Pælefundament
Firenze|Renessanse
Bologna|Arkader
Torino|Bilindustri
Pisa|Skjev vinkel
Verona|Balkong
Palermo|Siciliansk marked
Catania|Vulkanskygge
Genova|Sjøfarere
Madrid|Prado
Barcelona|Mosaikk
Valencia|Paellapanne
Sevilla|Appelsintrær
Málaga|Picassobarndom
Granada|Mauriske palasser
Bilbao|Titanfasade
Palma|Øykatedral
Alicante|Klippeslott
Lisboa|Gule vogner
Porto|Vinkjeller
Coimbra|Studentkapper
Faro|Lagunesystem
Amsterdam|Smale gavler
Rotterdam|Kubehus
Haag|Internasjonale domstoler
Utrecht|Kanalkjellere
Maastricht|Traktat
Brussel|Praliner
Antwerpen|Diamanthandel
Brugge|Middelalderkanal
Gent|Borggraver
Luxembourg|Festningsklipper
Zürich|Banksafe
Genève|Fontenestråle
Bern|Bjørnegrop
Basel|Kunstmesse
Luzern|Tildekket trebro
Lausanne|Olympisk museum
Wien|Kaffehus
Salzburg|Salt og musikk
Innsbruck|Alpedal
Graz|Klokketårn
Praha|Astronomisk ur
Brno|Funksjonalistisk villa
Budapest|Termalbad
Bratislava|Borg over elven
Ljubljana|Dragebro
Zagreb|Kabelbane
Split|Keiserpalass
Dubrovnik|Festningsrunde
Sarajevo|Bakketopper
Beograd|Elvemøte
Podgorica|Ribnica
Skopje|Steinbro
Tirana|Fargerike fasader
Sofia|Vitosha
București|Stort parlament
Warszawa|Gjenoppbygging
Kraków|Markedsplass
Gdańsk|Verftsport
Wrocław|Små dverger
Poznań|Rådhusgeiter
Vilnius|Barokkspir
Riga|Jugendfasader
Tallinn|Middelaldermurer
Minsk|Brede avenyer
Kyiv|Gylne kupler
Lviv|Kaffekultur
Odesa|Havnetrapp
Moskva|Løkkupler
St. Petersburg|Hvite netter
Athen|Søyler
Thessaloniki|Hvitt tårn
Istanbul|To verdensdeler
Ankara|Anatolisk høyland
Izmir|Egeisk havn
Jerusalem|Gamle murer
Tel Aviv|Bauhaus
Amman|Åsrygger
Beirut|Middelhavskyst
Dubai|Høyhusklynger
Abu Dhabi|Øyby
Doha|Perlefiske
Muscat|Lav bebyggelse
Teheran|Fjell i nord
Bangkok|Tuk-tuk
Singapore|Hager i høyden
Kuala Lumpur|Tvillingbygg
Jakarta|Java
Manila|Jeepney
Hanoi|Motorsykler
Ho Chi Minh-byen|Scooterstrøm
Beijing|Hutonger
Shanghai|Elvesilhuett
Tokyo|Neonlys
Kyoto|Tempelhager
Seoul|Palassporter
Mumbai|Filmstudio
Delhi|Rødt fort
Katmandu|Daltempler
New York|Gaterutenett
Los Angeles|Filmklapper
San Francisco|Bratte gater
Chicago|Arkitekturcruise
Miami|Art deco
Las Vegas|Spillebrikker
Washington D.C.|Obelisk
Toronto|Høyt TV-tårn
Vancouver|Fjell ved havet
Mexico by|Høydeplatå
Rio de Janeiro|Sukkertopp
São Paulo|Betonghav
Buenos Aires|Tangosalong
Lima|Stillehavsklipper
Santiago|Andesutsikt
Kairo|Nilen
Marrakech|Medina
Cape Town|Flatt fjell
Johannesburg|Gullgruver
Nairobi|Safariport
Dakar|Rallyhistorie
Tunis|Bardomuseum
Addis Abeba|Høylandsby
Sydney|Hvite seil
Melbourne|Trikkekaféer
Perth|Vestkyst
Auckland|Vulkanske åser
Wellington|Vindkast
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'body', name: 'Kropp og sanser', icon: 'person',
    description: 'Kroppsdeler, bevegelser og alt vi merker med sansene.',
    words: entries(`
Hode|Hattestativ
Hår|Frisyre
Hodebunn|Røtter
Panne|Rynking
Tinning|Ved brillestangen
Ansikt|Gjenkjenning
Øyebryn|Forbauselse
Øyevipper|Små børster
Øye|Blikk
Øyelokk|Blink
Pupill|Lysåpning
Iris|Fargering
Netthinne|Bildemottaker
Hornhinne|Gjennomsiktig front
Linse|Fokus
Tårekanal|Drenering
Øyekrok|Sidevinkel
Øre|Lydfanger
Øreflipp|Smykkeplass
Øregang|Lydtunnel
Trommehinne|Vibrasjon
Sneglehus|Spiral
Nese|Duftfanger
Nesebor|Luftåpning
Neserygg|Brillebro
Bihule|Luftrom
Kinn|Rødming
Kinnbein|Ansiktskant
Munn|Ordport
Leppe|Kyss
Tunge|Artikulasjon
Smaksløk|Små reseptorer
Tann|Emalje
Fortann|Avbiting
Hjørnetann|Spiss
Jeksel|Maling
Tannkjøtt|Rosa feste
Gane|Over tungen
Drøvel|Hengende dråpe
Kjeve|Tygging
Hake|Nederste ansikt
Skjegg|Barbering
Hals|Skjerf
Nakke|Hodestøtte
Strupe|Luftpassasje
Stemmebånd|Tonevibrasjon
Svelg|Matpassasje
Skulder|Bærerem
Kragebein|Horisontal bue
Skulderblad|Vingeform
Bryst|Pustebevegelse
Ribbein|Beskyttende buer
Brystbein|Midtplate
Rygg|Bakside
Ryggrad|Virvelrekke
Korsrygg|Svaien
Mage|Rumling
Navle|Livets start
Midje|Belte
Hofte|Sideledd
Bekken|Skålform
Rumpe|Sittepute
Arm|Omfavnelse
Overarm|Biceps
Albue|Vinkel
Underarm|To parallelle knokler
Hånd|Hilsen
Håndledd|Klokkerem
Håndflate|Linjemønster
Håndbak|Knoer
Finger|Presisjon
Tommel|Grep
Pekefinger|Retning
Langfinger|Lengst i rekken
Ringfinger|Smykkested
Lillefinger|Ytterst
Fingerledd|Bøyeledd
Fingertupp|Avtrykk
Negl|Keratinplate
Neglebånd|Beskyttende kant
Bein|Steg
Lår|Stor løpekraft
Kne|Bøyd ben
Kneskål|Rund beskyttelse
Knehase|Baksiden av bøyen
Legg|Støvelskaft
Skinnebein|Fremside
Ankel|Sokkekant
Fot|Spor
Hæl|Bakerste støtte
Fotsåle|Bakkekontakt
Fotbue|Hvelv
Tå|Skobalanse
Storetå|Fraspark
Lilletå|Møbelkant
Akillessene|Hælfeste
Hud|Ytre lag
Pore|Liten åpning
Hårsekk|Vekstlomme
Svettekjertel|Kjøling
Muskel|Sammentrekning
Sene|Kraftoverføring
Ledd|Bevegelsespunkt
Brusk|Glatt kontaktflate
Knokkel|Hard støtte
Skjelett|Rammeverk
Hjerne|Foldemønster
Hjerte|Pumpe
Lunge|Luftutveksling
Mellomgulv|Pustemotor
Lever|Kjemisk verksted
Nyre|Filter
Magesekk|Matlager
Tarm|Opptak
Blod|Transportvæske
Blodåre|Rørsystem
Pulsåre|Fra pumpen
Vene|Returvei
Kapillær|Mikronett
Nerve|Signaltråd
Ryggmarg|Signalvei
Celle|Byggestein
DNA|Oppskrift
Immunforsvar|Vaktlag
Lymfe|Væskereturen
Gå|Stegvis
Løpe|Svevfase
Hoppe|Fraspark
Hinke|Ett bein
Krype|Lav bevegelse
Krabbe|På alle fire
Klatre|Gripe høyere
Balansere|Små justeringer
Danse|Rytme
Svømme|Vannmotstand
Dykke|Under overflaten
Rulle|Rund bevegelse
Snu|Motsatt vei
Bøye|Mindre vinkel
Strekke|Langt ut
Vri|Rotasjon
Løfte|Opp fra bakken
Bære|Holde vekten
Skyve|Bortover
Dra|Mot seg
Kaste|Slippe i fart
Gripe|Fange
Sparke|Beinpendel
Trampe|Tunge steg
Knipse|Kort smekk
Klappe|To flater
Peke|Vise retning
Vinke|Avskjed
Nikke|Enig
Riste på hodet|Uenig
Blunke|Rask lukking
Myse|Smal åpning
Gjespe|Trøtt gap
Svelge|Nedover
Tygge|Kjevearbeid
Suge|Undertrykk
Blåse|Utoverluft
Puste|Inn og ut
Snakke|Forme ord
Hviske|Lav stemme
Synge|Melodi
Le|Humor
Gråte|Tårer
Nyse|Brått luftstøt
Hoste|Harkende støt
Syn|Lysinformasjon
Hørsel|Lydbølger
Lukt|Duftspor
Smak|Søtt og surt
Berøring|Kontakt
Balanse|Likevekt
Dybdesyn|Avstand
Fargesyn|Spekter
Sidesyn|Utenfor sentrum
Nattsyn|Lite lys
Døgnrytme|Indre klokke
Puls|Regelmessig slag
Hjerteslag|Rytmisk pump
Refleks|Automatisk reaksjon
Søvn|Hvilemodus
Drøm|Nattfortelling
Hukommelse|Minner
Konsentrasjon|Oppmerksomhet
Koordinasjon|Samspill
Finmotorikk|Små bevegelser
Grovmotorikk|Store bevegelser
Kroppsholdning|Oppreist
Spenst|Spretthøyde
Styrke|Kraft
Utholdenhet|Varighet
Smidighet|Bevegelighet
Reaksjonstid|Fra signal til svar
Metthet|Nok mat
Sult|Tom følelse
Tørst|Vannbehov
Gåsehud|Nupper
Kiling|Latterreaksjon
Svette|Salte dråper
Frysning|Skjelving
Ansiktsuttrykk|Mimikk
`)
  });
})();
