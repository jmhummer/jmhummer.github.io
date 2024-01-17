let isLightMode = true;

function toggleMode() {
    const image = document.getElementById('modeImage');
    const body = document.body;

    if (isLightMode) {
        // Switch to dark mode
        image.src = 'images/moon.svg';
        body.classList.add('dark-mode');
    } else {
        // Switch to light mode
        image.src = 'images/sun.svg';
        body.classList.remove('dark-mode');
    }

    // Toggle the mode
    isLightMode = !isLightMode;
}