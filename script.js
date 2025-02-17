// Animation on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('slide-in');
        }
    });
});

function playVideo() {
    let video = document.getElementById("videoInterview");
    video.play();}
    
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission par défaut
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Ouvrir le client de messagerie avec les données pré-remplies
        window.location.href = `mailto:contact@gallas.com?subject=Message de ${name}&body=${encodeURIComponent(message)}\n\nDe : ${email}`;

        // Afficher un message de confirmation
        alert('Votre message a été préparé. Veuillez envoyer l\'e-mail depuis votre client de messagerie.');
    });