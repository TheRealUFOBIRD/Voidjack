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
  ["j", 11],
  ["q", 11],
  ["k", 11],
  ["a", 12]
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
    baseCost: 6,
    description: "Enthält 3 normale Karten."
  },
  random: {
    id: "random",
    label: "RANDOM BOOSTER",
    typeId: "random",
    sprite: "assets/boosters/random.png",
    baseCost: 8,
    description: "Enthält 3 zufällige Karten aus allen Arten."
  },
  magical: {
    id: "magical",
    label: "MAGISCH BOOSTER",
    typeId: "magical",
    sprite: "assets/boosters/magisch.png",
    baseCost: 12,
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
    baseCost: 12,
    description: "Enthält 3 Elemental-Karten."
  },
  dark: {
    id: "dark",
    label: "DUNKEL BOOSTER",
    typeId: "dark",
    sprite: "assets/boosters/dunkel.png",
    baseCost: 12,
    description: "Enthält 3 dunkle Karten."
  },
  holy: {
    id: "holy",
    label: "HEILIG BOOSTER",
    typeId: "holy",
    sprite: "assets/boosters/heilig.png",
    baseCost: 12,
    description: "Enthält 3 heilige Karten."
  },
  golden: {
    id: "golden",
    label: "GOLDEN BOOSTER",
    typeId: "golden",
    sprite: "assets/boosters/golden.png",
    baseCost: 12,
    description: "Enthält 3 goldene Karten."
  },
  cursed: {
    id: "cursed",
    label: "VERFLUCHT BOOSTER",
    typeId: "cursed",
    sprite: "assets/boosters/verflucht.png",
    baseCost: 12,
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

const ITEM_TYPES = {
  trash: {
    id: "trash",
    label: "Müll",
    sprite: "assets/icons/item_trash.png",
    baseCost: 8,
    description: "Entfernt 2 Karten dauerhaft aus deinem Deck."
  }
};

const DEALER_BASE_HP = 60;
const PLAYER_BASE_HP = 80;
const WIN_REWARD_COINS = 20;
const DEBUG_COINS = 25;
const STARTING_DECK_SIZE = 13;
const MAX_HAND_SIZE = 7;
const MAX_DISCARD_DRAW_COUNT = 5;
const MAX_CARDS_PER_TURN = 3;
const BASE_MAX_PLAYS_PER_ROUND = 4;
const BASE_MAX_DISCARDS_PER_ROUND = 2;
const DEALER_HAND_SIZE = 2;
const SHOP_OFFER_COUNT = 3;
const SHOP_REROLL_COST = 6;
const SPECIAL_BOOSTER_CHANCE = 0.025;
const ITEM_SHOP_CHANCE = 0.55;
const COMBO_PAIR_BONUS_COINS = 2;
const COMBO_TRIPLE_BONUS_COINS = 5;
const COMBO_FLUSH_BONUS_COINS = 4;
const COMBO_THEME_TRIPLE_BONUS_COINS = 10;
const THEME_EFFECT_TIER_STEP = 1;
const THEME_EFFECT_CONFIG = {
  void: {
    summary: "Riskanter Burst-Schaden gegen eigene HP.",
    stats: [
      { label: "Schaden", value: "+12", scaling: "+2 pro Bonusstufe" },
      { label: "Kosten", value: "-4 HP", scaling: "-1 HP je 3 Bonusstufen" }
    ],
    apply(effect, tierBoost) {
      effect.damageBonus = 12 + (tierBoost * 2);
      effect.selfDamage = 4 + Math.floor(tierBoost / 3);
    }
  },
  elemental: {
    summary: "Zusatzschaden und schwächerer Dealer-Konter.",
    stats: [
      { label: "Schaden", value: "+5", scaling: "+1 pro Bonusstufe" },
      { label: "Dealer", value: "-2 Schaden", scaling: "-1 je 2 Bonusstufen" }
    ],
    apply(effect, tierBoost) {
      effect.damageBonus = 5 + tierBoost;
      effect.dealerDamageReduction = 2 + Math.floor(tierBoost / 2);
    }
  },
  magical: {
    summary: "Zieht Bonuskarten nach dem normalen Auffüllen.",
    stats: [
      { label: "Ziehen", value: "+1 Karte", scaling: "+1 je 5 Bonusstufen, max. 3" }
    ],
    apply(effect, tierBoost) {
      effect.drawCards = Math.min(3, 1 + Math.floor(tierBoost / 5));
    }
  },
  dark: {
    summary: "Wird stärker, wenn dir HP fehlen.",
    stats: [
      { label: "Schaden", value: "+1 je 3 fehlende HP", scaling: "+2 pro Bonusstufe" }
    ],
    apply(effect, tierBoost) {
      const missingHp = Math.max(0, state.player.maxHp - state.player.hp);
      effect.damageBonus = Math.floor(missingHp / 3) + (tierBoost * 2);
    }
  },
  holy: {
    summary: "Heilt dich und schützt vor dem Dealer-Konter.",
    stats: [
      { label: "Heilung", value: "+3 HP", scaling: "+1 pro Bonusstufe" },
      { label: "Dealer", value: "-6 Schaden", scaling: "-1 pro Bonusstufe" }
    ],
    apply(effect, tierBoost) {
      effect.heal = 3 + tierBoost;
      effect.dealerDamageReduction = 6 + tierBoost;
    }
  },
  golden: {
    summary: "Direkte Economy-Belohnung.",
    stats: [
      { label: "Coins", value: "+8", scaling: "+2 pro Bonusstufe" }
    ],
    apply(effect, tierBoost) {
      effect.coins = 8 + (tierBoost * 2);
    }
  },
  cursed: {
    summary: "Sehr hoher Schaden mit Kontrollverlust.",
    stats: [
      { label: "Schaden", value: "+18", scaling: "+3 pro Bonusstufe" },
      { label: "Nachteil", value: "1 Handkarte", scaling: "zufällig abwerfen" }
    ],
    apply(effect, tierBoost) {
      effect.damageBonus = 18 + (tierBoost * 3);
      effect.discardRandomCards = 1;
    }
  }
};
const INVENTORY_SLOT_COUNT = 3;
const TRASH_ITEM_REMOVE_COUNT = 2;
const TRASH_ITEM_MIN_REMOVE_COUNT = 1;
const CARD_TIER_MIN = 1;
const CARD_TIER_MAX = 10;
const STARTING_VOLUME = 5;
const CARD_EXIT_ANIMATION_MS = 360;
const CARD_DEAL_ANIMATION_MS = 220;
const CARD_DEAL_STAGGER_MS = 45;
const CARD_SORT_ANIMATION_MS = 180;
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
const audioSettings = {
  musicEnabled: true,
  effectsEnabled: true,
  shakeEnabled: true
};

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
  shopItemOffer: null,
  inventoryItems: [],
  boosterChoice: null,
  isDeckOpen: false,
  isCombosOpen: false,
  deckSortMode: "rank",
  activeTrashItemSlotIndex: null,
  trashSelectedDeckEntryIds: [],
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
  comboSelectionOverlay: document.getElementById("comboSelectionOverlay"),
  sortHandRankButton: document.getElementById("sortHandRankButton"),
  sortHandSuitButton: document.getElementById("sortHandSuitButton"),
  sortHandTypeButton: document.getElementById("sortHandTypeButton"),
  sortHandTierButton: document.getElementById("sortHandTierButton"),
  shopPanel: document.getElementById("shopPanel"),
  shopCoinsLabel: document.getElementById("shopCoinsLabel"),
  shopOffers: document.getElementById("shopOffers"),
  inventorySlots: document.getElementById("inventorySlots"),
  boosterChoicePanel: document.getElementById("boosterChoicePanel"),
  boosterChoiceTitle: document.getElementById("boosterChoiceTitle"),
  boosterChoices: document.getElementById("boosterChoices"),
  skipBoosterChoiceButton: document.getElementById("skipBoosterChoiceButton"),
  victoryPanel: document.getElementById("victoryPanel"),
  victoryText: document.getElementById("victoryText"),
  continueToShopButton: document.getElementById("continueToShopButton"),
  defeatPanel: document.getElementById("defeatPanel"),
  defeatText: document.getElementById("defeatText"),
  restartRunButton: document.getElementById("restartRunButton"),
  defeatMainMenuButton: document.getElementById("defeatMainMenuButton"),
  ingameMainMenuButton: document.getElementById("ingameMainMenuButton"),
  ingameSettingsButton: document.getElementById("ingameSettingsButton"),
  deckButton: document.getElementById("deckButton"),
  combosButton: document.getElementById("combosButton"),
  deckPanel: document.getElementById("deckPanel"),
  closeDeckButton: document.getElementById("closeDeckButton"),
  combosPanel: document.getElementById("combosPanel"),
  closeCombosButton: document.getElementById("closeCombosButton"),
  sortDeckRankButton: document.getElementById("sortDeckRankButton"),
  sortDeckSuitButton: document.getElementById("sortDeckSuitButton"),
  sortDeckTypeButton: document.getElementById("sortDeckTypeButton"),
  sortDeckTierButton: document.getElementById("sortDeckTierButton"),
  soundtrackAudio: document.getElementById("soundtrackAudio"),
  volumeSlider: document.getElementById("volumeSlider"),
  volumeValueLabel: document.getElementById("volumeValueLabel"),
  deckSummary: document.getElementById("deckSummary"),
  deckList: document.getElementById("deckList"),
  trashItemPanel: document.getElementById("trashItemPanel"),
  trashItemSummary: document.getElementById("trashItemSummary"),
  trashItemDeckList: document.getElementById("trashItemDeckList"),
  confirmTrashItemButton: document.getElementById("confirmTrashItemButton"),
  cancelTrashItemButton: document.getElementById("cancelTrashItemButton"),
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
  musicToggle: document.getElementById("musicToggle"),
  effectsToggle: document.getElementById("effectsToggle"),
  shakeToggle: document.getElementById("shakeToggle"),
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

document.body.insertBefore(els.settingsMenuPanel, els.soundtrackAudio);

function setSoundtrackVolume(value) {
  const volumePercent = Math.max(0, Math.min(100, Number(value) || 0));
  els.soundtrackAudio.volume = volumePercent / 100;
  els.volumeSlider.value = String(volumePercent);
  els.volumeValueLabel.textContent = `${volumePercent}%`;
}

function loadAudioSettings() {
  try {
    const savedSettings = JSON.parse(window.localStorage?.getItem("voidjack-audio-settings") || "{}");
    audioSettings.musicEnabled = savedSettings.musicEnabled !== false;
    audioSettings.effectsEnabled = savedSettings.effectsEnabled !== false;
    audioSettings.shakeEnabled = savedSettings.shakeEnabled !== false;
  } catch (error) {
    audioSettings.musicEnabled = true;
    audioSettings.effectsEnabled = true;
    audioSettings.shakeEnabled = true;
  }
}

function saveAudioSettings() {
  try {
    window.localStorage?.setItem("voidjack-audio-settings", JSON.stringify(audioSettings));
  } catch (error) {
    // Audio-Einstellungen sind Komfortdaten und duerfen das Spiel nicht unterbrechen.
  }
}

function updateAudioSettingsUi() {
  els.musicToggle.checked = audioSettings.musicEnabled;
  els.effectsToggle.checked = audioSettings.effectsEnabled;
  els.shakeToggle.checked = audioSettings.shakeEnabled;
}

function setMusicEnabled(isEnabled) {
  audioSettings.musicEnabled = Boolean(isEnabled);
  updateAudioSettingsUi();
  saveAudioSettings();

  if (audioSettings.musicEnabled) {
    playSoundtrack();
    return;
  }

  els.soundtrackAudio.pause();
}

function setEffectsEnabled(isEnabled) {
  audioSettings.effectsEnabled = Boolean(isEnabled);
  updateAudioSettingsUi();
  saveAudioSettings();
}

function setShakeEnabled(isEnabled) {
  audioSettings.shakeEnabled = Boolean(isEnabled);
  updateAudioSettingsUi();
  saveAudioSettings();

  if (!audioSettings.shakeEnabled) {
    document.body.classList.remove("screen-shake");
  }
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

function closeOverlayWindows(options = {}) {
  state.isDeckOpen = false;
  state.isCombosOpen = false;
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];

  if (!options.keepSettings) {
    els.settingsMenuPanel.classList.add("is-hidden");
  }
  if (!options.keepProfile) {
    els.profileMenuPanel.classList.add("is-hidden");
  }
}

function returnToMainMenu() {
  saveProfileToBrowser();
  state.resultEffect = null;
  state.isActionLocked = false;
  closeOverlayWindows();
  render();
  updateProfileUi();
  showMainMenu();
}

function openSettingsMenu() {
  closeOverlayWindows({ keepSettings: true });
  updateAudioSettingsUi();
  els.settingsMenuPanel.classList.remove("is-hidden");
  render();
}

function openProfileMenu() {
  closeOverlayWindows({ keepProfile: true });
  els.profileMenuPanel.classList.remove("is-hidden");
  updateProfileUi();
  render();
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
  if (audioSettings.musicEnabled) {
    playSoundtrack();
  }
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
      shopItemOffer: state.shopItemOffer,
      inventoryItems: state.inventoryItems,
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
  state.runDeck = Array.isArray(savedState.runDeck) ? normalizeRunDeck(savedState.runDeck) : buildStartingDeck();
  state.drawPile = Array.isArray(savedState.drawPile) ? normalizeCombatCards(savedState.drawPile) : buildCombatDeck();
  state.discardPile = Array.isArray(savedState.discardPile) ? normalizeCombatCards(savedState.discardPile) : [];
  state.playerCards = Array.isArray(savedState.playerCards) ? normalizeCombatCards(savedState.playerCards) : [];
  state.dealerCards = Array.isArray(savedState.dealerCards) ? savedState.dealerCards : [];
  state.selectedCardIds = [];
  state.shopOffers = Array.isArray(savedState.shopOffers) ? savedState.shopOffers : [];
  state.shopItemOffer = Object.prototype.hasOwnProperty.call(savedState, "shopItemOffer")
    ? sanitizeShopItemOffer(savedState.shopItemOffer)
    : null;
  state.inventoryItems = normalizeInventoryItems(savedState.inventoryItems);
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
  state.enteringCardIds = [];
  state.animatingCardIds = [];
  state.cardAnimationType = null;
  state.damageAnimation = null;
  state.isActionLocked = false;
  state.resultEffect = null;
  state.isDeckOpen = false;
  state.isCombosOpen = false;
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];

  if (state.phase === "shop") {
    const hasSavedItemOffer = Object.prototype.hasOwnProperty.call(savedState, "shopItemOffer");
    if (state.shopOffers.length === 0 || !hasSavedItemOffer) {
      const shopStock = buildShopStock();
      if (state.shopOffers.length === 0) {
        state.shopOffers = shopStock.offers;
      }
      if (!hasSavedItemOffer) {
        state.shopItemOffer = shopStock.itemOffer;
      }
    }
    state.shopOffers = state.shopOffers.slice(0, state.shopItemOffer ? SHOP_OFFER_COUNT - 1 : SHOP_OFFER_COUNT);
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
  if (!audioSettings.musicEnabled) {
    els.soundtrackAudio.pause();
    return;
  }

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
  updateAudioSettingsUi();
  if (audioSettings.musicEnabled) {
    playSoundtrack();
  } else {
    els.soundtrackAudio.pause();
  }

  els.volumeSlider.addEventListener("input", (event) => {
    setSoundtrackVolume(event.target.value);
    playSoundtrack();
  });

  window.addEventListener("pointerdown", playSoundtrack);
  window.addEventListener("click", playSoundtrack);
  window.addEventListener("keydown", playSoundtrack);
}

function triggerScreenShake() {
  if (!audioSettings.shakeEnabled) {
    document.body.classList.remove("screen-shake");
    return;
  }

  document.body.classList.remove("screen-shake");
  window.requestAnimationFrame(() => {
    document.body.classList.add("screen-shake");
    window.setTimeout(() => {
      document.body.classList.remove("screen-shake");
    }, SCREEN_SHAKE_MS);
  });
}

function clearEnteringCardsSoon() {
  const clearDelay = CARD_DEAL_ANIMATION_MS + (state.enteringCardIds.length * CARD_DEAL_STAGGER_MS) + 120;
  window.setTimeout(() => {
    state.enteringCardIds = [];
    render();
  }, clearDelay);
}

function playCardDealSound() {
  if (!audioSettings.effectsEnabled) {
    return;
  }

  const sound = new Audio(CARD_DEAL_SOUND_SRC);
  sound.volume = 0.55;
  sound.play().catch(() => {
    // Effekt-Sounds dürfen erst nach einer Nutzerinteraktion starten.
  });
}

function queueCardDealSound(index) {
  window.setTimeout(playCardDealSound, index * CARD_DEAL_STAGGER_MS);
}

function playButtonClickSound() {
  if (!audioSettings.effectsEnabled) {
    return;
  }

  const sound = new Audio(BUTTON_CLICK_SOUND_SRC);
  sound.volume = Math.max(1, Math.min(100, BUTTON_CLICK_VOLUME)) / 100;
  sound.play().catch(() => {
    // Klick-Sounds duerfen erst nach einer Nutzerinteraktion starten.
  });
}

function playCardSelectSound() {
  if (!audioSettings.effectsEnabled) {
    return;
  }

  const sound = new Audio(CARD_SELECT_SOUND_SRC);
  sound.volume = Math.max(1, Math.min(100, CARD_SELECT_VOLUME)) / 100;
  sound.play().catch(() => {
    // Karten-Sounds duerfen erst nach einer Nutzerinteraktion starten.
  });
}

function playBoosterOpenSound() {
  if (!audioSettings.effectsEnabled) {
    return;
  }

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
        isSpecial: false
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
          isSpecial: true
        };
      });
    });
  });
  return library;
}

