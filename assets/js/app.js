let body = document.body;
let changeThemeButton = document.querySelector('.changeTheme');
let storedTheme = localStorage.getItem('theme');

if (storedTheme) {
    body.className = storedTheme;
}

changeThemeButton.addEventListener('click', () => {
    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
        localStorage.setItem('theme', 'night');
    } else {
        body.classList.remove('night');
        body.classList.add('day');
        localStorage.setItem('theme', 'day');
    }
})