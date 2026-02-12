const lessons = [
  {
    title: "Understanding menstruation",
    difficulty: "Level 1 · Starter",
    body: "Periods are the shedding of the uterine lining. Cycle length can vary from person to person and may change with stress, sleep, and health conditions.",
    points: [
      "A cycle can be regular or irregular, especially in teen years.",
      "Common symptoms include cramps, mood changes, and bloating.",
      "Seek care if bleeding is very heavy, very painful, or absent for months."
    ],
    link: "https://www.who.int/news-room/fact-sheets/detail/adolescent-health",
    quiz: {
      prompt: "Which statement is true about menstrual cycles?",
      options: ["They are always exactly 28 days", "They can vary person to person", "They happen only with stress", "They stop forever after one missed cycle"],
      correct: 1,
      explain: "Correct. Cycle length can vary between individuals and over time."
    }
  },
  {
    title: "Contraception basics",
    difficulty: "Level 2 · Foundations",
    body: "Birth control options include condoms, pills, IUDs, implants, and more. Condoms are the only option that also helps lower STI risk.",
    points: [
      "Condoms help with STI prevention and pregnancy prevention.",
      "Methods like pills, implants, and IUDs differ in duration and side effects.",
      "Emergency contraception works best as soon as possible after unprotected sex."
    ],
    link: "https://www.plannedparenthood.org/learn/birth-control",
    quiz: {
      prompt: "Which birth control method also helps reduce STI transmission?",
      options: ["Condoms", "Pills", "Implant", "Calendar tracking"],
      correct: 0,
      explain: "Condoms create a barrier that lowers STI risk in addition to helping prevent pregnancy."
    }
  },
  {
    title: "Consent & healthy relationships",
    difficulty: "Level 3 · Confidence",
    body: "Consent should be freely given, informed, enthusiastic, and reversible. Healthy relationships include communication, respect, and boundaries.",
    points: [
      "Consent is needed every time, even in long-term relationships.",
      "Pressure, fear, or guilt are not consent.",
      "Healthy partners respect boundaries and communicate clearly."
    ],
    link: "https://www.rainn.org/articles/what-is-consent",
    quiz: {
      prompt: "What does healthy consent include?",
      options: ["Assumptions", "Silence", "Freely given and reversible agreement", "Only one-time permission"],
      correct: 2,
      explain: "Consent must be freely given and can be changed at any time."
    }
  },
  {
    title: "Male puberty and hormones",
    difficulty: "Level 4 · Growth",
    body: "Voice changes, body hair, acne, erections, wet dreams, and mood changes can all be normal during male puberty.",
    points: [
      "Puberty timing differs from person to person.",
      "Hygiene, sleep, and emotional support help during body changes.",
      "Talk to a clinician if puberty changes are very delayed or very early."
    ],
    link: "https://kidshealth.org/en/teens/male-repro.html",
    quiz: {
      prompt: "Which can be a normal change in male puberty?",
      options: ["Voice deepening", "No body changes", "Permanent severe pain", "Zero mood shifts ever"],
      correct: 0,
      explain: "Voice deepening is common during male puberty due to hormonal changes."
    }
  },
  {
    title: "Testicular and prostate awareness",
    difficulty: "Level 5 · Advanced",
    body: "Self-awareness of testicular changes (pain, swelling, lumps) and early medical advice when symptoms appear helps protect long-term health.",
    points: [
      "Do a quick monthly check for unusual lumps or swelling.",
      "Persistent pain should be evaluated quickly.",
      "Early checkups improve outcomes for many conditions."
    ],
    link: "https://www.cancer.org/cancer/testicular-cancer/detection-diagnosis-staging/detection.html",
    quiz: {
      prompt: "A new painless testicular lump should be:",
      options: ["Ignored", "Shared online only", "Checked by a clinician", "Treated at home without advice"],
      correct: 2,
      explain: "A clinician should evaluate new lumps promptly for accurate diagnosis and early treatment if needed."
    }
  },
  {
    title: "STI prevention & testing",
    difficulty: "Level 6 · Expert",
    body: "Many STIs can have no symptoms in any gender. Routine testing, condom/barrier use, and open communication help keep everyone safer.",
    points: [
      "Testing frequency depends on activity and risk factors.",
      "No symptoms does not always mean no infection.",
      "Discuss testing and protection plans with partners."
    ],
    link: "https://www.cdc.gov/sti/about/index.html",
    quiz: {
      prompt: "Why is regular STI testing important?",
      options: ["STIs always show symptoms", "Many STIs can be asymptomatic", "Only one gender gets STIs", "Testing is never useful"],
      correct: 1,
      explain: "Many STIs can have no symptoms, so testing helps catch infections early."
    }
  },
  {
    title: "Fertility, sperm health & family planning",
    difficulty: "Level 7 · Mastery",
    body: "Sperm quality can be affected by heat, smoking, alcohol, infections, and stress. Family planning helps people decide if and when to have children.",
    points: [
      "Balanced nutrition, sleep, and exercise support fertility.",
      "Smoking and high alcohol use can reduce sperm quality.",
      "Family planning includes timing, spacing, and informed contraception choices."
    ],
    link: "https://www.nhs.uk/pregnancy/trying-for-a-baby/male-fertility/",
    quiz: {
      prompt: "Family planning helps people to:",
      options: ["Avoid healthcare", "Decide timing and spacing of children", "Ignore fertility health", "Skip STI prevention"],
      correct: 1,
      explain: "Family planning supports informed choices about if and when to have children."
    }
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
      explain: "A new testicular lump should be checked promptly because early care matters."
    },
    {
      prompt: "What is true about consent in a relationship?",
      options: ["Consent is permanent", "Consent can change anytime", "Consent is implied by dating", "Consent does not need words"],
      correct: 1,
      explain: "Consent must be ongoing. Being in a relationship never removes the need to ask each time."
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
      prompt: "Family planning means:",
      options: ["Guessing and hoping", "Timing and spacing children with informed choices", "Avoiding all medical advice", "Only one partner decides"],
      correct: 1,
      explain: "Family planning involves informed choices about timing and spacing of children."
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
  window.REPROWISE_GOOGLE_CLIENT_ID || "123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com";

let activeTier = "easy";
let currentQuestion = 0;
let score = 0;
let locked = false;
let username = localStorage.getItem("reprowise-user") || "Guest";
let friends = JSON.parse(localStorage.getItem("reprowise-friends") || "[]");
let roundQuestions = [];
let lessonProgress = Number(localStorage.getItem("reprowise-lesson-progress") || 0);

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
const mascotFace = document.getElementById("mascot-face");
const mascotMood = document.getElementById("mascot-mood");

function shuffleArray(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildRoundQuestions(sourceQuestions = questionBank[activeTier]) {
  const shuffledPool = shuffleArray(sourceQuestions);
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
    const isUnlocked = i <= lessonProgress;
    button.textContent = `${lesson.difficulty} • ${lesson.title}${isUnlocked ? "" : " 🔒"}`;
    button.disabled = !isUnlocked;
    button.addEventListener("click", () => selectLesson(i));
    li.append(button);
    lessonList.append(li);
  });
  selectLesson(Math.min(lessonProgress, lessons.length - 1));
}

function unlockLesson(index) {
  if (index >= lessonProgress && lessonProgress < lessons.length - 1) {
    lessonProgress = Math.min(index + 1, lessons.length - 1);
    localStorage.setItem("reprowise-lesson-progress", String(lessonProgress));
    renderLessons();
  }
}

function launchLessonQuiz(index) {
  const q = lessons[index]?.quiz;
  if (!q) return;
  buildRoundQuestions([q]);
  currentQuestion = 0;
  score = 0;
  setActiveMenu("quiz");
  renderQuestion();
}

function selectLesson(i) {
  const lesson = lessons[i];
  const points = lesson.points.map((point) => `<li>${point}</li>`).join("");
  lessonView.innerHTML = `
    <span class="lesson-level">${lesson.difficulty}</span>
    <h3>${lesson.title}</h3>
    <p>${lesson.body}</p>
    <ul class="lesson-points">${points}</ul>
    <a class="trusted-link" href="${lesson.link}" target="_blank" rel="noopener noreferrer">Read expanded guide ↗</a>
    <div class="lesson-actions">
      <button id="lesson-quiz-btn" class="btn btn-solid" type="button">Take lesson quiz</button>
      <button id="lesson-skip-quiz-btn" class="btn btn-outline" type="button">Skip to quiz mode</button>
    </div>
  `;

  document.querySelectorAll(".lesson-list button").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === i);
  });

  unlockLesson(i);

  document.getElementById("lesson-quiz-btn")?.addEventListener("click", () => launchLessonQuiz(i));
  document.getElementById("lesson-skip-quiz-btn")?.addEventListener("click", () => {
    buildRoundQuestions();
    currentQuestion = 0;
    score = 0;
    setActiveMenu("quiz");
    renderQuestion();
  });
}

