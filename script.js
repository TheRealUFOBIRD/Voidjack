const SUITS = {
  pik: "Pik",
  herz: "Herz",
  karo: "Karo",
  kreuz: "Kreuz"
};

const RANKS = [
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["j", 10],
  ["q", 10],
  ["k", 10],
  ["a", 11]
];

const CARD_TYPES = {
  normal: {
    id: "normal",
    label: "NORMAL",
    description: "Normale Karten sind die Basis deines Decks."
  },
  magical: {
    id: "magical",
    label: "MAGISCH",
    description: "Magische Karten sind für arkane Effekte vorbereitet."
  },
  void: {
    id: "void",
    label: "VOID",
    description: "Void-Karten sind für riskante Leere-Effekte vorbereitet."
  },
  elemental: {
    id: "elemental",
    label: "ELEMENTAL",
    description: "Elemental-Karten sind für Feuer-, Eis- und Sturm-Effekte vorbereitet."
  },
  dark: {
    id: "dark",
    label: "DUNKEL",
    description: "Dunkle Karten sind für Opfer- und Schatten-Effekte vorbereitet."
  },
  holy: {
    id: "holy",
    label: "HEILIG",
    description: "Heilige Karten sind für Schutz- und Läuterungs-Effekte vorbereitet."
  },
  golden: {
    id: "golden",
    label: "GOLDEN",
    description: "Goldene Karten sind für Bonus- und Belohnungs-Effekte vorbereitet."
  },
  cursed: {
    id: "cursed",
    label: "VERFLUCHT",
    description: "Verfluchte Karten sind für starke Effekte mit Nachteilen vorbereitet."
  }
};

const CARD_TYPE_SEQUENCE = [
  "magical",
  "void",
  "elemental",
  "dark",
  "holy",
  "golden",
  "cursed"
];

const SPECIAL_CARD_TYPE_SEQUENCE = CARD_TYPE_SEQUENCE;
const FIELD_THEME_SEQUENCE = ["normal", ...CARD_TYPE_SEQUENCE];

const FIELD_THEMES = {
  normal: {
    id: "normal",
    label: "NORMAL"
  },
  magical: {
    id: "magical",
    label: "MAGISCH"
  },
  void: {
    id: "void",
    label: "VOID"
  },
  elemental: {
    id: "elemental",
    label: "ELEMENTAL"
  },
  dark: {
    id: "dark",
    label: "DUNKEL"
  },
  holy: {
    id: "holy",
    label: "HEILIG"
  },
  golden: {
    id: "golden",
    label: "GOLDEN"
  },
  cursed: {
    id: "cursed",
    label: "VERFLUCHT"
  }
};

const BOOSTER_TYPES = {
  normal: {
    id: "normal",
    label: "NORMAL BOOSTER",
    typeId: "normal",
    sprite: "assets/boosters/normal.png",
    baseCost: 3,
    description: "Enthält 3 normale Karten."
  },
  random: {
    id: "random",
    label: "RANDOM BOOSTER",
    typeId: "random",
    sprite: "assets/boosters/random.png",
    baseCost: 9,
    description: "Enthält 3 zufällige Karten aus allen Arten."
  },
  magical: {
    id: "magical",
    label: "MAGISCH BOOSTER",
    typeId: "magical",
    sprite: "assets/boosters/magisch.png",
    baseCost: 15,
    description: "Enthält 3 magische Karten."
  },
  void: {
    id: "void",
    label: "VOID BOOSTER",
    typeId: "void",
    sprite: "assets/boosters/void.png",
    baseCost: 16,
    description: "Enthält 3 Void-Karten."
  },
  elemental: {
    id: "elemental",
    label: "ELEMENTAL BOOSTER",
    typeId: "elemental",
    sprite: "assets/boosters/elementar.png",
    baseCost: 15,
    description: "Enthält 3 Elemental-Karten."
  },
  dark: {
    id: "dark",
    label: "DUNKEL BOOSTER",
    typeId: "dark",
    sprite: "assets/boosters/dunkel.png",
    baseCost: 15,
    description: "Enthält 3 dunkle Karten."
  },
  holy: {
    id: "holy",
    label: "HEILIG BOOSTER",
    typeId: "holy",
    sprite: "assets/boosters/heilig.png",
    baseCost: 16,
    description: "Enthält 3 heilige Karten."
  },
  golden: {
    id: "golden",
    label: "GOLDEN BOOSTER",
    typeId: "golden",
    sprite: "assets/boosters/golden.png",
    baseCost: 18,
    description: "Enthält 3 goldene Karten."
  },
  cursed: {
    id: "cursed",
    label: "VERFLUCHT BOOSTER",
    typeId: "cursed",
    sprite: "assets/boosters/verflucht.png",
    baseCost: 13,
    description: "Enthält 3 verfluchte Karten."
  }
};

const SPECIAL_BOOSTER_SEQUENCE = [
  "magical",
  "void",
  "elemental",
  "dark",
  "holy",
  "golden",
  "cursed"
];

const DEALER_BASE_HP = 60;
const PLAYER_BASE_HP = 80;
const WIN_REWARD_COINS = 20;
const DEBUG_COINS = 25;
const STARTING_DECK_SIZE = 13;
const MAX_HAND_SIZE = 7;
const MAX_CARDS_PER_TURN = 3;
const BASE_MAX_PLAYS_PER_ROUND = 4;
const BASE_MAX_DISCARDS_PER_ROUND = 2;
const DEALER_HAND_SIZE = 2;
const SHOP_OFFER_COUNT = 3;
const SHOP_REROLL_COST = 6;
const CARD_TIER_MIN = 1;
const CARD_TIER_MAX = 10;
const STARTING_VOLUME = 5;
const CARD_EXIT_ANIMATION_MS = 360;
const DAMAGE_COUNT_STEP_MS = 520;
const DAMAGE_COUNT_FINAL_HOLD_MS = 620;
const RESULT_CARD_ANIMATION_MS = 760;
const RESULT_EFFECT_MS = 1100;
const SCREEN_SHAKE_MS = 280;
const BUTTON_CLICK_VOLUME = 10;
const CARD_SELECT_VOLUME = 35;
const BOOSTER_OPEN_VOLUME = 14;
const CARD_DEAL_SOUND_SRC = "assets/sounds/card_deal.wav";
const BUTTON_CLICK_SOUND_SRC = "assets/sounds/buttonklick.mp3";
const CARD_SELECT_SOUND_SRC = "assets/sounds/cardselect.mp3";
const BOOSTER_OPEN_SOUND_SRC = "assets/sounds/boosteropen.mp3";
const COIN_ICON_SRC = "assets/icons/gold-coin-icon-png-11552728459kod1gljkts.png";
const SAVEGAME_VERSION = 1;

const CARD_LIBRARY = buildCardLibrary();
let currentProfileName = "";
let isRunReady = false;

const state = {
  round: 0,
  coins: 0,
  runDeck: [],
  drawPile: [],
  discardPile: [],
  playerCards: [],
  dealerCards: [],
  selectedCardIds: [],
  shopOffers: [],
  boosterChoice: null,
  isDeckOpen: false,
  fieldThemeId: "normal",
  phase: "combat",
  player: {
    hp: PLAYER_BASE_HP,
    maxHp: PLAYER_BASE_HP
  },
  dealer: {
    hp: DEALER_BASE_HP,
    maxHp: DEALER_BASE_HP
  },
  rewardCoins: WIN_REWARD_COINS,
  maxPlaysPerRound: BASE_MAX_PLAYS_PER_ROUND,
  maxDiscardsPerRound: BASE_MAX_DISCARDS_PER_ROUND,
  playsThisRound: 0,
  discardsThisRound: 0,
  message: "Ziehe bis 7 Karten. Spiele bis zu 3 Karten pro Zug.",
  hoveredTemplateId: null,
  hoveredTier: CARD_TIER_MIN,
  deckHoveredTemplateId: null,
  deckHoveredTier: CARD_TIER_MIN,
  enteringCardIds: [],
  animatingCardIds: [],
  cardAnimationType: null,
  damageAnimation: null,
  isActionLocked: false,
  actionToken: 0,
  resultEffect: null
};

