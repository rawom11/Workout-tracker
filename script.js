const EXERCISES = [
  {"id": 1, "name": "Wall Push-Up", "level": "beginner", "category": "Push", "desc": "Standing push variation using a wall."},
  {"id": 2, "name": "Incline Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up variation using a stable elevated surface."},
  {"id": 3, "name": "Knee Push-Up", "level": "beginner", "category": "Push", "desc": "Modified push-up with knees supported."},
  {"id": 4, "name": "Standard Push-Up", "level": "beginner", "category": "Push", "desc": "Classic bodyweight horizontal push."},
  {"id": 5, "name": "Wide Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up with a wider hand position."},
  {"id": 6, "name": "Close Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up with hands closer together."},
  {"id": 7, "name": "Scapular Push-Up", "level": "beginner", "category": "Push", "desc": "Controlled shoulder-blade movement from a plank."},
  {"id": 8, "name": "Push-Up Pause", "level": "beginner", "category": "Push", "desc": "Push-up with a brief controlled pause."},
  {"id": 9, "name": "Slow Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up emphasizing a slow, controlled tempo."},
  {"id": 10, "name": "Pike Hold", "level": "beginner", "category": "Push", "desc": "Static pike position for shoulder control."},
  {"id": 11, "name": "Wall Plank", "level": "beginner", "category": "Push", "desc": "Standing plank-style position against a wall."},
  {"id": 12, "name": "Bear Plank", "level": "beginner", "category": "Push", "desc": "Hands-and-feet support position with knees hovering."},

  {"id": 13, "name": "Bodyweight Squat", "level": "beginner", "category": "Legs", "desc": "Basic lower-body squat."},
  {"id": 14, "name": "Box Squat to Stable Surface", "level": "beginner", "category": "Legs", "desc": "Squat pattern using a stable surface as a depth guide."},
  {"id": 15, "name": "Reverse Lunge", "level": "beginner", "category": "Legs", "desc": "Controlled step-back lunge."},
  {"id": 16, "name": "Forward Lunge", "level": "beginner", "category": "Legs", "desc": "Controlled step-forward lunge."},
  {"id": 17, "name": "Split Squat", "level": "beginner", "category": "Legs", "desc": "Stationary single-leg squat pattern."},
  {"id": 18, "name": "Glute Bridge", "level": "beginner", "category": "Legs", "desc": "Floor-based hip extension movement."},
  {"id": 19, "name": "Calf Raise", "level": "beginner", "category": "Legs", "desc": "Standing calf-strength movement."},
  {"id": 20, "name": "Wall Sit", "level": "beginner", "category": "Legs", "desc": "Static seated position against a wall."},
  {"id": 21, "name": "March in Place", "level": "beginner", "category": "Legs", "desc": "Low-impact alternating knee lift."},
  {"id": 22, "name": "Step-Back Squat", "level": "beginner", "category": "Legs", "desc": "Squat followed by an alternating step back."},
  {"id": 23, "name": "Good Morning", "level": "beginner", "category": "Legs", "desc": "Hip-hinge movement with bodyweight only."},
  {"id": 24, "name": "Standing Hip Abduction", "level": "beginner", "category": "Legs", "desc": "Controlled side leg lift."},
  {"id": 25, "name": "Standing Hip Extension", "level": "beginner", "category": "Legs", "desc": "Controlled backward leg movement."},

  {"id": 26, "name": "Dead Bug", "level": "beginner", "category": "Core", "desc": "Controlled core movement performed on the floor."},
  {"id": 27, "name": "Bird Dog", "level": "beginner", "category": "Core", "desc": "Opposite arm-and-leg balance exercise."},
  {"id": 28, "name": "Forearm Plank", "level": "beginner", "category": "Core", "desc": "Static full-body plank on the forearms."},
  {"id": 29, "name": "High Plank", "level": "beginner", "category": "Core", "desc": "Static plank on straight arms."},
  {"id": 30, "name": "Side Plank from Knees", "level": "beginner", "category": "Core", "desc": "Modified side plank with knees supported."},
  {"id": 31, "name": "Glute Bridge March", "level": "beginner", "category": "Core", "desc": "Alternating march from a bridge position."},
  {"id": 32, "name": "Heel Taps", "level": "beginner", "category": "Core", "desc": "Alternating heel reach from a floor position."},
  {"id": 33, "name": "Knee-to-Chest Crunch", "level": "beginner", "category": "Core", "desc": "Controlled abdominal flexion."},
  {"id": 34, "name": "Seated Knee Tuck", "level": "beginner", "category": "Core", "desc": "Seated core movement with controlled knee motion."},
  {"id": 35, "name": "Standing Knee Drive", "level": "beginner", "category": "Core", "desc": "Alternating knee drive with upright posture."},

  {"id": 36, "name": "Cat-Cow", "level": "beginner", "category": "Mobility", "desc": "Gentle spinal mobility sequence."},
  {"id": 37, "name": "Child's Pose", "level": "beginner", "category": "Mobility", "desc": "Gentle recovery and mobility position."},
  {"id": 38, "name": "World's Greatest Stretch", "level": "beginner", "category": "Mobility", "desc": "Multi-directional mobility sequence."},
  {"id": 39, "name": "Hip Flexor Stretch", "level": "beginner", "category": "Mobility", "desc": "Gentle front-of-hip stretch."},
  {"id": 40, "name": "Hamstring Stretch", "level": "beginner", "category": "Mobility", "desc": "Gentle posterior-leg stretch."},
  {"id": 41, "name": "Shoulder Circles", "level": "beginner", "category": "Mobility", "desc": "Controlled shoulder circles."},
  {"id": 42, "name": "Thoracic Rotation", "level": "beginner", "category": "Mobility", "desc": "Gentle upper-back rotation."},
  {"id": 43, "name": "Ankle Rocks", "level": "beginner", "category": "Mobility", "desc": "Controlled ankle mobility drill."},
  {"id": 44, "name": "Neck Mobility", "level": "beginner", "category": "Mobility", "desc": "Gentle neck range-of-motion movements."},
  {"id": 45, "name": "Standing Side Bend", "level": "beginner", "category": "Mobility", "desc": "Gentle side-body mobility."},

  {"id": 46, "name": "Diamond Push-Up", "level": "intermediate", "category": "Push", "desc": "Narrow-hand push-up variation."},
  {"id": 47, "name": "Decline Push-Up", "level": "intermediate", "category": "Push", "desc": "Push-up with feet on a stable elevated surface."},
  {"id": 48, "name": "Pike Push-Up", "level": "intermediate", "category": "Push", "desc": "Bodyweight shoulder-focused push-up."},
  {"id": 49, "name": "Explosive Push-Up", "level": "intermediate", "category": "Push", "desc": "Fast upward push emphasizing power."},
  {"id": 50, "name": "Archer Push-Up Prep", "level": "intermediate", "category": "Push", "desc": "Uneven loading preparation for advanced pushing."},
  {"id": 51, "name": "Push-Up 1.5 Rep", "level": "intermediate", "category": "Push", "desc": "Push-up using a partial-rep variation."},
  {"id": 52, "name": "Tempo Diamond Push-Up", "level": "intermediate", "category": "Push", "desc": "Narrow push-up with deliberate tempo."},
  {"id": 53, "name": "Pseudo Planche Lean", "level": "intermediate", "category": "Push", "desc": "Forward-leaning bodyweight support drill."},

  {"id": 54, "name": "Cossack Squat", "level": "intermediate", "category": "Legs", "desc": "Side-to-side squat emphasizing mobility and strength."},
  {"id": 55, "name": "Bulgarian Split Squat", "level": "intermediate", "category": "Legs", "desc": "Single-leg squat with rear foot on a stable surface."},
  {"id": 56, "name": "Jump Squat", "level": "intermediate", "category": "Legs", "desc": "Squat pattern with a controlled jump."},
  {"id": 57, "name": "Single-Leg Calf Raise", "level": "intermediate", "category": "Legs", "desc": "Calf raise performed one leg at a time."},
  {"id": 58, "name": "Lateral Lunge", "level": "intermediate", "category": "Legs", "desc": "Side-stepping lunge pattern."},
  {"id": 59, "name": "Curtsy Lunge", "level": "intermediate", "category": "Legs", "desc": "Diagonal step-back lunge variation."},
  {"id": 60, "name": "Reverse Lunge to Knee Drive", "level": "intermediate", "category": "Legs", "desc": "Lunge followed by an upright knee drive."},
  {"id": 61, "name": "Skater Squat Prep", "level": "intermediate", "category": "Legs", "desc": "Single-leg squat balance progression."},
  {"id": 62, "name": "Single-Leg Glute Bridge", "level": "intermediate", "category": "Legs", "desc": "Bridge performed with one leg extended."},
  {"id": 63, "name": "Wall Sit March", "level": "intermediate", "category": "Legs", "desc": "Alternating leg lift from a wall sit."},

  {"id": 64, "name": "Hollow Body Hold", "level": "intermediate", "category": "Core", "desc": "Static hollow-body trunk position."},
  {"id": 65, "name": "V-Up", "level": "intermediate", "category": "Core", "desc": "Dynamic full-body abdominal movement."},
  {"id": 66, "name": "Leg Raise", "level": "intermediate", "category": "Core", "desc": "Controlled straight-leg raise from the floor."},
  {"id": 67, "name": "Side Plank", "level": "intermediate", "category": "Core", "desc": "Full side plank hold."},
  {"id": 68, "name": "Plank Shoulder Tap", "level": "intermediate", "category": "Core", "desc": "Alternating shoulder taps from a high plank."},
  {"id": 69, "name": "Bear Crawl", "level": "intermediate", "category": "Core", "desc": "Controlled crawling pattern on hands and feet."},
  {"id": 70, "name": "Mountain Climber", "level": "intermediate", "category": "Core", "desc": "Alternating knee-drive movement from plank."},
  {"id": 71, "name": "Reverse Crunch", "level": "intermediate", "category": "Core", "desc": "Controlled lower-abdominal curl."},
  {"id": 72, "name": "Bicycle Crunch", "level": "intermediate", "category": "Core", "desc": "Alternating rotational abdominal movement."},
  {"id": 73, "name": "Plank Walk", "level": "intermediate", "category": "Core", "desc": "Controlled hand movement while maintaining a plank."},
  {"id": 74, "name": "Hollow Rock Prep", "level": "intermediate", "category": "Core", "desc": "Gentle rocking preparation for hollow-body control."},

  {"id": 75, "name": "Burpee", "level": "intermediate", "category": "Full Body", "desc": "Full-body squat-to-plank movement."},
  {"id": 76, "name": "Squat Thrust", "level": "intermediate", "category": "Full Body", "desc": "Dynamic squat-to-plank movement without a jump."},
  {"id": 77, "name": "Inchworm", "level": "intermediate", "category": "Full Body", "desc": "Walkout movement combining mobility and core control."},
  {"id": 78, "name": "Bear Walk", "level": "intermediate", "category": "Full Body", "desc": "Low crawling movement using bodyweight."},
  {"id": 79, "name": "Crab Walk", "level": "intermediate", "category": "Full Body", "desc": "Reverse-support crawling movement."},
  {"id": 80, "name": "Lateral Bear Crawl", "level": "intermediate", "category": "Full Body", "desc": "Sideways crawling pattern."},
  {"id": 81, "name": "Jumping Jack", "level": "intermediate", "category": "Full Body", "desc": "Low-complexity full-body conditioning movement."},
  {"id": 82, "name": "High Knees", "level": "intermediate", "category": "Full Body", "desc": "Alternating fast knee-drive conditioning."},
  {"id": 83, "name": "Plank to Down Dog", "level": "intermediate", "category": "Mobility", "desc": "Controlled transition between plank and downward-facing position."},
  {"id": 84, "name": "Deep Squat Hold", "level": "intermediate", "category": "Mobility", "desc": "Supported or controlled deep squat mobility hold."},
  {"id": 85, "name": "90/90 Hip Switch", "level": "intermediate", "category": "Mobility", "desc": "Controlled hip rotation drill."},

  {"id": 86, "name": "Archer Push-Up", "level": "pro", "category": "Push", "desc": "Advanced uneven-loading push-up."},
  {"id": 87, "name": "Typewriter Push-Up", "level": "pro", "category": "Push", "desc": "Advanced side-to-side push-up variation."},
  {"id": 88, "name": "Pseudo Planche Push-Up", "level": "pro", "category": "Push", "desc": "Advanced forward-leaning push-up."},
  {"id": 89, "name": "Handstand Hold", "level": "pro", "category": "Push", "desc": "Advanced inverted balance movement."},
  {"id": 90, "name": "Wall Handstand Push-Up", "level": "pro", "category": "Push", "desc": "Vertical pressing movement performed with wall support."},
  {"id": 91, "name": "Handstand Shoulder Tap", "level": "pro", "category": "Push", "desc": "Handstand balance drill with alternating shoulder taps."},
  {"id": 92, "name": "Explosive Push-Up", "level": "pro", "category": "Push", "desc": "Power-focused push-up with an explosive upward phase."},
  {"id": 93, "name": "Pistol Squat", "level": "pro", "category": "Legs", "desc": "Single-leg squat requiring strength, balance, and mobility."},
  {"id": 94, "name": "Shrimp Squat", "level": "pro", "category": "Legs", "desc": "Advanced single-leg squat variation with the rear leg held behind."},
  {"id": 95, "name": "Nordic Hamstring Curl", "level": "pro", "category": "Legs", "desc": "Advanced hamstring-focused bodyweight eccentric."},
  {"id": 96, "name": "Dragon Flag", "level": "pro", "category": "Core", "desc": "Advanced full-body core movement with a rigid body line."},
  {"id": 97, "name": "Hollow Body Rock", "level": "intermediate", "category": "Core", "desc": "Dynamic hollow-body core drill using controlled rocking."},
  {"id": 98, "name": "L-Sit Hold", "level": "pro", "category": "Core", "desc": "Static support hold with legs extended in front."},
  {"id": 99, "name": "Cossack Squat", "level": "intermediate", "category": "Mobility", "desc": "Lateral squat combining lower-body strength and hip mobility."},
  {"id": 100, "name": "Deep Squat Hold", "level": "beginner", "category": "Mobility", "desc": "Supported or unassisted deep squat hold for lower-body mobility."}
];

