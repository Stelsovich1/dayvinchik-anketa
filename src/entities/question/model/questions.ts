import type { Question } from "./types";
import kish from "../assets/music/kish_lesnik.mp3";
import instasamka_zadengida from "../assets/music/instasamka_dengida.mp3";
import vihorkov from "../assets/music/vihorkov.mp3";
import agutin from "../assets/music/agutin_ostrov_danywoo.mp3";
/**
 * База вопросов для квиза
 */
export const questions: Question[] = [
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
        rating: 3,
        musicSrc: instasamka_zadengida,
      },
      {
        text: "Игорь Вихорьков - ты не моя",
        rating: 13,
        musicSrc: vihorkov,
      },
      {
        text: "Леонид Агутин - Остров",
        rating: 9,
        musicSrc: agutin,
      },
    ],
  },

  {
    text: "Считаешь ли ты себя доброй?",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Не думаю, что назвала бы себя 'доброй'",
        rating: 5,
      },
      {
        text: "Доброта порок, нужно быть реалистом",
        rating: 3,
      },
      {
        text: "В большей степени - да",
        rating: 10,
      },
      { text: "В этом мире нет добрых людей", rating: 1 },
    ],
  },

  {
    text: "Как ты определяешь того самого?",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Нужно плотно пообщаться и узнать хорошо друг друга, чтобы узнать подходит ли мне 'тот самый'",
        rating: 6,
      },
      {
        text: "Достаточно быстро можно понять свой человек или нет - интуиция",
        rating: 10,
      },
      {
        text: "Если в сердце бахнули стрелы - значит тот самый",
        rating: 5,
      },
      {
        text: "Никого не ищу",
        rating: -10,
      },
      { text: "Есть четкие критерии и я точно знаю кого ищу", rating: 7 },
    ],
  },
  {
    text: "Как лучше всего провести свободное время?",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Куда-нибудь сходить на мероприятие, проводить время в компании",
        rating: 8,
      },
      {
        text: "Сходить в кафе / кинотеатр / погулять по городу",
        rating: 7,
      },
      {
        text: "У меня вообще нет свободного времени - сплошная работа и дела",
        rating: 1,
      },
      {
        text: "Я люблю проводить время дома, смотреть фильмы / читать книги",
        rating: 9,
      },
    ],
  },
  {
    text: "Как относишься к саморазвитию?",
    image:
      "https://images.unsplash.com/photo-1580618864182-a5bbfe84c824?w=800&auto=format&fit=crop&q=80",
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
        rating: 3,
      },
      {
        text: "Да всё и так хорошо",
        rating: 1,
      },
    ],
  },
  {
    text: "Как ты относишься к искусству и культуре?",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
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
    text: "Оцени мем, где 1 не смешно и 4 очень смешно",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80",
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
    text: "Оцени мем, где 1 не смешно и 4 очень смешно",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80",
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
    text: "Оцени мем, где 1 не смешно и 4 очень смешно",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Я люблю пошлые шутки и мемы, это весело и расслабляет",
        rating: 10,
      },
      {
        text: "Я не против пошлых шуток, но предпочитаю более интеллектуальный юмор",
        rating: 7,
      },
      {
        text: "Я считаю, что пошлые шутки неприличны и неинтересны",
        rating: 4,
      },
      {
        text: "Я ненавижу пошлые шутки и считаю их оскорбительными",
        rating: 2,
      },
    ],
  },
  {
    text: "Считаешь ли ты себя общительным человеком?",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Я не особо общительный человек",
        rating: 7,
      },
      {
        text: "Со своим человеком - да, в остальном не считаю так",
        rating: 10,
      },
      {
        text: "Могу найти общий язык с любым человеком",
        rating: 9,
      },
      {
        text: "Только если есть о чем поговорить, просто так вряд ли",
        rating: 4,
      },
    ],
  },
  {
    text: "Представь, выбираешь отель в путешествии - какому будешь отдавать предпочтение?",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Отель ? может лучше кемпинг с палатками ?",
        rating: 1,
      },
      {
        text: "Главное куда, а отель не так важен",
        rating: 10,
      },
      {
        text: "Выбор за тобой, мне без разницы",
        rating: 3,
      },
      {
        text: "Хороший отель с комфортом и высоким сервисом",
        rating: 5,
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
        rating: 4,
      },
    ],
  },
  {
    text: "Романтика в отношениях - это важно?",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Я ценю романтику, меня можно назвать романтичной",
        rating: 8,
      },
      {
        text: "Люблю романтику в отношениях, важно поддерживать её в своих отношениях",
        rating: 10,
      },
      { text: "Секс важнее романтики", rating: 2 },
      {
        text: "Я не особо увлекаюсь романтикой, предпочитаю другие аспекты отношений",
        rating: 4,
      },
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
        text: "Да когда-нибудь я хочу завести детей с любимым",
        rating: 10,
      },
      {
        text: "Нет, в этом нет для меня необходимости",
        rating: 1,
      },
    ],
  },
];
