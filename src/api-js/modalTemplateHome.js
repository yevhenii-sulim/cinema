'use strict';
import aboutFilmFetch from './aboutFilmFetch';

export async function render(idS) {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  const isOpen = document.getElementById('backdrop-modals');

  const myRender = await aboutFilmTemplate(idS);

  if (isOpen.children.length === 0) {
    isOpen.insertAdjacentHTML('afterbegin', myRender);
    if (!isOpen.classList.contains('is-open')) {
      isOpen.classList.add('is-open');
      const body = document.querySelector('body');
      body.classList.add('is-hidden');
      body.style.paddingRight = lockPaddingValue;
    }

    if (isOpen.children.length > 0) {
      const heightModalValue =
        document.getElementById('backdrop-modals').firstElementChild
          .clientHeight;
      if (heightModalValue < window.innerHeight) {
        isOpen.style.paddingRight = lockPaddingValue;
      }
    }
  }
}

async function aboutFilmTemplate(idS) {
  const filmInfo = await aboutFilmFetch.getData(idS);
  const {
    poster_path,
    vote_count,
    vote_average,
    title,
    original_title,
    popularity,
    overview,
    genres,
    id,
  } = filmInfo;

  const genr = () => {
    let genresName = [];
    for (const genr of genres) {
      genresName.push(genr.name);
    }
    return genresName.join(', ');
  };

  return `
    <div class="modal">
      <button tupe="button" class="close">
          <span class="top"></span> 
          <span class="bottom"></span>
      </button>
      <div class="card-film">
        <img class="card-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
        <div class="fistful">
          <h2 class="title-film">${title}</h2>
          <div class="rating">
            <div class="firste-title">Vote/Votes
              <p class="detail">
                <span class="vote">${vote_average}</span> /
                <span">${vote_count}</span>
              </p>
            </div>
            <p class="firste-title">Popularity<span class="detail">${popularity}</span></p>
            <p class="firste-title">Original Title<span class="detail">${original_title}</span></p>
            <p class="firste-title">Genre<span class="detail">${genr()}</span></p>
          </div>
          <div class="about-film">
            <h3>Про кіно</h3>
            <p class="about-text">
              ${overview}
            </p>
          </div>
          <div class="add-film">
            <button type="button" class="add-watched" id="watched" data-id="${id}">додати до переглянутих</button>
            <button type="button" class="add-queue" id="queue" data-id="${id}">до черги перегляду</button>
          </div>
        </div>
      </div>
    </div>
    `;
}