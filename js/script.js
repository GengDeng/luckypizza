let navigation = document.querySelector('.header__nav'); // Инициализируем блок навигации

document.onscroll = function() {
  if (document.scrollTop >= navigation.offsetHeight) { // Если началась прокрутка, то...
    navigation.classList.add('stick'); // Добавляем класс со стилем со свойством position: fixed
    navigation.classList.remove('static'); // Удаляем класс со стилем со свойством position: static
  } else { // Иначе...
    navigation.classList.add('static'); // Добавляем класс со стилем со свойством position: fixed
    navigation.classList.remove('fixed'); // Удаляем класс со стилем со свойством position: static
  };

  if (document.scrollTop == document.body.offsetHeight - document.body.clientHeight) { // Если дошли до низа, то...
    navigation.classList.add('hidden'); // Добавляем класс со стилем со свойством display: none
  } else { // Иначе...
    navigation.classList.remove('hidden'); // Удаляем класс со стилем со свойством display: none
  };
}