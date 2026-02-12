const lessons = [
  {
    title: "Understanding menstruation",
    body: "Periods are the shedding of the uterine lining. Cycle length can vary from person to person and may change with stress, sleep, and health conditions."
  },
  {
    title: "Contraception basics",
    body: "Birth control options include condoms, pills, IUDs, implants, and more. Condoms are the only option that also helps lower STI risk."
  },
  {
    title: "Consent & healthy relationships",
    body: "Consent should be freely given, informed, enthusiastic, and reversible. Healthy relationships include communication, respect, and boundaries."
  },
  {
    title: "Male puberty and hormones",
    body: "Voice changes, body hair, acne, erections, wet dreams, and mood changes can all be normal during male puberty."
  },
  {
    title: "Testicular and prostate awareness",
    body: "Self-awareness of testicular changes (pain, swelling, lumps) and early medical advice when symptoms appear helps protect long-term health."
  },
  {
    title: "STI prevention & testing",
    body: "Many STIs can have no symptoms in any gender. Routine testing, condom/barrier use, and open communication help keep everyone safer."
  },
  {
    title: "Fertility and sperm health",
    body: "Sperm quality can be affected by heat, smoking, alcohol, infections, and stress. Healthy habits support reproductive health."
  }
];

const questionBank = {
  easy: [
    {
      prompt: "Which method helps reduce STI transmission?",
      options: ["Condoms/barriers", "Cycle tracking only", "Withdrawal", "No method"],
      correct: 0,
      explain: "Condoms and barriers lower STI risk because they reduce fluid-to-fluid contact during sex."
    },
    {
      prompt: "What can be a normal change during male puberty?",
      options: ["Voice deepening", "Never having body changes", "No mood changes ever", "Permanent pain"],
      correct: 0,
      explain: "Voice changes are common in male puberty due to hormonal development."
    },
    {
      prompt: "How long are menstrual cycles?",
      options: ["Always 28 days", "Can vary person to person", "Always 21 days", "Never changes"],
      correct: 1,
      explain: "Cycle length differs between people, so variation can still be normal."
    },
    {
      prompt: "Why is regular STI testing useful?",
      options: ["Many STIs have no symptoms", "Only one gender needs it", "It never helps", "Only adults benefit"],
      correct: 0,
      explain: "Testing is useful because some STIs have no visible symptoms."
    },
    {
      prompt: "If a condom breaks, what is a good next step?",
      options: ["Ignore it", "Talk to a clinic about emergency options and testing", "Wait months", "Only ask friends online"],
      correct: 1,
      explain: "A clinic can guide emergency contraception and STI testing based on timing."
    }
  ],
  normal: [
    {
      prompt: "Which statement about STI testing is true?",
      options: ["Only needed with symptoms", "Many STIs have no symptoms", "Testing is only for one gender", "Testing is never useful"],
      correct: 1,
      explain: "Many STIs are asymptomatic, so regular testing catches infections early and protects partners."
    },
    {
      prompt: "A painless testicular lump should be:",
      options: ["Ignored", "Checked by a healthcare professional", "Treated with social media advice", "Assumed to be harmless always"],
      correct: 1,
      explain: "A new testicular lump should be checked promptly because early care is important for diagnosis and treatment."
    },
    {
      prompt: "What is true about consent in a relationship?",
      options: ["Consent is permanent", "Consent can change anytime", "Consent is implied by dating", "Consent does not need words"],
      correct: 1,
      explain: "Consent must be ongoing. Being in a relationship never removes the need to ask each time."
    },
    {
      prompt: "Which habit supports sperm health?",
      options: ["Heavy smoking", "Long-term heat exposure", "Balanced sleep and less smoking/alcohol", "Ignoring infections"],
      correct: 2,
      explain: "Healthy sleep and reduced smoking/alcohol can support fertility and sperm quality."
    },
    {
      prompt: "If pregnancy is possible, a healthy first step is:",
      options: ["Wait 6 months", "Take a test and contact a clinic", "Ignore symptoms", "Only ask social media"],
      correct: 1,
      explain: "A pregnancy test gives quick clarity, and clinics can provide confidential options and support."
    }
  ],
  hard: [
    {
      prompt: "Which combination best supports reproductive health?",
      options: ["No testing + assumptions", "Condom use + regular STI testing + communication", "Withdrawal only", "Random online advice"],
      correct: 1,
      explain: "Protection, testing, and communication work together to prevent risk and support healthy decisions."
    },
    {
      prompt: "Which habit can negatively affect sperm health?",
      options: ["Regular exercise", "Smoking and chronic heat exposure", "Hydration", "Consistent sleep"],
      correct: 1,
      explain: "Smoking and long-term heat exposure can reduce sperm quality and fertility over time."
    },
    {
      prompt: "Which statement is most inclusive?",
      options: ["Only one gender needs sexual health info", "People of all genders benefit from inclusive reproductive health education", "STIs only affect some groups", "Consent only matters in long-term relationships"],
      correct: 1,
      explain: "Everyone benefits from inclusive sexual and reproductive health information, regardless of gender."
    },
    {
      prompt: "Why should a persistent scrotal pain be medically checked?",
      options: ["It is always harmless", "It can signal urgent conditions needing treatment", "Only older adults need care", "Online advice is enough"],
      correct: 1,
      explain: "Persistent scrotal pain can indicate infections or torsion and should be assessed quickly."
    },
    {
      prompt: "Best immediate guidance after unprotected sex?",
      options: ["Do nothing", "Assess emergency contraception timing and STI testing with a clinic", "Wait for months", "Use myths"],
      correct: 1,
      explain: "Timing matters for emergency options; a clinic can provide accurate and private guidance."
    }
  ]
};

