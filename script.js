/* ================================
   BRAINROT SCANNER — SCRIPT.JS
   ================================ */

/* ========================
   1. DATA — SPECIES
   ======================== */
const SPECIES = [
  // ORIGINAL CLASSICS
  { name: "Tralalero Bananero",        emoji: "🍌", desc: "The Dancing Banana God" },
  { name: "Ballerina Galonina",        emoji: "🩰", desc: "The Graceful Chaos Dancer" },
  { name: "Sigma Galonus",             emoji: "⚡", desc: "The Lone Wolf Overlord" },
  { name: "Capuccino Destroyer",       emoji: "☕", desc: "The Caffeine Annihilator" },
  { name: "Tung Tung Sahurinator",     emoji: "🥁", desc: "The Midnight Drummer" },
  { name: "Mie Goreng Titan",          emoji: "🍜", desc: "The Noodle Behemoth" },
  { name: "Kucing Galon Supreme",      emoji: "🐱", desc: "The Gallon Cat Deity" },
  { name: "Bakso Annihilator",         emoji: "🍡", desc: "The Meatball Destroyer" },
  { name: "Es Teh Overlord",           emoji: "🧊", desc: "The Iced Tea Sovereign" },
  { name: "Sosis Megalodon",           emoji: "🌭", desc: "The Ancient Sausage Beast" },
  // MORE ORIGINALS
  { name: "Indomie Colossus",          emoji: "🍝", desc: "The Instant Noodle Giant" },
  { name: "Ayam Geprek Berserker",     emoji: "🍗", desc: "The Smashed Chicken Warrior" },
  { name: "Boba Phantom",             emoji: "🧋", desc: "The Bubble Tea Ghost" },
  { name: "Rendang Leviathan",         emoji: "🥩", desc: "The Slow-Cook Sea Monster" },
  { name: "Nasi Padang Oracle",        emoji: "🍛", desc: "The All-Knowing Rice God" },
  { name: "Kerupuk Ultraman",          emoji: "🦸", desc: "The Cracker Hero" },
  { name: "Gorengan Phantom",          emoji: "🍟", desc: "The Fried Snack Specter" },
  { name: "Tempe Titan",               emoji: "🟫", desc: "The Fermented Bean Colossus" },
  { name: "Pempek Devourer",           emoji: "🐟", desc: "The Fish Cake Eater of Worlds" },
  { name: "Satay Warlord",             emoji: "🍢", desc: "The Skewer Conqueror" },
  // INTERNET BRAINROT CROSSOVERS
  { name: "Rizz Incarnate",            emoji: "😎", desc: "The Charm Embodiment" },
  { name: "NPC Supreme",               emoji: "🤖", desc: "The Background Character God" },
  { name: "Skibidi Colossus",          emoji: "🚽", desc: "The Toilet Titan" },
  { name: "Ohio Final Boss",           emoji: "👁️", desc: "The Most Ohio Thing Ever" },
  { name: "Griddy Performer",          emoji: "🏈", desc: "The Eternal Touchdown Dancer" },
  { name: "Boykisser Alpha",           emoji: "🐾", desc: "The Furry Apex Predator" },
  { name: "Gyatt Commander",           emoji: "💪", desc: "The Legendary Gym Entity" },
  { name: "Ratio Distributor",         emoji: "📊", desc: "The Twitter Slayer" },
  { name: "Looksmaxxing Deity",        emoji: "🪞", desc: "The Self-Improvement God" },
  { name: "Based Sigma Overlord",      emoji: "🦁", desc: "The Undefeated Alpha" },
  // INDONESIAN VIRAL
  { name: "Prabowo Gigachad",          emoji: "🦅", desc: "The National Energy Force" },
  { name: "Pak RT Omnipotent",         emoji: "📋", desc: "The Neighborhood Admin God" },
  { name: "Warung Madura Eternal",     emoji: "🏪", desc: "The 24-Hour Legend" },
  { name: "Angkot Driver Supreme",     emoji: "🚌", desc: "The Street Racing Deity" },
  { name: "Jokowi Bambu",              emoji: "🎋", desc: "The Bamboo Messenger" },
  { name: "Grab Driver Phantom",       emoji: "🛵", desc: "The Delivery Ghost" },
  { name: "Ibu-Ibu PKK Titan",         emoji: "👩", desc: "The Gossip Network Node" },
  { name: "Bapak Kos Omniscient",      emoji: "🔑", desc: "The All-Knowing Landlord" },
  { name: "Wi-Fi Tetangga Seeker",     emoji: "📶", desc: "The Signal Hunter" },
  { name: "Anak Jaksel Sigma",         emoji: "🎤", desc: "The Mixed-Language God" },
  // ABSURD NATURE ENTITIES
  { name: "Quantum Kuaci",             emoji: "🌻", desc: "The Subatomic Sunflower Seed" },
  { name: "Dark Matter Cendol",        emoji: "🟢", desc: "The Invisible Green Jelly" },
  { name: "Hyperdimensional Tahu",     emoji: "🟡", desc: "The Tofu from Beyond" },
  { name: "Antimatter Pindang",        emoji: "🐠", desc: "The Fish Soup Obliterator" },
  { name: "Fifth Dimensional Dodol",   emoji: "🍬", desc: "The Sticky Candy Paradox" },
  { name: "Ultraviolet Kecap",         emoji: "🟫", desc: "The Invisible Soy Sauce" },
  { name: "Cosmic Wedang Jahe",        emoji: "🌶️", desc: "The Universe Ginger Tea" },
  { name: "Singularity Opor Ayam",     emoji: "🍲", desc: "The Coconut Curry Void" },
  { name: "Infinite Ketoprak",         emoji: "🥜", desc: "The Endless Peanut Sauce" },
  { name: "Recursive Lontong",         emoji: "🟩", desc: "The Self-Referential Rice Cake" },
  // MYTH & LEGENDS
  { name: "Naga Galon Immortal",       emoji: "🐉", desc: "The Water Dragon Overlord" },
  { name: "Jailangkung Sigma",         emoji: "👻", desc: "The Sigma Ghost Entity" },
  { name: "Wewe Gombel Supreme",       emoji: "👁️", desc: "The Ancient Child Collector" },
  { name: "Genderuwo Titan",           emoji: "💀", desc: "The Forest Giant Demon" },
  { name: "Leak Destroyer",            emoji: "🔮", desc: "The Balinese Dark Sorcerer" },
  { name: "Tuyul Speedrunner",         emoji: "👶", desc: "The Money-Stealing Sprinter" },
  { name: "Sundel Bolong Phantom",     emoji: "🩸", desc: "The Holed Spirit" },
  { name: "Pocong Parkour Master",     emoji: "🤸", desc: "The Sheet-Wrapped Athlete" },
  { name: "Kuntilanak Rizz",           emoji: "💋", desc: "The Charming Banshee" },
  { name: "Babi Ngepet Mogul",         emoji: "🐷", desc: "The Wealth-Seeking Boar" },
  // COSMIC TIER
  { name: "Black Hole Martabak",       emoji: "⚫", desc: "The Pancake That Eats Galaxies" },
  { name: "Neutron Star Klepon",       emoji: "🌟", desc: "The Dense Pandan Ball" },
  { name: "Pulsar Getuk",              emoji: "💥", desc: "The Rotating Cassava Emitter" },
  { name: "Supernova Rawon",           emoji: "✨", desc: "The Black Soup Explosion" },
  { name: "Event Horizon Gulai",       emoji: "🌀", desc: "The Curry of No Return" },
  { name: "Nebula Sekoteng",           emoji: "🌌", desc: "The Star-Forming Hot Drink" },
  { name: "Quasar Coto Makassar",      emoji: "⚡", desc: "The Brightest Soup in Universe" },
  { name: "Wormhole Cincau",           emoji: "🕳️", desc: "The Grass Jelly Portal" },
  { name: "Multiverse Siomay",         emoji: "🌐", desc: "The Dumpling Across Realities" },
  { name: "Parallel Universe Gado-Gado", emoji: "🥗", desc: "The Infinite Peanut Dimension" },
  // GAMER / ESPORTS TIER
  { name: "Pro Player Nasi Uduk",      emoji: "🎮", desc: "The Clutch Rice Fighter" },
  { name: "Noob Destroyer Sambal",     emoji: "🔥", desc: "The Chili Sauce Killer" },
  { name: "AFK Bubur Ayam",            emoji: "🍚", desc: "The Idle Porridge Entity" },
  { name: "Headshot Pecel",            emoji: "🎯", desc: "The Accurate Veggie Warrior" },
  { name: "GG EZ Lupis",               emoji: "🎉", desc: "The Easy Win Rice Cake" },
  { name: "Ranked Solo Queue Jenang",  emoji: "😤", desc: "The Tryhard Purple Porridge" },
  { name: "Mid Lane Tape Goreng",      emoji: "🏆", desc: "The Fried Banana Carry" },
  { name: "Support Main Kue Putu",     emoji: "💚", desc: "The Healer Rice Cake" },
  { name: "Jungler Basecamp Lapis",    emoji: "🎂", desc: "The Layer Cake Ganker" },
  { name: "Backdoor Wingko Babat",     emoji: "💨", desc: "The Sneaky Coconut Cake" },
  // OFFICE LIFE TIER
  { name: "Deadline Ketoprak Titan",   emoji: "📅", desc: "The Last-Minute Noodle God" },
  { name: "Meeting Zoom Phantom",      emoji: "💻", desc: "The Background Blur Spirit" },
  { name: "Excel Guru Martabak",       emoji: "📊", desc: "The Spreadsheet Pancake Master" },
  { name: "Overtime Kopi Hitam",       emoji: "☕", desc: "The Midnight Coffee Grinder" },
  { name: "KPI Seblak Overlord",       emoji: "📈", desc: "The Target-Hitting Spicy Soup" },
  // SCHOOL LIFE TIER
  { name: "Contekan Teri Nasi",        emoji: "📝", desc: "The Cheat Sheet Anchovy Rice" },
  { name: "PR Belum Selesai Kupat",    emoji: "😰", desc: "The Unfinished Homework Cake" },
  { name: "Nilai Sempurna Pukis",      emoji: "💯", desc: "The Perfect Score Cake" },
  { name: "Bolos Kelas Otak-Otak",     emoji: "🏃", desc: "The Class-Skipping Fish Cake" },
  { name: "Guru Killer Cilok",         emoji: "😱", desc: "The Scary Teacher Ball" },
  // ULTIMATE RARE TIER
  { name: "Omnipotent Nasi Kucing",    emoji: "🐱", desc: "The All-Powerful Cat Rice" },
  { name: "The Final Sate Padang",     emoji: "🌟", desc: "The Last Satay Standing" },
  { name: "Alpha Omega Peuyeum",       emoji: "♾️", desc: "The Fermented Cassava of Infinity" },
  { name: "Ultra Instinct Rujak",      emoji: "⚡", desc: "The Intuitive Fruit Salad" },
  { name: "Godlike Tahu Gejrot",       emoji: "👑", desc: "The Divine Crumbled Tofu" },
  { name: "Transcendent Dawet",        emoji: "🌊", desc: "The Beyond-Reality Coconut Drink" },
  { name: "Absolute Zero Arum Manis",  emoji: "🌪️", desc: "The Cotton Candy of Oblivion" },
  { name: "Eternal Flame Cabe Rawit",  emoji: "🌶️", desc: "The Undying Chili Fire" },
  { name: "Infinite Loop Keciput",     emoji: "∞", desc: "The Recursive Fried Dough" },
  { name: "The One Brainrot",          emoji: "🧠", desc: "The Source of All Brainrot" },
];

