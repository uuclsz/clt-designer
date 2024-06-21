// script.js

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Alterar o texto do botão
    const button = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'MODO CLARO';
    } else {
        button.textContent = 'MODO ESCURO';
    }

    // Salvar a preferência do usuário no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Carregar a preferência do usuário ao carregar a página
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    const button = document.getElementById('toggle-dark-mode');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        button.textContent = 'MODO CLARO';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        button.textContent = 'MODO ESCURO';
    }
});
