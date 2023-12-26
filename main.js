
$('.menu-but').on('click', function() {
  $('.menu').toggleClass('menu_active')
})

$('.menu-but').on('click', function() {
  $('.menu-but').toggleClass('menu-but_close')
})

$('.menu-but').on('click', function() {
  $('.header_p').toggleClass('header_p-close')
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function startAnimation() {
  const object1 = document.getElementById('object1');
  const object2 = document.getElementById('object2');

  // Добавляем класс с анимацией к первому объекту
  object1.classList.add('grenki');

  // Отслеживаем завершение анимации для первого объекта
  object1.addEventListener('animationend', () => {
      // Удаляем класс с анимацией у первого объекта
      object1.classList.remove('grenki');

      // Добавляем класс с анимацией ко второму объекту
      object2.classList.add('grenki');

      // Удаляем обработчик события, чтобы не вызывался повторно
      object1.removeEventListener('animationend');
  });
}

document.getElementById("modal-but").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-but").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

document.getElementById("modal-but-mobile").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-but").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

