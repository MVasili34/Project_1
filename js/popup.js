//загрзука документа
$(document).ready(() => {
    //после загрузки ищем все элементы с классом .portfolio-item
    //задаём событие по щелчку
    $('.portfolio-item').on('click', (e) => {
        e.originalEvent.stopPropagation(); //защита события клика + используем originalEvent, чтобы получить доступ к событиям DOM
        createPopup(e.currentTarget);
    });

    $('.control-item').on('click', (e) =>{
        e.originalEvent.stopPropagation();
        slideTestimonials(e.currentTarget);
    });
})

function slideTestimonials(item) {
    const clicked=$(item);
    if (clicked.hasClass('active')) {
        return; //прекращение работы функции если уже активно
    }
    const index=$('.control-item').index(clicked); //номер кнопки
    const width=$('.testimonials-card').outerWidth(true); //измерение ширины карточки вместе с margin ключ true
    const scroll=width*2*index; //измеряем расстояние для пролистования
    $('.testimonials-inner').css('transform', 'translateX(-'+ scroll +'px)');
    $('.control-item').removeClass('active').eq(index).addClass('active');; //удаляем у всех кнопок класс active, задаём класс active кнопки с текущем индексом
    console.log(index);
}

function createPopup(item) {
    console.log(item); //вывод в консоль
    const clicked = $(item); //перевод html в переменную 
    const src=clicked.data('src'); //получаем ссылку из атрибута
    const container = $('<div>', {'class': 'popup-container'}); //контейнер для увеличенной картинки
    const img = $('<img>', {'class':'popup', 'src':src}); //создание картинки
    container.append(img); //добавляем картинку в родительский блок
    $('body').append(container); //отрисовка блока с картинкой в html
    setTimeout(()=> { 
        container.addClass('ready'); //создание класса задержки
    });

    img.on ('click', ()=> {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove(); //закрытие контейнера с задержкой
        }, 250);
    });   
}