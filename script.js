
/* ===== Редагуйте послуги, описи та ціни тут ===== */
const TG = 'https://t.me/Anastasssie';
const IG = 'https://www.instagram.com/beautyretouch/';

const ICONS = {
  retouch: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14l-2 2 2 2M16 14l2 2-2 2"/>',
  design: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h10M7 14h6"/>',
  sub: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M9 15.5l2 2 4-4"/>',
  visual: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9M15 21V9"/>',
  reels: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M10 9l5 3-5 3V9z"/>',
  collage: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/>',
  creative: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>',
  extra: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'
};

const BI = {
  pct: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="2.4"/><circle cx="17" cy="17" r="2.4"/><path d="M19 5L5 19"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 9l3 12M15 9l-3 12M9 9l3-6 3 6"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 001 1h12a1 1 0 001-1v-8M7.5 8a2.5 2.5 0 110-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 110 5"/></svg>'
};

/* tier: core (основні) | featured (преміум) | more (решта) */
const services = [
  {
    tier: 'core',
    title: 'Ретуш фото',
    short: 'Продаюча ретуш: шкіра, колір, фон, деталі. Чисто й природно.',
    icon: ICONS.retouch,
    teaser: '200 грн',
    audience: 'майстрам, фотографам, смм-спеціалістам, дизайнерам, контент-мейкерам, блогерам, експертам та всім, хто хоче замовити послугу для особистих цілей',
    includesNote: 'кожен пункт обговорюється індивідуально',
    includes: [
      'забирання всіх недоліків з людини',
      'кольорокорекція',
      'робота з фоном',
      'додавання або видалення предметів на фото'
    ],
    results: [
      'покращення візуалу, завдяки якому блог виглядає більш професійно',
      'збільшення лояльності аудиторії і, відповідно, вашого загального доходу: запис на послуги завдяки крутим фото',
      'клієнти більше не будуть соромитись побачити себе у ваших постах',
      'делегування роботи з фото ретушеру та звільнення свого часу від додаткової роботи з контентом'
    ],
    prices: [
      ['Будь-яке фото', '200 грн'],
      ['Повна заміна фону / заміна зачіски / одягу', '+ 50 грн']
    ]
  },
  {
    tier: 'core',
    title: 'Банери, прайси, сертифікати',
    short: 'Дизайн, який привертає увагу, чітко подає ціни й залучає клієнтів.',
    icon: ICONS.design,
    teaser: '500–650 грн',
    audience: 'майстрам, смм-спеціалістам, дизайнерам, контент-мейкерам, експертам та спеціалістам усіх ніш',
    includesNote: 'кожен пункт обговорюється індивідуально',
    includes: [
      'обговорення та допомога в пошуку ідеї дизайну прайсу/банеру (розміри, формат, стилістика, цільова аудиторія) та визначення загальної цілі (реклама / вивіска / розіграш тощо)',
      'підбір шрифтів, кольорової гами, референсів під ваш смак та візуал',
      'створення банеру/прайсу відповідно до затвердженої концепції та адаптація його під використання на різних платформах'
    ],
    results: [
      'завдяки гарно і правильно створеному прайсу клієнт не губиться в тексті та чітко бачить ціни = не перепитує в директі про ціни послуг',
      'якісно створений банер може залучити нових клієнтів на послуги та курси'
    ],
    prices: [
      ['Банер', '550 грн'],
      ['Прайс-лист (перша сторінка)', '500 грн'],
      ['Сертифікат', '650 грн'],
      ['Кожна наступна сторінка прайс-листу', '+ 250 грн']
    ]
  },
  {
    tier: 'core',
    wide: true,
    title: 'Створення сайту для ваших послуг чи навчань',
    short: 'Власний сайт, який чітко подає ваші послуги або навчання та допомагає залучати клієнтів.',
    icon: ICONS.web,
    teaser: '3500 грн',
    audience: 'майстрам, експертам, викладачам та всім, хто хоче красиво й зрозуміло презентувати свої послуги чи навчання',
    includesNote: 'деталі обговорюються індивідуально',
    includes: [
      'сайт для ваших послуг або навчань',
      'оформлення у вашому стилі',
      'зручна версія для телефону'
    ],
    prices: [
      ['Створення сайту', '3500 грн']
    ]
  },
  {
    tier: 'featured',
    badge: BI.pct + 'Найвигідніше',
    tag: 'Економія до 1400 грн',
    title: 'Місячна підписка на ретуш',
    short: 'Регулярні продаючі та стильні фото для вашого профілю за вигіднішою ціною.',
    icon: ICONS.sub,
    teaser: '1600–3200 грн / міс',
    highlights: [
      'до 10 або 20 фото з продаючою ретушшю',
      'у форматі Pro — ще й колажі для профілю чи сторіс',
      'два формати на вибір: Basic та Pro'
    ],
    intro: 'Ви часто замовляєте ретуш для себе чи своїх клієнтів? Хочете стабільно мати продаючі та стильні фото для профілю?',
    packsTitle: 'Вигідні пакети',
    tiers: [
      {
        name: 'Pro',
        packs: [
          { l: 'до 10 фото з продаючою ретушшю<br>+ 3 колажі для профілю чи сторіс', old: '2360', now: '1800', save: '560' },
          { l: 'до 20 фото з продаючою ретушшю<br>+ 5 колажів для профілю чи сторіс', old: '4600', now: '3200', save: '1400' }
        ]
      },
      {
        name: 'Basic',
        packs: [
          { l: 'до 10 фото з продаючою ретушшю', old: '2000', now: '1600', save: '400' },
          { l: 'до 20 фото з продаючою ретушшю', old: '4000', now: '3000', save: '1000' }
        ]
      }
    ],
    order: 'Пишіть «підписка 10» або «підписка 20» в директ для замовлення',
    cta: 'ig'
  },
  {
    tier: 'featured',
    badge: BI.gem + 'Максимальний результат',
    tag: BI.gift + '5 сторіс у подарунок',
    title: 'Створення візуалу',
    short: 'Оформлення сторінки під ключ, щоб профіль виглядав «на рівні» і продавав.',
    icon: ICONS.visual,
    teaser: '4500–5500 грн',
    highlights: [
      'індивідуальна аватарка та продаюча шапка профілю',
      'іконки сторіс, прайс-листи та оформлення послуг',
      'візуал 12–18 постів, ретуш фото включена'
    ],
    audience: 'бʼюті майстрам (або іншим сферам, обговорюємо особисто)',
    includesNote: 'кожен пункт обговорюється індивідуально',
    includes: [
      'створення індивідуальної аватарки',
      'написання продаючої шапки профілю',
      'оформлення іконок «актуальних сторіс» (до 6 шт), прайс-листів (до 2 стор.), послуг',
      { t: 'розробка візуалу 12–18 постів:', b: true, sub: [
        'ретуш фото <b>включена</b> в вартість',
        'створення постів з дизайном або рілз під стиль сторінки'
      ] },
      { t: 'В подарунок: оформлення 5 сторіс', gift: true }
    ],
    results: [
      'підвищення продажів завдяки привабливому візуалу, на який хочеться «залипати»',
      'додає впевненості та статусу майстру, тепер сторінка виглядає стильно та «на рівні»',
      'покращення якості фото, чітко видно роботу майстра',
      'органічне збільшення охоплень на постах та сторіс'
    ],
    prices: [
      ['12 постів', '4500 грн'],
      ['18 постів', '5500 грн'],
      ['Публікація постів замість вас', '+ 800 грн'],
      ['Кожен написаний пост', '+ 100 грн']
    ]
  },
  {
    tier: 'more',
    title: 'Монтаж відео для рілз',
    short: 'Динамічний монтаж рілз із субтитрами, музикою та ефектами.',
    icon: ICONS.reels,
    teaser: '450–550 грн',
    audience: 'майстрам, смм-спеціалістам, дизайнерам, контент-мейкерам, експертам та спеціалістам усіх ніш',
    includesNote: 'кожен пункт обговорюється індивідуально',
    includes: [
      'обговорення концепції відео та погодження всіх деталей і побажань (стилістика, музика, візуальні ефекти)',
      'накладання субтитрів'
    ],
    results: [
      'залучення аудиторії та підвищення довіри',
      'трендові рілз можуть принести потенційних клієнтів та впізнаваність'
    ],
    prices: [
      ['До 30 сек', '450 грн'],
      ['До 60 сек', '550 грн']
    ]
  },
  {
    tier: 'more',
    title: 'Створення колажу',
    short: 'Креативні колажі будь-якої складності для постів і сторіс.',
    icon: ICONS.collage,
    teaser: '100–150 грн',
    audience: 'бʼюті майстрам (або іншим сферам, обговорюємо особисто)',
    includesNote: 'кожен пункт обговорюється індивідуально',
    includes: [
      'допомога з пошуком ідеї та її обговорення',
      'виконання колажу будь-якої складності (з 1/2/3 та більше фото)',
      'додавання будь-яких елементів до колажу'
    ],
    results: [
      'креативні пости, які гарантовано виділять вас серед інших конкурентів',
      'люди готові зберігати, лайкати та ділитись вашими публікаціями = збільшення охоплень та шансів на органічне просування',
      'підвищення лояльності аудиторії до вас як до спеціаліста'
    ],
    prices: [
      ['Колаж (залежно від складності)', '100–150 грн']
    ]
  },
  {
    tier: 'more',
    title: 'Креатив',
    short: 'Кілька варіантів ідеї під ваш запит або на мій смак.',
    icon: ICONS.creative,
    teaser: '250 грн',
    includes: [
      'якщо є конкретний запит — надсилаю декілька варіантів цього запиту (наприклад: «хочу мед на губах»)',
      'якщо у вас немає конкретних побажань по креативу — надсилаю 2 варіанти різних ідей на СВІЙ смак'
    ],
    prices: [
      ['Креатив', '250 грн']
    ]
  },
  {
    tier: 'more',
    title: 'Додаткові послуги',
    short: 'Ретуш відео, візитівки, логотипи, каруселі, дизайн методичок.',
    icon: ICONS.extra,
    teaser: '150–1500 грн',
    prices: [
      ['Ретуш відео', '150 грн'],
      ['Відео-колаж', '150 грн'],
      ['Створення візитівки (односторонньої / двосторонньої)', '550 / 650 грн'],
      ['Дизайн каруселі, перша сторінка — банер', '500 грн'],
      ['Дизайн каруселі, кожна наступна в тому ж дизайні', '280 грн'],
      ['Розробка логотипу', '1500 грн'],
      ['Дизайн для методичних посібників (за сторінку)', '150 грн'],
      ['Створення ілюстрації для методичок', 'обговорюється індивідуально']
    ]
  }
];

