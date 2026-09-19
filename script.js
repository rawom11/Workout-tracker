const EXERCISES=[{"id": 1, "name": "Wall Push-Up", "level": "beginner", "category": "Push", "desc": "Standing push variation using a wall."}, {"id": 2, "name": "Incline Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up variation using a stable elevated surface."}, {"id": 3, "name": "Knee Push-Up", "level": "beginner", "category": "Push", "desc": "Modified push-up with knees supported."}, {"id": 4, "name": "Standard Push-Up", "level": "beginner", "category": "Push", "desc": "Classic bodyweight horizontal push."}, {"id": 5, "name": "Wide Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up with a wider hand position."}, {"id": 6, "name": "Close Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up with hands closer together."}, {"id": 7, "name": "Scapular Push-Up", "level": "beginner", "category": "Push", "desc": "Controlled shoulder-blade movement from a plank."}, {"id": 8, "name": "Push-Up Pause", "level": "beginner", "category": "Push", "desc": "Push-up with a brief controlled pause."}, {"id": 9, "name": "Slow Push-Up", "level": "beginner", "category": "Push", "desc": "Push-up emphasizing a slow, controlled tempo."}, {"id": 10, "name": "Pike Hold", "level": "beginner", "category": "Push", "desc": "Static pike position for shoulder control."}, {"id": 11, "name": "Wall Plank", "level": "beginner", "category": "Push", "desc": "Standing plank-style position against a wall."}, {"id": 12, "name": "Bear Plank", "level": "beginner", "category": "Push", "desc": "Hands-and-feet support position with knees hovering."}, {"id": 13, "name": "Bodyweight Squat", "level": "beginner", "category": "Legs", "desc": "Basic lower-body squat."}, {"id": 14, "name": "Box Squat to Stable Surface", "level": "beginner", "category": "Legs", "desc": "Squat pattern using a stable surface as a depth guide."}, {"id": 15, "name": "Reverse Lunge", "level": "beginner", "category": "Legs", "desc": "Controlled step-back lunge."}, {"id": 16, "name": "Forward Lunge", "level": "beginner", "category": "Legs", "desc": "Controlled step-forward lunge."}, {"id": 17, "name": "Split Squat", "level": "beginner", "category": "Legs", "desc": "Stationary single-leg squat pattern."}, {"id": 18, "name": "Glute Bridge", "level": "beginner", "category": "Legs", "desc": "Floor-based hip extension movement."}, {"id": 19, "name": "Calf Raise", "level": "beginner", "category": "Legs", "desc": "Standing calf-strength movement."}, {"id": 20, "name": "Wall Sit", "level": "beginner", "category": "Legs", "desc": "Static seated position against a wall."}, {"id": 21, "name": "March in Place", "level": "beginner", "category": "Legs", "desc": "Low-impact alternating knee lift."}, {"id": 22, "name": "Step-Back Squat", "level": "beginner", "category": "Legs", "desc": "Squat followed by an alternating step back."}, {"id": 23, "name": "Good Morning", "level": "beginner", "category": "Legs", "desc": "Hip-hinge movement with bodyweight only."}, {"id": 24, "name": "Standing Hip Abduction", "level": "beginner", "category": "Legs", "desc": "Controlled side leg lift."}, {"id": 25, "name": "Standing Hip Extension", "level": "beginner", "category": "Legs", "desc": "Controlled backward leg movement."}, {"id": 26, "name": "Dead Bug", "level": "beginner", "category": "Core", "desc": "Controlled core movement performed on the floor."}, {"id": 27, "name": "Bird Dog", "level": "beginner", "category": "Core", "desc": "Opposite arm-and-leg balance exercise."}, {"id": 28, "name": "Forearm Plank", "level": "beginner", "category": "Core", "desc": "Static full-body plank on the forearms."}, {"id": 29, "name": "High Plank", "level": "beginner", "category": "Core", "desc": "Static plank on straight arms."}, {"id": 30, "name": "Side Plank from Knees", "level": "beginner", "category": "Core", "desc": "Modified side plank with knees supported."}, {"id": 31, "name": "Glute Bridge March", "level": "beginner", "category": "Core", "desc": "Alternating march from a bridge position."}, {"id": 32, "name": "Heel Taps", "level": "beginner", "category": "Core", "desc": "Alternating heel reach from a floor position."}, {"id": 33, "name": "Knee-to-Chest Crunch", "level": "beginner", "category": "Core", "desc": "Controlled abdominal flexion."}, {"id": 34, "name": "Seated Knee Tuck", "level": "beginner", "category": "Core", "desc": "Seated core movement with controlled knee motion."}, {"id": 35, "name": "Standing Knee Drive", "level": "beginner", "category": "Core", "desc": "Alternating knee drive with upright posture."}, {"id": 36, "name": "Cat-Cow", "level": "beginner", "category": "Mobility", "desc": "Gentle spinal mobility sequence."}, {"id": 37, "name": "Child's Pose", "level": "beginner", "category": "Mobility", "desc": "Gentle recovery and mobility position."}, {"id": 38, "name": "World's Greatest Stretch", "level": "beginner", "category": "Mobility", "desc": "Multi-directional mobility sequence."}, {"id": 39, "name": "Hip Flexor Stretch", "level": "beginner", "category": "Mobility", "desc": "Gentle front-of-hip stretch."}, {"id": 40, "name": "Hamstring Stretch", "level": "beginner", "category": "Mobility", "desc": "Gentle posterior-leg stretch."}, {"id": 41, "name": "Shoulder Circles", "level": "beginner", "category": "Mobility", "desc": "Controlled shoulder circles."}, {"id": 42, "name": "Thoracic Rotation", "level": "beginner", "category": "Mobility", "desc": "Gentle upper-back rotation."}, {"id": 43, "name": "Ankle Rocks", "level": "beginner", "category": "Mobility", "desc": "Controlled ankle mobility drill."}, {"id": 44, "name": "Neck Mobility", "level": "beginner", "category": "Mobility", "desc": "Gentle neck range-of-motion movements."}, {"id": 45, "name": "Standing Side Bend", "level": "beginner", "category": "Mobility", "desc": "Gentle side-body mobility."}, {"id": 46, "name": "Diamond Push-Up", "level": "intermediate", "category": "Push", "desc": "Narrow-hand push-up variation."}, {"id": 47, "name": "Decline Push-Up", "level": "intermediate", "category": "Push", "desc": "Push-up with feet on a stable elevated surface."}, {"id": 48, "name": "Pike Push-Up", "level": "intermediate", "category": "Push", "desc": "Bodyweight shoulder-focused push-up."}, {"id": 49, "name": "Explosive Push-Up", "level": "intermediate", "category": "Push", "desc": "Fast upward push emphasizing power."}, {"id": 50, "name": "Archer Push-Up Prep", "level": "intermediate", "category": "Push", "desc": "Uneven loading preparation for advanced pushing."}, {"id": 51, "name": "Push-Up 1.5 Rep", "level": "intermediate", "category": "Push", "desc": "Push-up using a partial-rep variation."}, {"id": 52, "name": "Tempo Diamond Push-Up", "level": "intermediate", "category": "Push", "desc": "Narrow push-up with deliberate tempo."}, {"id": 53, "name": "Pseudo Planche Lean", "level": "intermediate", "category": "Push", "desc": "Forward-leaning bodyweight support drill."}, {"id": 54, "name": "Cossack Squat", "level": "intermediate", "category": "Legs", "desc": "Side-to-side squat emphasizing mobility and strength."}, {"id": 55, "name": "Bulgarian Split Squat", "level": "intermediate", "category": "Legs", "desc": "Single-leg squat with rear foot on a stable surface."}, {"id": 56, "name": "Jump Squat", "level": "intermediate", "category": "Legs", "desc": "Squat pattern with a controlled jump."}, {"id": 57, "name": "Single-Leg Calf Raise", "level": "intermediate", "category": "Legs", "desc": "Calf raise performed one leg at a time."}, {"id": 58, "name": "Lateral Lunge", "level": "intermediate", "category": "Legs", "desc": "Side-stepping lunge pattern."}, {"id": 59, "name": "Curtsy Lunge", "level": "intermediate", "category": "Legs", "desc": "Diagonal step-back lunge variation."}, {"id": 60, "name": "Reverse Lunge to Knee Drive", "level": "intermediate", "category": "Legs", "desc": "Lunge followed by an upright knee drive."}, {"id": 61, "name": "Skater Squat Prep", "level": "intermediate", "category": "Legs", "desc": "Single-leg squat balance progression."}, {"id": 62, "name": "Single-Leg Glute Bridge", "level": "intermediate", "category": "Legs", "desc": "Bridge performed with one leg extended."}, {"id": 63, "name": "Wall Sit March", "level": "intermediate", "category": "Legs", "desc": "Alternating leg lift from a wall sit."}, {"id": 64, "name": "Hollow Body Hold", "level": "intermediate", "category": "Core", "desc": "Static hollow-body trunk position."}, {"id": 65, "name": "V-Up", "level": "intermediate", "category": "Core", "desc": "Dynamic full-body abdominal movement."}, {"id": 66, "name": "Leg Raise", "level": "intermediate", "category": "Core", "desc": "Controlled straight-leg raise from the floor."}, {"id": 67, "name": "Side Plank", "level": "intermediate", "category": "Core", "desc": "Full side plank hold."}, {"id": 68, "name": "Plank Shoulder Tap", "level": "intermediate", "category": "Core", "desc": "Alternating shoulder taps from a high plank."}, {"id": 69, "name": "Bear Crawl", "level": "intermediate", "category": "Core", "desc": "Controlled crawling pattern on hands and feet."}, {"id": 70, "name": "Mountain Climber", "level": "intermediate", "category": "Core", "desc": "Alternating knee-drive movement from plank."}, {"id": 71, "name": "Reverse Crunch", "level": "intermediate", "category": "Core", "desc": "Controlled lower-abdominal curl."}, {"id": 72, "name": "Bicycle Crunch", "level": "intermediate", "category": "Core", "desc": "Alternating rotational abdominal movement."}, {"id": 73, "name": "Plank Walk", "level": "intermediate", "category": "Core", "desc": "Controlled hand movement while maintaining a plank."}, {"id": 74, "name": "Hollow Rock Prep", "level": "intermediate", "category": "Core", "desc": "Gentle rocking preparation for hollow-body control."}, {"id": 75, "name": "Burpee", "level": "intermediate", "category": "Full Body", "desc": "Full-body squat-to-plank movement."}, {"id": 76, "name": "Squat Thrust", "level": "intermediate", "category": "Full Body", "desc": "Dynamic squat-to-plank movement without a jump."}, {"id": 77, "name": "Inchworm", "level": "intermediate", "category": "Full Body", "desc": "Walkout movement combining mobility and core control."}, {"id": 78, "name": "Bear Walk", "level": "intermediate", "category": "Full Body", "desc": "Low crawling movement using bodyweight."}, {"id": 79, "name": "Crab Walk", "level": "intermediate", "category": "Full Body", "desc": "Reverse-support crawling movement."}, {"id": 80, "name": "Lateral Bear Crawl", "level": "intermediate", "category": "Full Body", "desc": "Sideways crawling pattern."}, {"id": 81, "name": "Jumping Jack", "level": "intermediate", "category": "Full Body", "desc": "Low-complexity full-body conditioning movement."}, {"id": 82, "name": "High Knees", "level": "intermediate", "category": "Full Body", "desc": "Alternating fast knee-drive conditioning."}, {"id": 83, "name": "Plank to Down Dog", "level": "intermediate", "category": "Mobility", "desc": "Controlled transition between plank and downward-facing position."}, {"id": 84, "name": "Deep Squat Hold", "level": "intermediate", "category": "Mobility", "desc": "Supported or controlled deep squat mobility hold."}, {"id": 85, "name": "90/90 Hip Switch", "level": "intermediate", "category": "Mobility", "desc": "Controlled hip rotation drill."}, {"id": 86, "name": "Archer Push-Up", "level": "pro", "category": "Push", "desc": "Advanced uneven-loading push-up."}, {"id": 87, "name": "Typewriter Push-Up", "level": "pro", "category": "Push", "desc": "Advanced side-to-side push-up variation."}, {"id": 88, "name": "Pseudo Planche Push-Up", "level": "pro", "category": "Push", "desc": "Advanced forward-leaning push-up."}, {"id": 89, "name": "Handstand Hold", "level": "pro", "category": "Push", "desc": "Advanced inverted balance movement;
const workouts={
  1:{name:"Upper Body + Arms",focus:"Chest • Triceps • Biceps • Core",items:[
    ["Push-ups","2 × 8–12","Chest + triceps","💪"],["Close-grip push-ups","2 × 6–10","Triceps","🔥"],
    ["Backpack biceps curls","2 × 10–12","Biceps","🎒"],["Forearm plank","2 × 20–40 sec","Core","⚡"]]},
  2:{name:"Legs + Light Cardio",focus:"Legs • Glutes • Fitness",items:[
    ["Bodyweight squats","2 × 12–15","Legs","🦵"],["Reverse lunges","2 × 8 each leg","Legs + balance","🏃"],
    ["Calf raises","2 × 15–20","Calves","👟"],["Brisk walk / easy sport","15–20 min","Cardio","🚴"]]},
  3:{name:"Core + Mobility",focus:"Abs • Core stability • Mobility",items:[
    ["Dead bugs","2 × 8 each side","Core","🪲"],["Forearm plank","2 × 20–40 sec","Core","⚡"],
    ["Bird dogs","2 × 8 each side","Core + balance","🐕"],["Gentle stretching","3–5 min","Mobility","🧘"]]},
  4:{name:"Upper Body + Arms",focus:"Chest • Triceps • Biceps",items:[
    ["Push-ups","2 × 8–12","Chest + triceps","💪"],["Close-grip push-ups","2 × 6–10","Triceps","🔥"],
    ["Backpack biceps curls","2 × 10–12","Biceps","🎒"],["Shoulder mobility","3 min","Shoulders","🔄"]]},
  5:{name:"Legs + Core",focus:"Legs • Glutes • Abs",items:[
    ["Bodyweight squats","2 × 12–15","Legs","🦵"],["Glute bridges","2 × 12–15","Glutes","🌉"],
    ["Dead bugs","2 × 8 each side","Core","🪲"],["Side plank","2 × 15–30 sec / side","Obliques + core","↔️"]]},
  6:{name:"Sports + Fun Activity",focus:"Badminton • Volleyball • Cycling • Walking",items:[
    ["Badminton / volleyball","20–40 min","Cardio + coordination","🏸"],["OR cycling","20–40 min","Cardio","🚲"],
    ["Easy walk","20–40 min","Active recovery","🚶"],["Cool-down stretch","3–5 min","Recovery","🧘"]]},
  0:{name:"Recovery Day",focus:"Recovery • Easy movement",items:[
    ["Easy walk","10–20 min","Light movement","🚶"],["Gentle stretching","5–10 min","Mobility","🧘"],
    ["Hydration + normal meals","—","Recovery","💧"],["Good sleep","8–10 hours","Recovery","😴"]]}
};
const STORAGE="homeCalisthenicsMerged_v1";
let state=JSON.parse(localStorage.getItem(STORAGE)||"{}");
let customPlans=JSON.parse(localStorage.getItem(STORAGE+"_plans")||"[]");
let viewDate=new Date(), selectedDate=new Date(), draft=[];
const $=id=>document.getElementById(id);
const key=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const todayKey=()=>key(new Date());
const save=()=>localStorage.setItem(STORAGE,JSON.stringify(state));
const savePlans=()=>localStorage.setItem(STORAGE+"_plans",JSON.stringify(customPlans));
const getDay=d=>state[key(d)]||[];
const workoutFor=d=>workouts[d.getDay()];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const levelLabel=l=>l==="pro"?"PRO":l.toUpperCase();

function isComplete(d){
 const w=workoutFor(d),done=getDay(d);
 return !!w && done.length===w.items.length;
}
function formatDate(d){return d.toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric",year:"numeric"});}

function showSection(id){
 document.querySelectorAll(".section").forEach(s=>s.classList.toggle("active",s.id===id));
 document.querySelectorAll(".side-link").forEach(b=>b.classList.toggle("active",b.dataset.section===id));
 if(id==="library")renderLibrary();
 if(id==="calendar")renderCalendar();
 if(id==="today")renderWorkout();
 if(id==="planner"){renderDraft();renderQuick();renderPlans();}
 window.scrollTo({top:0,behavior:"smooth"});
 document.querySelector(".sidebar").classList.remove("open");
}
document.querySelectorAll(".side-link").forEach(b=>b.onclick=()=>showSection(b.dataset.section));
$("menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");

function renderLibrary(){
 const q=$("search").value.toLowerCase().trim(),level=document.querySelector("#levels .active").dataset.level,cat=$("category").value;
 const items=EXERCISES.filter(e=>(level==="all"||e.level===level)&&(cat==="all"||e.category===cat)&&(!q||`${e.name} ${e.category} ${e.level} ${e.desc}`.toLowerCase().includes(q)));
 $("exerciseCount").textContent=items.length;$("summary").textContent=`${level==="all"?"ALL LEVELS":levelLabel(level)} · ${cat==="all"?"ALL CATEGORIES":cat}`;
 $("libraryGrid").innerHTML=items.map(e=>`<article class="exercise-card"><div class="card-top"><span class="tag ${e.level}">${levelLabel(e.level)}</span><span class="cat">${esc(e.category)}</span></div><h2>${esc(e.name)}</h2><p>${esc(e.desc)}</p><div class="card-foot"><span class="id">#${String(e.id).padStart(3,"0")}</span><button class="add-btn" data-add="${e.id}">+ Add to workout</button></div></article>`).join("");
 $("empty").classList.toggle("hidden",items.length>0);
 document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{addDraft(Number(b.dataset.add));showSection("planner");});
}
$("search").oninput=()=>{$("clearSearch").classList.toggle("show",!!$("search").value);renderLibrary()};
$("clearSearch").onclick=()=>{$("search").value="";$("clearSearch").classList.remove("show");renderLibrary()};
$("category").onchange=renderLibrary;
document.querySelectorAll("#levels button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#levels button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderLibrary()});

function renderCalendar(){
 const cal=$("calendar"),y=viewDate.getFullYear(),m=viewDate.getMonth();
 $("monthTitle").textContent=viewDate.toLocaleDateString(undefined,{month:"long",year:"numeric"});
 cal.innerHTML=["SUN","MON","TUE","WED","THU","FRI","SAT"].map(x=>`<div class="weekday">${x}</div>`).join("");
 const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
 for(let i=0;i<first;i++)cal.innerHTML+=`<div class="day empty"></div>`;
 for(let n=1;n<=days;n++){
   const d=new Date(y,m,n),k=key(d),w=workoutFor(d),complete=isComplete(d);
   const custom=customPlans.filter(p=>p.date===k);
   const b=document.createElement("button");b.className="day";
   if(k===todayKey())b.classList.add("today"); if(d.getDay()>=1&&d.getDay()<=6)b.classList.add("workout-day");
   if(k===key(selectedDate))b.classList.add("selected");if(complete)b.classList.add("completed");
   b.innerHTML=`<span class="day-number">${n}</span><span class="day-name">${esc(w.name)}</span>${custom.length?`<span class="day-name" style="color:#a99aff">+ ${custom.length} planned</span>`:""}${complete?'<span class="check">✓</span>':""}`;
   b.onclick=()=>{selectedDate=d;renderCalendar();renderWorkout();showSection("today");};
   cal.appendChild(b);
 }
 renderStats();
}
$("prevMonth").onclick=()=>{viewDate.setMonth(viewDate.getMonth()-1);renderCalendar()};
$("nextMonth").onclick=()=>{viewDate.setMonth(viewDate.getMonth()+1);renderCalendar()};
$("todayCal").onclick=goToday;

function renderWorkout(){
 const d=selectedDate,w=workoutFor(d),done=getDay(d);
 $("workoutTitle").textContent=w.name;$("workoutSubtitle").textContent=`${formatDate(d)} • ${w.focus}`;
 $("selectedDateLabel").textContent=formatDate(d);$("dayBadge").textContent=d.toLocaleDateString(undefined,{weekday:"short"}).toUpperCase();
 $("sideDate").textContent=key(d)===todayKey()?"Today":d.toLocaleDateString(undefined,{month:"short",day:"numeric"});
 $("exerciseList").innerHTML=w.items.map((item,i)=>`<label class="workout-item ${done.includes(i)?"done":""}"><div class="exercise-art">${item[3]}</div><div><h4>${esc(item[0])}</h4><p>${esc(item[1])} • ${esc(item[2])}</p></div><input type="checkbox" ${done.includes(i)?"checked":""}></label>`).join("");
 document.querySelectorAll("#exerciseList input").forEach((input,i)=>input.onchange=e=>{let arr=getDay(d);state[key(d)]=e.target.checked?[...new Set([...arr,i])]:arr.filter(x=>x!==i);save();renderWorkout();renderCalendar();renderStats();});
 const pct=Math.round(done.length/w.items.length*100);$("sessionProgress").textContent=`${done.length} / ${w.items.length}`;$("sessionBar").style.width=pct+"%";$("completionBanner").classList.toggle("hidden",pct!==100);
}
$("resetDay").onclick=()=>{if(confirm("Reset all exercises for this day?")){delete state[key(selectedDate)];save();renderWorkout();renderCalendar();renderStats()}};
$("changeDay").onclick=()=>showSection("calendar");

function completedDates(){return Object.keys(state).filter(k=>state[k]?.length===workouts[new Date(k+"T12:00:00").getDay()].items.length)}
function renderStats(){
 const now=new Date(),start=new Date(now);start.setDate(now.getDate()-((now.getDay()+6)%7));let weekDays=0,weekEx=0;
 for(let i=0;i<7;i++){let d=new Date(start);d.setDate(start.getDate()+i);if(isComplete(d))weekDays++;if(d<=now)weekEx+=getDay(d).length}
 $("weekProgress").textContent=Math.round(weekDays/7*100)+"%";$("totalWorkouts").textContent=completedDates().length;$("exerciseProgress").textContent=weekEx;
 let streak=0,d=new Date();if(!isComplete(d))d.setDate(d.getDate()-1);while(isComplete(d)){streak++;d.setDate(d.getDate()-1)}$("sideStreak").textContent=streak;
}
function goToday(){viewDate=new Date();selectedDate=new Date();renderCalendar();renderWorkout();showSection("today")}
$("sideToday").onclick=goToday;$("mobileToday").onclick=goToday;

function addDraft(id){const e=EXERCISES.find(x=>x.id===id);if(e&&!draft.some(x=>x.id===id)){draft.push(e);renderDraft()}}
function renderDraft(){$("draftCount").textContent=draft.length;$("draftList").innerHTML=draft.length?draft.map((e,i)=>`<div class="draft-item"><small>${i+1}</small><strong>${esc(e.name)}</strong><small>${esc(e.category)}</small><button class="remove" data-remove="${e.id}">×</button></div>`).join(""):`<div style="color:#6f7b8e;font-size:9px;padding:8px 0">Add exercises from the library or search on the right.</div>`;document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{draft=draft.filter(x=>x.id!==Number(b.dataset.remove));renderDraft()})}
function renderQuick(){const q=$("quickSearch").value.toLowerCase().trim();const items=EXERCISES.filter(e=>!q||`${e.name} ${e.category} ${e.level}`.toLowerCase().includes(q)).slice(0,20);$("quickList").innerHTML=items.map(e=>`<div class="quick-item"><strong>${esc(e.name)}</strong><small>${levelLabel(e.level)} · ${esc(e.category)}</small><button data-qadd="${e.id}">+ Add</button></div>`).join("");document.querySelectorAll("[data-qadd]").forEach(b=>b.onclick=()=>{addDraft(Number(b.dataset.qadd));renderQuick()})}
$("quickSearch").oninput=renderQuick;
$("planDate").value=key(selectedDate);
$("savePlan").onclick=()=>{if(!draft.length){alert("Add at least one exercise.");return}const name=$("planName").value.trim()||"Custom Workout";const date=$("planDate").value||key(selectedDate);customPlans.push({id:String(Date.now()),name,date,notes:$("planNotes").value.trim(),exercises:draft.map(e=>({id:e.id,name:e.name}))});savePlans();draft=[];$("planName").value="";$("planNotes").value="";selectedDate=new Date(date+"T12:00:00");viewDate=new Date(date+"T12:00:00");renderDraft();renderPlans();renderCalendar();alert("Workout added to your calendar.")};
function renderPlans(){$("savedCount").textContent=customPlans.length;$("savedList").innerHTML=customPlans.length?customPlans.slice().reverse().map(p=>`<div class="saved-item"><h4>${esc(p.name)}</h4><p>${new Date(p.date+"T12:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"})} · ${p.exercises.length} exercises${p.notes?" · "+esc(p.notes):""}</p><button data-del="${p.id}">Delete</button></div>`).join(""):`<div style="color:#6f7b8e;font-size:9px">No custom workouts saved yet.</div>`;document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{customPlans=customPlans.filter(p=>p.id!==b.dataset.del);savePlans();renderPlans();renderCalendar()})}

renderLibrary();renderCalendar();renderWorkout();renderDraft();renderQuick();renderPlans();renderStats();
