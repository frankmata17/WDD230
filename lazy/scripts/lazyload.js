document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer to handle lazy loading
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.setAttribute('src', img.getAttribute('data-src'));
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px',
    });

    const lazyImages = document.querySelectorAll('img[data-src]');

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});