const els = {
  roundLabel: document.getElementById("roundLabel"),
  deckCountLabel: document.getElementById("deckCountLabel"),
  playerTotalLabel: document.getElementById("playerTotalLabel"),
  playerDamageLabel: document.getElementById("playerDamageLabel"),
  playerHpLabel: document.getElementById("playerHpLabel"),
  playerHpNameLabel: document.getElementById("playerHpNameLabel"),
  playerHpText: document.getElementById("playerHpText"),
  playerHpFill: document.getElementById("playerHpFill"),
  dealerDamageLabel: document.getElementById("dealerDamageLabel"),
  dealerHpLabel: document.getElementById("dealerHpLabel"),
  dealerHpText: document.getElementById("dealerHpText"),
  dealerHpFill: document.getElementById("dealerHpFill"),
  coinsLabel: document.getElementById("coinsLabel"),
  dealerStatusLabel: document.getElementById("dealerStatusLabel"),
  battleFelt: document.getElementById("battleFelt"),
  fieldThemeLabel: document.getElementById("fieldThemeLabel"),
  playerStatusLabel: document.getElementById("playerStatusLabel"),
  messageBanner: document.getElementById("messageBanner"),
  playSelectedButton: document.getElementById("playSelectedButton"),
  discardSelectedButton: document.getElementById("discardSelectedButton"),
  debugWinButton: document.getElementById("debugWinButton"),
  debugCoinsButton: document.getElementById("debugCoinsButton"),
  nextFightButton: document.getElementById("nextFightButton"),
  shopNextFightButton: document.getElementById("shopNextFightButton"),
  shopRerollButton: document.getElementById("shopRerollButton"),
  resetButton: document.getElementById("resetButton"),
  dealerCards: document.getElementById("dealerCards"),
  playerCards: document.getElementById("playerCards"),
  damageCountOverlay: document.getElementById("damageCountOverlay"),
  shopPanel: document.getElementById("shopPanel"),
  shopCoinsLabel: document.getElementById("shopCoinsLabel"),
  shopOffers: document.getElementById("shopOffers"),
  boosterChoicePanel: document.getElementById("boosterChoicePanel"),
  boosterChoiceTitle: document.getElementById("boosterChoiceTitle"),
  boosterChoices: document.getElementById("boosterChoices"),
  victoryPanel: document.getElementById("victoryPanel"),
  victoryText: document.getElementById("victoryText"),
  continueToShopButton: document.getElementById("continueToShopButton"),
  defeatPanel: document.getElementById("defeatPanel"),
  defeatText: document.getElementById("defeatText"),
  restartRunButton: document.getElementById("restartRunButton"),
  defeatMainMenuButton: document.getElementById("defeatMainMenuButton"),
  ingameMainMenuButton: document.getElementById("ingameMainMenuButton"),
  deckButton: document.getElementById("deckButton"),
  deckPanel: document.getElementById("deckPanel"),
  closeDeckButton: document.getElementById("closeDeckButton"),
  soundtrackAudio: document.getElementById("soundtrackAudio"),
  volumeSlider: document.getElementById("volumeSlider"),
  volumeValueLabel: document.getElementById("volumeValueLabel"),
  deckSummary: document.getElementById("deckSummary"),
  deckList: document.getElementById("deckList"),
  deckPreviewSlot: document.getElementById("deckPreviewSlot"),
  deckPreviewTitle: document.getElementById("deckPreviewTitle"),
  deckPreviewText: document.getElementById("deckPreviewText"),
  resultEffect: document.getElementById("resultEffect"),
  resultEffectText: document.getElementById("resultEffectText"),
  previewSlot: document.getElementById("previewSlot"),
  previewTitle: document.getElementById("previewTitle"),
  previewText: document.getElementById("previewText"),
  playerCardCountLabel: document.getElementById("playerCardCountLabel"),
  dealerCardCountLabel: document.getElementById("dealerCardCountLabel"),
  phaseLabel: document.getElementById("phaseLabel"),
  rewardLabel: document.getElementById("rewardLabel"),
  mainMenu: document.getElementById("mainMenu"),
  startGameButton: document.getElementById("startGameButton"),
  settingsMenuButton: document.getElementById("settingsMenuButton"),
  profileMenuButton: document.getElementById("profileMenuButton"),
  settingsMenuPanel: document.getElementById("settingsMenuPanel"),
  closeSettingsButton: document.getElementById("closeSettingsButton"),
  profileMenuPanel: document.getElementById("profileMenuPanel"),
  closeProfileButton: document.getElementById("closeProfileButton"),
  playerNameInput: document.getElementById("playerNameInput"),
  activeProfileLabel: document.getElementById("activeProfileLabel"),
  createProfileButton: document.getElementById("createProfileButton"),
  downloadProfileButton: document.getElementById("downloadProfileButton"),
  uploadProfileButton: document.getElementById("uploadProfileButton"),
  uploadProfileInput: document.getElementById("uploadProfileInput"),
  profileStatusText: document.getElementById("profileStatusText")
};

function setSoundtrackVolume(value) {
  const volumePercent = Math.max(0, Math.min(100, Number(value) || 0));
  els.soundtrackAudio.volume = volumePercent / 100;
  els.volumeSlider.value = String(volumePercent);
  els.volumeValueLabel.textContent = `${volumePercent}%`;
}

function getProfileNameInput() {
  return els.playerNameInput.value.trim().slice(0, 24);
}

function getActiveProfileName() {
  return currentProfileName || "Gast";
}

function updateProfileUi(message = "") {
  els.activeProfileLabel.textContent = currentProfileName
    ? `Profil: ${currentProfileName}`
    : "Kein Profil";
  els.playerHpNameLabel.textContent = currentProfileName || "Spieler";
  if (message) {
    els.profileStatusText.textContent = message;
  }
}

function showMainMenu() {
  els.mainMenu.classList.remove("is-hidden");
}

function hideMainMenu() {
  els.mainMenu.classList.add("is-hidden");
  els.settingsMenuPanel.classList.add("is-hidden");
  els.profileMenuPanel.classList.add("is-hidden");
}

function returnToMainMenu() {
  saveProfileToBrowser();
  state.resultEffect = null;
  state.isActionLocked = false;
  state.isDeckOpen = false;
  render();
  updateProfileUi();
  showMainMenu();
}

function openSettingsMenu() {
  els.settingsMenuPanel.classList.remove("is-hidden");
  els.profileMenuPanel.classList.add("is-hidden");
}

function openProfileMenu() {
  els.profileMenuPanel.classList.remove("is-hidden");
  els.settingsMenuPanel.classList.add("is-hidden");
  updateProfileUi();
}

function createProfile() {
  const profileName = getProfileNameInput() || "Spieler";
  currentProfileName = profileName;
  resetGame();
  isRunReady = true;
  updateProfileUi(`Profil "${profileName}" ist bereit.`);
}

function startGameFromMenu() {
  if (!currentProfileName) {
    currentProfileName = getProfileNameInput() || "Gast";
  }
  if (!isRunReady) {
    resetGame();
    isRunReady = true;
  }
  hideMainMenu();
  updateProfileUi();
  render();
  playSoundtrack();
}

