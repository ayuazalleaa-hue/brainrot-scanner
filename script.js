/* ================================
   BRAINROT SCANNER — SCRIPT.JS
   ================================ */

/* ========================
   1. DATA — SPECIES
   ======================== */
const SPECIES = [
  // COMMON
  { name: "Noobini Pizzanini",         emoji: "🍕", desc: "The Beginner Pizza Entity",        rarity: "common" },
  { name: "Lirili Larila",             emoji: "🎵", desc: "The Singing Forest Creature",       rarity: "common" },
  { name: "Tim Cheese",                emoji: "🧀", desc: "The Cheesy Team Leader",            rarity: "common" },
  { name: "Svinina Bombardino",        emoji: "🐷", desc: "The Pork Bomb Dropper",             rarity: "common" },
  { name: "Pipi Kiwi",                 emoji: "🥝", desc: "The Kiwi Faced Wanderer",           rarity: "common" },
  { name: "Trippi Troppi",             emoji: "🌴", desc: "The Tropical Tripper",              rarity: "common" },
  // RARE
  { name: "Gangster Footera",          emoji: "👟", desc: "The Street Shoe Gangster",          rarity: "rare" },
  { name: "Boneca Ambalabu",           emoji: "🪆", desc: "The Ancient Doll Entity",           rarity: "rare" },
  { name: "Ta Ta Ta Ta Sahur",         emoji: "🥁", desc: "The Midnight Drum Awakener",        rarity: "rare" },
  { name: "Ballerina Cappuccina",      emoji: "🩰", desc: "The Coffee-Fueled Dancer",          rarity: "rare" },
  { name: "Cappuccino Assassino",      emoji: "☕", desc: "The Espresso Blade Master",         rarity: "rare" },
  { name: "Brr Brr Patapim",           emoji: "❄️", desc: "The Freezing Sound Bringer",        rarity: "rare" },
  // EPIC
  { name: "Garamaramam",               emoji: "🌀", desc: "The Spiral Chaos Entity",           rarity: "epic" },
  { name: "Waterdino",                 emoji: "🦕", desc: "The Aquatic Dinosaur Overlord",     rarity: "epic" },
  { name: "Orcalero",                  emoji: "🐋", desc: "The Orca Wave Destroyer",           rarity: "epic" },
  { name: "Gattatino Nyanino",         emoji: "🐱", desc: "The Singing Cat Supreme",           rarity: "epic" },
  // LEGENDARY
  { name: "Chimpanzini Bananini",      emoji: "🦧", desc: "The Banana Chimp Titan",            rarity: "legendary" },
  { name: "Bambini Crostini",          emoji: "🥖", desc: "The Tiny Bread Warrior",            rarity: "legendary" },
  { name: "Trulimero Trulicina",       emoji: "🎪", desc: "The Circus of Infinite Power",      rarity: "legendary" },
  { name: "Bananita Dolphinita",       emoji: "🐬", desc: "The Banana Dolphin Legend",         rarity: "legendary" },
  // MYTHIC
  { name: "67",                        emoji: "6️⃣7️⃣", desc: "The Forbidden Number Entity",      rarity: "mythic" },
  { name: "Chef Crabracadabra",        emoji: "🦀", desc: "The Magical Crab Sorcerer",         rarity: "mythic" },
  { name: "Elefanto Frigo",            emoji: "🐘", desc: "The Refrigerator Elephant God",     rarity: "mythic" },
  { name: "Rinoccio Verdini",          emoji: "🦏", desc: "The Green Rhino of Doom",           rarity: "mythic" },
  { name: "Glorbo Fruttodrilo",        emoji: "🐊", desc: "The Fruit Crocodile Deity",         rarity: "mythic" },
  // OG
  { name: "Karkerkar Kurkur",          emoji: "🔮", desc: "The Ancient Sound Manipulator",     rarity: "og" },
  { name: "Blackhole Goat",            emoji: "🐐", desc: "The Goat That Devours Stars",       rarity: "og" },
  { name: "Compactoroni Daskaloni",    emoji: "🗜️", desc: "The Compression Master",            rarity: "og" },
  { name: "Cappuccino Clownino",       emoji: "🤡", desc: "The Espresso Jester Supreme",       rarity: "og" },
  { name: "Chillin Chilli",            emoji: "🌶️", desc: "The Relaxed Fire Bringer",          rarity: "og" },
  { name: "Corn Sahur",                emoji: "🌽", desc: "The Pre-Dawn Corn Awakener",        rarity: "og" },
  { name: "Meowl",                     emoji: "🦉", desc: "The Cat-Owl Hybrid Phantom",        rarity: "og" },
  { name: "Strawberry Elephant",       emoji: "🍓", desc: "The Berry-Tusked Colossus",         rarity: "og" },
  // CELESTIAL
  { name: "Dragonfrutina Dolphinita",  emoji: "🐉", desc: "The Dragon Fruit Dolphin God",      rarity: "celestial" },
  { name: "Guerriro Digitale",         emoji: "💻", desc: "The Digital Warrior of Light",      rarity: "celestial" },
  { name: "Chicleteira Bicicleteira",  emoji: "🚲", desc: "The Gum-Powered Cyclist",           rarity: "celestial" },
  { name: "Pot Hotspot",               emoji: "📡", desc: "The Boiling WiFi Transmitter",      rarity: "celestial" },
  { name: "Krupuk Pagi Pagi",          emoji: "🌅", desc: "The Dawn Cracker Celestial",        rarity: "celestial" },
  { name: "Beluga Beluga",             emoji: "🐳", desc: "The Twin Whale of the Cosmos",      rarity: "celestial" },
  { name: "Tralaledon",                emoji: "🌌", desc: "The Galaxy Song Titan",             rarity: "celestial" },
  { name: "Anpali Babel",              emoji: "🗼", desc: "The Tower of Infinite Chaos",       rarity: "celestial" },
  { name: "Los Primos",                emoji: "👥", desc: "The Cousin Duo of the Stars",       rarity: "celestial" },
  // ETERNAL
  { name: "Espresso Shockantoni",      emoji: "⚡", desc: "The Lightning Espresso God",        rarity: "eternal" },
  { name: "Ketupat Kepat",             emoji: "∞", desc: "The Infinite Rice Cake Being",       rarity: "eternal" },
  { name: "Professora 67",             emoji: "👁️", desc: "The Forbidden Knowledge Keeper",    rarity: "eternal" },
  { name: "Astro Tim",                 emoji: "🚀", desc: "The Cosmic Cheese Explorer",        rarity: "eternal" },
  { name: "Dumbelloni",                emoji: "💪", desc: "The Eternal Iron Lifter",           rarity: "eternal" },
  { name: "Baba Yaga",                 emoji: "🧙", desc: "The Primordial Witch of All",       rarity: "eternal" },
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
  const pool    = SPECIES.filter(s => s.rarity === rarity.id);
  const species = pool.length > 0 ? pool[rand(0, pool.length - 1)] : SPECIES[rand(0, SPECIES.length - 1)];
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