const workouts = {
  0: {
    name: "Recovery + Mobility",
    focus: "Recovery • Mobility • Light movement",
    items: [
      ["Easy walk", "15–20 min", "Light cardio", "🚶"],
      ["Gentle stretching", "5–8 min", "Mobility", "🧘"],
      ["Deep breathing", "2–3 min", "Recovery", "🌿"]
    ]
  },

  1: {
    name: "Upper Body + Arms",
    focus: "Chest • Triceps • Biceps • Core",
    items: [
      ["Push-ups", "2 × 8–12", "Chest + triceps", "💪"],
      ["Close-grip push-ups", "2 × 6–10", "Triceps", "🔥"],
      ["Backpack biceps curls", "2 × 10–12", "Biceps", "🎒"],
      ["Forearm plank", "2 × 20–40 sec", "Core", "🧱"]
    ]
  },

  2: {
    name: "Legs + Light Cardio",
    focus: "Legs • Glutes • Fitness",
    items: [
      ["Bodyweight squats", "3 × 10–15", "Quads + glutes", "🦵"],
      ["Reverse lunges", "2 × 8–12 / leg", "Legs + balance", "↩️"],
      ["Glute bridges", "3 × 12–15", "Glutes", "🍑"],
      ["Jumping jacks", "3 × 30 sec", "Conditioning", "⚡"]
    ]
  },

  3: {
    name: "Push + Core",
    focus: "Chest • Shoulders • Triceps • Abs",
    items: [
      ["Push-ups", "3 × 8–15", "Chest + triceps", "💪"],
      ["Pike push-ups", "2 × 6–10", "Shoulders", "⬆️"],
      ["Plank shoulder taps", "2 × 10 / side", "Core + shoulders", "🎯"],
      ["Dead bug", "2 × 8 / side", "Core control", "🧠"]
    ]
  },

  4: {
    name: "Pull + Core",
    focus: "Back • Biceps • Core",
    items: [
      ["Backpack rows", "3 × 10–15", "Back", "🎒"],
      ["Backpack biceps curls", "2 × 10–12", "Biceps", "💪"],
      ["Bird dog", "2 × 8 / side", "Core + balance", "🐦"],
      ["Hollow body hold", "2 × 15–30 sec", "Core", "🔥"]
    ]
  },

  5: {
    name: "Full Body",
    focus: "Strength • Conditioning • Core",
    items: [
      ["Squats", "3 × 10–15", "Legs", "🦵"],
      ["Push-ups", "3 × 8–12", "Upper body", "💪"],
      ["Mountain climbers", "3 × 20", "Conditioning + core", "🏃"],
      ["Plank", "2 × 30–45 sec", "Core", "🧱"]
    ]
  },

  6: {
    name: "Skill + Mobility",
    focus: "Skill practice • Balance • Mobility",
    items: [
      ["Wall handstand hold", "3 × 15–30 sec", "Balance", "🤸"],
      ["Deep squat hold", "2 × 30–45 sec", "Mobility", "🧘"],
      ["Shoulder circles", "2 × 10", "Shoulder mobility", "🔄"],
      ["Cat-cow", "2 × 8", "Spinal mobility", "🐈"]
    ]
  }
};

