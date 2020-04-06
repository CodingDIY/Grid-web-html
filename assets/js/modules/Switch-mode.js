export function switchTheme() {
  let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => { document.documentElement.classList.remove('transition') }, 1000);
  }

  window.onload = () => {
    const currentHour = new Date().getHours();
    // console.log(currentHour);

    if (currentHour >= 7 && currentHour <= 19) {
      trans();
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      trans();
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}