const hospitals = [
  { city: "nairobi", name: "Kenyatta National Hospital", phone: "+254 20 2726300", service: "Pregnancy tests, STI testing, youth-friendly reproductive care" },
  { city: "nairobi", name: "Nairobi West Hospital", phone: "+254 703 047000", service: "Confidential pregnancy testing and gynecology services" },
  { city: "mombasa", name: "Coast General Teaching and Referral Hospital", phone: "+254 41 2312191", service: "Pregnancy tests, maternal and adolescent care" },
  { city: "kisumu", name: "Jaramogi Oginga Odinga Teaching and Referral Hospital", phone: "+254 57 2020401", service: "Pregnancy testing, STI services, counseling" },
  { city: "nakuru", name: "Nakuru Level 5 Teaching and Referral Hospital", phone: "+254 51 2216242", service: "Reproductive health consultations and pregnancy tests" }
];

const GOOGLE_CLIENT_ID =
  window.BLOOM_GOOGLE_CLIENT_ID || "123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com";

let activeTier = "easy";
let currentQuestion = 0;
let score = 0;
let locked = false;
let username = localStorage.getItem("bloom-user") || "Guest";
let friends = JSON.parse(localStorage.getItem("bloom-friends") || "[]");
let roundQuestions = [];

const ROUND_SIZE = 3;

const lessonList = document.getElementById("lesson-list");
const lessonView = document.getElementById("lesson-view");
const questionText = document.getElementById("question-text");
const optionsWrap = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("question-progress");
const scorePill = document.getElementById("score-pill");
const leaderboard = document.getElementById("leaderboard");
const friendRankings = document.getElementById("friend-rankings");
const streakCount = document.getElementById("streak-count");
const accountPill = document.getElementById("account-pill");
const tierLabel = document.getElementById("current-tier-label");

function shuffleArray(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildRoundQuestions() {
  const shuffledPool = shuffleArray(questionBank[activeTier]);
  const selected = shuffledPool.slice(0, Math.min(ROUND_SIZE, shuffledPool.length));

  roundQuestions = selected.map((q) => {
    const wrapped = q.options.map((text, idx) => ({ text, originalIndex: idx }));
    const mixed = shuffleArray(wrapped);
    return {
      prompt: q.prompt,
      options: mixed.map((o) => o.text),
      correct: mixed.findIndex((o) => o.originalIndex === q.correct),
      explain: q.explain
    };
  });
}

function currentQuestions() {
  return roundQuestions;
}

function setActiveMenu(targetId) {
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === targetId);
  });
  document.querySelectorAll(".app-section").forEach((section) => {
    section.classList.toggle("active", section.id === targetId);
  });
}

