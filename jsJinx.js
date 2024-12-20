const revealSecretButton = document.querySelector('#reveal-secret-btn');
const secretText = document.querySelector('#secret-text');

revealSecretButton.addEventListener('click', () => {
    secretText.classList.toggle('section__text--hidden');
});

const contactForm = document.querySelector('#contact-form');
const messageInput = document.querySelector('#message');
const contactMessage = document.querySelector('#contact-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    if (messageInput.value.trim().length < 1) {
        contactMessage.textContent = 'Erreur : Le message doit contenir au moins un caractère.';
        contactMessage.style.color = 'red';
    } else {
        contactMessage.textContent = 'Elle a reçu votre message avec succès !';
        contactMessage.style.color = 'green';
        contactForm.reset(); 
    }
});

const btnJinx = document.getElementById("btn-jinx");
const btnPowder = document.getElementById("btn-powder");
const body = document.body;
const headerImage = document.querySelector('.header__img');
const logo = document.querySelector('.header__logo');
const sectionTitle = document.querySelector('.section__title');
const gallery = document.querySelector('.gallery');
const biographieText = document.querySelector('.section__text');
const sections = document.querySelectorAll('.section');
const titles = document.querySelectorAll('.section__title');
const texts = document.querySelectorAll('.section__text');


function switchCharacter(character) {
    if (character === 'jinx') {
        body.classList.add('jinx-active');
        body.classList.remove('powder-active');
        body.style.backgroundImage = "url('images/graffitiJinxGif.gif')";
        body.style.backgroundSize = "40%"; 
        headerImage.src = "images/jinxGif.gif";
        headerImage.alt = "Animation de Jinx";
        logo.src = "images/jinxLogo.png";
        sectionTitle.textContent = "Biographie de JINX";
        biographieText.textContent = "Jinx est un personnage fictif emblématique de l'univers de League of Legends. Introduite en 2013 en tant que champion jouable, elle a marqué les esprits grâce à son clip promotionnel explosif : 'Get Jinxed'. En 2021, elle fait un retour fracassant dans la série Netflix \"Arcane\" en tant que personnage principal révélant une version plus humaine et complexe d'elle.";
        gallery.innerHTML = `
            <img src="images/jinxImg1.webp" alt="Jinx en action" class="gallery__img">
            <img src="images/jinxImg2.webp" alt="Portrait de Jinx" class="gallery__img">
            <img src="images/jinxImg3.jpg" alt="Jinx avec ses armes" class="gallery__img">
        `;
        contactTitle.textContent = "Contactez Jinx";
        secretText.textContent = "Jinx adore prendre Poiscaille (son flingue) et le faire parler comme une marionnette.";

        sections.forEach(section => section.style.backgroundColor = '#000'); 
        titles.forEach(title => title.style.color = '#FF00FF'); 
        texts.forEach(text => text.style.color = '#FFF'); 

        btnJinx.classList.add('active');
        btnPowder.classList.remove('active');
    } else if (character === 'powder') {
        body.classList.add('powder-active');
        body.classList.remove('jinx-active');
        body.style.backgroundImage = "url('images/graffitiPowder.jpg')";
        body.style.backgroundSize = "100%"; 
        headerImage.src = "images/powderGif.gif";
        headerImage.alt = "Animation de Powder";
        logo.src = "images/powderLogo.png";
        sectionTitle.textContent = "Biographie de POWDER";
        biographieText.innerHTML = `Powder est Jinx dans une version alternative où elle n'a pas vécu son trauma d'enfance. On voit qu'elle vit paisiblement, sans folie. On peut la retrouver dans la saison 2 d'Arcane, et dans la magnifique chanson de <a href="https://www.youtube.com/watch?v=orxCH7LzJ9c" target="_blank" rel="noopener noreferrer">Stromae et Pomme</a>.`;
        gallery.innerHTML = `
            <img src="images/powderImg1.gif" alt="Powder jeune" class="gallery__img">
            <img src="images/powderImg2.gif" alt="Powder triste" class="gallery__img">
            <img src="images/powderImg3.gif" alt="Powder enfant" class="gallery__img">
        `;
        contactTitle.textContent = "Contactez Powder";
        secretText.textContent = "Le secret de Powder : Elle adore dessiner des étoiles dans son carnet.";

        

        sections.forEach(section => section.style.backgroundColor = '#FFF'); 
        titles.forEach(title => title.style.color = '#00BFFF'); 
        texts.forEach(text => text.style.color = '#000'); 

        btnPowder.classList.add('active');
        btnJinx.classList.remove('active');
    }
    
}


btnJinx.addEventListener('click', () => switchCharacter('jinx'));
btnPowder.addEventListener('click', () => switchCharacter('powder'));

const images = document.querySelectorAll('.gallery__img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__img');
const closeBtn = document.querySelector('.lightbox__close');

// Ouvrir le lightbox avec l'image cliquée
images.forEach((image) => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src; // Remplacer l'image dans le lightbox
        lightbox.classList.add('visible');
    });
});

// Fermer le lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

// Fermer le lightbox en cliquant en dehors de l'image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove('visible');
    }
});


