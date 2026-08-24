// Copy for the rebuilt Optimus page (Яна's concept, 20.08.2026), rendered by
// src/components/OptimusPage.astro at /solutions/optimus (en) and
// /ru/solutions/optimus (ru).
//
// Only text lives here. Coordinates, image file names, slide order and the
// rest of the structure stay in the component, so a translation can never
// move a callout or drop a screen.
//
// ⛔ Nothing on this page ties Optimus to a named client. The page is handed
// to prospects directly, and where it is deployed today is not ours to
// publish — decision of 22.08.2026.
//
// ⛔ Optimus runs online. It receives the day's totals at night, and a new
// input is recalculated in seconds — never describe it as a nightly recalc.
import type { Locale } from '../config';

export type StepPanel = { label: string; title: string; bullets: string[] };
export type Slide = { caption: string; alt: string; anns: string[] };

export type OptimusPageDict = {
  meta: { title: string; description: string };
  hero: {
    label: string;
    h1: string;
    /** What the system does. Яна's text, 24.08 — the opening George asked for. */
    lede: string;
    /** How it does it. Set smaller than the lede. */
    how: string;
    /** Shown as ticks, large enough to register from across a room. */
    checks: string[];
    ctaDemo: string;
    alt: string;
  };
  problem: {
    label: string; h2: string; lede: string;
    toggleAria: string; tabToday: string; tabOptimus: string;
    nodes: { office: string; depot: string; supplier: string; port: string; trucks: string };
    coreChaos: { title: string; sub: string };
    coreOrder: { title: string; sub: string };
    chipsToday: string[];      // eight, clockwise from top-left
    chipsOptimus: string[];    // six, same grid minus the bottom pair
    stripToday: { lead: string; rest: string };
    stripOptimus: { lead: string; rest: string };
  };
  process: {
    label: string; h2: string; lede: string; railAria: string;
    steps: { key: string; name: string; brief: string }[];
    note: string;
    panels: Record<string, StepPanel>;
    picto: Record<string, string>;   // alt text per step illustration
  };
  data: {
    label: string; h2: string; lede: string; alt: string;
    inputs: { name: string; note: string }[];
    outputs: { name: string; note: string }[];
    capIn: string; capOut: string;
    gains: { lead: string; rest: string }[];
  };
  ui: {
    label: string; h2: string; lede: string;
    prevAria: string; nextAria: string; slideAria: string;
    slides: Slide[];
  };
  cta: { heading: string; body: string; primary: string };
};

