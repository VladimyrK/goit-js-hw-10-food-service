const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
let currentTheme;
currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
if (
  JSON.parse(localStorage.getItem('currentTheme')) !== 'dark-theme' &&
  JSON.parse(localStorage.getItem('currentTheme')) !== 'light-theme'
) {
  localStorage.setItem('currentTheme', JSON.stringify(Theme.LIGHT));
  currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
  body.classList.add(currentTheme);
} else {
  body.classList.add(currentTheme);
}

if (JSON.parse(localStorage.getItem('currentTheme')) === 'dark-theme') {
  themeSwitcher.checked = true;
  body.classList.add(currentTheme);
}

themeSwitcher.addEventListener('change', () => {
  if (JSON.parse(localStorage.getItem('currentTheme')) === 'light-theme') {
    body.classList.remove(currentTheme);
    localStorage.setItem('currentTheme', JSON.stringify(Theme.DARK));
    currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
    body.classList.add(currentTheme);
  } else {
    body.classList.remove(currentTheme);
    localStorage.setItem('currentTheme', JSON.stringify(Theme.LIGHT));
    currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
    body.classList.add(currentTheme);
  }
});
