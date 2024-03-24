document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {
        // Check if the current link matches the current page URL
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.innerHTML = '> ' + link.innerHTML; // Add arrow to the beginning of the link text
        }

        link.addEventListener("click", function(e) {
            // Remove 'active' class and arrow from all links
            navLinks.forEach(link => {
                link.classList.remove("active");
                link.innerHTML = link.innerHTML.replace('> ', ''); // Remove arrow from link text
            });

            // Add 'active' class and arrow to clicked link
            this.classList.add("active");
            this.innerHTML = '> ' + this.innerHTML; // Add arrow to the beginning of the link text
            
            // Check if light mode is active
            if (document.body.classList.contains('light-mode')) {
                this.style.textDecoration = 'none'; // Remove underline
            } else {
                this.style.textDecoration = 'none'; // Remove underline
            }
        });
    });
});
