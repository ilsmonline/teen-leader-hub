const scheduleList = document.querySelector('#schedule-list');
const scheduleTabs = document.querySelector('#schedule-tabs');
const scheduleNote = document.querySelector('#schedule-note');
const selectedGroupTitle = document.querySelector('#selected-group-title');
const groupSwitcherTargets = [
  document.querySelector('#home-group-switcher'),
  document.querySelector('#schedule-group-switcher')
];

let selectedGroup = localStorage.getItem('teenCampScheduleGroup') || scheduleGroups[0].id;
let selectedDay = 'Monday';

function groupById(id) {
  return scheduleGroups.find(group => group.id === id) || scheduleGroups[0];
}

function teamDots(teams) {
  return teams.map(team => `<span class="team-dot" style="--team:${teamColors[team]}" title="${team}"></span>`).join('');
}

function colorize(text) {
  let output = text;
  Object.entries(teamColors).forEach(([team, color]) => {
    output = output.replace(new RegExp(`\\b${team}\\b`, 'g'), `<span class="team-pill" style="--team:${color}">${team}</span>`);
  });
  return output;
}

function renderGroupSwitchers() {
  groupSwitcherTargets.forEach(target => {
    target.innerHTML = scheduleGroups.map(group => `
      <button class="group-button ${group.id === selectedGroup ? 'is-active' : ''}" data-group="${group.id}">
        <span class="dot-row">${teamDots(group.teams)}</span>
        <span>${group.label}</span>
      </button>
    `).join('');
  });
  document.querySelectorAll('.group-button').forEach(button => {
    button.addEventListener('click', () => {
      selectedGroup = button.dataset.group;
      localStorage.setItem('teenCampScheduleGroup', selectedGroup);
      renderSchedule();
      renderGroupSwitchers();
    });
  });
}

function renderTabs() {
  scheduleTabs.innerHTML = days.map(day => `
    <button class="tab ${day === selectedDay ? 'is-active' : ''}" data-day="${day}">${day}</button>
  `).join('');
  scheduleTabs.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      selectedDay = tab.dataset.day;
      renderSchedule();
      renderTabs();
    });
  });
}

function renderSchedule() {
  const group = groupById(selectedGroup);
  selectedGroupTitle.textContent = group.label;
  scheduleNote.innerHTML = `<span class="dot-row">${teamDots(group.teams)}</span><strong>${group.label}</strong>`;
  const items = schedule[selectedDay].filter(([, , target]) => target === 'all' || target === selectedGroup);
  scheduleList.innerHTML = items.map(([time, item, target]) => `
    <article class="schedule-item ${target === selectedGroup ? 'schedule-item-accent' : ''}">
      <time>${time}</time>
      <p>${colorize(item)}</p>
    </article>
  `).join('');
}

document.querySelector('#contact-grid').innerHTML = contacts.map(contact => {
  const tel = contact.phone.replace(/[^0-9]/g, '');
  const initials = contact.name.split(' ').map(part => part[0]).join('').slice(0, 2);
  return `
    <article class="contact-card">
      <img class="contact-photo" src="${contact.photo}" alt="${contact.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'), { className: 'photo-placeholder', textContent: '${initials}' }))" />
      <p class="role">${contact.role}</p>
      <h3>${contact.name}</h3>
      <a class="call-link" href="tel:${tel}">${contact.phone}</a>
    </article>
  `;
}).join('');

