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

const DEALER_BASE_HP = 60;
const PLAYER_BASE_HP = 80;
const WIN_REWARD_COINS = 18;
const DEBUG_COINS = 25;
const STARTING_DECK_SIZE = 8;
const MAX_HAND_SIZE = 7;
const MAX_CARDS_PER_TURN = 3;
const DEALER_HAND_SIZE = 2;
const SHOP_OFFER_COUNT = 3;
const SHOP_BASE_CARD_COST = 14;
const STARTING_VOLUME = 20;
const CARD_EXIT_ANIMATION_MS = 360;
const RESULT_EFFECT_MS = 1100;
const SCREEN_SHAKE_MS = 280;
const CARD_DEAL_SOUND_SRC = "assets/sounds/card_deal.wav";

const CARD_LIBRARY = buildCardLibrary();

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
  isDeckOpen: false,
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
  message: "Ziehe bis 7 Karten. Spiele bis zu 3 Karten pro Zug.",
  hoveredTemplateId: null,
  deckHoveredTemplateId: null,
  enteringCardIds: [],
  animatingCardIds: [],
  cardAnimationType: null,
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
  playerHpText: document.getElementById("playerHpText"),
  playerHpFill: document.getElementById("playerHpFill"),
  dealerDamageLabel: document.getElementById("dealerDamageLabel"),
  dealerHpLabel: document.getElementById("dealerHpLabel"),
  dealerHpText: document.getElementById("dealerHpText"),
  dealerHpFill: document.getElementById("dealerHpFill"),
  coinsLabel: document.getElementById("coinsLabel"),
  dealerStatusLabel: document.getElementById("dealerStatusLabel"),
  playerStatusLabel: document.getElementById("playerStatusLabel"),
  messageBanner: document.getElementById("messageBanner"),
  playSelectedButton: document.getElementById("playSelectedButton"),
  discardSelectedButton: document.getElementById("discardSelectedButton"),
  debugWinButton: document.getElementById("debugWinButton"),
  debugCoinsButton: document.getElementById("debugCoinsButton"),
  nextFightButton: document.getElementById("nextFightButton"),
  shopNextFightButton: document.getElementById("shopNextFightButton"),
  newRoundButton: document.getElementById("newRoundButton"),
  resetButton: document.getElementById("resetButton"),
  dealerCards: document.getElementById("dealerCards"),
  playerCards: document.getElementById("playerCards"),
  shopPanel: document.getElementById("shopPanel"),
  shopCoinsLabel: document.getElementById("shopCoinsLabel"),
  shopOffers: document.getElementById("shopOffers"),
  victoryPanel: document.getElementById("victoryPanel"),
  victoryText: document.getElementById("victoryText"),
  continueToShopButton: document.getElementById("continueToShopButton"),
  defeatPanel: document.getElementById("defeatPanel"),
  defeatText: document.getElementById("defeatText"),
  restartRunButton: document.getElementById("restartRunButton"),
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
  rewardLabel: document.getElementById("rewardLabel")
};

