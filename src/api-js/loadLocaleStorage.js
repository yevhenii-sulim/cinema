'use strict';
const pageOfFilms = document.querySelector('.cards-js');

export function renderMainFromLocal(localeName = 'idFilmsWatched') {
  if (loadLocaleStorage(localeName)) {
    const parsId = loadLocaleStorage(localeName);
    return render(parsId);
  } else {
    return (pageOfFilms.innerHTML = '<h2 class="not_found">Не знайдено</h2>');
  }
}

export function loadLocaleStorage(localeName = 'idFilmsWatched') {
  return JSON.parse(localStorage.getItem(localeName));
}

function render(films) {
  pageOfFilms.innerHTML = signboard(films);
}
function signboard(films) {
  return films
    .map(item => {
      const genres = () => {
        let genresName = [];
        for (const genr of item.genres) {
          genresName.push(genr.name);
        }
        return genresName.join(', ');
      };
      return `
      <div class="films" data-atrebut-info="${item.id}">
          <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${
        item.original_title
      }">
          <h2 class="title-modal">${item.original_title}<br>
            <p class="second-title">${genres()} | ${item.release_date.slice(
        0,
        4
      )}</p>
          </h2>
        </div>
    `;
    })
    .join('');
}
