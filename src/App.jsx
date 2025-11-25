import { useState } from 'react';
import { Shuffle, Users, X, Plus, BookOpen, Dices } from 'lucide-react';

const App = () => {
  const [players, setPlayers] = useState(['', '']);
  const [includeExpansion, setIncludeExpansion] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [activeTab, setActiveTab] = useState('randomizer');

  const baseFactions = [
    {
      name: "House Atreides",
      color: "bg-green-700",
      description: "The noble house with prescient vision. Can see one future card in the battle plan phase, giving strategic advantage. Great for beginners - the ability to peek at the future is straightforward and powerful."
    },
    {
      name: "House Harkonnen",
      color: "bg-orange-700",
      description: "The treacherous house with cunning tactics. Can capture and hold traitors from other factions. Beginner-friendly with straightforward combat advantages and the thrill of betrayal."
    },
    {
      name: "Fremen",
      color: "bg-blue-700",
      description: "The desert natives with superior mobility. Move for free in sand, immune to storms, and ride sandworms. Excellent for beginners - strong in numbers and desert mobility is easy to grasp."
    },
    {
      name: "Emperor",
      color: "bg-red-700",
      description: "The imperial force with vast wealth. Gains extra spice every turn and commands powerful Sardaukar troops. Good for beginners - straightforward economic and military power."
    },
    {
      name: "Spacing Guild",
      color: "bg-purple-700",
      description: "Masters of transportation. Control who can ship troops and where. More complex - requires understanding board control and negotiation, but powerful diplomatic position."
    },
    {
      name: "Bene Gesserit",
      color: "bg-indigo-700",
      description: "The secretive sisterhood with hidden agenda. Predict who wins and when for a spiritual victory. Advanced faction - requires good game sense and patience, but offers unique victory condition."
    }
  ];

  const expansionFactions = [
    {
      name: "Ix",
      color: "bg-gray-700",
      description: "The technological innovators. Purchase and use advanced technology cards for various advantages. Moderate complexity - adds tech tree management but offers versatile strategic options."
    },
    {
      name: "Tleilaxu",
      color: "bg-slate-700",
      description: "The genetic manipulators. Resurrect forces from the tleilaxu tanks and gain ghola abilities. Complex faction - requires careful resource management and timing, but very resilient."
    }
  ];

  const factionGuides = {
    "House Atreides": {
      difficulty: "Beginner Friendly",
      startingForces: "10 forces in Arrakeen (stronghold), 10 forces in reserves (off-planet)",
      startingSpice: "10 spice",
      freeRevival: "2 forces per turn",
      specialAbility: "Prescience",
      abilityDetails: "You can see the future in three ways: (1) During bidding, you may look at the Treachery Card being auctioned while others bid blind, (2) You may look at the top card of the Spice Deck, (3) In battle, you force one opponent to reveal one element of their battle plan before cards are revealed.",
      basicRules: [
        "View Treachery Cards during bidding phase - you know what you're bidding on",
        "Look at next Spice Deck card to predict where spice will appear",
        "In battles, force opponent to show you their leader OR one card before reveal"
      ],
      advancedRules: [
        "Kwisatz Haderach: Can bring the prophesied one into play for combat bonuses",
        "Can keep written records of all Treachery Cards that have been revealed"
      ],
      strengths: [
        "Information advantage - you know what others don't",
        "Can track which Treachery Cards each player holds",
        "Predict spice locations for economic planning",
        "Strong starting position in Arrakeen stronghold",
        "Good revival rate (2 forces/turn)"
      ],
      weaknesses: [
        "No economic bonuses or special income",
        "No combat bonuses beyond knowing opponent's plan",
        "Relies on using information wisely",
        "Enemies may avoid using leaders/cards against you if they know you have prescience"
      ],
      strategies: [
        "Always look at Treachery Cards during bidding - track who buys what",
        "Share prescience information with allies for leverage in negotiations",
        "Use battle prescience to avoid traitors - if you see their traitor, don't play that leader",
        "Check Spice Deck to plan your next moves around spice locations",
        "Your information makes you valuable in alliances - use it as currency",
        "Hold Arrakeen as long as possible - it's your home stronghold"
      ],
      tips: [
        "Keep a written record of revealed cards if playing advanced rules",
        "Your prescience costs nothing - always use it",
        "Information is worthless if you don't act on it",
        "Sell information to allies but keep some secrets"
      ]
    },
    "House Harkonnen": {
      difficulty: "Beginner Friendly",
      startingForces: "10 forces in Carthag (stronghold), 10 forces in reserves (off-planet)",
      startingSpice: "10 spice",
      freeRevival: "2 forces per turn",
      specialAbility: "Traitor Manipulation",
      abilityDetails: "You excel in treachery. At setup, you draw 4 Traitor Cards and keep all of them (others keep only 1). You can capture enemy leaders as traitors even when you LOSE a battle, as long as you called the traitor correctly and the leader was in the battle. You also hold double the normal amount of Treachery Cards (8 instead of 4).",
      basicRules: [
        "Draw 4 traitors at start, keep all 4 (normally players keep only 1)",
        "Hold up to 8 Treachery Cards (others can hold only 4)",
        "If you call a traitor correctly, you capture that leader even if you lose the battle",
        "Captured leaders are worth 2 spice each and are out of the game"
      ],
      advancedRules: [
        "Captured leaders can be held or sold back to their faction",
        "Can use captive leaders to force favorable deals",
        "Family Atomics: Can use atomics more ruthlessly due to your treacherous nature"
      ],
      strengths: [
        "Most traitors in the game (4 vs everyone else's 1)",
        "Capture leaders even when losing - just needs the traitor call to be correct",
        "Hold more Treachery Cards than anyone (8 vs 4)",
        "Intimidation factor - enemies fear using leaders against you",
        "Strong starting position in Carthag stronghold",
        "Good revival rate (2 forces/turn)"
      ],
      weaknesses: [
        "Relies heavily on having the right traitors",
        "Once traitors are revealed, they become less useful",
        "No economic or military bonuses",
        "Enemies may avoid committing leaders in battles against you"
      ],
      strategies: [
        "Play aggressively early - force enemies to commit their leaders",
        "Even losing battles can be victories if you capture a traitor",
        "Bluff! Make enemies think you have traitors you don't",
        "Target factions with powerful leaders (like Atreides' Paul)",
        "Save your best traitors (like enemy faction leaders) for critical moments",
        "Use cheap leaders to bait out enemy leaders",
        "Your 8-card hand lets you hold more weapons and defenses"
      ],
      tips: [
        "Don't reveal all traitors early - keep enemies guessing",
        "2 spice per captured leader is solid income",
        "You get the traitor even if you LOSE - remember this!",
        "Threaten battles to force enemies into bad positions"
      ]
    },
    "Fremen": {
      difficulty: "Beginner Friendly",
      startingForces: "10 forces distributed as you choose on Sietch Tabr, False Wall South, and False Wall West; 10 forces in reserves (on the far side of Dune - southern hemisphere)",
      startingSpice: "3 spice (lowest starting spice)",
      freeRevival: "3 forces per turn (highest in game)",
      specialAbility: "Desert Power",
      abilityDetails: "You are the native desert warriors. Your forces are worth HALF strength in battle (2 Fremen = 1 normal force), but this means you can field twice as many troops. You move for FREE in sand territories, are IMMUNE to storms, and can ride sandworms to travel instantly across the desert. You also have a special victory condition.",
      basicRules: [
        "Movement in sand costs 0 spice (others pay 1 spice per force)",
        "Immune to storms - your forces aren't killed by sandstorms",
        "Can ride Shai-Hulud (sandworms) to instantly move forces",
        "Your forces count as 0.5 strength each (2 Fremen = 1 normal force)",
        "Shipping costs half price (due to half-strength forces)",
        "Highest revival rate: 3 forces per turn for free"
      ],
      advancedRules: [
        "Fedaykin: Elite Fremen forces may have special abilities",
        "Can choose to protect or not protect allies from sandworms"
      ],
      specialVictory: "Fremen Special Victory: If no faction wins by the end of turn 10, AND you (or no one) occupy Sietch Tabr and Habbanya Ridge Flat, AND neither Harkonnen, Atreides, nor Emperor occupies Tuek's Sietch, YOU WIN! This represents the Fremen's plans for Arrakis succeeding.",
      strengths: [
        "Best mobility on the board - free desert movement",
        "Storm immunity is huge - move when others can't",
        "Highest revival rate (3/turn) means endless troops",
        "Most cost-effective army - forces cost half to ship",
        "Can ride sandworms for surprise attacks",
        "Special victory condition gives alternate win path",
        "Start ON the planet unlike most factions"
      ],
      weaknesses: [
        "Lowest starting spice (only 3)",
        "Forces fight at half strength - need numerical superiority",
        "Must field twice as many troops to match others",
        "Early game is economically tight"
      ],
      strategies: [
        "Flood the board with cheap forces - you can afford more troops than anyone",
        "Use free movement to control multiple territories simultaneously",
        "Collect spice aggressively early game - you're broke at start",
        "Time moves with storms - you can move during them for huge advantages",
        "Ride sandworms to surprise enemies or escape danger",
        "Control Sietch Tabr and Habbanya for your special victory",
        "Your high revival means you can afford to lose battles",
        "Deny Tuek's Sietch to Atreides/Harkonnen/Emperor for special victory"
      ],
      tips: [
        "You move during storms - massive tactical advantage!",
        "2 of your forces = 1 normal force, always calculate battles accordingly",
        "Sandworm riding: instant teleportation across sand",
        "Your mobility makes you excellent alliance partners",
        "Don't fear losing troops - they come back at 3/turn"
      ]
    },
    "Emperor": {
      difficulty: "Beginner Friendly",
      startingForces: "10 forces in reserves (off-planet), 10 forces in reserves (20 total off-planet)",
      startingSpice: "10 spice",
      freeRevival: "1 force per turn (but see Sardaukar rules)",
      specialAbility: "Imperial Wealth & Sardaukar Elite Forces",
      abilityDetails: "You are the wealthiest faction. You receive ALL spice that other players spend during the Treachery Card bidding phase - this goes directly to you, not the bank. You also command the legendary Sardaukar terror troops. Your 5 starred forces (Sardaukar) are worth 2 normal forces in battle (except against Fremen, where they're worth 1).",
      basicRules: [
        "Collect all spice spent in bidding - if players bid 15 total spice, you get it all",
        "5 Sardaukar (starred) forces worth 2x strength each in battle",
        "Against Fremen: Sardaukar worth only 1x (Fremen are that tough)",
        "Sardaukar count as 1 force for revival (only 1 Sardaukar can be revived per turn)",
        "Sardaukar worth 2 when taking losses"
      ],
      advancedRules: [
        "Can support allies' revivals - pay for up to 3 extra ally forces per turn",
        "Economic strongholds may give bonus spice",
        "Your wealth makes you the diplomatic center of the game"
      ],
      strengths: [
        "Best economy - passive income every turn from bidding",
        "Sardaukar are elite troops (worth 2x normal forces)",
        "Can outbid anyone when needed",
        "Steady income allows flexibility",
        "Can fund allies and make economic alliances",
        "Good starting spice (10)"
      ],
      weaknesses: [
        "Only 5 Sardaukar - rest are normal troops",
        "Only 1 force free revival per turn (low)",
        "Early game income depends on others bidding on cards",
        "No special mobility or prescience",
        "Sardaukar lose their bonus against Fremen"
      ],
      strategies: [
        "Early game: Encourage bidding wars - you profit from all bids",
        "Don't fear spending spice - you'll earn it back from others' bids",
        "Protect your Sardaukar - they're elite but limited",
        "Use wealth to win critical bidding rounds",
        "Form alliances with poorer factions - fund them for loyalty",
        "Control economic territories like Tuek's Sietch for bonus income",
        "Mid-game: Your passive income accelerates, use it",
        "Your wealth makes you powerful in negotiations"
      ],
      tips: [
        "Income from bidding is PASSIVE - you don't do anything to earn it",
        "Sardaukar are scary - use them to threaten enemies",
        "You can afford to pay premium prices",
        "Fund allies during revival phase for loyalty",
        "Save spice early, dominate with wealth mid-game"
      ]
    },
    "Spacing Guild": {
      difficulty: "Advanced",
      startingForces: "5 forces in Tuek's Sietch, 15 forces in reserves (off-planet)",
      startingSpice: "5 spice",
      freeRevival: "1 force per turn",
      specialAbility: "Control of Space Travel",
      abilityDetails: "You control ALL shipment to and from Dune. When other factions ship forces from their reserves to Dune, they pay YOU instead of the Spice Bank. You can make three types of shipments: (1) Normal off-planet to Dune, (2) Cross-shipping - any territory to any other territory on Dune, (3) Ship forces back to reserves. You pay half-price for all shipments.",
      basicRules: [
        "Collect payment when others ship to Dune (1 spice per 2 forces shipped)",
        "Can cross-ship: move forces from any territory to any other in one action",
        "Pay half-price for your own shipments",
        "Can ship forces back to reserves (others cannot)",
        "Start in Tuek's Sietch on the planet"
      ],
      advancedRules: [
        "Ship and Move When You Wish: Take your shipment/move out of normal turn order",
        "You can go first, last, or between other players",
        "This allows surprise moves and perfect timing",
        "Allies can use your half-price shipping rate"
      ],
      specialVictory: "Spacing Guild Special Victory: If no faction wins by the end of turn 10, YOU automatically win! This represents the Guild maintaining the status quo and continuing to profit from Dune.",
      strengths: [
        "Passive income from others' shipments",
        "Cross-shipping allows incredible tactical flexibility",
        "Can move out of turn order (advanced rules)",
        "Half-price shipping saves tons of spice",
        "Special victory condition = fallback win",
        "Can ship back to reserves (escape or reposition)"
      ],
      weaknesses: [
        "Very complex - requires deep strategic understanding",
        "Low starting forces (only 5 on planet)",
        "Enemies will negotiate hard for shipping access",
        "No combat bonuses at all",
        "Easy to misuse your abilities and hurt yourself"
      ],
      strategies: [
        "Master the shipping phase - this is your power",
        "Use cross-shipping for surprise attacks or escapes",
        "Take your turn last in advanced rules for perfect information",
        "Charge others for cross-shipping access",
        "Deny critical shipments to control the board",
        "Your special victory means you benefit from stalemates",
        "Allies want your half-price rate - use it as leverage",
        "Position forces to threaten multiple areas via cross-shipping"
      ],
      tips: [
        "This is THE negotiation faction - talk constantly",
        "Predict where enemies want to ship and block them",
        "Cross-shipping is your unique advantage - use it creatively",
        "You win if the game goes long - don't rush",
        "Make enemies pay for the privilege of moving"
      ]
    },
    "Bene Gesserit": {
      difficulty: "Advanced",
      startingForces: "1 force (Advisor) in Polar Sink, 19 forces in reserves (off-planet) - 20 total forces (most in game)",
      startingSpice: "5 spice",
      freeRevival: "1 force per turn",
      specialAbility: "Spiritual Manipulation & Prediction Victory",
      abilityDetails: "At game start, secretly predict which OTHER faction will win and on which turn (turns 2-10). If that faction wins on that exact turn, YOU win instead of them! You can also use 'The Voice' once per turn to command opponents in battle to play or not play specific cards. Your forces have two sides: Advisors (peaceful) and Fighters.",
      basicRules: [
        "Prediction: Write down a faction and turn number secretly at start",
        "If that faction wins on that turn, you win instead (even if they're your ally)",
        "Voice in Battle: Force opponent to play/not play a weapon, defense, or worthless card",
        "Spiritual Advisors: Coexist peacefully with other forces (don't cause battles)",
        "Free shipping: When anyone ships from off-planet, you can ship 1 Advisor to that territory for free",
        "Advisors can flip to Fighters to actually fight"
      ],
      advancedRules: [
        "Karama: Can use any worthless card as a Karama card",
        "CHOAM Charity: Always get 2 spice, even if you have more than 1 spice",
        "Can ship Advisors to same territory others ship to (instead of Polar Sink)"
      ],
      strengths: [
        "Unique prediction victory - can win without strongholds",
        "Most forces in game (20 total)",
        "Voice is incredibly versatile",
        "Advisors coexist peacefully - spy on enemies",
        "Free shipping when others ship",
        "Excellent for alliance play"
      ],
      weaknesses: [
        "Prediction must be exact - faction AND turn",
        "If prediction wrong, must win normally (hard)",
        "Voice is once per turn only",
        "Requires patience and good game reading",
        "Start with only 1 force on planet"
      ],
      strategies: [
        "Predict conservatively: pick a likely winner on turn 5-7",
        "Never predict yourself - very hard to win normally with BG",
        "Use Voice to force honesty in deals: 'Voice: tell me if you have a traitor for Paul'",
        "Voice in battle to turn losses into wins at critical moments",
        "Stay in the game but don't dominate - let your prediction target win",
        "Join the alliance of your prediction target",
        "Use Advisors to spy in territories without fighting",
        "Manipulate game pace to hit your predicted turn"
      ],
      tips: [
        "Predict someone who's likely to win anyway",
        "Voice is best for DEALS, not just battles",
        "You have 20 forces - more than anyone - use them for leverage",
        "Be patient - rushing helps others, not your prediction",
        "Your win is secret - nobody knows until it happens"
      ]
    },
    "Ix": {
      difficulty: "Intermediate",
      startingForces: "20 forces in reserves (off-planet) - all off-planet at start",
      startingSpice: "5 spice",
      freeRevival: "2 forces per turn",
      specialAbility: "Technological Superiority & Hidden Mobile Stronghold",
      abilityDetails: "You control advanced technology through Tech Tokens. There are 3 Tech Tokens (Banking, Shipping, Heighliners). You start with one and can capture others by winning battles. Controlling all 3 Tech Tokens counts as controlling 1 stronghold! You also have a Hidden Mobile Stronghold that starts hidden and can move.",
      basicRules: [
        "Tech Tokens: Earn spice based on game actions",
        "Banking Token: Collect 1 spice per token when anyone takes CHOAM Charity",
        "Shipping Token: Collect 1 spice per token when anyone (including you) ships from off-planet",
        "Heighliners Token: Collect 1 spice per token when anyone ships from off-planet",
        "Steal Tech: If you win a battle against someone holding a Tech Token, you take it",
        "All 3 Tokens = 1 Stronghold for victory purposes",
        "Hidden Mobile Stronghold: Starts hidden, can be revealed to any territory with your forces"
      ],
      advancedRules: [
        "Can look at Treachery Cards during bidding (like Atreides)",
        "Mobile Stronghold can move to different territories",
        "Tech income stacks with multiple tokens"
      ],
      strengths: [
        "Flexible economy through Tech Tokens",
        "Hidden stronghold can't be attacked until revealed",
        "Can view Treachery Cards during bidding",
        "Passive income from tech scales throughout game",
        "Good revival rate (2/turn)",
        "Tech stealing adds combat incentive"
      ],
      weaknesses: [
        "Start entirely off-planet (no board presence)",
        "Must fight to collect all 3 Tech Tokens",
        "Tech income depends on others' actions",
        "Hidden stronghold only works once (after revealed, it's known)",
        "More complex economy to track"
      ],
      strategies: [
        "Early: Fight whoever has Tech Tokens to collect them",
        "Holding all 3 tokens = effective 4th stronghold",
        "Keep mobile stronghold hidden until you can win with it",
        "Tech income is passive - scales as game progresses",
        "Viewing cards during bidding helps you bid wisely",
        "Position forces to threaten multiple token-holders",
        "Reveal stronghold when you control 2 regular strongholds + have all tokens"
      ],
      tips: [
        "Track who has which Tech Tokens constantly",
        "Tech income adds up fast mid-game",
        "Hidden stronghold: reveal only when you can WIN immediately",
        "All 3 tokens = you effectively need only 2 more strongholds",
        "Your card viewing makes you valuable to allies"
      ]
    },
    "Tleilaxu": {
      difficulty: "Advanced",
      startingForces: "20 forces in reserves (off-planet) - all off-planet at start",
      startingSpice: "2 spice (lowest in game with expansion)",
      freeRevival: "2 forces per turn",
      specialAbility: "Genetic Mastery & Face Dancers",
      abilityDetails: "Instead of normal traitors, you have Face Dancers - shape-shifting assassins. After other players select traitors, you take the top 3 cards from the Traitor deck. After ANY faction wins a battle, you may reveal their leader to be your Face Dancer (works like a traitor). All forces killed in ANY battle go to Tleilaxu Tanks, not out of play. You can revive forces from tanks, making you extremely resilient.",
      basicRules: [
        "Face Dancers: Take 3 random traitor cards after others pick theirs",
        "After anyone wins a battle, reveal if their leader is your Face Dancer",
        "Face Dancers eliminate the leader and force even if YOU weren't in the battle",
        "Tleilaxu Tanks: ALL forces killed in game go to tanks (not just yours)",
        "Can revive forces from tanks to any territory you occupy",
        "Unlike normal revival, you can revive to anywhere you have forces"
      ],
      advancedRules: [
        "Face Dancers can be used multiple times if they survive",
        "Can negotiate with others to revive their forces for them (for spice)",
        "Ghola leaders: Can bring back dead leaders"
      ],
      strengths: [
        "Face Dancers work in ANY battle, not just yours",
        "Tanks accumulate ALL killed forces - massive resource pool",
        "Revive anywhere you have forces (others revive off-planet only)",
        "Extremely resilient - forces keep coming back",
        "Can outlast everyone in attrition",
        "Face Dancers create paranoia in every battle"
      ],
      weaknesses: [
        "Lowest starting spice in game with expansions (only 2)",
        "Complex resource management",
        "Face Dancers are random - might not get good ones",
        "Start entirely off-planet",
        "Early game is economically brutal"
      ],
      strategies: [
        "Early game: Survive and collect spice desperately",
        "Let others battle - their losses go to your tanks",
        "Face Dancers create fear - use it in negotiations",
        "Revive to forward positions, not just reserves",
        "Play the long game - you get stronger as forces die",
        "Trade tank revivals for alliances/spice",
        "Conserve early, dominate late when tanks are full"
      ],
      tips: [
        "Face Dancers work in battles you're NOT in - huge advantage",
        "Track your tanks - know what you can revive",
        "Everyone's dead forces eventually benefit you",
        "Early game is rough - focus on not dying",
        "Late game you're nearly unkillable",
        "Negotiate: 'I'll revive your leader for 5 spice'"
      ]
    }
  };

  const availableFactions = includeExpansion 
    ? [...baseFactions, ...expansionFactions]
    : baseFactions;

  const addPlayer = () => {
    if (players.length < 6) {
      setPlayers([...players, '']);
    }
  };

  const removePlayer = (index) => {
    if (players.length > 2) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  const updatePlayer = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const randomizeFactions = () => {
    const filledPlayers = players.filter(p => p.trim() !== '');
    
    if (filledPlayers.length < 2) {
      alert('Please enter at least 2 player names!');
      return;
    }

    if (filledPlayers.length > availableFactions.length) {
      alert(`Not enough factions! ${includeExpansion ? 'Enable' : 'You have'} ${availableFactions.length} factions available for ${filledPlayers.length} players.`);
      return;
    }

    // Shuffle factions
    const shuffledFactions = [...availableFactions]
      .sort(() => Math.random() - 0.5)
      .slice(0, filledPlayers.length);

    // Create assignments
    const newAssignments = filledPlayers.map((player, index) => ({
      player,
      faction: shuffledFactions[index]
    }));

    setAssignments(newAssignments);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-orange-950 to-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-amber-400 mb-2 tracking-wider">
            DUNE
          </h1>
          <p className="text-amber-200 text-xl">Faction Randomizer & Guide</p>
          <p className="text-amber-300/70 text-sm mt-2">A game of conquest, diplomacy, and betrayal</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 bg-black/40 backdrop-blur rounded-lg p-2 border border-amber-700/30">
          <button
            onClick={() => setActiveTab('randomizer')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'randomizer'
                ? 'bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg'
                : 'text-amber-300 hover:bg-black/30'
            }`}
          >
            <Dices size={20} />
            Randomizer
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg'
                : 'text-amber-300 hover:bg-black/30'
            }`}
          >
            <BookOpen size={20} />
            Faction Guides
          </button>
        </div>

        {/* Randomizer Tab */}
        {activeTab === 'randomizer' && (
          <div>
            {/* Player Input Section */}
        <div className="bg-black/40 backdrop-blur rounded-lg p-6 mb-6 border border-amber-700/30">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-amber-300 flex items-center gap-2">
              <Users size={24} />
              Players ({players.length})
            </h2>
            {players.length < 6 && (
              <button
                onClick={addPlayer}
                className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={18} />
                Add Player
              </button>
            )}
          </div>

          <div className="space-y-3">
            {players.map((player, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  value={player}
                  onChange={(e) => updatePlayer(index, e.target.value)}
                  placeholder={`Player ${index + 1} name`}
                  className="flex-1 bg-black/50 border border-amber-700/50 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
                {players.length > 2 && (
                  <button
                    onClick={() => removePlayer(index)}
                    className="bg-red-900/50 hover:bg-red-800/70 text-red-300 px-3 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input
              type="checkbox"
              id="expansion"
              checked={includeExpansion}
              onChange={(e) => setIncludeExpansion(e.target.checked)}
              className="w-5 h-5 rounded border-amber-700 bg-black/50 checked:bg-amber-600 focus:ring-2 focus:ring-amber-500"
            />
            <label htmlFor="expansion" className="text-amber-200 cursor-pointer">
              Include expansion factions (Ix & Tleilaxu)
            </label>
          </div>

          <button
            onClick={randomizeFactions}
            className="w-full mt-6 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <Shuffle size={24} />
            Randomize Factions
          </button>
        </div>

        {/* Results Section */}
        {assignments.length > 0 && (
          <div className="bg-black/40 backdrop-blur rounded-lg p-6 border border-amber-700/30">
            <h2 className="text-2xl font-semibold text-amber-300 mb-6 text-center">
              Faction Assignments
            </h2>
            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-black/60 to-black/40 rounded-lg p-5 border border-amber-700/30 hover:border-amber-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`${assignment.faction.color} text-white px-4 py-2 rounded-lg font-semibold min-w-[180px] text-center shadow-lg`}>
                      {assignment.faction.name}
                    </div>
                    <div className="text-amber-200 text-lg">→</div>
                    <div className="text-amber-100 text-xl font-semibold">
                      {assignment.player}
                    </div>
                  </div>
                  <p className="text-amber-300/80 text-sm leading-relaxed ml-1">
                    {assignment.faction.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-700/30">
              <p className="text-amber-300/90 text-sm text-center italic">
                "He who controls the spice controls the universe!"
              </p>
            </div>
          </div>
        )}

        {/* Beginner Tips */}
        <div className="mt-6 bg-black/30 backdrop-blur rounded-lg p-5 border border-amber-700/20">
          <h3 className="text-amber-400 font-semibold mb-2">Beginner Tips:</h3>
          <ul className="text-amber-300/80 text-sm space-y-1 list-disc list-inside">
            <li>Atreides, Harkonnen, Fremen, and Emperor are most beginner-friendly</li>
            <li>Spacing Guild and Bene Gesserit require more game knowledge</li>
            <li>Expansion factions add complexity - try base game first</li>
            <li>Each faction plays very differently - embrace your unique abilities!</li>
          </ul>
        </div>
          </div>
        )}

        {/* Faction Guide Tab */}
        {activeTab === 'guide' && (
          <div className="space-y-6">
            {Object.entries(factionGuides).map(([factionName, guide]) => {
              const faction = [...baseFactions, ...expansionFactions].find(f => f.name === factionName);
              return (
                <div key={factionName} className="bg-black/40 backdrop-blur rounded-lg p-6 border border-amber-700/30">
                  {/* Faction Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${faction.color} text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg`}>
                      {factionName}
                    </div>
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                        guide.difficulty === 'Beginner Friendly' 
                          ? 'bg-green-700 text-white' 
                          : guide.difficulty === 'Intermediate'
                          ? 'bg-yellow-700 text-white'
                          : 'bg-red-700 text-white'
                      }`}>
                        {guide.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Starting Conditions */}
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-black/30 p-3 rounded border border-amber-700/20">
                      <div className="text-amber-400 text-sm font-semibold mb-1">Starting Forces</div>
                      <div className="text-amber-200 text-sm">{guide.startingForces}</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded border border-amber-700/20">
                      <div className="text-amber-400 text-sm font-semibold mb-1">Starting Spice</div>
                      <div className="text-amber-200 text-sm">{guide.startingSpice}</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded border border-amber-700/20">
                      <div className="text-amber-400 text-sm font-semibold mb-1">Free Revival</div>
                      <div className="text-amber-200 text-sm">{guide.freeRevival}</div>
                    </div>
                  </div>

                  {/* Special Ability */}
                  <div className="mb-4">
                    <div className="text-amber-400 text-lg font-semibold mb-2">
                      Special Ability: {guide.specialAbility}
                    </div>
                    <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-700/30">
                      <div className="text-amber-300 text-sm leading-relaxed">
                        {guide.abilityDetails}
                      </div>
                    </div>
                  </div>

                  {/* Basic Rules */}
                  {guide.basicRules && (
                    <div className="mb-4">
                      <h4 className="text-cyan-400 font-semibold mb-2">📘 Basic Rules</h4>
                      <ul className="space-y-1">
                        {guide.basicRules.map((rule, idx) => (
                          <li key={idx} className="text-cyan-200 text-sm pl-4">
                            • {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Advanced Rules */}
                  {guide.advancedRules && (
                    <div className="mb-4 bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
                      <h4 className="text-purple-300 font-semibold mb-2">⚡ Advanced Rules (Optional)</h4>
                      <ul className="space-y-1">
                        {guide.advancedRules.map((rule, idx) => (
                          <li key={idx} className="text-purple-200 text-sm pl-4">
                            • {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Special Victory Condition */}
                  {guide.specialVictory && (
                    <div className="mb-4 bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                      <h4 className="text-yellow-300 font-semibold mb-2">🏆 Special Victory Condition</h4>
                      <p className="text-yellow-200 text-sm">{guide.specialVictory}</p>
                    </div>
                  )}

                  {/* Strengths and Weaknesses */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">✓</span> Strengths
                      </h4>
                      <ul className="space-y-1">
                        {guide.strengths.map((strength, idx) => (
                          <li key={idx} className="text-amber-200 text-sm pl-4">
                            • {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-lg">✗</span> Weaknesses
                      </h4>
                      <ul className="space-y-1">
                        {guide.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-amber-200 text-sm pl-4">
                            • {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Strategies */}
                  <div className="mb-4">
                    <h4 className="text-amber-400 font-semibold mb-2">📋 Key Strategies</h4>
                    <ul className="space-y-2">
                      {guide.strategies.map((strategy, idx) => (
                        <li key={idx} className="text-amber-200 text-sm pl-4">
                          {idx + 1}. {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Pro Tips</h4>
                    <ul className="space-y-1">
                      {guide.tips.map((tip, idx) => (
                        <li key={idx} className="text-blue-200 text-sm pl-4">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* General Tips */}
            <div className="bg-black/40 backdrop-blur rounded-lg p-6 border border-amber-700/30">
              <h3 className="text-amber-400 font-bold text-xl mb-4">General Beginner Advice</h3>
              <div className="space-y-3 text-amber-200 text-sm">
                <p><strong>Victory Condition:</strong> Control 3 strongholds at the end of a turn to win alone, or 4 strongholds as an alliance. The 5 strongholds are: Arrakeen, Carthag, Tuek's Sietch, Sietch Tabr, and Habbanya Ridge Flat.</p>
                <p><strong>Alliances:</strong> Can only form/break during a Nexus (when Shai-Hulud appears). Maximum 2 factions per alliance. Allies win together but need 4 strongholds instead of 3.</p>
                <p><strong>Spice Economy:</strong> You need spice for shipping troops (1 spice per 2 forces), bidding on Treachery Cards, and revivals. Collect from spice blows or specific territories.</p>
                <p><strong>Treachery Cards:</strong> Bid on these each turn. They contain weapons, defenses, special cards. Maximum 4 cards normally (Harkonnen can hold 8).</p>
                <p><strong>Battle Resolution:</strong> Secret dials of Forces + Leader + Cards. Traitors can eliminate enemy leaders. Winner takes territory, both sides lose forces.</p>
                <p><strong>The Storm:</strong> Moves each turn, kills unprotected forces (strongholds and Polar Sink are safe). Only Fremen are immune.</p>
                <p><strong>Traitors:</strong> Each player has 1 traitor (Harkonnen has 4). If you call an enemy traitor correctly in battle, their entire force is eliminated.</p>
                <p><strong>Game Length:</strong> Maximum 10 turns. Some factions have special victory conditions if no one wins by then.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;