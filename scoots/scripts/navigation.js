document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".mobile-menu");
    const navigation = document.querySelector(".navigation");

    // Initially hide the navigation only for mobile view
    if (window.innerWidth <= 768 && navigation) {
        navigation.style.display = "none";
    }

    if (hamburgerMenu && navigation) {
        hamburgerMenu.addEventListener("click", function () {
            navigation.classList.toggle("active");

            if (navigation.classList.contains("active")) {
                navigation.style.display = "flex";
                hamburgerMenu.innerHTML = "&#10005;";
            } else {
                navigation.style.display = "none";
                hamburgerMenu.innerHTML = "&#9776;";
            }
        });
    } else {
        console.error("One or more elements not found. Check your HTML and script.");
    }

    // Add event listener for window resize
    window.addEventListener("resize", function () {
        // Check if viewport width is greater than 768px
        if (window.innerWidth > 768) {
            navigation.style.display = "flex";
        } else {
            if (!navigation.classList.contains("active")) {
                navigation.style.display = "none";
            }
        }
    });
});
