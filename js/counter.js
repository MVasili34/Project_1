$(document).ready(() => { //ожидание загрузки страницы
    $('.countup').each(function() { //проход циклом по каждому элементу
        const that=$(this), //передача переменной элемента
        countTo=that.attr('data-end'); //запись конечного значения счётчика
        $({countNum: 0}).animate({ //анимируем счётчик
            countNum: countTo //конечное значение счётчика
        },
        {
            duration: 3000, //продолжительность 3 секунды
            easing: 'linear', //плавность
            step: function() { //шаг выполнения
                that.text(Math.floor(this.countNum));
            },
            complete: function() { //при завершении
                that.text(this.countNum);
            }
        });
    });
});