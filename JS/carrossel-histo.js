const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const pagination = document.querySelector('.carousel-pagination');

let index = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    updatePagination();
}

function updatePagination() {
    pagination.innerHTML = '';
    for (let i = 0; i < carouselItems.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
        if (i === index) {
            dot.classList.add('active');
        }
        pagination.appendChild(dot);
    }
}

prevButton.addEventListener('click', () => {
    index = (index - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index + 1) % carouselItems.length;
    updateCarousel();
});

updateCarousel(); // Initialize carousel