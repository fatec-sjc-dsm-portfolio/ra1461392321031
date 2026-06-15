const Theme = {
  currentTheme: 'light',

  init() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
    this.updateToggleButton();
  },

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  },

  toggle() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
    this.updateToggleButton();
  },

  updateToggleButton() {
    document.querySelectorAll('.theme-toggle').forEach(el => {
      el.textContent = this.currentTheme === 'light' ? '\u263E' : '\u2600';
      el.setAttribute('aria-label', this.currentTheme === 'light' ? 'Dark mode' : 'Light mode');
    });
  }
};