function getCardDisplayName(template, tier = CARD_TIER_MIN) {
  return tier > CARD_TIER_MIN
    ? `${template.displayName} +${tier}`
    : template.displayName;
}

function getRankDisplayName(rankId) {
  const rankNames = {
    j: "Bube",
    q: "Dame",
    k: "König",
    a: "Ass"
  };

  return rankNames[rankId] || rankId.toUpperCase();
}

function getCardDetailsMarkup(template, tier = CARD_TIER_MIN) {
  const tierRow = tier > CARD_TIER_MIN
    ? `<span><b>STUFE</b><strong>${tier}</strong></span>`
    : "";

  return `
    <span><b>TYP</b><strong>${template.typeLabel}</strong></span>
    <span><b>SCHADEN</b><strong>${template.value}</strong></span>
    <span><b>KARTE</b><strong>${getRankDisplayName(template.rankId)}</strong></span>
    ${tierRow}
  `;
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

function buildShopOffers(count = SHOP_OFFER_COUNT) {
  return Array.from({ length: count }, () => {
    const boosterId = rollShopBoosterId();

    return {
      boosterId,
      cost: getBoosterCost(boosterId),
      isSold: false
    };
  });
}

function buildShopStock() {
  const itemOffer = buildShopItemOffer();

  return {
    offers: buildShopOffers(itemOffer ? SHOP_OFFER_COUNT - 1 : SHOP_OFFER_COUNT),
    itemOffer
  };
}

function buildShopItemOffer() {
  if (Math.random() > ITEM_SHOP_CHANCE) {
    return null;
  }

  return {
    itemId: "trash",
    cost: getItemCost("trash"),
    isSold: false
  };
}

function getItemCost(itemId) {
  const item = ITEM_TYPES[itemId];
  return item.baseCost;
}

function sanitizeShopItemOffer(offer) {
  if (!offer || !ITEM_TYPES[offer.itemId]) {
    return null;
  }

  return {
    itemId: offer.itemId,
    cost: Number(offer.cost) || getItemCost(offer.itemId),
    isSold: Boolean(offer.isSold)
  };
}

function normalizeInventoryItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .filter((item) => item && ITEM_TYPES[item.itemId])
    .slice(0, INVENTORY_SLOT_COUNT)
    .map((item) => ({ itemId: item.itemId }));
}