/* ========================
   2. DATA — TITLES
   ======================== */
const TITLES = [
  "The Last Dancer", "King of Galons", "Destroyer of Cappuccino",
  "Guardian of Indomie", "The Eternal Sigma", "Master of Brainrot",
  "The Forgotten Titan", "Lord of Chaos", "The Final Ballerina",
  "Conqueror of Mie Goreng", "The Chosen Bakso", "Ruler of All Noodles",
  "The Unseen Force", "Wielder of Sambal", "The Midnight Screamer",
  "Protector of Es Teh", "The Ancient One", "Bringer of Kerupuk",
  "The Sigma Oracle", "Avatar of Brainrot", "The Celestial Sate",
  "Destroyer of Limits", "The Lone Wolf", "Champion of Chaos",
  "The Eternal NPC", "God of the Grind", "The Rizz Overlord",
  "Keeper of Ohio", "The Dark Matter Eater", "Lord of the Skibidi",
  "The Unstoppable", "Myth of the Ages", "The Final Form",
  "Collector of Aura", "The Power Incarnate", "Herald of Chaos",
  "The Silent Destroyer", "Alpha and Omega", "The True Sigma",
  "Beyond All Reason", "The Ascended One", "Master of the Feed",
  "The Viral Entity", "King of the Comments", "The Legendary Viewer",
  "The Certified Icon", "No Cap Forever", "Gyatt Supreme Being",
  "The Based Entity", "The Unmatched One", "Vessel of Pure Chaos",
  "The Chosen Viewer", "Lord of the TikTok", "The Absolute Unit",
  "The Gigachad Manifested", "Beyond Human Comprehension", "The Algorithm Breaker",
  "The Trend Setter", "First of the Name", "The Undiscovered Legend",
];

