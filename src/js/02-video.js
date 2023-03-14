import throttle from "lodash.throttle"
import Player from "@vimeo/player";
// import * as Player from "@vimeo/player/dist/player.js";
// Завдання 2 - відеоплеєр
// HTML містить <iframe> з відео для Vimeo плеєра.
// Напиши скрипт, який буде зберігати поточний час відтворення відео у
// локальне сховище і, після перезавантаження сторінки,
// продовжувати відтворювати відео з цього часу.

// Виконуй це завдання у файлах 02 - video.html і 02 - video.js.
// Розбий його на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// 1. Додай бібліотеку як залежність проекту через npm.
// 2. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player,
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5. Зберігай час відтворення у локальне сховище.Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7. Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);


player.on("timeupdate", throttle(onPlay, 500));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

