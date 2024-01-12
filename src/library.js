'use strict';
import modalLibraryhome from './api-js/modalLibrary';
import modalLibraryQueue from './api-js/modalLibreryQueue';
import { renderMainFromLocal } from './api-js/loadLocaleStorage';
export default class Library {
  constructor() {
    this.components = {};
    this.eventListeners();
  }

  eventListeners() {
    modalLibraryhome.eventListeners();
    modalLibraryQueue.eventListeners();
    renderMainFromLocal();

    document.addEventListener('click', async event => {
      if (event.target.closest('.watched')) {
        renderMainFromLocal();
      }
      if (event.target.closest('.queue')) {
        renderMainFromLocal('idFilmsQueue');
      }
    });
  }
}