/* ========================
   3. DATA — RARITY SYSTEM
   ======================== */
const RARITIES = [
  { id: "common",    label: "COMMON",    weight: 50.00, icon: "◆",   color: "#888899" },
  { id: "rare",      label: "RARE",      weight: 25.00, icon: "◈",   color: "#3399ff" },
  { id: "epic",      label: "EPIC",      weight: 12.00, icon: "✦",   color: "#aa44ff" },
  { id: "legendary", label: "LEGENDARY", weight:  7.00, icon: "★",   color: "#ffcc00" },
  { id: "mythic",    label: "MYTHIC",    weight:  4.00, icon: "⚡",   color: "#ff2244" },
  { id: "og",        label: "OG",        weight:  1.50, icon: "◉",   color: "#00ff88" },
  { id: "celestial", label: "CELESTIAL", weight:  0.40, icon: "✧",   color: "#aaddff" },
  { id: "eternal",   label: "ETERNAL",   weight:  0.10, icon: "∞",   color: "#ff0080" },
];

/* ========================
   4. SCAN MESSAGES
   ======================== */
const SCAN_MESSAGES = [
  "Initializing neural scan...",
  "Detecting brainrot frequency...",
  "Analyzing chaos level...",
  "Scanning aura signature...",
  "Measuring sigma energy...",
  "Calculating brainrot coefficient...",
  "Cross-referencing species database...",
  "Locking onto target...",
  "Species identification in progress...",
  "Finalizing rarity calculation...",
  "Almost there...",
];

