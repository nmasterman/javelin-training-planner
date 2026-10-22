const plan = [
  { day: 'Mon', title: 'Strength / lower body', tag: 'Strength', headline: 'Own the ground.', duration: 60, description: 'Build the legs that make the approach possible. Move with control, then leave the gym feeling sharper than you arrived.', focus: 'Brace before you move. Strong positions make fast positions.', exercises: [['Front squat', '4 x 5'], ['Romanian deadlift', '3 x 8'], ['Single-leg step-up', '3 x 8 / side'], ['Med-ball scoop toss', '4 x 5']] },
  { day: 'Tue', title: 'Technical / standing throw', tag: 'Technique', headline: 'Find the strike.', duration: 50, description: 'Keep the session simple and precise. Feel the right side lead while the arm stays relaxed and fast.', focus: 'The implement follows the body. Do less, but do it on time.', exercises: [['Walking impulse', '4 x 3'], ['Standing throw', '6 x 2'], ['Block drill', '4 x 3'], ['Easy mobility', '10 min']] },
  { day: 'Wed', title: 'Recovery / mobility', tag: 'Recovery', headline: 'Make room for speed.', duration: 35, description: 'A low-intensity reset for hips, ankles, shoulders, and the nervous system. Leave space for tomorrow.', focus: 'Recovery is training when it protects the next quality session.', exercises: [['Easy bike or walk', '20 min'], ['Hip flow', '2 rounds'], ['T-spine rotation', '2 x 8 / side'], ['Breathing reset', '5 min']], rest: true },
  { day: 'Thu', title: 'Power / lifts + bounds', tag: 'Power', headline: 'Put force in the floor.', duration: 70, description: 'Crisp, explosive work. Every rep should look like it has somewhere to go.', focus: 'Fast intent, quiet landing. Quality is the volume today.', exercises: [['Hang clean', '5 x 3'], ['Bounds', '4 x 20 m'], ['Push press', '4 x 5'], ['Prowler push', '5 x 15 m']] },
  { day: 'Fri', title: 'Speed + approach', tag: 'Power', headline: 'Fast feet. Long runway.', duration: 65, description: 'Keep the approach elastic and tall. Today is about feeling speed arrive before the implement does.', focus: 'Stay patient through the middle of the approach. The throw starts before the throw.', exercises: [['Approach runs', '6 x 5-step'], ['Impulse rhythm', '5 x 3'], ['Full approach', '6 throws'], ['Band shoulder care', '2 x 12']] },
  { day: 'Sat', title: 'Competition / throws', tag: 'Throws', headline: 'Trust the work.', duration: 75, description: 'A small competition rehearsal. Take your time between throws and let each attempt have a clear intention.', focus: 'Commit to one cue, then let the throw be athletic.', exercises: [['Warm-up sequence', '15 min'], ['Run-throughs', '4 throws'], ['Competition throws', '6 throws'], ['Cooldown', '10 min']] },
  { day: 'Sun', title: 'Rest day', tag: 'Reset', headline: 'Come back hungry.', duration: 0, description: 'No structured training today. Eat well, take an easy walk if you want one, and let the body absorb the week.', focus: 'The quiet days are part of the plan.', exercises: [['Walk outside', 'Optional'], ['Meal prep', '20 min'], ['Sleep target', '8+ hours']], rest: true }
];

