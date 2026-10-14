document.documentElement.lang='en';
document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset.en.replace(/\\n/g,'\n'));
