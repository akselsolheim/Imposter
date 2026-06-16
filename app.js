const WORD_PACKS = {
  countries: {
    name: "Land",
    vibe: "Verdenskart",
    words: [
      "Norge", "Sverige", "Danmark", "Finland", "Island", "Tyskland", "Frankrike", "Spania", "Italia", "Portugal",
      "Nederland", "Belgia", "Sveits", "\u00d8sterrike", "Polen", "Hellas", "Tyrkia", "Storbritannia", "Irland", "Ukraina",
      "Russland", "USA", "Canada", "Mexico", "Brasil", "Argentina", "Chile", "Peru", "Colombia", "Egypt",
      "Marokko", "S\u00f8r-Afrika", "Nigeria", "Kenya", "India", "Kina", "Japan", "S\u00f8r-Korea", "Thailand", "Vietnam",
      "Indonesia", "Australia", "New Zealand", "Saudi-Arabia", "De forente arabiske emirater", "Qatar", "Israel", "Singapore", "Malaysia", "Filippinene"
    ]
  },
  movies: {
    name: "Filmer",
    vibe: "Kinomodus",
    words: [
      "Titanic", "Avatar", "Star Wars", "Jurassic Park", "Harry Potter", "Ringenes herre", "The Matrix", "Forrest Gump", "Toy Story", "L\u00f8venes konge",
      "Frozen", "Shrek", "Spider-Man", "Batman", "Superman", "Iron Man", "Avengers", "Black Panther", "Joker", "Barbie",
      "Oppenheimer", "Interstellar", "Inception", "Gladiator", "Pirates of the Caribbean", "Indiana Jones", "James Bond", "Mission Impossible", "Top Gun", "Rocky",
      "Karate Kid", "Home Alone", "The Grinch", "Finding Nemo", "Cars", "Coco", "Moana", "Aladdin", "Mulan", "Beauty and the Beast",
      "The Godfather", "Jaws", "E.T.", "Back to the Future", "Ghostbusters", "Men in Black", "The Hunger Games", "Twilight", "Dune", "The Super Mario Bros. Movie"
    ]
  },
  tv: {
    name: "TV-serier",
    vibe: "Episodekaos",
    words: [
      "Friends", "The Office", "Stranger Things", "Game of Thrones", "Breaking Bad", "Better Call Saul", "The Simpsons", "Family Guy", "South Park", "SpongeBob",
      "The Mandalorian", "Wednesday", "Squid Game", "The Last of Us", "The Walking Dead", "Peaky Blinders", "Sherlock", "Doctor Who", "House", "Grey's Anatomy",
      "Modern Family", "Brooklyn Nine-Nine", "How I Met Your Mother", "The Big Bang Theory", "Seinfeld", "Lost", "Prison Break", "Money Heist", "Dark", "The Crown",
      "Bridgerton", "Vikings", "The Witcher", "Narcos", "Loki", "WandaVision", "Daredevil", "Arrow", "The Flash", "Supernatural",
      "Riverdale", "Gossip Girl", "Outer Banks", "Cobra Kai", "The Boys", "Invincible", "Arcane", "One Piece", "The Bear", "House of the Dragon"
    ]
  },
  mixed: {
    name: "Blandet",
    vibe: "Litt av alt",
    words: [
      "pizza", "fotball", "strand", "skole", "kino", "sn\u00f8", "taco", "tog", "mobil", "bursdag",
      "hytte", "musikk", "butikk", "ferie", "kaffe", "regn", "spill", "hund", "sykkel", "flyplass",
      "bibliotek", "sv\u00f8mmehall", "fjell", "restaurant", "park", "museum", "hotell", "busstopp", "klasserom", "stadion",
      "katt", "hest", "l\u00f8ve", "pingvin", "hai", "kanin", "slange", "elefant", "frosk", "bj\u00f8rn",
      "Minecraft", "Fortnite", "Roblox", "controller", "headset", "basket", "ski", "tennis", "lekse", "sommer"
    ]
  },
  food: {
    name: "Mat",
    vibe: "Sultne hint",
    words: [
      "burger", "sushi", "pannekake", "sjokolade", "brus", "is", "lasagne", "eple", "kebab", "nudler",
      "gr\u00f8t", "salat", "vaffel", "ost", "smoothie", "popcorn", "donut", "taco", "pizza", "pasta",
      "ris", "kylling", "biff", "fisk", "suppe", "br\u00f8d", "egg", "bacon", "p\u00f8lse", "pommes frites",
      "kake", "muffins", "cookies", "jordb\u00e6r", "banan", "appelsin", "vannmelon", "gulrot", "potet", "mais",
      "yoghurt", "melk", "kaffe", "te", "juice", "cola", "chips", "nachos", "honning", "kanel"
    ]
  },
  historical: {
    name: "Historiske figurer",
    vibe: "Tidsmaskin",
    words: [
      "Albert Einstein", "Isaac Newton", "Marie Curie", "Leonardo da Vinci", "Napoleon", "Julius Caesar", "Cleopatra", "Vikingkongen Harald H\u00e5rfagre", "Abraham Lincoln", "George Washington",
      "Martin Luther King jr.", "Nelson Mandela", "Mahatma Gandhi", "Winston Churchill", "Dronning Elizabeth I", "Dronning Victoria", "Jeanne d'Arc", "Christopher Columbus", "Galileo Galilei", "Charles Darwin",
      "Nikola Tesla", "Thomas Edison", "Alexander den store", "Sokrates", "Platon", "Aristoteles", "William Shakespeare", "Mozart", "Beethoven", "Frida Kahlo",
      "Pablo Picasso", "Vincent van Gogh", "Rosa Parks", "Amelia Earhart", "Florence Nightingale", "Malala Yousafzai", "Anne Frank", "Oskar Schindler", "Marco Polo", "Mansa Musa",
      "Sun Tzu", "Konfucius", "Karl Marx", "Sigmund Freud", "Fidel Castro", "Che Guevara", "Mikhail Gorbatsjov", "Margaret Thatcher", "Barack Obama", "Kong Haakon VII"
    ]
  }
};