function getSaveGameData() {
  if (!isRunReady) {
    resetGame();
    isRunReady = true;
  }

  return {
    version: SAVEGAME_VERSION,
    savedAt: new Date().toISOString(),
    profileName: getActiveProfileName(),
    state: {
      round: state.round,
      coins: state.coins,
      runDeck: state.runDeck,
      drawPile: state.drawPile,
      discardPile: state.discardPile,
      playerCards: state.playerCards,
      dealerCards: state.dealerCards,
      shopOffers: state.shopOffers,
      boosterChoice: state.boosterChoice,
      fieldThemeId: state.fieldThemeId,
      phase: state.phase,
      player: state.player,
      dealer: state.dealer,
      rewardCoins: state.rewardCoins,
      maxPlaysPerRound: state.maxPlaysPerRound,
      maxDiscardsPerRound: state.maxDiscardsPerRound,
      playsThisRound: state.playsThisRound,
      discardsThisRound: state.discardsThisRound,
      message: state.message,
      hoveredTemplateId: state.hoveredTemplateId,
      hoveredTier: state.hoveredTier
    }
  };
}

function downloadProfileSave() {
  const saveGame = getSaveGameData();
  const safeName = saveGame.profileName.toLowerCase().replace(/[^a-z0-9_-]+/gi, "-") || "profil";
  const blob = new Blob([JSON.stringify(saveGame, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `voidjack-${safeName}.json`;
  link.click();
  URL.revokeObjectURL(url);
  updateProfileUi(`Savegame für "${saveGame.profileName}" wurde erstellt.`);
}

function saveProfileToBrowser() {
  if (!isRunReady || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(
      `voidjack-profile-${getActiveProfileName()}`,
      JSON.stringify(getSaveGameData())
    );
  } catch (error) {
    // Autosaves duerfen das Spiel nicht unterbrechen.
  }
}

function sanitizeLoadedPhase(phase) {
  if (phase === "victory" || phase === "victoryEffect" || phase === "victoryCardEffect") {
    return "shop";
  }
  if (phase === "defeatEffect" || phase === "defeatCardEffect") {
    return "defeat";
  }
  return ["combat", "shop", "defeat"].includes(phase) ? phase : "combat";
}

function applyProfileSave(saveGame) {
  if (!saveGame || typeof saveGame !== "object" || !saveGame.state) {
    throw new Error("Ungültige Savegame-Datei.");
  }

  const savedState = saveGame.state;
  currentProfileName = String(saveGame.profileName || "Spieler").slice(0, 24);
  els.playerNameInput.value = currentProfileName;

  state.actionToken += 1;
  state.round = Number(savedState.round) || 1;
  state.coins = Number(savedState.coins) || 0;
  state.runDeck = Array.isArray(savedState.runDeck) ? savedState.runDeck : buildStartingDeck();
  state.drawPile = Array.isArray(savedState.drawPile) ? savedState.drawPile : buildCombatDeck();
  state.discardPile = Array.isArray(savedState.discardPile) ? savedState.discardPile : [];
  state.playerCards = Array.isArray(savedState.playerCards) ? savedState.playerCards : [];
  state.dealerCards = Array.isArray(savedState.dealerCards) ? savedState.dealerCards : [];
  state.selectedCardIds = [];
  state.shopOffers = Array.isArray(savedState.shopOffers) ? savedState.shopOffers : [];
  state.boosterChoice = savedState.boosterChoice || null;
  state.fieldThemeId = FIELD_THEMES[savedState.fieldThemeId] ? savedState.fieldThemeId : "normal";
  state.phase = sanitizeLoadedPhase(savedState.phase);
  state.player = savedState.player || { hp: PLAYER_BASE_HP, maxHp: PLAYER_BASE_HP };
  state.dealer = savedState.dealer || { hp: DEALER_BASE_HP, maxHp: DEALER_BASE_HP };
  state.rewardCoins = Number(savedState.rewardCoins) || WIN_REWARD_COINS;
  state.maxPlaysPerRound = Number(savedState.maxPlaysPerRound) || BASE_MAX_PLAYS_PER_ROUND;
  state.maxDiscardsPerRound = Number(savedState.maxDiscardsPerRound) || BASE_MAX_DISCARDS_PER_ROUND;
  state.playsThisRound = Number(savedState.playsThisRound) || 0;
  state.discardsThisRound = Number(savedState.discardsThisRound) || 0;
  state.message = savedState.message || `Profil "${currentProfileName}" geladen.`;
  state.hoveredTemplateId = savedState.hoveredTemplateId || state.playerCards[0]?.templateId || null;
  state.hoveredTier = savedState.hoveredTier || state.playerCards[0]?.tier || CARD_TIER_MIN;
  state.deckHoveredTemplateId = null;
  state.deckHoveredTier = CARD_TIER_MIN;
  state.enteringCardIds = [];
  state.animatingCardIds = [];
  state.cardAnimationType = null;
  state.damageAnimation = null;
  state.isActionLocked = false;
  state.resultEffect = null;
  state.isDeckOpen = false;

  if (state.phase === "shop" && state.shopOffers.length === 0) {
    state.shopOffers = buildShopOffers();
  }

  isRunReady = true;
  hideMainMenu();
  updateProfileUi(`Profil "${currentProfileName}" geladen.`);
  render();
}

function uploadProfileSave(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      applyProfileSave(JSON.parse(String(reader.result)));
    } catch (error) {
      updateProfileUi(error.message || "Savegame konnte nicht geladen werden.");
    }
  });
  reader.readAsText(file);
}

function playSoundtrack() {
  if (!els.soundtrackAudio.paused) {
    window.removeEventListener("pointerdown", playSoundtrack);
    window.removeEventListener("click", playSoundtrack);
    window.removeEventListener("keydown", playSoundtrack);
    return;
  }

  els.soundtrackAudio.play()
    .then(() => {
      window.removeEventListener("pointerdown", playSoundtrack);
      window.removeEventListener("click", playSoundtrack);
      window.removeEventListener("keydown", playSoundtrack);
    })
    .catch(() => {
      // Browser starten Audio oft erst nach einer akzeptierten echten Interaktion.
    });
}

function initSoundtrack() {
  setSoundtrackVolume(STARTING_VOLUME);
  playSoundtrack();

  els.volumeSlider.addEventListener("input", (event) => {
    setSoundtrackVolume(event.target.value);
    playSoundtrack();
  });

  window.addEventListener("pointerdown", playSoundtrack);
  window.addEventListener("click", playSoundtrack);
  window.addEventListener("keydown", playSoundtrack);
}

function triggerScreenShake() {
  document.body.classList.remove("screen-shake");
  window.requestAnimationFrame(() => {
    document.body.classList.add("screen-shake");
    window.setTimeout(() => {
      document.body.classList.remove("screen-shake");
    }, SCREEN_SHAKE_MS);
  });
}

function clearEnteringCardsSoon() {
  window.setTimeout(() => {
    state.enteringCardIds = [];
    render();
  }, 520);
}

function playCardDealSound() {
  const sound = new Audio(CARD_DEAL_SOUND_SRC);
  sound.volume = 0.55;
  sound.play().catch(() => {
    // Effekt-Sounds dürfen erst nach einer Nutzerinteraktion starten.
  });
}

function playButtonClickSound() {
  const sound = new Audio(BUTTON_CLICK_SOUND_SRC);
  sound.volume = Math.max(1, Math.min(100, BUTTON_CLICK_VOLUME)) / 100;
  sound.play().catch(() => {
    // Klick-Sounds duerfen erst nach einer Nutzerinteraktion starten.
  });
}

function playCardSelectSound() {
  const sound = new Audio(CARD_SELECT_SOUND_SRC);
  sound.volume = Math.max(1, Math.min(100, CARD_SELECT_VOLUME)) / 100;
  sound.play().catch(() => {
    // Karten-Sounds duerfen erst nach einer Nutzerinteraktion starten.
  });
}

function playBoosterOpenSound() {
  const sound = new Audio(BOOSTER_OPEN_SOUND_SRC);
  sound.volume = Math.max(1, Math.min(100, BOOSTER_OPEN_VOLUME)) / 100;
  sound.play().catch(() => {
    // Booster-Sounds duerfen erst nach einer Nutzerinteraktion starten.
  });
}

