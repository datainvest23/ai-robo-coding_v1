const state = {
  activeModuleId: null,
  activeLessonId: null,
  progress: loadProgress()
};

const moduleNav = document.getElementById('moduleNav');
const moduleTitle = document.getElementById('moduleTitle');
const moduleMeta = document.getElementById('moduleMeta');
const lessonList = document.getElementById('lessonList');
const lessonListSection = document.getElementById('lessonListSection');
const lessonDetailSection = document.getElementById('lessonDetailSection');
const lessonTitle = document.getElementById('lessonTitle');
const lessonDuration = document.getElementById('lessonDuration');
const lessonSummary = document.getElementById('lessonSummary');
const lessonObjectives = document.getElementById('lessonObjectives');
const lessonActivities = document.getElementById('lessonActivities');
const markCompleteBtn = document.getElementById('markComplete');
const backToListBtn = document.getElementById('backToList');
const resetBtn = document.getElementById('resetProgress');

const quizSection = document.getElementById('quizSection');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');

const progressLabel = document.getElementById('progressLabel');
const progressBar = document.getElementById('courseProgress');
const progressText = document.getElementById('progressText');

function init() {
  const firstModule = window.courseData.modules[0];
  state.activeModuleId = firstModule.id;
  renderModuleNav();
  renderModuleLessons(state.activeModuleId);
  updateProgressUI();
}

function renderModuleNav() {
  moduleNav.innerHTML = '';
  window.courseData.modules.forEach((m) => {
    const btn = document.createElement('button');
    btn.className = `module-link ${m.id === state.activeModuleId ? 'active' : ''}`;
    btn.textContent = m.title;
    btn.addEventListener('click', () => {
      state.activeModuleId = m.id;
      state.activeLessonId = null;
      renderModuleNav();
      renderModuleLessons(m.id);
      lessonDetailSection.hidden = true;
      lessonListSection.hidden = false;
    });
    moduleNav.appendChild(btn);
  });
}

function renderModuleLessons(moduleId) {
  const module = getModule(moduleId);
  moduleTitle.textContent = module.title;
  moduleMeta.textContent = `${module.duration} • ${module.lessons.length} lessons`;

  lessonList.innerHTML = '';
  module.lessons.forEach((lesson) => {
    const done = isComplete(lesson.id);
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.innerHTML = `
      <h4>${lesson.title}</h4>
      <p>${lesson.summary}</p>
      <p class="tags">${lesson.duration} min • ${done ? '✅ Completed' : '⬜ Not completed'}</p>
      <button class="btn secondary" data-open="${lesson.id}">Open lesson</button>
    `;

    card.querySelector('button').addEventListener('click', () => openLesson(moduleId, lesson.id));
    lessonList.appendChild(card);
  });
}

function openLesson(moduleId, lessonId) {
  const module = getModule(moduleId);
  const lesson = module.lessons.find((l) => l.id === lessonId);
  if (!lesson) return;

  state.activeLessonId = lessonId;

  lessonTitle.textContent = lesson.title;
  lessonDuration.textContent = `Estimated time: ${lesson.duration} minutes`;
  lessonSummary.textContent = lesson.summary;

  lessonObjectives.innerHTML = '';
  lesson.objectives.forEach((obj) => {
    const li = document.createElement('li');
    li.textContent = obj;
    lessonObjectives.appendChild(li);
  });

  lessonActivities.innerHTML = '';
  lesson.activities.forEach((act) => {
    const li = document.createElement('li');
    li.textContent = act;
    lessonActivities.appendChild(li);
  });

  renderQuiz(lesson.quiz);
  updateMarkCompleteButton();

  lessonListSection.hidden = true;
  lessonDetailSection.hidden = false;
}

function renderQuiz(quiz) {
  quizFeedback.textContent = '';
  quizFeedback.className = 'feedback';
  quizOptions.innerHTML = '';

  if (!quiz) {
    quizSection.hidden = true;
    return;
  }

  quizSection.hidden = false;
  quizQuestion.textContent = quiz.question;

  quiz.options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = option;
    btn.addEventListener('click', () => {
      if (idx === quiz.answer) {
        quizFeedback.textContent = 'Correct! Great job.';
        quizFeedback.className = 'feedback ok';
      } else {
        quizFeedback.textContent = 'Not quite. Try again.';
        quizFeedback.className = 'feedback bad';
      }
    });
    quizOptions.appendChild(btn);
  });
}

function markComplete() {
  if (!state.activeLessonId) return;
  state.progress.completed[state.activeLessonId] = true;
  saveProgress();
  updateMarkCompleteButton();
  renderModuleLessons(state.activeModuleId);
  updateProgressUI();
}

function updateMarkCompleteButton() {
  if (!state.activeLessonId) {
    markCompleteBtn.disabled = true;
    return;
  }
  const done = isComplete(state.activeLessonId);
  markCompleteBtn.disabled = done;
  markCompleteBtn.textContent = done ? 'Completed' : 'Mark complete';
}

function updateProgressUI() {
  const allLessons = window.courseData.modules.flatMap((m) => m.lessons);
  const total = allLessons.length;
  const done = allLessons.filter((lesson) => isComplete(lesson.id)).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  progressBar.value = pct;
  progressLabel.textContent = `${pct}%`;
  progressText.textContent = `${done} of ${total} lessons complete`;
}

function resetProgress() {
  state.progress = { completed: {} };
  saveProgress();
  updateProgressUI();
  renderModuleLessons(state.activeModuleId);
  updateMarkCompleteButton();
}

function isComplete(lessonId) {
  return !!state.progress.completed[lessonId];
}

function getModule(moduleId) {
  return window.courseData.modules.find((m) => m.id === moduleId);
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('inventor-path-progress')) || { completed: {} };
  } catch {
    return { completed: {} };
  }
}

function saveProgress() {
  localStorage.setItem('inventor-path-progress', JSON.stringify(state.progress));
}

markCompleteBtn.addEventListener('click', markComplete);
backToListBtn.addEventListener('click', () => {
  lessonDetailSection.hidden = true;
  lessonListSection.hidden = false;
});
resetBtn.addEventListener('click', resetProgress);

init();
