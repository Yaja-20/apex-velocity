// script.js pour Apex Velocity

// Scroll fluide vers la section "Nouveautés"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Ajout d'un feedback lors du clic sur "Ajouter au panier"
  const boutonsAjouter = document.querySelectorAll('.ajouter');
  
  boutonsAjouter.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Ajouté ✔️';
      btn.disabled = true;
      btn.style.backgroundColor = '#555';
      setTimeout(() => {
        btn.textContent = 'Ajouter au panier';
        btn.disabled = false;
        btn.style.backgroundColor = '#38b000';
      }, 2000);
    });
  });
  