window.onload=function() { //добавление функции
    const hamburger=document.getElementById('hamburger');

    hamburger.onclick = function() { //событие нажатие на кнопку
        let topNav=document.getElementById('myTopnav'); //добавление функции
        if (topNav.className==='responsive') {
            topNav.className='';
        } else {
            topNav.className='responsive';
        }
    }

   const menuList = document.querySelectorAll('.menu-element');
   menuList.forEach(function(element) { //для каждого клика цикл ForEach
    element.addEventListener('click', function(event) {
    const elementLink=element.dataset.link; //считаем атрибут data у элемента, по которому был клик
    if (elementLink) { //проеверяем есть ли альтернативаная ссылка
        event.preventDefault(); //запрет выполнения стандартного поведения нажатого элемента
    document.getElementById(elementLink).scrollIntoView({behavior: 'smooth'}); //плавная прокрутка к меню
    }   
   });
 });
}