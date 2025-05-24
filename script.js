 const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const botaoProseguir = document.querySelector('.btn');

    // Clique nos links do menu e no botão "Prosseguir"
    [...navLinks, botaoProseguir].forEach(link => {
      link.addEventListener('click', (e) => {
        const sectionId = e.target.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Troca classe "active" conforme a seção visível
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === id);
          });
        }
      });
    }, {
      threshold: 0.6
    });

    sections.forEach(section => observer.observe(section));

    function toggleMais() {
  const mais = document.getElementById("maisPresentes");
  mais.style.display = mais.style.display === "none" ? "block" : "none";
}

function abrirVideo() {
  window.open("link-do-video.mp4", "_blank");
}

function abrirImagem() {
  document.getElementById("modal").innerHTML = '<img src="imagem.jpg" style="width:100%">';
  document.getElementById("modal").style.display = "block";
}

function abrirVideoExtra() {
  window.open("link-do-video-extra.mp4", "_blank");
}

function abrirImagemExtra() {
  document.getElementById("modal").innerHTML = '<img src="imagem-extra.jpg" style="width:100%">';
  document.getElementById("modal").style.display = "block";
}

function abrirGaleria() {
  document.getElementById("modal").innerHTML = `
    <img src="galeria1.jpg" style="width:48%; margin: 1%">
    <img src="galeria2.jpg" style="width:48%; margin: 1%">
  `;
  document.getElementById("modal").style.display = "block";
}

// Fecha o modal ao clicar fora
window.onclick = function(e) {
  if (e.target.id === "modal") {
    e.target.style.display = "none";
  }
}