const STORAGE = "homeCalisthenicsMerged_v2";
const PLAN_STORAGE = STORAGE + "_plans";
const FAV_STORAGE = STORAGE + "_favorites";

let state = JSON.parse(localStorage.getItem(STORAGE) || "{}");
let customPlans = JSON.parse(localStorage.getItem(PLAN_STORAGE) || "[]");
let favorites = new Set(
  JSON.parse(localStorage.getItem(FAV_STORAGE) || "[]").map(Number)
);

let viewDate = new Date();
let selectedDate = new Date();
let draft = [];
let activeLevel = "all";
let favoritesOnly = false;

function $(id) {
  return document.getElementById(id);
}

function key(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function dateFromKey(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function todayKey() {
  return key(new Date());
}

function save() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}

function savePlans() {
  localStorage.setItem(PLAN_STORAGE, JSON.stringify(customPlans));
}

function saveFavorites() {
  localStorage.setItem(FAV_STORAGE, JSON.stringify([...favorites]));
}

function getDay(date) {
  return date.getDay();
}

function workoutFor(date) {
  return workouts[getDay(date)];
}

function customFor(date) {
  return customPlans.filter(plan => plan.date === key(date));
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function levelLabel(level) {
  if (level === "pro") return "Pro";
  if (level === "intermediate") return "Intermediate";
  return "Beginner";
}

function formatDate(date, options) {
  return date.toLocaleDateString(
    undefined,
    options || {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  );
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.toggle("active", section.id === id);
  });

  document.querySelectorAll("[data-section]").forEach(button => {
    button.classList.toggle("active", button.dataset.section === id);
  });

  if (id === "library") renderLibrary();
  if (id === "calendar") renderCalendar();
  if (id === "today") renderWorkout();
  if (id === "planner") {
    $("planDate").value = key(selectedDate);
    renderDraft();
    renderQuick();
    renderPlans();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  $("sidebar")?.classList.remove("open");
}

document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
  });
});