function buildCardLibrary() {
  const library = {};
  Object.entries(SUITS).forEach(([suitId, suitName]) => {
    RANKS.forEach(([rankId, value]) => {
      const id = `${suitId}_${rankId}`;
      const normalType = CARD_TYPES.normal;
      const baseCard = {
        id,
        displayName: `${suitName} ${rankId.toUpperCase()}`,
        suitId,
        suitName,
        rankId,
        value,
        sprite: `assets/cards/${suitId}/${rankId}.png`
      };
      library[id] = {
        ...baseCard,
        id,
        typeId: normalType.id,
        typeLabel: normalType.label,
        typeDescription: normalType.description,
        isSpecial: false,
        description: buildCardDescription(rankId, value, normalType)
      };

      SPECIAL_CARD_TYPE_SEQUENCE.forEach((typeId) => {
        const specialType = CARD_TYPES[typeId];
        const specialId = `${typeId}_${id}`;
        library[specialId] = {
          ...baseCard,
          id: specialId,
          displayName: `${specialType.label} ${baseCard.displayName}`,
          typeId: specialType.id,
          typeLabel: specialType.label,
          typeDescription: specialType.description,
          isSpecial: true,
          description: buildCardDescription(rankId, value, specialType)
        };
      });
    });
  });
  return library;
}

function buildCardDescription(rankId, value, type) {
  const damageText = rankId === "a"
    ? "Ass gibt aktuell 11 Schaden."
    : `Gibt ${value} Schaden.`;

  return `${damageText} Art: ${type.label}. ${type.description}`;
}

function getCardDisplayName(template, tier = CARD_TIER_MIN) {
  return tier > CARD_TIER_MIN
    ? `${template.displayName} +${tier}`
    : template.displayName;
}

function getCardDescription(template, tier = CARD_TIER_MIN) {
  const tierText = tier > CARD_TIER_MIN
    ? ` Stufe ${tier}/10.`
    : "";

  return `${template.description}${tierText}`;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildStartingDeck() {
  return shuffle(getNormalTemplateIds())
    .slice(0, STARTING_DECK_SIZE)
    .map((templateId) => createRunDeckEntry(templateId));
}

function getNormalTemplateIds() {
  return Object.keys(CARD_LIBRARY).filter((templateId) => !CARD_LIBRARY[templateId].isSpecial);
}

function getTemplateIdsForType(typeId) {
  return Object.keys(CARD_LIBRARY).filter((templateId) => CARD_LIBRARY[templateId].typeId === typeId);
}

function buildShopOffers() {
  return Array.from({ length: SHOP_OFFER_COUNT }, () => {
    const boosterId = rollShopBoosterId();

    return {
      boosterId,
      cost: getBoosterCost(boosterId),
      isSold: false
    };
  });
}

function rollShopBoosterId() {
  const rarePressure = Math.min(0.08, 0.012 + ((state.round - 1) * 0.007));
  const specialWeight = rarePressure / SPECIAL_BOOSTER_SEQUENCE.length;
  const weightedBoosters = [
    { id: "normal", weight: 0.74 - rarePressure },
    { id: "random", weight: 0.26 },
    ...SPECIAL_BOOSTER_SEQUENCE.map((id) => ({ id, weight: specialWeight }))
  ];
  const totalWeight = weightedBoosters.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const item of weightedBoosters) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.id;
    }
  }

  return "normal";
}

function rollShopCardTier() {
  let tier = CARD_TIER_MIN;
  const pressure = Math.min(0.86, 0.16 + ((state.round - 1) * 0.065));

  for (let nextTier = 2; nextTier <= CARD_TIER_MAX; nextTier += 1) {
    const tierDifficulty = 1 - ((nextTier - 2) * 0.085);
    if (Math.random() < pressure * Math.max(0.12, tierDifficulty)) {
      tier = nextTier;
    } else {
      break;
    }
  }

  return tier;
}

function getBoosterCost(boosterId) {
  const booster = BOOSTER_TYPES[boosterId];
  return booster.baseCost + (state.round * 2);
}

function buildBoosterCards(boosterId) {
  const booster = BOOSTER_TYPES[boosterId];
  const cards = [];

  for (let i = 0; i < 3; i += 1) {
    const typeId = booster.typeId === "random"
      ? rollRandomBoosterCardType()
      : booster.typeId;
    const templateIds = getTemplateIdsForType(typeId);
    const templateId = templateIds[Math.floor(Math.random() * templateIds.length)];
    const tier = typeId === "normal" ? CARD_TIER_MIN : rollShopCardTier();

    cards.push(createRunDeckEntry(templateId, tier));
  }

  return cards;
}

function rollRandomBoosterCardType() {
  const typeIds = ["normal", ...SPECIAL_CARD_TYPE_SEQUENCE];
  return typeIds[Math.floor(Math.random() * typeIds.length)];
}

function getRoundFieldThemeId(round) {
  if (round <= 4) {
    return "normal";
  }

  return FIELD_THEME_SEQUENCE[Math.floor(Math.random() * FIELD_THEME_SEQUENCE.length)];
}

function buildCombatDeck() {
  return shuffle(state.runDeck.map(createDeckCard));
}

function createRunDeckEntry(templateId, tier = CARD_TIER_MIN) {
  return {
    templateId,
    tier: clampCardTier(tier)
  };
}

function createDeckCard(deckEntry) {
  const entry = typeof deckEntry === "string"
    ? createRunDeckEntry(deckEntry)
    : deckEntry;

  return {
    instanceId: `card_${Math.random().toString(36).slice(2, 10)}`,
    templateId: entry.templateId,
    tier: clampCardTier(entry.tier),
    hidden: false
  };
}

function clampCardTier(tier) {
  return Math.max(CARD_TIER_MIN, Math.min(CARD_TIER_MAX, Number(tier) || CARD_TIER_MIN));
}

function getHandPower(cards, revealHidden = true) {
  let total = 0;

  cards.forEach((card) => {
    if (!revealHidden && card.hidden) {
      return;
    }
    const template = CARD_LIBRARY[card.templateId];
    total += template.value;
  });

  return total;
}

function drawCard() {
  return state.drawPile.shift() || null;
}

function drawToPlayer() {
  const card = drawCard();
  if (card) {
    state.playerCards.push(card);
    state.enteringCardIds.push(card.instanceId);
    playCardDealSound();
  }
}

function drawPlayerHand(size = MAX_HAND_SIZE) {
  while (state.playerCards.length < size) {
    const beforeDrawCount = state.drawPile.length;
    drawToPlayer();
    const afterDrawCount = state.drawPile.length;
    if (beforeDrawCount === afterDrawCount) {
      break;
    }
  }
}

function createDealerCard() {
  const templateIds = getNormalTemplateIds();
  return createDeckCard(createRunDeckEntry(templateIds[Math.floor(Math.random() * templateIds.length)]));
}

function drawDealerHand() {
  state.dealerCards = Array.from({ length: DEALER_HAND_SIZE }, createDealerCard);
  state.enteringCardIds.push(...state.dealerCards.map((card) => card.instanceId));
  playCardDealSound();
}

function startRound() {
  state.round += 1;
  state.player.hp = state.player.maxHp;
  state.drawPile = buildCombatDeck();
  state.discardPile = [];
  state.playerCards = [];
  state.dealerCards = [];
  state.selectedCardIds = [];
  state.shopOffers = [];
  state.boosterChoice = null;
  state.enteringCardIds = [];
  state.damageAnimation = null;
  state.playsThisRound = 0;
  state.discardsThisRound = 0;
  state.fieldThemeId = getRoundFieldThemeId(state.round);
  state.phase = "combat";
  state.dealer.maxHp = DEALER_BASE_HP + ((state.round - 1) * 12);
  state.dealer.hp = state.dealer.maxHp;
  state.rewardCoins = WIN_REWARD_COINS + ((state.round - 1) * 4);
  state.message = `Ziehe bis 7 Karten. Spielen ${state.playsThisRound}/${state.maxPlaysPerRound}, Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`;

  drawPlayerHand();
  drawDealerHand();
  clearEnteringCardsSoon();

  state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
  state.hoveredTier = state.playerCards[0]?.tier || CARD_TIER_MIN;
  render();
  saveProfileToBrowser();
}

