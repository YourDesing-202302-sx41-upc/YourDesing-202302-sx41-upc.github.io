var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function filtrarResultados() {
    var input, filter, contenedor, imagenes, i, nombre, txtValue;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    contenedor = document.querySelector(".galeria-container");
    imagenes = contenedor.querySelectorAll(".imagen");
  
    imagenes.forEach(function(imagen) {
      nombre = imagen.querySelector("h1");
      txtValue = nombre.textContent || nombre.innerText;
  
      // Cambiado a includes para que busque en cualquier parte del texto
      if (txtValue.toUpperCase().includes(filter)) {
        imagen.style.display = ""; // Muestra el contenedor de la imagen
      } else {
        imagen.style.display = "none"; // Oculta el contenedor de la imagen
      }
    });
  }
  
  
  
  