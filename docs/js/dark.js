/* Allow dark or light mode */

function toggleDark() {
  if (localStorage.getItem('dark') === 'off') {
    localStorage.setItem('dark', 'on');
    document.querySelector('body').classList.add('dark');
  } else {
    localStorage.setItem('dark', 'off');
    document.querySelector('body').classList.remove('dark');
  }
}