/* ---- Картки ---- */
const holders = {
  core: document.getElementById('coreCards'),
  featured: document.getElementById('featuredCards'),
  more: document.getElementById('moreCards')
};
const counters = { core: 0, featured: 0, more: 0 };
const svgOpen = '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">';

services.forEach(s => {
  const el = document.createElement('button');
  el.type = 'button';
  el.style.transitionDelay = (counters[s.tier]++ * 90) + 'ms';
  if (s.tier === 'featured') {
    el.className = 'fcard reveal';
    el.innerHTML =
      '<span class="fcard-in">' +
        '<span class="fcard-top"><span class="badge">' + s.badge + '</span><span class="tag">' + s.tag + '</span></span>' +
        svgOpen + s.icon + '</svg>' +
        '<h3>' + s.title + '</h3>' +
        '<span class="fcard-short">' + s.short + '</span>' +
        '<ul>' + s.highlights.map(h => '<li>' + h + '</li>').join('') + '</ul>' +
        '<span class="fcard-foot">' +
          '<span class="fcard-price"><small>Вартість</small><strong>' + s.teaser + '</strong></span>' +
          '<span class="card-more">Детальніше <span>→</span></span>' +
        '</span>' +
      '</span>';
  } else {
    el.className = 'card reveal' + (s.tier === 'more' ? ' compact' : '') + (s.wide ? ' wide' : '');
    el.innerHTML =
      svgOpen + s.icon + '</svg>' +
      '<h3>' + s.title + '</h3><p>' + s.short + '</p>' +
      '<span class="card-foot"><span class="price-tag">' + s.teaser + '</span>' +
      '<span class="card-more">Детальніше <span>→</span></span></span>';
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }
  el.addEventListener('click', () => openModal(s, el));
  holders[s.tier].appendChild(el);
});