const EN: OptimusPageDict = {
  meta: {
    title: 'Optimus — fuel inventory management — KKT',
    description: 'Optimus manages fuel inventory across every depot and fuel grade: it forecasts run-outs, works out how much to order and from which supplier, and warns in advance when a delivery needs to change.',
  },
  hero: {
    label: 'Optimus · fuel inventory management',
    h1: 'What Optimus is',
    lede: 'Optimus is an AI-powered system that manages your fuel inventory for you. It works out where a run-out is coming, how much to order and from which supplier, and warns you in advance when a delivery needs to change. All your team has to do is approve the recommendation.',
    how: 'Optimus pulls the data it needs from your systems and uses AI models to recalculate the whole picture in real time — across every depot and every fuel grade at once, factoring in demand, supplier lead times and supplier reliability.',
    checks: [
      'AI demand forecast',
      'Less working capital tied up in excess inventory',
      'A week-ahead stock forecast',
      'Less idle time',
      'A decision across what-if scenarios in minutes',
    ],
    ctaDemo: 'See the demo',
    alt: 'A network run by Optimus: depot, rail, tanker truck and stations joined into one loop',
  },
  problem: {
    label: '01 · The process today',
    h2: 'What the process looks like today',
    lede: 'Suppliers, the port, the depot and the carriers each work to their own process, and the supply department reconciles all of them by hand. The problems are usually the familiar ones — and a lot of time goes into them. Switch to “With Optimus” to see the same process once the system is in place.',
    toggleAria: 'Today or with Optimus',
    tabToday: 'As it is today',
    tabOptimus: 'With Optimus',
    nodes: { office: 'Supply department', depot: 'Depot', supplier: 'Supplier', port: 'Port / rail', trucks: 'Tanker trucks' },
    coreChaos: { title: 'Manual reconciliation', sub: 'Excel, calls, email' },
    coreOrder: { title: 'Optimus', sub: 'the whole network recalculated in real time' },
    chipsToday: [
      'Disconnected systems',
      'Human error',
      'Inaccurate data',
      'Unbalanced stock',
      'Manual work and delays',
      'Working capital tied up in inventory',
      'Paper document flow',
      'Lost sales',
    ],
    chipsOptimus: [
      'One source of data',
      'A forecast for every tank',
      'Orders in whole rail-car loads',
      'Supplier by price and lead time',
      'Conflicts visible in advance',
      'Less capital tied up in stock',
    ],
    stripToday: { lead: 'Consequences:', rest: ' lower efficiency · financial losses · missed opportunities · rising operational risk' },
    stripOptimus: { lead: 'The person is left with the decision', rest: ' — the system does the rest' },
  },
  process: {
    label: '02 · The process',
    h2: 'From the stock in the tank to the next delivery',
    lede: 'The usual path is short: the system works out what is needed → a person approves it → the supplier delivers → the fuel is received at the depot. Click a step to see how it works.',
    railAria: 'Process steps',
    steps: [
      { key: '1', name: 'Automatic planning', brief: 'Optimus receives current stock and consumption in real time, works out when stock will reach its critical level, and prepares an order proposal.' },
      { key: '2', name: 'Order approval', brief: 'A person reviews the proposal and confirms it — the only step in the whole process that needs one.' },
      { key: '3', name: 'Purchase and delivery', brief: 'The order goes to the supplier. Optimus tracks the fuel on its way and sees ahead of time if the depot will be short of room when it arrives.' },
      { key: 'exc', name: 'Exception: the fuel is on its way and there is no room', brief: 'Optimus sees this case coming and proposes distribution scenarios.' },
      { key: '4', name: 'Receiving at the depot', brief: 'The fuel is discharged into the tanks and the delivery is recorded. Stock is recalculated immediately.' },
      { key: '5', name: 'Data analysis and scenarios', brief: 'The system builds purchasing scenarios, calculates the working capital tied up in inventory, and shows where money is being lost.' },
    ],
    note: 'What the system can do, and how quickly its data refreshes, depends on the data available on the client side and on what can be integrated with their internal systems.',
    panels: {
      '1': {
        label: 'Step 01', title: 'Automatic planning',
        bullets: [
          'Order urgency comes from configurable stock thresholds at the depot — separate ones for every depot and fuel grade',
          'The order is raised far enough ahead for the new fuel to arrive while stock still lasts',
          'Fuel already on its way counts towards the stock',
          'Every order is a whole multiple of the rail-car volume you set',
          'Builds what-if purchasing scenarios: order more, order less, or buy from a different supplier',
          'An extra order can be placed by hand at any moment',
        ],
      },
      '2': {
        label: 'Step 02', title: 'Order approval',
        bullets: [
          'The person reviews the proposed volume, the supplier and the total cost of the order',
          'The proposal can be adjusted by hand before it is confirmed',
          'This is the only step in the whole process that needs a person',
        ],
      },
      '3': {
        label: 'Step 03', title: 'Purchase and delivery',
        bullets: [
          'Optimus tracks the delivery and works out tank capacity ahead of time, counting the fuel already on its way',
          'Discharge speed and sampling time are taken into account, so that time is kept out of the idle count',
          'If the tank turns out to be full on arrival, the system proposes distribution scenarios',
        ],
      },
      'exc': {
        label: 'Exception', title: 'What if the fuel arrives and there is no room?',
        bullets: [
          'Optimus projects stock many days ahead and sees early that the tank will be full by the time the delivery arrives',
          'It then proposes spreading the fuel across other depots, to keep idle time and penalties away',
          'For each case it calculates how many days until room frees up, how many rail cars will not fit, how many days they will stand and what that will cost',
          'When one depot holds a surplus and another is short, moving fuel between them costs less than ordering more',
        ],
      },
      '4': {
        label: 'Step 04', title: 'Receiving at the depot',
        bullets: [
          'The delivery is recorded in the system',
          'Stock is updated and the network-wide calculation runs again',
          'The data goes back to the ERP and the dashboards',
        ],
      },
      '5': {
        label: 'Step 05', title: 'Data analysis and scenarios',
        bullets: [
          'Calculates the working capital tied up in inventory, and where it can be freed up',
          'Shows inventory turns and days of supply by fuel grade and by region',
          'Projects stock at stations, depots and tanks a week ahead',
          'Compares supplier prices against market benchmarks',
          'Results feed the dashboards — management sees where money is being lost',
        ],
      },
    },
    picto: {
      '1': 'A monitor showing a stock line falling towards a marked critical level',
      '2': 'An order card with a large confirmation checkmark above it',
      '3': 'A rail tank car on the move, an orange route line running ahead of it to the depot',
      'exc': 'A full tank with a rail car waiting beside it and a time symbol above',
      '4': 'A tank being filled, the level rising and an arrow pointing into its inlet',
      '5': 'A monitor showing a grid of data, with pipes running from it to smaller screens around it',
    },
  },
  data: {
    label: '03 · Integration',
    h2: 'Data flows',
    lede: 'Optimus keeps no master data of its own — it takes data from the company’s systems, computes the decision, and returns the finished result.',
    alt: 'Four company systems connected to Optimus, which returns the result to the ERP and the dashboards',
    inputs: [
      { name: 'ERP', note: 'Stock and purchase orders' },
      { name: 'TMS', note: 'Logistics data' },
      { name: 'DWH', note: 'Structured data' },
      { name: 'Market prices', note: 'External quotes' },
    ],
    outputs: [
      { name: 'ERP', note: 'Updated stock and orders' },
      { name: 'Dashboards', note: 'Stock forecast, turnover, capital' },
    ],
    capIn: 'In', capOut: 'Out',
    gains: [
      { lead: 'Money saved.', rest: ' The system recalculates the decision against the scenarios you set, and counts the money frozen in excess stock.' },
      { lead: 'Less idle time.', rest: ' Fewer losses from idle depots and idle transport.' },
      { lead: 'Faster decisions.', rest: ' The whole process is automated — a person reviews a finished proposal instead of working through dozens of depot-and-fuel combinations by hand.' },
      { lead: 'Better data quality.', rest: ' Cleaner data flows cut the risks that come with manual calculations and files.' },
    ],
  },
  ui: {
    label: 'The interface',
    h2: 'What it looks like in the system',
    lede: 'Six working screens of Optimus. Move through them with the arrows or the dots.',
    prevAria: 'Previous screen', nextAria: 'Next screen', slideAria: 'Screen',
    slides: [
      {
        caption: 'Dashboard: what to order, from whom, and why',
        alt: 'Optimus dashboard: the positions that need action, with lead times and suppliers',
        anns: [
          'Stock, days to critical and order volume on one line',
          'Why the cheapest supplier lost: it cannot make the date',
        ],
      },
      {
        caption: 'Depot matrix: the whole network × fuel grades on one screen',
        alt: 'Optimus depot matrix: every depot and fuel grade, coloured by urgency',
        anns: [
          'Critical · order · healthy — across the network',
          'Days to critical, fill level and stock in tonnes',
        ],
      },
      {
        caption: 'Recommendations: how much to order and from which supplier',
        alt: 'Optimus recommendation history: stock, days to critical, recommended volume',
        anns: ['Recommended volume and the best supplier'],
      },
      {
        caption: 'Opportunities: transfers and the capital they free up',
        alt: 'Optimus opportunities screen: proposed transfers and working capital released',
        anns: [
          'Transfers nobody asked for',
          'How much capital sits frozen above target',
        ],
      },
      {
        caption: 'Orders: everything already on its way, with dates and suppliers',
        alt: 'Optimus orders: deliveries in transit from the ERP, with statuses and dates',
        anns: ['234 deliveries in transit, statuses pulled from the ERP'],
      },
      {
        caption: 'Strategy: five purchasing modes side by side',
        alt: 'Optimus strategy and scenarios: five optimisation modes compared',
        anns: ['One calculation, five strategies — and the price of each'],
      },
    ],
  },
  cta: {
    heading: 'See Optimus on a live network',
    body: 'The demo runs on a full network model: depots, tanks, suppliers, live recalculation. We will walk it through on your scenarios.',
    primary: 'Request a demo',
  },
};