function resetGame() {
  state.actionToken += 1;
  state.isActionLocked = false;
  state.animatingCardIds = [];
  state.cardAnimationType = null;
  state.damageAnimation = null;
  state.resultEffect = null;
  state.shopOffers = [];
  state.boosterChoice = null;
  state.round = 0;
  state.coins = 0;
  state.runDeck = buildStartingDeck();
  state.player.hp = PLAYER_BASE_HP;
  state.player.maxHp = PLAYER_BASE_HP;
  isRunReady = true;
  startRound();
}

function playSelectedCards() {
  if (state.phase !== "combat" || state.isActionLocked) {
    return;
  }

  if (state.playsThisRound >= state.maxPlaysPerRound) {
    state.message = `Du kannst in diesem Kampf nur ${state.maxPlaysPerRound} mal Karten spielen.`;
    render();
    return;
  }

  const selectedCards = state.playerCards.filter((card) => state.selectedCardIds.includes(card.instanceId));
  if (selectedCards.length === 0) {
    state.message = "Wähle erst mindestens eine Karte aus.";
    render();
    return;
  }
  if (selectedCards.length > MAX_CARDS_PER_TURN) {
    state.message = `Du kannst pro Zug nur ${MAX_CARDS_PER_TURN} Karten spielen.`;
    render();
    return;
  }

  const damage = getHandPower(selectedCards);
  const selectedCardIds = selectedCards.map((card) => card.instanceId);
  const actionToken = state.actionToken + 1;
  state.actionToken = actionToken;
  state.isActionLocked = true;
  state.animatingCardIds = selectedCardIds;
  state.cardAnimationType = "play";
  playCardDealSound();
  startDamageCountAnimation(selectedCards, actionToken);

  window.setTimeout(() => {
    if (state.actionToken !== actionToken) {
      return;
    }

    state.playerCards = state.playerCards.filter((card) => !selectedCardIds.includes(card.instanceId));
    state.discardPile.push(...selectedCards);
    state.selectedCardIds = [];
    state.animatingCardIds = [];
    state.cardAnimationType = null;
    state.damageAnimation = null;
    state.isActionLocked = false;
    state.playsThisRound += 1;
    damageDealer(damage);
  }, getDamageCountAnimationMs(selectedCards.length));
}

function startDamageCountAnimation(cards, actionToken) {
  const values = cards.map((card) => CARD_LIBRARY[card.templateId].value);

  state.damageAnimation = {
    values,
    total: 0,
    finalTotal: values.reduce((sum, value) => sum + value, 0),
    duration: getDamageCountAnimationMs(values.length)
  };
  render();

  values.forEach((value, index) => {
    window.setTimeout(() => {
      if (state.actionToken !== actionToken || !state.damageAnimation) {
        return;
      }

      state.damageAnimation.total += value;
      renderDamageCountOverlay();
    }, DAMAGE_COUNT_STEP_MS * index + 360);
  });

  window.setTimeout(() => {
    if (state.actionToken !== actionToken || !state.damageAnimation) {
      return;
    }

    state.damageAnimation.total = state.damageAnimation.finalTotal;
    renderDamageCountOverlay();
  }, getDamageCountAnimationMs(values.length) - 220);
}

function getDamageCountAnimationMs(cardCount) {
  return Math.max(
    CARD_EXIT_ANIMATION_MS,
    (Math.max(0, cardCount - 1) * DAMAGE_COUNT_STEP_MS) + 360 + DAMAGE_COUNT_FINAL_HOLD_MS
  );
}

function discardSelectedCards() {
  if (state.phase !== "combat" || state.isActionLocked) {
    return;
  }

  if (state.playsThisRound >= state.maxPlaysPerRound && state.dealer.hp > 0) {
    loseCombat("Du hast alle Spielzüge verbraucht und kannst nur noch abwerfen. Kampf verloren.");
    render();
    return;
  }

  if (state.discardsThisRound >= state.maxDiscardsPerRound) {
    state.message = `Du kannst in diesem Kampf nur ${state.maxDiscardsPerRound} mal Karten abwerfen.`;
    render();
    return;
  }

  const selectedCards = state.playerCards.filter((card) => state.selectedCardIds.includes(card.instanceId));
  if (selectedCards.length === 0) {
    state.message = "Wähle erst mindestens eine Karte zum Abwerfen aus.";
    render();
    return;
  }

  const selectedCardIds = selectedCards.map((card) => card.instanceId);
  const actionToken = state.actionToken + 1;
  state.actionToken = actionToken;
  state.isActionLocked = true;
  state.animatingCardIds = selectedCardIds;
  state.cardAnimationType = "discard";
  render();

  window.setTimeout(() => {
    if (state.actionToken !== actionToken) {
      return;
    }

    state.playerCards = state.playerCards.filter((card) => !selectedCardIds.includes(card.instanceId));
    state.discardPile.push(...selectedCards);
    state.selectedCardIds = [];

    let drawnCards = 0;
    while (drawnCards < selectedCards.length) {
      const beforeDrawCount = state.drawPile.length;
      drawToPlayer();
      const afterDrawCount = state.drawPile.length;
      if (beforeDrawCount === afterDrawCount) {
        break;
      }
      drawnCards += 1;
    }

    state.animatingCardIds = [];
    state.cardAnimationType = null;
    state.isActionLocked = false;
    state.discardsThisRound += 1;
    state.hoveredTemplateId = state.playerCards[0]?.templateId || null;

    if (state.playerCards.length === 0 && state.dealer.hp > 0) {
      state.message = `${selectedCards.length} Karte(n) abgeworfen, aber du hast keine Karten mehr. Kampf verloren.`;
      startResultEffect("defeat");
      render();
      return;
    }

    state.message = drawnCards === selectedCards.length
      ? `${selectedCards.length} Karte(n) abgeworfen und ${drawnCards} nachgezogen. Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`
      : `${selectedCards.length} Karte(n) abgeworfen. Nur ${drawnCards} Karte(n) im Deck gefunden. Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`;
    render();
    clearEnteringCardsSoon();
  }, CARD_EXIT_ANIMATION_MS);
}

function damageDealer(amount) {
  state.dealer.hp = Math.max(0, state.dealer.hp - amount);

  if (state.dealer.hp <= 0) {
    state.phase = "victoryCardEffect";
    state.message = `Dealer besiegt! +${state.rewardCoins} Münzen.`;
    state.dealerCards.forEach((card) => {
      card.hidden = false;
    });
    animateCardsBeforeResult("dealer-defeat", state.dealerCards, () => {
      winCombat(`Dealer besiegt! +${state.rewardCoins} Münzen.`);
    });
    return;
  }

  const dealerDamage = getHandPower(state.dealerCards);
  damagePlayer(dealerDamage);

  if (state.phase !== "combat") {
    return;
  }

  drawDealerHand();
  drawPlayerHand();
  clearEnteringCardsSoon();
  state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
  if (state.playerCards.length === 0) {
    state.message = `${amount} Schaden verursacht, aber du hast keine Karten mehr. Kampf verloren.`;
    startResultEffect("defeat");
    render();
    return;
  }

  if (state.playsThisRound >= state.maxPlaysPerRound) {
    loseCombat(`${amount} Schaden verursacht, aber du hast alle Spielzüge verbraucht. Kampf verloren.`);
    render();
    return;
  }

  state.message = `${amount} Schaden verursacht. Dealer kontert mit ${dealerDamage} Schaden. Spielen ${state.playsThisRound}/${state.maxPlaysPerRound}, Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`;
  render();
}

