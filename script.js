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
    const walk = (x - startX) * 3; // Ajustează viteza de scroll
    imagesScroll.scrollLeft = scrollLeft - walk;
});
