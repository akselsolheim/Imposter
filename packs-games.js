/* Each association is authored for its word; no generated variants or fallback hints. */
globalThis.IMPOSTER_PACKS ??= [];
(() => {
  const entries = text => text.trim().split('\n').map(line => {
    const [word, hint] = line.split('|');
    return { word: word.trim(), hint: hint.trim() };
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'characters', name: 'Karakterer', icon: 'mask',
    description: 'Kjente fjes fra film, serier og spill.',
    words: entries(`
Jon Snow|Nattevakten
Iron Man|Reaktor
Harry Potter|Arr
Hermione Granger|Tidsvender
Ron Weasley|Sjakk
Albus Dumbledore|Føniks
Severus Snape|Eliksir
Lord Voldemort|Malacrux
Draco Malfoy|Ilder
Rubeus Hagrid|Hytte
Sirius Black|Gudfar
Luna Lovegood|Reddik
Neville Longbottom|Botanikk
Dobby|Sokk
Minerva McGonagall|Katt
Dolores Umbridge|Rosa
Bellatrix Lestrange|Azkaban
Cedric Diggory|Turnering
Remus Lupin|Fullmåne
Gollum|Gåter
Frodo Baggins|Byrde
Samwise Gamgee|Gartner
Gandalf|Bro
Aragorn|Arving
Legolas|Bueskyting
Gimli|Øks
Boromir|Horn
Bilbo Baggins|Fødselsdag
Sauron|Blikk
Saruman|Industri
Galadriel|Speil
Elrond|Råd
Éowyn|Forkledning
Thorin Oakenshield|Erebor
Smaug|Skattkammer
Darth Vader|Pust
Luke Skywalker|Solnedgang
Leia Organa|Hologram
Han Solo|Smugling
Chewbacca|Armbrøst
Yoda|Sump
Obi-Wan Kenobi|Eremitt
Padmé Amidala|Naboo
Rey|Skraphandler
Kylo Ren|Splittelse
Finn|Desertør
Poe Dameron|Pilot
R2-D2|Piping
C-3PO|Etikette
BB-8|Rulling
Palpatine|Senatet
Darth Maul|Dobbeltblad
Boba Fett|Dusør
Jango Fett|Kloning
Din Djarin|Beskar
Grogu|Frosk
Ahsoka Tano|Togruta
Mace Windu|Lilla
Qui-Gon Jinn|Profeti
Jar Jar Binks|Gungan
Lando Calrissian|Skyby
Jabba the Hutt|Gjeld
Captain Rex|Ordre
General Grievous|Fire armer
Count Dooku|Greve
Jyn Erso|Arkiv
Cassian Andor|Opprør
Daenerys Targaryen|Egg
Tyrion Lannister|Vin
Cersei Lannister|Skam
Jaime Lannister|Gullhånd
Arya Stark|Ansikter
Sansa Stark|Sitronkake
Bran Stark|Ravn
Ned Stark|Ære
Robb Stark|Bryllup
Theon Greyjoy|Gissel
Brienne of Tarth|Ed
Sandor Clegane|Brann
Joffrey Baratheon|Armbrøst
Samwell Tarly|Bøker
Petyr Baelish|Kaos
Varys|Hvisking
Melisandre|Rubin
Khal Drogo|Flette
Hodor|Dør
Night King|Is
Batman|Flaggermushule
Superman|Krypton
Wonder Woman|Lasso
Aquaman|Trefork
The Flash|Lyn
Green Lantern|Viljestyrke
Joker|Spillekort
Harley Quinn|Kølle
Catwoman|Juveler
Poison Ivy|Drivhus
The Riddler|Spørsmålstegn
Bane|Maske
Two-Face|Mynt
Robin|Lærling
Alfred Pennyworth|Butler
Lex Luthor|Kryptonnitt
Spider-Man|Nabolag
Captain America|Vibranium
Thor|Verdig
Loki|Illusjon
Hulk|Sinne
Black Widow|Spionasje
Hawkeye|Presisjon
Black Panther|Wakanda
Doctor Strange|Portal
Scarlet Witch|Kaosmagi
Vision|Panne
Ant-Man|Størrelsesforhold
Wasp|Vinger
Captain Marvel|Fotoner
Star-Lord|Walkman
Gamora|Grønn
Drax|Bokstavelig
Rocket Raccoon|Skrapdeler
Groot|Røtter
Thanos|Balanse
Ultron|Utryddelse
Deadpool|Fjerde vegg
Wolverine|Adamantium
Professor X|Telepati
Magneto|Metall
Storm|Vær
Cyclops|Visir
Jean Grey|Fønikskraft
Mystique|Hudskifte
Nightcrawler|Teleportering
Venom|Symbiose
Miles Morales|Brooklyn
Gwen Stacy|Trommer
Nick Fury|Øyelapp
Falcon|Flydrakt
Winter Soldier|Hjernevask
Moon Knight|Månegud
Daredevil|Hørsel
The Punisher|Hodeskalle
Mario|Rør
Luigi|Spøkelseshus
Princess Peach|Paraply
Bowser|Ildpust
Yoshi|Svelging
Toad|Sopphatt
Donkey Kong|Tønner
Diddy Kong|Caps
Wario|Grådighet
Waluigi|Tennis
Rosalina|Stjerneobservatorium
Link|Okarina
Princess Zelda|Visdom
Ganondorf|Gerudo
Kirby|Inhalering
Samus Aran|Dusørjakt
Pikachu|Kinn
Ash Ketchum|Liga
Charizard|Flammetupp
Squirtle|Solbriller
Bulbasaur|Frø
Mewtwo|Laboratorium
Jigglypuff|Vuggesang
Sonic|Fart
Tails|Propell
Knuckles|Smaragd
Shadow|Kaoskontroll
Dr. Eggman|Robotfabrikk
Amy Rose|Hammer
Crash Bandicoot|Kasser
Spyro|Edelstener
Lara Croft|Gravkammer
Nathan Drake|Skattejakt
Kratos|Aske
Atreus|Buestreng
Master Chief|Spartan
Cortana|Kunstig intelligens
Marcus Fenix|Motorsag
Solid Snake|Pappeske
Big Boss|Øyelapp
Agent 47|Strekkode
Ezio Auditore|Firenze
Altaïr|Trosprang
Geralt of Rivia|Medaljong
Ciri|Eldreblod
Yennefer|Syrin
Triss Merigold|Flammer
Arthur Morgan|Dagbok
John Marston|Ranch
Dutch van der Linde|Plan
Trevor Philips|Uforutsigbar
Michael De Santa|Terapi
Franklin Clinton|Bilberging
Carl Johnson|Grove Street
Tommy Vercetti|Hawaii-skjorte
Niko Bellic|Fetter
Steve|Gruvedrift
Alex|Kobberhår
Creeper|Fresing
Enderman|Blikkontakt
Sans|Skjelettvitser
Papyrus|Spagetti
Frisk|Besluttsomhet
Toriel|Pai
Chara|Kniv
Flowey|Tilbakestilling
Pac-Man|Labyrint
Mega Man|Armkanon
Ryu|Hadouken
Chun-Li|Spark
Scorpion|Harpun
Sub-Zero|Frysing
Raiden|Torden
Liu Kang|Ildkule
Jin Kazama|Djevelgen
Heihachi Mishima|Klippekant
Cloud Strife|Bustersverd
Sephiroth|Én vinge
Tifa Lockhart|Slåsshansker
Aerith Gainsborough|Blomsterselger
Squall Leonhart|Gunblade
Tidus|Blitzball
Sora|Nøkkelblad
Gordon Freeman|Brekkjern
Alyx Vance|Motstand
Chell|Testkammer
GLaDOS|Kake
Wheatley|Kjerne
G-Man|Koffert
Leon S. Kennedy|Raccoon City
Jill Valentine|Låsdirk
Chris Redfield|BSAA
Claire Redfield|Redning
Albert Wesker|Solbriller
Ada Wong|Spion
Nemesis|Forfølgelse
Pyramid Head|Straff
Joel Miller|Gitarløfte
Ellie Williams|Immunitet
Abby Anderson|Hevn
Aloy|Fokus
Jin Sakai|Tsushima
Ratchet|Skiftenøkkel
Clank|Ryggrobot
Jak|Økomørke
Daxter|Otsel
Sackboy|Søm
Astro Bot|Liten astronaut
Homer Simpson|Atomkraftverk
Marge Simpson|Blått hår
Bart Simpson|Tavlestraff
Lisa Simpson|Saksofon
Maggie Simpson|Smokk
Ned Flanders|Nabo
Mr. Burns|Utmerket
Peter Griffin|Quahog
Stewie Griffin|Tidsmaskin
Brian Griffin|Roman
Rick Sanchez|Portalpistol
Morty Smith|Bestefar
Stan Marsh|Blå lue
Kyle Broflovski|Grønn lue
Eric Cartman|Cheesy Poofs
Kenny McCormick|Hettesnor
Svampebob|Ananas
Patrick Star|Steinbolig
Sandy Cheeks|Luftkuppel
Squidward Tentacles|Klarinett
Mr. Krabs|Kasseapparat
Plankton|Oppskrift
Walter White|Krystall
Jesse Pinkman|Campingbil
Saul Goodman|Reklameskilt
Gustavo Fring|Kyllingrestaurant
Mike Ehrmantraut|Diskresjon
Hank Schrader|Mineraler
Eleven|Neseblod
Dustin Henderson|Tannløshet
Jim Hopper|Hytte
Steve Harrington|Spikerballtre
Wednesday Addams|Cello
Morticia Addams|Roser
Gomez Addams|Fekting
Thing|Fingre
Sherlock Holmes|Deduksjon
Dr. Watson|Militærlege
James Moriarty|Erkefiende
Doctor Who|Regenerering
Rose Tyler|Bad Wolf
Michael Scott|Papirsalg
Dwight Schrute|Rødbeter
Jim Halpert|Blikk mot kamera
Pam Beesly|Resepsjon
Rachel Green|Central Perk
Ross Geller|Paleontologi
Monica Geller|Rengjøring
Chandler Bing|Sarkasme
Joey Tribbiani|Audition
Phoebe Buffay|Smelly Cat
Sheldon Cooper|Banking
Barney Stinson|Dress
Ted Mosby|Blått horn
Robin Scherbatsky|Canada
Jake Peralta|Die Hard
Raymond Holt|Cheddar
Leslie Knope|Vafler
Ron Swanson|Trearbeid
Ted Lasso|Kjeks
Thomas Shelby|Barberblad
Tony Soprano|Ender
Dexter Morgan|Blodanalyse
Joe Goldberg|Glassbur
Homelander|Melk
Billy Butcher|Brekkejern
Invincible|Viltrum
Omni-Man|Bart
Jinx|Fletter
Vi|Boksehansker
Caitlyn Kiramman|Piltover
Viktor|Hexcore
Jayce Talis|Oppfinnelse
Naruto Uzumaki|Ramen
Sasuke Uchiha|Hevn
Kakashi Hatake|Kopiering
Monkey D. Luffy|Elastisitet
Roronoa Zoro|Retningssans
Sanji|Kjøkken
Goku|Trening
Vegeta|Stolthet
Piccolo|Namek
Light Yagami|Notatbok
L|Sukker
Ryuk|Epler
Eren Yeager|Frihet
Mikasa Ackerman|Skjerf
Levi Ackerman|Renhold
Tanjiro Kamado|Luktesans
Nezuko Kamado|Bambus
Satoru Gojo|Blindfold
Yuji Itadori|Fingre
Denji|Startsnor
Power|Blod
Aang|Luftnomade
Katara|Vannstamme
Zuko|Æresjakt
Toph Beifong|Vibrasjoner
Iroh|Te
Korra|Republikkbyen
Elsa|Hansker
Anna|Søsterkjærlighet
Olaf|Sommerdrøm
Kristoff|Islevering
Simba|Hakuna Matata
Scar|Hyener
Mufasa|Stjernehimmel
Timon|Insekter
Pumbaa|Vortesvin
Shrek|Sumpfred
Fiona|Solnedgang
Esel|Vafler
Pus med støvler|Bedende øyne
Woody|Trekkesnor
Buzz Lightyear|Uendelighet
Jessie|Jodling
Rex|Små armer
Lightning McQueen|Radiator Springs
Mater|Tauekrok
Nemo|Akvarium
Dory|Glemsomhet
Marlin|Bekymring
WALL-E|Komprimering
EVE|Plantesøk
Remy|Lukt
Carl Fredricksen|Ballonger
Russell|Speidermerke
Miguel Rivera|Ofrenda
Mirabel Madrigal|Briller
Bruno Madrigal|Rotter
Moana|Rev
Maui|Fiskekrok
Aladdin|Rådiamant
Jasmine|Tiger
Genie|Tre ønsker
Jafar|Kobra
Mulan|Forkledning
Mushu|Gong
Belle|Bibliotek
Gaston|Gevir
Rapunzel|Stekepanne
Merida|Bueskyting
Po|Dumplings
Master Shifu|Indre ro
Hiccup|Proteser
Toothless|Plasma
Gru|Månetyveri
Paddington|Marmelade
Mr. Bean|Teddy
Jack Sparrow|Kompass
Indiana Jones|Pisk
James Bond|Martini
Ethan Hunt|Sikringsline
John Wick|Blyant
Neo|Rød pille
Trinity|Sidespark
Morpheus|Valg
Ellen Ripley|Lasterobot
Sarah Connor|Dommedag
T-800|Solbriller
Marty McFly|Skateboard
Doc Brown|Flukskondensator
Forrest Gump|Sjokoladeeske
Rocky Balboa|Trapp
Tony Montana|Miami
Don Vito Corleone|Tilbud
Hannibal Lecter|Chianti
Jack Torrance|Skrivemaskin
Pennywise|Avløp
Freddy Krueger|Drømmer
Jason Voorhees|Hockeymaske
Michael Myers|Haddonfield
Ghostface|Telefonsamtale
Chucky|Batterier
Katniss Everdeen|Trefingersalutt
Peeta Mellark|Bakeri
Willy Wonka|Fabrikkport
Mary Poppins|Paraplyreise
Peter Pan|Aldri voksen
Captain Hook|Klokketikking
Cruella de Vil|Pels
Maleficent|Torner
Ursula|Stemmebytte
Hades|Blå flammer
Megamind|Stor panne
Ralph|Arkade
Vanellope von Schweetz|Glitch
Joy|Kontrollpanel
Sadness|Tårer
Baymax|Helsekontroll
Stitch|Eksperiment
Lilo|Hula
Tarzan|Lianer
Quasimodo|Klokketårn
Esmeralda|Tamburin
Baloo|Bjørneklem
Bagheera|Jungelvakt
Mowgli|Ulveflokk
Robin Hood|Omfordeling
Hercules|Helteprøver
Pinocchio|Samvittighet
Geppetto|Treskjæring
Bambi|Skogbrann
Dumbo|Fjær
Alice|Teparty
The Mad Hatter|Teselskap
Winnie the Pooh|Honningkrukke
Tigger|Spretting
Eeyore|Mistet hale
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'videogames', name: 'Videospill', icon: 'gamepad',
    description: 'Fra arkadefavoritter til store spilleventyr.',
    words: entries(`
Minecraft|Arbeidsbenk
Fortnite|Fallskjermbuss
Roblox|Brukerskapt
Among Us|Ventilasjon
Fall Guys|Hinderløype
Rocket League|Luftdribling
Valorant|Spike
Counter-Strike 2|Bombested
Counter-Strike: Global Offensive|Dust II
League of Legends|Nexus
Dota 2|Ancient
Overwatch|Nyttelast
Overwatch 2|Fem mot fem
Apex Legends|Respawn-banner
PUBG: Battlegrounds|Kyllingmiddag
Call of Duty: Warzone|Gulag
Call of Duty 4: Modern Warfare|Pripjat
Call of Duty: Black Ops|Tallrekke
Call of Duty: Modern Warfare 2|Makarov
Battlefield 1|Skyttergrav
Battlefield V|Narvik
Battlefield 2042|Spesialister
Rainbow Six Siege|Barrikade
Escape from Tarkov|Uttrekk
Team Fortress 2|Hatter
Destiny 2|Lysnivå
Warframe|Tenno
Halo: Combat Evolved|Ringverden
Halo 2|Arbiter
Halo 3|Avslutning
Halo: Reach|Noble
Halo Infinite|Gripekrok
Gears of War|Locust
Doom|Marsbase
Doom Eternal|Glory kill
Quake|Spikerpistol
Half-Life|Resonanskaskade
Half-Life 2|City 17
Half-Life: Alyx|Tyngdehansker
Portal|Testkammer
Portal 2|Potetbatteri
Left 4 Dead|Sikkerhetsrom
Left 4 Dead 2|Stekepanne
BioShock|Rapture
BioShock Infinite|Columbia
Prey|Mimic
Dishonored|Dunwall
Deathloop|Dagsgjentakelse
Titanfall 2|Pilotbånd
Borderlands 2|Handsome Jack
Borderlands 3|Calypso
Far Cry 3|Vaas
Far Cry 4|Kyrat
Far Cry 5|Montana
Far Cry 6|Yara
Grand Theft Auto III|Liberty City
Grand Theft Auto: Vice City|Neonlys
Grand Theft Auto: San Andreas|Grove Street
Grand Theft Auto IV|Bowlinginvitasjon
Grand Theft Auto V|Tre hovedroller
Red Dead Redemption|Ranch
Red Dead Redemption 2|Æresmåler
Bully|Internatskole
L.A. Noire|Avhør
Max Payne|Bullet time
Mafia|Lost Heaven
Mafia II|Empire Bay
Sleeping Dogs|Hongkong
Watch Dogs|Mobilhacking
Watch Dogs 2|San Francisco
Cyberpunk 2077|Braindance
The Witcher 3: Wild Hunt|Gwent
The Witcher 2: Assassins of Kings|Flotsam
The Elder Scrolls III: Morrowind|Vivec
The Elder Scrolls IV: Oblivion|Cyrodiil
The Elder Scrolls V: Skyrim|Rop
Fallout 3|Megaton
Fallout: New Vegas|Mojave
Fallout 4|Bosetting
Fallout 76|Appalachia
Starfield|Constellation
Mass Effect|Citadellet
Mass Effect 2|Selvmordsoppdrag
Mass Effect 3|Reapers
Dragon Age: Origins|Grey Wardens
Dragon Age: Inquisition|Riften
Baldur's Gate 3|Rumpetroll
Divinity: Original Sin 2|Source
Disco Elysium|Bakrus
Planescape: Torment|Navnløs
Pillars of Eternity|Sjelesyn
Diablo II|Horadrisk kube
Diablo III|Nephalem
Diablo IV|Lilith
Path of Exile|Wraeclast
World of Warcraft|Azeroth
Guild Wars 2|Tyria
RuneScape|Lumbridge
Final Fantasy XIV|Eorzea
Final Fantasy VII|Midgar
Final Fantasy VIII|SeeD
Final Fantasy IX|Vivi
Final Fantasy X|Blitzball
Final Fantasy XV|Biltur
Final Fantasy XVI|Eikons
Kingdom Hearts|Nøkkelblad
Persona 5|Metavers
Persona 4|TV-verden
Persona 3|Midnattstime
Pokémon Red|Kanto
Pokémon Gold|Johto
Pokémon Ruby|Hoenn
Pokémon Diamond|Sinnoh
Pokémon Black|Unova
Pokémon X|Kalos
Pokémon Sun|Alola
Pokémon Sword|Galar
Pokémon Scarlet|Paldea
Pokémon Legends: Arceus|Hisui
Pokémon GO|Utevandring
Pokémon Snap|Fototur
Super Mario Bros.|Warp-rør
Super Mario Bros. 3|Vaskebjørnhale
Super Mario World|Dinosaurvenn
Super Mario 64|Slottsmalerier
Super Mario Sunshine|Vannpumpe
Super Mario Galaxy|Tyngdefelt
Super Mario Odyssey|Hattebytte
Super Mario Bros. Wonder|Forvandlingsblomst
Mario Kart 8 Deluxe|Antityngde
Mario Party Superstars|Stjernehandel
Paper Mario: The Thousand-Year Door|Rogueport
Luigi's Mansion|Støvsuger
Luigi's Mansion 3|Gooigi
Donkey Kong Country|Minevogn
Donkey Kong 64|Samlebananer
Yoshi's Island|Barnevakt
Captain Toad: Treasure Tracker|Diorama
Super Smash Bros. Ultimate|Alle sammen
The Legend of Zelda: Ocarina of Time|Tidsreiser
The Legend of Zelda: Majora's Mask|Tre døgn
The Legend of Zelda: The Wind Waker|Seilbåt
The Legend of Zelda: Twilight Princess|Ulveham
The Legend of Zelda: Skyward Sword|Skyloft
The Legend of Zelda: Breath of the Wild|Sheikah
The Legend of Zelda: Tears of the Kingdom|Ultrahand
The Legend of Zelda: Link's Awakening|Drømmeøy
Metroid Prime|Skanning
Metroid Dread|E.M.M.I.
Super Metroid|Zebes
Kirby and the Forgotten Land|Bilmunn
Animal Crossing: New Horizons|Øylån
Animal Crossing: New Leaf|Borgermester
Splatoon 3|Blekkflom
Pikmin 4|Oatchi
Fire Emblem: Three Houses|Kloster
Xenoblade Chronicles|Bionis
Wii Sports|Stuebowling
Wii Fit|Balansebrett
Nintendo Switch Sports|Spocco
Ring Fit Adventure|Treningsring
Sonic the Hedgehog|Green Hill
Sonic Adventure 2|Chao-hage
Sonic Frontiers|Starfall
Crash Bandicoot|Wumpafrukt
Crash Team Racing|Powerslide
Spyro the Dragon|Drageegg
Ratchet & Clank: Rift Apart|Dimensjonsskifte
Jak and Daxter|Økoenergi
Sly Cooper|Tyvehåndbok
LittleBigPlanet|Hjemmesydd
Astro's Playroom|Konsollhistorie
Astro Bot|Roboteredning
Uncharted 2: Among Thieves|Hengende tog
Uncharted 4: A Thief's End|Libertalia
The Last of Us|Cordyceps
The Last of Us Part II|Seattle
God of War|Øksekast
God of War Ragnarök|Atreus
Ghost of Tsushima|Ledende vind
Horizon Zero Dawn|Maskindyr
Horizon Forbidden West|Undervann
Marvel's Spider-Man|Manhattan
Marvel's Spider-Man: Miles Morales|Vinterby
Marvel's Spider-Man 2|Symbiote
Detroit: Become Human|Avvikere
Heavy Rain|Origami
Beyond: Two Souls|Aiden
Until Dawn|Sommerfugleffekt
Life Is Strange|Fotoklasse
Life Is Strange: True Colors|Empati
The Walking Dead|Clementine
The Wolf Among Us|Fabletown
Firewatch|Utkikkstårn
What Remains of Edith Finch|Familiehus
Gone Home|Tom bolig
Journey|Skjerf
Abzû|Dykking
Gris|Fargegjenvinning
Inside|Tankekontroll
Limbo|Silhuett
Little Nightmares|Regnfrakk
Little Nightmares II|Papirpose
Stray|Ryggsekkrobot
Untitled Goose Game|Hageplaging
Goat Simulator|Ragdoll
Human: Fall Flat|Vakling
Gang Beasts|Slapstick
Party Animals|Pelskamp
It Takes Two|Ekteskapsterapi
A Way Out|Fengselsflukt
Overcooked! 2|Kjøkkenkaos
Moving Out|Flyttelass
Stardew Valley|Samfunnshus
Terraria|Todimensjonal graving
Valheim|Mjød
V Rising|Sollys
Rust|Steinstart
ARK: Survival Evolved|Dinosaurtemming
Subnautica|Oksygenmåler
Subnautica: Below Zero|Kulde
The Forest|Kannibaløy
Sons of the Forest|Kelvin
Raft|Drivgods
Grounded|Bakgård
Don't Starve|Sultmåler
Don't Starve Together|Delt overlevelse
No Man's Sky|Prosedyregalakser
Astroneer|Terrengverktøy
Outer Wilds|22 minutter
Kerbal Space Program|Grønne astronauter
Elite Dangerous|Melkeveien
EVE Online|Romøkonomi
Star Citizen|Stjerneskip
Sea of Thieves|Skattekart
Skull and Bones|Sjørøverskute
Assassin's Creed II|Renessanse
Assassin's Creed IV: Black Flag|Sjanti
Assassin's Creed Origins|Egypt
Assassin's Creed Odyssey|Sparta
Assassin's Creed Valhalla|Langhus
Assassin's Creed Mirage|Bagdad
Prince of Persia: The Sands of Time|Tidsdolk
Tomb Raider|Yamatai
Rise of the Tomb Raider|Sibir
Hitman: World of Assassination|Forkledninger
Metal Gear Solid|Shadow Moses
Metal Gear Solid 3: Snake Eater|Jungelkamuflasje
Metal Gear Solid V: The Phantom Pain|Fulton
Death Stranding|Budrute
Resident Evil 2|Politistasjon
Resident Evil 4|Las Plagas
Resident Evil 7: Biohazard|Baker-familien
Resident Evil Village|Dimitrescu
Silent Hill 2|Tåke
Dead Space|Lemkutting
Alien: Isolation|Bevegelsessensor
Outlast|Nattkamera
Amnesia: The Dark Descent|Hukommelsestap
SOMA|Bevissthetskopi
Phasmophobia|EMF-måler
Lethal Company|Skrotkvote
Five Nights at Freddy's|Nattskift
Poppy Playtime|GrabPack
Dead by Daylight|Generatorer
Alan Wake|Lommelykt
Alan Wake 2|Mørkt manus
Control|Skiftende kontor
Returnal|Atropos
Dark Souls|Bål
Dark Souls II|Drangleic
Dark Souls III|Aske
Demon's Souls|Boletaria
Bloodborne|Yharnam
Sekiro: Shadows Die Twice|Holdningsbrudd
Elden Ring|Mellomlandene
Lies of P|Mekaniske løgner
Nioh|Ki-puls
Hollow Knight|Hallownest
Celeste|Fjellklatring
Cuphead|Blekkstil
Undertale|Nåde
Deltarune|Mørk verden
Hades|Familieflukt
Hades II|Melinoë
Dead Cells|Halshugget
The Binding of Isaac|Kjeller
Slay the Spire|Kortstokk
Balatro|Jokere
Vampire Survivors|Automatangrep
Risk of Rain 2|Tidsvanskelighet
Enter the Gungeon|Ammunisjon
Spelunky|Tau og bomber
Rogue Legacy|Etterkommere
Shovel Knight|Graveredskap
Ori and the Blind Forest|Nibel
Ori and the Will of the Wisps|Ku
Rayman Legends|Musikkbaner
Super Meat Boy|Sagblader
Fez|Perspektivrotasjon
Braid|Tilbakespoling
The Witness|Linjegåter
Baba Is You|Flyttbare regler
Patrick's Parabox|Boksrekursjon
Tetris|Fallende brikker
Pac-Man|Kraftpille
Space Invaders|Rekker
Pong|To streker
Asteroids|Romsteiner
Frogger|Veikryssing
Street Fighter II|Bilbonus
Street Fighter 6|Drive-måler
Tekken 8|Heat
Mortal Kombat 11|Fatality
Super Smash Bros. Melee|Wavedash
Guilty Gear Strive|Romersk kansellering
Dragon Ball FighterZ|Tre krigere
EA Sports FC 24|Ultimate Team
FIFA 23|FUT
eFootball|Drømmelag
Football Manager 2024|Speiderrapport
NBA 2K24|Parkbasket
Tony Hawk's Pro Skater 2|Manual
Skate 3|Flickit
Forza Horizon 5|Mexico
Forza Motorsport|Rundekjøring
Gran Turismo 7|Bilmeny
Need for Speed: Most Wanted|Blacklist
Need for Speed: Underground 2|Garasjetuning
Burnout Paradise|Krasj
Trackmania|Tidtakning
F1 23|Depotsone
DiRT Rally 2.0|Kartleser
Wreckfest|Bulker
Euro Truck Simulator 2|Fraktbrev
American Truck Simulator|Interstate
Microsoft Flight Simulator|Cockpit
Farming Simulator 22|Avling
PowerWash Simulator|Høytrykk
House Flipper|Oppussing
Cities: Skylines|Trafikkork
SimCity 4|Ordfører
The Sims 4|Plumbob
Planet Zoo|Dyrevelferd
Planet Coaster|Berg-og-dalbane
RollerCoaster Tycoon 2|Kølinje
Two Point Hospital|Komiske diagnoser
Prison Architect|Celleblokk
RimWorld|Forteller
Dwarf Fortress|Festning
Factorio|Transportbånd
Satisfactory|Samlebånd
Dyson Sphere Program|Stjerneenergi
Oxygen Not Included|Duplikanter
Frostpunk|Generatorvarme
This War of Mine|Sivile
Papers, Please|Grensekontroll
Civilization VI|Ett trekk til
Age of Empires II|Landsbyboer
Age of Mythology|Gudekraft
StarCraft II|Zerg
Warcraft III|Helteenheter
Command & Conquer: Red Alert 2|Tidskrig
Company of Heroes|Dekning
Total War: Rome II|Legioner
Crusader Kings III|Dynasti
Europa Universalis IV|Diplomati
Hearts of Iron IV|Frontlinje
Stellaris|Galaktisk senat
XCOM 2|Treffsannsynlighet
Into the Breach|Forhåndsvarsel
Advance Wars|Erobre byer
Worms Armageddon|Bananbombe
Plants vs. Zombies|Solsikker
Angry Birds|Sprettert
Clash of Clans|Landsbyangrep
Clash Royale|Eliksir
Brawl Stars|Stjernekrefter
Candy Crush Saga|Godteribytte
Subway Surfers|Togspor
Temple Run|Endeløs flukt
Fruit Ninja|Fruktskjæring
Jetpack Joyride|Laboratorieflukt
Geometry Dash|Rytmehopp
Beat Saber|Lysblokker
Guitar Hero III|Plastgitar
Rock Band|Trommesett
Just Dance 2024|Koreografi
Osu!|Treffsirkler
Friday Night Funkin'|Rapduell
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'history', name: 'Historie', icon: 'landmark',
    description: 'Hendelser, oppfinnelser og spor fra fortiden.',
    words: entries(`
Steinalderen|Flint
Bronsealderen|Tinn
Jernalderen|Myrmalm
Istiden|Morene
Jordbruksrevolusjonen|Fastboende
Mesopotamia|Elveslette
Sumer|Bystater
Babylon|Hammurabi
Assyria|Ninive
Oldtidens Egypt|Nilflom
Induskulturen|Avløpssystem
Fønikerne|Purpur
Perserriket|Kongevei
Antikkens Hellas|Polis
Sparta|Agoge
Athen|Folkeforsamling
Romerriket|Akvadukt
Den romerske republikk|Senator
Pax Romana|Stabilitet
Vestromerrikets fall|476
Østromerriket|Konstantinopel
Vikingtiden|Langskip
Middelalderen|Lensvesen
Renessansen|Gjenoppdagelse
Opplysningstiden|Fornuft
Den industrielle revolusjonen|Fabrikkfløyte
Den vitenskapelige revolusjonen|Observasjon
Kolonitiden|Handelsstasjon
Romantikken|Følelser
Viktoriatiden|Damp
Belle époque|Kafé
Mellomkrigstiden|Uro
Den kalde krigen|Jernteppe
Romkappløpet|Prestisje
Apartheid|Segregering
Silkeveien|Karavane
Hansaforbundet|Bryggen
Kalmarunionen|Tre kroner
Danmark-Norge|København
Det osmanske riket|Sultan
Mongolriket|Steppe
Inkariket|Andes
Aztekerriket|Tenochtitlan
Mayakulturen|Kalender
Songhai-riket|Timbuktu
Mali-riket|Gullhandel
Det hellige romerske riket|Kurfyrster
Habsburgmonarkiet|Ekteskapspolitikk
Sovjetunionen|Femårsplan
Det britiske imperiet|Røde kartfelt
Det nederlandske ostindiske kompani|Krydder
Det britiske ostindiske kompani|Handelsmonopol
Samuraiene|Bushido
Shogunatet|Militærstyre
Meiji-restaurasjonen|Modernisering
Qin-dynastiet|Enhet
Han-dynastiet|Papir
Tang-dynastiet|Chang'an
Ming-dynastiet|Porselen
Qing-dynastiet|Mandsju
Den kinesiske mur|Grensevern
Pyramidene i Giza|Gravkammer
Sfinxen|Gåtefullt ansikt
Stonehenge|Solsnu
Colosseum|Arena
Pantheon|Oculus
Parthenon|Athene
Akropolis|Høyde
Machu Picchu|Fjellterrasse
Angkor Wat|Tempelby
Taj Mahal|Marmor
Den forbudte by|Keiserpalass
Petra|Sandstein
Pompeii|Aske
Troja|Beleiring
Knossos|Labyrint
Chichén Itzá|Skyggeslange
Påskeøyas statuer|Moai
Terrakottahæren|Leirsoldater
Rosettasteinen|Tyding
Dødehavsrullene|Huler
Tutankhamons grav|Carter
Bayeux-teppet|Broderi
Osebergskipet|Gravhaug
Gokstadskipet|Sandefjord
Urnes stavkirke|Treskurd
Nidarosdomen|Pilegrimer
Borgund stavkirke|Dragehoder
Akershus festning|Beleiring
Eidsvollsbygningen|Rikssal
Versailles|Speilsal
Vinterpalasset|Petrograd
Alhambra|Maurisk
Hagia Sofia|Kuppel
Biblioteket i Alexandria|Bokruller
Hengende hager i Babylon|Verdensunder
Fyrtårnet på Faros|Sjømerke
Kolossen på Rhodos|Havnegud
Kileskrift|Leirtavle
Hieroglyfer|Bildetegn
Runer|Rissing
Det fønikiske alfabetet|Konsonanter
Papyrus|Siv
Pergament|Dyrehud
Boktrykkerkunsten|Løse typer
Gutenbergbibelen|Mainz
Kompasset|Magnetnål
Kruttet|Salpeter
Hjulet|Aksel
Seilet|Vindkraft
Plogen|Fure
Spinning Jenny|Tråder
Dampmaskinen|Kondensator
Telegrafen|Morse
Telefonen|Summetone
Glødelampen|Glødetråd
Fotografiet|Eksponering
Kinematografen|Lumière
Radioen|Radiobølger
Penicillin|Muggsopp
Koppevaksinen|Kukopper
Røntgenstråler|Gjennomlysning
Periodetabellen|Grunnstoff
Relativitetsteorien|Romtid
Evolusjonsteorien|Utvalg
DNA-dobbelheliksen|Basepar
Internett|Pakkenett
World Wide Web|Hyperlenker
ENIAC|Elektronrør
Transistoren|Halvleder
Wright-brødrenes første flytur|Kitty Hawk
Lindberghs atlanterhavsflyging|Ensom pilot
Den første månelandingen|Eagle
Sputnik 1|Radiosignal
Jurij Gagarins romferd|Vostok
Laikas romferd|Hundekapsel
Apollo 13|Oksygentank
Challenger-ulykken|Pakning
Hubble-teleskopets oppskyting|Speilfeil
Slaget ved Marathon|Budbringer
Slaget ved Thermopylene|Fjellpass
Slaget ved Salamis|Triremer
Slaget ved Gaugamela|Aleksander
Slaget ved Cannae|Omringing
Slaget ved Actium|Sjøslag
Slaget i Teutoburgerskogen|Bakhold
Slaget ved Hastings|Normannere
Slaget ved Stamford Bridge|Hardråde
Slaget ved Stiklestad|Helligkåring
Slaget i Hafrsfjord|Rikssamling
Slaget ved Svolder|Ormen Lange
Slaget ved Agincourt|Langbuer
Slaget ved Lepanto|Galeier
Slaget ved Waterloo|Siste nederlag
Slaget ved Trafalgar|Nelson
Slaget ved Austerlitz|Tre keisere
Slaget ved Gettysburg|Pennsylvania
Slaget ved Verdun|Utmattelse
Slaget ved Somme|Skyttergraver
Slaget ved Gallipoli|Dardanellene
Slaget om Storbritannia|Radar
Slaget ved Stalingrad|Omringet armé
Slaget ved Midway|Hangarskip
Slaget ved El Alamein|Ørkenfront
Slaget om Narvik|Malmutskiping
Slaget om Berlin|Riksdagsflagg
Slaget ved Dien Bien Phu|Festningsdal
Trojanerkrigen|Trehest
Perserkrigene|Bystatallianse
Peloponneskrigen|Sparta mot Athen
Punerkrigene|Kartago
Hundreårskrigen|Jeanne d'Arc
Rosekrigene|Lancaster
Trettiårskrigen|Westfalen
Sjuårskrigen|Verdensomspennende
Napoleonskrigene|Kontinentalsperring
Krimkrigen|Nightingale
Den amerikanske borgerkrigen|Unionen
Første verdenskrig|Alliansekjeder
Andre verdenskrig|Aksemaktene
Koreakrigen|38. breddegrad
Vietnamkrigen|Tet
Den spanske borgerkrigen|Guernica
Boerkrigen|Sør-Afrika
Falklandskrigen|Sør-Atlanteren
Gulfkrigen|Kuwait
Den amerikanske revolusjonen|Uavhengighet
Den franske revolusjonen|Bastillen
Den russiske revolusjonen|Bolsjeviker
Den haitiske revolusjonen|Saint-Domingue
Den cubanske revolusjonen|Sierra Maestra
Den iranske revolusjonen|Sjah
Nellikrevolusjonen|Lisboa
Fløyelsrevolusjonen|Praha
Den oransje revolusjonen|Kyiv
Den arabiske våren|Tunis
Stormingen av Bastillen|Festningsfengsel
Boston Tea Party|Havnebasseng
Stormen på Vinterpalasset|Oktober
Magna Carta|Runnymede
Den amerikanske uavhengighetserklæringen|Philadelphia
Den franske menneskerettighetserklæringen|Borgerskap
Grunnloven av 1814|Eidsvoll
Unionsoppløsningen i 1905|Folkeavstemning
Kvinners stemmerett i Norge|1913
Norges frigjøring i 1945|Mai
Kongens nei|Elverum
Tungtvannsaksjonen|Vemork
Senkingen av Blücher|Oscarsborg
Hjemmefronten|Motstand
Shetlandsbussen|Nordsjøkryssing
Marshallplanen|Gjenoppbygging
Bretton Woods-konferansen|Valutasystem
Versaillestraktaten|Krigsskyld
Wienerkongressen|Maktbalanse
Freden i Westfalen|Suverenitet
Jaltakonferansen|Tre ledere
Potsdamkonferansen|Etterkrigsorden
Nürnbergprosessen|Tiltalebenken
Folkeforbundet|Mellomkrigsdiplomati
Opprettelsen av FN|San Francisco
Opprettelsen av NATO|Atlanterhavspakten
Roma-traktaten|Fellesmarked
Maastricht-traktaten|Europeisk union
Schengen-avtalen|Passkontroll
Berlinblokaden|Luftbro
Berlinmurens fall|Grenseåpning
Cuba-krisen|Missiler
Sovjetunionens oppløsning|Femten republikker
Tysklands gjenforening|Øst og vest
Praha-våren|Menneskelig ansikt
Oppstanden i Ungarn i 1956|Sovjetiske stridsvogner
Solidaritet i Polen|Skipsverft
Kulturrevolusjonen i Kina|Rødegardister
Det store spranget|Bakgårdsovner
Den lange marsjen|Retrett
Opiumskrigene|Handelstvang
Bokseropprøret|Beleirede legasjoner
Taipingopprøret|Himmelsk rike
Indias selvstendighet|Deling
Saltmarsjen|Sivil ulydighet
Avkoloniseringen av Afrika|Nye flagg
Sør-Afrikas valg i 1994|Stemmekø
Montgomery-bussboikotten|Seteplass
Marsjen til Washington i 1963|Drømmetale
Stonewall-opprøret|New York-bar
Watergate-skandalen|Innbrudd
Dreyfus-saken|J'accuse
Svartedauden|Pestlopper
Spanskesyken|1918
Den irske hungersnøden|Potettørråte
Den store depresjonen|Arbeidskø
Børskrakket i 1929|Wall Street
Tulipankrakket|Blomsterløker
Finanskrisen i 2008|Boliglån
Oljekrisen i 1973|Bensinrasjonering
Gullrushet i California|Forty-niners
Klondike-gullrushet|Yukon
Den transatlantiske slavehandelen|Trekantfart
Slaveriets avskaffelse i USA|Trettende tillegg
Underground Railroad|Fluktruter
Trail of Tears|Tvangsforflytning
Den store utvandringen fra Norge|Prærie
Kristningen av Norge|Misjonskonger
Reformasjonen|Teser
Mot-reformasjonen|Trient
Avlatshandelen|Syndsforlatelse
Korstogene|Pilegrimshær
Inkvisisjonen|Kjetteri
Hekseprosessene i Salem|Anklager
Skismaet i 1054|Kirkesplittelse
Konstantinopels fall|1453
Reconquista|Granada
Columbus' atlanterhavskryssing|1492
Vasco da Gamas sjøreise|Kapp-ruten
Magellans jordomseiling|Sund
Leiv Eirikssons Vinlandsferd|Nord-Amerika
Roald Amundsens sørpolsekspedisjon|Hundespann
Nansens Fram-ekspedisjon|Isdrift
Kon-Tiki-ekspedisjonen|Balsaflåte
Shackletons Endurance-ekspedisjon|Elefantøya
Nordvestpassasjen med Gjøa|Arktisk sjøvei
Tutankhamons gravoppdagelse|Forseglet dør
Titanics forlis|Isfjell
Hindenburg-ulykken|Hydrogen
Tsjernobyl-ulykken|Reaktor fire
Fukushima-ulykken|Tsunami
Vesuvs utbrudd i år 79|Askeregn
Krakataus utbrudd i 1883|Trykkbølge
Jordskjelvet i Lisboa i 1755|Allehelgensdag
Den store bybrannen i London|Bakeri
Bybrannen i Ålesund i 1904|Jugendstil
Holocaust|Folkemord
Armeniernes folkemord|Deportasjoner
Folkemordet i Rwanda|1994
Hiroshima-bomben|Enola Gay
Nagasaki-bomben|Fat Man
Pearl Harbor-angrepet|Stillehavsflåten
D-dagen|Normandie
Operasjon Barbarossa|Østfront
Operasjon Market Garden|Broer
Dunkirk-evakueringen|Småbåter
Zimmermann-telegrammet|Mexico
Skuddene i Sarajevo|Erkehertug
Julevåpenhvilen i 1914|Ingenmannsland
Kappløpet om Afrika|Kolonikart
Berlin-konferansen i 1884|Oppdeling
Suezkrisen|Kanal
Oslo-avtalen|Håndtrykk
Langfredagsavtalen|Nord-Irland
Camp David-avtalene|Sinai
Münchenavtalen|Sudetenland
Molotov–Ribbentrop-pakten|Hemmelig protokoll
Nedrustningsavtalen INF|Mellomdistanse
Antarktistraktaten|Forskningsfred
Kyotoprotokollen|Utslippsmål
Montrealprotokollen|Ozon
Første moderne olympiske leker|Athen 1896
Woodstock-festivalen|1969
Live Aid|Wembley
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'fortnite', name: 'Fortnite', icon: 'crosshair',
    description: 'Øya, utstyret, figurene og øyeblikkene.',
    words: entries(`
Jonesy|Snapshot
Peely|Modning
Midas|Berøring
Meowscles|Treningsbenk
Kit|Robotbein
Skye|Ollie
TNTina|Oljeplattform
Brutus|Livvakt
Jules|Mekaniker
Ocean|Redningsbøye
Lynx|Kattedrakt
Drift|Kitsune
Raven|Fjær
Rex|Forhistorisk
Cuddle Team Leader|Klem
Fishstick|Fiskeøyne
Brite Bomber|Enhjørning
Ragnarok|Vikinghjelm
Omega|Rustningslys
Carbide|Oppgradering
Black Knight|Skjoldemblem
Sparkle Specialist|Dansegulv
Renegade Raider|Flyverbriller
Skull Trooper|Beinmaling
Ghoul Trooper|Grønn hud
The Reaper|Leiemorder
The Visitor|Meteoritt
The Scientist|Tung rustning
The Foundation|Statuen
The Paradigm|Pilotdrakt
The Origin|Kubeopphav
The Imagined|Rødt hår
The Order|Tvillingsøster
Dr. Slone|Underjordisk base
The Cube Queen|Pyramide
The Herald|Krom
The Ageless|Citadellet
Kado Thorne|Tidsmaskin
Hope|Undergrunnen
Valeria|Pandoras eske
Montague|Diamant
Oscar|Tiger
Nisha|Duell
Peter Griffin|Snooty Steppes
Zeus|Olympen
Hades|Underverdenen
Cerberus|Tre hoder
Medusa|Slangehår
Megalo Don|Nitro
Rust Lord|Skrothaug
DJ Yonder|Miksebord
DJ Bop|Diskolama
Fable|Rødhette
Dire|Fullmåne
Dusk|Vampyr
Calamity|Cowboyhatt
Giddy-Up|Oppblåsbar
Sun Strider|Livredder
Rook|Kontoragent
Zoey|Godteri
Valor|Helterustning
Teknique|Spraymaling
Battlehawk|Øyelapp
Sledgehammer|Taktisk skjegg
Enforcer|Visir
A.I.M.|Robotjakt
Zenith|Ekspedisjonsdrakt
The Ice King|Frossen trone
The Prisoner|Steinhud
Blackheart|Sjørøverkaptein
Hybrid|Drageskjell
Ember|Glødende øyne
Luxe|Gulltattoo
Sentinel|Robothøne
Rox|Holografisk
Vendetta|Digital maske
Singularity|Hvelvvakt
Catalyst|Revehale
Y0ND3R|Lydanlegg
8-Ball|Biljard
Rippley|Blå gelé
Bushranger|Løvverk
Fennix|Store ører
Doggo|Hundeskål
Beef Boss|Olivenpinne
Tomatohead|Restaurantmascot
Bao Bros|Dampkurv
Mancake|Sirup
Lexa|Animeansikt
Menace|Gladiator
Kondor|Åndemaske
Guff|Dunete
Fabio Sparklemane|Frokostblanding
Toona Fish|Blekk
Gumbo|Tyggegummiautomat
Haven|Dyremasker
Klombo|Blåsehull
Loot Llama|Piñata
flopper|Fiskestim
Slurpfish|Blå restitusjon
Small Fry|Åpent vann
Shield Fish|Blå måler
Jellyfish|Elektrisk kur
Thermal Fish|Varmesyn
Rift Fish|Himmelhopp
Zero Point Fish|Fasesprang
Hop Flopper|Lav tyngdekraft
Cuddle Fish|Nærhetseksplosjon
Midas Flopper|Gullutstyr
Vendetta Flopper|Motstandersøk
Mythic Goldfish|Kastetrofé
banana|Proviantkasse
Apple|Frukthage
Coconut|Palmetre
Pepper|Fartsrus
Corn|Åker
Cabbage|Bladhode
Mushroom|Skogbunn
Slap Berry|Utholdenhet
Klomberry|Dinosaurmat
Meat|Jaktbytte
Shield Potion|Blå flaske
Small Shield Potion|Halv grense
Slurp Juice|Langsom påfylling
Chug Jug|Lang drikkepause
Chug Splash|Gruppesprut
Chili Chug Splash|Fartsdusj
Slap Juice|Oransje energi
Flowberry Fizz|Svevende sprut
Med-Mist|Sprayboks
Guzzle Juice|Avbrutt kur
Med Kit|Hvit koffert
Bandage|Sårvikling
Bandage Bazooka|Lagdoktor
Shield Keg|Felles påfyll
Shield Bubble|Kuppelvern
Cozy Campfire|Varmepause
Pizza Party|Deling
Ice Cream Cone|Sommerrestitusjon
Birthday Cake|Feiring
pump|Ladegrep
Tactical Shotgun|Raske nærskudd
Double Barrel Shotgun|To patroner
Combat Shotgun|Trang spredning
Charge Shotgun|Hold inne
Lever Action Shotgun|Bøylegrep
Dragon's Breath Shotgun|Brannsalve
Maven Auto Shotgun|Automatisk nærkamp
Havoc Pump Shotgun|Hvelvbytte
Drum Shotgun|Magasintrommel
Assault Rifle|Allround
Burst Assault Rifle|Skuddsalve
Heavy Assault Rifle|Kalashnikov
Infantry Rifle|Presisjonsskudd
Scoped Assault Rifle|Zoom
MK-Seven Assault Rifle|Rød prikk
Ranger Assault Rifle|Rolig takt
Striker Burst Rifle|Toskuddsalve
Red-Eye Assault Rifle|Siktepunktsglass
Flapjack Rifle|Roterende magasin
Twin Mag Assault Rifle|Rask ombytting
Tactical Assault Rifle|Kort avstand
Minigun|Oppspinning
Light Machine Gun|Vedvarende ild
Submachine Gun|Høy skuddtakt
Suppressed SMG|Dempet lyd
Stinger SMG|Byggpress
Combat SMG|Rekyl
Twin Mag SMG|Dobbelt magasin
Rapid Fire SMG|Ammunisjonssluk
Drum Gun|Mafiatrommel
Pistol|Sidevåpen
Revolver|Tønne
Hand Cannon|Kraftig kaliber
Flint-Knock Pistol|Rekylhopp
Dual Pistols|Begge hender
Shadow Tracker|Treffmerking
Lock On Pistol|Målsirkel
Mammoth Pistol|Enkeltskudd
Bolt-Action Sniper Rifle|Lading mellom skudd
Heavy Sniper Rifle|Veggbryter
Hunting Rifle|Uten kikkertsikte
Storm Scout|Neste sirkel
Rail Gun|Ladet stråle
DMR|Mellomdistanse
Cobra DMR|Halvautomatisk
Boom Sniper Rifle|Klebende eksplosjon
Rocket Launcher|Prosjektilbane
Grenade Launcher|Sprettbomber
Quad Launcher|Fire løp
Snowball Launcher|Vinterprosjektil
Egg Launcher|Påskesalve
Anvil Rocket Launcher|Kjøretøymål
Guided Missile|Fjernstyring
Firework Flare Gun|Himmelmerking
Flare Gun|Avslørende lys
Harpoon Gun|Innspoling
Fishing Rod|Snøre
Grappler|Sugekopp
Grapple Glove|Svingrytme
Grapple Blade|Hekt og hugg
Kinetic Blade|Dash
Shockwave Hammer|Spretthopp
Kinetic Boomerang|Returbane
Infinity Blade|Polar Peak
Sideways Scythe|Sveip
Ballistic Shield|Pistolvern
Chains of Hades|Inntrekking
Nitro Fists|Slagdrift
Spider-Man's Web Shooters|Håndledd
ODM Gear|Gasskabler
Kamehameha|Energistråle
Deku's Smash|Vindstøt
Thunderbolt of Zeus|Svevende kast
Wings of Icarus|Stupangrep
Lightsaber|Blokkering
E-11 Blaster Rifle|Imperiet
Captain America's Shield|Rikosjett
Doctor Doom's Arcane Gauntlets|Grønne prosjektiler
Silver Surfer's Board|Kosmisk flukt
Wolverine's Claws|Nærkampheling
Iron Man's Unibeam|Bryststråle
Grenade|Nedtelling
Clinger|Klistrefeste
Stink Bomb|Gassky
Boogie Bomb|Tvungen dans
Impulse Grenade|Dyttpuls
Shockwave Grenade|Trygg utskytning
Port-A-Fort|Øyeblikkelig høyde
Port-A-Fortress|Ferdig borg
Port-A-Bunker|Lav dekning
Rift-To-Go|Nødutgang
Junk Rift|Fallende skrot
Bush|Bærbar kamuflasje
Sneaky Snowman|Vinterforkledning
Cardboard Box|Pakkeskjul
Creepin' Cardboard|Snikepapp
Remote Explosives|Utløser
Dynamite|Lunte
Boom Box|Byggødeleggende lyd
Firefly Jar|Gnister
Fire Trap|Flammekorridor
Damage Trap|Veggpigger
Launch Pad|Luftrotasjon
Bouncer|Fallvern
Crash Pad|Luftpute
Chiller|Glatte føtter
Chiller Grenade|Frossent fraspark
Shadow Bomb|Usynlig klatring
Smoke Grenade|Siktgardin
Recon Scanner|Avsløringspuls
Falcon Scout|Fjernstyrt fugl
Dial-A-Drop|Leveringsvalg
Supply Drop|Ballonglast
chest|Gyllen glød
Rare Chest|Blått skrin
Ammo Box|Grønn beholder
Cooler|Kald oppbevaring
Vending Machine|Gullhandel
Upgrade Bench|Bedre sjeldenhet
Reboot Van|Andre sjanse
Reboot Card|Lagkameratminne
Gold Bars|Betaling
Victory Crown|Forsvare seieren
Victory Royale|Siste overlevende
Battle Bus|Avgang
Glider|Kontrollert fall
Pickaxe|Materialhøsting
Back Bling|Ryggpynt
Emote|Feiring
Wrap|Overflatemønster
V-Bucks|Varebutikk
Battle Pass|Belønningssti
Battle Stars|Opplåsing
Storm|Sirkelpress
Storm Surge|Skadekrav
Overshield|Selvpåfyll
Siphon|Eliminasjonshelse
Mantling|Kantgrep
Sliding|Lav fart
Tactical Sprint|Utholdenhetsmåler
Turbo Building|Hold byggknappen
Edit|Endre ruter
Box Fight|Trange vegger
High Ground|Høydefordel
Zero Build|Terrengdekning
Team Rumble|Lagpoeng
Creative|Øykode
Save the World|Husks
Fortnite Festival|Notefelt
Rocket Racing|Veggracing
LEGO Fortnite|Klossebosetting
Fortnite Reload|Tilbake med laget
Fortnite OG|Tilbakeblikk
FNCS|Mesterskap
Battle Lab|Eksperimentøya
The Floor Is Lava|Stigende varme
50v50|To hærer
Solid Gold|Legendarisk bytte
One Shot|Lav gravitasjon
Food Fight|Mascotforsvar
Disco Domination|Danseplasser
Tilted Towers|Klokketårn
Pleasant Park|Fotballbane
Retail Row|Handlegate
Salty Springs|Forstad
Greasy Grove|Burgerrestaurant
Loot Lake|Midtøy
Dusty Depot|Lagertrio
Dusty Divot|Krater
Tomato Town|Pizzahode
Tomato Temple|Steinritual
Wailing Woods|Labyrintskog
Lonely Lodge|Utkikkstårn
Moisty Mire|Filmsett
Anarchy Acres|Låver
Fatal Fields|Kornåker
Flush Factory|Toalettlager
Snobby Shores|Luksushus
Haunted Hills|Gravplass
Junk Junction|Bilvrak
Lucky Landing|Kirsebærtre
Risky Reels|Utekino
Paradise Palms|Ørkenhotell
Lazy Links|Golfbane
Lazy Lagoon|Piratskip
Polar Peak|Isslott
Frosty Flights|Flyhangarer
Happy Hamlet|Alpelandsby
Shifty Shafts|Gruveganger
Sunny Steps|Trappepyramider
Pressure Plant|Vulkanbygging
Neo Tilted|Fremtidsby
Mega Mall|Kjøpesenter
Starry Suburbs|Fallende stjerner
Gotham City|Mørke hustak
Steamy Stacks|Kjøletårn
Slurpy Swamp|Helsefabrikk
Weeping Woods|Campinghytter
Misty Meadows|Brostein
Lazy Lake|Moderne villaer
Dirty Docks|Kraner
Sweaty Sands|Strandpromenade
Holly Hedges|Hekker
Craggy Cliffs|Fiskerestaurant
Frenzy Farm|Låvegård
The Agency|Midtbase
The Yacht|Luksusdekk
The Rig|Havplattform
The Shark|Kjeftinngang
The Grotto|Grottebase
The Authority|Mørke murer
Catty Corner|Kit-basen
Coral Castle|Undervannsruin
Doom's Domain|Truet småby
Stark Industries|Robotvakter
Colossal Coliseum|Sandarena
Stealthy Stronghold|Jungelinnhegning
Hunter's Haven|Dusørboliger
The Spire|Sentralspir
Boney Burbs|Beinkonstruksjon
Colossal Crops|Primitiv åker
Corny Complex|Skjult base
Believer Beach|Alienfest
Holly Hatchery|Lavgravitasjonshager
The Convergence|Kubemønster
Sanctuary|Syverbasen
The Daily Bugle|Aviskrater
Logjam Lumberyard|Sagbruk
Sleepy Sound|Kystboliger
Covert Cavern|Fjellbase
Command Cavern|IO-hovedkvarter
Synapse Station|Ørkenlaboratorium
Reality Falls|Sopplandskap
Rave Cave|Dansefjell
Chonker's Speedway|Ørkenbane
Cloudy Condos|Svevende boliger
Chrome Crossroads|Metallisk kryss
Shimmering Shrine|Blank helligdom
The Citadel|Ridderborg
Anvil Square|Middelaldertorg
Frenzy Fields|Høyballer
Slappy Shores|Energifabrikk
Brutal Bastion|Snøfestning
Faulty Splits|Bowlinghall
Shattered Slabs|Steinbrudd
Breakwater Bay|Kystborg
MEGA City|Neonbaner
Steamy Springs|Varme kilder
Kenjutsu Crossing|Dojobygg
Knotty Nets|Fiskevær
Rumble Ruins|Jungeltempel
Creeky Compound|Forskningsleir
Shady Stilts|Trehytter
Eclipsed Estate|Vampyrvilla
Relentless Retreat|Halvmåneøy
Sanguine Suites|Rødt hotell
Snooty Steppes|Kystherskap
Lavish Lair|Tigerpalass
Reckless Railways|Togstasjon
Grand Glacier|Snøhotell
Fencing Fields|Vingård
Mount Olympus|Gudefjell
The Underworld|Grønt vann
Grim Gate|Vokterport
Brawler's Battleground|Krigerarena
Nitrodrome|Bilbrøl
Brutal Beachhead|Strandet skip
Chapter 1|Originaløya
Chapter 2|Svømming
Chapter 3|Undersiden
Chapter 4|Sammensatt øy
Chapter 5|Togreisen
Season X|B.R.U.T.E.
Zero Crisis Finale|Virkelighetsbølger
The End|Svart hull
The Device|Stormbarriere
Operation: Sky Fire|Moderskip
Collision|Mechretur
Fracture|Øyfragmenter
The Big Bang|Galakser
Astronomical|Gigantisk konsert
Rift Tour|Musikkreise
The Final Showdown|Monsterduell
Butterfly Event|Hvit mellomverden
The Unvaulting|Hvelvavstemning
Zero Point|Virkelighetskjerne
The Loop|Gjentakelse
The Seven|Virkelighetsvern
Imagined Order|Kontrollrom
The Last Reality|Kubeinvasjon
The Nothing|Tomrom
Kevin the Cube|Lilla runer
Loot Island|Svevende premie
Reality Tree|Lysende krone
Chrome Splash|Metallflyt
Hop Rocks|Kraterhopp
Shadow Stones|Spøkelsesform
Alien Nanites|Tyngdekube
Inflate-A-Bull|Oppblåsbar ku
Grab-itron|Gjenstandskasting
Prop-ifier|Tingforkledning
Alien Parasite|Hodepassasjer
Raptor|Eggklekking
Wolf|Flokk
Boar|Riding
Chicken|Svevehjelp
Loot Shark|Finnefare
Crow|Flygende bytte
Supply Drone|Svevende pakke
Guardian Tower|Spiraltrapp
Sideways Anomaly|Monsterboble
Caretaker|Kjempemonster
Cube Assassin|Mørk duell
Husk|Stormvesen
Taker|Svevende fiende
Smasher|Byggknuser
Lobber|Kastefiende
Flinger|Fiendekaster
Storm Shield|Basevern
ATK|Golfkart
Quadcrasher|Frontplog
Shopping Cart|Trilletur
Driftboard|Svevebrett
The Baller|Glasskule
X-4 Stormwing|Dobbeltdekker
B.R.U.T.E.|Tosetersrobot
Choppa|Rotor
Motorboat|Elveraketter
Whiplash|Sportsbil
Mudflap|Lastebil
Bear|Pickup
Prevalent|Sedan
Trail Thrasher|Terrengsykkel
Rogue Bike|Futuristisk motorsykkel
Nitro Drifter|Skrensing
UFO|Traktorstråle
Mounted Turret|Stasjonær ild
Siege Cannon|Menneskeprosjektil
Cow Catcher|Frontbeskyttelse
Chonkers Tires|Terrenggrep
Repair Torch|Sveising
Gas Can|Etterfylling
Octane|Boostbil
Armored Battle Bus|Mobil festning
`)
  });
})();
