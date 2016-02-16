# Test task for Geeks.team

Сразу хочу отметить пару пунктов насчет задания:
- При запросе с локального сервера на Ваш, будет наблюдаться ошибка:

    >    No Access-Control-Allow-Origin header is present on the requested resource

   Т.е. браузер ожидает, что в заголовке сервера будет, что то типа:

        Access-Control-Allow-Origin: http://my.server
    Но Вы будете запускать же на там где крутится сервер. Т.е. проблем не будет.
    (Сначала я решил это поставив плагин для хрома который отключает это дело.)
    
- В инструкции нет валидных credentials. Т.е. можно добиться ответов Denied и Banned.
Это, я так думаю, сделано не случайно. По-хорошему надо было написать тесты и с помощью сервиса `$httpBackend` проверить все запросы. Но я пошел более простым путем и набросал сервер с аналогичным функционалом (Express.js).
Если захотите его можно будет тоже поставить. Установка и запуск тривиальны:

        
            $ npm install
            $ node app.js

И изменить в файле `app.constants.js`, строчку :


            APP_ENDPOINT: 'https://93.183.203.13:10443/login'
            на
            APP_ENDPOINT: '/login'
        

Клиент лежит в папке app, структуру каталогов Angular.js я сформировал исходя из рекомендаций [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).
Так же проверил код `jshint'ом.`

### Связь со мной 

- skype: alexandr.brick
- email: g00dv1n.private @ gmail.com
