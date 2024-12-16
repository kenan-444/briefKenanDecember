const revealSecretButton = document.querySelector('#reveal-secret-btn');
const secretText = document.querySelector('#secret-text');

revealSecretButton.addEventListener('click', () => {
    secretText.classList.toggle('section__text--hidden');
});

const contactForm = document.querySelector('#contact-form');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', (event) => {
    if (messageInput.value.length < 50) {
        alert('Le message doit contenir au moins 50 caractères.');
        event.preventDefault();
    }
});