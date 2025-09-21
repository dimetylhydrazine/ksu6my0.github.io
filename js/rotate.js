const element = document.getElementById('circle');

  element.addEventListener('click', function() {
    // 1. Добавляем класс 'rotating'
    this.classList.add('rotating');

    // 2. Удаляем класс 'rotating' после завершения анимации
    //    Это нужно, чтобы элемент мог снова вращаться при следующем клике.
    setTimeout(() => {
      this.classList.remove('rotating');
    }, 5000); // Время в миллисекундах должно совпадать с duration в transition!
  });