function attachMenuNavigation() {
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => setActiveMenu(btn.dataset.target));
  });
}

function renderLessons() {
  lessonList.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = lesson.title;
    button.addEventListener("click", () => selectLesson(i));
    li.append(button);
    lessonList.append(li);
  });
  selectLesson(0);
}

function selectLesson(i) {
  lessonView.innerHTML = `<h3>${lessons[i].title}</h3><p>${lessons[i].body}</p>`;
  document.querySelectorAll(".lesson-list button").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === i);
  });
}

function renderQuestion() {
  const questions = currentQuestions();
  const q = questions[currentQuestion];
  const labels = ["A", "B", "C", "D"];

  progress.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
  scorePill.textContent = `Score: ${score}`;
  tierLabel.textContent = `Level: ${activeTier.charAt(0).toUpperCase()}${activeTier.slice(1)}`;
  questionText.textContent = q.prompt;
  feedback.textContent = "";
  optionsWrap.innerHTML = "";
  locked = false;
  nextBtn.disabled = true;

  q.options.forEach((opt, idx) => {
    const button = document.createElement("button");
    button.textContent = `${labels[idx]}. ${opt}`;
    button.className = "option-btn";
    button.addEventListener("click", () => answer(idx, button));
    optionsWrap.append(button);
  });
}

function answer(index, selectedBtn) {
  if (locked) return;
  locked = true;

  const q = currentQuestions()[currentQuestion];
  const allOptions = Array.from(document.querySelectorAll(".option-btn"));

  allOptions.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
  });

  if (index === q.correct) {
    const tierBonus = activeTier === "easy" ? 10 : activeTier === "normal" ? 15 : 20;
    score += tierBonus;
    feedback.textContent = `✅ Correct. ${q.explain}`;
    feedback.style.color = "#1b8f66";
  } else {
    selectedBtn.classList.add("wrong");
    feedback.textContent = `❌ Not quite. ${q.explain}`;
    feedback.style.color = "#cb3e67";
  }

  scorePill.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  const questions = currentQuestions();
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  feedback.textContent = `Round complete, ${username}! ${activeTier.toUpperCase()} score: ${score}. Starting a new randomized round.`;
  feedback.style.color = "#515ed3";
  updateLeaderboard();
  currentQuestion = 0;
  score = 0;
  buildRoundQuestions();
  setTimeout(renderQuestion, 1300);
}

function switchTier(tier) {
  activeTier = tier;
  currentQuestion = 0;
  score = 0;
  buildRoundQuestions();
  document.querySelectorAll(".tier-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tier === tier);
  });
  renderQuestion();
}

function getRankingData() {
  const allNames = new Set(friends);
  if (username !== "Guest") allNames.add(username);

  return Array.from(allNames)
    .map((name, idx) => ({
      name,
      score: 120 + Math.floor(Math.random() * 120) + idx
    }))
    .sort((a, b) => b.score - a.score);
}

function updateLeaderboard() {
  const ranking = getRankingData();
  leaderboard.innerHTML = "";
  friendRankings.innerHTML = "";

  if (!ranking.length) {
    const emptyQuiz = document.createElement("li");
    emptyQuiz.textContent = "No rankings yet. Add friends to start competing.";
    leaderboard.append(emptyQuiz);

    const emptyFriends = document.createElement("li");
    emptyFriends.textContent = "No friends added yet.";
    friendRankings.append(emptyFriends);
    return;
  }

  ranking.forEach((entry) => {
    const li1 = document.createElement("li");
    li1.textContent = `${entry.name} — ${entry.score} XP`;
    leaderboard.append(li1);

    const li2 = document.createElement("li");
    li2.textContent = `${entry.name} — ${entry.score} XP`;
    friendRankings.append(li2);
  });
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem("bloom-last-visit");
  let streak = Number(localStorage.getItem("bloom-streak") || 0);

  if (!last) streak = 1;
  else {
    const diff = Math.floor((new Date(today) - new Date(last)) / 86400000);
    if (diff === 1) streak += 1;
    if (diff > 1) streak = 1;
  }

  localStorage.setItem("bloom-last-visit", today);
  localStorage.setItem("bloom-streak", String(streak));
  streakCount.textContent = `${streak} day${streak > 1 ? "s" : ""}`;
}

