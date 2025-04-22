// Código para as transições de seção
// Função para aplicar a classe 'visible' quando a seção estiver visível
const sections = document.querySelectorAll('.section');

function checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75) { // Se a seção estiver a 75% da altura da tela
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Verifica a visibilidade das seções quando a página for carregada
document.addEventListener('DOMContentLoaded', checkSectionVisibility);

// Verifica a visibilidade das seções quando o usuário rolar a página
window.addEventListener('scroll', checkSectionVisibility);


// Código para o menu mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
