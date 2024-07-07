// Seleziona l'icona del menu e il menu laterale
const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const sidebar = document.querySelector('.sidebar') as HTMLElement;

// Aggiungi un gestore per il click sull'icona del menu
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