function damagePlayer(amount) {
  state.player.hp = Math.max(0, state.player.hp - amount);

  if (state.player.hp <= 0) {
    state.phase = "defeatCardEffect";
    state.message = `Du wurdest besiegt. Dealer hat ${amount} Schaden gemacht.`;
    state.selectedCardIds = [];
    animateCardsBeforeResult("player-defeat", state.playerCards, () => {
      startResultEffect("defeat");
      render();
    });
  }
}

function animateCardsBeforeResult(animationType, cards, afterAnimation) {
  const animatedCardIds = cards
    .filter((card) => card && !card.hidden)
    .map((card) => card.instanceId);

  if (animatedCardIds.length === 0) {
    afterAnimation();
    return;
  }

  const actionToken = state.actionToken + 1;
  state.actionToken = actionToken;
  state.isActionLocked = true;
  state.animatingCardIds = animatedCardIds;
  state.cardAnimationType = animationType;
  triggerScreenShake();
  render();

  window.setTimeout(() => {
    if (state.actionToken !== actionToken) {
      return;
    }

    state.animatingCardIds = [];
    state.cardAnimationType = null;
    afterAnimation();
  }, RESULT_CARD_ANIMATION_MS);
}

function startResultEffect(resultType) {
  state.phase = `${resultType}Effect`;
  state.resultEffect = resultType;
  state.isActionLocked = true;
  triggerScreenShake();

  window.setTimeout(() => {
    if (state.phase !== `${resultType}Effect`) {
      return;
    }

    state.phase = resultType;
    state.resultEffect = null;
    state.isActionLocked = false;
    render();
  }, RESULT_EFFECT_MS);
}

function loseCombat(message) {
  if (state.phase === "defeat" || state.phase === "defeatEffect") {
    return;
  }

  state.message = message;
  state.selectedCardIds = [];
  startResultEffect("defeat");
}

function winCombat(message = `Gewonnen! +${state.rewardCoins} Münzen.`) {
  if (state.phase === "victory" || state.phase === "victoryEffect" || state.phase === "shop") {
    return;
  }

  state.phase = "victoryEffect";
  state.coins += state.rewardCoins;
  state.drawPile = buildCombatDeck();
  state.discardPile = [];
  state.playerCards = [];
  state.selectedCardIds = [];
  state.dealerCards.forEach((card) => {
    card.hidden = false;
  });
  state.message = message;
  state.resultEffect = "victory";
  state.isActionLocked = true;
  triggerScreenShake();
  render();

  window.setTimeout(() => {
    if (state.phase !== "victoryEffect") {
      return;
    }

    state.phase = "shop";
    state.shopOffers = buildShopOffers();
    state.boosterChoice = null;
    state.message = "Willkommen im Shop.";
    state.resultEffect = null;
    state.isActionLocked = false;
    render();
  }, RESULT_EFFECT_MS);
}

function continueToShop() {
  if (state.phase !== "victory") {
    return;
  }

  state.phase = "shop";
  state.shopOffers = buildShopOffers();
  state.boosterChoice = null;
  state.message = "Willkommen im Shop.";
  render();
}

function buyShopOffer(index) {
  if (state.phase !== "shop" || state.boosterChoice) {
    return;
  }

  const offer = state.shopOffers[index];
  if (!offer || offer.isSold) {
    return;
  }

  if (state.coins < offer.cost) {
    state.message = "Nicht genug Münzen.";
    render();
    return;
  }

  const booster = BOOSTER_TYPES[offer.boosterId];
  const newCards = buildBoosterCards(offer.boosterId);
  state.coins -= offer.cost;
  offer.isSold = true;
  state.boosterChoice = {
    boosterId: offer.boosterId,
    cards: newCards
  };
  state.message = `${booster.label} geöffnet. Wähle 1 Karte.`;
  triggerScreenShake();
  playBoosterOpenSound();
  render();
  scrollBoosterChoiceIntoView();
}

function scrollBoosterChoiceIntoView() {
  window.requestAnimationFrame(() => {
    els.boosterChoicePanel.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  });
}

function chooseBoosterCard(index) {
  if (state.phase !== "shop" || !state.boosterChoice) {
    return;
  }

  const chosenCard = state.boosterChoice.cards[index];
  if (!chosenCard) {
    return;
  }

  const template = CARD_LIBRARY[chosenCard.templateId];
  state.runDeck.push(chosenCard);
  state.message = `${getCardDisplayName(template, chosenCard.tier)} deinem Deck hinzugefügt.`;
  state.boosterChoice = null;
  triggerScreenShake();
  render();
}

function rerollShopOffers() {
  if (state.phase !== "shop" || state.boosterChoice) {
    return;
  }

  if (state.coins < SHOP_REROLL_COST) {
    state.message = `Nicht genug Münzen. Aktualisieren kostet ${SHOP_REROLL_COST}.`;
    render();
    return;
  }

  state.coins -= SHOP_REROLL_COST;
  state.shopOffers = buildShopOffers();
  state.message = `Shop aktualisiert. -${SHOP_REROLL_COST}.`;
  triggerScreenShake();
  render();
}

function addDebugCoins() {
  state.coins += DEBUG_COINS;
  state.message = `Debug: +${DEBUG_COINS}.`;
  render();
}

function getCurrentDeckCards() {
  return state.drawPile.map((card) => ({ ...card, zone: "Deck" }));
}

function openDeckPanel() {
  if (state.isDeckOpen) {
    closeDeckPanel();
    return;
  }

  state.isDeckOpen = true;
  const firstCard = getCurrentDeckCards()[0];
  state.deckHoveredTemplateId = firstCard?.templateId || null;
  state.deckHoveredTier = firstCard?.tier || CARD_TIER_MIN;
  renderDeckPanel();
}

function closeDeckPanel() {
  state.isDeckOpen = false;
  renderDeckPanel();
}

function toggleCardSelection(card) {
  if (state.phase !== "combat" || state.isActionLocked) {
    return;
  }

  if (state.selectedCardIds.includes(card.instanceId)) {
    state.selectedCardIds = state.selectedCardIds.filter((id) => id !== card.instanceId);
  } else {
    if (state.selectedCardIds.length >= MAX_CARDS_PER_TURN) {
      state.message = `Maximal ${MAX_CARDS_PER_TURN} Karten pro Zug.`;
      render();
      return;
    }
    state.selectedCardIds.push(card.instanceId);
  }

  playCardSelectSound();
  render();
}

function createCardElement(template, options = {}) {
  const article = document.createElement("article");
  article.className = "playing-card";
  const tier = clampCardTier(options.tier);

  if (options.hidden) {
    article.classList.add("card-hidden");
    article.innerHTML = `
      <div class="deck-back" style="width:100%;height:100%;border-radius:20px;">
        <span>DEALER</span>
      </div>
    `;
    return article;
  }

  article.classList.add("hover-card");
  article.classList.add(`card-${template.typeId}`);
  if (options.selected) {
    article.classList.add("is-selected");
  }
  if (options.isEntering) {
    article.classList.add("is-entering");
  }
  if (options.animationType) {
    article.classList.add(`is-${options.animationType}`);
    const animationIndex = state.animatingCardIds.indexOf(options.card?.instanceId);
    if (animationIndex >= 0) {
      article.style.setProperty("--play-index", animationIndex);
    }
  }
  if (options.selectable) {
    article.classList.add("is-selectable");
    article.setAttribute("role", "button");
    article.setAttribute("tabindex", "0");
  }
  article.innerHTML = `
    <img src="${template.sprite}" alt="${template.displayName}" draggable="false">
    ${tier > CARD_TIER_MIN ? `<div class="card-tier">STUFE ${tier}</div>` : ""}
    <div class="card-type">${template.typeLabel}</div>
  `;

  if (options.selectable && options.card) {
    article.addEventListener("click", () => toggleCardSelection(options.card));
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCardSelection(options.card);
      }
    });
  }

  if (options.interactive !== false) {
    article.addEventListener("pointerenter", () => {
      state.hoveredTemplateId = template.id;
      state.hoveredTier = tier;
      renderPreview();
    });

    article.addEventListener("pointermove", (event) => {
      const rect = article.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) - 0.5;
      const y = ((event.clientY - rect.top) / rect.height) - 0.5;
      article.classList.add("tilted");
      article.style.setProperty("--tilt-y", `${x * 48}deg`);
      article.style.setProperty("--tilt-x", `${y * -34}deg`);
      article.style.setProperty("--hover-rotate-y", `${x * 24}deg`);
      article.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
      article.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
    });

    article.addEventListener("pointerleave", () => {
      article.classList.remove("tilted");
      article.style.setProperty("--tilt-y", "0deg");
      article.style.setProperty("--tilt-x", "0deg");
      article.style.setProperty("--hover-rotate-y", "0deg");
      article.style.setProperty("--shine-x", "50%");
      article.style.setProperty("--shine-y", "30%");
    });
  }

  return article;
}