/* ========================
   5. STATE
   ======================== */
let totalScans    = 0;
let legendaryPlus = 0;
let history       = [];

/* ========================
   6. RARITY SELECTOR
   ======================== */
function rollRarity() {
  const roll = Math.random() * 100;
  let cumulative = 0;
  for (const r of RARITIES) {
    cumulative += r.weight;
    if (roll < cumulative) return r;
  }
  return RARITIES[0]; // fallback
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ========================
   7. SOUND ENGINE
   Using Web Audio API for synthetic tones — no files needed!
   ======================== */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playSweep(freqStart, freqEnd, duration, gainVal = 0.15, type = 'sine') {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freqEnd, ctx.currentTime + duration);
    gain.gain.setValueAtTime(gainVal, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function playRaritySound(rarityId) {
  switch(rarityId) {
    case 'common':    playSweep(300, 500, 0.3, 0.08); break;
    case 'rare':      playSweep(400, 800, 0.5, 0.12); break;
    case 'epic':      playSweep(200, 900, 0.7, 0.15, 'sawtooth'); break;
    case 'legendary':
      playSweep(300, 1200, 0.6, 0.18);
      setTimeout(() => playSweep(600, 1800, 0.4, 0.12), 300);
      break;
    case 'mythic':
      playSweep(100, 1500, 0.8, 0.2, 'square');
      setTimeout(() => playSweep(800, 2000, 0.5, 0.15), 400);
      break;
    case 'og':
      for (let i = 0; i < 3; i++) {
        setTimeout(() => playSweep(600 + i*200, 1400 + i*200, 0.3, 0.12), i * 150);
      }
      break;
    case 'celestial':
      for (let i = 0; i < 5; i++) {
        setTimeout(() => playSweep(800 + i*150, 2000 + i*100, 0.4, 0.1), i * 80);
      }
      break;
    case 'eternal':
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          playSweep(200 + i*150, 2000 + i*100, 0.5, 0.15, i % 2 === 0 ? 'sine' : 'sawtooth');
        }, i * 60);
      }
      break;
  }
}

/* ========================
   8. PARTICLES
   ======================== */
const canvas = document.getElementById('particleCanvas');
const ctx2d   = canvas.getContext('2d');
let particles = [];
let animFrame;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function spawnParticle(x, y, color, count = 1) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 0.5;
    particles.push({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (y != null ? 1 : 0),
      size: Math.random() * 3 + 1,
      color: color ?? `hsl(${180 + Math.random() * 60}, 100%, 60%)`,
      life: 1,
      decay: Math.random() * 0.02 + 0.005,
    });
  }
}

function ambientParticles() {
  if (Math.random() < 0.15) {
    spawnParticle(
      Math.random() * canvas.width,
      canvas.height + 10,
      `hsl(${180 + Math.random() * 60}, 100%, 60%)`
    );
  }
}