$("menuButton")?.addEventListener("click", () => {
  $("sidebar")?.classList.toggle("open");
});

$("sidebarOverlay")?.addEventListener("click", () => {
  $("sidebar")?.classList.remove("open");
});

function goToday() {
  selectedDate = new Date();
  viewDate = new Date();
  renderCalendar();
  renderWorkout();
  showSection("today");
}

$("goToday")?.addEventListener("click", goToday);

function sessionItemsFor(date) {
  const custom = customFor(date);

  if (custom.length) {
    const items = [];

    custom.forEach(plan => {
      plan.exercises.forEach((id, index) => {
        const exercise = EXERCISES.find(x => x.id === Number(id));

        if (exercise) {
          items.push({
            key: `custom:${plan.id}:${index}`,
            name: exercise.name,
            detail: "Custom workout",
            focus: exercise.category,
            icon: "💪"
          });
        }
      });
    });

    return items;
  }

  const workout = workoutFor(date);

  if (!workout) return [];

  return workout.items.map((item, index) => ({
    key: `default:${index}`,
    name: item[0],
    detail: item[1],
    focus: item[2],
    icon: item[3]
  }));
}

function sessionFor(date) {
  const custom = customFor(date);

  if (custom.length) {
    return {
      name: custom.map(x => x.name).join(" + "),
      focus: "Custom workout • " + custom.length + " saved plan" + (custom.length > 1 ? "s" : ""),
      items: sessionItemsFor(date)
    };
  }

  const workout = workoutFor(date);

  if (!workout) {
    return {
      name: "Rest Day",
      focus: "Recovery",
      items: []
    };
  }

  return {
    name: workout.name,
    focus: workout.focus,
    items: sessionItemsFor(date)
  };
}

