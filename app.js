const PLAN = [
  {
    week: 1, theme: "Foundation & Form", color: "#FF6B35",
    days: [
      {
        day: 1, title: "Stance & Basic Jump", focus: "Body mechanics", duration: "15 min", rest: "45s between sets",
        drills: [
          { name: "Footwork without rope", reps: "3 × 30 jumps", tip: "Jump on balls of feet, land softly. Knees slightly bent." },
          { name: "Single bounce (basic jump)", reps: "3 × 20 jumps", tip: "Keep elbows close to sides, wrists do the turning — not arms." },
          { name: "Rest & observe form", reps: "5 min", tip: "Film yourself from the side if possible." }
        ],
        video: { label: "Jump Rope Basics for Beginners", url: "https://www.youtube.com/results?search_query=jump+rope+basics+for+beginners+form" },
        note: "The rope should skim the ground just under your feet. Aim for quiet landings.",
        gear: true
      },
      {
        day: 2, title: "Rhythm & Timing", focus: "Consistency", duration: "15 min", rest: "45s between sets",
        drills: [
          { name: "Single bounce continuous", reps: "4 × 30 sec", tip: "Don't rush — find a steady 1-jump-per-rotation cadence." },
          { name: "Slow rope swings (no jump)", reps: "2 × 20 reps", tip: "Focus on wrist rotation mechanics alone." },
          { name: "Single bounce with eyes closed", reps: "2 × 15 jumps", tip: "Forces proprioceptive awareness of timing." }
        ],
        video: { label: "Jump Rope Rhythm & Timing Tips", url: "https://www.youtube.com/results?search_query=jump+rope+rhythm+timing+tutorial" },
        note: "Missing is normal — just re-enter quickly and keep going."
      },
      {
        day: 3, title: "Active Rest / Mobility", focus: "Recovery", duration: "20 min", rest: "N/A",
        drills: [
          { name: "Ankle circles & calf stretches", reps: "3 min each side", tip: "Jump rope demands a lot from calves and Achilles." },
          { name: "Hip flexor & quad stretch", reps: "2 min each side", tip: "Keeps posture upright during jumping." },
          { name: "Light walking / low-impact movement", reps: "10 min", tip: "Active recovery only — no jump rope today." }
        ],
        video: { label: "Post-Workout Stretches for Jump Rope", url: "https://www.youtube.com/results?search_query=jump+rope+recovery+stretches+calves" },
        note: "Recovery days are training days. Tight calves lead to bad form."
      },
      {
        day: 4, title: "Endurance Build", focus: "Continuous jumping", duration: "20 min", rest: "60s between sets",
        drills: [
          { name: "Single bounce", reps: "5 × 1 min", tip: "Goal is 1 full minute without stopping. If you miss, re-enter." },
          { name: "March in place (no rope)", reps: "2 × 30 sec", tip: "Active recovery between hard sets." },
          { name: "Max unbroken attempt", reps: "1 attempt", tip: "Log your unbroken PR for the week." }
        ],
        video: { label: "Jump Rope Endurance Training", url: "https://www.youtube.com/results?search_query=jump+rope+endurance+beginner+training" },
        note: "Track your longest unbroken streak — it's your baseline to beat each week."
      },
      {
        day: 5, title: "Alternate Foot Step", focus: "Footwork variation", duration: "20 min", rest: "45s between sets",
        drills: [
          { name: "Alternate foot step intro", reps: "4 × 30 sec", tip: "Like jogging in place — one foot lands per rotation. Light and quick." },
          { name: "Mix: 20 single bounce → 20 alternate", reps: "3 rounds", tip: "Smooth transition between styles." },
          { name: "Alternate foot step speed dial", reps: "2 × 30 sec fast", tip: "Try to progressively speed up without losing form." }
        ],
        video: { label: "Alternate Foot Step Tutorial", url: "https://www.youtube.com/results?search_query=jump+rope+alternate+foot+step+tutorial" },
        note: "The alternate step is the gateway to running jumps and speed work."
      },
      {
        day: 6, title: "Week 1 Consolidation", focus: "Tie it together", duration: "25 min", rest: "45s between sets",
        drills: [
          { name: "Warm-up: single bounce", reps: "2 × 1 min", tip: "Easy pace, focus on form." },
          { name: "Alternate foot step", reps: "3 × 1 min", tip: "Stay light, don't stomp." },
          { name: "Combo drill: 30s single / 30s alternate", reps: "4 rounds", tip: "Smooth transitions = good proprioception." },
          { name: "Max unbroken PR attempt", reps: "1 attempt", tip: "Beat Day 4's score." }
        ],
        video: null,
        note: "No new skills today — just sharpen what you have. Quality over complexity."
      },
      {
        day: 7, title: "Full Rest", focus: "Recover", duration: "—", rest: "—",
        drills: [], video: null,
        note: "Full rest. Eat well, sleep well. Your muscles grow on off days.", isRest: true
      }
    ]
  },
  {
    week: 2, theme: "Speed & Skill Intro", color: "#2EC4B6",
    days: [
      {
        day: 1, title: "High Knees", focus: "Power & lift", duration: "20 min", rest: "60s between sets",
        drills: [
          { name: "High knee march (no rope)", reps: "2 × 30 sec", tip: "Drive knees to hip height." },
          { name: "High knee jump rope", reps: "4 × 20 sec", tip: "Exaggerate the knee lift. Your cadence will naturally slow — that's fine." },
          { name: "Alternate step → high knees", reps: "3 × 30 sec each", tip: "Ramp up from low to high intensity fluidly." }
        ],
        video: { label: "High Knees Jump Rope Tutorial", url: "https://www.youtube.com/results?search_query=jump+rope+high+knees+tutorial" },
        note: "High knees improve cardiovascular intensity and hip flexor strength simultaneously."
      },
      {
        day: 2, title: "Double Unders Intro", focus: "Wrist speed & timing", duration: "25 min", rest: "60s between sets",
        drills: [
          { name: "Practice wrist snap (no jump)", reps: "3 × 30 sec", tip: "Spin the rope fast in your hands without jumping. Feel the wrist torque." },
          { name: "Single-single-double attempts", reps: "5 × 10 attempts", tip: "Do 2 singles, then attempt 1 double under. One at a time." },
          { name: "Consecutive double under attempts", reps: "3 × max reps", tip: "Most beginners get 1–3 in a row. That's a win." }
        ],
        video: { label: "How to Do Double Unders (Step by Step)", url: "https://www.youtube.com/results?search_query=how+to+do+double+unders+jump+rope+beginner" },
        note: "Double unders require a HIGHER jump + FASTER wrist snap — not both arms swinging out."
      },
      {
        day: 3, title: "Active Rest", focus: "Recovery", duration: "20 min", rest: "N/A",
        drills: [
          { name: "Foam roll calves & quads", reps: "3 min each", tip: "Jump rope is calf-dominant. Roll thoroughly." },
          { name: "Jump rope visualization", reps: "5 min", tip: "Mental rehearsal: picture smooth double unders in your mind." },
          { name: "Light walk or yoga", reps: "10 min", tip: "" }
        ],
        video: { label: "Jump Rope Recovery & Mobility", url: "https://www.youtube.com/results?search_query=jump+rope+recovery+mobility+foam+roll" },
        note: ""
      },
      {
        day: 4, title: "Speed Intervals", focus: "Raw speed", duration: "25 min", rest: "90s between sets",
        drills: [
          { name: "Alternate foot step sprints", reps: "6 × 20 sec ALL OUT", tip: "Pretend you're sprinting through the rope. Maximum turnover rate." },
          { name: "Recovery single bounce", reps: "90 sec easy", tip: "Bring heart rate down between sprints." },
          { name: "Time trial: most reps in 60 sec", reps: "2 attempts", tip: "Log your best count." }
        ],
        video: { label: "Jump Rope HIIT Speed Workout", url: "https://www.youtube.com/results?search_query=jump+rope+HIIT+speed+intervals+workout" },
        note: "Speed work is what separates athletic jumpers from casual ones. Push your limits today."
      },
      {
        day: 5, title: "Side Swings & Crossovers", focus: "Rope manipulation", duration: "25 min", rest: "45s between sets",
        drills: [
          { name: "Side swings (figure-8)", reps: "3 × 30 sec", tip: "Swing the rope in a figure-8 at your sides — no jumping. Get comfortable with rope control." },
          { name: "Jump → side swing → jump transition", reps: "4 × 10 reps", tip: "Jump 5 times, swing once, re-enter. Smooth transition is the goal." },
          { name: "Crossover intro (slow motion)", reps: "3 × 5 reps", tip: "Cross arms fully — wrists need to cross past center of body." }
        ],
        video: { label: "Jump Rope Crossover Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=jump+rope+crossover+tutorial+beginners" },
        note: "Don't rush crossovers — focus on geometry. Where are your arms going?"
      },
      {
        day: 6, title: "Week 2 Full Workout", focus: "Combo session", duration: "30 min", rest: "60s between sets",
        drills: [
          { name: "Warm-up: alternate foot step", reps: "3 min easy", tip: "" },
          { name: "High knees intervals", reps: "4 × 30 sec", tip: "" },
          { name: "Double under attempts", reps: "5 min focused practice", tip: "Single-single-double pattern." },
          { name: "Speed sprint: alternate step", reps: "4 × 20 sec max effort", tip: "" },
          { name: "Side swing → jump transitions", reps: "3 × 10 reps", tip: "" }
        ],
        video: null,
        note: "This is the toughest session of Week 2. Take pride in how far you've come in just 12 days."
      },
      {
        day: 7, title: "Full Rest", focus: "Recover", duration: "—", rest: "—",
        drills: [], video: null,
        note: "Full rest day. You've earned it.", isRest: true
      }
    ]
  },
  {
    week: 3, theme: "Flow & Proficiency", color: "#8A2BE2",
    days: [
      {
        day: 1, title: "Double Under Consistency", focus: "Chain doubles", duration: "25 min", rest: "60s between sets",
        drills: [
          { name: "Double under warm-up: single-single-double", reps: "3 × 10", tip: "" },
          { name: "Consecutive doubles", reps: "6 × max streak", tip: "Target: 5+ in a row by end of the week." },
          { name: "Double → single → double drill", reps: "3 × 10 reps", tip: "Weave them into your rhythm intentionally." }
        ],
        video: { label: "Getting Consistent Double Unders", url: "https://www.youtube.com/results?search_query=consistent+double+unders+jump+rope+tips" },
        note: "Consistency = relaxed hands. Tension in your grip kills wrist speed."
      },
      {
        day: 2, title: "Boxer Skip & Footwork", focus: "Rhythm mastery", duration: "25 min", rest: "45s between sets",
        drills: [
          { name: "Boxer skip (weight shift)", reps: "4 × 1 min", tip: "Subtle side-to-side weight transfer each jump. Looks like a boxer warming up." },
          { name: "Criss-cross footwork", reps: "3 × 30 sec", tip: "Cross feet alternately in front, keeping jumps small." },
          { name: "Footwork combo: boxer → high knees → alternate step", reps: "3 × 2 min total", tip: "Flow freely between styles." }
        ],
        video: { label: "Boxer Skip Jump Rope Tutorial", url: "https://www.youtube.com/results?search_query=boxer+skip+jump+rope+tutorial" },
        note: "The boxer skip is the most practical skill for conditioning. Fighters use it because it works."
      },
      {
        day: 3, title: "Active Rest", focus: "Recovery", duration: "20 min", rest: "N/A",
        drills: [
          { name: "Full body stretch", reps: "15 min", tip: "Calves, quads, shoulders, wrists." },
          { name: "Mental practice: visualize your flow routine", reps: "5 min", tip: "Picture Week 4 looking effortless." }
        ],
        video: null,
        note: ""
      },
      {
        day: 4, title: "Crossovers", focus: "Skill integration", duration: "25 min", rest: "60s between sets",
        drills: [
          { name: "Crossover drill: 5 singles → 1 cross", reps: "5 × 10 reps", tip: "Uncross immediately after — don't stay crossed." },
          { name: "Crossover chains", reps: "4 × max consecutive", tip: "Goal: 3+ consecutive crossovers." },
          { name: "Cross → open → cross pattern", reps: "3 × 1 min", tip: "This is what freestyle jump rope looks like." }
        ],
        video: { label: "Crossover Jump Rope Drill Progression", url: "https://www.youtube.com/results?search_query=jump+rope+crossover+drill+progression" },
        note: "Crossovers are a style flex but also build coordination. Don't skip them."
      },
      {
        day: 5, title: "Build Your Flow Combo", focus: "Freestyle", duration: "30 min", rest: "60s between sets",
        drills: [
          { name: "Design a 2-minute combo", reps: "Practice 4×", tip: "Pick 3–4 moves and sequence them. E.g.: basic → alternate → boxer skip → double under × 5 → crossover." },
          { name: "Run it at full speed", reps: "3× full speed", tip: "Music helps — put on a 100–105 BPM track." },
          { name: "Identify weak link, drill it", reps: "5 min focused", tip: "What breaks your flow? Drill just that transition." }
        ],
        video: { label: "Jump Rope Freestyle Flow Tutorial", url: "https://www.youtube.com/results?search_query=jump+rope+freestyle+flow+combo+tutorial" },
        note: "This is where it gets fun. There's no wrong combo — make it yours."
      },
      {
        day: 6, title: "Final Benchmark Session", focus: "Test yourself", duration: "35 min", rest: "90s between tests",
        drills: [
          { name: "Max unbroken single bounce", reps: "1 attempt", tip: "Compare vs. Week 1 Day 4." },
          { name: "Most reps in 60 seconds", reps: "2 attempts", tip: "Go all out on alternate step." },
          { name: "Max consecutive double unders", reps: "3 attempts", tip: "Log your best." },
          { name: "2-minute freestyle flow combo", reps: "2 full runs", tip: "Film it. Watch it back. See how far you've come." }
        ],
        video: null,
        note: "You started 3 weeks ago with zero training. Today you flow. That's real."
      },
      {
        day: 7, title: "Full Rest", focus: "Recover", duration: "—", rest: "—",
        drills: [], video: null,
        note: "Rest. Reflect. Plan Week 4 as your ongoing maintenance. You're a jump roper now.", isRest: true
      }
    ]
  }
];

