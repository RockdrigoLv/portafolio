document.addEventListener('DOMContentLoaded', function() {
  navegacionFija();
  scrollNav();
  verVideo()


});

function navegacionFija() {

  const barra = document.querySelector('.header');

  // Registrar el Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      barra.classList.remove('fijo');
    } else {
      barra.classList.add('fijo');
    }
  });

  // Elemento a observar
  observer.observe(document.querySelector('.fondo'));
}

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion a');

  enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function verVideo() {
  const btnVideo = document.querySelector('#video');
  btnVideo.addEventListener('click', () => {


    const video = document.createElement('VIDEO');
    video.autoplay = "autoplay";
    video.muted = "muted";
    video.controls = "controls"
    video.preload = "metadata";
    const source = document.createElement('SOURCE');
    source.src = `video/oeepage.mp4`;
    video.appendChild(source);

    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    //boton para cerrar video
    const cerrarVideo = document.createElement('P');
    cerrarVideo.textContent = 'X';
    cerrarVideo.classList.add('btn-cerrar');

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

    cerrarVideo.onclick = function() {
      overlay.remove();
      body.classList.remove('fijar-body');
    }

    overlay.appendChild(video);
    overlay.appendChild(cerrarVideo);
    overlay.onclick = function() {
      overlay.remove();
      body.classList.remove('fijar-body');
    }






  });

}