function sessionState(date) {
  const k = key(date);

  if (!state[k]) {
    state[k] = {};
  }

  return state[k];
}

function isChecked(date, itemKey) {
  return !!(state[key(date)] && state[key(date)][itemKey]);
}

function setChecked(date, itemKey, checked) {
  const k = key(date);

  if (!state[k]) {
    state[k] = {};
  }

  if (checked) {
    state[k][itemKey] = true;
  } else {
    delete state[k][itemKey];
  }

  save();
}

function sessionProgress(date) {
  const items = sessionItemsFor(date);

  if (!items.length) {
    return {
      done: 0,
      total: 0
    };
  }

  let done = 0;

  items.forEach(item => {
    if (isChecked(date, item.key)) {
      done++;
    }
  });

  return {
    done,
    total: items.length
  };
}

function isComplete(date) {
  const progress = sessionProgress(date);

  return progress.total > 0 && progress.done === progress.total;
}

function renderLibrary() {
  const search = $("search").value.trim().toLowerCase();
  const category = $("category").value;

  const list = EXERCISES.filter(exercise => {
    const matchesSearch =
      !search ||
      exercise.name.toLowerCase().includes(search) ||
      exercise.category.toLowerCase().includes(search) ||
      exercise.desc.toLowerCase().includes(search);

    const matchesCategory =
      category === "all" || exercise.category === category;

    const matchesLevel =
      activeLevel === "all" || exercise.level === activeLevel;

    const matchesFavorites =
      !favoritesOnly || favorites.has(exercise.id);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesFavorites
    );
  });

  $("libraryCount").textContent = list.length;

  $("libraryGrid").innerHTML = list
    .map(exercise => `
      <article class="exercise-card">
        <div class="card-top">
          <span class="level">
            ${esc(levelLabel(exercise.level))} · ${esc(exercise.category)}
          </span>

          <button
            class="fav ${favorites.has(exercise.id) ? "active" : ""}"
            data-fav="${exercise.id}"
            aria-label="Favorite ${esc(exercise.name)}"
          >
            ${favorites.has(exercise.id) ? "★" : "☆"}
          </button>
        </div>

        <h3>${esc(exercise.name)}</h3>

        <p>${esc(exercise.desc)}</p>

        <div class="card-actions">
          <button
            class="primary-mini"
            data-add="${exercise.id}"
          >
            ＋ Add to workout
          </button>
        </div>
      </article>
    `)
    .join("");

  $("empty").classList.toggle("hidden", list.length !== 0);

  document.querySelectorAll("[data-add]").forEach(button => {
    button.onclick = () => {
      addDraft(Number(button.dataset.add));

      $("planDate").value = key(selectedDate);

      showSection("planner");

      showToast("Exercise added to your draft.");
    };
  });

  document.querySelectorAll("[data-fav]").forEach(button => {
    button.onclick = () => {
      const id = Number(button.dataset.fav);

      if (favorites.has(id)) {
        favorites.delete(id);
      } else {
        favorites.add(id);
      }

      saveFavorites();
      renderLibrary();
    };
  });
}

