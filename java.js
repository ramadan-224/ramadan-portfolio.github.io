document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const prenom = document.getElementById('prenom').value.trim();
            const nom = document.getElementById('nom').value.trim();
            const sujet = document.getElementById('sujet').value.trim();
            const message = document.getElementById('message').value.trim();

            if (prenom && nom && sujet && message) {
                alert('Merci ! Votre message a été envoyé.');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
});