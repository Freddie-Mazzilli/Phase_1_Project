let moviesArray = {}
const descriptionContainer = document.querySelector('.description-container')
const trailerPlayer = document.querySelector('.trailer-player')
const ratingImage = document.createElement('img')
ratingImage.src = './images/IMDb.png'

fetch('http://localhost:3000/data')
.then(res => res.json())
.then(movies => {
    movies.forEach(movie => {
        createMenu(movie)
    })
    displayMovie(movies[0])
    fillMoviesArray(movies)
})

function fillMoviesArray(movies){
    return moviesArray = movies
}

const movieNav = document.querySelector('.nav')

function createMenu(movie){
    const navItem = document.createElement('img')
    navItem.src = movie.cover_url
    navItem.addEventListener('click', () => {
        displayMovie(movie)
    })
    movieNav.appendChild(navItem)
}

const phaseForm = document.querySelector('.phase-form')
const phase1Checkbox = document.getElementById('phase1')
const phase2Checkbox = document.getElementById('phase2')
const phase3Checkbox = document.getElementById('phase3')
const phase4Checkbox = document.getElementById('phase4')
const phase5Checkbox = document.getElementById('phase5')

phaseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    movieNav.innerHTML = ""
    if (phase1Checkbox.checked === true){
        moviesArray.forEach(movie => {
            if (movie.phase === 1) {
                createMenu(movie)
            }
        })
    }
    if (phase2Checkbox.checked === true){
        moviesArray.forEach(movie => {
            if (movie.phase === 2) {
                createMenu(movie)
            }
        })
    }
    if (phase3Checkbox.checked === true){
        moviesArray.forEach(movie => {
            if (movie.phase === 3) {
                createMenu(movie)
            }
        })
    }
    if (phase4Checkbox.checked === true){
        moviesArray.forEach(movie => {
            if (movie.phase === 4) {
                createMenu(movie)
            }
        })
    }
    if (phase5Checkbox.checked === true){
        moviesArray.forEach(movie => {
            if (movie.phase === 5) {
                createMenu(movie)
            }
        })
    }
    if (phase1Checkbox.checked === false && phase2Checkbox.checked === false && phase3Checkbox.checked === false && phase4Checkbox.checked === false && phase5Checkbox.checked === false){
        moviesArray.forEach(movie => {
            createMenu(movie)
        })
    }
})

const cardContainer = document.querySelector('.card-container')
const smallContainer = document.querySelector('.small-container')
const infoContainer = document.querySelector('.info-container')
const movieRating = document.createElement('h4')


function displayMovie(movie){
    cardContainer.innerHTML = ""
    descriptionContainer.innerHTML = ""
    infoContainer.innerHTML = ""
    smallContainer.appendChild(ratingImage)
    const coverImage = document.createElement('img')
    coverImage.src = movie.cover_url
    cardContainer.appendChild(coverImage)
    const movieTitle = document.createElement('h1')
    movieTitle.textContent = movie.title
    descriptionContainer.appendChild(movieTitle)
    const movieDescription = document.createElement('p')
    movieDescription.textContent = movie.overview
    descriptionContainer.appendChild(movieDescription)
    const movieDirectors = document.createElement('h3')
    movieDirectors.textContent = `Directed By: ${movie.directed_by}`
    descriptionContainer.appendChild(movieDirectors)
    const movieSaga = document.createElement('h3')
    movieSaga.textContent = `This movie is a part of the ${movie.saga}`
    descriptionContainer.appendChild(movieSaga)
    trailerPlayer.src = movie.trailer_url
    const releaseDate = document.createElement('h3')
    releaseDate.innerHTML = `Released on: <br>${movie.release_date}`
    infoContainer.appendChild(releaseDate)
    const boxOffice = document.createElement('h3')
    const boxOfficeValue = movie.box_office.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    boxOffice.innerHTML = `Box Office Sales: <br>$${boxOfficeValue}`
    infoContainer.appendChild(boxOffice)
    const movieLength = document.createElement('h3')
    movieLength.innerHTML = `Duration: <br> ${movie.duration} minutes` 
    infoContainer.appendChild(movieLength)
    const postCredits = document.createElement('h3')
    postCredits.innerHTML = `Post Credits Scene(s): <br>${movie.post_credit_scenes} scene(s)`
    infoContainer.appendChild(postCredits)
    movieRating.textContent = movie.imdb_rating
    console.log(movie.imdb_rating)
}

smallContainer.addEventListener('mouseover' , () => {
    smallContainer.innerHTML = ""
    smallContainer.appendChild(movieRating)
})

smallContainer.addEventListener('mouseout', () => {
    smallContainer.innerHTML = ""
    smallContainer.appendChild(ratingImage)
})