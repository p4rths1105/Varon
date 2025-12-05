// Basic Search Functionality
const searchForm = document.querySelector('.search-bar');
if (searchForm) {
    const searchInput = searchForm.querySelector('input');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();

        if (query === 'fashion') {
            window.location.href = 'fashion.html';
        } else if (query === 'electronics') {
            window.location.href = 'electronics.html';
        } else if (query === 'decor' || query === 'home' || query === 'home decor') {
            window.location.href = 'decor.html';
        } else if (query === 'beauty') {
            window.location.href = 'beauty.html';
        } else if (query === 'books') {
            window.location.href = 'books.html';
        } else if (query === 'sports') {
            window.location.href = 'sports.html';
        } else {
            alert('Category not found! Please try: Fashion, Electronics, Home, Beauty, Books, or Sports.');
        }
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.innerText = '☀️';
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerText = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerText = '🌙';
        }
    });
}

// Cart Quantity Logic
document.addEventListener('click', function (e) {
    if (e.target.matches('.cart-qty button')) {
        const button = e.target;
        const input = button.parentElement.querySelector('input');
        let value = parseInt(input.value);
        const type = button.innerText.trim();

        if (type === '+') {
            value++;
        } else if (type === '-') {
            if (value > 1) {
                value--;
            }
        }

        input.value = value;
    }
});