const topicTracks = [
  {
    topic: "Understanding menstruation",
    levels: [
      { title: "Level 1", body: "Periods are a normal body process.", points: ["Cycles vary.", "Symptoms differ.", "Hygiene matters."], link: "https://www.who.int/news-room/fact-sheets/detail/adolescent-health", quiz: { prompt: "What is true about menstrual cycles?", options: ["They always match", "They can vary", "Only adults have them", "They are illness"], correct: 1, explain: "Cycles naturally vary from person to person." } },
      { title: "Level 2", body: "Understand common cycle phases and symptoms.", points: ["Bleeding phase", "Ovulation timing basics", "Premenstrual symptoms"], link: "https://www.nhs.uk/conditions/periods/", quiz: { prompt: "Which can be normal before a period?", options: ["Mood changes", "Broken bone", "Vision loss", "High fever"], correct: 0, explain: "Mood shifts are a common premenstrual symptom." } },
      { title: "Level 3", body: "Track cycle trends over time.", points: ["Use notes/calendar", "Observe symptom changes", "Identify irregular patterns"], link: "https://www.plannedparenthood.org/learn/health-and-wellness/menstruation", quiz: { prompt: "Why track cycles?", options: ["To compare with friends", "To notice personal patterns", "To skip care", "No reason"], correct: 1, explain: "Tracking helps understand your own cycle and symptoms." } },
      { title: "Level 4", body: "Recognize when pain may need support.", points: ["Severe pain warning", "Heavy bleeding signs", "Daily-life impact clues"], link: "https://www.acog.org/womens-health/faqs/your-menstrual-cycle", quiz: { prompt: "When should pain be checked?", options: ["If disabling", "Never", "Only after years", "Only online"], correct: 0, explain: "Pain that disrupts school/work should be evaluated." } },
      { title: "Level 5", body: "Understand hormonal influence on cycles.", points: ["Stress and hormones", "Sleep impact", "Nutrition link"], link: "https://www.endocrine.org/patient-engagement/endocrine-library/menstrual-cycle", quiz: { prompt: "Which can affect cycle timing?", options: ["Stress", "Eye color", "Shoe size", "Music taste"], correct: 0, explain: "Stress can influence hormone balance and cycle timing." } },
      { title: "Level 6", body: "Interpret irregular cycle red flags.", points: ["Absent periods", "Very frequent cycles", "Post-menarche variability"], link: "https://www.cdc.gov/reproductivehealth/womensrh/menstruation.htm", quiz: { prompt: "Which can be a red flag?", options: ["Skipping many months", "Mild cramps", "One mood change", "Normal appetite"], correct: 0, explain: "Long gaps between periods can require medical advice." } },
      { title: "Level 7", body: "Advanced interpretation and care pathways.", points: ["Differential causes overview", "When referral is needed", "Evidence-based management"], link: "https://www.ncbi.nlm.nih.gov/books/NBK279054/", quiz: { prompt: "Doctor-level approach includes:", options: ["Pattern review + exam + tests", "Guesswork", "Ignore symptoms", "Only painkillers"], correct: 0, explain: "Clinical evaluation combines history, exam, and targeted tests." } }
    ]
  },
  {
    topic: "Contraception basics",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `Contraception knowledge depth ${i + 1}: method matching, effectiveness, and safety.`,
      points: ["Method options", "Protection planning", "When to seek guidance"],
      link: "https://www.plannedparenthood.org/learn/birth-control",
      quiz: { prompt: `Contraception level ${i + 1}: which method also lowers STI risk?`, options: ["Condoms", "Pills", "Implants", "Calendar"], correct: 0, explain: "Condoms are the key option that also lowers STI transmission risk." }
    }))
  },
  {
    topic: "Consent & healthy relationships",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `Consent level ${i + 1}: communication, boundaries, and respect.` ,
      points: ["Consent is active", "Consent can be withdrawn", "Respect boundaries"],
      link: "https://www.rainn.org/articles/what-is-consent",
      quiz: { prompt: `Consent level ${i + 1}: what is always true?`, options: ["Silence means yes", "Consent can change", "Dating means yes", "Pressure is okay"], correct: 1, explain: "Consent is ongoing and can be changed any time." }
    }))
  },
  {
    topic: "Male puberty and hormones",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `Male puberty level ${i + 1}: normal changes and warning signs.`,
      points: ["Timing can differ", "Body changes vary", "Ask for support when unsure"],
      link: "https://kidshealth.org/en/teens/male-repro.html",
      quiz: { prompt: `Male puberty level ${i + 1}: normal change?`, options: ["Voice deepening", "No change ever", "Permanent severe pain", "No hormones"], correct: 0, explain: "Voice deepening is a common puberty change." }
    }))
  },
  {
    topic: "Testicular and prostate awareness",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `Awareness level ${i + 1}: self-check and early medical care.`,
      points: ["Notice changes", "Pain/swelling checks", "Early treatment matters"],
      link: "https://www.cancer.org/cancer/testicular-cancer/detection-diagnosis-staging/detection.html",
      quiz: { prompt: `Testicular awareness level ${i + 1}: a new lump should be...`, options: ["Ignored", "Checked by a clinician", "Posted online only", "Self-treated only"], correct: 1, explain: "A clinician should evaluate a new lump promptly." }
    }))
  },
  {
    topic: "STI prevention & testing",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `STI prevention level ${i + 1}: testing plans and risk reduction.`,
      points: ["Some STIs are silent", "Testing schedule matters", "Protection + communication"],
      link: "https://www.cdc.gov/sti/about/index.html",
      quiz: { prompt: `STI level ${i + 1}: why test regularly?`, options: ["Symptoms always appear", "Many STIs are asymptomatic", "Only one gender needs tests", "Testing has no benefit"], correct: 1, explain: "Testing helps catch silent infections early." }
    }))
  },
  {
    topic: "Fertility, sperm health & family planning",
    levels: Array.from({ length: 7 }, (_, i) => ({
      title: `Level ${i + 1}`,
      body: `Fertility & family planning level ${i + 1}: timing, spacing, and reproductive decision-making.`,
      points: ["Sperm health habits", "Family planning choices", "Clinical support when needed"],
      link: "https://www.nhs.uk/pregnancy/trying-for-a-baby/male-fertility/",
      quiz: { prompt: `Family planning level ${i + 1}: what does it support?`, options: ["Random timing", "Informed timing and spacing", "Avoiding healthcare", "No communication"], correct: 1, explain: "Family planning supports informed timing and spacing decisions." }
    }))
  }
];

