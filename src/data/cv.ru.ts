// Russian translation of cv.ts. Typed as `CV`, so the two stay structurally in
// step. Company names, products, the stack and job titles stay in Latin script
// on purpose: that is how they are searched for and how recruiters recognise
// them. The summary is phrased so it doesn't have to name a title at all.
import { cv, type CV } from './cv';

export const cvRu: CV = {
  name: 'Артур Рахматулин',
  title: 'Software Engineer',
  location: 'Португалия',

  summary: [
    'Более 10 лет в бэкенд-разработке веб-приложений, микросервисов и решений ' +
      'на Python. Занимаюсь масштабируемыми системами, оптимизацией процессов ' +
      'и внедрением современных технологий для повышения эффективности бизнеса.',
    'Раньше работал с ERP: дорабатывал и проектировал новую функциональность ' +
      'для автоматизации процессов на производственных предприятиях, ' +
      'оптимизировал рабочие процессы и повышал операционную эффективность.',
  ],

  email: 'info.binaryc.at@gmail.com',

  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/binarycat0',
      display: 'github.com/binarycat0',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/binarycat',
      display: 'linkedin.com/in/binarycat',
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@artur.rakhmatulin',
      display: 'medium.com/@artur.rakhmatulin',
    },
  ],

  // Shared verbatim with the English CV rather than copied: the section is a
  // list of technology names, so a translation could only drift out of date.
  skills: cv.skills,

  experience: [
    {
      company: 'Dremio',
      companyHref: 'https://www.dremio.com/',
      title: 'Software Engineer II',
      location: 'Лиссабон, Португалия',
      start: 'июнь 2025',
      highlights: [
        {
          text: 'Участвую в разработке Apache Polaris:',
          children: [
            'Тестирование, ревью кода, улучшение документации и руководств для разработчиков',
            'Инициировал выпуск Python SDK и CLI',
            'Координировал работу над UI',
            'Организовал тестирование и внедрение apache/polaris-tools/polaris-console',
            'Добавил поддержку OIDC в Polaris Console',
          ],
        },
        {
          text: 'Участвую в переводе движка семантического поиска с Vertex AI Search на OpenSearch:',
          children: [
            'Провёл нагрузочное тестирование и планирование мощностей с учётом текущих объёмов данных и прогноза роста числа пользователей',
            'Настроил наблюдаемость нового микросервиса: метрики, дашборды и алерты',
            'Спроектировал вынос семантического поиска из монолита в отдельный микросервис',
          ],
        },
      ],
    },
    {
      company: 'PandaDoc Inc',
      companyHref: 'https://www.pandadoc.com/',
      title: 'Software Engineer',
      location: 'Лиссабон, Португалия',
      start: 'октябрь 2021',
      end: 'декабрь 2024',
      highlights: [
        {
          text:
            'Развивал сервисы public_api и integrations (Django, Django REST Framework) ' +
            'и закрыл две самые популярные заявки пользователей на UserVoice: копирование ' +
            'и вставку в редакторе и форматирование валют в интеграциях с HubSpot, ' +
            'Pipedrive и Salesforce.',
        },
        {
          text:
            'Провёл детальный разбор причин крупного сбоя, предложил и внедрил ' +
            'отказоустойчивую архитектуру (подход описан в статье на Medium), что ' +
            'полностью исключило подобные инциденты и подняло SLA с 99,5% до 99,9%.',
        },
        {
          text:
            'Нашёл и устранил критические проблемы производительности при отрисовке ' +
            'списка документов на главной странице: причиной оказались полные сканы ' +
            'таблиц. Оптимизировал SQL-запросы и добавил индексы, сократив время ответа ' +
            'на 95-м и 99-м перцентилях с 15 и 60 секунд до 2 и 5 соответственно, ' +
            'уменьшив количество ошибок statement timeout на 99% и снизив нагрузку на ' +
            'SQL-сервер на 5%.',
        },
        {
          text:
            'Спроектировал и реализовал 3 новые интеграции (BambooHR, Greenhouse и ' +
            'HubSpot) на платформе iPaaS Workato, что помогло привлечь более 10 новых ' +
            'клиентов.',
        },
        {
          text:
            'Предложил и построил микросервис RuleEngine для проекта PandaDoc CPQ for ' +
            'HubSpot: динамическое ценообразование и подготовка коммерческих предложений ' +
            'принесли более 10 новых клиентов и более $200 000 MRR.',
        },
      ],
    },
    {
      company: 'Yandex',
      companyHref: 'https://market.yandex.ru/',
      title: 'Software Engineer',
      location: 'Москва, Россия',
      start: 'сентябрь 2020',
      end: 'октябрь 2021',
      highlights: [
        {
          text:
            'Разработал фреймворк (Python, Nirvana, YT) для ETL/ELT-пайплайнов: он ' +
            'сократил технический долг, ускорил поставку функциональности в 7 раз за счёт ' +
            'ежедневных релизов по требованию, повысил стабильность системы и позволил ' +
            'внедрить CI/CD и мониторинг.',
        },
        {
          text: 'Внедрил практики тестирования и CI/CD, сократив количество багов и инцидентов в 10 раз.',
        },
        {
          text:
            'Ввёл логирование, мониторинг и дежурства, что позволило быстрее находить ' +
            'причины и устранять инциденты до того, как их замечали пользователи; ' +
            'качество и надёжность проекта выросли, SLA поднялся до 99%.',
        },
        {
          text:
            'Фреймворк дал возможность провести аудит потребления ресурсов и ' +
            'оптимизировать использование RAM, CPU и объёма данных на 30%.',
        },
        {
          text:
            'Вёл курс и проводил обучение для команды Data Engineering, что ускорило ' +
            'переход на новый фреймворк и помогло команде уложиться в заявленные сроки.',
        },
      ],
    },
    {
      company: 'B2Broker',
      companyHref: 'https://b2broker.com',
      title: 'Senior Software Engineer',
      location: 'Москва, Россия',
      start: 'апрель 2019',
      end: 'август 2020',
      highlights: [
        {
          text:
            'Разработал микросервис на asyncio (часть сервиса B2BinPay), который повысил ' +
            'эффективность создания и обработки транзакций в Bitcoin-подобных блокчейнах ' +
            'и сетях Ethereum за счёт уменьшения веса транзакций и внедрения современных ' +
            'протоколов.',
          children: [
            'Единообразная архитектура снизила стоимость инфраструктуры в 5 раз, дала совместимость с разными блокчейнами через конфигурацию, упростила масштабирование и подключение новых блокчейнов.',
          ],
        },
        {
          text:
            'Спроектировал поддержку токенов Ethereum ERC20, что открыло интеграцию с ' +
            'токен-экосистемами и расширило возможности системы.',
        },
        {
          text:
            'Оптимизировал обработку транзакций, повысив производительность и надёжность ' +
            'блокчейн-платежей.',
        },
      ],
    },
    {
      company: 'LLC Growth Platform',
      companyHref: 'https://cloveri.com/',
      title: 'Lead Software Engineer',
      location: 'Москва, Россия',
      start: 'апрель 2018',
      end: 'апрель 2019',
      highlights: [
        {
          text:
            'Разработал сервис для проведения тестов и опросов: он даёт участникам ' +
            'персональные рекомендации по развитию и позволяет отслеживать прогресс в ' +
            'личном кабинете.',
        },
        {
          text:
            'Спроектировал и реализовал бэкенд на Django и Django REST Framework, ' +
            'обеспечив эффективную обработку данных и безопасные API.',
        },
        {
          text:
            'Собрал адаптивный фронтенд на React и Redux с удобным интерфейсом и ' +
            'обновлениями в реальном времени.',
        },
        {
          text:
            'Связал бэкенд и фронтенд в единый продукт с предсказуемым поведением для ' +
            'пользователя.',
        },
      ],
    },
    {
      company: 'Ru-Center',
      companyHref: 'https://www.nic.ru/',
      title: 'Software Engineer',
      location: 'Москва, Россия',
      start: 'июнь 2016',
      end: 'апрель 2018',
      highlights: [
        {
          text:
            'Придумал и построил админ-портал на Python и Django, который упростил работу ' +
            'с биллингом и сократил время решения заявок с 2 недель до 1 минуты.',
          children: [
            'Наладил взаимодействие между отделами на каждом этапе внедрения и учёл пожелания заинтересованных сторон; за неделю обновления в реальном времени стали частью ежедневной работы.',
          ],
        },
        {
          text:
            'Дал бухгалтерии отчётность в реальном времени, устранил причины расхождений ' +
            'в данных и сократил рутинную нагрузку на поддержку до 1 часа в день.',
        },
        {
          text:
            'Участвовал как дата-инженер в разработке рекомендательной системы, отвечая ' +
            'за пайплайны и эффективную обработку данных (Apache Airflow).',
        },
      ],
    },
  ],

  projects: [
    {
      name: 'ymove',
      href: 'https://ymove.org/',
      display: 'ymove.org',
      description:
        'Платформа, которая собирает реальные данные о релокации — даты подачи и ' +
        'сроки ожидания, — чтобы дать людям честную статистику о том, сколько на ' +
        'самом деле рассматривают визы и ВНЖ.',
    },
  ],

  openSource: [
    {
      name: 'Apache Polaris',
      href: 'https://github.com/apache/polaris/pulls?q=is%3Apr+is%3Aclosed+author%3Abinarycat0',
      display: 'Принятые pull-реквесты',
    },
    {
      name: 'Apache Polaris Tools',
      href: 'https://github.com/apache/polaris-tools/pulls?q=is%3Apr+is%3Aclosed+author%3Abinarycat0',
      display: 'Принятые pull-реквесты',
    },
  ],

  publications: [
    {
      name: 'Medium',
      href: 'https://medium.com/@artur.rakhmatulin',
      display: 'medium.com/@artur.rakhmatulin',
    },
    {
      name: 'Habr',
      href: 'https://habr.com/ru/users/binarycat/articles/',
      display: 'habr.com/ru/users/binarycat',
    },
  ],

  education: [
    {
      institution: 'Омский государственный университет (ОмГУ)',
      credential: 'Бакалавр, физика твёрдого тела',
    },
  ],

  languages: [
    { name: 'Английский', level: 'Профессиональный рабочий' },
    { name: 'Русский', level: 'Родной' },
  ],
};
