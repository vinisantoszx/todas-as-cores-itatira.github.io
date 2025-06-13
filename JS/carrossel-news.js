  let index = 0;
  const largura = 400; // largura da imagem
  const total = 2;
  const carrossel = document.getElementById('carrossel');

  function moveSlide(direction) {
    index = (index + direction + total) % total;
    carrossel.style.transform = `translateX(-${index * largura}px)`;
  }