const questionBank = {
  easy: [
    { prompt: "Which method helps reduce STI transmission?", options: ["Condoms/barriers", "Cycle tracking only", "Withdrawal", "No method"], correct: 0, explain: "Condoms and barriers reduce STI risk by creating a protective barrier." },
    { prompt: "What does consent include?", options: ["Pressure", "Silence", "Freely given agreement", "Permanent permission"], correct: 2, explain: "Consent must be freely given and can be changed." },
    { prompt: "Why is STI testing useful?", options: ["Many STIs are asymptomatic", "It is never useful", "Only for one gender", "Only with symptoms"], correct: 0, explain: "Many STIs can have no obvious symptoms." }
  ],
  normal: [
    { prompt: "A new painless testicular lump should be:", options: ["Ignored", "Checked by a healthcare professional", "Managed online only", "Assumed harmless"], correct: 1, explain: "Early evaluation improves outcomes." },
    { prompt: "What is true about consent in relationships?", options: ["Dating means automatic consent", "Consent can change anytime", "Silence equals yes", "Consent is permanent"], correct: 1, explain: "Consent is ongoing and reversible." },
    { prompt: "Family planning helps with:", options: ["Timing and spacing decisions", "Avoiding all clinics", "Ignoring contraception", "No communication"], correct: 0, explain: "Family planning supports informed decisions on timing and spacing." }
  ],
  hard: [
    { prompt: "Which combined strategy best supports reproductive health?", options: ["No testing + assumptions", "Condoms + routine testing + communication", "Withdrawal only", "Random advice"], correct: 1, explain: "A combined prevention approach gives stronger protection." },
    { prompt: "Which habit may reduce sperm quality?", options: ["Hydration", "Smoking and chronic heat exposure", "Exercise", "Sleep"], correct: 1, explain: "Smoking and prolonged heat exposure can reduce sperm quality." },
    { prompt: "Doctor-level assessment for menstrual irregularities includes:", options: ["Guessing", "History + exam + targeted tests", "Ignoring symptoms", "Only social media advice"], correct: 1, explain: "Clinical assessment uses history, exam, and targeted diagnostics." }
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
let selectedTopic = 0;
let selectedLevel = 0;

const ROUND_SIZE = 3;

const topicTracksEl = document.getElementById("topic-tracks");
const lessonView = document.getElementById("lesson-view");
const questionText = document.getElementById("question-text");
const optionsWrap = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("question-progress");
const scorePill = document.getElementById("score-pill");
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

function renderTopicTracks() {
  topicTracksEl.innerHTML = "";

  topicTracks.forEach((track, tIndex) => {
    const card = document.createElement("article");
    card.className = "soft-card topic-card";

    const levels = track.levels
      .map(
        (_level, lIndex) =>
          `<button class="track-level-btn ${tIndex === selectedTopic && lIndex === selectedLevel ? "active" : ""}" data-topic="${tIndex}" data-level="${lIndex}">L${lIndex + 1}</button>`
      )
      .join("");

    card.innerHTML = `<h3>${track.topic}</h3><div class="track-levels">${levels}</div>`;
    topicTracksEl.append(card);
  });

  document.querySelectorAll(".track-level-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTopic = Number(btn.dataset.topic);
      selectedLevel = Number(btn.dataset.level);
      renderTopicTracks();
      renderLessonView();
    });
  });
}

