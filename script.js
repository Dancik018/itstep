const movies = [
    {
        title: 'A Working Man',
        description: 'Levon Cade left his profession behind to work construction and be a good dad to his daughter. But when a local girl vanishes, he\'s asked to return to the skills that made him a mythic figure in the shadowy world of counter-terrorism.',
        image: 'images/Working-man.jpg',
        rating: '★★★★☆',
        popularity: '#1 Most Popular'
    }
];

let currentMovieIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const container = document.getElementById('container');

function updateMovie(index) {
    const movie = movies[index];
    container.style.backgroundImage = `url('${movie.image}')`;
    document.querySelector('.name').textContent = movie.title;
    document.querySelector('.description').textContent = movie.description;
    document.querySelector('.popularity').textContent = movie.popularity;
    document.querySelector('.stars').textContent = movie.rating;
}

nextButton.addEventListener('click', () => {
    currentMovieIndex = (currentMovieIndex + 1) % movies.length;
    updateMovie(currentMovieIndex);
});

prevButton.addEventListener('click', () => {
    currentMovieIndex = (currentMovieIndex - 1 + movies.length) % movies.length;
    updateMovie(currentMovieIndex);
});

const imagesScroll = document.querySelector('.images-scroll');

let isDown = false;
let startX;
let scrollLeft;

imagesScroll.addEventListener('mousedown', (e) => {
    isDown = true;
    imagesScroll.classList.add('active');
    startX = e.pageX - imagesScroll.offsetLeft;
    scrollLeft = imagesScroll.scrollLeft;
});

imagesScroll.addEventListener('mouseleave', () => {
    isDown = false;
    imagesScroll.classList.remove('active');
});

imagesScroll.addEventListener('mouseup', () => {
    isDown = false;
    imagesScroll.classList.remove('active');
});

imagesScroll.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - imagesScroll.offsetLeft;
    const walk = (x - startX) * 3;
    imagesScroll.scrollLeft = scrollLeft - walk;
});
