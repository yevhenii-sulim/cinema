'use strict';
import { addLocalStorage } from './addLocaleStorage';
import { render } from './modalTemplateHome';

export default modal = {
  eventListeners() {
    document.addEventListener('click', event => {
      const timout = 250;
      const isOpen = document.getElementById('backdrop-modals');
      if (event.target.closest('.films')) {
        render(event.target.parentNode.dataset.atrebutInfo);
      }
      if (
        event.target.closest('.close') ||
        event.target.id === 'backdrop-modals'
      ) {
        const body = document.querySelector('body');

        if (isOpen.classList.contains('is-open')) {
          setTimeout(() => {
            isOpen.innerHTML = '';
            isOpen.classList.remove('overflow-hidden');
          }, timout);
          isOpen.classList.remove('is-open');
          isOpen.classList.add('overflow-hidden');
          body.classList.remove('is-hidden');
          body.style.paddingRight = 0;
        }
      }
      addLocalStorage(event.target.dataset.id, event.target.id);
    });
  },
};