$("search").oninput = renderLibrary;
$("category").onchange = renderLibrary;

$("clearSearch").onclick = () => {
  $("search").value = "";
  renderLibrary();
  $("search").focus();
};

$("favoritesFilter").onclick = () => {
  favoritesOnly = !favoritesOnly;

  $("favoritesFilter").classList.toggle(
    "active",
    favoritesOnly
  );

  renderLibrary();
};

document.querySelectorAll("#levels button").forEach(button => {
  button.onclick = () => {
    activeLevel = button.dataset.level;

    document
      .querySelectorAll("#levels button")
      .forEach(other => other.classList.remove("active"));

    button.classList.add("active");

    renderLibrary();
  };
});

function renderCalendar() {
  const y = viewDate.getFullYear();
  const m = viewDate.getMonth();

  const first = new Date(y, m, 1);

  const start = (first.getDay() + 6) % 7;

  const days = new Date(
    y,
    m + 1,
    0
  ).getDate();

  $("monthTitle").textContent =
    viewDate.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric"
    });

  let html = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ]
    .map(day => `<div class="weekday">${day}</div>`)
    .join("");

  for (let i = 0; i < start; i++) {
    html += `<div class="day muted"></div>`;
  }

  for (let n = 1; n <= days; n++) {
    const date = new Date(y, m, n);

    const dateKey = key(date);

    const custom = customFor(date);

    const complete = isComplete(date);

    const today = dateKey === todayKey();

    const selected =
      dateKey === key(selectedDate);

    const dayName = custom.length
      ? custom.map(plan => plan.name).join(" + ")
      : workoutFor(date)?.name || "Rest Day";

    html += `
      <button
        class="day
          ${today ? "today " : ""}
          ${selected ? "selected " : ""}
          ${complete ? "complete" : ""}
        "
        data-day="${dateKey}"
      >
        <span class="num">${n}</span>

        ${complete ? `<span class="mark">✓</span>` : ""}

        <div class="day-name">
          ${esc(dayName)}
        </div>

        ${
          custom.length
            ? `<div class="day-name">
                ✦ ${custom.length} custom
              </div>`
            : ""
        }
      </button>
    `;
  }

  $("calendar").innerHTML = html;

  document.querySelectorAll("[data-day]").forEach(button => {
    button.onclick = () => {
      selectedDate = dateFromKey(button.dataset.day);

      renderCalendar();
      renderWorkout();

      showSection("today");
    };
  });

  renderStats();
}

$("prevMonth").onclick = () => {
  viewDate = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() - 1,
    1
  );

  renderCalendar();
};

$("nextMonth").onclick = () => {
  viewDate = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    1
  );

  renderCalendar();
};

$("todayCal").onclick = goToday;

$("changeDay").onclick = () => {
  showSection("calendar");
};

function renderWorkout() {
  const date = selectedDate;

  const session = sessionFor(date);

  const progress = sessionProgress(date);

  $("workoutTitle").textContent =
    session.name;

  $("workoutSubtitle").textContent =
    session.focus;

  $("dayBadge").textContent =
    date
      .toLocaleDateString(undefined, {
        weekday: "short"
      })
      .toUpperCase();

  $("selectedDateLabel").textContent =
    formatDate(date);

  $("exerciseList").innerHTML =
    session.items.length
      ? session.items
          .map(item => {
            const checked =
              isChecked(date, item.key);

            return `
              <label
                class="workout-item
                  ${checked ? "checked" : ""}
                "
              >
                <input
                  type="checkbox"
                  data-check="${esc(item.key)}"
                  ${checked ? "checked" : ""}
                >

                <span class="workout-icon">
                  ${item.icon}
                </span>

                <span class="workout-copy">
                  <strong>
                    ${esc(item.name)}
                  </strong>

                  <small>
                    ${esc(item.detail)}
                    ·
                    ${esc(item.focus)}
                  </small>
                </span>
              </label>
            `;
          })
          .join("")
      : `
          <div class="empty">
            No exercises scheduled for this date.
          </div>
        `;

  $("completionBanner").classList.toggle(
    "hidden",
    !isComplete(date)
  );

  $("sessionProgress").textContent =
    `${progress.done} / ${progress.total}`;

  $("sessionBar").style.width =
    (
      progress.total
        ? (progress.done / progress.total) * 100
        : 0
    ) + "%";

  $("sideDate").textContent =
    key(date) === todayKey()
      ? "Today"
      : formatDate(
          date,
          {
            month: "short",
            day: "numeric"
          }
        );

  document.querySelectorAll("[data-check]").forEach(input => {
    input.onchange = () => {
      setChecked(
        date,
        input.dataset.check,
        input.checked
      );

      renderWorkout();
      renderCalendar();
    };
  });

  $("resetDay").onclick = () => {
    resetDay(date);
  };
}

