async function searchMovie() {
  const title = document.getElementById('movieInput').value;
  const response = await fetch(`https://www.omdbapi.com/?apikey=ac9e0ea7&s=${title}`);
  const data = await response.json();

  const movieContainer = document.getElementById('movies');
  if (data.Search) {
    movieContainer.innerHTML = data.Search.map(movie => `
      <div class="movie">
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100'}" />
        <div>
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      </div>
    `).join('');
  } else {
    movieContainer.innerHTML = `<p>No movies found.</p>`;
  }
}