// State
let activeWeek = 0;
let activeDay = 0;

function setAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
}

function renderWeekTabs() {
  const el = document.getElementById('weekTabs');
  el.innerHTML = PLAN.map((w, wi) => `
    <button class="week-tab ${wi === activeWeek ? 'active' : ''}" onclick="selectWeek(${wi})"
      style="${wi === activeWeek ? `--accent:${w.color};color:${w.color};border-bottom-color:${w.color}` : ''}">
      WEEK ${wi + 1}<span>${w.theme}</span>
    </button>
  `).join('');
}

function renderDayDots() {
  const week = PLAN[activeWeek];
  const el = document.getElementById('dayDots');
  el.innerHTML = week.days.map((d, di) => `
    <button class="day-dot ${di === activeDay ? 'active' : ''} ${d.isRest ? 'rest' : ''}"
      onclick="selectDay(${di})"
      style="${di === activeDay ? `background:${week.color};border-color:${week.color}` : ''}">
      ${di + 1}
    </button>
  `).join('');
}

function renderContent() {
  const week = PLAN[activeWeek];
  const day = week.days[activeDay];
  const el = document.getElementById('content');

  let html = '';

  // Day card
  html += `<div class="day-card" style="border-top-color:${week.color}">`;

  // Header
  html += `<div class="day-header">
    <div>
      <div class="day-label" style="color:${week.color}">Week ${activeWeek + 1} · Day ${activeDay + 1}</div>
      <div class="day-title">${day.title}</div>
      <div class="day-focus">${day.focus}</div>
    </div>
    ${day.duration !== '—' ? `<div class="day-meta">
      <div class="day-duration" style="color:${week.color}">${day.duration}</div>
      ${day.rest !== 'N/A' && day.rest !== '—' ? `<div class="day-rest">Rest: ${day.rest}</div>` : ''}
    </div>` : ''}
  </div>`;

  if (day.isRest) {
    html += `<div class="rest-day"><div class="rest-emoji">😴</div><div class="rest-text">${day.note}</div></div>`;
  } else {
    // Drills
    if (day.drills.length > 0) {
      html += `<div class="drills-section"><div class="section-label">Drills</div>`;
      day.drills.forEach(drill => {
        html += `<div class="drill" style="border-left-color:${week.color}">
          <div class="drill-top">
            <div class="drill-name">${drill.name}</div>
            <div class="drill-reps" style="color:${week.color}">${drill.reps}</div>
          </div>
          ${drill.tip ? `<div class="drill-tip">💡 ${drill.tip}</div>` : ''}
        </div>`;
      });
      html += `</div>`;
    }

    // Video
    if (day.video) {
      html += `<div class="video-section">
        <a class="video-link" href="${day.video.url}" target="_blank" rel="noopener">
          <div class="video-icon">▶</div>
          <div>
            <div class="video-label-top">Watch on YouTube</div>
            <div class="video-label-title">${day.video.label}</div>
          </div>
        </a>
      </div>`;
    }

    // Note
    if (day.note) {
      html += `<div class="note-section">${day.note}</div>`;
    }
  }

  html += `</div>`; // close day-card

  // Gear note on Week 1 Day 1
  if (activeWeek === 0 && activeDay === 0) {
    html += `<div class="gear-card" style="border-left-color:${week.color}">
      <div class="gear-label" style="color:${week.color}">Gear Note</div>
      <div class="gear-item">🪢 <b>Rope length:</b> Stand on the middle — handles should reach your armpits.</div>
      <div class="gear-item">👟 <b>Footwear:</b> Cross-trainers or boxing shoes. Avoid running shoes.</div>
      <div class="gear-item">🏠 <b>Surface:</b> Wood, rubber mat, or asphalt. Avoid carpet.</div>
    </div>`;
  }

  // Week overview
  html += `<div class="overview-card">
    <div class="section-label">Week ${activeWeek + 1} Overview</div>
    <div class="overview-grid">
      ${week.days.map((d, di) => `
        <div class="overview-cell ${di === activeDay ? 'active' : ''}" onclick="selectDay(${di})"
          style="${di === activeDay ? `border-color:${week.color};background:${week.color}22` : ''}">
          <div class="overview-day" style="color:${week.color}">D${di + 1}</div>
          <div class="overview-name">${d.title.split(' ').slice(0, 2).join(' ')}</div>
        </div>
      `).join('')}
    </div>
  </div>`;

  el.innerHTML = html;
  el.scrollTop = 0;
}

function selectWeek(wi) {
  activeWeek = wi;
  activeDay = 0;
  setAccent(PLAN[wi].color);
  renderWeekTabs();
  renderDayDots();
  renderContent();
}

function selectDay(di) {
  activeDay = di;
  renderDayDots();
  renderContent();
}

// PWA Install prompt
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('installBanner');
  banner.classList.remove('hidden');
  banner.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
    banner.classList.add('hidden');
  });
  document.getElementById('installClose').addEventListener('click', (ev) => {
    ev.stopPropagation();
    banner.classList.add('hidden');
  });
});

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// Init
setAccent(PLAN[0].color);
renderWeekTabs();
renderDayDots();
renderContent();