function resetDay(date) {
  delete state[key(date)];

  save();

  renderWorkout();
  renderCalendar();

  showToast("Day progress reset.");
}

function completedDates() {
  return Object.keys(state).filter(dateKeyValue =>
    isComplete(dateFromKey(dateKeyValue))
  );
}

function weekDays() {
  const date = new Date();

  const mondayIndex =
    (date.getDay() + 6) % 7;

  const start = new Date(date);

  start.setDate(
    date.getDate() - mondayIndex
  );

  return Array.from(
    { length: 7 },
    (_, index) => {
      const day = new Date(start);

      day.setDate(
        start.getDate() + index
      );

      return day;
    }
  );
}

function renderStats() {
  const week = weekDays();

  const done =
    week.filter(isComplete).length;

  $("weekProgress").textContent =
    Math.round((done / 7) * 100) + "%";

  $("totalWorkouts").textContent =
    completedDates().length;

  $("exerciseProgress").textContent =
    week.reduce(
      (sum, date) =>
        sum + sessionProgress(date).done,
      0
    );

  $("sideStreak").textContent =
    calculateStreak();
}

function calculateStreak() {
  let date = new Date();

  let count = 0;

  while (isComplete(date)) {
    count++;

    date.setDate(
      date.getDate() - 1
    );
  }

  return count;
}

function addDraft(id) {
  if (
    draft.some(exercise =>
      exercise.id === id
    )
  ) {
    showToast(
      "That exercise is already in the draft."
    );

    return;
  }

  const exercise =
    EXERCISES.find(
      item => item.id === id
    );

  if (!exercise) return;

  draft.push(exercise);

  renderDraft();
  renderQuick();
}

function renderDraft() {
  $("draftCount").textContent =
    draft.length;

  $("draftList").innerHTML =
    draft.length
      ? draft
          .map(
            (exercise, index) => `
              <div class="draft-item">
                <div>
                  <strong>
                    ${esc(exercise.name)}
                  </strong>

                  <span>
                    ${esc(exercise.category)}
                    ·
                    ${esc(levelLabel(exercise.level))}
                  </span>
                </div>

                <button
                  data-remove-draft="${index}"
                >
                  Remove
                </button>
              </div>
            `
          )
          .join("")
      : `
          <div
            style="
              color:#6f7b8e;
              font-size:9px
            "
          >
            No exercises selected yet.
            Add some from the library.
          </div>
        `;

  document
    .querySelectorAll("[data-remove-draft]")
    .forEach(button => {
      button.onclick = () => {
        draft.splice(
          Number(button.dataset.removeDraft),
          1
        );

        renderDraft();
        renderQuick();
      };
    });
}

function renderQuick() {
  const query =
    $("quickSearch").value
      .trim()
      .toLowerCase();

  const list =
    EXERCISES
      .filter(exercise =>
        !query ||
        exercise.name
          .toLowerCase()
          .includes(query) ||
        exercise.category
          .toLowerCase()
          .includes(query)
      )
      .slice(0, 40);

  $("quickList").innerHTML =
    list
      .map(
        exercise => `
          <div class="quick-item">
            <div>
              <strong>
                ${esc(exercise.name)}
              </strong>

              <span>
                ${esc(exercise.category)}
                ·
                ${esc(levelLabel(exercise.level))}
              </span>
            </div>

            <button
              data-quick="${exercise.id}"
            >
              ＋ Add
            </button>
          </div>
        `
      )
      .join("");

  document
    .querySelectorAll("[data-quick]")
    .forEach(button => {
      button.onclick = () => {
        addDraft(
          Number(button.dataset.quick)
        );
      };
    });
}

$("quickSearch").oninput =
  renderQuick;

$("planDate").value =
  key(selectedDate);

$("savePlan").onclick = () => {
  const name =
    $("planName").value.trim() ||
    "Custom Workout";

  const date =
    $("planDate").value;

  if (!date) {
    showToast(
      "Choose a date first."
    );

    return;
  }

  if (!draft.length) {
    showToast(
      "Add at least one exercise."
    );

    return;
  }

  const plan = {
    id:
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .slice(2, 7),

    name,

    date,

    notes:
      $("planNotes").value.trim(),

    exercises:
      draft.map(
        exercise => exercise.id
      )
  };

  customPlans.push(plan);

  savePlans();

  selectedDate =
    dateFromKey(date);

  viewDate =
    new Date(selectedDate);

  draft = [];

  $("planName").value = "";
  $("planNotes").value = "";

  renderDraft();
  renderPlans();
  renderCalendar();
  renderWorkout();

  showToast(
    "Workout saved to your calendar."
  );
};

