import { TLanguage, TTranslations } from './types';

export const shoppingListItems = ['Помидоры', 'Огурцы', 'Картофель'];

export const ordersWithStatuses = [
  { orderId: 1, status: 'в пути' },
  { orderId: 2, status: 'доставлен' },
  { orderId: 3, status: 'обрабатывается' },
];

export const ratingList = [
  'https://img.freepik.com/free-vector/horns-emoji-illustration_23-2151316503.jpg?t=st=1734549627~exp=1734553227~hmac=563595d44b42100e78aed8093a5a9d61bb186056276d200c29f1452cff140417&w=740',
  'https://img.freepik.com/free-vector/orange-with-happy-face_1308-106132.jpg?t=st=1734549579~exp=1734553179~hmac=a602c267c917511665771d236a41a033b503088201225f4b2a5cece95f651662&w=740',
  'https://img.freepik.com/free-vector/gradient-yellow-day-background-with-smiley-face_23-2149418796.jpg?t=st=1734549536~exp=1734553136~hmac=1ac5b8d072153ebadbb022795f63bfab58a26010316fe5d1da4cf81079a881a1&w=900',
  'https://img.freepik.com/free-vector/happy-green-square-character-illustration_1308-165924.jpg?t=st=1734549463~exp=1734553063~hmac=b6dee20651b3a3119998b9539d819eba88e7aa529017d754b1b1331443c5c756&w=740',
];

export const ratings = [
  { value: 0, label: 'Плохо' },
  { value: 1, label: 'Приемлемо' },
  { value: 2, label: 'Хорошо' },
  { value: 3, label: 'Отлично' },
];

export const persons = [
  { id: 1, name: 'Иван', age: 20 },
  { id: 2, name: 'Мария', age: 22 },
  { id: 3, name: 'Алексей', age: 21 },
  { id: 4, name: 'Марина', age: 19 },
  { id: 5, name: 'Даша', age: 23 },
  { id: 6, name: 'Глеб', age: 24 },
  { id: 7, name: 'Дима', age: 18 },
  { id: 8, name: 'Гриша', age: 20 },
  { id: 9, name: 'Серафим', age: 21 },
];

export const citiesData = [
  {
    name: 'Токио',

    description:
      'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',

    imageUrl:
      'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',

    facts: [
      'Токио - самый населенный мегаполис в мире.',

      'Здесь расположена самая высокая башня в Японии - Токийская башня.',

      'В Токио проходят множество культурных событий и фестивалей.',
    ],
  },

  {
    name: 'Киото',

    description:
      'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',

    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/1280px-Kiyomizu.jpg',

    facts: [
      'В Киото насчитывается более 1600 буддийских храмов.',

      'Этот город был столицей Японии более тысячи лет.',
    ],
  },

  {
    name: 'Осака',

    description:
      'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',

    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/Shin-Sekai%EF%BC%9A%E6%96%B0%E4%B8%96%E7%95%8C_-_panoramio.jpg',

    facts: [
      'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',

      'Город является кулинарной столицей Японии.',
    ],
  },

  {
    name: 'Хоккайдо',

    description:
      'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',

    imageUrl:
      'http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg',

    facts: [
      'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',

      'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
    ],
  },

  {
    name: 'Нагоя',

    description:
      'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',

    imageUrl:
      'https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg',

    facts: [
      'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',

      'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.',
    ],
  },
];

export const translations: Record<TLanguage, TTranslations> = {
  en: {
    title: 'Language Switcher',
    description: 'English language has been chosen',
    switchLanguage: 'Switch to Russian',
  },
  ru: {
    title: 'Переключатель языка',
    description: 'Был выбран русский язык',
    switchLanguage: 'Переключить на английский',
  },
};