/* ---- Модальне вікно ---- */
const modal = document.getElementById('modal');
const mBody = document.getElementById('mBody');
let lastFocus = null;

function mList(items, cls) {
  return '<ul' + (cls ? ' class="' + cls + '"' : '') + '>' + items.map(i => {
    if (typeof i === 'string') return '<li>' + i + '</li>';
    const inner = i.b ? '<b>' + i.t + '</b>' : i.t;
    const sub = i.sub ? '<ul>' + i.sub.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '';
    return '<li' + (i.gift ? ' class="gift"' : '') + '>' + inner + sub + '</li>';
  }).join('') + '</ul>';
}
const SI = {
  who: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 010 5.5M18 14.5c1.9.8 3 2.6 3 5.5"/>',
  inc: '<path d="M4 7l1.8 1.8L9 5.5M4 16l1.8 1.8L9 14.5M13 7h7M13 17h7"/>',
  res: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  price: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
  pack: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 001 1h12a1 1 0 001-1v-8M7.5 8a2.5 2.5 0 110-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 110 5"/>'
};
function mSec(title, html, ico) {
  const chip = ico ? '<span class="m-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' + SI[ico] + '</svg></span>' : '';
  return '<div class="m-sec"><h4>' + chip + title + '</h4>' + html + '</div>';
}
function mRows(rows) {
  return '<div class="prows">' + rows.map(r => {
    const txt = /[а-яіїєґ]{5,}/i.test(r[1]) && !/грн/.test(r[1]);
    return '<div class="prow"><span>' + r[0] + '</span><b' + (txt ? ' class="txt"' : '') + '>' + r[1] + '</b></div>';
  }).join('') + '</div>';
}
function buildModal(s) {
  let h = '';
  if (s.badge) h += '<span class="badge">' + s.badge + '</span>';
  h += '<h3 id="mTitle">' + s.title + '</h3>';
  if (s.intro) h += '<p class="desc">' + s.intro + '</p>';
  if (s.audience) h += mSec('Кому підходить?', '<p>' + s.audience + '</p>', 'who');
  if (s.includes) h += mSec('Що входить?', (s.includesNote ? '<p class="sm">(' + s.includesNote + ')</p>' : '') + mList(s.includes), 'inc');
  if (s.results) h += mSec('Який результат?', mList(s.results, 'res'), 'res');
  if (s.tiers) {
    h += mSec(s.packsTitle || 'Пакети', s.tiers.map(t =>
      '<div class="tier"><div class="tier-name">Підписка <em>' + t.name + '</em></div>' +
      t.packs.map(p =>
        '<div class="pack"><div class="pack-l">' + p.l + '</div>' +
        '<div class="pack-p"><s>' + p.old + '</s><strong>' + p.now + ' грн</strong>' +
        '<span class="save">Економія — ' + p.save + ' грн</span></div></div>'
      ).join('') + '</div>'
    ).join(''), 'pack');
  }
  if (s.prices) h += mSec('Вартість', mRows(s.prices), 'price');
  if (s.order) h += '<div class="order-note">' + s.order + '</div>';
  h += '<div class="m-actions">' + (s.cta === 'ig'
    ? '<a class="btn primary" href="' + IG + '" target="_blank" rel="noopener">Написати в Instagram Direct</a><a class="btn" href="' + TG + '" target="_blank" rel="noopener">Замовити в Telegram</a>'
    : '<a class="btn primary" href="' + TG + '" target="_blank" rel="noopener">Замовити в Telegram</a><a class="btn" href="' + IG + '" target="_blank" rel="noopener">Написати в Instagram</a>') + '</div>';
  if (!s.wide) h += '<p class="m-foot">Зазвичай замовлення готове протягом доби<br>(бувають винятки у вихідні або дуже завантажені дні)</p>';
  return h;
}
function openModal(s, trigger) {
  lastFocus = trigger;
  mBody.innerHTML = buildModal(s);
  mBody.scrollTop = 0;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('mClose').focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
document.getElementById('mClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

/* ===== Портфоліо: додавайте роботи сюди =====
   retouch: { type:"retouch", title:"Назва", before:"data:image/jpeg;base64,...", after:"data:image/jpeg;base64,..." }
   banner:  { type:"banner",  title:"Назва", src:"data:image/jpeg;base64,..." }
   Поки масив порожній, показуються заглушки. */
const works = [
  {type:"retouch",title:"Бʼюті-портрет",before:"images/retouch-1-before.jpg",after:"images/retouch-1-after.jpg"},
  {type:"retouch",title:"Портрет після процедури",before:"images/retouch-2-before.jpg",after:"images/retouch-2-after.jpg"},
  {type:"retouch",title:"Рекламне фото продукту",before:"images/retouch-3-before.jpg",after:"images/retouch-3-after.jpg"},
  {type:"retouch",title:"Брови після процедури",before:"images/retouch-4-before.jpg",after:"images/retouch-4-after.jpg"},
{type:"retouch",title:"Фото для реклами бровей",before:"images/retouch-5-before.jpg",after:"images/retouch-5-after.jpg"},
{type:"retouch",title:"Губи після процедури",before:"images/retouch-6-before.jpg",after:"images/retouch-6-after.jpg"},
{type:"banner",title:"Банер · пошук моделей",src:"images/design-1.jpg"},
  {type:"banner",title:"Сторіз · пошук моделей",src:"images/design-2.jpg"},
  {type:"banner",title:"Прайс-лист · перманент",src:"images/design-3.jpg"},
  {type:"banner",title:"Прайс-лист · вії",src:"images/design-4.jpg"},
  {type:"banner",title:"Сертифікат · Lash Master",src:"images/design-5.jpg"},
  {type:"banner",title:"Сертифікат · видалення ПМ",src:"images/design-6.jpg"}
];

const worksGrid = document.getElementById('worksGrid');
const tabs = document.querySelectorAll('.tab');
const phIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg>';
let currentType = 'retouch';

function renderWorks() {
  worksGrid.innerHTML = '';
  worksGrid.classList.toggle('masonry', currentType === 'banner');
  const list = works.filter(w => w.type === currentType);
  if (!list.length) {
    const wide = currentType === 'banner';
    for (let i = 0; i < (wide ? 2 : 3); i++) {
      const d = document.createElement('div');
      d.className = 'work';
      d.innerHTML = '<div class="ph' + (wide ? ' wide' : '') + '">' + phIcon + '<span>' + (wide ? 'Тут буде ваш банер' : 'Тут буде ваша ретуш до / після') + '</span></div>';
      worksGrid.appendChild(d);
    }
    return;
  }
  list.forEach((w, i) => {
    const d = document.createElement('div');
    d.className = 'work';
    d.style.animationDelay = (i * 70) + 'ms';
    if (w.type === 'retouch') {
      d.innerHTML =
        '<div class="ba"><img src="' + w.before + '" alt="До" loading="lazy">' +
        '<img class="after" src="' + w.after + '" alt="Після" loading="lazy">' +
        '<span class="tag l">До</span><span class="tag r">Після</span>' +
        '<div class="line"></div>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Порівняти до і після">' +
        '<div class="knob"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></div></div>';
      const ba = d.querySelector('.ba');
      d.querySelector('input').addEventListener('input', e => ba.style.setProperty('--pos', e.target.value + '%'));
    } else {
      d.innerHTML =
        '<button class="banner" type="button" aria-label="Відкрити"><img src="' + w.src + '" alt="Дизайн" loading="lazy"></button>';
      d.querySelector('.banner').addEventListener('click', () => openLightbox(w.src, w.title));
    }
    worksGrid.appendChild(d);
  });
}
tabs.forEach(t => t.addEventListener('click', () => {
  currentType = t.dataset.type;
  tabs.forEach(x => { const on = x === t; x.classList.toggle('active', on); x.setAttribute('aria-selected', on); });
  renderWorks();
}));
renderWorks();

const reviews = ["images/review-1.jpg","images/review-2.jpg","images/review-3.jpg","images/review-4.jpg","images/review-5.jpg","images/review-6.jpg","images/review-7.jpg","images/review-8.jpg","images/review-9.jpg","images/review-10.jpg"];
(function(){
  const g=document.getElementById('reviewsGrid');
  reviews.forEach((src,i)=>{
    const b=document.createElement('button'); b.className='review in'; b.type='button';
    b.setAttribute('aria-label','Відгук '+(i+1));
    const im=document.createElement('img'); im.src=src; im.alt='Відгук клієнта'; im.loading='lazy';
    b.appendChild(im); b.addEventListener('click',()=>openLightbox(src,'Відгук клієнта'));
    g.appendChild(b);
  });
  const cards=[...g.children], cnt=document.getElementById('rvCount');
  const step=()=>(cards[1]?cards[1].offsetLeft-cards[0].offsetLeft:300);
  document.getElementById('rvPrev').onclick=()=>g.scrollBy({left:-step(),behavior:'smooth'});
  document.getElementById('rvNext').onclick=()=>g.scrollBy({left:step(),behavior:'smooth'});
  const upd=()=>{const i=Math.round(g.scrollLeft/step());cnt.textContent=(Math.min(i,cards.length-1)+1)+' / '+cards.length};
  g.addEventListener('scroll',upd,{passive:true}); upd();
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
    g.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  } else g.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
})();
/* Lightbox */
const lightbox = document.getElementById('lightbox');
function openLightbox(src, alt) {
  const img = document.getElementById('lbImg');
  img.src = src; img.alt = alt || '';
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });

/* Nav on scroll */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); const t = en.target; setTimeout(() => { t.style.transitionDelay = ''; }, 1400); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