const RU: OptimusPageDict = {
  meta: {
    title: 'Optimus — управление запасами топлива',
    description: 'Optimus отслеживает запасы топлива на каждой нефтебазе, рассчитывает, когда и в каком объёме заказать, и заранее предупреждает, если план поставки нужно скорректировать.',
  },
  hero: {
    label: 'Optimus · управление запасами топлива',
    h1: 'Что такое Optimus',
    lede: 'Optimus — система на базе AI, которая управляет запасами топлива за вас. Она сама считает, где топливо скоро закончится, сколько и у какого поставщика заказать, и предупреждает заранее, если поставку нужно скорректировать. Сотруднику остаётся только согласовать готовое решение.',
    how: 'Optimus собирает все необходимые данные из ваших систем и с помощью AI-моделей пересчитывает всю картину в режиме реального времени — по всем нефтебазам и видам топлива одновременно, учитывая спрос, сроки и надёжность поставщиков.',
    checks: [
      'AI-прогноз спроса',
      'Меньше денег в лишних запасах',
      'Прогноз на неделю вперёд',
      'Меньше простоев',
      'Решение по нескольким сценариям за минуты',
    ],
    ctaDemo: 'Посмотреть демо',
    alt: 'Сеть под управлением Optimus: нефтебаза, ЖД, бензовоз и станции, связанные в один контур',
  },
  problem: {
    label: '01 · Текущий процесс',
    h2: 'Как выглядит процесс сегодня',
    lede: 'Поставщики, порт, нефтебаза и перевозчики работают каждый по своему процессу, а отдел поставок сводит все процессы вручную. Проблемы, как правило, типичные — и на них теряется много времени. Переключите на «С Optimus», чтобы увидеть тот же процесс, когда система внедрена.',
    toggleAria: 'Сегодня или с Optimus',
    tabToday: 'Как сегодня',
    tabOptimus: 'С Optimus',
    nodes: { office: 'Отдел поставок', depot: 'Нефтебаза', supplier: 'Поставщик', port: 'Порт / ЖД', trucks: 'Бензовозы' },
    coreChaos: { title: 'Ручная сводка', sub: 'Excel, звонки, почта' },
    coreOrder: { title: 'Optimus', sub: 'пересчёт всей сети в реальном времени' },
    chipsToday: [
      'Разрозненные системы',
      'Человеческий фактор',
      'Неточные данные',
      'Дисбаланс запасов',
      'Ручной труд и задержки',
      'Замороженный капитал',
      'Бумажный документооборот',
      'Потери продаж',
    ],
    chipsOptimus: [
      'Единый источник данных',
      'Прогноз по каждому резервуару',
      'Заказ кратен цистерне',
      'Поставщик по цене и срокам',
      'Конфликты видны заранее',
      'Меньше капитала в запасах',
    ],
    stripToday: { lead: 'Последствия:', rest: ' снижение эффективности · финансовые потери · упущенные возможности · рост операционных рисков' },
    stripOptimus: { lead: 'Сотруднику остаётся принять решение', rest: ' — остальное система делает сама' },
  },
  process: {
    label: '02 · Процесс',
    h2: 'От остатка на нефтебазе до новой поставки',
    lede: 'Обычный путь короткий: система рассчитала потребность → сотрудник согласовал → поставщик привёз → топливо приняли на нефтебазе. Нажмите на шаг, чтобы увидеть, как устроен процесс.',
    railAria: 'Шаги процесса',
    steps: [
      { key: '1', name: 'Автоматическое планирование', brief: 'Optimus получает свежие остатки и расход в режиме реального времени, считает, когда запас дойдёт до критического уровня, и формирует предложение по заказу.' },
      { key: '2', name: 'Согласование заказа', brief: 'Сотрудник проверяет предложение и подтверждает его — единственный обязательный шаг с участием сотрудника во всём процессе.' },
      { key: '3', name: 'Закупка и поставка', brief: 'Заказ уходит поставщику. Optimus отслеживает движение топлива и заранее видит, если на нефтебазе не хватит места к приезду.' },
      { key: 'exc', name: 'Исключение: топливо едет, а места нет', brief: 'Optimus видит такой случай заранее и предлагает сценарии распределения.' },
      { key: '4', name: 'Приёмка на нефтебазе', brief: 'Топливо слито в резервуары, поставка зафиксирована. Остатки пересчитываются сразу.' },
      { key: '5', name: 'Анализ данных и сценарии', brief: 'Система строит сценарии закупки, считает замороженный в запасах капитал и показывает, где теряются деньги.' },
    ],
    note: 'Функционал системы и скорость обновления данных определяются наличием данных на стороне клиента и возможностью интеграции с внутренними системами.',
    panels: {
      '1': {
        label: 'Шаг 01', title: 'Автоматическое планирование',
        bullets: [
          'Критичность заказа определяется настраиваемыми порогами остатков на нефтебазе — свои для каждой нефтебазы и вида топлива',
          'Заказ формируется настолько заранее, чтобы новое топливо успело приехать, пока запаса ещё хватает',
          'Топливо, которое уже в пути, также учитывается в остатках',
          'Заказ всегда кратен заданному объёму цистерны',
          'Строит сценарии закупки: что будет, если заказать больше, меньше или у другого поставщика',
          'Дополнительный заказ можно разместить вручную в любой момент',
        ],
      },
      '2': {
        label: 'Шаг 02', title: 'Согласование заказа',
        bullets: [
          'Сотрудник оценивает предложенный объём, поставщика и итоговую стоимость заказа',
          'Предложение можно скорректировать вручную перед подтверждением',
          'Это единственный обязательный шаг с участием сотрудника во всём процессе',
        ],
      },
      '3': {
        label: 'Шаг 03', title: 'Закупка и поставка',
        bullets: [
          'Optimus отслеживает поставку и заранее оценивает загрузку резервуаров с учётом топлива, которое уже в дороге',
          'Учитывается скорость слива и время отбора проб, чтобы не включать это время в простой',
          'Если к приезду резервуар окажется полон — система предложит сценарии распределения',
        ],
      },
      'exc': {
        label: 'Исключение', title: 'Что если топливо приедет, а места не будет?',
        bullets: [
          'Optimus считает остаток на много дней вперёд и видит заранее, что резервуар к моменту приезда будет полон',
          'Тогда система предложит распределить топливо по другим нефтебазам, чтобы не было простоев и штрафов',
          'Для каждого случая она считает: через сколько суток освободится место, сколько цистерн не поместится, сколько дней они простоят и во что это обойдётся',
          'Если на одной нефтебазе излишек, а на другой нехватка — дешевле перевезти топливо между ними, чем заказывать новое',
        ],
      },
      '4': {
        label: 'Шаг 04', title: 'Приёмка на нефтебазе',
        bullets: [
          'Факт доставки фиксируется в системе',
          'Остатки обновляются, и расчёт по сети выполняется заново',
          'Данные передаются обратно в ERP и на дашборды',
        ],
      },
      '5': {
        label: 'Шаг 05', title: 'Анализ данных и сценарии',
        bullets: [
          'Считает, сколько денег заморожено в запасах, и предлагает, как высвободить капитал',
          'Показывает скорость оборота запасов и обеспеченность по видам топлива и регионам',
          'Прогнозирует остатки по станциям, нефтебазам и резервуарам на неделю вперёд',
          'Сравнивает цены поставщиков с рыночными котировками',
          'Результаты уходят на дашборды — руководителю видно, где теряются деньги',
        ],
      },
    },
    picto: {
      '1': 'Монитор с линией остатка, снижающейся к отмеченному критическому уровню',
      '2': 'Карточка заказа и крупная галочка подтверждения над ней',
      '3': 'Цистерна в движении, оранжевая линия маршрута к нефтебазе',
      'exc': 'Полный резервуар и ждущая рядом цистерна, сверху значок времени',
      '4': 'Резервуар, который наполняется: уровень поднимается, стрелка вниз в горловину',
      '5': 'Монитор с сеткой данных, от него трубы к экранам вокруг',
    },
  },
  data: {
    label: '03 · Интеграция',
    h2: 'Потоки данных',
    lede: 'Optimus не хранит собственные справочники — он забирает данные из систем компании, считает решение и возвращает готовый результат обратно.',
    alt: 'Четыре системы компании соединены с Optimus, а он возвращает результат в ERP и на дашборды',
    inputs: [
      { name: 'ERP', note: 'Остатки и заказы на поставку' },
      { name: 'TMS', note: 'Данные по логистике' },
      { name: 'DWH', note: 'Структурированные данные' },
      { name: 'Рыночные цены', note: 'Внешние котировки' },
    ],
    outputs: [
      { name: 'ERP', note: 'Обновлённые остатки и заказы' },
      { name: 'Дашборды', note: 'Прогноз остатков, оборот, капитал' },
    ],
    capIn: 'На входе', capOut: 'На выходе',
    gains: [
      { lead: 'Экономия денег.', rest: ' Система пересчитывает решение по заданным сценариям и учитывает деньги, замороженные в лишних запасах.' },
      { lead: 'Сокращение простоев.', rest: ' Меньше потерь от простоев нефтебаз и транспорта.' },
      { lead: 'Скорость принятия решения.', rest: ' Весь процесс автоматизирован — сотруднику остаётся оценить готовое предложение, а не считать вручную десятки сочетаний нефтебаз и видов топлива.' },
      { lead: 'Повышение качества данных.', rest: ' Оптимизация потоков данных снижает риски, связанные с ручными расчётами и файлами.' },
    ],
  },
  ui: {
    label: 'Интерфейс',
    h2: 'Как это выглядит в системе',
    lede: 'Шесть рабочих экранов Optimus. Листайте стрелками или точками.',
    prevAria: 'Предыдущий экран', nextAria: 'Следующий экран', slideAria: 'Экран',
    slides: [
      {
        caption: 'Дашборд: что заказать, у кого и почему именно так',
        alt: 'Дашборд Optimus: разбор позиций, требующих действия, с расчётом сроков и поставщиков',
        anns: [
          'Запас, срок до критического и объём заказа — в одной строке',
          'Почему не самый дешёвый: он не успевает по сроку',
        ],
      },
      {
        caption: 'Матрица нефтебаз: вся сеть × виды топлива на одном экране',
        alt: 'Матрица нефтебаз Optimus: все нефтебазы и виды топлива, цвет по срочности',
        anns: [
          'Критично · заказать · в норме — по всей сети',
          'Дней до критического, заполнение и остаток в тоннах',
        ],
      },
      {
        caption: 'Рекомендации: сколько заказать и у какого поставщика',
        alt: 'История рекомендаций Optimus: остаток, дни до критического, рекомендованный объём',
        anns: ['Рекомендованный объём и лучший поставщик'],
      },
      {
        caption: 'Возможности: перемещения и капитал, который можно высвободить',
        alt: 'Экран возможностей Optimus: предложенные трансферы и высвобождение оборотного капитала',
        anns: [
          'Трансферы, которые никто не запрашивал',
          'Сколько капитала заморожено сверх цели',
        ],
      },
      {
        caption: 'Заказы: всё, что уже едет, с датами и поставщиками',
        alt: 'Заказы Optimus: поставки в пути из ERP со статусами и датами доставки',
        anns: ['234 поставки в пути, статусы тянутся из ERP'],
      },
      {
        caption: 'Стратегия: пять режимов закупки в сравнении',
        alt: 'Стратегия и сценарии Optimus: сравнение пяти режимов оптимизации',
        anns: ['Один расчёт, пять стратегий — и цена каждой'],
      },
    ],
  },
  cta: {
    heading: 'Посмотрите Optimus на живой сети',
    body: 'Демо-стенд работает на полной модели сети: нефтебазы, резервуары, поставщики, живой пересчёт. Покажем на ваших сценариях.',
    primary: 'Запросить демо',
  },
};

// The page exists in English and Russian. Any other locale that reaches it
// (the German, Estonian and Thai Optimus pages are still the earlier design)
// would fall back to English.
export const OPTIMUS_PAGE: Partial<Record<Locale, OptimusPageDict>> = { en: EN, ru: RU };

export function useOptimusPage(locale: string | undefined): OptimusPageDict {
  return OPTIMUS_PAGE[(locale as Locale)] ?? EN;
}