function rollShopBoosterId() {
  const specialWeight = SPECIAL_BOOSTER_CHANCE / SPECIAL_BOOSTER_SEQUENCE.length;
  const weightedBoosters = [
    { id: "normal", weight: 0.74 - SPECIAL_BOOSTER_CHANCE },
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
  return booster.baseCost;
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

function createDeckEntryId() {
  return `deck_${Math.random().toString(36).slice(2, 10)}`;
}

function createRunDeckEntry(templateId, tier = CARD_TIER_MIN) {
  return {
    deckEntryId: createDeckEntryId(),
    templateId,
    tier: clampCardTier(tier)
  };
}

function normalizeRunDeck(entries) {
  return entries
    .map((entry) => {
      const normalized = typeof entry === "string"
        ? createRunDeckEntry(entry)
        : {
            deckEntryId: entry.deckEntryId || createDeckEntryId(),
            templateId: entry.templateId,
            tier: clampCardTier(entry.tier)
          };

      return CARD_LIBRARY[normalized.templateId] ? normalized : null;
    })
    .filter(Boolean);
}

function normalizeCombatCards(cards) {
  return cards
    .map((card) => {
      if (!card || !CARD_LIBRARY[card.templateId]) {
        return null;
      }

      return {
        ...card,
        instanceId: card.instanceId || `card_${Math.random().toString(36).slice(2, 10)}`,
        deckEntryId: card.deckEntryId || null,
        tier: clampCardTier(card.tier),
        hidden: Boolean(card.hidden)
      };
    })
    .filter(Boolean);
}

function createDeckCard(deckEntry) {
  const entry = typeof deckEntry === "string"
    ? createRunDeckEntry(deckEntry)
    : deckEntry;

  return {
    instanceId: `card_${Math.random().toString(36).slice(2, 10)}`,
    deckEntryId: entry.deckEntryId || createDeckEntryId(),
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

function getCountMap(cards, keyGetter) {
  return cards.reduce((counts, card) => {
    const template = CARD_LIBRARY[card.templateId];
    const key = keyGetter(template);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function getPlayedCardComboBonus(cards) {
  const bonuses = [];
  const rankCounts = getCountMap(cards, (template) => template.rankId);
  const suitCounts = getCountMap(cards, (template) => template.suitId);
  const typeCounts = getCountMap(cards, (template) => template.typeId);

  const addBonus = (label, coins) => {
    bonuses.push({ label, coins });
  };

  Object.entries(rankCounts).forEach(([rankId, count]) => {
    const rankLabel = rankId.toUpperCase();
    if (count >= 3) {
      addBonus(`Drilling ${rankLabel}`, COMBO_TRIPLE_BONUS_COINS);
    } else if (count >= 2) {
      addBonus(`Paar ${rankLabel}`, COMBO_PAIR_BONUS_COINS);
    }
  });

  // Combo-Arten bleiben additiv: dieselben Karten duerfen z.B. Drilling und Flush sein.
  Object.entries(suitCounts).forEach(([suitId, count]) => {
    if (count >= 3) {
      addBonus(`${SUITS[suitId]} Flush`, COMBO_FLUSH_BONUS_COINS);
    }
  });

  Object.entries(typeCounts).forEach(([typeId, count]) => {
    if (typeId === "normal") {
      return;
    }

    if (count >= 3 && CARD_TYPES[typeId]) {
      addBonus(`${CARD_TYPES[typeId].label} Thema`, COMBO_THEME_TRIPLE_BONUS_COINS);
    }
  });

  const coins = bonuses.reduce((sum, bonus) => sum + bonus.coins, 0);
  return { coins, bonuses };
}

function getComboBonusMessage(comboBonus) {
  if (!comboBonus || comboBonus.coins <= 0) {
    return "";
  }

  return ` Combo: ${comboBonus.bonuses.map((bonus) => bonus.label).join(" + ")}. +${comboBonus.coins} Münzen.`;
}

function getThemeEffectTierBoost(cards) {
  return cards.reduce((sum, card) => sum + Math.max(0, clampCardTier(card.tier) - CARD_TIER_MIN), 0);
}

function getPlayedThemeEffect(cards) {
  const typeCounts = getCountMap(cards, (template) => template.typeId);
  const matchingType = Object.entries(typeCounts)
    .find(([typeId, count]) => typeId !== "normal" && count >= 3 && CARD_TYPES[typeId]);

  if (!matchingType) {
    return null;
  }

  const [typeId] = matchingType;
  const themeCards = cards.filter((card) => CARD_LIBRARY[card.templateId].typeId === typeId);
  const tierBoost = getThemeEffectTierBoost(themeCards) * THEME_EFFECT_TIER_STEP;
  const effect = {
    typeId,
    label: CARD_TYPES[typeId].label,
    tierBoost,
    damageBonus: 0,
    selfDamage: 0,
    heal: 0,
    dealerDamageReduction: 0,
    coins: 0,
    drawCards: 0,
    discardRandomCards: 0,
    drawnCards: 0,
    discardedCards: 0
  };

  THEME_EFFECT_CONFIG[typeId]?.apply(effect, tierBoost);

  return effect;
}

function drawExtraThemeCards(count) {
  let drawnCards = 0;
  while (drawnCards < count) {
    const card = drawCard();
    if (!card) {
      break;
    }

    state.playerCards.push(card);
    const enteringIndex = state.enteringCardIds.length;
    state.enteringCardIds.push(card.instanceId);
    queueCardDealSound(enteringIndex);
    drawnCards += 1;
  }
  return drawnCards;
}

function discardRandomThemeCards(count) {
  let discardedCards = 0;
  while (discardedCards < count && state.playerCards.length > 0) {
    const cardIndex = Math.floor(Math.random() * state.playerCards.length);
    const [discardedCard] = state.playerCards.splice(cardIndex, 1);
    if (!discardedCard) {
      break;
    }

    state.selectedCardIds = state.selectedCardIds.filter((id) => id !== discardedCard.instanceId);
    state.discardPile.push({ ...discardedCard, discardReason: "Verflucht" });
    discardedCards += 1;
  }
  return discardedCards;
}

function applyThemeEffect(themeEffect) {
  if (!themeEffect) {
    return null;
  }

  if (themeEffect.selfDamage > 0) {
    state.player.hp = Math.max(0, state.player.hp - themeEffect.selfDamage);
  }
  if (themeEffect.heal > 0) {
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + themeEffect.heal);
  }
  if (themeEffect.coins > 0) {
    state.coins += themeEffect.coins;
  }
  if (themeEffect.discardRandomCards > 0) {
    themeEffect.discardedCards = discardRandomThemeCards(themeEffect.discardRandomCards);
  }

  return themeEffect;
}

function getThemeEffectMessage(themeEffect) {
  if (!themeEffect) {
    return "";
  }

  const parts = [];
  if (themeEffect.damageBonus > 0) {
    parts.push(`+${themeEffect.damageBonus} Schaden`);
  }
  if (themeEffect.selfDamage > 0) {
    parts.push(`-${themeEffect.selfDamage} HP`);
  }
  if (themeEffect.heal > 0) {
    parts.push(`+${themeEffect.heal} HP`);
  }
  if (themeEffect.dealerDamageReduction > 0) {
    parts.push(`Dealer -${themeEffect.dealerDamageReduction} Schaden`);
  }
  if (themeEffect.coins > 0) {
    parts.push(`+${themeEffect.coins} Münzen`);
  }
  if (themeEffect.drawCards > 0) {
    parts.push(`${themeEffect.drawnCards}/${themeEffect.drawCards} Karte(n) gezogen`);
  }
  if (themeEffect.discardRandomCards > 0) {
    parts.push(`${themeEffect.discardedCards} Karte(n) verflucht abgeworfen`);
  }

  return parts.length > 0
    ? ` ${themeEffect.label}: ${parts.join(", ")}.`
    : "";
}

function drawCard() {
  return state.drawPile.shift() || null;
}

function drawToPlayer() {
  const card = drawCard();
  if (card) {
    state.playerCards.push(card);
    const enteringIndex = state.enteringCardIds.length;
    state.enteringCardIds.push(card.instanceId);
    queueCardDealSound(enteringIndex);
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

function getRankSortIndex(rankId) {
  const index = RANKS.findIndex(([id]) => id === rankId);
  return index >= 0 ? index : RANKS.length;
}

function getSuitSortIndex(suitId) {
  return Object.keys(SUITS).indexOf(suitId);
}

function getTypeSortIndex(typeId) {
  const index = FIELD_THEME_SEQUENCE.indexOf(typeId);
  return index >= 0 ? index : FIELD_THEME_SEQUENCE.length;
}

function getCardSortValues(card, mode) {
  const template = CARD_LIBRARY[card.templateId];

  if (mode === "suit") {
    return [
      getSuitSortIndex(template.suitId),
      getRankSortIndex(template.rankId),
      getTypeSortIndex(template.typeId),
      card.tier
    ];
  }

  if (mode === "type") {
    return [
      getTypeSortIndex(template.typeId),
      getSuitSortIndex(template.suitId),
      getRankSortIndex(template.rankId),
      card.tier
    ];
  }

  if (mode === "tier") {
    return [
      card.tier,
      getTypeSortIndex(template.typeId),
      getSuitSortIndex(template.suitId),
      getRankSortIndex(template.rankId)
    ];
  }

  return [
    getRankSortIndex(template.rankId),
    getSuitSortIndex(template.suitId),
    getTypeSortIndex(template.typeId),
    card.tier
  ];
}

function compareCardsByMode(left, right, mode) {
  const leftValues = getCardSortValues(left.card, mode);
  const rightValues = getCardSortValues(right.card, mode);
  const valueDifference = leftValues
    .map((value, index) => value - rightValues[index])
    .find((value) => value !== 0);

  return valueDifference || left.index - right.index;
}

function getCardsSortedByMode(cards, mode) {
  return cards
    .map((card, index) => ({ card, index }))
    .sort((left, right) => compareCardsByMode(left, right, mode))
    .map(({ card }) => card);
}

function getPlayerCardRects() {
  return Array.from(els.playerCards.querySelectorAll(".playing-card[data-card-id]"))
    .reduce((rects, cardElement) => {
      rects[cardElement.dataset.cardId] = cardElement.getBoundingClientRect();
      return rects;
    }, {});
}

function animatePlayerCardSort(previousRects) {
  if (!previousRects || !Element.prototype.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  Array.from(els.playerCards.querySelectorAll(".playing-card[data-card-id]")).forEach((cardElement) => {
    const previousRect = previousRects[cardElement.dataset.cardId];
    if (!previousRect) {
      return;
    }

    const currentRect = cardElement.getBoundingClientRect();
    const deltaX = previousRect.left - currentRect.left;
    const deltaY = previousRect.top - currentRect.top;
    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
      return;
    }

    const finalTransform = getComputedStyle(cardElement).transform;
    const endTransform = finalTransform === "none" ? "translate3d(0, 0, 0)" : finalTransform;
    const startTransform = `translate3d(${deltaX}px, ${deltaY}px, 0) ${endTransform}`;
    cardElement.classList.add("is-sorting");
    const animation = cardElement.animate(
      [
        { transform: startTransform },
        { transform: endTransform }
      ],
      {
        duration: CARD_SORT_ANIMATION_MS,
        easing: "cubic-bezier(0.16, 0.84, 0.18, 1)"
      }
    );
    animation.addEventListener("finish", () => cardElement.classList.remove("is-sorting"));
    animation.addEventListener("cancel", () => cardElement.classList.remove("is-sorting"));
  });
}

function getDeckItemRects() {
  return Array.from(els.deckList.querySelectorAll(".deck-list-item[data-deck-entry-id]"))
    .reduce((rects, itemElement) => {
      rects[itemElement.dataset.deckEntryId] = itemElement.getBoundingClientRect();
      return rects;
    }, {});
}

function animateDeckPanelSort(previousRects) {
  if (!previousRects || !Element.prototype.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  Array.from(els.deckList.querySelectorAll(".deck-list-item[data-deck-entry-id]")).forEach((itemElement) => {
    const previousRect = previousRects[itemElement.dataset.deckEntryId];
    if (!previousRect) {
      return;
    }

    const currentRect = itemElement.getBoundingClientRect();
    const deltaX = previousRect.left - currentRect.left;
    const deltaY = previousRect.top - currentRect.top;
    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
      return;
    }

    itemElement.classList.add("is-sorting");
    const animation = itemElement.animate(
      [
        { transform: `translate3d(${deltaX}px, ${deltaY}px, 0)` },
        { transform: "translate3d(0, 0, 0)" }
      ],
      {
        duration: CARD_SORT_ANIMATION_MS,
        easing: "cubic-bezier(0.16, 0.84, 0.18, 1)"
      }
    );
    animation.addEventListener("finish", () => itemElement.classList.remove("is-sorting"));
    animation.addEventListener("cancel", () => itemElement.classList.remove("is-sorting"));
  });
}

function sortPlayerHand(mode) {
  if (state.phase !== "combat" || state.isActionLocked) {
    return;
  }

  const previousRects = getPlayerCardRects();
  state.playerCards = getCardsSortedByMode(state.playerCards, mode);
  state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
  state.hoveredTier = state.playerCards[0]?.tier || CARD_TIER_MIN;
  render();
  animatePlayerCardSort(previousRects);
}

function createDealerCard() {
  const templateIds = getNormalTemplateIds();
  return createDeckCard(createRunDeckEntry(templateIds[Math.floor(Math.random() * templateIds.length)]));
}

function drawDealerHand() {
  state.dealerCards = Array.from({ length: DEALER_HAND_SIZE }, createDealerCard);
  state.dealerCards.forEach((card) => {
    const enteringIndex = state.enteringCardIds.length;
    state.enteringCardIds.push(card.instanceId);
    queueCardDealSound(enteringIndex);
  });
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
  state.shopItemOffer = null;
  state.boosterChoice = null;
  state.isDeckOpen = false;
  state.isCombosOpen = false;
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];
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
  state.shopItemOffer = null;
  state.inventoryItems = [];
  state.boosterChoice = null;
  state.isDeckOpen = false;
  state.isCombosOpen = false;
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];
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
  const comboBonus = getPlayedCardComboBonus(selectedCards);
  const themeEffect = getPlayedThemeEffect(selectedCards);
  const totalDamage = damage + (themeEffect?.damageBonus || 0);
  const damageTickCount = selectedCards.length + ((themeEffect?.damageBonus || 0) > 0 ? 1 : 0);
  const selectedCardIds = selectedCards.map((card) => card.instanceId);
  const actionToken = state.actionToken + 1;
  state.actionToken = actionToken;
  state.isActionLocked = true;
  state.animatingCardIds = selectedCardIds;
  state.cardAnimationType = "play";
  playCardDealSound();
  startDamageCountAnimation(selectedCards, actionToken, themeEffect?.damageBonus || 0);

  window.setTimeout(() => {
    if (state.actionToken !== actionToken) {
      return;
    }

    state.playerCards = state.playerCards.filter((card) => !selectedCardIds.includes(card.instanceId));
    state.discardPile.push(...selectedCards.map((card) => ({ ...card, discardReason: "Gespielt" })));
    state.selectedCardIds = [];
    state.animatingCardIds = [];
    state.cardAnimationType = null;
    state.damageAnimation = null;
    state.isActionLocked = false;
    state.playsThisRound += 1;
    if (comboBonus.coins > 0) {
      state.coins += comboBonus.coins;
    }
    const appliedThemeEffect = applyThemeEffect(themeEffect);
    damageDealer(totalDamage, comboBonus, appliedThemeEffect);
  }, getDamageCountAnimationMs(damageTickCount));
}

function startDamageCountAnimation(cards, actionToken, bonusDamage = 0) {
  const values = cards.map((card) => CARD_LIBRARY[card.templateId].value);
  if (bonusDamage > 0) {
    values.push(bonusDamage);
  }

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
    state.discardPile.push(...selectedCards.map((card) => ({ ...card, discardReason: "Abgeworfen" })));
    state.selectedCardIds = [];

    const maxDrawCount = Math.min(MAX_DISCARD_DRAW_COUNT, MAX_HAND_SIZE - state.playerCards.length);
    let drawnCards = 0;
    while (drawnCards < maxDrawCount) {
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

    state.message = drawnCards === maxDrawCount
      ? `${selectedCards.length} Karte(n) abgeworfen und ${drawnCards} nachgezogen. Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`
      : `${selectedCards.length} Karte(n) abgeworfen. Nur ${drawnCards} Karte(n) im Deck gefunden. Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.`;
    render();
    clearEnteringCardsSoon();
  }, CARD_EXIT_ANIMATION_MS);
}

function damageDealer(amount, comboBonus = null, themeEffect = null) {
  const comboMessage = getComboBonusMessage(comboBonus);
  let effectMessage = `${comboMessage}${getThemeEffectMessage(themeEffect)}`;
  state.dealer.hp = Math.max(0, state.dealer.hp - amount);

  if (state.dealer.hp <= 0) {
    state.phase = "victoryCardEffect";
    state.message = `Dealer besiegt! +${state.rewardCoins} Münzen.${effectMessage}`;
    state.dealerCards.forEach((card) => {
      card.hidden = false;
    });
    animateCardsBeforeResult("dealer-defeat", state.dealerCards, () => {
      winCombat(`Dealer besiegt! +${state.rewardCoins} Münzen.${effectMessage}`);
    });
    return;
  }

  if (state.player.hp <= 0) {
    state.phase = "defeatCardEffect";
    state.message = `${amount} Schaden verursacht, aber der Effekt hat dich besiegt.${effectMessage}`;
    state.selectedCardIds = [];
    animateCardsBeforeResult("player-defeat", state.playerCards, () => {
      startResultEffect("defeat");
      render();
    });
    return;
  }

  const dealerBaseDamage = getHandPower(state.dealerCards);
  const dealerDamage = Math.max(0, dealerBaseDamage - (themeEffect?.dealerDamageReduction || 0));
  damagePlayer(dealerDamage, comboBonus, themeEffect);

  if (state.phase !== "combat") {
    return;
  }

  drawDealerHand();
  drawPlayerHand();
  if (themeEffect?.drawCards > 0) {
    themeEffect.drawnCards = drawExtraThemeCards(themeEffect.drawCards);
    effectMessage = `${comboMessage}${getThemeEffectMessage(themeEffect)}`;
  }
  clearEnteringCardsSoon();
  state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
  if (state.playerCards.length === 0) {
    state.message = `${amount} Schaden verursacht, aber du hast keine Karten mehr. Kampf verloren.${effectMessage}`;
    startResultEffect("defeat");
    render();
    return;
  }

  if (state.playsThisRound >= state.maxPlaysPerRound) {
    loseCombat(`${amount} Schaden verursacht, aber du hast alle Spielzüge verbraucht. Kampf verloren.${effectMessage}`);
    render();
    return;
  }

  state.message = `${amount} Schaden verursacht. Dealer kontert mit ${dealerDamage} Schaden. Spielen ${state.playsThisRound}/${state.maxPlaysPerRound}, Abwerfen ${state.discardsThisRound}/${state.maxDiscardsPerRound}.${effectMessage}`;
  render();
}

function damagePlayer(amount, comboBonus = null, themeEffect = null) {
  const comboMessage = getComboBonusMessage(comboBonus);
  const themeMessage = getThemeEffectMessage(themeEffect);
  state.player.hp = Math.max(0, state.player.hp - amount);

  if (state.player.hp <= 0) {
    state.phase = "defeatCardEffect";
    state.message = `Du wurdest besiegt. Dealer hat ${amount} Schaden gemacht.${comboMessage}${themeMessage}`;
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

    const shopStock = buildShopStock();
    state.phase = "shop";
    state.shopOffers = shopStock.offers;
    state.shopItemOffer = shopStock.itemOffer;
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

  const shopStock = buildShopStock();
  state.phase = "shop";
  state.shopOffers = shopStock.offers;
  state.shopItemOffer = shopStock.itemOffer;
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

function skipBoosterChoice() {
  if (state.phase !== "shop" || !state.boosterChoice) {
    return;
  }

  const booster = BOOSTER_TYPES[state.boosterChoice.boosterId];
  state.boosterChoice = null;
  state.message = `${booster.label} übersprungen.`;
  triggerScreenShake();
  render();
}

function hasFreeInventorySlot() {
  return state.inventoryItems.length < INVENTORY_SLOT_COUNT;
}

function buyShopItem() {
  if (state.phase !== "shop" || state.boosterChoice) {
    return;
  }

  const offer = state.shopItemOffer;
  if (!offer || offer.isSold) {
    return;
  }

  if (!hasFreeInventorySlot()) {
    state.message = "Inventar voll. Verbrauche erst ein Item.";
    render();
    return;
  }

  if (state.coins < offer.cost) {
    state.message = "Nicht genug Münzen.";
    render();
    return;
  }

  const item = ITEM_TYPES[offer.itemId];
  state.coins -= offer.cost;
  state.inventoryItems.push({ itemId: offer.itemId });
  offer.isSold = true;
  state.message = `${item.label} gekauft.`;
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
  const shopStock = buildShopStock();
  state.shopOffers = shopStock.offers;
  state.shopItemOffer = shopStock.itemOffer;
  state.message = `Shop aktualisiert. -${SHOP_REROLL_COST}.`;
  triggerScreenShake();
  render();
}

function addDebugCoins() {
  state.coins += DEBUG_COINS;
  state.message = `Debug: +${DEBUG_COINS}.`;
  render();
}

function getDeckCardZone(deckEntryId) {
  const matchingPlayerCard = state.playerCards.find((card) => card.deckEntryId === deckEntryId);
  if (matchingPlayerCard) {
    if (state.animatingCardIds.includes(matchingPlayerCard.instanceId)) {
      return state.cardAnimationType === "discard" ? "Abgeworfen" : "Gespielt";
    }
    return "Hand";
  }

  const matchingDiscardCard = state.discardPile.find((card) => card.deckEntryId === deckEntryId);
  if (matchingDiscardCard) {
    return matchingDiscardCard.discardReason || "Gespielt/Abgeworfen";
  }

  if (state.drawPile.some((card) => card.deckEntryId === deckEntryId)) {
    return "Deck";
  }

  return "Nicht im Stapel";
}

function getCurrentDeckCards() {
  return state.runDeck.map((card) => ({
    ...card,
    zone: getDeckCardZone(card.deckEntryId)
  }));
}

function sortDeckPanel(mode) {
  const previousRects = getDeckItemRects();
  state.deckSortMode = mode;
  renderDeckPanel();
  animateDeckPanelSort(previousRects);
}

function openDeckPanel() {
  if (state.isDeckOpen) {
    closeDeckPanel();
    return;
  }

  closeOverlayWindows();
  state.isDeckOpen = true;
  const firstCard = getCardsSortedByMode(getCurrentDeckCards(), state.deckSortMode)[0];
  state.hoveredTemplateId = firstCard?.templateId || null;
  state.hoveredTier = firstCard?.tier || CARD_TIER_MIN;
  renderPreview();
  render();
}

function closeDeckPanel() {
  state.isDeckOpen = false;
  renderDeckPanel();
}

function openCombosPanel() {
  if (state.isCombosOpen) {
    closeCombosPanel();
    return;
  }

  closeOverlayWindows();
  state.isCombosOpen = true;
  render();
}

function closeCombosPanel() {
  state.isCombosOpen = false;
  renderCombosPanel();
}

function openTrashItem(slotIndex) {
  const inventoryItem = state.inventoryItems[slotIndex];
  if (!inventoryItem || inventoryItem.itemId !== "trash" || state.isActionLocked) {
    return;
  }

  if (state.runDeck.length < TRASH_ITEM_MIN_REMOVE_COUNT) {
    state.message = "Dein Deck hat keine Karten mehr.";
    render();
    return;
  }

  closeOverlayWindows();
  state.activeTrashItemSlotIndex = slotIndex;
  state.trashSelectedDeckEntryIds = [];
  state.hoveredTemplateId = state.runDeck[0]?.templateId || null;
  state.hoveredTier = state.runDeck[0]?.tier || CARD_TIER_MIN;
  render();
}

function closeTrashItemPanel() {
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];
  render();
}

function toggleTrashDeckSelection(deckEntryId) {
  if (state.activeTrashItemSlotIndex === null) {
    return;
  }

  if (state.trashSelectedDeckEntryIds.includes(deckEntryId)) {
    state.trashSelectedDeckEntryIds = state.trashSelectedDeckEntryIds.filter((id) => id !== deckEntryId);
  } else {
    if (state.trashSelectedDeckEntryIds.length >= TRASH_ITEM_REMOVE_COUNT) {
      state.message = `Du kannst nur ${TRASH_ITEM_REMOVE_COUNT} Karten entfernen.`;
      render();
      return;
    }
    state.trashSelectedDeckEntryIds.push(deckEntryId);
  }

  playCardSelectSound();
  renderTrashItemPanel();
}

function previewTrashDeckCard(card) {
  state.hoveredTemplateId = card.templateId;
  state.hoveredTier = card.tier;
  renderPreview();
}

function confirmTrashItemUse() {
  const slotIndex = state.activeTrashItemSlotIndex;
  const selectedIds = state.trashSelectedDeckEntryIds;

  if (slotIndex === null || !state.inventoryItems[slotIndex]) {
    closeTrashItemPanel();
    return;
  }

  if (selectedIds.length < TRASH_ITEM_MIN_REMOVE_COUNT || selectedIds.length > TRASH_ITEM_REMOVE_COUNT) {
    state.message = `Wähle 1 bis ${TRASH_ITEM_REMOVE_COUNT} Karten.`;
    render();
    return;
  }

  const selectedIdSet = new Set(selectedIds);
  state.runDeck = state.runDeck.filter((entry) => !selectedIdSet.has(entry.deckEntryId));
  state.drawPile = state.drawPile.filter((card) => !selectedIdSet.has(card.deckEntryId));
  state.discardPile = state.discardPile.filter((card) => !selectedIdSet.has(card.deckEntryId));
  state.playerCards = state.playerCards.filter((card) => !selectedIdSet.has(card.deckEntryId));
  state.selectedCardIds = state.selectedCardIds.filter((id) => state.playerCards.some((card) => card.instanceId === id));
  state.inventoryItems.splice(slotIndex, 1);
  state.activeTrashItemSlotIndex = null;
  state.trashSelectedDeckEntryIds = [];
  state.hoveredTemplateId = state.playerCards[0]?.templateId || state.runDeck[0]?.templateId || null;
  state.hoveredTier = state.playerCards[0]?.tier || state.runDeck[0]?.tier || CARD_TIER_MIN;
  state.message = `${selectedIds.length} Karte(n) aus deinem Deck entfernt.`;

  if (state.runDeck.length === 0) {
    loseCombat("Du hast keine Karten mehr im Deck. Kampf verloren.");
    render();
    return;
  }

  triggerScreenShake();
  render();
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
  if (options.card?.instanceId) {
    article.dataset.cardId = options.card.instanceId;
  }

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
    article.style.setProperty("--deal-delay", `${(options.enteringIndex || 0) * CARD_DEAL_STAGGER_MS}ms`);
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
    const enteringIndex = state.enteringCardIds.indexOf(card.instanceId);
    node.appendChild(createCardElement(template, {
      hidden: hideHidden && card.hidden,
      card,
      selectable: options.selectable,
      selected: state.selectedCardIds.includes(card.instanceId),
      tier: card.tier,
      isEntering: enteringIndex >= 0,
      enteringIndex,
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
  els.previewText.innerHTML = getCardDetailsMarkup(template, tier);
}

function renderDeckPanel() {
  const cards = getCardsSortedByMode(getCurrentDeckCards(), state.deckSortMode);

  els.deckPanel.classList.toggle("is-hidden", !state.isDeckOpen);
  els.deckSummary.textContent = `${state.runDeck.length} Gesamt · ${state.drawPile.length} Deck · ${state.playerCards.length} Hand · ${state.discardPile.length} Gespielt/Abgeworfen`;
  els.deckList.innerHTML = "";

  cards.forEach((card) => {
    const template = CARD_LIBRARY[card.templateId];
    const item = document.createElement("article");
    item.className = `deck-list-item${card.zone !== "Deck" ? " is-muted" : ""}`;
    item.dataset.deckEntryId = card.deckEntryId;
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.innerHTML = `
      <div class="deck-list-card"></div>
      <div class="deck-list-meta">
        <strong>${getCardDisplayName(template, card.tier)}</strong>
        <em>${card.zone}</em>
        <span>
          <b>${template.typeLabel}</b>
          ${card.tier > CARD_TIER_MIN ? `<b>STUFE ${card.tier}</b>` : ""}
          <b>${template.value}</b>
        </span>
      </div>
    `;
    item.querySelector(".deck-list-card").appendChild(createCardElement(template, { interactive: false, tier: card.tier }));
    const updateMainPreview = () => {
      state.hoveredTemplateId = template.id;
      state.hoveredTier = card.tier;
      renderPreview();
    };
    item.addEventListener("pointerenter", updateMainPreview);
    item.addEventListener("focus", updateMainPreview);
    item.addEventListener("click", updateMainPreview);
    els.deckList.appendChild(item);
  });
}

function getComboRuleDefinitions() {
  return [
    {
      group: "Rang",
      title: "Paar",
      condition: "2x gleicher Rang",
      reward: `+${COMBO_PAIR_BONUS_COINS}`,
      rewardLabel: "Coins",
      example: "5 + 5"
    },
    {
      group: "Rang",
      title: "Drilling",
      condition: "3x gleicher Rang",
      reward: `+${COMBO_TRIPLE_BONUS_COINS}`,
      rewardLabel: "Coins",
      example: "K + K + K"
    },
    {
      group: "Farbe",
      title: "Flush",
      condition: "3x gleiche Farbe",
      reward: `+${COMBO_FLUSH_BONUS_COINS}`,
      rewardLabel: "Coins",
      example: "3x Herz"
    },
    {
      group: "Typ",
      title: "Thema",
      condition: "3x gleicher Spezialtyp",
      reward: `+${COMBO_THEME_TRIPLE_BONUS_COINS}`,
      rewardLabel: "Coins + Effekt",
      example: `Stufenbonus: Summe aller Stufen über ${CARD_TIER_MIN}`
    }
  ];
}

function createComboStatMarkup(stats) {
  return stats
    .map((stat) => `
      <span class="combo-stat">
        <b>${stat.label}</b>
        <strong>${stat.value}</strong>
        <em>${stat.scaling}</em>
      </span>
    `)
    .join("");
}

function renderComboRulesList() {
  const comboRulesList = els.combosPanel.querySelector(".combos-grid");
  comboRulesList.innerHTML = getComboRuleDefinitions()
    .map((rule) => `
      <article class="combo-info-card ${rule.title === "Thema" ? "combo-theme" : "combo-standard"}">
        <div class="combo-info-head">
          <span>${rule.group}</span>
          <strong>${rule.title}</strong>
        </div>
        <div class="combo-value-row">
          <span>${rule.condition}</span>
          <b>${rule.reward} ${rule.rewardLabel}</b>
        </div>
        <em>${rule.example}</em>
      </article>
    `)
    .join("");
}

function renderThemeCombosList() {
  const themeCombosList = els.combosPanel.querySelector(".theme-combo-list");
  themeCombosList.innerHTML = SPECIAL_CARD_TYPE_SEQUENCE
    .filter((typeId) => THEME_EFFECT_CONFIG[typeId])
    .map((typeId) => {
      const config = THEME_EFFECT_CONFIG[typeId];
      const type = CARD_TYPES[typeId];
      return `
        <article class="theme-combo-card card-${typeId}">
          <div class="theme-combo-head">
            <span>${type.label}</span>
            <b>3x ${type.label}</b>
          </div>
          <p>${config.summary}</p>
          <div class="combo-stat-grid">${createComboStatMarkup(config.stats)}</div>
        </article>
      `;
    })
    .join("");
}

function renderCombosPanel() {
  els.combosPanel.classList.toggle("is-hidden", !state.isCombosOpen);
  if (!state.isCombosOpen) {
    return;
  }

  renderComboRulesList();
  renderThemeCombosList();
}

function renderShopOffers() {
  els.shopOffers.innerHTML = "";

  const visibleBoosterOffers = state.shopItemOffer
    ? state.shopOffers.slice(0, SHOP_OFFER_COUNT - 1)
    : state.shopOffers.slice(0, SHOP_OFFER_COUNT);

  visibleBoosterOffers.forEach((offer, index) => {
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

  const offer = state.shopItemOffer;
  if (!offer) {
    return;
  }

  const itemType = ITEM_TYPES[offer.itemId];
  const shopItem = document.createElement("article");
  shopItem.className = "shop-card offer-card item-offer-card";
  const inventoryFull = !hasFreeInventorySlot();
  const buttonLabel = offer.isSold
    ? "Gekauft"
    : inventoryFull
      ? "Inventar voll"
      : createCoinCostMarkup(offer.cost);

  shopItem.innerHTML = `
    <div class="shop-card-preview item-card-preview">
      <img class="shop-item-image" src="${itemType.sprite}" alt="${itemType.label}">
    </div>
    <div class="shop-card-copy">
      <strong>${itemType.label}</strong>
      <span>${itemType.description}</span>
    </div>
    <button class="control-button ${offer.isSold || inventoryFull ? "ghost" : "alt"}" type="button">
      ${buttonLabel}
    </button>
  `;

  const buyButton = shopItem.querySelector("button");
  buyButton.disabled = Boolean(state.boosterChoice) || offer.isSold || inventoryFull || state.coins < offer.cost;
  buyButton.addEventListener("click", buyShopItem);
  els.shopOffers.appendChild(shopItem);
}

function renderInventorySlots() {
  els.inventorySlots.innerHTML = "";

  for (let slotIndex = 0; slotIndex < INVENTORY_SLOT_COUNT; slotIndex += 1) {
    const inventoryItem = state.inventoryItems[slotIndex];
    const itemType = inventoryItem ? ITEM_TYPES[inventoryItem.itemId] : null;
    const slot = document.createElement(itemType ? "button" : "div");
    slot.className = `inventory-slot${itemType ? " has-item" : ""}`;
    slot.setAttribute("aria-label", itemType ? `${itemType.label} benutzen` : "Leerer Inventarplatz");

    if (!itemType) {
      slot.setAttribute("aria-hidden", "true");
    } else {
      slot.type = "button";
      slot.innerHTML = `<img src="${itemType.sprite}" alt="${itemType.label}" draggable="false">`;
      slot.addEventListener("click", () => openTrashItem(slotIndex));
    }

    els.inventorySlots.appendChild(slot);
  }
}

function renderTrashItemPanel() {
  const isOpen = state.activeTrashItemSlotIndex !== null;
  els.trashItemPanel.classList.toggle("is-hidden", !isOpen);
  els.trashItemDeckList.innerHTML = "";

  if (!isOpen) {
    return;
  }

  els.trashItemSummary.textContent = `${state.trashSelectedDeckEntryIds.length}/${TRASH_ITEM_REMOVE_COUNT} Karten ausgewählt`;
  els.confirmTrashItemButton.disabled = state.trashSelectedDeckEntryIds.length < TRASH_ITEM_MIN_REMOVE_COUNT;

  state.runDeck.forEach((card) => {
    const template = CARD_LIBRARY[card.templateId];
    const item = document.createElement("article");
    const isSelected = state.trashSelectedDeckEntryIds.includes(card.deckEntryId);
    item.className = `deck-list-item${isSelected ? " is-selected" : ""}`;
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
    item.addEventListener("pointerenter", () => previewTrashDeckCard(card));
    item.addEventListener("focus", () => previewTrashDeckCard(card));
    item.addEventListener("click", () => {
      previewTrashDeckCard(card);
      toggleTrashDeckSelection(card.deckEntryId);
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        previewTrashDeckCard(card);
        toggleTrashDeckSelection(card.deckEntryId);
      }
    });
    els.trashItemDeckList.appendChild(item);
  });
}

function renderBoosterChoices() {
  const choice = state.boosterChoice;
  els.boosterChoicePanel.classList.toggle("is-hidden", !choice);
  els.boosterChoices.innerHTML = "";
  els.skipBoosterChoiceButton.disabled = !choice;

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

function renderComboSelectionOverlay(comboBonus) {
  if (!comboBonus || comboBonus.coins <= 0 || state.phase !== "combat" || state.isActionLocked) {
    els.comboSelectionOverlay.classList.remove("is-active");
    els.comboSelectionOverlay.innerHTML = "";
    return;
  }

  const bonusMarkup = comboBonus.bonuses
    .map((bonus, index) => `${index > 0 ? '<b aria-hidden="true">+</b>' : ""}<span>${bonus.label}</span>`)
    .join("");

  els.comboSelectionOverlay.classList.add("is-active");
  els.comboSelectionOverlay.innerHTML = `
    <div class="combo-selection-label">Combo</div>
    <div class="combo-selection-bonuses">${bonusMarkup}</div>
    <div class="combo-selection-total">
      <span>+${comboBonus.coins}</span>
      <img src="${COIN_ICON_SRC}" alt="Coins">
    </div>
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
  const selectedComboBonus = getPlayedCardComboBonus(selectedCards);
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
  if (els.messageBanner) {
    els.messageBanner.textContent = state.message;
  }

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
  const isHandSortDisabled = state.phase !== "combat" || state.isActionLocked || state.playerCards.length < 2;
  els.sortHandRankButton.disabled = isHandSortDisabled;
  els.sortHandSuitButton.disabled = isHandSortDisabled;
  els.sortHandTypeButton.disabled = isHandSortDisabled;
  els.sortHandTierButton.disabled = isHandSortDisabled;
  const isDeckSortDisabled = state.runDeck.length < 2;
  els.sortDeckRankButton.disabled = isDeckSortDisabled;
  els.sortDeckSuitButton.disabled = isDeckSortDisabled;
  els.sortDeckTypeButton.disabled = isDeckSortDisabled;
  els.sortDeckTierButton.disabled = isDeckSortDisabled;
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
  renderInventorySlots();
  renderCards(els.playerCards, state.playerCards, false, { selectable: true });
  renderCards(els.dealerCards, state.dealerCards, true);
  renderDamageCountOverlay();
  renderComboSelectionOverlay(selectedComboBonus);
  renderPreview();
  renderDeckPanel();
  renderCombosPanel();
  renderTrashItemPanel();
}

els.playSelectedButton.addEventListener("click", playSelectedCards);
els.discardSelectedButton.addEventListener("click", discardSelectedCards);
els.sortHandRankButton.addEventListener("click", () => sortPlayerHand("rank"));
els.sortHandSuitButton.addEventListener("click", () => sortPlayerHand("suit"));
els.sortHandTypeButton.addEventListener("click", () => sortPlayerHand("type"));
els.sortHandTierButton.addEventListener("click", () => sortPlayerHand("tier"));
els.sortDeckRankButton.addEventListener("click", () => sortDeckPanel("rank"));
els.sortDeckSuitButton.addEventListener("click", () => sortDeckPanel("suit"));
els.sortDeckTypeButton.addEventListener("click", () => sortDeckPanel("type"));
els.sortDeckTierButton.addEventListener("click", () => sortDeckPanel("tier"));
els.debugWinButton.addEventListener("click", () => winCombat());
els.debugCoinsButton.addEventListener("click", addDebugCoins);
els.nextFightButton.addEventListener("click", startRound);
els.shopNextFightButton.addEventListener("click", startRound);
els.shopRerollButton.addEventListener("click", rerollShopOffers);
els.continueToShopButton.addEventListener("click", continueToShop);
els.skipBoosterChoiceButton.addEventListener("click", skipBoosterChoice);
els.restartRunButton.addEventListener("click", resetGame);
els.defeatMainMenuButton.addEventListener("click", returnToMainMenu);
els.ingameMainMenuButton.addEventListener("click", returnToMainMenu);
els.ingameSettingsButton.addEventListener("click", openSettingsMenu);
els.resetButton.addEventListener("click", resetGame);
els.deckButton.addEventListener("click", openDeckPanel);
els.closeDeckButton.addEventListener("click", closeDeckPanel);
els.combosButton.addEventListener("click", openCombosPanel);
els.closeCombosButton.addEventListener("click", closeCombosPanel);
els.confirmTrashItemButton.addEventListener("click", confirmTrashItemUse);
els.cancelTrashItemButton.addEventListener("click", closeTrashItemPanel);
els.startGameButton.addEventListener("click", startGameFromMenu);
els.settingsMenuButton.addEventListener("click", openSettingsMenu);
els.profileMenuButton.addEventListener("click", openProfileMenu);
els.closeSettingsButton.addEventListener("click", () => els.settingsMenuPanel.classList.add("is-hidden"));
els.musicToggle.addEventListener("change", (event) => setMusicEnabled(event.target.checked));
els.effectsToggle.addEventListener("change", (event) => setEffectsEnabled(event.target.checked));
els.shakeToggle.addEventListener("change", (event) => setShakeEnabled(event.target.checked));
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

loadAudioSettings();
initSoundtrack();
updateProfileUi();
showMainMenu();
