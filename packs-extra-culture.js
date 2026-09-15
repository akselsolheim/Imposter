// Håndskrevne oppføringer med assosiasjoner; ingen sangtekster eller automatiske fyllord.
(() => {
  const words = (text) => text.trim().split('\n').map((line) => {
    const [word, hint] = line.trim().split('|');
    return { word, hint };
  });
  globalThis.IMPOSTER_PACKS ??= [];
  globalThis.IMPOSTER_PACKS.push({
    id: 'artists', name: 'Musikkartister', icon: 'music',
    description: 'Fra norske favoritter til verdensstjerner.',
    words: words(`
Michael Jackson|Månegange
Madonna|Gjenoppfinnelse
Prince|Lilla univers
David Bowie|Rompersona
Freddie Mercury|Operatisk rock
Elton John|Brillesamling
Elvis Presley|Hoftebevegelse
Bob Dylan|Munnspillpoesi
Bruce Springsteen|Arbeiderhistorier
Billy Joel|Pianobar
Stevie Wonder|Tangentvirtuos
Ray Charles|Gospelpiano
James Brown|Funkfotarbeid
Marvin Gaye|Samfunnssoul
Otis Redding|Bryggekant
Sam Cooke|Soulforandring
Aretha Franklin|Selvrespekt
Tina Turner|Scenekraft
Whitney Houston|Lang vokaltone
Diana Ross|Motown-glamour
Donna Summer|Diskonatt
Gloria Gaynor|Overlevelsesdisco
Cher|Stemmeeffekt
Dolly Parton|Kontortid
Johnny Cash|Fengselskonsert
Willie Nelson|Fletter og gitar
Kenny Rogers|Pokerfilosofi
Shania Twain|Countryglitter
Garth Brooks|Countryarena
Taylor Swift|Musikalske epoker
Beyoncé|Sitronestetikk
Rihanna|Barbadisk pop
Lady Gaga|Kjøttkjole
Katy Perry|Godteriestetikk
Britney Spears|Skoleuniform
Christina Aguilera|Flaskeånd
Justin Timberlake|Guttebandbakgrunn
Justin Bieber|Gateopptak
Bruno Mars|Silkemyk retro
The Weeknd|Rød dress
Drake|Toronto
Kendrick Lamar|Comptonfortellinger
J. Cole|Fortellende rap
Eminem|Detroit
Jay-Z|Brooklyn-imperium
Kanye West|Avbrutt takketale
Tupac Shakur|Vestkystpoesi
The Notorious B.I.G.|Brooklynflyt
Snoop Dogg|Avslappet vestkyst
Dr. Dre|Studiokontroll
Ice Cube|Los Angeles-opprør
Nas|New York-blokker
50 Cent|Skuddsikker vest
Missy Elliott|Futuristiske videoer
Lauryn Hill|Soul og rap
Nicki Minaj|Fargerike personaer
Cardi B|Bronx-energi
Doja Cat|Sjangerskifte
Megan Thee Stallion|Houston-rap
Lizzo|Tverrfløyte
Billie Eilish|Lavmælt vokal
Olivia Rodrigo|Førerkortdrama
Ariana Grande|Høy hestehale
Selena Gomez|Barnestjernebakgrunn
Miley Cyrus|Identitetsbrudd
Demi Lovato|Disney-røtter
Sabrina Carpenter|Kaffepop
Chappell Roan|Scenepersona
Lana Del Rey|Filmnostalgi
Lorde|Forstadsblikk
Sia|Skjult ansikt
P!nk|Luftakrobatikk
Kelly Clarkson|Talentkonkurranseseier
Avril Lavigne|Slips og skateboard
Alanis Morissette|Sint nittitall
Sheryl Crow|Solskinnsrock
Norah Jones|Jazzpiano
Alicia Keys|Pianofletter
John Legend|Soulballader
Usher|Dansende R&B
Chris Brown|Koreografert R&B
Ne-Yo|Fedora
Frank Ocean|R&B-introspeksjon
SZA|Sårbar R&B
H.E.R.|Gitar og solbriller
Solange|Kunstnerisk søsterskap
Janelle Monáe|Androidpersona
Erykah Badu|Neo-soulhodeplagg
D'Angelo|Organisk groove
Maxwell|Falsett-soul
Ed Sheeran|Loop-pedal
Adele|Brudd og tall
Sam Smith|Sårbar falsett
Harry Styles|Vannmelonestetikk
Zayn|Solosprang
Niall Horan|Irsk guttebandrøst
Louis Tomlinson|Gutteband til indiepop
Shawn Mendes|Korte nettvideoer
Charlie Puth|Absolutt gehør
Lewis Capaldi|Selvironisk balladesanger
George Ezra|Dyp baryton
James Bay|Hatt og gitar
James Blunt|Soldatbakgrunn
James Arthur|Britisk talentscene
Tom Odell|Pianodrama
Hozier|Irsk kirkemetafor
Dermot Kennedy|Gatekonsertkraft
Paolo Nutini|Skotsk soul
George Michael|Øredobb
Robbie Williams|Las Vegas-attityde
Sting|Bass og tantra
Phil Collins|Trommende frontfigur
Peter Gabriel|Leireanimasjon
Rod Stewart|Hes røst
Eric Clapton|Bluesgitar
Mark Knopfler|Fingerspill
Paul Simon|Verdensmusikk
Art Garfunkel|Lys harmonistemme
Leonard Cohen|Mørk poesi
Joni Mitchell|Alternative gitarstemminger
Carole King|Låtskriverteppe
Tracy Chapman|Akustisk sosialrealisme
Suzanne Vega|Fortellerpop
Kate Bush|Teatralsk bevegelse
Annie Lennox|Androgyn drakt
Sinéad O'Connor|Barbert hode
Björk|Svanekjole
Enya|Lag på lag
Sade|Sofistikert ro
Nina Simone|Klassisk soulpiano
Billie Holiday|Gardenia
Ella Fitzgerald|Scat
Sarah Vaughan|Vokalspenn
Louis Armstrong|Trompetgrus
Nat King Cole|Fløyelsstemme
Frank Sinatra|Las Vegas-kamerater
Dean Martin|Croonerhumor
Tony Bennett|San Francisco-ballade
Barbra Streisand|Broadwaykraft
Liza Minnelli|Kabaretstol
Judy Garland|Rubinsko
Édith Piaf|Paris-chanson
Charles Aznavour|Fransk forteller
Serge Gainsbourg|Provokativ chanson
Jacques Brel|Belgisk dramatikk
Stromae|Geometrisk dans
Angèle|Belgisk elektropop
Zaz|Gatejazz
Mylène Farmer|Mystisk fransk pop
Dalida|Flerspråklig diva
Andrea Bocelli|Tenorovergang
Luciano Pavarotti|Hvitt lommetørkle
Sarah Brightman|Musikal og opera
Josh Groban|Klassisk popstemme
Andrea Berg|Tysk slager
Helene Fischer|Akrobatisk slager
Nena|Luftballonger
Falco|Wiener-rap
Ricky Martin|Latinsk dansebølge
Enrique Iglesias|Spansk poparv
Julio Iglesias|Verdensomspennende crooner
Shakira|Magebevegelser
Jennifer Lopez|Bronx-dans
Marc Anthony|Salsastemme
Gloria Estefan|Miami-rytmer
Bad Bunny|Puerto Rico-trap
Daddy Yankee|Reggaetonpioner
Luis Fonsi|Langsom sommerhit
J Balvin|Fargerik reggaeton
Karol G|Colombiansk urbanpop
Rosalía|Flamencofornying
Rauw Alejandro|Koreografert reggaeton
Maluma|Medellín-pop
Anitta|Brasiliansk funk
Gilberto Gil|Tropicalismo
Caetano Veloso|Brasiliansk eksilkunst
João Gilberto|Bossa nova-gitar
Antônio Carlos Jobim|Ipanema-komposisjon
Astrud Gilberto|Lett bossastemme
Cesária Évora|Barbeint morna
Fela Kuti|Afrobeat-politikk
Youssou N'Dour|Senegalesisk mbalax
Angélique Kidjo|Beninsk verdensmusikk
Burna Boy|Nigeriansk afro-fusion
Wizkid|Lagos-pop
Davido|Afrobeats-fest
Rema|Benin City-pop
Miriam Makeba|Afrikansk eksilstemme
Bob Marley|Reggae og frigjøring
Peter Tosh|Rastafari-opprør
Jimmy Cliff|Jamaicansk filmhelt
Sean Paul|Dancehall-flyt
Shaggy|Grusete dancehall
Grace Jones|Skulpturell scene
Kylie Minogue|Australsk discopop
Tame Impala|Psykedelisk soloprosjekt
Troye Sivan|Australsk klubbpop
Gotye|Ansiktsmaling i video
Tones and I|Gatemusikkgjennombrudd
PSY|Ridebevegelse
IU|Koreansk solopop
Jungkook|Koreansk solosprang
Lisa|Thai K-popstjerne
Hikaru Utada|Japansk spillballade
Kenshi Yonezu|Japansk nettmusiker
AURORA|Naturmystikk
Sigrid|Sunnmørsk popkraft
Astrid S|Trøndersk pop
Dagny|Tromsø-pop
Girl in Red|Soveromsindie
Emma Steinbakken|Norsk balladegjennombrudd
Julie Bergan|Skienspop
Admiral P|Norsk-zambisk reggae
Karpe|Oslo og identitet
Cezinando|Rap-poesi
Arif|Stovnerfortellinger
Stig Brenner|R&B og navneskifte
Ballinciaga|Rosa masker
Alan Walker|Hette og maske
Kygo|Tropisk house
Matoma|Flisafest
Cashmere Cat|Kattemotiv og elektronika
Morten Harket|Lys toppstemme
Sondre Lerche|Bergensk gitarpop
Thomas Dybdahl|Stavangersoul
Susanne Sundfør|Mørk synthkunst
Ane Brun|Skjelvende klang
Maria Mena|Sårbar norsk pop
Marion Ravn|Duo til solokarriere
Marit Larsen|Mandolinpop
Lene Marlin|Tromsø-gitar
Sissel Kyrkjebø|Olympisk røst
Kurt Nilsen|Bergen og talentseier
Alejandro Fuentes|Hes sørlandsstemme
Espen Lind|Tromsø-låtskriver
Bjørn Eidsvåg|Prestegitar
Odd Nordstoga|Vinje-toner
Ingebjørg Bratland|Kveding og pop
Kari Bremnes|Nordnorsk forteller
Mari Boine|Elektrisk joik
Sofia Jannok|Svensk-samisk scene
Åge Aleksandersen|Trønderrock
DumDum Boys|Trondheimsriff
deLillos|Oslo-hverdag
Raga Rockers|Mørk hovedstadsrock
Kaizers Orchestra|Oljefat
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'songs', name: 'Sanger', icon: 'music',
    description: 'Kjente låter med hint om stemning, historie og uttrykk.',
    words: words(`
Bohemian Rhapsody|Sjangersprang
We Will Rock You|Tribunestamping
We Are the Champions|Seiersrunde
Don't Stop Me Now|Ustoppelig energi
Another One Bites the Dust|Markert bassgang
Somebody to Love|Gospellengsel
Under Pressure|Samarbeidsduett
Radio Ga Ga|Gammel medietroskap
Billie Jean|Farskapsrykte
Thriller|Skrekkkoreografi
Beat It|Gjengkonflikt
Smooth Criminal|Fremoverlent dans
Man in the Mirror|Selvransakelse
Black or White|Forvandlingsvideo
Bad|Tøff fasade
Earth Song|Miljøsorg
Like a Prayer|Gospelprovokasjon
Like a Virgin|Bryllupsestetikk
Vogue|Posering
Hung Up|ABBA-prøve
Material Girl|Diamantestetikk
La Isla Bonita|Tropisk lengsel
Purple Rain|Gitarfinale
When Doves Cry|Bassfravær
Kiss|Minimalistisk funk
Raspberry Beret|Bruktbutikkromanse
Let's Dance|Røde sko i video
Space Oddity|Tapt forbindelse
Heroes|Berlin-inspirasjon
Life on Mars?|Surrealistiske bilder
Rocket Man|Ensom romreise
Your Song|Beskjeden dedikasjon
Tiny Dancer|Ballerinasymbol
I'm Still Standing|Comebackenergi
Candle in the Wind|Minneballade
Piano Man|Stamgjester
Uptown Girl|Klasseflørt
We Didn't Start the Fire|Historisk oppramsing
Born in the U.S.A.|Veteranliv
Dancing in the Dark|Scenegjest
Born to Run|Flukt fra hjembyen
The River|Ungt voksenansvar
Blowin' in the Wind|Ubesvarte spørsmål
Like a Rolling Stone|Statusfall
Knockin' on Heaven's Door|Avskjedsro
Hurricane|Feilaktig dom
Hallelujah|Åndelig tvetydighet
Suzanne|Poetisk elvevandring
Imagine|Grenseløs utopi
Give Peace a Chance|Sengeprotest
Let It Be|Trøst
Hey Jude|Lang allsangfinale
Yesterday|Tilbakeskuing
Here Comes the Sun|Lysere tider
Come Together|Slepende groove
Strawberry Fields Forever|Barndomssted
Eleanor Rigby|Ensomhet og strykere
Help!|Sårbar berømmelse
All You Need Is Love|Verdenssendt idealisme
Wonderwall|Britpop-allsang
Don't Look Back in Anger|Forsoning
Champagne Supernova|Lang britpopdrøm
Creep|Utenforskap
Karma Police|Moralsk oppgjør
No Surprises|Klokkespillro
Smells Like Teen Spirit|Grungegjennombrudd
Come as You Are|Tilslørt invitasjon
Lithium|Indre svingninger
Heart-Shaped Box|Kunstig himmel i video
Black Hole Sun|Forvrengte smil
Alive|Overlevelsestema
Jeremy|Klasseromstragedie
Californication|Kjendisindustri
Under the Bridge|Ensom storby
Otherside|Avhengighetskamp
Snow (Hey Oh)|Repeterende gitarfigur
Hotel California|Luksusfelle
Take It Easy|Avslappet landevei
Stairway to Heaven|Gradvis oppbygging
Whole Lotta Love|Psykedelisk mellomspill
Immigrant Song|Vikingenergi
Smoke on the Water|Brann ved innspilling
Highway to Hell|Turnéliv
Back in Black|Gjenkomst etter tap
Thunderstruck|Gitarintro
Sweet Child O' Mine|Slyngende riff
Welcome to the Jungle|Storbyankomst
November Rain|Bryllup og gitar
Paradise City|Stadionrefreng
Enter Sandman|Urolig leggetid
Nothing Else Matters|Uventet ømhet
Master of Puppets|Kontroll og avhengighet
One|Krigsskadet soldat
Paranoid|Rastløs hardrock
Iron Man|Tung science fiction
Crazy Train|Galskapens reise
Ace of Spades|Spillegalskap
Livin' on a Prayer|Arbeiderpar
It's My Life|Selvbestemmelse
The Final Countdown|Synthfanfare
Eye of the Tiger|Boksing og comeback
Don't Stop Believin'|Reisende fremmede
Africa|Avstandslengsel
Take on Me|Blyanttegnet video
The Sun Always Shines on T.V.|Katedralvideo
Hunting High and Low|Søkende falsett
Summer of '69|Ungdomsminner
Heaven|Åttitallsromanse
Total Eclipse of the Heart|Gotisk musikkvideo
Holding Out for a Hero|Redningslengsel
Girls Just Want to Have Fun|Selvstendig fest
Time After Time|Trofasthet
True Colors|Aksept
Sweet Dreams (Are Made of This)|Synth og makt
Here Comes the Rain Again|Melankolsk synth
Every Breath You Take|Besettende overvåkning
Roxanne|Nattlig bekymring
Message in a Bottle|Ensomhet i fellesskap
Englishman in New York|Kulturelt utenforskap
Shape of My Heart|Kortspillfilosofi
Fast Car|Ønske om klassereise
Talkin' Bout a Revolution|Stille samfunnsendring
What's Up?|Eksistensiell frustrasjon
Zombie|Nordirsk sorg
Linger|Hengende følelser
Nothing Compares 2 U|Nært ansiktsportrett
Torn|Brutt illusjon
Ironic|Uheldige sammentreff
You Oughta Know|Bittert brudd
Wannabe|Vennskap før romanse
Spice Up Your Life|Global fest
...Baby One More Time|Skolevideo
Toxic|Spionfantasi
Oops!... I Did It Again|Rød romdrakt
Genie in a Bottle|Varsom tilnærming
Beautiful|Selvaksept
Dirrty|Bokseringvideo
I Want It That Way|Flyplassvideo
Everybody (Backstreet's Back)|Monsterfest
Bye Bye Bye|Dukketråder
It's Gonna Be Me|Butikkdukker
Angels|Beskyttende nærvær
Feel|Følelseslengsel
Rock DJ|Avkledningseffekt
Torn Apart|Bastille-samarbeid
Viva la Vida|Avsatt hersker
Yellow|Fargesatt hengivenhet
Fix You|Trøst etter tap
The Scientist|Baklengsvideo
Clocks|Pianoløkke
A Sky Full of Stars|Dansebar hengivenhet
Adventure of a Lifetime|Dansende aper
Paradise|Elefantkostyme
Somebody That I Used to Know|Ulik bruddopplevelse
Rolling in the Deep|Svik og kraft
Someone Like You|Aksept etter brudd
Hello|Sen gjenkontakt
Set Fire to the Rain|Motstridende følelser
Skyfall|Spionballade
Bad Romance|Mørk motevideo
Poker Face|Skjulte hensikter
Born This Way|Identitetsstolthet
Shallow|Scenemøte
Just Dance|Forvirret klubbkveld
Umbrella|Beskyttende partnerskap
Diamonds|Verdifull samhørighet
We Found Love|Kaotisk forhold
Stay|Sårbar duett
Work|Dancehall-gjentakelse
Single Ladies (Put a Ring on It)|Synkron trio
Halo|Idealiserende kjærlighet
Crazy in Love|Blåsere og forelskelse
Formation|Identitet og stolthet
Irreplaceable|Brudd med selvtillit
Shake It Off|Riste av kritikk
Blank Space|Satirisk kjæresterykte
Love Story|Eventyrlig romanse
You Belong with Me|Nabovinduer
Anti-Hero|Selvkritikk
Cruel Summer|Hemmelig sommerromanse
Cardigan|Nostalgisk tilbakeblikk
Bad Blood|Stjernespekket oppgjør
Flowers|Egenomsorg
Wrecking Ball|Sårbart rivningsbilde
Party in the U.S.A.|Nervøs storbyankomst
As It Was|Snurrende gulv
Watermelon Sugar|Sommerlig sanselighet
Sign of the Times|Dramatisk første singel
Shape of You|Dansebar tiltrekning
Perfect|Bryllupsballade
Thinking Out Loud|Varig kjærlighet
Photograph|Avstandsminne
Bad Habits|Nattlig tilbakefall
Blinding Lights|Åttitallsjakt
Save Your Tears|Kirurgisk videoansikt
Can't Feel My Face|Farlig tiltrekning
Starboy|Nytt statusliv
Bad Guy|Lek med tøffhet
Ocean Eyes|Sårbart blikk
What Was I Made For?|Eksistensiell dukkeverden
Everything I Wanted|Drøm og søskenstøtte
Drivers License|Brudd bak rattet
Good 4 U|Sint gratulasjon
Vampire|Utnyttende forhold
Espresso|Lett koffeinmetafor
Please Please Please|Kjærestens oppførsel
Good Luck, Babe!|Undertrykt forelskelse
Pink Pony Club|Klubbtilhørighet
Take Me to Church|Kritikk av fordømmelse
Royals|Avstand til luksus
Green Light|Å gå videre
Chandelier|Festens bakside
Cheap Thrills|Rimelig moro
Titanium|Motstandskraft
Firework|Selvverd
Roar|Gjenvunnet stemme
Teenage Dream|Ungdomsfølelse
California Gurls|Godteriverden
Uptown Funk|Retrobrass
Just the Way You Are|Ubetinget beundring
Locked Out of Heaven|Intens forelskelse
When I Was Your Man|For sent anger
Happy|Døgnlang dansevideo
Get Lucky|Glitrende disconatt
One More Time|Animert romband
Around the World|Kostymekoreografi
Wake Me Up|Folktronica
Levels|Euforisk sampling
The Nights|Livsmot
Faded|Forlatte industristeder
Firestone|Tropisk gjennombrudd
Stole the Show|Scenemetafor
Gangnam Style|Ridekoreografi
Despacito|Puerto Ricos gater
Hips Don't Lie|Blåserkrok
Waka Waka (This Time for Africa)|VM-fellesskap
La Tortura|Bitter latinoduett
Gasolina|Reggaetonbølge
Ai Se Eu Te Pego|Fotballfeiring
Macarena|Gruppedans
Dragostea Din Tei|Moldovsk nettfavoritt
Dancing Queen|Ungdomskveld
Mamma Mia|Romantisk tilbakefall
The Winner Takes It All|Brudd som konkurranse
Gimme! Gimme! Gimme! (A Man After Midnight)|Nattlig lengsel
Waterloo|Romantisk kapitulasjon
Fernando|Minnet om kamp
SOS|Forhold i nød
Take a Chance on Me|Romantisk tilbud
Hjerteknuser|Far og datter
Ompa til du dør|Skramlete orkester
Neste sommer|Fremtidig gjensyn
Lys og varme|Trøndersk fellesskap
Forelska i lærer'n|Klasseromsfølelser
Tir n'a Noir|Øylengsel
Sommerfuggel i vinterland|Flyktningmøte
Eg ser|Medmenneskelighet
Skyfri himmel|Sårbart kvinneliv
En solskinnsdag|Norsk sommerscene
Splitter pine|Støyende hverdag
Idyll|Sommerminne
Her kommer vinteren|Årstidsventing
Jenter|Oslo-minner
Den du veit|Hemmelig forelskelse
Det finaste eg veit|Nynorsk hengivenhet
Ein farfar i livet|Generasjonsomsorg
Gje meg handa di, ven|Støtte i mørket
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'brands', name: 'Merkevarer', icon: 'tag',
    description: 'Logoer, produkter og ting dere kjenner fra hverdagen.',
    words: words(`
Apple|Et bitt
Samsung|Lommegalakse
Google|Fargerikt søk
Microsoft|Kontorvinduer
Amazon|Handlepil
Meta|Sosiale nettverk
Nvidia|Grønne grafikkbrikker
AMD|Røde prosessorer
Intel|Prosessorhistorie
IBM|Stormaskiner
Sony|Spill og lyd
Nintendo|Håndholdt lek
Sega|Blått pinnsvin
Atari|Arkadepioner
Xbox|Grønt spillunivers
PlayStation|Symbolknapper
LEGO|Klossene passer
Hot Wheels|Små racerbaner
Barbie|Dukkehusliv
Disney|Slottssilhuett
Pixar|Hoppende lampe
Marvel|Sammenvevde helter
DC Comics|Flaggermus og kappe
Netflix|Sammenhengende seriekveld
Spotify|Personlige spillelister
Tidal|Detaljert strømmelyd
SoundCloud|Opplastede spor
YouTube|Rød avspilling
TikTok|Korte sveip
Snapchat|Forsvinnende bilder
Instagram|Kuraterte ruter
Twitch|Direktesendt spilling
Discord|Digitale klubbrom
Skype|Tidlig videosamtale
Zoom|Digitale møter
Slack|Arbeidskanaler
Dropbox|Delt mappe
Adobe|Kreativ sky
Canva|Ferdige layouter
Figma|Felles tegnebrett
Notion|Fleksible sider
Reddit|Tråder med stemmer
Wikipedia|Dugnadskunnskap
ChatGPT|Samtalefelt
OpenAI|Modellaboratorium
Bose|Støydemping
Sonos|Romvis lyd
JBL|Bærbar bass
Marshall|Forsterkervegg
Bang & Olufsen|Dansk lydmøbel
Sennheiser|Studiolytting
Beats|Hodetelefonmote
Logitech|Skrivebordstilbehør
Razer|Grønt spillelys
SteelSeries|E-sportsutstyr
Corsair|Belyste datakomponenter
Asus|Spillrepublikk
Acer|Taiwansk bærbar
Lenovo|Tenkepute
Dell|Direktesolgte datamaskiner
HP|Kontorutskrift
Canon|Kameragrep
Nikon|Gult kamerafelt
Fujifilm|Fotofarger
Kodak|Gul minnerull
GoPro|Hjelmkamera
DJI|Flyvende kamera
Garmin|Rute på håndleddet
Fitbit|Skrittelling
Polar|Pulssoner
Suunto|Finsk utendørsklokke
Casio|Kalkulatorklokke
Rolex|Krone på håndleddet
Omega|Måneklokke
Swatch|Fargerikt armbånd
Seiko|Japansk urverk
TAG Heuer|Racerpresisjon
Tissot|Sveitsisk tidtaking
Patek Philippe|Arvet urverk
Fossil|Vintagepreg på klokken
Nike|Svingmerke
Adidas|Søskenrivalisering
Puma|Kattedyr i sprang
Reebok|Retrosko
New Balance|Løpesko med tall
Asics|Japansk løpehistorie
Under Armour|Tettsittende trening
Hoka|Tykk løpesåle
On|Skyaktig demping
Salomon|Sti og ski
The North Face|Fjellside
Patagonia|Reparert friluftstøy
Arc'teryx|Fossil på jakken
Columbia|Amerikansk turtøy
Helly Hansen|Seilerstriper
Bergans|Ekspedisjonssekk
Norrøna|Vikinghode
Devold|Ull nær kroppen
Kari Traa|Fargerik superundertøy
Swix|Glid og feste
Oakley|Sportsbriller
Ray-Ban|Flyverbriller
Levi's|Kobbernagler
Wrangler|Cowboyjeans
Diesel|Denimattityde
G-Star RAW|Ubehandlet denim
Lacoste|Krokodille
Ralph Lauren|Polospiller
Tommy Hilfiger|Amerikansk preppystil
Calvin Klein|Minimalistisk undertøy
Hugo Boss|Dressfasong
Armani|Italiensk snitt
Gucci|Florentinsk luksus
Prada|Luksusnylon
Louis Vuitton|Reisekofferter
Chanel|Quiltet veske
Dior|Paris-couture
Hermès|Silkeskjerf
Burberry|Rutete fôr
Versace|Medusahode
Fendi|Romersk motehus
Balenciaga|Overdimensjonerte sko
Valentino|Rød kjole
Moncler|Luksusdun
Canada Goose|Arktisk parkas
H&M|Skandinavisk kleskjede
Zara|Spansk butikkmote
Uniqlo|Japanske basisplagg
Mango|Spansk hverdagsmote
COS|Rene silhuetter
Lindex|Nordisk damebutikk
Kappahl|Familieklær
Cubus|Norsk basisgarderobe
Bik Bok|Ungdomsgarderobe
Vero Moda|Dansk damekjede
Jack & Jones|Dansk herrekjede
Vans|Skatebrettsåle
Converse|Basketball til gate
Dr. Martens|Gule sømmer
Timberland|Gul arbeidsstøvel
Crocs|Ventilert skum
Birkenstock|Formet korksåle
UGG|Saueskinnsføtter
Hunter|Høye gummistøvler
ECCO|Dansk skomakeri
Clarks|Ørkenstøvler
Toyota|Hybridpioner
Volkswagen|Folkebil
BMW|Kjøreopplevelse
Mercedes-Benz|Stjerne på panseret
Audi|Sammenknyttet bilallianse
Volvo|Sikkerhetsbelte
Saab|Flyarv
Tesla|Stille akselerasjon
Ford|Samlebånd
Chevrolet|Amerikansk sløyfemerke
Chrysler|Detroit-luksus
Dodge|Muskelbil
Jeep|Terrenggrill
Land Rover|Britisk terreng
Jaguar|Britisk rovdyr
Mini|Liten bybil
Rolls-Royce|Panserfigur
Bentley|Britisk håndverk
Aston Martin|Spionens sportsbil
Porsche|Motor bak
Ferrari|Steilende hest
Lamborghini|Sint okse
Maserati|Trefork
Alfa Romeo|Italiensk bilfølelse
Fiat|Italiensk småbil
Peugeot|Fransk løve
Renault|Fransk diamant
Citroën|Dobbel vinkel
Opel|Lynmerke
Škoda|Vingepil
Seat|Spansk bilby
Cupra|Kobberfarget ytelse
Honda|Motorer på to og fire hjul
Nissan|Japansk elbilpioner
Mazda|Wankelmotor
Subaru|Firehjulsgrep
Mitsubishi|Diamanttrio
Suzuki|Liten terrengbil
Hyundai|Koreansk bilvekst
Kia|Koreansk familiebil
Lexus|Japansk luksusbil
Polestar|Svensk elektrisk design
BYD|Batterier og biler
Nio|Batteribytte
XPeng|Kinesisk førerassistanse
Harley-Davidson|Tung motorsykkellyd
Ducati|Italiensk tohjulssport
Vespa|Italiensk scooter
Yamaha|Instrumenter og motorer
Kawasaki|Grønn motorsykkel
Coca-Cola|Konturflaske
Pepsi|Rund trefarget logo
Fanta|Appelsinbrus
Sprite|Sitron og lime
7UP|Grønn brusflaske
Solo|Norsk påskebrus
Farris|Kullsyre fra Larvik
Imsdal|Fjellvann
Red Bull|Eventyr i lufta
Monster Energy|Klom erke
Burn|Flammeboks
Powerade|Sportsdrikk
Gatorade|Elektrolytter
Lipton|Gul tepakke
Twinings|Britisk tehandel
Nespresso|Kaffekapsler
Nescafé|Pulverkaffe
Starbucks|Grønn sirene
Costa Coffee|Britisk kaffepause
Espresso House|Nordisk kafésofa
Tim Hortons|Canadisk kaffekø
McDonald's|Gylne buer
Burger King|Flammegrill
KFC|Hvitdresset oberst
Subway|Brød på rekke
Domino's|Leveringspizza
Pizza Hut|Rødt tak
Taco Bell|Tex-mex-klokke
Wendy's|Flettet maskot
Five Guys|Peanøttsekker
Shake Shack|Burgere fra parkkiosk
Max Burgers|Svensk burgerkjede
Dolly Dimple's|Prikkete pizzastil
Peppes Pizza|Amerikansk pizza i Norge
Big Bite|Baguettepause
Narvesen|Kiosk på hjørnet
7-Eleven|Døgnkiosk
REMA 1000|Enkel dagligvare
Kiwi|Grønn butikk
Coop|Medlemsbutikk
Meny|Ferskvaredisk
Spar|Grønt tre
Lidl|Tysk lavpris
Aldi|Brødredelt lavpris
Carrefour|Fransk hypermarked
Tesco|Britisk handlekurv
Walmart|Amerikansk stormarked
Costco|Store pakninger
IKEA|Flatpakker
JYSK|Dyner fra Danmark
Kid|Gardiner og sengetøy
Princess|Hjemmetekstiler
Skeidar|Møbelutstilling
Jotun|Pingvin på malingsboks
Jordan|Tannbørste
Oral-B|Rundt børstehode
Colgate|Rød tannkremtube
Sensodyne|Iskalde isinger
Nivea|Blå kremboks
Dove|Mild såpe
L'Oréal|Paris-skjønnhet
Maybelline|New York-sminke
Max Factor|Filmstudio-sminke
MAC Cosmetics|Profesjonell leppestift
The Ordinary|Ingrediensnavn på flasken
Clinique|Hudpleietrio
La Roche-Posay|Apotekhudpleie
Vichy|Termalkilde
CeraVe|Hudbarriere
Garnier|Hår og planter
Head & Shoulders|Flasskontroll
Pantene|Hårglans
L'Occitane|Provence-duft
Rituals|Hjemmespa
Lush|Badebomber
Gillette|Barberblader
Braun|Tysk barbermaskin
Philips|Lys og barbering
Dyson|Syklonstøvsuger
Miele|Tysk vaskerom
Bosch|Verktøy og hvitevarer
Siemens|Industri og kjøkken
Electrolux|Svensk husholdning
AEG|Elektrisk kjøkkenhistorie
Smeg|Pastellkjøleskap
KitchenAid|Fargerik kjøkkenmaskin
Kenwood|Eltekrok
Tefal|Slippbelegg
Wilfa|Norsk vaffeljern
OBH Nordica|Nordisk kjøkkenbenk
Le Creuset|Emaljert gryte
Fiskars|Oransje saksehåndtak
Victorinox|Sveitsisk lommekniv
Stanley|Termoskopp
Thermos|Varm drikke på tur
`)
  });
  globalThis.IMPOSTER_PACKS.push({
    id: 'myths', name: 'Myter og eventyr', icon: 'spark',
    description: 'Eventyr, gamle sagn og magiske skikkelser.',
    words: words(`
Askeladden|Den undervurderte yngstemann
Askepott|En sko blir igjen
Snøhvit|Forgiftet frukt
Tornerose|En svært lang lur
Rødhette|En merkelig bestemor
Rapunsel|Fletter som stige
Hans og Grete|Smuler på stien
De tre bukkene Bruse|Ubetalt broavgift
De tre små grisene|Ulike byggematerialer
Den stygge andungen|Feil fuglefamilie
Den lille havfruen|En stemme som betaling
Keiserens nye klær|Barnet sier det alle ser
Prinsessen på erten|En dårlig natt på mange madrasser
Fyrtøyet|Hunder med store øyne
Piken med svovelstikkene|Varme glimt i vinterkulden
Den standhaftige tinnsoldat|Ett bein og et papirskip
Snødronningen|Et splintret speil
Tommelise|Blomsten som vugge
Gullhår og de tre bjørnene|Tre størrelser på alt
Jack og bønnestengelen|En handel som vokser
Den støvlede katten|Arv med uventet verdi
Froskeprinsen|En gjest ved spisebordet
Skjønnheten og udyret|Kjærlighet bryter forbannelsen
Rumpelstiltskin|Et navn avslutter avtalen
Rottefangeren fra Hameln|Ubetalt musikk
Veslefrikk med fela|Musikk som tvinger alle til å danse
Aladdin|En støvete lampe
Ali Baba|En hule med passord
Sinbad sjøfareren|Øyer som ikke er øyer
Tusen og én natt|Fortellinger utsetter en dødsdom
Sjeherasad|Historien fortsetter i morgen
Pinocchio|Sannheten sitter i ansiktet
Peter Pan|Vil aldri bli voksen
Wendy Darling|Historier ved sengetid
Kaptein Krok|En klokke i et krypdyr
Tingeling|Liten og sjalu
Alice i Eventyrland|Størrelsen er ustabil
Den hvite kaninen|For sent ute
Hjerterdronningen|Krokket med flamingoer
Hattemakeren|Et selskap uten slutt
Cheshirekatten|Smilet blir igjen
Trollmannen fra Oz|En mann bak forhenget
Dorothy|Hjemlengsel på gul vei
Blikkmannen|Ønsker seg et hjerte
Den feige løven|Ønsker seg mot
Fugleskremselet fra Oz|Ønsker seg en hjerne
Nøtteknekkeren|Kamp mot musehæren
Reveenka|En frier med pen stemme
Pannekaken|Middagen stikker av
Smørbukk|En sekk på ryggen
Kvitebjørn kong Valemon|Dyreskinn og lengsel
Østenfor sol og vestenfor måne|En reise til et umulig sted
Soria Moria slott|Et mål langt borte
De syv far i huset|Spør den som er enda eldre
Bord dekk deg|Måltid uten kjøkken
Tyrihans som fikk kongsdatteren til å le|En sammenklistret prosesjon
Prinsessen som ingen kunne målbinde|Samler ting langs veien
Gjertrudsfuglen|Baksten blir stadig mindre
Reven som gjeter|En upålitelig ansettelse
Hanen og reven|Invitasjon fra en farlig venn
Odin|Visdom kostet et øye
Tor|En hammer som kommer tilbake
Loke|Bryllup og bråk
Frøya|Smykke og kattevogn
Frigg|Løfter fra nesten alle ting
Balder|En oversett plante
Heimdall|Vakt med et veldig høyt horn
Tyr|Et løfte kostet en hånd
Njord|Hav og rikdom
Frøy|Et skip som kan foldes sammen
Idunn|Frukt mot alderdom
Skade|Et valg basert på føtter
Hel|Et rike under de levende
Surt|Et brennende sverd ved slutten
Ymer|En kropp blir en verden
Audhumbla|Slikker liv ut av is
Fenrisulven|Bundet med det umulige
Midgardsormen|En sirkel rundt verden
Sleipner|Åtte bein
Hugin og Munin|Flygende rapporter
Ratatosk|Løper med sladder i et tre
Nidhogg|Gnager ved verdens røtter
Mjolne|Et kort skaft
Gungne|Et spyd som treffer
Draupne|Smykker som blir flere
Brisingamen|Et kostbart halssmykke
Gleipne|Lenke laget av umuligheter
Gjallarhorn|Varsler siste strid
Yggdrasil|Verden mellom greinene
Åsgard|En borg over menneskene
Midgard|Menneskenes inngjerdede hjem
Jotunheim|Kjempenes hjem
Valhall|Trening til den siste kampen
Bifrost|Bro med flere farger
Ragnarok|Solen slukes
Mimes brønn|Dyr visdom ved en rot
Nornenes skjebnetråd|Et liv blir spunnet
Valkyrie|Velger fra slagmarken
Draug|En død sjøfarer
Nøkken|Vakre toner ved farlig vann
Huldra|En hale avslører hemmeligheten
Fossegrimen|Læremester bak vannfallet
Troll|Dagslys er dårlig nytt
Nisse|Grøt på låven
Mare|En tung nattlig gjest
Zeus|Lyn fra fjelltoppen
Hera|Sjalu dronning på Olympen
Poseidon|Tre spisser over bølgene
Hades|Et rike uten sollys
Athene|Ugle og kløkt
Afrodite|Skjønnhet ved havskum
Apollon|Lyre og laurbær
Artemis|Jakt i måneskinn
Ares|Strid fremfor diplomati
Hefaistos|En gud ved smia
Hermes|Raske sandaler
Dionysos|Vindruer og teater
Demeter|En mors sorg stanser veksten
Persefone|Et måltid binder henne til vinteren
Hestia|Flammen midt i hjemmet
Eros|Piler med romantiske følger
Nike|Vinger etter seieren
Hekate|Et møte ved veikrysset
Prometevs|Stjal varme til menneskene
Atlas|En tung himmel
Kronos|Frykt for egne barn
Gaia|Jorden som mor
Rhea|En stein i svøpet
Pandora|Nysgjerrighet åpnet lokket
Herakles|Tolv krevende oppgaver
Akilles|Et sårbart punkt
Odyssevs|En svært lang hjemreise
Penelope|Et arbeid som tas opp hver natt
Telemakhos|Leter etter en fraværende far
Persevs|Speilblankt skjold
Andromeda|Lenket ved havet
Thesevs|Tråd gjennom en labyrint
Ariadne|Nøstet som viser veien ut
Ikaros|For nær solen
Daidalos|Oppfinner på flukt
Orfeus|Snudde seg for tidlig
Eurydike|Nesten ute av dødsriket
Narkissos|Forelsket i et speilbilde
Ekko|Bare andres siste ord
Kong Midas|En uheldig berøring
Sisyfos|Tilbake til bunnen igjen
Tantalos|Mat og drikke trekker seg unna
Medusa|Et blikk som stanser alt
Minotauros|Labyrintens beboer
Pegasus|En flytur uten sal
Kerberos|Tre hoder ved én port
Hydra|Hogging gjør problemet større
Kimære|Flere dyr i samme kropp
Kyklop|Ett øye og store krefter
Sirene|Sjøfolk bør holde for ørene
Kentaur|Høver under menneskekroppen
Satyr|Fløytemusikk og geitebein
Sfinks|En gåte sperrer veien
Den trojanske hesten|En gave med skjult innhold
Det gylne skinn|Et mål for Argonautene
Ra|En solferd over himmelen
Anubis|Sjakal ved gravferden
Osiris|En konge blant de døde
Isis|Samler det som ble revet fra hverandre
Horus|En falk over tronen
Set|Kaos og ørken
Bastet|Katt i tempelet
Thot|Skrift og ibisnebb
Sobek|Krokodille i elven
Sekhmet|Løvinnens vrede
Maat|En fjær på vektskålen
Ammit|Venter på et tungt hjerte
Nut|Himmelen bøyer seg over jorden
Apofis|Slangen som truer solferden
Føniks|Nytt liv fra asken
Drage|Vinger over en skatt
Enhjørning|Ett horn mellom ørene
Griff|Løvekropp og ørnevinger
Hippogriff|Hest møter ørn
Basilisk|Dødelig blikk fra et krypdyr
Kraken|Armer under skipet
Havfrue|En sang fra skjæret
Varulv|Måneskinn endrer kroppen
Vampyr|Ubuden gjest etter solnedgang
Fe|Små vinger og store fortryllelser
Goblin|Småvokst bråkmaker i mørket
Alv|Lett fot i en magisk skog
Leprechaun|Gull ved enden av regnbuen
Banshee|Et skrik varsler sorg
Selkie|Et skinn gjør havet til hjem
Kong Arthur|En trone og et rundt bord
Merlin|Rådgiver med overnaturlig innsikt
Excalibur|Et sverd fra vannet
Den hellige gral|En begerjakt uten vanlig kart
Robin Hood|Rikdom på vei i motsatt retning
Sheriffen av Nottingham|Upopulær skatteinnkrever
Den flygende hollender|Et skip uten siste havn
Nessie|En lang hals i skotsk vann
Bigfoot|Store spor i skogen
Yeti|Store spor i snøen
Baba Jaga|Et hus på fuglebein
Peer Gynt|Løgner på en bukkerygg
Dovregubben|En konge inne i fjellet
Mumle Gåsegg|En voldsom appetitt
Lillekort|Et skip som går over både land og vann
`)
  });
})();
