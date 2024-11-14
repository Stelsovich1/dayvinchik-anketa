import type { Question } from "./types";
import kish from "../assets/music/kish_lesnik.mp3";
import instasamka_zadengida from "../assets/music/instasamka_dengida.mp3";
import vihorkov from "../assets/music/vihorkov.mp3";
import agutin from "../assets/music/agutin_ostrov_danywoo.mp3";
import dimok from "../assets/music/dimok.mp3";
import eminem from "../assets/music/eminem-without-me.mp3";
import beliver from "../assets/music/imagine-dragons-believer.mp3";
import streli from "../assets/music/streli.mp3";
import podoshva from "../assets/music/podoshva.mp3";
import krasivo from "../assets/music/krasivo.mp3";

import petr3 from "../assets/memes/petr3_.jpg";
import pitbul from "../assets/memes/pitbull.jpg";
import blatded from "../assets/memes/blatded.mp4";

/**
 * База вопросов для квиза
 */
export const questions: Question[] = [
  {
    text: "Считаешь ли ты себя доброй?",
    image:
      "https://unsplash.com/photos/VvM8h5TnWUg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMxNjEwMTc2fA&force=true&w=640",
    options: [
      {
        text: "Не думаю, что назвала бы себя 'доброй'",
        rating: 5,
      },
      {
        text: "Доброта порок, нужно быть реалистом",
        rating: 1,
      },
      {
        text: "В большей степени - да",
        rating: 10,
      },
      { text: "В этом мире нет добрых людей", rating: 3 },
    ],
  },
  {
    text: "Как ты определяешь того самого?",
    image:
      "https://avatars.dzeninfra.ru/get-zen_brief/6378390/pub_6322f30430ace83afca00279_6322f6c744d1a21f9916bccb/scale_1200",
    options: [
      {
        text: "Нужно плотно пообщаться и узнать хорошо друг друга, чтобы узнать подходит ли мне 'тот самый'",
        rating: 8,
      },
      {
        text: "Достаточно быстро можно понять свой человек или нет - интуиция",
        rating: 10,
      },
      {
        text: "Если в сердце бахнули стрелы - значит тот самый",
        rating: 4,
      },
      {
        text: "Никого не ищу",
        rating: -10,
      },
      { text: "Есть четкие критерии и я точно знаю кого ищу", rating: 7 },
    ],
  },
  {
    text: "Оцени мем, где 1 не смешно и 4 смешно",
    image: petr3,
    options: [
      {
        text: "4",
        rating: 10,
      },
      {
        text: "3",
        rating: 7,
      },
      {
        text: "2",
        rating: 4,
      },
      {
        text: "1",
        rating: 2,
      },
    ],
  },
  {
    text: "Как ты относишься к искусству и культуре?",
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/2907131/pub_602ff6f3084cc3452447c518_602ff821a332dd7373bb5f22/scale_1200",
    options: [
      { text: "Я ценю искусство, но не уделяю ему много времени", rating: 7 },
      {
        text: "Я люблю искусство и культуру, посещаю музеи и театры",
        rating: 10,
      },
      {
        text: "Я не особо интересуюсь искусством, предпочитаю другие виды развлечений",
        rating: 4,
      },
      {
        text: "Я считаю, что искусство — это скучно и не имеет значения",
        rating: 2,
      },
    ],
  },
  {
    text: "Представим ролевую игру с переодеваниями - какой костюм из этих наиболее подходящий?",
    image: "https://a.d-cd.net/RAAAAgLhueA-960.jpg",
    options: [
      {
        text: "Горничная с длинным пипидастром",
        rating: 8,
      },
      {
        text: "Костюм банана с большими глазами",
        rating: 7,
      },
      {
        text: "Кошка - острые ушки, хвост и всё такое страстное черное",
        rating: 9,
      },
      {
        text: "Ведьма - шляпа, метла, книга с заклинаниями в картинках",
        rating: 6,
      },
    ],
  },
  {
    text: "Какая из этих песен тебе больше нравится ?",
    image: "",
    options: [
      {
        text: "Ицык Цыпер & Игорь Цыба - Дымок",
        rating: 5,
        musicSrc: dimok,
      },
      {
        text: "Imagine Dragons - Believer",
        rating: 6,
        musicSrc: beliver,
      },
      {
        text: "Markul & Тося Чайкина (Tosya Chaikina) — Стрелы",
        rating: 4,
        musicSrc: streli,
      },
      {
        text: "Oxxymiron - Город под подошвой",
        rating: 1,
        musicSrc: podoshva,
      },
      {
        text: "Валерий Меладзе - Красиво",
        rating: 10,
        musicSrc: krasivo,
      },
    ],
  },
  {
    text: "Как относишься к саморазвитию?",
    image:
      "https://static-forum.gipsyteam.ru/monthly_02_2022/post-113225-1645617149e481.jpg",
    options: [
      {
        text: "Время от времени по работе приходится",
        rating: 5,
      },
      {
        text: "Много чем увлекаюсь и постоянно изучаю новое",
        rating: 10,
      },
      {
        text: "Листаю ленту новостей - считается ?",
        rating: 1,
      },
      {
        text: "Да всё и так хорошо",
        rating: 1,
      },
    ],
  },

  {
    text: "Оцени мем, где 1 не смешно и 4 смешно",
    image: pitbul,
    options: [
      {
        text: "4",
        rating: 1,
      },
      {
        text: "3",
        rating: 3,
      },
      {
        text: "2",
        rating: 10,
      },
      {
        text: "1",
        rating: 9,
      },
    ],
  },
  {
    text: "Как относишься к спорту и здоровому образу жизни?",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Я регулярно занимаюсь спортом и стараюсь придерживаться здорового образа жизни",
        rating: 10,
      },
      {
        text: "Я люблю спорт, но не всегда нахожу время для занятий",
        rating: 7,
      },
      { text: "Для меня спорт не очень важен", rating: 2 },
      {
        text: "Я не особо интересуюсь спортом, предпочитаю другие виды активности",
        rating: 6,
      },
    ],
  },
  {
    text: "Считаешь ли ты себя общительным человеком?",
    image:
      "https://unsplash.com/photos/71CjSSB83Wo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29tbXVuaWNhdGlvbnxlbnwwfHx8fDE3MzE2MDMwOTl8MA&force=true&w=640",
    options: [
      {
        text: "Я не особо общительный человек",
        rating: 7,
      },
      {
        text: "Со своим человеком - да, в остальном не считаю так",
        rating: 9,
      },
      {
        text: "Могу найти общий язык с любым человеком",
        rating: 10,
      },
      {
        text: "Только если есть о чем поговорить, просто так вряд ли",
        rating: 4,
      },
    ],
  },
  {
    text: "Какая из этих песен тебе больше нравится ?",
    image: "",
    options: [
      {
        text: "Король и Шут - Лесник",
        rating: 6,
        musicSrc: kish,
      },
      {
        text: "Инстасамка - за деньги да",
        rating: 4,
        musicSrc: instasamka_zadengida,
      },
      {
        text: "Игорь Вихорьков - ты не моя",
        rating: 13,
        musicSrc: vihorkov,
      },
      {
        text: "Леонид Агутин - Остров (Dani WOO mix)",
        rating: 9,
        musicSrc: agutin,
      },
      {
        text: "Eminem - Without me",
        rating: 3,
        musicSrc: eminem,
      },
    ],
  },
  {
    text: "Представь, выбираешь отель в путешествие - чему будешь отдавать предпочтение?",
    image:
      "https://unsplash.com/photos/_g1WdcKcV3w/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMxNjExMzk5fA&force=true&w=640",
    options: [
      {
        text: "Хороший отель с комфортом и высоким сервисом",
        rating: 3,
      },
      {
        text: "Отель ? может лучше кемпинг с палатками ?",
        rating: 1,
      },
      {
        text: "Главное куда, а отель не так важен",
        rating: 10,
      },
      {
        text: "Выбор за тобой, мне без разницы какой отель",
        rating: 4,
      },
    ],
  },
  {
    text: "Оцени мем, где 1 не смешно и 4 очень смешно",
    isVideo: true,
    image: blatded,
    options: [
      {
        text: "4",
        rating: 10,
      },
      {
        text: "3",
        rating: 7,
      },
      {
        text: "2",
        rating: 4,
      },
      {
        text: "1",
        rating: 2,
      },
    ],
  },
  {
    text: "Романтика в отношениях - это важно?",
    image:
      "https://sun9-32.userapi.com/impf/c540108/v540108344/21765/PlYvcsFVxVE.jpg?size=600x400&quality=96&sign=0299489e3be81e0bd2087e5826433716&type=album",
    options: [
      {
        text: "Мне нравится романтика в отношениях, хочу в своих отношениях романтики",
        rating: 10,
      },
      { text: "Секс важнее романтики", rating: 1 },
      {
        text: "Я не особо увлекаюсь романтикой, предпочитаю другие аспекты отношений",
        rating: 4,
      },
      { text: "50 / 50", rating: 7 },
    ],
  },
  {
    text: "Хотела бы когда-нибудь завести детей?",
    image:
      "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "У меня уже есть цветы жизни",
        rating: -20,
      },
      {
        text: "Когда-нибудь я хочу завести детей",
        rating: 10,
      },
      {
        text: "Нет",
        rating: 1,
      },
    ],
  },
];