function attachTopicRedirects() {
  document.querySelectorAll(".topic-jump").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lessonIndex = Number(btn.dataset.openLesson || 0);
      setActiveMenu("learn");
      selectLesson(lessonIndex);
    });
  });
}

function renderQuestion() {
  const questions = currentQuestions();
  if (!questions.length) return;
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
  feedback.style.color = "#334ac2";
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

function updateMascot(streak) {
  if (!mascotFace || !mascotMood) return;

  if (streak >= 21) {
    mascotFace.textContent = "🤩";
    mascotMood.textContent = "Legend streak! Your mascot is super hyped!";
  } else if (streak >= 10) {
    mascotFace.textContent = "😄";
    mascotMood.textContent = "Amazing streak! Your mascot is very excited!";
  } else if (streak >= 4) {
    mascotFace.textContent = "😊";
    mascotMood.textContent = "Nice momentum! Keep going!";
  } else {
    mascotFace.textContent = "🙂";
    mascotMood.textContent = "Your buddy is cheering you on.";
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem("reprowise-last-visit");
  let streak = Number(localStorage.getItem("reprowise-streak") || 0);

  if (!last) streak = 1;
  else {
    const diff = Math.floor((new Date(today) - new Date(last)) / 86400000);
    if (diff === 1) streak += 1;
    if (diff > 1) streak = 1;
  }

  localStorage.setItem("reprowise-last-visit", today);
  localStorage.setItem("reprowise-streak", String(streak));
  streakCount.textContent = `${streak} day${streak > 1 ? "s" : ""}`;
  updateMascot(streak);
}

function applyUser(name) {
  username = name || "Guest";
  if (username === "Guest") localStorage.removeItem("reprowise-user");
  else localStorage.setItem("reprowise-user", username);
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
    applyUser(payload.given_name || payload.name || "ReproWise Learner");
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
      "Google sign-in could not initialize. Set window.REPROWISE_GOOGLE_CLIENT_ID to your valid client ID.";
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

function attachShareLink() {
  const linkInput = document.getElementById("site-link");
  const copyBtn = document.getElementById("copy-link-btn");

  if (!linkInput || !copyBtn) return;
  linkInput.value = window.location.href;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(linkInput.value);
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy link";
      }, 1000);
    } catch (_error) {
      linkInput.select();
      document.execCommand("copy");
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy link";
      }, 1000);
    }
  });
}

function attachFriendsSystem() {
  document.getElementById("add-friend-btn").addEventListener("click", () => {
    const input = document.getElementById("friend-input");
    const name = input.value.trim();
    if (!name || friends.some((f) => f.toLowerCase() === name.toLowerCase())) return;
    friends.push(name);
    localStorage.setItem("reprowise-friends", JSON.stringify(friends));
    input.value = "";
    updateLeaderboard();
  });
}

nextBtn.addEventListener("click", nextQuestion);

window.addEventListener("load", () => {
  requestAnimationFrame(() => document.body.classList.add("loaded"));
});

attachMenuNavigation();
setActiveMenu("home");
renderLessons();
attachTopicRedirects();
attachTierPicker();
attachSignIn();
attachHospitalSearch();
attachShareLink();
attachFriendsSystem();
setupGoogleSignIn();
updateStreak();
buildRoundQuestions();
applyUser(username);
renderQuestion();
