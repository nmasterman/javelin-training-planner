const plan = [
  { day: 'Mon', title: 'Strength / lower body', tag: 'Strength', headline: 'Own the ground.', duration: 60, description: 'Build the legs that make the approach possible. Move with control, then leave the gym feeling sharper than you arrived.', focus: 'Brace before you move. Strong positions make fast positions.', exercises: [['Front squat', '4 x 5'], ['Romanian deadlift', '3 x 8'], ['Single-leg step-up', '3 x 8 / side'], ['Med-ball scoop toss', '4 x 5']] },
  { day: 'Tue', title: 'Technical / standing throw', tag: 'Technique', headline: 'Find the strike.', duration: 50, description: 'Keep the session simple and precise. Feel the right side lead while the arm stays relaxed and fast.', focus: 'The implement follows the body. Do less, but do it on time.', exercises: [['Walking impulse', '4 x 3'], ['Standing throw', '6 x 2'], ['Block drill', '4 x 3'], ['Easy mobility', '10 min']] },
  { day: 'Wed', title: 'Med-ball throwing', tag: 'Throws', headline: 'Build the throw from the ground.', duration: 55, description: 'A progressive med-ball session from general ground force to javelin-specific positions.', focus: 'Throw hard with clean positions, then stop before speed or shape fades.', exercises: [] },
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
    lower: 'Hang power clean 6x2; dumbbell jump shrug 6x2; front squat 3x2 @RPE 7; RFESS 2x4/side; Nordic 2x3',
    upper: 'Push jerk 4x2; high pull from hang 5x2-3; pull-up 4x3; row 3x5; band ER 2x12',
    recovery: 'Step-up jump 3x3/side; anti-rotation press 3x8/side; hip airplane 2x4/side; sled drag 3x20m'
  },
  12: {
    lower: 'Hang power clean 3x2; dumbbell jump shrug 3x2; front squat 3x2 @RPE 6; split squat 2x3/side; RDL 2x4',
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
  ['High-volume strength I', 'High-volume ball throws, sprint mechanics, and general strength', 'Build work capacity without turning every throw into a max effort.'],
  ['High-volume strength II', 'Progressive lower-body strength and rotational throwing power', 'Add volume gradually; keep two high-quality throwing exposures.'],
  ['High-volume strength III', 'Heavy general strength with medicine-ball power', 'Finish the winter base before chasing maximal javelin intensity.'],
  ['Strength-to-power transition', 'Faster lifts, jumps, sprints, and explosive ball throws', 'Reduce lifting volume as velocity and throwing intent rise.'],
  ['Power conversion', 'Short, sharp javelin work at high intent', 'Long recoveries keep speed high.'],
  ['Specific power', 'Competition rhythm and high-quality approaches', 'Low-medium volume, high intent.'],
  ['Pre-competition I', 'Meet rhythm and full-speed technical work', 'Maintenance lifting and less fatigue.'],
  ['Competition phase', 'Sharpness, tapering, and selected competition throws', 'Freshness is the performance variable.'],
  ['Mid-season rebuild', 'Controlled volume, general strength, and mechanics', 'Rebuild tissues without maxing out.'],
  ['Second peak / transition', 'Final quality, then full deload and assessment', 'Leave freshness in reserve for the next cycle.']
];
const phaseLiftTemplates = [
  ['Hang power clean 4x3 @60-70%; 2-sec paused front squat 4x6 @RPE 7; split squat 3x8/side; 3-sec eccentric RDL 3x8', 'Push press 4x5 @RPE 7; pull-up 4x6; chest-supported row 3x10; band ER 3x15', 'Cossack squat 3x8/side; Copenhagen plank 3x20s/side; sled drag 4x20m'],
  ['Power clean 5x2 @70-75%; barbell deadlift 5x4 @RPE 8; front-foot elevated split squat 4x5/side; 2-sec pause RDL 3x5', 'Push press 5x3; weighted pull-up 4x4; 1-arm row 4x6/side; face pull 3x12', 'Step-up 3x6/side; adductor slide lunge 3x6/side; anti-rotation press 3x10/side; calf iso 3x20s'],
  ['Hang power clean 5x2 @70-80%; dumbbell jump shrug 5x3; 2-sec paused dynamic front squat 5x2 @55-65%; RFESS 3x4/side', 'Push jerk 5x2; high pull 4x3; weighted pull-up 4x4; chest-supported row 3x6', 'Pogo hops 3x20; step-up jump 3x3/side; Pallof press 3x8/side; sled drag 3x15m'],
  ['Power clean from blocks 4x2 @75-80%; 3-sec eccentric front squat 4x2 @RPE 8; RFESS 3x4/side; single-leg RDL 3x4/side', 'Push jerk 4x2; high pull 4x3; weighted pull-up 4x3; 1-arm cable row 3x5/side', 'Bounds 3x20m; hip airplane 3x4/side; Pallof press 3x8/side; sled drag 3x20m'],
  ['Power clean 5x3 @70%; 2-sec paused barbell deadlift 5x5 @RPE 7; front squat 4x6; reverse lunge 3x8/side', 'Push press 5x5; pull-up 4x6; seal row 4x8; band ER 3x15', 'Med-ball scoop toss 5x6/side; Copenhagen plank 3x25s/side; sled drag 4x20m'],
  ['Power clean 5x3 @70-75%; 3-sec eccentric front squat 5x5 @RPE 7-8; snatch-grip RDL 4x6; lateral lunge 3x8/side', 'Push press 5x4; weighted pull-up 4x5; half-kneeling 1-arm row 4x8/side; face pull 3x15', 'Rotational shot throw 5x5/side; step-up 3x8/side; Pallof press 3x10/side'],
  ['Hang high pull 4x3 @75%; barbell deadlift 5x4 @RPE 8; 2-sec paused front squat 4x5; Nordic 3x5', 'Push press 4x4; weighted pull-up 4x4; Meadows row 4x6/side; band ER 3x12', 'Overhead backward throw 5x5; split-stance punch throw 4x5/side; sled drag 4x20m'],
  ['Power clean 4x2 @70-80%; jump squat 4x4 @20-30%; front squat 4x4 @RPE 8; rear-foot elevated split squat 3x6/side', 'Push jerk 4x3; high pull 4x3; pull-up 4x4; chest-supported row 3x6', 'Med-ball scoop toss 4x5/side; bounds 4x20m; acceleration 6x20m'],
  ['Hang power clean 4x2 @60-70%; dumbbell jump shrug 4x3; 2-sec pause squat 4x2 @50-60%; step-up 3x4/side', 'Push press 4x2; high pull 4x3; pull-up 3x3; 1-arm row 3x5/side', 'Pogo 4x15; step-behind throw 4x4/side; accelerations 6x30m'],
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
  if (weekInBlock === 4) {
    const reduceSets = (prescription) => prescription.replace(/(\d+)x/g, (_, sets) => `${Math.max(1, Number(sets) - 1)}x`).replace(/@RPE \d(?:\.\d)?/g, '@RPE 6');
    return { lower: reduceSets(template[0]), upper: reduceSets(template[1]), recovery: reduceSets(template[2]) + '; deload and restore' };
  }
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
  : trainingWeek <= 17
    ? {
        phase: 'Transition / mixed implements',
        focus: 'Keep ball volume high while introducing controlled javelin positions',
        note: 'Javelin is technical and submaximal. Ball throws still own the volume.',
        primary: [['Med-ball scoop toss', '5 x 6 / side'], ['Run-up rhythm', '6 x 5-step'], ['Standing javelin', '6 x 3'], ['Chest pass', '4 x 6']],
        saturday: [['Med-ball power circuit', '3 rounds'], ['Standing javelin', '8 throws'], ['Short approach', '6 throws'], ['Cooldown', '10 min']]
      }
    : trainingWeek <= 30
      ? {
          phase: 'Winter volume / throwing power',
          focus: 'Build repeatable strength and throwing power with high-quality medicine-ball volume',
          note: 'Use intent on every rep, but leave one or two quality reps in reserve.',
          primary: [['Med-ball scoop toss', '5 x 8 / side'], ['Shot-put style scoop throw', '5 x 6 / side'], ['Overhead backward throw', '4 x 8'], ['Rotational chest pass', '4 x 8 / side']],
          saturday: [['Step-behind rotational throw', '4 x 6 / side'], ['Split-stance punch throw', '4 x 6 / side'], ['Plyo push-up', '4 x 5'], ['Hill sprint', '6 x 20m']]
        }
      : trainingWeek <= 39
        ? {
            phase: 'Spring power conversion',
            focus: 'Convert winter strength into faster, more specific throwing power',
            note: 'Low fatigue, full intent. Stop power work when speed or mechanics drop.',
            primary: [['Med-ball scoop toss', '4 x 5 / side'], ['Shot-put style throw', '4 x 4 / side'], ['Approach rhythm', '5 x 5-step'], ['Standing javelin', '5 x 2']],
            saturday: [['Step-behind throw', '4 x 4 / side'], ['Overhead backward throw', '3 x 5'], ['Bounds', '4 x 20m'], ['Accelerations', '6 x 30m']]
          }
      : {
        phase: 'Specific preparation / javelin',
        focus: 'Progress from controlled approaches toward high-quality javelin throws',
        note: 'Full-speed throwing comes after the base is earned. Keep quality ahead of volume.',
        primary: [['Approach throws', '6 x 5-step'], ['Impulse rhythm', '5 x 3'], ['Full approach', '6 throws'], ['Band shoulder care', '2 x 12']],
        saturday: [['Warm-up sequence', '15 min'], ['Run-throughs', '4 throws'], ['Competition throws', '6 throws'], ['Cooldown', '10 min']]
      };

const plyoProgression = trainingWeek <= 17
  ? {
      title: 'Plyos / foundation',
      description: 'Eight controlled 8 kg backward overhead shot throws, then three quality sets of each movement. Stick every landing and stop before contacts get noisy.',
      exercises: [['Backward overhead shot', '8 throws @ 8 kg'], ['Broad jump', '3 x 4'], ['Alternating bounds', '3 x 5 / side'], ['Single-leg pogo', '3 x 5 / side'], ['Depth drop + stick', '3 x 4'], ['Skater bound + stick', '3 x 4 / side']]
    }
  : trainingWeek <= 30
    ? {
        title: 'Plyos / winter volume',
        description: 'Eight controlled 8 kg backward overhead shot throws, then three quality sets of each movement. Build elastic capacity without turning this into a conditioning circuit.',
        exercises: [['Backward overhead shot', '8 throws @ 8 kg'], ['Broad jump', '3 x 5'], ['Single-leg bounds', '3 x 4 / side'], ['Pogo to broad jump', '3 x 4'], ['Depth drop + vertical jump', '3 x 4'], ['Lateral bound + stick', '3 x 5 / side']]
      }
    : {
        title: 'Plyos / power conversion',
        description: 'Eight high-quality 8 kg backward overhead shot throws, then three sets of explosive contacts with full recovery. Keep the jump crisp and stop when velocity drops.',
        exercises: [['Backward overhead shot', '8 throws @ 8 kg'], ['Reactive broad jump', '3 x 4'], ['Single-leg bound to jump', '3 x 4 / side'], ['Hurdle-free pogo series', '3 x 5'], ['Depth drop + jump', '3 x 4'], ['Skater bound + vertical jump', '3 x 4 / side']]
      };

  const medballProgression = trainingWeek <= 17
    ? {
        title: 'Med-ball / foundation',
        description: 'Three sets of each movement. Start general and ground-driven, then finish with controlled overhead and rotational patterns. Rest until the next throw is fast.',
        focus: 'Create force from the floor before asking the shoulder to finish it.',
        exercises: [['Throw for height', '3 x 8'], ['Rainbow slam', '3 x 8'], ['Forward-facing shot put', '3 x 6 / side'], ['Regular rotational throw', '3 x 8 / side'], ['Kneeling overhead throw', '3 x 8'], ['Laying down overhead throw', '3 x 8'], ['Shoulder rotational throw', '3 x 6 / side']]
      }
    : trainingWeek <= 30
      ? {
          title: 'Med-ball / winter volume',
          description: 'Three sets of each movement. Keep the volume high enough to build throwing power, but use full recovery so each rep stays explosive.',
          focus: 'Transfer force through the hips and trunk without rushing the arm.',
          exercises: [['Rainbow slam', '3 x 8'], ['Forward-facing shot put', '3 x 8 / side'], ['Regular rotational throw', '3 x 8 / side'], ['Overhead throw with a step', '3 x 8 / side'], ['Three-step shoulder throw', '3 x 6 / side'], ['Rock the baby throw', '3 x 8 / side'], ['Laying down one-arm throw', '3 x 6 / side'], ['Three-step overhead throw', '3 x 6 / side']]
        }
      : {
          title: 'Med-ball / specific power',
          description: 'Three sets of each movement with full recovery. Progress toward the positions and rhythm that transfer to the javelin, without chasing fatigue.',
          focus: 'Keep the implement behind the body, then let the block and trunk deliver it.',
          exercises: [['Forward-facing shot put', '3 x 6 / side'], ['Shoulder rotational throw', '3 x 6 / side'], ['Overhead throw with a step', '3 x 6 / side'], ['Three-step overhead throw', '3 x 6 / side'], ['Three-step shoulder throw', '3 x 6 / side'], ['Stationary block throw', '3 x 6 / side'], ['Laying down one-arm throw', '3 x 6 / side'], ['Kneeling shoulder throw', '3 x 6 / side']]
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

function renderLiftingWeek(weekNumber) {
  const lift = seasonLifts[weekNumber];
  const block = seasonBlocks[Math.floor((weekNumber - 1) / 4)];
  $('liftingWeekTitle').textContent = `Week ${weekNumber} / ${block[0]}`;
  $('liftingWeekNote').textContent = `${block[2]} Week ${((weekNumber - 1) % 4) + 1} of 4.`;
  $('liftingLower').textContent = lift.lower;
  $('liftingUpper').textContent = lift.upper;
  $('liftingRecovery').textContent = lift.recovery;
}

function splitPrescription(prescription) {
  return prescription.split('; ').map((exercise) => {
    const match = exercise.match(/^(.+?)\s+(\d+\s*x.+)$/);
    return match ? [match[1], match[2]] : [exercise, ''];
  });
}

function saveState() {
  localStorage.setItem(weekKey, JSON.stringify(state));
}

function weightKey(sessionIndex, exerciseName, setNumber) {
  return `${sessionIndex}:${exerciseName}:${setNumber}`;
}

function currentWeightEntry(sessionIndex, exerciseName, setNumber) {
  const entries = weightLog[weightKey(sessionIndex, exerciseName, setNumber)] || (setNumber === 1 ? weightLog[`${sessionIndex}:${exerciseName}`] || [] : []);
  return entries.filter((entry) => entry.week === trainingWeek).sort((a, b) => b.date.localeCompare(a.date))[0];
}

function previousWeightEntry(sessionIndex, exerciseName, setNumber) {
  const entries = weightLog[weightKey(sessionIndex, exerciseName, setNumber)] || (setNumber === 1 ? weightLog[`${sessionIndex}:${exerciseName}`] || [] : []);
  const current = currentWeightEntry(sessionIndex, exerciseName, setNumber);
  return entries.filter((entry) => entry !== current).sort((a, b) => b.date.localeCompare(a.date))[0];
}

function saveWeight(sessionIndex, exerciseName, setNumber, value) {
  const key = weightKey(sessionIndex, exerciseName, setNumber);
  const entries = weightLog[key] || [];
  if (value !== '') entries.push({ week: trainingWeek, set: setNumber, value, date: new Date().toISOString() });
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
    const [sessionIndex, exercise, setNumber] = key.split(':');
    if (Number(sessionIndex) !== selectedIndex) return;
    entries.forEach((entry) => records.push({ type: 'weight', date: entry.date.slice(0, 10), week: entry.week, day: plan[Number(sessionIndex)].day, exercise, set: entry.set || Number(setNumber) || 1, weight: entry.value }));
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
  const workbookSession = index === 0 ? { title: 'Throwing / ' + throwingProgression.phase, headline: 'Build the engine before the spear.', description: `${throwingProgression.focus}. ${throwingProgression.note}`, focus: throwingProgression.note, exercises: throwingProgression.primary } : index === 1 ? { title: 'Lift 1 / lower + Olympic', headline: 'Power before strength.', description: weekLift.lower, focus: workbookWeek[1], exercises: splitPrescription(weekLift.lower) } : index === 2 ? { title: 'Wednesday / ' + medballProgression.title, headline: 'Ground to arm.', description: medballProgression.description, focus: medballProgression.focus, exercises: medballProgression.exercises } : index === 3 ? { title: 'Plyos + Lift 2 / upper', headline: 'Fast through the ground.', description: weekLift.upper, focus: workbookWeek[1], exercises: splitPrescription(weekLift.upper) } : index === 4 ? { title: 'Friday / ' + plyoProgression.title, headline: 'Elastic, reactive, and stable.', description: plyoProgression.description, focus: 'Own the landing, then express force quickly through one leg.', exercises: plyoProgression.exercises } : index === 5 ? { title: 'Ball throws / volume', headline: 'Repeat strong shapes.', description: throwingProgression.note, focus: throwingProgression.focus, exercises: throwingProgression.saturday } : null;
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
    const setMatch = String(details).match(/^(\d+)\s*x/);
    const setCount = setMatch ? Number(setMatch[1]) : 0;
    const setInputs = Array.from({ length: setCount }, (_, setIndex) => {
      const setNumber = setIndex + 1;
      const current = currentWeightEntry(index, name, setNumber);
      const previous = previousWeightEntry(index, name, setNumber);
      const previousLabel = previous ? `Prev ${previous.value}` : '';
      return `<label class="set-entry"><span>Set ${setNumber}</span><input class="weight-input" type="number" min="0" step="0.5" inputmode="decimal" placeholder="lb" aria-label="${name}, set ${setNumber} weight" data-session="${index}" data-exercise="${name}" data-set="${setNumber}" value="${current ? current.value : ''}"><small>${previousLabel}</small></label>`;
    }).join('');
    return `<div class="exercise"><div class="exercise-details"><strong>${name}</strong><span>${details}</span></div>${setInputs ? `<div class="set-inputs">${setInputs}</div>` : ''}</div>`;
  }).join('');
  document.querySelectorAll('.weight-input').forEach((input) => input.addEventListener('change', () => {
    saveWeight(Number(input.dataset.session), input.dataset.exercise, Number(input.dataset.set), input.value);
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
  const lifting = tab.dataset.view === 'lifting';
  document.querySelectorAll('.view-tab').forEach((item) => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.plan-view').forEach((view) => view.classList.toggle('is-hidden', coaching || lifting));
  document.querySelector('.coaching-view').classList.toggle('is-hidden', !coaching);
  document.querySelector('.lifting-view').classList.toggle('is-hidden', !lifting);
}));

renderWeek();
renderSession(selectedIndex);
renderSeasonOutlook(trainingWeek);
renderTrainingLoad();
$('seasonWeekRange').value = trainingWeek;
$('seasonWeekRange').addEventListener('input', (event) => renderSeasonOutlook(Number(event.target.value)));
for (let weekNumber = 1; weekNumber <= 48; weekNumber += 1) $('liftingWeekSelect').insertAdjacentHTML('beforeend', `<option value="${weekNumber}">Week ${weekNumber}</option>`);
$('liftingWeekSelect').value = trainingWeek;
$('liftingWeekSelect').addEventListener('change', (event) => renderLiftingWeek(Number(event.target.value)));
renderLiftingWeek(trainingWeek);