function setSoundtrackVolume(value) {
  const volumePercent = Math.max(0, Math.min(100, Number(value) || 0));
  els.soundtrackAudio.volume = volumePercent / 100;
  els.volumeSlider.value = String(volumePercent);
  els.volumeValueLabel.textContent = `${volumePercent}%`;
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

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildStartingDeck() {
  return shuffle(getNormalTemplateIds()).slice(0, STARTING_DECK_SIZE);
}

function getNormalTemplateIds() {
  return Object.keys(CARD_LIBRARY).filter((templateId) => !CARD_LIBRARY[templateId].isSpecial);
}

function getSpecialTemplateIds() {
  return Object.keys(CARD_LIBRARY).filter((templateId) => CARD_LIBRARY[templateId].isSpecial);
}

function buildShopOffers() {
  return shuffle(getSpecialTemplateIds()).slice(0, SHOP_OFFER_COUNT).map((templateId) => ({
    templateId,
    cost: getShopCardCost(templateId),
    isSold: false
  }));
}

function getShopCardCost(templateId) {
  const template = CARD_LIBRARY[templateId];
  const typePremiums = {
    golden: 6,
    cursed: -2,
    void: 4,
    holy: 4
  };
  return SHOP_BASE_CARD_COST + (state.round * 2) + (typePremiums[template.typeId] || 0);
}

function buildCombatDeck() {
  return shuffle(state.runDeck.map(createDeckCard));
}

function createDeckCard(templateId) {
  return {
    instanceId: `card_${Math.random().toString(36).slice(2, 10)}`,
    templateId,
    hidden: false
  };
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
  return createDeckCard(templateIds[Math.floor(Math.random() * templateIds.length)]);
}

function drawDealerHand() {
  state.dealerCards = Array.from({ length: DEALER_HAND_SIZE }, createDealerCard);
  state.enteringCardIds.push(...state.dealerCards.map((card) => card.instanceId));
  playCardDealSound();
}

function startRound() {
  state.round += 1;
  if (state.player.hp <= 0) {
    state.player.hp = state.player.maxHp;
  }
  state.drawPile = buildCombatDeck();
  state.discardPile = [];
  state.playerCards = [];
  state.dealerCards = [];
  state.selectedCardIds = [];
  state.shopOffers = [];
  state.enteringCardIds = [];
  state.phase = "combat";
  state.dealer.maxHp = DEALER_BASE_HP + ((state.round - 1) * 12);
  state.dealer.hp = state.dealer.maxHp;
  state.rewardCoins = WIN_REWARD_COINS + ((state.round - 1) * 4);
  state.message = "Ziehe bis 7 Karten. Spiele bis zu 3 Karten pro Zug.";

  drawPlayerHand();
  drawDealerHand();
  clearEnteringCardsSoon();

  state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
  render();
}

function resetGame() {
  state.actionToken += 1;
  state.isActionLocked = false;
  state.animatingCardIds = [];
  state.cardAnimationType = null;
  state.resultEffect = null;
  state.shopOffers = [];
  state.round = 0;
  state.coins = 0;
  state.runDeck = buildStartingDeck();
  state.player.hp = PLAYER_BASE_HP;
  state.player.maxHp = PLAYER_BASE_HP;
  startRound();
}

function playSelectedCards() {
  if (state.phase !== "combat" || state.isActionLocked) {
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
  render();

  window.setTimeout(() => {
    if (state.actionToken !== actionToken) {
      return;
    }

    state.playerCards = state.playerCards.filter((card) => !selectedCardIds.includes(card.instanceId));
    state.discardPile.push(...selectedCards);
    state.selectedCardIds = [];
    state.animatingCardIds = [];
    state.cardAnimationType = null;
    state.isActionLocked = false;
    damageDealer(damage);
  }, CARD_EXIT_ANIMATION_MS);
}

function discardSelectedCards() {
  if (state.phase !== "combat" || state.isActionLocked) {
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
    state.hoveredTemplateId = state.playerCards[0]?.templateId || null;
    state.message = drawnCards === selectedCards.length
      ? `${selectedCards.length} Karte(n) abgeworfen und ${drawnCards} nachgezogen.`
      : `${selectedCards.length} Karte(n) abgeworfen. Nur ${drawnCards} Karte(n) im Deck gefunden.`;
    render();
    clearEnteringCardsSoon();
  }, CARD_EXIT_ANIMATION_MS);
}

function damageDealer(amount) {
  state.dealer.hp = Math.max(0, state.dealer.hp - amount);

  if (state.dealer.hp <= 0) {
    winCombat(`Dealer besiegt! +${state.rewardCoins} Coins.`);
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

  state.message = `${amount} Schaden verursacht. Dealer kontert mit ${dealerDamage} Schaden. Hand wieder auf ${state.playerCards.length}/${MAX_HAND_SIZE}.`;
  render();
}

function damagePlayer(amount) {
  state.player.hp = Math.max(0, state.player.hp - amount);

  if (state.player.hp <= 0) {
    startResultEffect("defeat");
    state.message = `Du wurdest besiegt. Dealer hat ${amount} Schaden gemacht.`;
    state.selectedCardIds = [];
    render();
  }
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

function winCombat(message = `Gewonnen! +${state.rewardCoins} Coins.`) {
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

    state.phase = "victory";
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
  state.message = "Willkommen im Shop.";
  render();
}

function buyShopOffer(index) {
  if (state.phase !== "shop") {
    return;
  }

  const offer = state.shopOffers[index];
  if (!offer || offer.isSold) {
    return;
  }

  if (state.coins < offer.cost) {
    state.message = "Nicht genug Coins.";
    render();
    return;
  }

  const template = CARD_LIBRARY[offer.templateId];
  state.coins -= offer.cost;
  state.runDeck.push(offer.templateId);
  offer.isSold = true;
  state.message = `${template.displayName} gekauft und deinem Deck hinzugefügt.`;
  render();
}

function addDebugCoins() {
  state.coins += DEBUG_COINS;
  state.message = `Debug: +${DEBUG_COINS} Coins.`;
  render();
}

function getCurrentDeckCards() {
  return state.drawPile.map((card) => ({ ...card, zone: "Deck" }));
}

function openDeckPanel() {
  state.isDeckOpen = true;
  state.deckHoveredTemplateId = getCurrentDeckCards()[0]?.templateId || null;
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

  render();
}

function createCardElement(template, options = {}) {
  const article = document.createElement("article");
  article.className = "playing-card";

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
  }
  if (options.selectable) {
    article.classList.add("is-selectable");
    article.setAttribute("role", "button");
    article.setAttribute("tabindex", "0");
  }
  article.innerHTML = `
    <img src="${template.sprite}" alt="${template.displayName}" draggable="false">
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

  if (!template) {
    els.previewTitle.textContent = "Hover Card";
    els.previewText.textContent = "Hover über eine Karte, um Details zu sehen.";
    return;
  }

  els.previewSlot.appendChild(createCardElement(template, { interactive: false }));
  els.previewTitle.textContent = template.displayName;
  els.previewText.textContent = template.description;
}

function renderDeckPreview() {
  els.deckPreviewSlot.innerHTML = "";
  const templateId = state.deckHoveredTemplateId;
  const template = templateId ? CARD_LIBRARY[templateId] : null;

  if (!template) {
    els.deckPreviewTitle.textContent = "Hover Card";
    els.deckPreviewText.textContent = "Hover über eine Karte, um Details zu sehen.";
    return;
  }

  els.deckPreviewSlot.appendChild(createCardElement(template, { interactive: false }));
  els.deckPreviewTitle.textContent = template.displayName;
  els.deckPreviewText.textContent = template.description;
}

function renderDeckPanel() {
  const cards = getCurrentDeckCards();

  els.deckPanel.classList.toggle("is-hidden", !state.isDeckOpen);
  els.deckSummary.textContent = `${state.drawPile.length} im Deck, ${state.playerCards.length} auf der Hand, ${state.discardPile.length} in der Ablage`;
  els.deckList.innerHTML = "";

  if (!cards.some((card) => card.templateId === state.deckHoveredTemplateId)) {
    state.deckHoveredTemplateId = cards[0]?.templateId || null;
  }

  cards.forEach((card) => {
    const template = CARD_LIBRARY[card.templateId];
    const item = document.createElement("article");
    item.className = "deck-list-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.innerHTML = `
      <div class="deck-list-card"></div>
      <div>
        <strong>${template.displayName}</strong>
        <span>${template.typeLabel} - ${template.value} Schaden - ${card.zone}</span>
      </div>
    `;
    item.querySelector(".deck-list-card").appendChild(createCardElement(template, { interactive: false }));
    item.addEventListener("pointerenter", () => {
      state.deckHoveredTemplateId = template.id;
      renderDeckPreview();
    });
    item.addEventListener("focus", () => {
      state.deckHoveredTemplateId = template.id;
      renderDeckPreview();
    });
    item.addEventListener("click", () => {
      state.deckHoveredTemplateId = template.id;
      renderDeckPreview();
    });
    els.deckList.appendChild(item);
  });

  renderDeckPreview();
}

function renderShopOffers() {
  els.shopOffers.innerHTML = "";

  state.shopOffers.forEach((offer, index) => {
    const template = CARD_LIBRARY[offer.templateId];
    const item = document.createElement("article");
    item.className = "shop-card offer-card";
    item.innerHTML = `
      <div class="shop-card-preview"></div>
      <div class="shop-card-copy">
        <strong>${template.displayName}</strong>
        <span>${template.typeLabel} - ${template.value} Schaden</span>
      </div>
      <button class="control-button ${offer.isSold ? "ghost" : "alt"}" type="button">
        ${offer.isSold ? "Gekauft" : `${offer.cost} Coins`}
      </button>
    `;

    item.querySelector(".shop-card-preview").appendChild(createCardElement(template, { interactive: false }));
    const buyButton = item.querySelector("button");
    buyButton.disabled = offer.isSold || state.coins < offer.cost;
    buyButton.addEventListener("click", () => buyShopOffer(index));
    els.shopOffers.appendChild(item);
  });
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

  els.playSelectedButton.disabled = state.phase !== "combat" || selectedCards.length === 0 || state.isActionLocked;
  els.discardSelectedButton.disabled = state.phase !== "combat" || selectedCards.length === 0 || state.isActionLocked;
  els.newRoundButton.disabled = state.phase === "combat" || state.isActionLocked;
  els.nextFightButton.classList.add("is-hidden");
  els.shopPanel.classList.toggle("is-hidden", state.phase !== "shop");
  els.victoryPanel.classList.toggle("is-hidden", state.phase !== "victory");
  els.defeatPanel.classList.toggle("is-hidden", state.phase !== "defeat");
  els.resultEffect.classList.toggle("is-hidden", !state.resultEffect);
  els.resultEffect.classList.toggle("is-victory", state.resultEffect === "victory");
  els.resultEffect.classList.toggle("is-defeat", state.resultEffect === "defeat");
  els.resultEffectText.textContent = state.resultEffect === "victory"
    ? "SIEG"
    : state.resultEffect === "defeat"
      ? "NIEDERLAGE"
      : "";
  els.victoryText.textContent = `Belohnung: +${state.rewardCoins} Coins. Aktuell hast du ${state.coins} Coins.`;
  els.defeatText.textContent = state.message;

  renderShopOffers();
  renderCards(els.playerCards, state.playerCards, false, { selectable: true });
  renderCards(els.dealerCards, state.dealerCards, true);
  renderPreview();
  renderDeckPanel();
}

els.playSelectedButton.addEventListener("click", playSelectedCards);
els.discardSelectedButton.addEventListener("click", discardSelectedCards);
els.debugWinButton.addEventListener("click", () => winCombat());
els.debugCoinsButton.addEventListener("click", addDebugCoins);
els.nextFightButton.addEventListener("click", startRound);
els.shopNextFightButton.addEventListener("click", startRound);
els.continueToShopButton.addEventListener("click", continueToShop);
els.restartRunButton.addEventListener("click", resetGame);
els.newRoundButton.addEventListener("click", startRound);
els.resetButton.addEventListener("click", resetGame);
els.deckButton.addEventListener("click", openDeckPanel);
els.closeDeckButton.addEventListener("click", closeDeckPanel);

document.addEventListener("click", (event) => {
  if (event.target.closest("button, .playing-card, .deck-list-item")) {
    triggerScreenShake();
    playSoundtrack();
  }
});

initSoundtrack();
resetGame();
