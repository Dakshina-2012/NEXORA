const categories = ['Action', 'Adventure', 'Puzzle', 'Sports', 'Racing', 'Strategy', 'Arcade'];

const games = [];
let idCounter = 1;

const categoryDescriptions = {
    Action: "Adrenaline-pumping experiences demanding quick reflexes and precise timing.",
    Adventure: "Deep narratives, rich world-building, and extensive exploration.",
    Puzzle: "Brain-bending challenges focused on logic and problem-solving.",
    Sports: "Competitive simulations of the world's most popular athletic events.",
    Racing: "High-octane competitive driving and realistic vehicle simulations.",
    Strategy: "Tactical planning, resource management, and overarching decision-making.",
    Arcade: "Fast-paced, highly replayable classics and fighting games."
};

const rawData = [
    // Action
    { cat: 'Action', title: 'Grand Theft Auto V', appId: '271590', desc: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, they must pull off a series of dangerous heists to survive.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GTX 660' },
    { cat: 'Action', title: 'Cyberpunk 2077', appId: '1091500', desc: 'An open-world, action-adventure RPG set in the dark future of Night City. Play as a cyberpunk mercenary taking on the most powerful forces of the city.', req: 'OS: Windows 10 | CPU: Core i7 | RAM: 12GB | GPU: GTX 1060 6GB' },
    { cat: 'Action', title: 'Elden Ring', appId: '1245620', desc: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', req: 'OS: Windows 10 | CPU: Ryzen 3 | RAM: 12GB | GPU: GTX 1060 3GB' },
    { cat: 'Action', title: 'Halo Infinite', appId: '1240440', desc: 'When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced.', req: 'OS: Windows 10 64-bit | CPU: AMD Ryzen 5 | RAM: 8 GB | GPU: AMD RX 570' },
    { cat: 'Action', title: 'DOOM Eternal', appId: '782330', desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.', req: 'OS: Windows 10 | CPU: Intel Core i5 @ 3.3 GHz | RAM: 8 GB | GPU: NVIDIA GeForce GTX 1050Ti' },
    { cat: 'Action', title: 'Sekiro: Shadows Die Twice', appId: '814380', desc: 'Carve your own clever path to vengeance in this award-winning action adventure developed by FromSoftware, creators of Bloodborne and the Dark Souls series.', req: 'OS: Windows 10 | CPU: Intel Core i3 | RAM: 4 GB | GPU: NVIDIA GeForce GTX 760' },
    { cat: 'Action', title: 'Resident Evil Village', appId: '1196590', desc: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.', req: 'OS: Windows 10 | CPU: Intel Core i5-7500 | RAM: 8GB | GPU: NVIDIA GeForce GTX 1050 Ti' },
    { cat: 'Action', title: 'Devil May Cry 5', appId: '601150', desc: 'The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GeForce GTX 760' },

    // Adventure
    { cat: 'Adventure', title: 'Red Dead Redemption 2', appId: '1174180', desc: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents massing on their heels, they must rob, steal and fight their way across America.', req: 'OS: Windows 10 | CPU: Intel Core i7 | RAM: 12GB | GPU: GTX 1060 6GB' },
    { cat: 'Adventure', title: 'God of War', appId: '1593500', desc: 'Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive and teach his son to do the same.', req: 'OS: Windows 10 | CPU: Intel i5 | RAM: 8GB | GPU: GTX 960' },
    { cat: 'Adventure', title: 'Horizon Zero Dawn', appId: '1151640', desc: 'Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey in an epic open world.', req: 'OS: Windows 10 | CPU: Intel Core i7 | RAM: 16GB | GPU: GTX 1060 6GB' },
    { cat: 'Adventure', title: 'The Witcher 3: Wild Hunt', appId: '292030', desc: 'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will.', req: 'OS: Windows 10 | CPU: Intel CPU Core i5-2500K | RAM: 6 GB | GPU: Nvidia GPU GeForce GTX 660' },
    { cat: 'Adventure', title: 'Tomb Raider', appId: '203160', desc: 'Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor.', req: 'OS: Windows 10 | CPU: Dual core CPU | RAM: 1 GB | GPU: DirectX 9 graphics card with 512Mb Video RAM' },
    { cat: 'Adventure', title: 'Assassin\'s Creed Valhalla', appId: '2208920', desc: 'Become a legendary Viking raider on a quest for glory. Explore England\'s Dark Ages as you raid your enemies and grow your settlement.', req: 'OS: Windows 10 | CPU: Ryzen 3 1200 / i5-4460 | RAM: 8 GB | GPU: AMD R9 380 / GTX 960' },
    { cat: 'Adventure', title: 'Death Stranding Director\'s Cut', appId: '1850570', desc: 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GeForce GTX 1050' },
    { cat: 'Adventure', title: 'Outer Wilds', appId: '753640', desc: 'Winner of Best Game at the 2020 BAFTA Games Awards and named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is an open world mystery about a solar system trapped in an endless time loop.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GeForce GTX 770' },

    // Puzzle
    { cat: 'Puzzle', title: 'Portal 2', appId: '620', desc: 'Portal 2 draws from the award-winning formula of innovative gameplay, story, and music. Introduces a cast of dynamic new characters and fresh puzzle elements.', req: 'OS: Windows 10 | CPU: Dual Core 2.0 | RAM: 2GB | GPU: NVIDIA GeForce 7600' },
    { cat: 'Puzzle', title: 'The Witness', appId: '210970', desc: 'You wake up alone on a strange island full of puzzles that will challenge and surprise you. Explore the island to discover clues and find your way home.', req: 'OS: Windows 7 | CPU: 1.8GHz | RAM: 4GB | GPU: Intel HD 4000' },
    { cat: 'Puzzle', title: 'Tetris Effect: Connected', appId: '1000000', desc: 'Tetris like you\'ve never seen it, heard it, or felt it before—an incredibly addictive and breathtakingly gorgeous reinvention of the classic.', req: 'OS: Windows 10 | CPU: Intel i3 | RAM: 8GB | GPU: GTX 750 Ti' },
    { cat: 'Puzzle', title: 'Baba Is You', appId: '736260', desc: 'Baba Is You is an award-winning puzzle game where you can change the rules by which you play. In every level, the rules themselves are present as blocks you can interact with.', req: 'OS: Windows 7 | CPU: 2.0 GHz | RAM: 1 GB | GPU: OpenGL 2.1 Support' },
    { cat: 'Puzzle', title: 'INSIDE', appId: '304430', desc: 'Hunted and alone, a boy finds himself drawn into the center of a dark project. A brilliant atmospheric puzzle-platformer.', req: 'OS: Windows 7/8/10 | CPU: Intel Core 2 Quad Q6600 | RAM: 4 GB | GPU: NVIDIA GT 630' },
    { cat: 'Puzzle', title: 'LIMBO', appId: '48000', desc: 'Uncertain of his sister\'s fate, a boy enters LIMBO. A chilling masterpiece of monochromatic puzzle platforming.', req: 'OS: Windows 10 | CPU: 2 GHz | RAM: 512 MB | GPU: Shader Model 3.0' },
    { cat: 'Puzzle', title: 'The Talos Principle', appId: '257510', desc: 'The Talos Principle is a first-person puzzle game in the tradition of philosophical science fiction. Made by Croteam and written by Tom Jubert and Jonas Kyratzes.', req: 'OS: Windows 7 | CPU: Dual-core 2.0 GHz | RAM: 2GB | GPU: NVIDIA GeForce 460' },
    { cat: 'Puzzle', title: 'Superliminal', appId: '1049410', desc: 'Perception is reality. In this mind-bending first-person puzzle game, you escape a surreal dream world by solving impossible puzzles using the ambiguity of depth and perspective.', req: 'OS: Windows 7 | CPU: 2.0GHz | RAM: 4GB | GPU: NVIDIA GeForce 760' },

    // Sports
    { cat: 'Sports', title: 'EA SPORTS FC 24', appId: '2195250', desc: 'The most true-to-football experience ever with HyperMotionV and an enhanced Frostbite Engine reinventing how 19,000+ authentic players move and play.', req: 'OS: Windows 10 | CPU: Intel Core i7 | RAM: 12GB | GPU: GTX 1660' },
    { cat: 'Sports', title: 'NBA 2K24', appId: '2338770', desc: 'Experience hoops culture in NBA 2K24. Enjoy loads of pure action and limitless personalized options in MyCAREER.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: GTX 770' },
    { cat: 'Sports', title: 'Rocket League', appId: '252950', desc: 'A high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.', req: 'OS: Windows 10 | CPU: 2.5 GHz Dual core | RAM: 4GB | GPU: GTX 760' },
    { cat: 'Sports', title: 'F1 23', appId: '2108330', desc: 'Be the last to brake in EA SPORTS F1 23, the official videogame of the 2023 FIA Formula One World Championship. A new chapter in the thrilling story mode.', req: 'OS: Windows 10 | CPU: Intel Core i3-2130 | RAM: 8 GB | GPU: NVIDIA GTX 1050 Ti' },
    { cat: 'Sports', title: 'Madden NFL 24', appId: '2140330', desc: 'Experience the newest iteration of FieldSENSE in Madden NFL 24. More realistic character movement and smarter AI give you control to play out your gameplay strategy.', req: 'OS: Windows 10 | CPU: Intel Core i5 6700k | RAM: 10 GB | GPU: NVIDIA GeForce GTX 1050 Ti' },
    { cat: 'Sports', title: 'PGA TOUR 2K23', appId: '1588010', desc: 'Hit the links with more swagger in PGA TOUR 2K23. Now featuring playable male and female pros, including Tiger Woods, new licensed courses, more control options, and an authentic PGA TOUR MyCAREER.', req: 'OS: Windows 10 | CPU: Intel Core i5-760 | RAM: 6 GB | GPU: AMD Radeon HD 5770' },
    { cat: 'Sports', title: 'FIFA 23', appId: '1811260', desc: 'FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, both men’s and women’s FIFA World Cup™ tournaments, and more.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GeForce GTX 1050 Ti' },
    { cat: 'Sports', title: 'WWE 2K23', appId: '1942660', desc: 'Even Stronger with expanded features, gorgeous graphics, and the ultimate WWE experience. Hit the ring with a deep roster of WWE Superstars and Legends.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: NVIDIA GeForce GTX 1060' },

    // Racing
    { cat: 'Racing', title: 'Forza Horizon 5', appId: '1551360', desc: 'Blast off to the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.', req: 'OS: Windows 10 | CPU: Intel i5 | RAM: 16GB | GPU: GTX 1070' },
    { cat: 'Racing', title: 'Assetto Corsa', appId: '244210', desc: 'Features an advanced DirectX 11 graphics engine recreating an immersive environment with dynamic lighting and deeply realistic driving physics.', req: 'OS: Windows 10 | CPU: Quad-Core CPU | RAM: 6GB | GPU: GTX 660' },
    { cat: 'Racing', title: 'DiRT Rally 2.0', appId: '690790', desc: 'Carve your way through a selection of iconic rally locations from across the globe in the most powerful off-road vehicles ever made.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: GTX 1080' },
    { cat: 'Racing', title: 'Need for Speed Heat', appId: '1222680', desc: 'Hustle by day and risk it all at night in Need for Speed Heat, a thrilling race experience that pits you against a city’s rogue police force.', req: 'OS: Windows 10 | CPU: Core i5-3570 | RAM: 8 GB | GPU: GeForce GTX 760' },
    { cat: 'Racing', title: 'The Crew 2', appId: '646910', desc: 'Take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created.', req: 'OS: Windows 10 | CPU: Intel Core i5-2400s | RAM: 8 GB | GPU: NVIDIA GeForce GTX 660' },
    { cat: 'Racing', title: 'BeamNG.drive', appId: '284160', desc: 'A dynamic soft-body physics vehicle simulator capable of doing just about anything. Every component of a vehicle is simulated in real-time.', req: 'OS: Windows 10 | CPU: AMD FX 6300 | RAM: 16 GB | GPU: Radeon HD 7750' },
    { cat: 'Racing', title: 'Burnout Paradise Remastered', appId: '1238080', desc: 'Welcome back to Paradise City! Make action your middle name as you rule the streets in Burnout Paradise Remastered.', req: 'OS: Windows 10 | CPU: Intel i3 | RAM: 4GB | GPU: NVIDIA GeForce GT 640' },
    { cat: 'Racing', title: 'Dirt 5', appId: '1038250', desc: 'DIRT 5 is a fun, amplified, off-road arcade racing experience created by Codemasters. Blaze a trail on routes across the world, covering gravel, ice, snow and sand.', req: 'OS: Windows 10 | CPU: Intel Core i3 | RAM: 8GB | GPU: NVIDIA GTX 960' },

    // Strategy
    { cat: 'Strategy', title: 'Sid Meier\'s Civilization VI', appId: '289070', desc: 'Expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: GTX 770' },
    { cat: 'Strategy', title: 'Age of Empires II: Definitive Edition', appId: '813780', desc: 'Celebrate the anniversary of the most popular strategy game with stunning 4K Ultra HD graphics, a new soundtrack, and brand-new content.', req: 'OS: Windows 10 | CPU: i5 | RAM: 8GB | GPU: GTX 650' },
    { cat: 'Strategy', title: 'Hearts of Iron IV', appId: '394360', desc: 'Take command of any nation in World War II; the most engaging conflict in world history. Strategy at its deepest.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 6GB | GPU: GTX 570' },
    { cat: 'Strategy', title: 'Stellaris', appId: '281990', desc: 'Explore a vast galaxy full of wonder! Paradox Interactive presents a sci-fi grand strategy game featuring deep gameplay, rich diversity, and storytelling.', req: 'OS: Windows 10 | CPU: Intel iCore i3-530 | RAM: 4 GB | GPU: Nvidia GeForce GTX 460' },
    { cat: 'Strategy', title: 'Crusader Kings III', appId: '1158310', desc: 'Love, fight, scheme, and claim greatness. Determine your noble house’s legacy in the sprawling grand strategy of Crusader Kings III.', req: 'OS: Windows 10 | CPU: Intel Core i3-2120 | RAM: 6 GB | GPU: Nvidia GeForce GTX 460' },
    { cat: 'Strategy', title: 'Total War: WARHAMMER III', appId: '1142710', desc: 'The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here. Rally your forces and step into the Realm of Chaos.', req: 'OS: Windows 10 | CPU: Intel i3 | RAM: 6 GB | GPU: Nvidia GTX 900' },
    { cat: 'Strategy', title: 'XCOM 2', appId: '268500', desc: 'XCOM 2 is the sequel to XCOM: Enemy Unknown, the 2012 Game of the Year. Earth has changed. Twenty years have passed since world leaders offered an unconditional surrender to alien forces.', req: 'OS: Windows 7 | CPU: 2.6 GHz Quad Core | RAM: 4GB | GPU: NVIDIA GeForce GTX 460' },
    { cat: 'Strategy', title: 'Total War: THREE KINGDOMS', appId: '779340', desc: 'Total War: THREE KINGDOMS is the first in the multi-award-winning strategy series to re-create epic conflict across ancient China.', req: 'OS: Windows 7 | CPU: Intel Core i3-2100 | RAM: 4GB | GPU: GTX 650 Ti' },

    // Arcade
    { cat: 'Arcade', title: 'Street Fighter V', appId: '310950', desc: 'Experience the intensity of head-to-head battles! Choose from 16 iconic characters and battle against friends online or offline.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: GTX 960' },
    { cat: 'Arcade', title: 'TEKKEN 7', appId: '389730', desc: 'Discover the epic conclusion of the Mishima clan. Features stunning story-driven cinematic battles and intense duels powered by Unreal Engine 4.', req: 'OS: Windows 10 | CPU: Intel Core i5 | RAM: 8GB | GPU: GTX 1060' },
    { cat: 'Arcade', title: 'PAC-MAN MUSEUM+', appId: '1665130', desc: 'Play 14 different PAC-MAN games in PAC-MAN MUSEUM+! Enjoy a variety of classic to modern PAC-MAN games ranging from the maze genre to puzzle action.', req: 'OS: Windows 10 | CPU: Intel Core i3 | RAM: 4GB | GPU: GTX 750 Ti' },
    { cat: 'Arcade', title: 'Mortal Kombat 11', appId: '976310', desc: 'Mortal Kombat is back and better than ever in the next evolution of the iconic franchise. Features custom character variations and incredible fatalities.', req: 'OS: Windows 10 | CPU: Intel Core i5-750 | RAM: 8 GB | GPU: NVIDIA GeForce GTX 670' },
    { cat: 'Arcade', title: 'Dragon Ball FighterZ', appId: '678950', desc: 'DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its all-powerful fighters.', req: 'OS: Windows 10 | CPU: AMD FX-4350, 4.2 GHz | RAM: 4 GB | GPU: Radeon HD 6870' },
    { cat: 'Arcade', title: 'Guilty Gear -Strive-', appId: '1384160', desc: 'Discover the Smell of the Game with Guilty Gear -Strive-! Immerse yourself in new gameplay mechanics designed to be simple for new players to learn yet deep for veterans.', req: 'OS: Windows 10 | CPU: AMD FX-4350 | RAM: 4 GB | GPU: Radeon HD 6870' },
    { cat: 'Arcade', title: 'Injustice 2', appId: '627270', desc: 'Build and power up the ultimate version of your favorite DC legends in INJUSTICE 2. This is your Legend. Your Journey. Your Injustice.', req: 'OS: Windows 7/10 | CPU: Intel Core i5 | RAM: 4GB | GPU: NVIDIA GeForce GTX 670' },
    { cat: 'Arcade', title: 'Cuphead', appId: '268910', desc: 'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era.', req: 'OS: Windows 7 | CPU: Intel Core2 Duo E8400 | RAM: 2GB | GPU: Geforce 9600 GT' }
];

rawData.forEach((item, index) => {
    // Handling minor typo in sports iteration
    let catStr = item.cat === ' स्पोर्ट्स' ? 'Sports' : item.cat;
    
    games.push({
        id: idCounter++,
        title: item.title,
        category: catStr,
        image: `https://cdn.akamai.steamstatic.com/steam/apps/${item.appId}/header.jpg`,
        thumbnail: `https://cdn.akamai.steamstatic.com/steam/apps/${item.appId}/capsule_231x87.jpg`,
        video: `https://cdn.akamai.steamstatic.com/steam/apps/${item.appId}/microtrailer.webm`, // Animated real-world footage
        description: item.desc,
        instructions: "Full controller support, Keyboard & Mouse, customizable keybinds. Supports cloud saves and achievements.",
        requirements: item.req,
        rating: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1), // High quality ratings
        reviewsCount: Math.floor(Math.random() * 50000) + 1500,
        reviews: [
            { user: "ProGamer_99", comment: "Absolutely incredibly breathtaking experience. The visuals and gameplay mechanics are on another level compared to other games in the genre.", rating: 5 },
            { user: "CasualDave", comment: "Really solid game. Took a bit to figure out all the systems, but once it clicked I couldn't put it down. Highly recommended.", rating: 4 },
            { user: "ReviewerCritic", comment: "A masterclass in game design. The developers really listened to the community feedback. Worth every penny.", rating: 5 },
            { user: "NoobSlayer2000", comment: "Great graphics and runs smooth. Needs a bit of patching for balance, but otherwise flawless.", rating: 4 }
        ]
    });
});

window.gameDatabase = games;
