const I18n = {
  currentLang: 'pt',
  translations: {},

  async init() {
    this.currentLang = localStorage.getItem('lang') || 'pt';
    await this.loadTranslations(this.currentLang);
    this.applyTranslations();
    this.updateLangToggle();
  },

  async loadTranslations(lang) {
    try {
      const response = await fetch(`static/lang/${lang}.json`);
      this.translations = await response.json();
    } catch (e) {
      try {
        const response = await fetch(`../static/lang/${lang}.json`);
        this.translations = await response.json();
      } catch (e2) {
        console.error('Failed to load translations', e2);
      }
    }
  },

  get(key) {
    const keys = key.split('.');
    let value = this.translations;
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  },

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.get(key);
      if (translation !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrs = el.getAttribute('data-i18n-attr').split(',');
      attrs.forEach(attr => {
        const [attrName, key] = attr.trim().split(':');
        const translation = this.get(key.trim());
        if (translation !== key.trim()) {
          el.setAttribute(attrName.trim(), translation);
        }
      });
    });
  },

  async setLanguage(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    await this.loadTranslations(lang);
    this.applyTranslations();
    this.updateLangToggle();
  },

  updateLangToggle() {
    document.querySelectorAll('.lang-toggle').forEach(el => {
      el.textContent = this.currentLang === 'pt' ? 'EN' : 'PT';
      el.setAttribute('data-i18n', '');
    });
  },

  toggle() {
    const newLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.setLanguage(newLang);
  }
};
