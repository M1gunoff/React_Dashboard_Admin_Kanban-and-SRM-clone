import moment from "moment/moment";

export const cardsData = [
  {
    title: "Выручка",
    change: 24,
    amount: 42056,
    grade: "plus",
  },
  {
    title: "Заказы",
    change: 14,
    amount: 52125.03,
    grade: "plus",
  },
  {
    title: "Расходы",
    change: 12,
    amount: 1216.5,
    grade: "minus",
  },
  {
    title: "Прибыль",
    change: 12,
    amount: 10125.0,
    grade: "plus",
  },
];

export const ordersData = [
  {
    name: "Поп ит",
    type: "Товар",
    items: 58,
    change: 290,
  },
  {
    name: "Онлайн-курсы и коучинг",
    type: "Услуги",
    items: 12,
    change: 72
  },
  {
    name: "Исскуственный интеллект - помощник",
    type: "Нейросети",
    items: 7,
    change: 70
  },
  {
    name: "Цифровые продукты",
    type: "Разработка",
    items: 21,
    change: 15
  }
]

export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("ru", {
    useGrouping: true,
  });
};


let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Конференция',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Встреча инвест.',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Встреча руководства",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Видеоконференция",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "График платежей",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "Видеоконференция",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}

export const boardData = {
  columns: [
    {
      id: 1,
      title: "Задолженность",
      cards: [
        {
          id: 1,
          title: "Настройка базы данных",
          description: "Интеграция Firebase"
        },
        {
          id: 2,
          title: "Поток данных",
          description: "Настройка диаграммы с другими разработчиками"
        },
      ]
    },
    {
      id: 2,
      title: "Нужно сделать",
      cards: [
        {
          id: 9,
          title: "Страница таблицы данных",
          description: "Пагинация на стороне сервера",
        }
      ]
    },
    {
      id: 3,
      title: "В процессе",
      cards: [
        {
          id: 10,
          title: "Расширение полного календаря",
          description: "Создание новых событий и хранение в глобальных состояниях"
        },
        {
          id: 11,
          title: "Пользовательская доска Kanban",
          description: "Настройка зависимости react-kanban в рамках Dashboard как отдельной страницы"
        }
      ]
    },
    {
      id: 4,
      title: "Завершено",
      cards: [
        {
          id: 12,
          title: "Настройка сервера Vite",
          description: "Настройка необходимых модулей и стартеров"
        },
        {
          id: 13,
          title: "Модульная структура",
          description: "Написание CSS в виде модулей для уменьшения конфликтов имен"
        }
      ]
    }
  ]
}

export const userData = [
  {
    name: {
      firstName: 'Слава',
      lastName: 'Сорокин',
    },
    address: 'ул. Ленина, д. 10',
    city: 'Москва',
    state: 'Московская область',
  },
  {
    name: {
      firstName: 'Никита',
      lastName: 'Константинов',
    },
    address: 'ул. Пушкина, д. 25',
    city: 'Москва',
    state: 'Московская область',
  },
  {
    name: {
      firstName: 'Ирина',
      lastName: 'Иванова',
    },
    address: 'пр. Невский, д. 30',
    city: 'Санкт-Петербург',
    state: 'Ленинградская область',
  },
  {
    name: {
      firstName: 'Андрей',
      lastName: 'Петров',
    },
    address: 'ул. Баумана, д. 15',
    city: 'Казань',
    state: 'Республика Татарстан',
  },
  {
    name: {
      firstName: 'Мария',
      lastName: 'Смирнова',
    },
    address: 'ул. Гоголя, д. 5',
    city: 'Новочебоксарск',
    state: 'Чувашская Республика',
  },
  {
    name: {
      firstName: 'Ольга',
      lastName: 'Кузнецова',
    },
    address: 'ул. Кирова, д. 7',
    city: 'Чебоксары',
    state: 'Чувашская Республика',
  },
  {
    name: {
      firstName: 'Дмитрий',
      lastName: 'Воробьёв',
    },
    address: 'ул. Ленина, д. 20',
    city: 'Сочи',
    state: 'Краснодарский край',
  },
  {
    name: {
      firstName: 'Екатерина',
      lastName: 'Лебедева',
    },
    address: 'ул. Центральная, д. 3',
    city: 'Новосибириск',
    state: 'Новосибирская область',
  },
  {
    name: {
      firstName: 'Алексей',
      lastName: 'Морозов',
    },
    address: 'ул. Суханова, д. 12',
    city: 'Владивосток',
    state: 'Приморский край',
  },
  {
    name: {
      firstName: 'Анна',
      lastName: 'Зайцева',
    },
    address: 'ул. Амосова, д. 14',
    city: 'Якутск',
    state: 'Республика Саха (Якутия)',
  },
  {
    name: {
      firstName: 'Владимир',
      lastName: 'Новиков',
    },
    address: 'ул. Тверская, д. 6',
    city: 'Калуга',
    state: 'Калужская область',
  },
  {
    name: {
      firstName: 'Елена',
      lastName: 'Соколова',
    },
    address: 'ул. Ленина, д. 12',
    city: 'Томск',
    state: 'Томская область',
  },
  {
    name: {
      firstName: 'Иван',
      lastName: 'Михайлов',
    },
    address: 'ул. Советская, д. 8',
    city: 'Омск',
    state: 'Омская область',
  },
  {
    name: {
      firstName: 'Сергей',
      lastName: 'Фёдоров',
    },
    address: 'ул. Плеханова, д. 22',
    city: 'Екатеринбург',
    state: 'Свердловская область',
  },
  {
    name: {
      firstName: 'Юлия',
      lastName: 'Киселева',
    },
    address: 'ул. Гагарина, д. 5',
    city: 'Самара',
    state: 'Самарская область',
  },
  {
    name: {
      firstName: 'Олег',
      lastName: 'Попов',
    },
    address: 'ул. Мира, д. 9',
    city: 'Нижний Новгород',
    state: 'Нижегородская область',
  },
  {
    name: {
      firstName: 'Анастасия',
      lastName: 'Орлова',
    },
    address: 'ул. Победы, д. 14',
    city: 'Ростов-на-Дону',
    state: 'Ростовская область',
  },
  {
    name: {
      firstName: 'Константин',
      lastName: 'Лазарев',
    },
    address: 'ул. Комсомольская, д. 7',
    city: 'Волгоград',
    state: 'Волгоградская область',
  },
  {
    name: {
      firstName: 'Наталья',
      lastName: 'Кравцова',
    },
    address: 'ул. Чапаева, д. 19',
    city: 'Краснодар',
    state: 'Краснодарский край',
  },
  {
    name: {
      firstName: 'Максим',
      lastName: 'Семёнов',
    },
    address: 'ул. Победы, д. 10',
    city: 'Новосибирск',
    state: 'Новосибирская область',
  },
]
