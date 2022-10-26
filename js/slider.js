let slideIndex = 0;

showSlides = (i) => {
  //вытягиваем все картинки
  let slide = document.getElementsByClassName("image");
  //вытягиваем все точки
  let dots = document.getElementsByClassName("dot");

  // скрываем все картинки
  for (i = 0; i < slide.length; i++) slide[i].style.display = "none";

  // убираем активный класс у всех точек
  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  // если индекс больше длинны всех объектов обнуляем значение индекса
  if (slideIndex > slide.length - 1) slideIndex = 0;

  // если индекс меньше нуля присваиваем ему значение последнего изображения
  if (slideIndex < 0) slideIndex = slide.length - 1;

  // делаем видимым изображение с текущим индексом
  slide[slideIndex].style.display = "block";
  // делаем активной точку с текущим индексом
  dots[slideIndex].className += " active";
};
//вызываем функцию после полной загрузки окна браузера

let timer = 0;
makeTimer(); //Создаем интервал
function makeTimer() {
  clearInterval(timer); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
  timer = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

showSlides(slideIndex);

