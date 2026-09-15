// Hvert par er skrevet for hånd: ett ekte oppslagsord og et indirekte, men relevant hint.
(() => {
  const words = (text) => text.trim().split('\n').map((line) => {
    const [word, hint] = line.trim().split('|');
    return { word, hint };
  });
  globalThis.IMPOSTER_PACKS ??= [];
  globalThis.IMPOSTER_PACKS.push({
    id: 'movies', name: 'Filmer', icon: 'film',
    description: 'Store historier, små ledetråder.',
    words: words(`
Titanic|Klasseforskjeller
Avatar|Tilhørighet
Star Wars: Et nytt håp|Arv
Jurassic Park|Innesperring
Harry Potter og de vises stein|Utvelgelse
Ringenes herre: Ringens brorskap|Fristelse
The Matrix|Oppvåkning
Forrest Gump|Tilfeldigheter
Toy Story|Utskiftning
Løvenes konge|Ansvar
Frost|Avstand
Shrek|Fordommer
Spider-Man|Ansvarsfølelse
Batman Begins|Frykt
Superman|Forkledning
Iron Man|Samvittighet
The Avengers|Samarbeid
Black Panther|Isolasjon
Joker|Utenforskap
Barbie|Selvbilde
Oppenheimer|Ettervirkninger
Interstellar|Løfte
Inception|Tvil
Gladiator|Hevn
Pirates of the Caribbean: The Curse of the Black Pearl|Gjeld
Jakten på den forsvunne skatten|Utgravning
Casino Royale|Innsats
Mission: Impossible|Mistanke
Top Gun|Konkurranse
Rocky|Utholdenhet
The Karate Kid|Tålmodighet
Home Alone|Uventet ansvar
The Grinch|Hjertelag
Oppdrag Nemo|Overbeskyttelse
Cars|Omkjøring
Coco|Erindring
Vaiana|Kall
Aladdin|Fasade
Mulan|Plikt
Skjønnheten og udyret|Gjensidighet
Gudfaren|Lojalitet
Haisommer|Sommergjester
E.T.|Hjemlengsel
Tilbake til fremtiden|Følgefeil
Ghostbusters|Oppdrag
Men in Black|Hukommelse
The Hunger Games|Ulikhet
Twilight|Forbudt forelskelse
Dune|Ressurskamp
The Super Mario Bros. Movie|Rørleggerarbeid
The Dark Knight|Dilemma
Fight Club|Søvnløshet
Pulp Fiction|Tilfeldig møte
Goodfellas|Tysting
Scarface|Overmot
Frihetens regn|Tålmodig håp
Redd menig Ryan|Offer
Braveheart|Opprør
Troja|Sårbarhet
King Kong|Fangenskap
Godzilla|Ødeleggelse
Transformers|Kamuflasje
The Fast and the Furious|Infiltrasjon
Mad Max: Fury Road|Flukt
John Wick|Sorg
Die Hard|Julebesøk
The Terminator|Forutbestemmelse
Alien|Karantene
Predator|Jaktbytte
Blade Runner|Menneskelighet
The Martian|Improvisasjon
Gravity|Festepunkt
Arrival|Språkforståelse
A Quiet Place|Forsiktighet
It|Barndomsfrykt
Scream|Sjangerkunnskap
Halloween|Barnevakt
The Conjuring|Innflytting
Saw|Valgsituasjon
The Ring|Tidsfrist
Get Out|Familiebesøk
La La Land|Ambisjoner
Mamma Mia!|Farskap
Grease|Sommerflørt
Mean Girls|Klikker
Paddington|Marmelade
Wonka|Oppskrift
Elf|Adopsjon
Coraline|Knapper
Kung Fu Panda|Selvtillit
Dragetreneren|Tillit
Madagaskar|Dyrehage
Istid|Forflytning
Ratatouille|Smakssans
WALL-E|Opprydding
Se opp|Løsrivelse
Innsiden ut|Omstilling
Soul|Livsgnist
Encanto|Forventninger
Zootropolis|Stereotypier
Big Hero 6|Omsorg
Rive-Rolf|Anerkjennelse
To på rømmen|Beskyttelse
Modig|Selvbestemmelse
De utrolige|Familiebalanse
Monsterbedriften|Latter
Legenden om Narnia: Løven, heksa og klesskapet|Terskel
Percy Jackson og lyntyven|Anklage
The Maze Runner|Orientering
Divergent|Klassifisering
Fabeldyr og hvor de er å finne|Koffert
Hobbiten: En uventet reise|Komfortsone
Creed|Ettermæle
Space Jam|Talenttyveri
The Hangover|Hukommelsestap
Superbad|Vennskapsprøve
Deadpool|Selvironi
Logan|Omsorgsbyrde
Doctor Strange|Kontrolltap
Thor: Ragnarok|Hjemsted
Guardians of the Galaxy|Utskudd
Captain America: The First Avenger|Prøveprosjekt
Aquaman|Arvekrav
Wonder Woman|Idealisme
Justice League|Gjenforening
Venom|Samliv
Minions|Sjefsjakt
Grusomme meg|Farsrolle
Sing|Audition
LEGO-filmen|Instruksjoner
Pokémon Detective Pikachu|Sporleting
Sonic the Hedgehog|Fartsgrense
Ready Player One|Påskeegg
Natt på museet|Nattevakt
The Mummy|Forsegling
Knives Out|Arveoppgjør
Baby Driver|Tinnitus
Whiplash|Perfeksjonisme
The Social Network|Eierskap
Bohemian Rhapsody|Tilhørighet
Elvis|Manager
8 Mile|Sceneskrekk
The Wolf of Wall Street|Grådighet
The Revenant|Overlevelsesvilje
Cast Away|Selskap
Life of Pi|Fortellerkunst
Parasitt|Kjeller
The Truman Show|Overvåkning
The Terminal|Mellomrom
Casablanca|Avskjed
Psycho|Motell
The Shining|Skrivesperre
Taxi Driver|Ensomhet
The Goonies|Tvangsflytting
The Breakfast Club|Gjensitting
The Princess Bride|Fortellerramme
Jumanji|Turrekkefølge
School of Rock|Vikar
The Mask|Hemninger
Rush Hour|Språkbarriere
Flåklypa Grand Prix|Oppfinnsomhet
Kon-Tiki|Bevisføring
Max Manus|Motstand
Kongens nei|Samvittighetsvalg
Trolljegeren|Dokumentarteam
Troll|Oppvåkning i fjellet
Hodejegerne|Dobbelliv
Bølgen|Varseltegn
Skjelvet|Etterdønninger
Verdens verste menneske|Veivalg
Reprise|Forfatterdrøm
Oslo, 31. august|Tilbakekomst
Elling|Mestring
Buddy|Videokamera
Død snø|Hytteferie
Fritt vilt|Forlatt hotell
Kampen om Narvik|Jernmalm
De uskyldige|Sommergård
Syk pike|Oppmerksomhet
Børning|Veddemål
Lange flate ballær|Supportertur
Kurt blir grusom|Lottogevinst
Kaptein Sabeltann og skatten i Lama Rama|Forlis
Jul i Flåklypa|Snømaskin
Askeladden: I Dovregubbens hall|Uventet helt
An American in Paris|Staffeli
Singin' in the Rain|Lydskifte
The Sound of Music|Guvernante
West Side Story|Territorium
Mary Poppins|Barnepass
The Wizard of Oz|Hjemvei
Citizen Kane|Ettermæle
12 Angry Men|Rimelig tvil
Vertigo|Besettelse
Rear Window|Nysgjerrighet
North by Northwest|Feil identitet
Some Like It Hot|Forkledning
Dr. Strangelove|Kommandokjede
2001: A Space Odyssey|Utviklingssprang
A Clockwork Orange|Betinging
One Flew Over the Cuckoo's Nest|Institusjon
The Silence of the Lambs|Avhør
Se7en|Mønster
The Sixth Sense|Uferdige saker
Memento|Notater
Eternal Sunshine of the Spotless Mind|Glemsel
The Grand Budapest Hotel|Concierge
Moonrise Kingdom|Rømning
Fantastic Mr. Fox|Forsyninger
Isle of Dogs|Karanteneøy
Little Miss Sunshine|Skjønnhetskonkurranse
The Devil Wears Prada|Assistentjobb
The Pursuit of Happyness|Praksisplass
Slumdog Millionaire|Livserfaring
The King's Speech|Taletrening
The Imitation Game|Kryptering
Hidden Figures|Beregninger
Good Will Hunting|Uutnyttet evne
Dead Poets Society|Livsmot
Rain Man|Brødreskap
Amélie|Små gjerninger
Spirited Away|Navnetap
My Neighbor Totoro|Venteplass
Princess Mononoke|Naturkonflikt
Howl's Moving Castle|Aldring
Your Name|Identitetsbytte
Akira|Ukontrollert kraft
Everything Everywhere All at Once|Alternative valg
The Banshees of Inisherin|Vennskapsbrudd
The Holdovers|Juleferie
Past Lives|Gjensyn
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'tv', name: 'TV-serier', icon: 'tv',
    description: 'Fra sofafavoritter til store universer.',
    words: words(`
Friends|Samboerskap
The Office|Mellomledelse
Stranger Things|Savnetmelding
Game of Thrones|Arvefølge
Breaking Bad|Dobbeltliv
Better Call Saul|Samvittighetsgrense
The Simpsons|Smultringer
Family Guy|Klipp til siden
South Park|Satire
SvampeBob Firkant|Arbeidsiver
The Mandalorian|Omsorgsoppdrag
Wednesday|Utenforskap
Squid Game|Gjeld
The Last of Us|Immunitet
The Walking Dead|Gruppedynamikk
Peaky Blinders|Bookmaker
Sherlock|Observasjon
Doctor Who|Regenerering
House|Diagnosejakt
Grey's Anatomy|Turnus
Modern Family|Bonusfamilie
Brooklyn Nine-Nine|Kollegialt kaos
How I Met Your Mother|Tilbakeblikk
The Big Bang Theory|Sosiale koder
Seinfeld|Hverdagsirritasjon
Lost|Tilfeldig fellesskap
Prison Break|Blåkopi
Papirhuset|Forhandling
Dark|Slektskap
The Crown|Pliktfølelse
Bridgerton|Omdømme
Vikings|Erobring
The Witcher|Skjebnebånd
Narcos|Smugling
Loki|Tidsavvik
WandaVision|Sorgbearbeidelse
Daredevil|Rettferdighet
Arrow|Botsøvelse
The Flash|Tidslinje
Supernatural|Brødrebånd
Riverdale|Småbyhemmeligheter
Gossip Girl|Rykter
Outer Banks|Skattejakt
Cobra Kai|Rivaler
The Boys|Maktmisbruk
Invincible|Farsforventninger
Arcane|Klassekløft
One Piece|Mannskap
The Bear|Arbeidspress
House of the Dragon|Arvestrid
Lucifer|Selvinnsikt
You|Besettelse
Sex Education|Rådgivning
Élite|Privatskole
The Umbrella Academy|Adopsjon
Black Mirror|Teknologiangst
Ozark|Hvitvasking
Mindhunter|Atferdsmønster
True Detective|Mørke spor
Fargo|Dårlige valg
The Sopranos|Terapi
The Wire|Avlytting
Succession|Arvekamp
Yellowstone|Eiendomsgrenser
Ted Lasso|Optimisme
Severance|Skillelinje
The White Lotus|Privilegier
Euphoria|Ungdomspress
The Handmaid's Tale|Tvang
The Good Place|Etisk regnskap
Parks and Recreation|Lokaldemokrati
Community|Studiegruppe
New Girl|Innflytter
The Fresh Prince of Bel-Air|Miljøskifte
Full House|Onkler
The Vampire Diaries|Trekantdrama
Teen Wolf|Forvandling
Pretty Little Liars|Anonyme trusler
Glee|Skolekor
Hannah Montana|Hemmelig identitet
iCarly|Nettpublikum
Victorious|Scenekunstskole
Gravity Falls|Sommermysterier
Adventure Time|Merkelig vennskap
Regular Show|Parkjobb
Steven Universe|Arvet oppgave
Avatar: The Last Airbender|Balanse
The Legend of Korra|Åndeverden
Ben 10|Armbånd
Rick and Morty|Alternative virkeligheter
Futurama|Nedfrysing
Star Wars: The Clone Wars|Lojalitetsbrudd
Andor|Radikalisering
Ahsoka|Læremester
Moon Knight|Identitetsbrudd
Hawkeye|Lærling
She-Hulk: Attorney at Law|Arbeidsliv
Gotham|Opprinnelser
Smallville|Oppvekst
Supergirl|Søsterbånd
The Rookie|Karriereskifte
NCIS|Marineetterforskning
CSI: Crime Scene Investigation|Sporprøve
Criminal Minds|Profilering
Bones|Beinrester
Castle|Forfatterfantasi
Suits|Bløff
White Collar|Ankellenke
The Blacklist|Byttehandel
Westworld|Bevissthet
Mr. Robot|Fremmedgjøring
Silicon Valley|Oppstartsbedrift
Skam|Tilhørighet
Exit|Overskuddsliv
Lilyhammer|Vitnebeskyttelse
Vikingane|Høflighetsproblemer
Side om side|Naboskap
Kongen befaler|Oppgaveløsning
Maskorama|Identitetsjakt
Farmen|Gårdsdrift
Mesternes mester|Comeback
Kompani Lauritzen|Mestringsgrense
Top Gear|Prøvekjøring
MasterChef|Smaksdom
Hell's Kitchen|Kjøkkenpress
MythBusters|Etterprøving
Bluey|Fantasilek
Peppa Gris|Sølepytter
PAW Patrol|Utrykning
Pokémon|Samling
Naruto|Anerkjennelse
Dragon Ball Z|Styrkeprøve
Attack on Titan|Beleiring
Death Note|Maktfristelse
Demon Slayer|Søskenomsorg
Jujutsu Kaisen|Forbannelser
My Hero Academia|Evneskole
Bleach|Etterliv
Fullmetal Alchemist: Brotherhood|Bytteforhold
Tokyo Ghoul|Sult
Chainsaw Man|Gjeldsslaveri
Cowboy Bebop|Dusører
Shameless|Omsorgssvikt
The Queen's Gambit|Mønsterblikk
The Sandman|Fangenskap
Good Omens|Usannsynlig allianse
American Horror Story|Antologi
Only Murders in the Building|Nabomysterium
The X-Files|Skepsis
Twin Peaks|Småbyfasade
Buffy the Vampire Slayer|Skolebalanse
Angel|Forsoning
Charmed|Søsterpakt
Xena: Warrior Princess|Botsreise
Hercules: The Legendary Journeys|Styrkedåd
Battlestar Galactica|Mistenksomhet
Stargate SG-1|Portreise
Star Trek|Utforskning
Star Trek: The Next Generation|Diplomati
Star Trek: Deep Space Nine|Grensestasjon
Star Trek: Voyager|Hjemreise
Star Trek: Enterprise|Pionertid
Firefly|Smuglerliv
The Expanse|Ressurskonflikt
Foundation|Langtidsplan
Silo|Informasjonskontroll
Fallout|Tilfluktsrom
For All Mankind|Kappløp
The Orville|Romkolleger
Person of Interest|Forutsigelse
Fringe|Grensevitenskap
Orphan Black|Kopier
Sense8|Felles bevissthet
Heroes|Oppdagede evner
The 100|Ny bosetning
Once Upon a Time|Glemte minner
Merlin|Skjult evne
His Dark Materials|Parallelle verdener
Locke & Key|Familiearv
A Series of Unfortunate Events|Formynderskap
The OA|Nær døden
Russian Doll|Gjentakelse
Upload|Digitalt etterliv
The Leftovers|Uforklarlig tap
Station Eleven|Kulturarv
Watchmen|Maskearv
The Punisher|Hevndrift
Jessica Jones|Traumebearbeiding
Luke Cage|Nabolagsvern
Iron Fist|Arvet formue
Legion|Virkelighetsbrudd
Doom Patrol|Uvanlig fellesskap
The Penguin|Maktvakuum
Agatha All Along|Prøvelser
Happy Valley|Lokalt ansvar
Broadchurch|Kystsamfunn
Luther|Besettende etterforsker
Line of Duty|Intern gransking
The Fall|Forfølgelse
Bodyguard|Beskyttelsesoppdrag
Slow Horses|Utstøtte agenter
The Night Manager|Infiltrert luksus
Killing Eve|Gjensidig fascinasjon
Homeland|Dobbeltspill
The Americans|Nabofasade
24|Tidsnød
Designated Survivor|Beredskapsplan
The West Wing|Rådgiverstab
House of Cards|Maktspill
Veep|Politisk pinlighet
The Newsroom|Redaksjon
Mad Men|Reklamefasade
Downton Abbey|Klassesamfunn
Outlander|Tidsforskyvning
Poldark|Hjemkomst
The Tudors|Ekteskapspolitikk
Rome|Republikkens slutt
Band of Brothers|Samhold
The Pacific|Øykrig
Chernobyl|Ansvarsfraskrivelse
Dopesick|Avhengighetskrise
Maid|Økonomisk kamp
Unbelievable|Troverdighet
When They See Us|Feilanklage
Fleabag|Selvsabotasje
After Life|Sorg
Atlanta|Musikkambisjon
Abbott Elementary|Ressursmangel
Superstore|Varehusliv
Schitt's Creek|Statusfall
Arrested Development|Familieformue
30 Rock|Bak kulissene
Scrubs|Læringskurve
Cheers|Stamgjester
Frasier|Radioterapi
The IT Crowd|Kjellerkontor
Blackadder|Opportunisme
Fawlty Towers|Hotelltabber
Mr. Bean|Hverdagslogikk
Keeping Up Appearances|Fasadejag
The Vicar of Dibley|Menighetsliv
Mot i brøstet|Uvanlige samboere
Karl & Co|Leiegård
Dag|Samlivsterapeut
Hjem til jul|Kjærestepress
Rådebank|Bilfellesskap
Heimebane|Trenergarderobe
Lykkeland|Oljeeventyr
Makta|Partistrid
Kampen for tilværelsen|Arbeidsvandring
Pørni|Omsorgskabal
Kampen om tungtvannet|Sabotasje
Okkupert|Energipolitikk
Beforeigners|Tidsflyktninger
Wisting|Larviksetterforskning
Broen|Grensesamarbeid
Forbrytelsen|Lang etterforskning
Borgen|Regjeringskabal
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'actors', name: 'Skuespillere', icon: 'star',
    description: 'Kjente ansikter med hint fra rollene deres.',
    words: words(`
Leonardo DiCaprio|Isvann
Brad Pitt|Såpe
Tom Cruise|Sikkerhetsline
Tom Hanks|Volleyball
Morgan Freeman|Fengselsbibliotek
Denzel Washington|Treningsdag
Samuel L. Jackson|Øyelapp
Robert De Niro|Drosje
Al Pacino|Gudbarn
Jack Nicholson|Hotellgang
Anthony Hopkins|Dannet middag
Harrison Ford|Pisk
Keanu Reeves|Rød pille
Will Smith|Minnevisker
Johnny Depp|Kompass
Robert Downey Jr.|Reaktor
Chris Evans|Frossen soldat
Chris Hemsworth|Verdighet
Chris Pratt|Danseutfordring
Mark Ruffalo|Sinne
Jeremy Renner|Presisjon
Paul Rudd|Krymping
Ryan Reynolds|Fjerde vegg
Hugh Jackman|Klør
Christian Bale|Nattevakt
Heath Ledger|Ansiktsmaling
Joaquin Phoenix|Trappetrinn
Ben Affleck|Forsvunnet kone
Matt Damon|Potetdyrking
George Clooney|Kasino
Bradley Cooper|Talentspeider
Ryan Gosling|Plastverden
Jake Gyllenhaal|Fjellbeite
Tobey Maguire|Veggfeste
Andrew Garfield|Edderkoppnett
Tom Holland|Ung nettbruker
Zendaya|Ørkenfolket
Timothée Chalamet|Krydder
Austin Butler|Hoftebevegelse
Adam Driver|Maskefall
Oscar Isaac|Flyverjakke
Pedro Pascal|Surrogatfar
Diego Luna|Opprørscelle
John Boyega|Avhoppet soldat
Daisy Ridley|Skraphandel
Daniel Radcliffe|Lynarr
Rupert Grint|Rødt hår og sjakk
Emma Watson|Bibliotekflid
Robert Pattinson|Glitrende hud
Kristen Stewart|Vampyrforelskelse
Taylor Lautner|Flokkinstinkt
Daniel Craig|Pokerspill
Pierce Brosnan|Spionklokke
Sean Connery|Skotsk agent
Roger Moore|Spionhumor
Timothy Dalton|Hemmelige tjenester
Idris Elba|Baltimoreforretning
Michael B. Jordan|Boksearv
Chadwick Boseman|Vibranium
Forest Whitaker|Ugandisk diktator
Jamie Foxx|Pianobriller
Eddie Murphy|Flere familiemedlemmer
Jim Carrey|Ansiktselastikk
Adam Sandler|Golfkølle
Ben Stiller|Nattejobb
Owen Wilson|Bilnummer
Vince Vaughn|Bryllupssniking
Will Ferrell|Alvekostyme
Steve Carell|Papirsjef
Seth Rogen|Pinlig latter
Jonah Hill|Politiforkledning
Channing Tatum|Dansescene
Zac Efron|Skolemusikal
John Travolta|Discodress
Nicolas Cage|Skattejakt
Bruce Willis|Ventilasjonskanal
Sylvester Stallone|Trappetrening
Arnold Schwarzenegger|Metallskjelett
Jean-Claude Van Damme|Spagat
Jason Statham|Pakkelevering
Dwayne Johnson|Bryterbakgrunn
Vin Diesel|Gatebilfamilie
Paul Walker|Undercoverfører
Jason Momoa|Undervannstrone
Henry Cavill|Hvitt hår
Gal Gadot|Sannhetstau
Margot Robbie|Rulleskøyter
Scarlett Johansson|Spiontrening
Elizabeth Olsen|Sorgmagi
Brie Larson|Kosmisk kraft
Natalie Portman|Ballettsko
Anne Hathaway|Moteredaksjon
Jennifer Lawrence|Pil og opprør
Emma Stone|Jazzdrøm
Emma Roberts|Spøkelsesskole
Emma Thompson|Hushjelpsmagi
Kate Winslet|Halskjede
Cate Blanchett|Alvedronning
Nicole Kidman|Rød mølle
Meryl Streep|Motesjef
Julia Roberts|Handlegater
Sandra Bullock|Bussfart
Angelina Jolie|Arkeologieventyr
Charlize Theron|Ørkenflukt
Jessica Chastain|Pokervert
Amy Adams|Språkforsker
Amy Poehler|Kommunalt engasjement
Tina Fey|TV-redaksjon
Kristen Wiig|Brudepikekaos
Melissa McCarthy|Bryllupsgjeng
Rebel Wilson|Koropptak
Reese Witherspoon|Rosa jusstudier
Drew Barrymore|Gjentatt første date
Cameron Diaz|Grønn prinsesse
Lucy Liu|Detektivpartner
Halle Berry|Værkrefter
Whoopi Goldberg|Klosterforkledning
Viola Davis|Advokatundervisning
Octavia Spencer|Kjøkkenhistorier
Taraji P. Henson|Romberegning
Lupita Nyong'o|Dobbeltgjenger
Danai Gurira|Katana
Angela Bassett|Wakandas mor
Regina King|Maskert detektiv
Kerry Washington|Krisehåndtering
Keke Palmer|Fremmed himmel
Florence Pugh|Svensk midtsommer
Saoirse Ronan|Søsterforfatter
Anya Taylor-Joy|Sjakkåpning
Millie Bobby Brown|Tankekraft
Jenna Ortega|Sort skoleuniform
Sadie Sink|Musikkredning
Maisie Williams|Navneliste
Sophie Turner|Nordlig adelsarv
Emilia Clarke|Brannsikkerhet
Lena Headey|Jerntrone
Gwendoline Christie|Ridderslag
Bella Ramsey|Soppimmunitet
Phoebe Waller-Bridge|Kamerablikk
Olivia Colman|Kongekrone
Claire Foy|Ung monark
Helena Bonham Carter|Gotisk eleganse
Judi Dench|Etterretningssjef
Maggie Smith|Streng forvandlingslærer
Julie Andrews|Paraplyreise
Audrey Hepburn|Frokostvindu
Marilyn Monroe|Ventilasjonsrist
Grace Kelly|Bakgårdsutsikt
Elizabeth Taylor|Egyptisk trone
Ingrid Bergman|Avskjedsfly
Katharine Hepburn|Elvebåt
Bette Davis|Teaterrival
Jodie Foster|Kjellersamtale
Sigourney Weaver|Romkatt
Susan Sarandon|Fluktvenninne
Geena Davis|Cabrioletflukt
Winona Ryder|Alfabettapet
Uma Thurman|Gul treningsdrakt
Michelle Pfeiffer|Kattelær
Michelle Yeoh|Vaskeriunivers
Gong Li|Røde lykter
Zhang Ziyi|Flyvende sverd
Maggie Cheung|Kjolemønster
Penélope Cruz|Spanske familiebånd
Salma Hayek|Malerøyenbryn
Sofía Vergara|Colombiansk bonusmor
Ana de Armas|Holografisk kjæreste
Eva Green|Kortspillerens kjæreste
Léa Seydoux|Fransk agentforbindelse
Marion Cotillard|Snurrebassminne
Juliette Binoche|Sjokoladebutikk
Audrey Tautou|Parisiske smågjerninger
Isabelle Huppert|Pianoundervisning
Catherine Deneuve|Paraplybutikk
Monica Bellucci|Matrixverden
Sophia Loren|Krigsrammet mor
Sofia Helin|Broetterforskning
Noomi Rapace|Datainnbrudd
Rebecca Ferguson|Ørkenmorskap
Alicia Vikander|Kunstig intelligens
Liv Ullmann|Bergman-samarbeid
Renate Reinsve|Ubesluttsomhet
Kristine Kujath Thorp|Oppmerksomhetsjag
Ingrid Bolsø Berdal|Fjellhotell
Agnes Kittelsen|Motstandskone
Ane Dahl Torp|Fotballtrener
Ine Marie Wilmann|Fjelltroll
Pia Tjelta|Lykkeland
Cecilie Mosli|Eventyrregissør
Anne Marit Jacobsen|Polarhushjelp
Anne Krigsvoll|Vitnebeskyttelse på Lillehammer
Synnøve Macody Lund|Kunstgalleri
Kristin Scott Thomas|Ørkenromanse
Tilda Swinton|Hvit heks
Frances McDormand|Veikantskilt
Kathy Bates|Forfatterfangenskap
Allison Janney|Presidentens pressestab
Laura Dern|Dinosaurforsker
Laura Linney|TV-livets kone
Sarah Paulson|Skrekkantologi
Sarah Jessica Parker|Storbyspalter
Jennifer Aniston|Kafévenner
Courteney Cox|Orden i leiligheten
Lisa Kudrow|Gatekattvise
David Schwimmer|Dinosaurfag
Matthew Perry|Sarkasme
Matt LeBlanc|Audition
Bryan Cranston|Kjemilærer
Aaron Paul|Bobilpartner
Bob Odenkirk|Advokatreklame
Giancarlo Esposito|Kyllingrestaurant
Jonathan Banks|Parkeringsvakt
Peter Dinklage|Politisk kløkt
Kit Harington|Vintervakt
Richard Madden|Rødt bryllup
Nikolaj Coster-Waldau|Gullhånd
Mads Mikkelsen|Dannet kannibal
Lars Mikkelsen|Russisk maktspill
Viggo Mortensen|Vandrende arving
Ian McKellen|Grå kappe
Patrick Stewart|Stjerneflåte
Christopher Lee|Hvitt tårn
Ian Holm|Eventyrbok
Sean Astin|Lojal gartner
Elijah Wood|Tung byrde
Orlando Bloom|Presis bue
Andy Serkis|Bevegelsesfangst
Hugo Weaving|Klonede agenter
Benedict Cumberbatch|Frakk og deduksjon
Martin Freeman|Hobbithjem
David Tennant|Tidsreisefrakk
Matt Smith|Drageprins
Peter Capaldi|Tidsreisens øyenbryn
Jude Law|Robotelsker
Colin Firth|Stammende konge
Hugh Grant|Bokhandelromanse
Colin Farrell|Hotellforvandling
Brendan Gleeson|Irsk vennskapsbrudd
Brendan Fraser|Gravkammer
Gary Oldman|Flere forkledninger
Ralph Fiennes|Neseløs trollmann
Alan Rickman|Eliksirtime
Tim Roth|Reservoar av mistanke
Christoph Waltz|Flerspråklig avhør
Willem Dafoe|Grønn glidevinge
Wesley Snipes|Vampyrjeger
Mahershala Ali|Omreisende pianist
Daniel Kaluuya|Ubehagelig familiebesøk
Dev Patel|Spørrekonkurranse
Riz Ahmed|Trommeslagerens hørsel
Steven Yeun|Gårdsdrøm
Ke Huy Quan|Belteveske
Jackie Chan|Akrobatisk slåssing
Jet Li|Wushu
Bruce Lee|Nunchaku
Donnie Yen|Wing chun
Chow Yun-fat|Doble pistoler
Tony Leung|Lengselsblikk
Song Kang-ho|Kjellerhemmelighet
Lee Jung-jae|Grønn treningsdress
Gong Yoo|Togevakuering
Shah Rukh Khan|Bollywoodromanse
Aamir Khan|Skolekritikk
Salman Khan|Bollywoodaksjon
Amitabh Bachchan|Dyp hindistemme
Irrfan Khan|Bengalsk båtreise
Omar Sy|Omsorg og vennskap
Jean Reno|Potteplante
Gérard Depardieu|Gallisk styrke
Vincent Cassel|Fransk forstad
Jean Dujardin|Stumfilmstjerne
Javier Bardem|Trykkluft
Antonio Banderas|Maskert fekter
Benicio del Toro|Grensekrig
Gael García Bernal|Motorsykkeldagbok
Diego Boneta|Mexicansk artistrolle
Ricardo Darín|Argentinsk etterforskning
Aksel Hennie|Kunsttyveri
Nicolai Cleve Broch|Motstandskamp
Tobias Santelmann|Flåteekspedisjon
Pål Sverre Hagen|Stillehavsflåte
Kristoffer Joner|Fjordskred
Anders Danielsen Lie|Oslo-gjensyn
Anders Baasmo|Bilturkonkurranse
Trond Fausa Aurvåg|Brysom tilværelse
Atle Antonsen|Samlivsrådgivning
Bjarte Hjelmeland|Nattklubbdiva
Bjørn Sundquist|Nordnorsk stemme
Sven Nordin|Vintervei
Nils Ole Oftebro|Stiklestad
Jakob Oftebro|Dansk flukt
Kåre Conradi|Romersk slave
Jon Øigarden|Finansfasade
Henrik Mestad|Energistatsminister
Thorbjørn Harr|Vikingbror
Kristofer Hivju|Skjegg i snø
Dennis Storhøi|Tretten krigere
Øystein Martinsen|Vikingopprykk
Per Christian Ellefsen|Sosial mestring
Jørgen Langhelle|Antarktisk stasjon
Stellan Skarsgård|Opprørssamler
Alexander Skarsgård|Jungelarving
Bill Skarsgård|Klovnesmil
Joel Kinnaman|Robotpoliti
David Dencik|Svensk etterretning
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'political', name: 'Politiske figurer', icon: 'landmark',
    description: 'Personer fra norsk politikk og verdenshistorien.',
    words: words(`
George Washington|Frivillig maktskifte
John Adams|Uavhengighetsdebatt
Thomas Jefferson|Uavhengighetserklæring
James Madison|Grunnlovsarbeid
James Monroe|Amerikansk interessesfære
John Quincy Adams|Diplomatfamilie
Andrew Jackson|Bankstrid
Martin Van Buren|Panikken i 1837
William Henry Harrison|Svært kort presidentskap
John Tyler|Visepresidentens opprykk
James K. Polk|Vestlig ekspansjon
Zachary Taylor|Generalsadel
Millard Fillmore|Kompromisset i 1850
Franklin Pierce|Kansasstrid
James Buchanan|Løsrivelseskrise
Abraham Lincoln|Frigjøring
Andrew Johnson|Gjenoppbyggingsstrid
Ulysses S. Grant|Unionsuniform
Rutherford B. Hayes|Omstridt opptelling
James A. Garfield|Kort tid i embetet
Chester A. Arthur|Embetsreform
Grover Cleveland|Adskilte perioder
Benjamin Harrison|President som bestefar
William McKinley|Tollvern
Theodore Roosevelt|Nasjonalparker
William Howard Taft|Dommerkappe
Woodrow Wilson|Fjorten punkter
Warren G. Harding|Teapot Dome
Calvin Coolidge|Få ord
Herbert Hoover|Børskrakk
Franklin D. Roosevelt|New Deal
Harry S. Truman|Marshallhjelp
Dwight D. Eisenhower|Invasjonsplanlegging
John F. Kennedy|Måneløfte
Lyndon B. Johnson|Borgerrettslov
Richard Nixon|Opptaksbånd
Gerald Ford|Benådning
Jimmy Carter|Peanøtter
Ronald Reagan|Skuespillerbakgrunn
George H. W. Bush|Kuwaitkrig
Bill Clinton|Saksofon
George W. Bush|Terrorangrep i 2001
Barack Obama|Helsereform
Donald Trump|Eiendomstårn
Joe Biden|Delaware
Kamala Harris|Påtalebakgrunn
Hillary Clinton|Glasstak
Bernie Sanders|Votter
Nancy Pelosi|Representantenes klubbe
Alexandria Ocasio-Cortez|Grønn ny giv
Al Gore|Klimaforedrag
Dick Cheney|Visepresidentmakt
Mike Pence|Indiana
Mitt Romney|Vinterleker i Utah
John McCain|Krigsfangenskap
Robert F. Kennedy|Justisdepartement
Edward Kennedy|Senatsdynasti
Alexander Hamilton|Sentralbank
Benjamin Franklin|Diplomati og oppfinnelser
Frederick Douglass|Abolisjonisme
Martin Luther King Jr.|Borgerrettsmarsj
Rosa Parks|Busssete
Malcolm X|Navneskifte
Susan B. Anthony|Kvinnestemmer
Harvey Milk|San Francisco
Johan Sverdrup|Parlamentarisme
Christian Michelsen|Unionsoppløsning
Fridtjof Nansen|Flyktningpass
Gunnar Knudsen|Konsesjonslover
Einar Gerhardsen|Gjenreisning
Johan Nygaardsvold|Eksilregjering
Per Borten|Koalisjonsbonde
Trygve Bratteli|EU-nederlag
Odvar Nordli|Hedmarksbakgrunn
Kåre Willoch|Markedsåpning
Gro Harlem Brundtland|Bærekraftsrapport
Jan P. Syse|Kort koalisjon
Thorbjørn Jagland|Det norske hus
Kjell Magne Bondevik|Verdikommisjon
Jens Stoltenberg|Rødgrønt samarbeid
Erna Solberg|Blå koalisjon
Jonas Gahr Støre|Utenriksdiplomati
Jørgen Løvland|Unionsskille
Christopher Hornsrud|Kort arbeiderregjering
Carl I. Hagen|Skatteprotest
Anders Lange|Avgiftsmotstand
Siv Jensen|Finansportefølje
Sylvi Listhaug|Innstramming
Ketil Solvik-Olsen|Samferdsel
Trygve Slagsvold Vedum|Distriktsblikk
Ola Borten Moe|Olje og forskning
Liv Signe Navarsete|Sogn
Magnhild Meltveit Kleppa|Veipolitikk
Marit Arnstad|Trøndersk sentrum
Åslaug Haga|Fornybar energi
Per Olaf Lundteigen|Buskerudbonde
Audun Lysbakken|Pappapermisjon
Kristin Halvorsen|Barnehageløfte
Erik Solheim|Fredsmekling
Kirsti Bergstø|Sosial ulikhet
Karin Andersen|Velferdspolitikk
Knut Arild Hareide|Veivalg i sentrum
Dagfinn Høybråten|Røykelov
Valgerd Svarstad Haugland|Kulturdepartement
Trine Skei Grande|Liberal kultur
Guri Melby|Skoleminister
Abid Raja|Kultur og oppvekst
Ola Elvestuen|Klimadepartement
Rasmus Hansson|Naturvern
Lan Marie Berg|Bilfritt sentrum
Une Bastholm|Grønt generasjonsskifte
Arild Hermstad|Etisk forbruk
Bjørnar Moxnes|Rødt lederskap
Marie Sneve Martinussen|Fordelingskamp
Bård Vegar Solhjell|Bistandsdirektorat
Geir Lippestad|Advokat og partistifter
Raymond Johansen|Byrådsledelse
Marianne Borgen|Hovedstadsordfører
Anne Enger|EU-motstand
Trygve Lie|FNs første generalsekretær
Winston Churchill|Krigstaler
Clement Attlee|Britisk velferdsstat
Harold Macmillan|Forandringens vind
Harold Wilson|Åpent universitet
Edward Heath|EF-inntreden
Margaret Thatcher|Privatisering
John Major|Nordirsk fredsprosess
Tony Blair|New Labour
Gordon Brown|Britisk finanskrise
David Cameron|Utmeldingsavstemning
Theresa May|Utmeldingsforhandling
Boris Johnson|Rød buss
Liz Truss|Minibudsjett
Rishi Sunak|Pandemistøtte
Keir Starmer|Britisk påtalemyndighet
Nick Clegg|Koalisjonskompromiss
Nigel Farage|Utmeldingskampanje
Jeremy Corbyn|Venstresving
Nicola Sturgeon|Skotsk selvstyre
Alex Salmond|Skotsk folkeavstemning
Gerry Adams|Sinn Féin
Mary Robinson|Menneskerettigheter
Michael D. Higgins|Poetisk president
Angela Merkel|Fysikkbakgrunn
Helmut Kohl|Gjenforening
Willy Brandt|Knefall
Konrad Adenauer|Vestlig forankring
Helmut Schmidt|Kriser og sigaretter
Gerhard Schröder|Arbeidsmarkedsreform
Olaf Scholz|Hamburg
Joschka Fischer|Joggesko
Otto von Bismarck|Jernkansler
Charles de Gaulle|Femte republikk
François Mitterrand|Louvre-pyramide
Jacques Chirac|Irakkrigsmotstand
Nicolas Sarkozy|Hyperaktiv presidentstil
François Hollande|Sosialistisk maktskifte
Emmanuel Macron|Ny sentrumsbevegelse
Marine Le Pen|Nasjonal samling
Jean-Luc Mélenchon|Fransk venstreopprør
Simone Veil|Abortlov
Robert Schuman|Europeisk kull og stål
Silvio Berlusconi|Medieimperium
Romano Prodi|Olivenkoalisjon
Mario Draghi|Euroforsvar
Giorgia Meloni|Italienske brødre
Matteo Renzi|Grunnlovsavstemning
Giuseppe Conte|Femstjernekoalisjon
Pedro Sánchez|Mistillitsseier
Felipe González|Spansk modernisering
Adolfo Suárez|Demokratisk overgang
Mariano Rajoy|Katalansk konflikt
António Guterres|Flyktningarbeid
Mário Soares|Portugisisk demokrati
Alexis Tsipras|Gjeldsforhandling
Yanis Varoufakis|Gresk finanskrise
Olof Palme|Internasjonal solidaritet
Tage Erlander|Lang svensk regjeringstid
Carl Bildt|Balkanmekling
Göran Persson|Budsjettsanering
Fredrik Reinfeldt|Arbeidslinje
Stefan Löfven|Sveiserbakgrunn
Magdalena Andersson|Svensk finansdepartement
Mette Frederiksen|Minkbeslutning
Helle Thorning-Schmidt|Dansk regjeringspioner
Anders Fogh Rasmussen|Dansk alliansepolitikk
Lars Løkke Rasmussen|Politisk sentrum
Poul Nyrup Rasmussen|Dansk nittitall
Sanna Marin|Ung regjeringsleder
Sauli Niinistö|Finsk brobygging
Tarja Halonen|Mummimamma
Urho Kekkonen|Finsk balansepolitikk
Vigdís Finnbogadóttir|Valgt kvinnelig statsoverhode
Jóhanna Sigurðardóttir|Islandsk likestilling
Mikhail Gorbatsjov|Glasnost
Boris Jeltsin|Stridsvognstale
Vladimir Putin|Etterretningsbakgrunn
Dmitrij Medvedev|Tandemstyre
Vladimir Lenin|Oktoberrevolusjon
Josef Stalin|Femårsplaner
Nikita Khrusjtsjov|Avstalinisering
Leonid Bresjnev|Stagnasjonstid
Volodymyr Zelenskyj|Komikerbakgrunn
Petro Porosjenko|Sjokoladevirksomhet
Viktor Jusjtsjenko|Oransjerevolusjon
Lech Wałęsa|Verft
Václav Havel|Fløyelsrevolusjon
Alexander Dubček|Praha-vår
Viktor Orbán|Ungarsk grunnlovsendring
Nicolae Ceaușescu|Balkongtale
Josip Broz Tito|Alliansefrihet
Slobodan Milošević|Jugoslavias oppløsning
Mustafa Kemal Atatürk|Sekulær republikk
Recep Tayyip Erdoğan|Istanbulbakgrunn
Nelson Mandela|Forsoning
Desmond Tutu|Sannhetskommisjon
F. W. de Klerk|Apartheidslutt
Thabo Mbeki|Afrikansk renessanse
Ellen Johnson Sirleaf|Liberisk gjenoppbygging
Wangari Maathai|Treplanting
Kwame Nkrumah|Panafrikanisme
Patrice Lumumba|Kongolesisk uavhengighet
Julius Nyerere|Ujamaa
Thomas Sankara|Burkinsk selvberging
Jomo Kenyatta|Kenyansk uavhengighet
Kenneth Kaunda|Zambisk frigjøring
Robert Mugabe|Zimbabwisk maktkonsentrasjon
Haile Selassie|Etiopisk keiser
Gamal Abdel Nasser|Suezkanalen
Anwar Sadat|Camp David
Hosni Mubarak|Tahrirplassen
Muammar Gaddafi|Grønn bok
Habib Bourguiba|Tunisisk modernisering
Mahatma Gandhi|Saltmarsj
Jawaharlal Nehru|Alliansefri India
Indira Gandhi|Unntakstilstand
Rajiv Gandhi|Pilotbakgrunn
Narendra Modi|Gujarat
Benazir Bhutto|Pakistansk demokratikamp
Imran Khan|Cricketbakgrunn
Muhammad Ali Jinnah|Pakistans grunnleggelse
Sheikh Mujibur Rahman|Bangladeshisk uavhengighet
Sheikh Hasina|Dhaka
Sirimavo Bandaranaike|Kvinnelig statsministerpioner
Aung San Suu Kyi|Husarrest
Ho Chi Minh|Vietnamesisk frigjøring
Sukarno|Indonesisk uavhengighet
Suharto|Ny orden
Lee Kuan Yew|Bystatutvikling
Mahathir Mohamad|Malaysisk industrialisering
Corazon Aquino|Folkets makt
Ferdinand Marcos|Unntakslover
Mao Zedong|Kulturrevolusjon
Deng Xiaoping|Markedsreformer
Xi Jinping|Silkeveibelte
Sun Yat-sen|Republikansk grunnleggelse
Chiang Kai-shek|Taiwanretrett
Kim Il-sung|Nordkoreansk dynasti
Kim Jong-il|Arvet lederrolle
Kim Jong-un|Missilprogram
Kim Dae-jung|Solskinnspolitikk
Shinzo Abe|Abenomics
Junichiro Koizumi|Postprivatisering
Jacinda Ardern|Christchurch
Helen Clark|Utviklingsprogram
Gough Whitlam|Avsettelse i 1975
Bob Hawke|Australske reformer
Kevin Rudd|Nasjonal unnskyldning
Julia Gillard|Misogynitale
Justin Trudeau|Politisk familiearv
Pierre Trudeau|Canadisk tospråklighet
Jean Chrétien|Québec-avstemning
Lester B. Pearson|Fredsbevarende styrker
Fidel Castro|Sierra Maestra
Che Guevara|Geriljasymbol
Raúl Castro|Cubansk maktoverføring
Hugo Chávez|Bolivariansk bevegelse
Simón Bolívar|Søramerikansk frigjøring
Salvador Allende|Chilensk sosialisme
Augusto Pinochet|Militærkupp
Michelle Bachelet|Chilensk likestilling
Luiz Inácio Lula da Silva|Fagforeningsbakgrunn
Dilma Rousseff|Riksrett
Jair Bolsonaro|Militærbakgrunn
Juan Perón|Arbeiderbevegelse
Eva Perón|Veldedighetsstiftelse
Néstor Kirchner|Patagonia
Cristina Fernández de Kirchner|Argentinsk maktpar
José Mujica|Beskjeden livsstil
Evo Morales|Kokabønder
Benito Juárez|Mexicansk liberalisme
Andrés Manuel López Obrador|Mexicansk venstreskifte
Claudia Sheinbaum|Klimaforskerbakgrunn
David Ben-Gurion|Israelsk statsgrunnleggelse
Golda Meir|Kibbutzbakgrunn
Yitzhak Rabin|Fredshåndtrykk
Shimon Peres|Oslo-avtale
Menachem Begin|Fredsavtale med Egypt
Benjamin Netanyahu|Likud
Yasir Arafat|Keffiyeh
Mahmoud Abbas|Palestinsk diplomati
Kong Hussein av Jordan|Langvarig meglerrolle
Ruhollah Khomeini|Iransk revolusjon
Mohammad Mosaddegh|Oljenasjonalisering
Saddam Hussein|Baath-partiet
Kofi Annan|Millenniummål
Ban Ki-moon|Klimadiplomati
Dag Hammarskjöld|Kongo-mekling
Boutros Boutros-Ghali|Agenda for fred
`)
  });
})();
