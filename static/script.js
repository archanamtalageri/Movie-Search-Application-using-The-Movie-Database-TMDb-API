// Add your JavaScript code here

let selectedMovie = null;

// Function to fetch movie data from the backend API and display results
function findMovies() {
    const query = document.getElementById('movie-search-box').value.trim();

    if (query.length > 0) {
        const apiUrl = '/search-movies?query=' + encodeURIComponent(query);
        showLoadingSpinner();

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                hideLoadingSpinner();
                displayMovieResults(data);
            })
            .catch((error) => {
                hideLoadingSpinner();
                displayErrorMessage();
                console.error('Error fetching data:', error);
            });
    } else {
        // Clear the movie results if the search box is empty
        clearMovieResults();
    }
}

// Function to display movie results
function displayMovieResults(data) {
    const movieGrid = document.getElementById('result-grid');
    movieGrid.innerHTML = '';

    if (data.results.length > 0) {
        data.results.forEach((movie) => {
            const movieItem = createMovieItem(movie);
            movieGrid.appendChild(movieItem);

            // Add click event listener to each movie item
            movieItem.addEventListener('click', () => {
                selectedMovie = movie;
                displaySelectedMovie();
            });
        });
    } else {
        displayErrorMessage();
    }
}

// Function to create a movie item element
function createMovieItem(movie) {
    // Create the elements for the movie item
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    const moviePoster = document.createElement('div');
    moviePoster.classList.add('movie-poster');
    const posterImage = document.createElement('img');
    posterImage.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`; // Use backticks here
    posterImage.alt = 'Movie Poster';
    moviePoster.appendChild(posterImage);

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');
    const title = document.createElement('h3');
    title.classList.add('movie-title');
    title.textContent = movie.title;
    const releaseDate = document.createElement('p');
    releaseDate.classList.add('release-date');
    releaseDate.textContent = `Release Date: ${movie.release_date}`;
    const overview = document.createElement('p');
    overview.classList.add('overview');
    overview.textContent = movie.overview;
    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = `Rating: ${movie.vote_average}`;

    movieInfo.appendChild(title);
    movieInfo.appendChild(releaseDate);
    movieInfo.appendChild(overview);
    movieInfo.appendChild(rating);

    movieItem.appendChild(moviePoster);
    movieItem.appendChild(movieInfo);

    return movieItem;
}

// Function to display the selected movie
function displaySelectedMovie() {
    const movieGrid = document.getElementById('result-grid');
    movieGrid.innerHTML = '';

    if (selectedMovie) {
        const movieItem = createMovieItem(selectedMovie);
        movieGrid.appendChild(movieItem);
    } else {
        displayErrorMessage();
    }
}

// Function to display error message when no results are found
function displayErrorMessage() {
    const errorMessage = document.getElementById('result-grid');
    errorMessage.innerHTML = '<p class="error-message">No results found. Please try a different search.</p>';
}

// Function to show the loading spinner
function showLoadingSpinner() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'none';
}
