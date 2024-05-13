document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeImage = document.getElementById('modeImage');

    // Determine the base path based on the current page's location
    const basepath = window.location.pathname.includes('pages') ? '../images/' : 'images/';

    // Check if there is a saved dark mode preference in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state based on the saved preference
    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeImage.src = basepath + 'moon.svg'; // Change the image source
    } else {
        modeImage.src = basepath + 'sun.svg'; // Set the image source for light mode
    }

    // Function to toggle dark mode and update the image
    function toggleDarkMode() {
        
        // Toggle dark mode class
        body.classList.toggle('dark-mode');

        // Update local storage with the current dark mode state
        const darkModeState = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', darkModeState);

        // Update the image source based on the current dark mode state
        modeImage.src = body.classList.contains('dark-mode') ? basepath + 'moon.svg' : basepath + 'sun.svg';
    }

    // Event listener for the dark mode toggle image
    if (modeImage) {
        modeImage.addEventListener('click', toggleDarkMode);
    }
});