const today = new Date();
const programStart = new Date(2026, 7, 3);
const trainingWeek = Math.min(48, Math.max(1, Math.floor((today - programStart) / 604800000) + 1));
const workbookWeeks = [
  ['Rebuild rhythm, easy technical throws', 'Hypertrophy, trunk, shoulders', 'Low-medium throwing volume'],
  ['Add approach rhythm and block timing', 'Hypertrophy + general strength', 'Keep intensity low'],
  ['Most volume of general prep', 'Full-body strength, posture, durability', 'Highest load of block'],
  ['Deload, shorten sessions', 'Test or light power work', 'Restore shoulders and hips'],
  ['General prep with more specific positions', 'Max-strength base begins', 'Keep throws controlled'],
  ['Add more med-ball and penultimate work', 'Heavier lower-body emphasis', 'Moderate volume'],
  ['Higher quality throws, still not maximal', 'Heavy strength + intro power', 'Highest load of block'],
  ['Deload, technical cleanup', 'Test strength or power', 'Reduce total stress'],
  ['Start specific prep I', 'Convert strength to speed', 'More block and run-up precision'],
  ['Faster approach work, short intense throws', 'Power emphasis, lower volume', 'Keep volume moderate'],
  ['Highest specific-prep load', 'Explosive lifting, med-balls', 'Long recoveries between throws'],
  ['Deload and test', 'Power reassessment', 'Freshen up before next block'],
  ['More specific speed and delivery work', 'Explosive strength', 'Javelin-specific rhythm'],
  ['Add more full-speed movements', 'Plyos + fast lifts', 'Intensity rises'],
  ['Highest specificity of block', 'Power emphasis, low grind', 'Quality over quantity'],
  ['Deload, test, and recover', 'Light explosive maintenance', 'Protect elbow/shoulder']
];
const workbookLifts = {
  11: {
    lower: 'Hang power clean 6x2; trap bar jump 6x2; front squat 3x2 @RPE 7; RFESS 2x4/side; Nordic 2x3',
    upper: 'Push jerk 4x2; high pull from hang 5x2-3; pull-up 4x3; row 3x5; band ER 2x12',
    recovery: 'Step-up jump 3x3/side; anti-rotation press 3x8/side; hip airplane 2x4/side; sled drag 3x20m'
  },
  12: {
    lower: 'Hang power clean 3x2; trap bar jump 3x2; front squat 3x2 @RPE 6; split squat 2x3/side; RDL 2x4',
    upper: 'Push press 3x2; pull-up 3x3; row 2x5; band ER 2x12',
    recovery: 'Easy plyo and trunk: pogo 2x15; dead bug 2x8; side plank 2x20s/side; light carries'
  },
  13: {
    lower: 'Power clean 4x2 @70-80%; front squat 4x2 @RPE 7; RFESS 2x4/side; RDL 2x4; calf raise 2x8',
    upper: 'Push press 4x2-3; weighted pull-up 3x3; chest-supported row 3x5; landmine press 2x6; band ER 2x12',
    recovery: 'Copenhagen plank 2x20s/side; Pallof press 2x8/side; sled drag 3x15m; mobility finish'
  }
};
const seasonBlocks = [
  ['Base preparation I', 'Ball throws, general capacity, tissue preparation', 'Build volume without chasing intensity.'],
  ['Base preparation II', 'More ball volume, approach rhythm, general strength', 'Keep throwing controlled and repeatable.'],
  ['Base preparation III', 'Highest ball-throw volume and general strength', 'Finish the base before adding javelin intensity.'],
  ['Transition I', 'Ball throws plus controlled javelin positions', 'Javelin stays submaximal; ball volume remains high.'],
  ['Transition II', 'More approach rhythm and javelin-specific power', 'Quality rises while total volume comes down.'],
  ['Specific preparation I', 'Low-medium throwing volume with crisp technical work', 'Strength begins converting to speed.'],
  ['Power conversion', 'Short, sharp javelin work at high intent', 'Long recoveries keep speed high.'],
  ['Specific power', 'Competition rhythm and high-quality approaches', 'Low-medium volume, high intent.'],
  ['Pre-competition I', 'Meet rhythm and full-speed technical work', 'Maintenance lifting and less fatigue.'],
  ['Competition phase', 'Sharpness, tapering, and selected competition throws', 'Freshness is the performance variable.'],
  ['Mid-season rebuild', 'Controlled volume, general strength, and mechanics', 'Rebuild tissues without maxing out.'],
  ['Second peak / transition', 'Final quality, then full deload and assessment', 'Leave freshness in reserve for the next cycle.']
];
const phaseLiftTemplates = [
  ['Hang power clean 4x3 @60-70%; front squat 4x6 @RPE 7; split squat 3x8/side; RDL 3x8', 'Push press 4x5 @RPE 7; pull-up 4x6; chest-supported row 3x10; band ER 3x15', 'Cossack squat 3x8/side; Copenhagen plank 3x20s/side; sled drag 4x20m'],
  ['Power clean 5x2 @70-75%; trap bar deadlift 5x4 @RPE 8; RFESS 4x5/side; RDL 3x5', 'Push press 5x3; weighted pull-up 4x4; 1-arm row 4x6/side; face pull 3x12', 'Step-up 3x6/side; adductor slide lunge 3x6/side; anti-rotation press 3x10/side; calf iso 3x20s'],
  ['Hang power clean 5x2 @70-80%; trap bar jump 5x3; dynamic front squat 5x2 @55-65%; RFESS 3x4/side', 'Push jerk 5x2; high pull 4x3; weighted pull-up 4x4; chest-supported row 3x6', 'Pogo hops 3x20; step-up jump 3x3/side; Pallof press 3x8/side; sled drag 3x15m'],
  ['Power clean 4x2 @75-80%; front squat 4x2 @RPE 8; RFESS 3x4/side; RDL 3x4', 'Push jerk 4x2; high pull 4x3; weighted pull-up 4x3; row 3x5', 'Bounds 3x20m; hip airplane 3x4/side; Pallof press 3x8/side; sled drag 3x20m'],
  ['Power clean 5x2 @75-85%; trap bar deadlift 5x2 @RPE 8-9; front squat 4x3; Nordic 3x4', 'Push press 5x2; weighted pull-up 5x3; row 4x5; band ER 2x12', 'Split squat iso 3x20s/side; hip airplane 3x4/side; Pallof press 3x8/side; sled drag 4x20m'],
  ['Power clean 4x2 @70-80%; front squat 4x2 @RPE 7; RFESS 3x4/side; RDL 3x4', 'Push jerk 4x2; high pull 4x3; pull-up 4x3; row 3x5', 'Step-up jump 3x3/side; anti-rotation press 3x8/side; hip airplane 2x4/side; sled drag 3x20m'],
  ['Power clean 4x2 @60-70%; trap bar jump 4x3; dynamic front squat 4x2 @50-60%; split squat 2x4/side', 'Push press 4x2; high pull 3x3; pull-up 3x3; row 2x5', 'Pogo 3x15; bounds 3x20m; dead bug 2x8; light carries'],
  ['Power clean 3x2 @60-70%; trap bar jump 3x3; dynamic front squat 3x2 @50-60%; RFESS 2x4/side', 'Push press 3x2; pull-up 3x3; row 2x5; band ER 2x12', 'Step-up jump 2x3/side; Pallof press 2x8/side; mobility finish'],
  ['Power clean 3x2 @60-70%; front squat 3x2 @RPE 6-7; split squat 2x3/side; RDL 2x4', 'Push press 3x2; pull-up 3x3; row 2x5; band ER 2x12', 'Copenhagen plank 2x20s/side; Pallof press 2x8/side; sled drag 3x15m; mobility'],
  ['Power clean 2x2 @60%; front squat 2x2 @RPE 6; split squat 2x3/side; RDL 2x3', 'Push press 2x2; pull-up 2x3; row 2x5; band ER 2x12', 'Recovery only: mobility, trunk, hips, adductors, and easy carries'],
  ['Hang power clean 4x3 @60-70%; front squat 4x5 @RPE 7; split squat 3x6/side; RDL 3x6', 'Push press 4x3; pull-up 4x5; chest-supported row 3x8; band ER 2x15', 'Cossack squat 3x6/side; Copenhagen plank 3x20s/side; sled drag 4x20m'],
  ['Power clean 3x2 @70-80%; front squat 3x2 @RPE 7; RFESS 2x4/side; RDL 2x4', 'Push press 3x2; pull-up 3x3; row 2x5; band ER 2x12', 'Pogo 2x15; dead bug 2x8; side plank 2x20s/side; light carries']
];
function buildLiftPlan(weekNumber) {
  if (workbookLifts[weekNumber]) return workbookLifts[weekNumber];
  const blockIndex = Math.floor((weekNumber - 1) / 4);
  const weekInBlock = ((weekNumber - 1) % 4) + 1;
  const templateIndex = Math.min(phaseLiftTemplates.length - 1, blockIndex);
  const template = phaseLiftTemplates[templateIndex];
  if (weekInBlock === 4) return { lower: template[0].replace(/\d+x\d+/g, '2x2').replace(/@RPE \d(?:\.\d)?/g, '@RPE 6'), upper: template[1].replace(/\d+x\d+/g, '2x2'), recovery: template[2] + '; deload and restore' };
  return { lower: template[0], upper: template[1], recovery: template[2] };
}
const seasonLifts = Object.fromEntries(Array.from({ length: 48 }, (_, index) => {
  const weekNumber = index + 1;
  return [weekNumber, buildLiftPlan(weekNumber)];
}));
const seasonOutlook = Array.from({ length: 48 }, (_, index) => {
  const block = seasonBlocks[Math.floor(index / 4)];
  const weekInBlock = (index % 4) + 1;
  return { week: index + 1, phase: block[0], throwing: `${block[1]} / week ${weekInBlock} of 4`, note: block[2], strength: weekInBlock === 4 ? 'Deload, test, and restore' : index < 16 ? 'General strength and durability' : index < 32 ? 'Strength converted to speed and power' : 'Explosive maintenance and recovery' };
});
const workbookWeek = workbookWeeks[Math.min(trainingWeek, workbookWeeks.length) - 1] || workbookWeeks[0];
const weekLift = seasonLifts[trainingWeek];
const methodologyTips = [
  'Name the bottleneck before adding another drill.',
  'Pair throwing work with the mobility and strength the position demands.',
  'Use one technical cue per session and keep the model simple.',
  'Stop a drill when the intended shape or rhythm disappears.',
  'Write one observation after training so the next session has a purpose.'
];
const throwingProgression = trainingWeek <= 12
  ? {
      phase: 'Base preparation / ball throws',
      focus: 'High-volume medicine-ball throws and general throwing capacity',
      note: 'No javelin competition throws yet. Build rhythm, posture, and repeatability.',
      primary: [['Med-ball chest pass', '5 x 8'], ['Med-ball scoop toss', '5 x 8 / side'], ['Rotational shot throw', '5 x 6 / side'], ['Overhead backward throw', '4 x 8']],
      saturday: [['Med-ball circuit', '4 rounds'], ['Scoop toss', '6 x 5 / side'], ['Chest pass', '6 x 5'], ['Easy mobility', '10 min']]
    }
  : trainingWeek <= 24
    ? {
        phase: 'Transition / mixed implements',
        focus: 'Keep ball volume high while introducing controlled javelin positions',
        note: 'Javelin is technical and submaximal. Ball throws still own the volume.',
        primary: [['Med-ball scoop toss', '5 x 6 / side'], ['Run-up rhythm', '6 x 5-step'], ['Standing javelin', '6 x 3'], ['Chest pass', '4 x 6']],
        saturday: [['Med-ball power circuit', '3 rounds'], ['Standing javelin', '8 throws'], ['Short approach', '6 throws'], ['Cooldown', '10 min']]
      }
    : {
        phase: 'Specific preparation / javelin',
        focus: 'Progress from controlled approaches toward high-quality javelin throws',
        note: 'Full-speed throwing comes after the base is earned. Keep quality ahead of volume.',
        primary: [['Approach throws', '6 x 5-step'], ['Impulse rhythm', '5 x 3'], ['Full approach', '6 throws'], ['Band shoulder care', '2 x 12']],
        saturday: [['Warm-up sequence', '15 min'], ['Run-throughs', '4 throws'], ['Competition throws', '6 throws'], ['Cooldown', '10 min']]
      };