function drawParticles() {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height);
  ambientParticles();
  particles = particles.filter(p => p.life > 0);
  for (const p of particles) {
    ctx2d.save();
    ctx2d.globalAlpha = p.life;
    ctx2d.fillStyle = p.color;
    ctx2d.shadowBlur = 10;
    ctx2d.shadowColor = p.color;
    ctx2d.beginPath();
    ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx2d.fill();
    ctx2d.restore();
    p.x += p.vx;
    p.y += p.vy;
    p.vy -= 0.05;
    p.life -= p.decay;
  }
  animFrame = requestAnimationFrame(drawParticles);
}
drawParticles();

function burstParticles(rarityId) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const colorMap = {
    common:    '#888899', rare: '#3399ff', epic: '#aa44ff',
    legendary: '#ffcc00', mythic: '#ff2244', og: '#00ff88',
    celestial: '#aaddff', eternal: '#ff0080',
  };
  const countMap = {
    common: 10, rare: 20, epic: 35, legendary: 60,
    mythic: 80, og: 80, celestial: 120, eternal: 250,
  };
  const col   = colorMap[rarityId] ?? '#00f0ff';
  const count = countMap[rarityId] ?? 10;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    const colors = rarityId === 'eternal'
      ? ['#ff0080','#ffff00','#00ffcc','#7b2fff'][Math.floor(Math.random()*4)]
      : col;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 5 + 2,
      color: colors,
      life: 1,
      decay: Math.random() * 0.015 + 0.008,
    });
  }
}

/* ========================
   9. SCREEN SHAKE
   ======================== */
function screenShake(intensity = 10, duration = 500) {
  const app = document.getElementById('app');
  app.style.transition = 'none';
  let start = null;
  function shake(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    if (elapsed < duration) {
      const factor = 1 - elapsed / duration;
      const x = (Math.random() - 0.5) * intensity * 2 * factor;
      const y = (Math.random() - 0.5) * intensity * 2 * factor;
      app.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(shake);
    } else {
      app.style.transform = '';
    }
  }
  requestAnimationFrame(shake);
}

/* ========================
   10. SCAN FLOW
   ======================== */
function startScan() {
  const input = document.getElementById('nameInput');
  const name  = input.value.trim();
  if (!name) {
    input.focus();
    input.style.borderColor = '#ff2244';
    setTimeout(() => input.style.borderColor = '', 600);
    return;
  }

  // Transition to scanning
  document.getElementById('inputSection').classList.add('hidden');
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('scanningSection').classList.remove('hidden');

  document.getElementById('scanningName').textContent = name;
  document.getElementById('scanBarFill').style.width  = '0%';
  document.getElementById('scanPercent').textContent  = '0%';
  document.getElementById('scanStatus').textContent   = SCAN_MESSAGES[0];

  // Animate progress bar
  let progress = 0;
  let msgIdx   = 0;
  const totalMs = 2200;
  const startTime = Date.now();

  const statusInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % SCAN_MESSAGES.length;
    document.getElementById('scanStatus').textContent = SCAN_MESSAGES[msgIdx];
    // Flicker data
    document.getElementById('dataFlicker1').textContent = '0x' + Math.floor(Math.random()*0xFFFF).toString(16).toUpperCase().padStart(4,'0');
    document.getElementById('dataFlicker2').textContent = 'ID:' + Math.floor(Math.random()*9999).toString().padStart(4,'0');
    document.getElementById('dataFlicker3').textContent = 'SIG:' + Math.floor(Math.random()*999).toString().padStart(3,'0');
  }, 220);

  const barInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    progress = Math.min(100, (elapsed / totalMs) * 100);
    document.getElementById('scanBarFill').style.width = progress + '%';
    document.getElementById('scanPercent').textContent = Math.floor(progress) + '%';
    if (progress >= 100) {
      clearInterval(barInterval);
      clearInterval(statusInterval);
      setTimeout(() => showResult(name), 150);
    }
  }, 30);
}

/* ========================
   11. SHOW RESULT
   ======================== */
