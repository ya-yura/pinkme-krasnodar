# Pinkme — сайт студии фитнеса и растяжки

Одностраничный статический сайт Pinkme, Краснодар. Проект собран на чистом HTML, CSS и JavaScript без внешних UI-библиотек и без фейковых форм: запись ведёт в действующий Yclients, вопросы — в Telegram, социальная ссылка — в Instagram, маршрут — в интерактивную карту Яндекс.

## Локальный запуск

Требуется Node.js 20+ и Python 3.

```bash
npm run build
npm run serve
```

После запуска откройте `http://localhost:4173`.

## Сборка и публикация

`npm run build` копирует production-версию из `public/` в `dist/`. GitHub Actions выполняет эту сборку при push в `main` и публикует `dist/` в GitHub Pages через workflow `.github/workflows/deploy.yml`.

Для локальной проверки после сборки:

```bash
python -m http.server 4173 -d dist
```

## Структура

- `public/index.html` — семантическая разметка и контент;
- `public/styles.css` — адаптивная стилистика, focus-состояния и reduced-motion;
- `public/script.js` — мобильное меню, интерактивный выбор абонемента и reveal-анимации;
- `public/assets/` — локальные фотографии из публичной галереи Pinkme в 2ГИС;
- `scripts/build.mjs` — воспроизводимая статическая сборка;
- `.github/workflows/deploy.yml` — публикация GitHub Pages.

## Источники фактов и материалов

Перед сборкой проверены актуальные страницы Pinkme в 2ГИС:

- [Карточка Pinkme](https://2gis.ru/krasnodar/firm/70000001111577745);
- [Информация](https://2gis.ru/krasnodar/firm/70000001111577745/tab/info);
- [Цены](https://2gis.ru/krasnodar/firm/70000001111577745/tab/prices);
- [Отзывы](https://2gis.ru/krasnodar/firm/70000001111577745/tab/reviews);
- [Фотогалерея](https://2gis.ru/krasnodar/gallery/firm/70000001111577745).

Текущие внешние действия на сайте:

- [Онлайн-запись](https://n1954389.yclients.com/);
- [Telegram менеджера](https://t.me/pinkme_manager);
- [Instagram Pinkme](https://www.instagram.com/pinkmestretch/);
- [Pinkme на карте 2ГИС](https://2gis.ru/krasnodar/firm/70000001111577745).

Фотографии сохранены локально из публичной галереи 2ГИС, чтобы первый экран и storytelling-блок не зависели от внешней загрузки.

## Важные ограничения

- Отдельный графический логотип не использован: в шапке применён аккуратный текстовый wordmark Pinkme, чтобы не выдавать стилизацию за официальный логотип.
- Телефон не выводится: карточка 2ГИС показывает номер частично, поэтому сайт использует подтверждённые каналы записи и связи.
- Цены и предложение «−10% на абонемент в день пробного занятия» сопровождаются оговоркой, что перед записью актуальные условия нужно уточнить у Pinkme.
