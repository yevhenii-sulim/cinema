import aboutFilmFetch from './aboutFilmFetch';

function sameId(arr) {
  return arr.findIndex(item => {
    return item.id === this.id;
  });
}

export async function addLocalStorage(dataset, obj) {
  if (obj === 'watched') {
    const filmInfo = await aboutFilmFetch.getData(dataset);
    const idFilms = localStorage.getItem('idFilmsWatched');
    if (idFilms) {
      const parsId = JSON.parse(idFilms);
      const similarId = sameId(parsId);
      if (similarId === -1) {
        parsId.push(filmInfo);
        localStorage.setItem('idFilmsWatched', JSON.stringify(parsId));
      }
      return;
    }
    localStorage.setItem('idFilmsWatched', JSON.stringify([filmInfo]));
  }

  if (obj === 'queue') {
    const filmInfo = await aboutFilmFetch.getData(dataset);
    const idFilms = localStorage.getItem('idFilmsQueue');
    if (idFilms) {
      const parsId = JSON.parse(idFilms);
      const similarId = sameId(parsId);
      if (similarId === -1) {
        parsId.push(filmInfo);
        localStorage.setItem('idFilmsQueue', JSON.stringify(parsId));
      }
      return;
    }
    localStorage.setItem('idFilmsQueue', JSON.stringify([filmInfo]));
  }
}