function renderCards(node, cards, hideHidden, options = {}) {
  node.innerHTML = "";
  cards.forEach((card) => {
    const template = CARD_LIBRARY[card.templateId];
    node.appendChild(createCardElement(template, {
      hidden: hideHidden && card.hidden,
      card,
      selectable: options.selectable,
      selected: state.selectedCardIds.includes(card.instanceId),
      tier: card.tier,
      isEntering: state.enteringCardIds.includes(card.instanceId),
      animationType: state.animatingCardIds.includes(card.instanceId)
        ? state.cardAnimationType
        : null
    }));
  });
}

function renderPreview() {
  els.previewSlot.innerHTML = "";
  const templateId = state.hoveredTemplateId;
  const template = templateId ? CARD_LIBRARY[templateId] : null;
  const tier = state.hoveredTier || CARD_TIER_MIN;

  if (!template) {
    els.previewTitle.textContent = "Hover Card";
    els.previewText.textContent = "Hover über eine Karte, um Details zu sehen.";
    return;
  }

  els.previewSlot.appendChild(createCardElement(template, { interactive: false, tier }));
  els.previewTitle.textContent = getCardDisplayName(template, tier);
  els.previewText.textContent = getCardDescription(template, tier);
}

function renderDeckPreview() {
  els.deckPreviewSlot.innerHTML = "";
  const templateId = state.deckHoveredTemplateId;
  const template = templateId ? CARD_LIBRARY[templateId] : null;
  const tier = state.deckHoveredTier || CARD_TIER_MIN;

  if (!template) {
    els.deckPreviewTitle.textContent = "Hover Card";
    els.deckPreviewText.textContent = "";
    return;
  }

  els.deckPreviewSlot.appendChild(createCardElement(template, { interactive: false, tier }));
  els.deckPreviewTitle.textContent = getCardDisplayName(template, tier);
  els.deckPreviewText.textContent = `${template.typeLabel}${tier > CARD_TIER_MIN ? ` · Stufe ${tier}` : ""} · ${template.value} Schaden`;
}