const weekKey = `flight-plan-week-${trainingWeek}`;
const legacyDayKey = `flight-plan-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const state = JSON.parse(localStorage.getItem(weekKey) || localStorage.getItem(legacyDayKey) || '{"completed":{},"notes":{}}');
const weightStorageKey = 'flight-plan-weight-history';
const weightLog = JSON.parse(localStorage.getItem(weightStorageKey) || '{}');
const syncEndpointKey = 'flight-plan-google-sheets-endpoint';
let syncEndpoint = localStorage.getItem(syncEndpointKey) || '';
let selectedIndex = Math.min((today.getDay() + 6) % 7, 6);

const $ = (id) => document.getElementById(id);
const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
$('todayLabel').textContent = formattedDate;
$('workbookWeekLabel').textContent = `Week ${trainingWeek} / ${throwingProgression.phase}`;
$('workbookThrowing').textContent = throwingProgression.focus;
$('workbookStrength').textContent = workbookWeek[1];
$('workbookNote').textContent = throwingProgression.note;
$('syncEndpoint').value = syncEndpoint;
$('syncStatus').textContent = syncEndpoint ? 'Connected locally' : 'Not connected';

function renderSeasonOutlook(weekNumber) {
  const seasonWeek = seasonOutlook[weekNumber - 1];
  $('seasonWeekTitle').textContent = `Week ${seasonWeek.week} / ${seasonWeek.phase}`;
  $('seasonThrowing').textContent = seasonWeek.throwing;
  $('seasonStrength').textContent = seasonWeek.strength;
  $('seasonNote').textContent = seasonWeek.note;
  $('seasonTrackFill').style.width = `${(weekNumber / 48) * 100}%`;
}

function renderTrainingLoad() {
  const weekInBlock = ((trainingWeek - 1) % 4) + 1;
  $('loadWeekLabel').textContent = `Week ${weekInBlock} of 4`;
  $('loadPhaseLabel').textContent = weekInBlock === 4 ? 'Deload' : 'Build';
  $('loadBarFill').style.width = `${(weekInBlock / 4) * 100}%`;
}

function saveState() {
  localStorage.setItem(weekKey, JSON.stringify(state));
}

function weightKey(sessionIndex, exerciseName) {
  return `${sessionIndex}:${exerciseName}`;
}

function currentWeightEntry(sessionIndex, exerciseName) {
  const entries = weightLog[weightKey(sessionIndex, exerciseName)] || [];
  return entries.filter((entry) => entry.week === trainingWeek).sort((a, b) => b.date.localeCompare(a.date))[0];
}

function previousWeightEntry(sessionIndex, exerciseName) {
  const entries = weightLog[weightKey(sessionIndex, exerciseName)] || [];
  const current = currentWeightEntry(sessionIndex, exerciseName);
  return entries.filter((entry) => entry !== current).sort((a, b) => b.date.localeCompare(a.date))[0];
}

function saveWeight(sessionIndex, exerciseName, value) {
  const key = weightKey(sessionIndex, exerciseName);
  const entries = weightLog[key] || [];
  if (value !== '') entries.push({ week: trainingWeek, value, date: new Date().toISOString() });
  weightLog[key] = entries;
  localStorage.setItem(weightStorageKey, JSON.stringify(weightLog));
  syncRecord({ type: 'weight', day: plan[sessionIndex].day, exercise: exerciseName, weight: value });
}

function syncRecord(record) {
  if (!syncEndpoint) return Promise.resolve(false);
  return fetch(syncEndpoint, { method: 'POST', mode: 'no-cors', body: JSON.stringify({ ...record, date: today.toISOString().slice(0, 10), week: trainingWeek }) }).then(() => true).catch(() => {
    $('syncStatus').textContent = 'Sync failed; saved on this device';
    return false;
  });
}

function testSyncConnection() {
  if (!syncEndpoint) {
    $('syncStatus').textContent = 'Paste the /exec URL first';
    return;
  }
  $('syncStatus').textContent = 'Testing connection...';
  fetch(syncEndpoint, { method: 'GET', mode: 'no-cors', cache: 'no-store' }).then(() => {
    $('syncStatus').textContent = 'Connected; ready to sync';
  }).catch(() => {
    $('syncStatus').textContent = 'Connection failed; check the /exec URL and deployment access';
  });
}

function syncSelectedDay() {
  const records = [];
  Object.entries(weightLog).forEach(([key, entries]) => {
    const [sessionIndex, exercise] = key.split(':');
    if (Number(sessionIndex) !== selectedIndex) return;
    entries.forEach((entry) => records.push({ type: 'weight', date: entry.date.slice(0, 10), week: entry.week, day: plan[Number(sessionIndex)].day, exercise, weight: entry.value }));
  });
  const note = state.notes[selectedIndex];
  if (note) records.push({ type: 'note', day: plan[selectedIndex].day, note });
  if (state.completed[selectedIndex] !== undefined) records.push({ type: 'completion', day: plan[selectedIndex].day, completed: state.completed[selectedIndex] });
  records.forEach((record) => syncRecord(record));
  $('syncStatus').textContent = `Sent ${records.length} records for ${plan[selectedIndex].day}`;
}

function renderSession(index) {
  selectedIndex = index;
  const session = plan[index];
  const workbookSession = index === 0 ? { title: 'Throwing / ' + throwingProgression.phase, headline: 'Build the engine before the spear.', description: `${throwingProgression.focus}. ${throwingProgression.note}`, focus: throwingProgression.note, exercises: throwingProgression.primary } : index === 1 ? { title: 'Lift 1 / lower + Olympic', headline: 'Power before strength.', description: weekLift.lower, focus: workbookWeek[1], exercises: weekLift.lower.split('; ').map((exercise) => [exercise, '']) } : index === 3 ? { title: 'Plyos + Lift 2 / upper', headline: 'Fast through the ground.', description: weekLift.upper, focus: workbookWeek[1], exercises: weekLift.upper.split('; ').map((exercise) => [exercise, '']) } : index === 4 ? { title: 'Lift 3 / recovery', headline: 'Keep the system fresh.', description: weekLift.recovery, focus: workbookWeek[2], exercises: weekLift.recovery.split('; ').map((exercise) => [exercise, '']) } : index === 5 ? { title: 'Ball throws / volume', headline: 'Repeat strong shapes.', description: throwingProgression.note, focus: throwingProgression.focus, exercises: throwingProgression.saturday } : null;
  const displayedSession = workbookSession ? { ...session, ...workbookSession } : session;
  $('sessionTitle').textContent = `${session.day} / ${displayedSession.title}`;
  $('sessionTag').textContent = session.tag;
  $('sessionDate').textContent = index === ((today.getDay() + 6) % 7) ? 'Today' : session.day;
  $('sessionHeadline').textContent = displayedSession.headline;
  $('sessionDescription').textContent = displayedSession.description;
  $('focusText').textContent = displayedSession.focus;
  $('methodologyTip').textContent = methodologyTips[index % methodologyTips.length];
  $('sessionNote').value = state.notes[index] || '';
  $('exerciseList').innerHTML = displayedSession.exercises.map(([name, details]) => {
   if (session.rest) return `<div class="exercise"><div class="exercise-details"><strong>${name}</strong><span>${details}</span></div></div>`;
    const current = currentWeightEntry(index, name);
    const previous = previousWeightEntry(index, name);
    const previousLabel = previous ? `Previous: ${previous.value} lb` : 'Previous: none';
    return `<div class="exercise"><div class="exercise-details"><strong>${name}</strong><span>${details}</span><span class="previous-weight">${previousLabel}</span></div><label class="weight-entry"><input class="weight-input" type="number" min="0" step="0.5" inputmode="decimal" placeholder="lb" aria-label="Weight for ${name}" data-session="${index}" data-exercise="${name}" value="${current ? current.value : ''}"><span class="weight-unit">lb</span></label></div>`;
  }).join('');
  document.querySelectorAll('.weight-input').forEach((input) => input.addEventListener('change', () => {
    saveWeight(Number(input.dataset.session), input.dataset.exercise, input.value);
    renderSession(selectedIndex);
  }));
  const isDone = Boolean(state.completed[index]);
  $('completeButton').classList.toggle('completed', isDone);
  $('completeButton').innerHTML = isDone ? '<span>&#10003;</span> Session complete' : '<span>&#10003;</span> Mark session complete';
  document.querySelectorAll('.day-card').forEach((card, cardIndex) => card.classList.toggle('selected', cardIndex === index));
}

function renderWeek() {
  const completedCount = Object.values(state.completed).filter(Boolean).length;
  const plannedCount = plan.filter((session) => !session.rest).length;
  const progress = Math.round((completedCount / plannedCount) * 100);
  $('weekProgress').textContent = `${progress}%`;
  $('weekSummary').textContent = `${completedCount} of ${plannedCount} sessions`;
  $('weekStrip').innerHTML = plan.map((session, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - ((today.getDay() + 6) % 7) + index);
    const done = Boolean(state.completed[index]);
    return `<button class="day-card ${session.rest ? 'rest' : ''} ${done ? 'done' : ''}" type="button" data-index="${index}"><span class="day-name">${session.day}</span><span class="day-number">${date.getDate()}</span><span class="day-status"><i></i>${done ? 'Done' : session.rest ? 'Rest' : 'Plan'}</span></button>`;
  }).join('');
  document.querySelectorAll('.day-card').forEach((card) => card.addEventListener('click', () => renderSession(Number(card.dataset.index))));
}

$('completeButton').addEventListener('click', () => {
  state.completed[selectedIndex] = !state.completed[selectedIndex];
  saveState();
  renderWeek();
  renderSession(selectedIndex);
  syncRecord({ type: 'completion', day: plan[selectedIndex].day, completed: state.completed[selectedIndex] });
});
$('saveNoteButton').addEventListener('click', () => {
  state.notes[selectedIndex] = $('sessionNote').value;
  saveState();
  syncRecord({ type: 'note', day: plan[selectedIndex].day, note: state.notes[selectedIndex] });
  $('saveNoteButton').textContent = 'Saved';
  window.setTimeout(() => { $('saveNoteButton').textContent = 'Save note'; }, 1200);
});
$('resetButton').addEventListener('click', () => {
  state.completed = {};
  saveState();
  renderWeek();
  renderSession(selectedIndex);
});
$('settingsButton').addEventListener('click', () => {
  window.alert('Settings will let you adjust your phase, throwing hand, and weekly availability in the next version.');
});
$('saveSyncButton').addEventListener('click', () => {
  syncEndpoint = $('syncEndpoint').value.trim();
  localStorage.setItem(syncEndpointKey, syncEndpoint);
  syncEndpoint ? testSyncConnection() : $('syncStatus').textContent = 'Not connected';
});
$('syncNowButton').addEventListener('click', () => {
  if (!syncEndpoint) { $('syncStatus').textContent = 'Add the Apps Script URL first'; return; }
  testSyncConnection();
  window.setTimeout(syncSelectedDay, 500);
});

document.querySelectorAll('.view-tab').forEach((tab) => tab.addEventListener('click', () => {
  const coaching = tab.dataset.view === 'coaching';
  document.querySelectorAll('.view-tab').forEach((item) => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.plan-view').forEach((view) => view.classList.toggle('is-hidden', coaching));
  document.querySelector('.coaching-view').classList.toggle('is-hidden', !coaching);
}));

renderWeek();
renderSession(selectedIndex);
renderSeasonOutlook(trainingWeek);
renderTrainingLoad();
$('seasonWeekRange').value = trainingWeek;
$('seasonWeekRange').addEventListener('input', (event) => renderSeasonOutlook(Number(event.target.value)));
