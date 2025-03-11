// Search functionality
const searchInput = document.getElementById('searchInput');
const linkItems = document.querySelectorAll('.links-section .grid li');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    linkItems.forEach(item => {
        const titleElement = item.querySelector('h3');
        if (titleElement) {
            const titleText = titleElement.textContent.toLowerCase();
            item.style.display = titleText.includes(query) ? 'block' : 'none';
        }
    });
});

// Keyboard shortcut to focus search
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});