function renderDeckPanel() {
  const cards = getCurrentDeckCards();

  els.deckPanel.classList.toggle("is-hidden", !state.isDeckOpen);
  els.deckSummary.textContent = `${state.drawPile.length} Deck · ${state.playerCards.length} Hand · ${state.discardPile.length} Abgelegt`;
  els.deckList.innerHTML = "";

  if (!cards.some((card) => card.templateId === state.deckHoveredTemplateId && card.tier === state.deckHoveredTier)) {
    state.deckHoveredTemplateId = cards[0]?.templateId || null;
    state.deckHoveredTier = cards[0]?.tier || CARD_TIER_MIN;
  }

  cards.forEach((card) => {
    const template = CARD_LIBRARY[card.templateId];
    const item = document.createElement("article");
    item.className = "deck-list-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.innerHTML = `
      <div class="deck-list-card"></div>
      <div class="deck-list-meta">
        <strong>${getCardDisplayName(template, card.tier)}</strong>
        <span>
          <b>${template.typeLabel}</b>
          ${card.tier > CARD_TIER_MIN ? `<b>STUFE ${card.tier}</b>` : ""}
          <b>${template.value}</b>
        </span>
      </div>
    `;
    item.querySelector(".deck-list-card").appendChild(createCardElement(template, { interactive: false, tier: card.tier }));
    item.addEventListener("pointerenter", () => {
      state.deckHoveredTemplateId = template.id;
      state.deckHoveredTier = card.tier;
      renderDeckPreview();
    });
    item.addEventListener("focus", () => {
      state.deckHoveredTemplateId = template.id;
      state.deckHoveredTier = card.tier;
      renderDeckPreview();
    });
    item.addEventListener("click", () => {
      state.deckHoveredTemplateId = template.id;
      state.deckHoveredTier = card.tier;
      renderDeckPreview();
    });
    els.deckList.appendChild(item);
  });

  renderDeckPreview();
}

function renderShopOffers() {
  els.shopOffers.innerHTML = "";

  state.shopOffers.forEach((offer, index) => {
    const booster = BOOSTER_TYPES[offer.boosterId];
    const item = document.createElement("article");
    item.className = "shop-card offer-card";
    item.innerHTML = `
      <div class="shop-card-preview">
        <img class="booster-pack-image" src="${booster.sprite}" alt="${booster.label}">
      </div>
      <div class="shop-card-copy">
        <strong>${booster.label}</strong>
        <span>${booster.description}</span>
      </div>
      <button class="control-button ${offer.isSold ? "ghost" : "alt"}" type="button">
        ${offer.isSold ? "Geöffnet" : createCoinCostMarkup(offer.cost)}
      </button>
    `;

    const buyButton = item.querySelector("button");
    buyButton.disabled = Boolean(state.boosterChoice) || offer.isSold || state.coins < offer.cost;
    buyButton.addEventListener("click", () => buyShopOffer(index));
    els.shopOffers.appendChild(item);
  });
}

function renderBoosterChoices() {
  const choice = state.boosterChoice;
  els.boosterChoicePanel.classList.toggle("is-hidden", !choice);
  els.boosterChoices.innerHTML = "";

  if (!choice) {
    return;
  }

  const booster = BOOSTER_TYPES[choice.boosterId];
  els.boosterChoiceTitle.textContent = `${booster.label}: Wähle 1 Karte`;

  choice.cards.forEach((card, index) => {
    const template = CARD_LIBRARY[card.templateId];
    const item = document.createElement("button");
    item.className = "booster-choice-card";
    item.type = "button";
    item.innerHTML = `
      <div class="booster-choice-card-preview"></div>
      <strong>${getCardDisplayName(template, card.tier)}</strong>
      <span>${template.typeLabel}${card.tier > CARD_TIER_MIN ? ` · STUFE ${card.tier}` : ""} · ${template.value} Schaden</span>
    `;
    item.querySelector(".booster-choice-card-preview").appendChild(createCardElement(template, {
      interactive: false,
      tier: card.tier
    }));
    item.addEventListener("click", () => chooseBoosterCard(index));
    els.boosterChoices.appendChild(item);
  });
}

function createCoinCostMarkup(amount) {
  return `
    <span class="coin-cost">
      <span>${amount}</span>
      <img src="${COIN_ICON_SRC}" alt="Coins">
    </span>
  `;
}

function renderDamageCountOverlay() {
  if (!state.damageAnimation) {
    els.damageCountOverlay.classList.remove("is-active");
    els.damageCountOverlay.innerHTML = "";
    return;
  }

  const valuesMarkup = state.damageAnimation.values
    .map((value, index) => `<span style="--hit-index: ${index}">+${value}</span>`)
    .join("");

  els.damageCountOverlay.classList.add("is-active");
  els.damageCountOverlay.style.setProperty("--damage-duration", `${state.damageAnimation.duration}ms`);
  els.damageCountOverlay.innerHTML = `
    <div class="damage-count-values">${valuesMarkup}</div>
    <div class="damage-count-total">${state.damageAnimation.total}</div>
  `;
}

function renderFieldTheme() {
  const theme = FIELD_THEMES[state.fieldThemeId] || FIELD_THEMES.normal;
  els.battleFelt.className = `felt field-theme-${theme.id}`;
  els.fieldThemeLabel.textContent = theme.label;
}

function render() {
  const selectedCards = state.playerCards.filter((card) => state.selectedCardIds.includes(card.instanceId));
  const selectedPower = getHandPower(selectedCards);
  const dealerPower = state.phase === "combat" ? getHandPower(state.dealerCards) : 0;
  const playerHpPercent = state.player.maxHp > 0
    ? (state.player.hp / state.player.maxHp) * 100
    : 0;
  const dealerHpPercent = state.dealer.maxHp > 0
    ? (state.dealer.hp / state.dealer.maxHp) * 100
    : 0;

  renderFieldTheme();
  els.roundLabel.textContent = String(state.round);
  els.deckCountLabel.textContent = String(state.drawPile.length);
  els.playerTotalLabel.textContent = `${selectedPower} (${selectedCards.length}/${MAX_CARDS_PER_TURN})`;
  els.playerDamageLabel.textContent = String(selectedPower);
  els.dealerDamageLabel.textContent = String(dealerPower);
  els.playerHpLabel.textContent = `${state.player.hp}/${state.player.maxHp}`;
  els.playerHpText.textContent = `${state.player.hp}/${state.player.maxHp} HP`;
  els.playerHpFill.style.width = `${playerHpPercent}%`;
  els.dealerHpLabel.textContent = `${state.dealer.hp}/${state.dealer.maxHp}`;
  els.dealerHpText.textContent = `${state.dealer.hp}/${state.dealer.maxHp} HP`;
  els.dealerHpFill.style.width = `${dealerHpPercent}%`;
  els.coinsLabel.textContent = String(state.coins);
  els.shopCoinsLabel.textContent = String(state.coins);
  els.playerCardCountLabel.textContent = `${state.playerCards.length}/${MAX_HAND_SIZE}`;
  els.dealerCardCountLabel.textContent = String(state.dealerCards.length);
  els.phaseLabel.textContent =
    state.phase === "shop"
      ? "Shop"
      : state.phase === "victory"
        ? "Sieg"
      : state.phase === "defeat"
        ? "Besiegt"
      : state.phase === "victoryEffect"
        ? "Sieg"
      : state.phase === "defeatEffect"
        ? "Besiegt"
        : "Kampf";
  els.rewardLabel.textContent = String(state.rewardCoins);
  els.messageBanner.textContent = state.message;

  els.playerStatusLabel.textContent =
    state.phase === "shop"
      ? "Shopping"
      : state.phase === "victory"
        ? "Sieg"
      : state.phase === "defeat"
        ? "Besiegt"
      : state.phase === "victoryEffect"
        ? "Sieg"
      : state.phase === "defeatEffect"
        ? "Besiegt"
        : `${selectedCards.length}/${MAX_CARDS_PER_TURN} Karten`;
  els.dealerStatusLabel.textContent = state.phase === "shop" || state.phase === "victory" || state.phase === "victoryEffect" ? "Besiegt" : "Enemy";
  els.playSelectedButton.textContent = `Spielen ${Math.max(0, state.maxPlaysPerRound - state.playsThisRound)}/${state.maxPlaysPerRound}`;
  els.discardSelectedButton.textContent = `Abwerfen ${Math.max(0, state.maxDiscardsPerRound - state.discardsThisRound)}/${state.maxDiscardsPerRound}`;
  els.shopRerollButton.innerHTML = `Neu Würfeln ${createCoinCostMarkup(SHOP_REROLL_COST)}`;

  els.playSelectedButton.disabled =
    state.phase !== "combat"
    || selectedCards.length === 0
    || state.isActionLocked
    || state.playsThisRound >= state.maxPlaysPerRound;
  els.discardSelectedButton.disabled =
    state.phase !== "combat"
    || selectedCards.length === 0
    || state.isActionLocked
    || state.discardsThisRound >= state.maxDiscardsPerRound;
  els.shopRerollButton.disabled = state.phase !== "shop" || Boolean(state.boosterChoice) || state.coins < SHOP_REROLL_COST;
  els.shopNextFightButton.disabled = state.phase === "shop" && Boolean(state.boosterChoice);
  els.nextFightButton.classList.add("is-hidden");
  els.shopPanel.classList.toggle("is-hidden", state.phase !== "shop");
  els.victoryPanel.classList.toggle("is-hidden", state.phase !== "victory");
  els.defeatPanel.classList.toggle("is-hidden", state.phase !== "defeat");
  els.resultEffect.classList.toggle("is-hidden", !state.resultEffect);
  els.resultEffect.classList.toggle("is-victory", state.resultEffect === "victory");
  els.resultEffect.classList.toggle("is-defeat", state.resultEffect === "defeat");
  els.resultEffectText.innerHTML = state.resultEffect === "victory"
    ? `SIEG<span>+${state.rewardCoins} COINS</span>`
    : state.resultEffect === "defeat"
      ? "NIEDERLAGE"
      : "";
  els.victoryText.innerHTML = `Belohnung: +${createCoinCostMarkup(state.rewardCoins)}. Aktuell: ${createCoinCostMarkup(state.coins)}.`;
  els.defeatText.textContent = state.message;

  renderShopOffers();
  renderBoosterChoices();
  renderCards(els.playerCards, state.playerCards, false, { selectable: true });
  renderCards(els.dealerCards, state.dealerCards, true);
  renderDamageCountOverlay();
  renderPreview();
  renderDeckPanel();
}

els.playSelectedButton.addEventListener("click", playSelectedCards);
els.discardSelectedButton.addEventListener("click", discardSelectedCards);
els.debugWinButton.addEventListener("click", () => winCombat());
els.debugCoinsButton.addEventListener("click", addDebugCoins);
els.nextFightButton.addEventListener("click", startRound);
els.shopNextFightButton.addEventListener("click", startRound);
els.shopRerollButton.addEventListener("click", rerollShopOffers);
els.continueToShopButton.addEventListener("click", continueToShop);
els.restartRunButton.addEventListener("click", resetGame);
els.defeatMainMenuButton.addEventListener("click", returnToMainMenu);
els.ingameMainMenuButton.addEventListener("click", returnToMainMenu);
els.resetButton.addEventListener("click", resetGame);
els.deckButton.addEventListener("click", openDeckPanel);
els.closeDeckButton.addEventListener("click", closeDeckPanel);
els.startGameButton.addEventListener("click", startGameFromMenu);
els.settingsMenuButton.addEventListener("click", openSettingsMenu);
els.profileMenuButton.addEventListener("click", openProfileMenu);
els.closeSettingsButton.addEventListener("click", () => els.settingsMenuPanel.classList.add("is-hidden"));
els.closeProfileButton.addEventListener("click", () => els.profileMenuPanel.classList.add("is-hidden"));
els.createProfileButton.addEventListener("click", createProfile);
els.downloadProfileButton.addEventListener("click", downloadProfileSave);
els.uploadProfileButton.addEventListener("click", () => els.uploadProfileInput.click());
els.uploadProfileInput.addEventListener("change", (event) => {
  uploadProfileSave(event.target.files[0]);
  event.target.value = "";
});

document.addEventListener("click", (event) => {
  if (event.target.closest("button, .playing-card, .deck-list-item")) {
    triggerScreenShake();
    playSoundtrack();
  }

  if (event.target.closest("button")) {
    playButtonClickSound();
  }
});

initSoundtrack();
updateProfileUi();
showMainMenu();
