'use strict';
import { render } from './modalTemplateLibreryQueue';
export default modalLibraryQueue = {
  body: document.querySelector('body'),

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
      if (event.target.id === 'delete') {
        this.removeLocaleStorage();
      }
    });
  },

  removeLocaleStorage() {
    if (localStorage.getItem('idFilmsQueue')) {
      const parsId = JSON.parse(localStorage.getItem('idFilmsQueue'));
      const index = this.indexFilm(event.target.dataset.id, parsId);
      const removedFilm = parsId
        .slice(0, index)
        .concat(parsId.slice(index + 1, parsId.length));
      localStorage.setItem('idFilmsQueue', JSON.stringify(removedFilm));
    }
  },

  indexFilm(ids, arr) {
    return arr.findIndex(item => item.original_title === ids);
  },
};
