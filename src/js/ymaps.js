
function mapInit() {
    ymaps.ready(() => {
        var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64], // Москва
            zoom: 13,
            controls: ['zoomControl'],
            behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
        }, { 
            searchControlProvider: 'yandex#search' 
        });

        /* var balloonContent = ymaps.templateLayoutFactory.createClass('<div class="baloon" style="background-color: #835127">'+
                                                                        '<header class="header">'+
                                                                            '<div class="header__address">'+
                                                                                '<img src="./images/address.png" alt="" class="header__address-image">'+
                                                                                '<div class="header__address-text">Невский пр., 78, Санкт-Петербург, 191025</div>'+
                                                                            '</div>'+
                                                                            '<button class="header__close">'+
                                                                                '<img src="./images/close.png" alt="" class="header__close-image">'+
                                                                            '</button>'+
                                                                        '</header>'+
                                                                        '<ul class="feedbacks"></ul>'+
                                                                        '<div class="form">'+
                                                                            '<div class="form__title">ваш отзыв</div> '+
                                                                            '<input type="text" class="form__input form__name" placeholder="Ваше имя">'+
                                                                            '<input type="text" class="form__input form__title" placeholder="Укажите место">'+
                                                                            '<input type="text" class="form__input form__text" placeholder="Поделитесь впечатлениями">'+
                                                                        '</div>'+
                                                                        '<footer class="footer">'+
                                                                            '<button class="footer__add">Добавить</button>'+
                                                                        '</footer>'+
                                                                    '</div>');

        myMap.events.add('click', e => {
            var coords = e.get('coords');

            myMap.balloon.open(
                coords,
                {
                    content: balloonContent
                }
            );
        });*/

        var placemarksArray = [];

        myMap.events.add('click', e => {
            var coords = e.get('coords');
            var placemark;

            placemark = new ymaps.Placemark(coords, {
                hintContent: 'адрес',
                balloonContent: '<div class="baloon" style="background-color: #835127">'+
                                '<header class="header">'+
                                    '<div class="header__address">'+
                                        '<img src="./images/address.png" alt="" class="header__address-image">'+
                                        '<div class="header__address-text">Невский пр., 78, Санкт-Петербург, 191025</div>'+
                                    '</div>'+
                                    '<button class="header__close">'+
                                        '<img src="./images/close.png" alt="" class="header__close-image">'+
                                    '</button>'+
                                '</header>'+
                                '<ul class="feedbacks"></ul>'+
                                '<div class="form">'+
                                    '<div class="form__title">ваш отзыв</div> '+
                                    '<input type="text" class="form__input form__name" placeholder="Ваше имя">'+
                                    '<input type="text" class="form__input form__title" placeholder="Укажите место">'+
                                    '<input type="text" class="form__input form__text" placeholder="Поделитесь впечатлениями">'+
                                '</div>'+
                                '<footer class="footer">'+
                                    '<button class="footer__add">Добавить</button>'+
                                '</footer>'+
                            '</div>'
            });
            myMap.geoObjects.add(placemark);
            placemarksArray.push(placemark);
        });

        var clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedVioletClusterIcons',
            clusterDisableClickZoom: true,
            openBalloonOnClick: false
        });

        clusterer.add(placemarksArray);
        myMap.geoObjects.add(clusterer);
    });
}

export {
    mapInit
}