document.querySelector('#game-schedule').innerHTML = gameSchedule.map(day => `
  <details class="game-day" ${day.day === 'Tuesday' ? 'open' : ''}>
    <summary>
      <span>
        <strong>${day.day}'s ${day.note}</strong>
      </span>
      <span class="chevron">+</span>
    </summary>
    <div class="game-day-body">
    ${day.blocks.map(block => `
      <div class="game-block">
        <strong>${block.time}</strong>
        <span>${block.title}</span>
        ${block.detail ? `<small>${colorize(block.detail)}</small>` : ''}
        ${block.matches ? `
          <div class="matchup-table" aria-label="${day.day} ${block.time} matchups">
            <div class="matchup-title">${block.group}</div>
            <div class="matchup-head"><span>Matchup</span><span>${block.columns[0]}</span><span>${block.columns[1]}</span></div>
            ${block.matches.map(match => `
              <div class="matchup-row">
                <strong>${colorize(match[0])}</strong>
                <span data-label="${block.columns[0]}">${match[1]}<em>${teamCompLocations[match[1]] || ''}</em></span>
                <span data-label="${block.columns[1]}">${match[2]}<em>${teamCompLocations[match[2]] || ''}</em></span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('')}
    </div>
  </details>
`).join('');

document.querySelector('#add-location-grid').innerHTML = addLocations.map(item => `
  <article class="add-location-card">
    <p class="eyebrow">${item.day}</p>
    <strong>${item.time}</strong>
    ${item.details.map(detail => `<span>${detail}</span>`).join('')}
  </article>
`).join('');

document.querySelector('#individual-grid').innerHTML = individualCompetitions.map(day => `
  <details class="individual-day" ${day.day === 'Tuesday' ? 'open' : ''}>
    <summary>
      <span>
        <strong>${day.day} Individual Competitions</strong>
      </span>
      <span class="chevron">+</span>
    </summary>
    <div class="individual-list">
      ${day.items.map(item => `
        <details class="individual-card">
          <summary>
            <span>
              <strong>${item.competition}</strong>
              <small>${item.division} - ${item.location}</small>
              <em>${item.participants}</em>
            </span>
            <span class="chevron">+</span>
          </summary>
          <p>${item.details}</p>
        </details>
      `).join('')}
    </div>
  </details>
`).join('');

document.querySelector('#activity-list').innerHTML = activityGroups.map(group => `
  <section class="activity-group">
    <h3>${group.heading}</h3>
    <div class="accordion">
      ${group.items.map(item => `
        <details class="activity-card">
          <summary>
            <span>
              <strong>${item.title}</strong>
              <small>${item.label}</small>
              <em>${item.quick}</em>
            </span>
            <span class="chevron">+</span>
          </summary>
          <div class="activity-body">
            <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>
          </div>
        </details>
      `).join('')}
    </div>
  </section>
`).join('');

document.querySelectorAll('details.activity-card').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details.activity-card').forEach(other => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

document.querySelector('#menu-grid').innerHTML = menuDays.map(day => `
  <article class="menu-day">
    <header>
      <p class="eyebrow">${day.day}</p>
      <h3>${day.date}</h3>
    </header>
    ${day.meals.map(meal => `
      <section class="meal">
        <div class="meal-title">
          <strong>${meal.name}</strong>
          <span>${meal.time}</span>
        </div>
        <ul>${meal.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </section>
    `).join('')}
  </article>
`).join('');

document.querySelector('#high-ropes-grid').innerHTML = highRopes.map(item => `
  <details class="high-rope-card">
    <summary>
      <span>
        <span class="wristband" style="--team:${teamColors[item.wristband]}">${item.wristband}</span>
        <strong>${item.day} - ${item.time}</strong>
        <small>${item.students.length} students - ${item.note}</small>
      </span>
      <span class="chevron">+</span>
    </summary>
    <div class="student-list">
      ${item.students.map(student => `
        <article>
          <strong>${student[0]}</strong>
          <span>Cabin ${student[1]}</span>
          <small>${student[2]}</small>
        </article>
      `).join('')}
    </div>
  </details>
`).join('');

document.querySelector('#resource-grid').innerHTML = resources.map(resource => `
  <a class="resource-card" href="${resource.href}" target="_blank" rel="noopener">
    <span>${resource.title}</span>
    <small>${resource.detail}</small>
  </a>
`).join('');

renderGroupSwitchers();
renderTabs();
renderSchedule();
