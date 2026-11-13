'use strict';

const menu = document.querySelector('.mobile-menu');

if (menu) {
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) menu.open = false;
  });

  document.addEventListener('click', (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });

  const desktop = window.matchMedia('(min-width: 701px)');
  desktop.addEventListener('change', () => {
    if (desktop.matches) menu.open = false;
  });
}

const copyButton = document.querySelector('[data-copy-email]');

if (copyButton) {
  const copyStatus = document.querySelector('.copy-status');
  copyButton.hidden = false;

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      copyStatus.textContent = 'Email address copied.';
    } catch {
      const address = document.getElementById('contact-address');
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Email address selected. Use your device’s copy command.';
    }
  });
}