function showResult(name) {
  const rarity  = rollRarity();
  const species = SPECIES[rand(0, SPECIES.length - 1)];
  const title   = TITLES[rand(0, TITLES.length - 1)];
  const brainrot = rand(55, 100);
  const aura     = rand(30, 100);
  const power    = rand(1, 9999);

  // Update stats
  totalScans++;
  document.getElementById('totalScans').textContent = totalScans;
  if (['legendary','mythic','og','celestial','eternal'].includes(rarity.id)) {
    legendaryPlus++;
    document.getElementById('legendaryCount').textContent = legendaryPlus;
  }

  // Special effects for high rarity
  switch(rarity.id) {
    case 'eternal':
      flashScreen();
      screenShake(15, 800);
      showEternalOverlay();
      setTimeout(() => burstParticles('eternal'), 300);
      break;
    case 'celestial':
      flashScreen();
      screenShake(8, 500);
      setTimeout(() => burstParticles('celestial'), 100);
      break;
    case 'mythic':
      screenShake(6, 400);
      burstParticles('mythic');
      break;
    case 'og':
      burstParticles('og');
      break;
    case 'legendary':
      burstParticles('legendary');
      break;
    default:
      burstParticles(rarity.id);
  }

  playRaritySound(rarity.id);

  // Hide scanning, show result
  document.getElementById('scanningSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  // Fill result card
  applyRarityClass(document.getElementById('rarityBanner'), rarity.id);
  document.getElementById('rarityText').textContent  = rarity.label;
  document.getElementById('rarityIcon').textContent  = rarity.icon;
  document.getElementById('rarityIcon2').textContent = rarity.icon;

  document.getElementById('speciesEmoji').textContent = species.emoji;
  document.getElementById('resultName').textContent   = name;
  document.getElementById('resultSpecies').textContent = species.name;
  document.getElementById('resultTitle').textContent  = title;
  document.getElementById('resultBrainrot').textContent = brainrot + '%';
  document.getElementById('resultAura').textContent   = aura + '%';
  document.getElementById('resultPower').textContent  = power.toLocaleString();

  // Apply rarity glow to result card
  const card = document.getElementById('resultCard');
  card.style.borderColor = rarity.color;
  card.style.boxShadow   = `0 0 40px ${rarity.color}55, 0 0 80px ${rarity.color}22`;

  // Animate bars after brief delay
  setTimeout(() => {
    document.getElementById('brainrotBar').style.width = brainrot + '%';
    document.getElementById('auraBar').style.width     = aura + '%';
  }, 300);

  // Add to history
  addHistory(name, rarity, species);
}

/* ========================
   12. RARITY CLASS HELPER
   ======================== */
function applyRarityClass(el, rarityId) {
  RARITIES.forEach(r => el.classList.remove('rarity-' + r.id));
  el.classList.add('rarity-' + rarityId);
}

/* ========================
   13. SPECIAL EFFECTS
   ======================== */
function flashScreen() {
  const flash = document.getElementById('screenFlash');
  flash.classList.remove('flash');
  void flash.offsetWidth; // reflow
  flash.classList.add('flash');
}

function showEternalOverlay() {
  const overlay = document.getElementById('eternalOverlay');
  overlay.classList.remove('hidden');
  overlay.onclick = () => overlay.classList.add('hidden');
  setTimeout(() => overlay.classList.add('hidden'), 4000);
}

/* ========================
   14. HISTORY
   ======================== */
function addHistory(name, rarity, species) {
  history.unshift({ name, rarity, species });
  if (history.length > 5) history = history.slice(0, 5);
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (history.length === 0) {
    list.innerHTML = '<div class="history-empty">Belum ada scan...</div>';
    return;
  }
  list.innerHTML = '';
  history.forEach(item => {
    const el = document.createElement('div');
    el.className = 'history-item';
    el.innerHTML = `
      <span class="history-dot dot-${item.rarity.id}"></span>
      <span class="history-name">${escapeHtml(item.name)}</span>
      <span class="history-rarity">[${item.rarity.label}]</span>
      <span class="history-rarity">${item.species.emoji}</span>
    `;
    list.appendChild(el);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ========================
   15. RESET
   ======================== */
function resetToInput() {
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('inputSection').classList.remove('hidden');

  // Reset result card bars
  document.getElementById('brainrotBar').style.width = '0%';
  document.getElementById('auraBar').style.width     = '0%';

  // Clear input & focus
  const input = document.getElementById('nameInput');
  input.value = '';
  setTimeout(() => input.focus(), 100);
}

/* ========================
   16. KEYBOARD ENTER
   ======================== */
document.getElementById('nameInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') startScan();
});

/* ========================
   17. INIT
   ======================== */
window.addEventListener('load', () => {
  document.getElementById('nameInput').focus();
  renderHistory();
});
