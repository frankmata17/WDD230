document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeBannerBtn = document.getElementById('closeBanner');

    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = 'block';
    }

    closeBannerBtn.addEventListener('click', function () {
        banner.style.display = 'none';
    });
});