function applyUser(name) {
  username = name || "Guest";
  if (username === "Guest") localStorage.removeItem("bloom-user");
  else localStorage.setItem("bloom-user", username);
  accountPill.textContent = username;
  updateLeaderboard();
}

function decodeJwtPayload(token) {
  const payload = token.split(".")[1];
  const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
  return JSON.parse(json);
}

function handleGoogleCredentialResponse(response) {
  try {
    const payload = decodeJwtPayload(response.credential);
    applyUser(payload.given_name || payload.name || "Bloom Learner");
    feedback.textContent = `Signed in with Google as ${username}. Competition mode enabled.`;
  } catch (_error) {
    feedback.textContent = "Google sign-in completed, but we could not read profile info.";
  }
}

function setupGoogleSignIn() {
  const googleSlot = document.getElementById("google-signin-btn");
  if (!window.google?.accounts?.id) {
    googleSlot.textContent = "Google Sign-In library failed to load.";
    return;
  }

  try {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse
    });
    window.google.accounts.id.renderButton(googleSlot, {
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "pill"
    });
    googleSlot.textContent = "";
  } catch (_error) {
    googleSlot.textContent =
      "Google sign-in could not initialize. Set window.BLOOM_GOOGLE_CLIENT_ID to your valid client ID.";
  }
}

function attachSignIn() {
  document.getElementById("mock-google-btn").addEventListener("click", () => {
    applyUser("Google User");
    feedback.textContent = "Demo Google sign-in complete. Replace with your real client ID for live auth.";
  });

  document.getElementById("guest-btn").addEventListener("click", () => {
    applyUser("Guest");
    feedback.textContent = "Guest mode enabled. Your learning stays private on this device.";
  });
}

function attachTierPicker() {
  document.querySelectorAll(".tier-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTier(btn.dataset.tier));
  });
}

function attachHospitalSearch() {
  const cityInput = document.getElementById("city-input");
  const resultWrap = document.getElementById("hospital-results");

  function render(city = "") {
    const key = city.toLowerCase().trim();
    const list = key ? hospitals.filter((h) => h.city.includes(key)) : hospitals;
    resultWrap.innerHTML = "";

    if (!list.length) {
      resultWrap.innerHTML = "<p>No exact matches yet. Try Nairobi, Mombasa, Kisumu, or Nakuru.</p>";
      return;
    }

    list.forEach((item) => {
      const card = document.createElement("article");
      card.className = "hospital-card";
      card.innerHTML = `<h4>${item.name}</h4><p>${item.service}</p><p><strong>Phone:</strong> ${item.phone}</p>`;
      resultWrap.append(card);
    });
  }

  document.getElementById("search-btn").addEventListener("click", () => render(cityInput.value));
  render();
}

function attachFriendsSystem() {
  document.getElementById("add-friend-btn").addEventListener("click", () => {
    const input = document.getElementById("friend-input");
    const name = input.value.trim();
    if (!name || friends.some((f) => f.toLowerCase() === name.toLowerCase())) return;
    friends.push(name);
    localStorage.setItem("bloom-friends", JSON.stringify(friends));
    input.value = "";
    updateLeaderboard();
  });
}

nextBtn.addEventListener("click", nextQuestion);

window.addEventListener("load", () => {
  requestAnimationFrame(() => document.body.classList.add("loaded"));
});

attachMenuNavigation();
renderLessons();
attachTierPicker();
attachSignIn();
attachHospitalSearch();
attachFriendsSystem();
setupGoogleSignIn();
updateStreak();
buildRoundQuestions();
applyUser(username);
renderQuestion();
