$(function() {

    var template = $('#tmpl').html(),
        data = {
            title: 'Зотова Юлия Сергеевна',
            link: [
                'img/pic.jpg',
                'https://www.facebook.com/felis.manul',
                'https://market.yandex.ua/'
            ],
            imgTitle: 'Это я немного поражена происходящим',
            text: [
                'Немного знаю HTML, CSS, Twitter Bootstrap и LESS',
                'Хочу учить фронтенд, потому что:',
                'Это интересно',
                'Неплохая перспектива',
                'Дополнительные знания и навыки еще никому не вредили',
                'Мой контактный телефон:',
                '+38095367*365',
                'Мой фидбек: <i>Надо? Сделаем.</i>',
                'Мой профиль в сетях:',
                'Facebook',
                'Работаю здесь',
            ],
        },
        content = tmpl(template, data);

    $('body').append(content);
});