function renderPlans() {
  $("savedCount").textContent =
    customPlans.length;

  $("savedList").innerHTML =
    customPlans.length
      ? customPlans
          .slice()
          .reverse()
          .map(
            plan => `
              <div class="saved-item">
                <div>
                  <h4>
                    ${esc(plan.name)}
                  </h4>

                  <p>
                    ${
                      new Date(
                        plan.date +
                        "T12:00:00"
                      ).toLocaleDateString(
                        undefined,
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        }
                      )
                    }

                    ·
                    ${plan.exercises.length}
                    exercises

                    ${
                      plan.notes
                        ? " · " +
                          esc(plan.notes)
                        : ""
                    }
                  </p>
                </div>

                <button
                  data-open="${plan.id}"
                >
                  Open
                </button>

                <button
                  data-del="${plan.id}"
                >
                  Delete
                </button>
              </div>
            `
          )
          .join("")
      : `
          <div
            style="
              color:#6f7b8e;
              font-size:9px
            "
          >
            No custom workouts saved yet.
          </div>
        `;

  document
    .querySelectorAll("[data-open]")
    .forEach(button => {
      button.onclick = () => {
        const plan =
          customPlans.find(
            item =>
              item.id ===
              button.dataset.open
          );

        if (!plan) return;

        selectedDate =
          dateFromKey(plan.date);

        viewDate =
          new Date(selectedDate);

        showSection("today");
      };
    });

  document
    .querySelectorAll("[data-del]")
    .forEach(button => {
      button.onclick = () => {
        const plan =
          customPlans.find(
            item =>
              item.id ===
              button.dataset.del
          );

        customPlans =
          customPlans.filter(
            item =>
              item.id !==
              button.dataset.del
          );

        savePlans();

        if (plan) {
          delete state[plan.date];
        }

        save();

        renderPlans();
        renderCalendar();
        renderWorkout();

        showToast(
          "Custom workout deleted."
        );
      };
    });
}

$("exportData").onclick = () => {
  const payload = {
    version: 2,
    exportedAt:
      new Date().toISOString(),
    progress: state,
    plans: customPlans,
    favorites: [...favorites]
  };

  const blob = new Blob(
    [
      JSON.stringify(
        payload,
        null,
        2
      )
    ],
    {
      type: "application/json"
    }
  );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "calisthenics-tracker-backup.json";

  link.click();

  URL.revokeObjectURL(
    link.href
  );

  showToast(
    "Backup exported."
  );
};

$("importData").onclick = () => {
  $("importFile").click();
};

$("importFile").onchange =
  async event => {
    const file =
      event.target.files[0];

    if (!file) return;

    try {
      const payload =
        JSON.parse(
          await file.text()
        );

      if (
        !payload ||
        typeof payload !== "object"
      ) {
        throw new Error();
      }

      state =
        payload.progress &&
        typeof payload.progress ===
          "object"
          ? payload.progress
          : {};

      customPlans =
        Array.isArray(payload.plans)
          ? payload.plans
          : [];

      favorites =
        new Set(
          Array.isArray(
            payload.favorites
          )
            ? payload.favorites.map(
                Number
              )
            : []
        );

      save();
      savePlans();
      saveFavorites();

      renderLibrary();
      renderCalendar();
      renderWorkout();
      renderPlans();
      renderStats();

      showToast(
        "Backup imported."
      );
    } catch (error) {
      showToast(
        "That backup file is not valid."
      );
    }

    event.target.value = "";
  };

$("resetAll").onclick = () => {
  if (
    !confirm(
      "Reset all tracker data, custom workouts and favorites? This cannot be undone."
    )
  ) {
    return;
  }

  localStorage.removeItem(
    STORAGE
  );

  localStorage.removeItem(
    PLAN_STORAGE
  );

  localStorage.removeItem(
    FAV_STORAGE
  );

  state = {};

  customPlans = [];

  favorites = new Set();

  draft = [];

  renderLibrary();
  renderCalendar();
  renderWorkout();
  renderDraft();
  renderPlans();
  renderStats();

  showToast(
    "All tracker data reset."
  );
};

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      $("search").value = "";
      $("quickSearch").value = "";

      renderLibrary();
      renderQuick();
    }
  }
);

renderLibrary();
renderCalendar();
renderWorkout();
renderDraft();
renderQuick();
renderPlans();
renderStats();