const RELATED_HINTS = Object.fromEntries([
  ["norge", "fjord"], ["sverige", "Stockholm"], ["danmark", "K\u00f8benhavn"], ["finland", "sauna"], ["island", "vulkan"],
  ["tyskland", "Berlin"], ["frankrike", "Eiffelt\u00e5rnet"], ["spania", "Madrid"], ["italia", "Roma"], ["portugal", "Lisboa"],
  ["nederland", "tulipan"], ["belgia", "vaffel"], ["sveits", "Alpene"], ["\u00f8sterrike", "Wien"], ["polen", "Warszawa"],
  ["hellas", "Athen"], ["tyrkia", "Istanbul"], ["storbritannia", "London"], ["irland", "kl\u00f8ver"], ["ukraina", "Kyiv"],
  ["russland", "Moskva"], ["usa", "frihetsgudinnen"], ["canada", "l\u00f8nn"], ["mexico", "taco"], ["brasil", "Rio"],
  ["argentina", "tango"], ["chile", "langt"], ["peru", "Machu Picchu"], ["colombia", "kaffe"], ["egypt", "pyramide"],
  ["marokko", "Marrakech"], ["s\u00f8r-afrika", "Cape Town"], ["nigeria", "Lagos"], ["kenya", "safari"], ["india", "Taj Mahal"],
  ["kina", "mur"], ["japan", "Tokyo"], ["s\u00f8r-korea", "Seoul"], ["thailand", "Bangkok"], ["vietnam", "Hanoi"],
  ["indonesia", "Bali"], ["australia", "Sydney"], ["new zealand", "kiwi"], ["saudi-arabia", "\u00f8rken"], ["de forente arabiske emirater", "Dubai"],
  ["qatar", "Doha"], ["israel", "Jerusalem"], ["singapore", "by"], ["malaysia", "Kuala Lumpur"], ["filippinene", "\u00f8y"],

  ["titanic", "skip"], ["avatar", "bl\u00e5"], ["star wars", "lys-sverd"], ["jurassic park", "dinosaur"], ["harry potter", "tryllestav"],
  ["ringenes herre", "ring"], ["the matrix", "kode"], ["forrest gump", "l\u00f8ping"], ["toy story", "leker"], ["l\u00f8venes konge", "savanne"],
  ["frozen", "is"], ["shrek", "sump"], ["spider-man", "nett"], ["batman", "flaggermus"], ["superman", "kappe"],
  ["iron man", "rustning"], ["avengers", "helter"], ["black panther", "Wakanda"], ["joker", "smil"], ["barbie", "rosa"],
  ["oppenheimer", "atombombe"], ["interstellar", "rom"], ["inception", "dr\u00f8m"], ["gladiator", "arena"], ["pirates of the caribbean", "pirat"],
  ["indiana jones", "pisk"], ["james bond", "agent"], ["mission impossible", "spion"], ["top gun", "jagerfly"], ["rocky", "boksing"],
  ["karate kid", "spark"], ["home alone", "feller"], ["the grinch", "jul"], ["finding nemo", "fisk"], ["cars", "bil"],
  ["coco", "gitar"], ["moana", "hav"], ["aladdin", "lampe"], ["mulan", "kriger"], ["beauty and the beast", "rose"],
  ["the godfather", "mafia"], ["jaws", "hai"], ["e.t.", "alien"], ["back to the future", "tidsmaskin"], ["ghostbusters", "sp\u00f8kelse"],
  ["men in black", "romvesen"], ["the hunger games", "bue"], ["twilight", "vampyr"], ["dune", "sand"], ["the super mario bros. movie", "r\u00f8r"],

  ["friends", "sofa"], ["the office", "kontor"], ["stranger things", "Upside Down"], ["game of thrones", "trone"], ["breaking bad", "kjemi"],
  ["better call saul", "advokat"], ["the simpsons", "gul"], ["family guy", "familie"], ["south park", "Colorado"], ["spongebob", "svamp"],
  ["the mandalorian", "hjelm"], ["wednesday", "Addams"], ["squid game", "maske"], ["the last of us", "sopp"], ["the walking dead", "zombie"],
  ["peaky blinders", "caps"], ["sherlock", "detektiv"], ["doctor who", "TARDIS"], ["house", "lege"], ["grey's anatomy", "sykehus"],
  ["modern family", "familie"], ["brooklyn nine-nine", "politi"], ["how i met your mother", "fortelling"], ["the big bang theory", "nerd"], ["seinfeld", "komedie"],
  ["lost", "\u00f8y"], ["prison break", "fengsel"], ["money heist", "maske"], ["dark", "tid"], ["the crown", "dronning"],
  ["bridgerton", "ball"], ["vikings", "skip"], ["the witcher", "monster"], ["narcos", "kartell"], ["loki", "variant"],
  ["wandavision", "sitcom"], ["daredevil", "blind"], ["arrow", "pil"], ["the flash", "fart"], ["supernatural", "br\u00f8dre"],
