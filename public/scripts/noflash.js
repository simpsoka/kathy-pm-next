document.addEventListener('DOMContentLoaded', function () {
  const toggleDarkOn = (d) => {
    const w = d.defaultView;
    w.localStorage.theme = 'dark'
    document.body.classList.add('dark');
  }

  const toggleDarkOff = (d) => {
    const w = d.defaultView;
    w.localStorage.theme = 'default'
    document.body.classList.remove('dark');
  }

  if (window.localStorage.theme === 'dark' ||
    (!('theme' in window.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      toggleDarkOn(document);
    } else {
      toggleDarkOff(document);
  }
})