function launchLessonQuiz(topicIndex, levelIndex) {
  const q = topicTracks[topicIndex].levels[levelIndex].quiz;
  buildRoundQuestions([q]);
  currentQuestion = 0;
  score = 0;
  setActiveMenu("quiz");
  renderQuestion();
}

function renderLessonView() {
  const levelData = topicTracks[selectedTopic].levels[selectedLevel];
  const points = levelData.points.map((point) => `<li>${point}</li>`).join("");

  lessonView.innerHTML = `
    <span class="lesson-level">${topicTracks[selectedTopic].topic} • ${levelData.title}</span>
    <p>${levelData.body}</p>
    <ul class="lesson-points">${points}</ul>
    <a class="trusted-link" href="${levelData.link}" target="_blank" rel="noopener noreferrer">Read expanded guide ↗</a>
    <div class="lesson-actions">
      <button id="lesson-quiz-btn" class="btn btn-solid" type="button">Take lesson quiz</button>
      <button id="lesson-skip-quiz-btn" class="btn btn-outline" type="button">Skip to quiz mode</button>
    </div>
  `;

  document.getElementById("lesson-quiz-btn")?.addEventListener("click", () => launchLessonQuiz(selectedTopic, selectedLevel));
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
      selectedTopic = Number(btn.dataset.openTopic || 0);
      selectedLevel = Number(btn.dataset.openLevel || 0);
      setActiveMenu("learn");
      renderTopicTracks();
      renderLessonView();
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
    feedback.textContent = `Correct. ${q.explain}`;
    feedback.style.color = "#1b8f66";
  } else {
    selectedBtn.classList.add("wrong");
    feedback.textContent = `Not quite. ${q.explain}`;
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

  feedback.textContent = `Round complete, ${username}. Starting a new randomized round.`;
  feedback.style.color = "#334ac2";
  currentQuestion = 0;
  score = 0;
  buildRoundQuestions();
  setTimeout(renderQuestion, 900);
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

function updateFriendsRanking() {
  friendRankings.innerHTML = "";
  const names = new Set(friends);
  if (username !== "Guest") names.add(username);
  const ranking = Array.from(names)
    .map((name, idx) => ({ name, score: 120 + Math.floor(Math.random() * 120) + idx }))
    .sort((a, b) => b.score - a.score);

  if (!ranking.length) {
    const empty = document.createElement("li");
    empty.textContent = "No friends added yet.";
    friendRankings.append(empty);
    return;
  }

  ranking.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} — ${entry.score} XP`;
    friendRankings.append(li);
  });
}

function updateMascot(streak) {
  if (!mascotFace || !mascotMood) return;
  mascotFace.classList.remove("mood-calm", "mood-happy", "mood-excited");

  if (streak >= 14) {
    mascotFace.classList.add("mood-excited");
    mascotMood.textContent = "Your mascot is super excited by your streak!";
  } else if (streak >= 5) {
    mascotFace.classList.add("mood-happy");
    mascotMood.textContent = "Your mascot is getting more excited!";
  } else {
    mascotFace.classList.add("mood-calm");
    mascotMood.textContent = "Your mascot is cheering you on.";
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
  updateFriendsRanking();
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
    feedback.textContent = `Signed in with Google as ${username}.`;
  } catch (_error) {
    feedback.textContent = "Google sign-in completed, but profile info could not be read.";
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
    googleSlot.textContent = "Google sign-in could not initialize. Set a valid client ID.";
  }
}

function attachSignIn() {
  document.getElementById("mock-google-btn").addEventListener("click", () => {
    applyUser("Google User");
    feedback.textContent = "Demo Google sign-in complete.";
  });

  document.getElementById("guest-btn").addEventListener("click", () => {
    applyUser("Guest");
    feedback.textContent = "Guest mode enabled.";
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
    updateFriendsRanking();
  });
}

nextBtn.addEventListener("click", nextQuestion);

window.addEventListener("load", () => {
  requestAnimationFrame(() => document.body.classList.add("loaded"));
});

attachMenuNavigation();
setActiveMenu("home");
renderTopicTracks();
renderLessonView();
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
