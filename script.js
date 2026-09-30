const KEY = 'sudan_market_v3';
let userCoords = null;

// ============================================================
// حساب المدير الافتراضي
// ============================================================
const ADMIN_USER = {
  id: 'admin_1',
  name: 'أنس',
  email: 'anas@market.com',
  password: '12345',
  role: 'admin'
};

// ============================================================
// البيانات الأساسية
// ============================================================
const initialData = {
  users: [ADMIN_USER],

  currentUser: null,

  markets: [
    {
      id: 1,
      name: 'السوق العربي',
      city: 'الخرطوم',
      lat: 15.5997,
      lng: 32.5312,
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'سوق ليبيا',
      city: 'أم درمان',
      lat: 15.6500,
      lng: 32.4300,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'سوق أم درمان',
      city: 'أم درمان',
      lat: 15.6511,
      lng: 32.4819,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'سوق بحري',
      city: 'بحري',
      lat: 15.6290,
      lng: 32.5350,
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=80'
    }
  ],

  products: [
    {
      id: 1,
      name: 'طماطم طازجة',
      category: 'خضروات',
      price: 2500,
      unit: 'كيلو',
      market: 'السوق العربي',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'طماطم طازجة',
      category: 'خضروات',
      price: 2100,
      unit: 'كيلو',
      market: 'سوق أم درمان',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'طماطم طازجة',
      category: 'خضروات',
      price: 2300,
      unit: 'كيلو',
      market: 'سوق بحري',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80'
    },

    {
      id: 4,
      name: 'سكر كنانة',
      category: 'حبوب',
      price: 4200,
      unit: 'كيلو',
      market: 'سوق ليبيا',
      image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'سكر كنانة',
      category: 'حبوب',
      price: 4500,
      unit: 'كيلو',
      market: 'السوق العربي',
      image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 6,
      name: 'سكر كنانة',
      category: 'حبوب',
      price: 4100,
      unit: 'كيلو',
      market: 'سوق أم درمان',
      image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=200&q=80'
    },

    {
      id: 7,
      name: 'موز بلدي',
      category: 'فواكه',
      price: 3000,
      unit: 'كيلو',
      market: 'سوق أم درمان',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 8,
      name: 'موز بلدي',
      category: 'فواكه',
      price: 2800,
      unit: 'كيلو',
      market: 'سوق بحري',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=200&q=80'
    },

    {
      id: 9,
      name: 'بصل أحمر',
      category: 'خضروات',
      price: 1800,
      unit: 'كيلو',
      market: 'سوق ليبيا',
      image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=200&q=80'
    },

    {
      id: 10,
      name: 'لحم عجالي',
      category: 'لحوم',
      price: 12500,
      unit: 'كيلو',
      market: 'سوق بحري',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=200&q=80'
    },

    {
      id: 11,
      name: 'لحم عجالي',
      category: 'لحوم',
      price: 11800,
      unit: 'كيلو',
      market: 'سوق ليبيا',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=200&q=80'
    }
  ],

  favorites: {}
};

// ============================================================
// الأسواق الجديدة - 10 أسواق
// ============================================================
const extraMarkets = [
  {
    id: 5,
    name: 'سوق الكلاكلة',
    city: 'الخرطوم',
    lat: 15.5300,
    lng: 32.5400,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 6,
    name: 'سوق الشجرة',
    city: 'الخرطوم',
    lat: 15.5480,
    lng: 32.5200,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 7,
    name: 'سوق جبرة',
    city: 'الخرطوم',
    lat: 15.5600,
    lng: 32.5550,
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 8,
    name: 'سوق مايو',
    city: 'الخرطوم',
    lat: 15.5305,
    lng: 32.5700,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 9,
    name: 'سوق الكدرو',
    city: 'بحري',
    lat: 15.7000,
    lng: 32.6000,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 10,
    name: 'سوق شمبات',
    city: 'بحري',
    lat: 15.6650,
    lng: 32.5400,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 11,
    name: 'سوق الثورة',
    city: 'أم درمان',
    lat: 15.6800,
    lng: 32.4300,
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 12,
    name: 'سوق ود نوباوي',
    city: 'أم درمان',
    lat: 15.6550,
    lng: 32.4700,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 13,
    name: 'سوق الفتيحاب',
    city: 'أم درمان',
    lat: 15.6200,
    lng: 32.4500,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=80'
  },

  {
    id: 14,
    name: 'سوق أبو سعد',
    city: 'أم درمان',
    lat: 15.6000,
    lng: 32.4400,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=500&q=80'
  }
];

// ============================================================
// المنتجات التي سيتم توزيعها على كل سوق جديد
// 10 منتجات لكل سوق
// ============================================================
const productTemplates = [
  {
    name: 'طماطم طازجة',
    category: 'خضروات',
    price: 2500,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'بصل أحمر',
    category: 'خضروات',
    price: 1800,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'بطاطس',
    category: 'خضروات',
    price: 2200,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'موز بلدي',
    category: 'فواكه',
    price: 3000,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'برتقال',
    category: 'فواكه',
    price: 3500,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'سكر كنانة',
    category: 'حبوب',
    price: 4200,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'أرز',
    category: 'حبوب',
    price: 5000,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'لحم عجالي',
    category: 'لحوم',
    price: 12500,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'دجاج',
    category: 'لحوم',
    price: 9500,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=200&q=80'
  },

  {
    name: 'فلفل أخضر',
    category: 'خضروات',
    price: 2800,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=200&q=80'
  }
];

// ============================================================
// إنشاء 100 منتج
// 10 منتجات × 10 أسواق
// ============================================================
const extraProducts = [];

let nextProductId = 1000;

extraMarkets.forEach((market, marketIndex) => {

  productTemplates.forEach((template, productIndex) => {

    // اختلاف الأسعار بين الأسواق
    const priceVariation =
      ((marketIndex + productIndex) % 5) * 100;

    extraProducts.push({
      id: nextProductId++,

      name: template.name,

      category: template.category,

      price: template.price + priceVariation,

      unit: template.unit,

      market: market.name,

      image: template.image
    });

  });

});

// ============================================================
// إضافة الأسواق والمنتجات إلى البيانات الأولية
// ============================================================
initialData.markets.push(...extraMarkets);
initialData.products.push(...extraProducts);


// ============================================================
// قاعدة البيانات
// ============================================================
let db;

try {

  db = JSON.parse(localStorage.getItem(KEY)) || initialData;

  // التأكد من وجود الخصائص الأساسية
  if (!db.users) db.users = [];
  if (!db.markets) db.markets = [];
  if (!db.products) db.products = [];
  if (!db.favorites || Array.isArray(db.favorites)) {
    db.favorites = {};
  }

  // إضافة المدير إذا لم يكن موجوداً
  if (!db.users.some(u => u.name === 'أنس')) {
    db.users.push(ADMIN_USER);
  }

  // ==========================================================
  // إضافة الأسواق الجديدة للبيانات القديمة
  // بدون تكرار
  // ==========================================================
  extraMarkets.forEach(market => {

    const exists = db.markets.some(
      m => m.name === market.name
    );

    if (!exists) {
      db.markets.push(market);
    }

  });

  // ==========================================================
  // إضافة المنتجات الجديدة للبيانات القديمة
  // بدون تكرار
  // ==========================================================
  extraProducts.forEach(product => {

    const exists = db.products.some(
      p =>
        p.name === product.name &&
        p.market === product.market
    );

    if (!exists) {
      db.products.push(product);
    }

  });

  save();

} catch (e) {

  db = JSON.parse(JSON.stringify(initialData));

  save();

}


// ============================================================
// حفظ البيانات
// ============================================================
function save() {

  try {

    localStorage.setItem(
      KEY,
      JSON.stringify(db)
    );

  } catch (e) {

    console.warn('LocalStorage error');

  }

}


// ============================================================
// المستخدم الحالي
// ============================================================
function getCurrentUser() {

  if (!db.currentUser) return null;

  return db.users.find(
    u =>
      u.id === db.currentUser.id ||
      u.id === db.currentUser
  ) || null;

}


// ============================================================
// هل المستخدم مدير؟
// ============================================================
function isAdmin() {

  const u = getCurrentUser();

  return u && u.role === 'admin';

}


// ============================================================
// حساب المسافة
// ============================================================
function calculateDistance(
  lat1,
  lon1,
  lat2,
  lon2
) {

  const R = 6371;

  const dLat =
    (lat2 - lat1) * Math.PI / 180;

  const dLon =
    (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) *
    Math.sin(dLat / 2) +

    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *

    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(Math.max(0, 1 - a))
    );

  return (R * c).toFixed(1);

}


// ============================================================
// GPS
// ============================================================
function initGPS() {

  const statusEl =
    document.getElementById('gpsStatus');

  if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        if (statusEl) {
          statusEl.textContent =
            'تم تحديد موقعك 📍';
        }

        renderMarkets();

      },

      () => {

        if (statusEl) {
          statusEl.textContent =
            'أسعار اليوم المباشرة';
        }

      },

      {
        enableHighAccuracy: false,
        timeout: 5000
      }

    );

  } else if (statusEl) {

    statusEl.textContent =
      'أسعار اليوم المباشرة';

  }

}


// ============================================================
// الانتقال بين الصفحات
// ============================================================
function showScreen(id) {

  const user = getCurrentUser();

  if (
    !user &&
    id !== 'login' &&
    id !== 'splash'
  ) {

    toast('يجب تسجيل الدخول');

    id = 'login';

  }

  if (
    id === 'admin' &&
    !isAdmin()
  ) {

    toast(
      'عفواً، هذه اللوحة خاصة بالمدير فقط'
    );

    id = 'home';

  }

  document
    .querySelectorAll('.screen')
    .forEach(
      s =>
        s.classList.remove('active')
    );

  const el =
    document.getElementById(id);

  if (el) {
    el.classList.add('active');
  }

  renderAll();

  if (id === 'compare') {
    renderCompare();
  }

  window.scrollTo(0, 0);

}


// ============================================================
// تنسيق العملة
// ============================================================
function money(n) {

  return Number(n)
    .toLocaleString('ar-SD') +
    ' ج.س';

}


// ============================================================
// Toast
// ============================================================
function toast(msg) {

  const t =
    document.getElementById('toast');

  if (!t) return;

  t.textContent = msg;

  t.classList.add('show');

  setTimeout(
    () =>
      t.classList.remove('show'),
    2200
  );

}


// ============================================================
// Navbar
// ============================================================
function navHTML() {

  const admin = isAdmin();

  return `

    <button
      class="nav-item"
      onclick="showScreen('home')">
      🏠
      <span>الرئيسية</span>
    </button>

    <button
      class="nav-item"
      onclick="showScreen('compare')">
      ⚖️
      <span>المقارنة</span>
    </button>

    ${
      admin
        ? '<button class="add-btn" onclick="openProductModal()">＋</button>'
        : ''
    }

    <button
      class="nav-item"
      onclick="showScreen('markets')">
      🏪
      <span>الأسواق</span>
    </button>

    <button
      class="nav-item"
      onclick="showScreen('favorites')">
      ♡
      <span>المفضلة</span>
    </button>

  `;

}


// ============================================================
// عرض الأسواق
// ============================================================
function renderMarkets() {

  const cards =
    db.markets
      .map(m => {

        let distanceText =
          m.city;

        if (
          userCoords &&
          m.lat &&
          m.lng
        ) {

          const dist =
            calculateDistance(
              userCoords.lat,
              userCoords.lng,
              m.lat,
              m.lng
            );

          distanceText =
            `يبعد عنك ${dist} كم`;

        }

        return `

          <div
            class="market"
            style="background-image: url('${m.image}')"
            onclick="marketProducts('${esc(m.name)}')">

            <div class="market-overlay">

              <strong>
                ${esc(m.name)}
              </strong>

              <span>
                ${distanceText}
              </span>

            </div>

          </div>

        `;

      })
      .join('');

  const homeMarkets =
    document.getElementById('marketHome');

  if (homeMarkets) {
    homeMarkets.innerHTML = cards;
  }

  const allMarkets =
    document.getElementById('allMarkets');

  if (allMarkets) {

    allMarkets.innerHTML =
      cards ||
      '<div class="empty">لا توجد أسواق</div>';

  }

}


// ============================================================
// بطاقة المنتج
// ============================================================
function productHTML(p) {

  const user =
    getCurrentUser();

  const isFav =
    user &&
    db.favorites[user.id] &&
    db.favorites[user.id]
      .includes(p.id);

  return `

    <div class="product">

      <img
        class="product-img"
        src="${p.image || 'https://via.placeholder.com/150'}"
        alt="${esc(p.name)}"
        onerror="this.src='https://via.placeholder.com/150'">

      <div class="product-info">

        <h4>
          ${esc(p.name)}
        </h4>

        <small>
          ${esc(p.category)}
          •
          ${esc(p.market)}
          •
          ${esc(p.unit)}
        </small>

      </div>

      <div>

        <div class="price">
          ${money(p.price)}
        </div>

        <button
          class="fav"
          onclick="toggleFav(${p.id})">

          ${isFav ? '❤️' : '♡'}

        </button>

      </div>

    </div>

  `;

}


// ============================================================
// عرض المنتجات
// ============================================================
function renderProducts() {

  const user =
    getCurrentUser();

  const searchInput =
    document.getElementById(
      'searchInput'
    )?.value || '';

  const productSearch =
    document.getElementById(
      'productSearch'
    )?.value || '';

  const q =
    (
      productSearch ||
      searchInput
    )
      .trim()
      .toLowerCase();

  let arr =
    db.products.filter(
      p =>
        (
          p.name +
          ' ' +
          p.category +
          ' ' +
          p.market
        )
          .toLowerCase()
          .includes(q)
    );

  const home =
    document.getElementById(
      'homeProducts'
    );

  if (home) {

    home.innerHTML =
      arr
        .slice(0, 4)
        .map(productHTML)
        .join('') ||

      '<div class="empty">لا توجد نتائج</div>';

  }

  const all =
    document.getElementById(
      'allProducts'
    );

  if (all) {

    all.innerHTML =
      arr
        .map(productHTML)
        .join('') ||

      '<div class="empty">لا توجد منتجات</div>';

  }

  const fav =
    document.getElementById(
      'favProducts'
    );

  if (fav) {

    const myFavIds =
      (
        user &&
        db.favorites[user.id]
      )
        ? db.favorites[user.id]
        : [];

    const myFavProducts =
      db.products.filter(
        p =>
          myFavIds.includes(p.id)
      );

    fav.innerHTML =
      myFavProducts
        .map(productHTML)
        .join('') ||

      '<div class="empty">لم تضف منتجات للمفضلة بعد ❤️</div>';

  }

}


// ============================================================
// محرك مقارنة الأسعار
// ============================================================
function renderCompare() {

  const container =
    document.getElementById(
      'compareContainer'
    );

  if (!container) return;

  const query =
    (
      document.getElementById(
        'compareSearchInput'
      )?.value || ''
    )
      .trim()
      .toLowerCase();

  const groups = {};

  db.products.forEach(p => {

    const key =
      p.name.trim();

    if (!groups[key]) {

      groups[key] = {

        name: key,

        category: p.category,

        unit: p.unit,

        image: p.image,

        items: []

      };

    }

    groups[key]
      .items
      .push(p);

  });

  let groupList =
    Object.values(groups);

  if (query) {

    groupList =
      groupList.filter(
        g =>
          g.name
            .toLowerCase()
            .includes(query) ||

          g.category
            .toLowerCase()
            .includes(query) ||

          g.items.some(
            i =>
              i.market
                .toLowerCase()
                .includes(query)
          )
      );

  }

  if (
    groupList.length === 0
  ) {

    container.innerHTML =
      '<div class="empty">لا توجد نتائج لمقارنة الأسعار</div>';

    return;

  }

  container.innerHTML =
    groupList
      .map(g => {

        const sorted =
          [...g.items]
            .sort(
              (a, b) =>
                a.price - b.price
            );

        const minPrice =
          sorted[0].price;

        const maxPrice =
          sorted[
            sorted.length - 1
          ].price;

        const diff =
          maxPrice - minPrice;

        return `

          <div class="card compare-card">

            <div class="compare-card-head">

              <img
                src="${g.image || 'https://via.placeholder.com/150'}"
                class="compare-thumb"
                alt="${esc(g.name)}">

              <div>

                <h3>
                  ${esc(g.name)}
                </h3>

                <small>
                  ${esc(g.category)}
                  • الوحدة:
                  ${esc(g.unit)}
                </small>

                ${
                  diff > 0
                    ? `
                      <div class="diff-badge">
                        وفر حتى
                        ${money(diff)}
                        بين الأسواق!
                      </div>
                    `
                    : ''
                }

              </div>

            </div>

            <div class="market-price-list">

              ${sorted
                .map(
                  (item, index) => {

                    const isBest =
                      item.price ===
                      minPrice;

                    return `

                      <div
                        class="market-price-row
                        ${
                          isBest
                            ? 'best-price-row'
                            : ''
                        }">

                        <div
                          class="market-name-wrap">

                          <span class="m-icon">
                            🏪
                          </span>

                          <strong>
                            ${esc(item.market)}
                          </strong>

                          ${
                            isBest
                              ? `
                                <span class="best-badge">
                                  🏆 الأرخص
                                </span>
                              `
                              : ''
                          }

                        </div>

                        <div class="m-price">
                          ${money(item.price)}
                        </div>

                      </div>

                    `;

                  }
                )
                .join('')}

            </div>

          </div>

        `;

      })
      .join('');

}


// ============================================================
// فلترة القسم
// ============================================================
function filterCategory(cat) {

  showScreen('products');

  const x =
    document.getElementById(
      'productSearch'
    );

  if (x) {

    x.value = cat;

    renderProducts();

  }

}


// ============================================================
// منتجات السوق
// ============================================================
function marketProducts(m) {

  showScreen('products');

  const x =
    document.getElementById(
      'productSearch'
    );

  if (x) {

    x.value = m;

    renderProducts();

  }

}


// ============================================================
// المفضلة
// ============================================================
function toggleFav(id) {

  const user =
    getCurrentUser();

  if (!user) {

    return toast(
      'يجب تسجيل الدخول أولاً'
    );

  }

  if (!db.favorites[user.id]) {

    db.favorites[user.id] = [];

  }

  const userFavs =
    db.favorites[user.id];

  const index =
    userFavs.indexOf(id);

  if (index > -1) {

    userFavs.splice(
      index,
      1
    );

  } else {

    userFavs.push(id);

  }

  save();

  renderAll();

  toast(
    'تم تحديث مفضلتك الخاصة'
  );

}


// ============================================================
// نافذة إضافة / تعديل منتج
// ============================================================
function openProductModal(id = null) {

  if (!isAdmin()) {

    return toast(
      'الإضافة والتعديل للمدير فقط'
    );

  }

  if (typeof id !== 'number') {
    id = null;
  }

  const p =
    id
      ? db.products.find(
          x => x.id === id
        )
      : null;

  document.getElementById(
    'modalTitle'
  ).textContent =
    p
      ? 'تعديل المنتج'
      : 'إضافة منتج';

  document.getElementById(
    'modalBody'
  ).innerHTML = `

    <div class="form-group">

      <label>
        اسم المنتج
      </label>

      <input
        id="mName"
        value="${p ? esc(p.name) : ''}">

    </div>

    <div class="form-group">

      <label>
        القسم
      </label>

      <select id="mCat">

        <option>خضروات</option>
        <option>فواكه</option>
        <option>لحوم</option>
        <option>حبوب</option>
        <option>أخرى</option>

      </select>

    </div>

    <div class="form-group">

      <label>
        السعر بالجنيه السوداني
      </label>

      <input
        id="mPrice"
        type="number"
        value="${p ? p.price : ''}">

    </div>

    <div class="form-group">

      <label>
        الوحدة
      </label>

      <input
        id="mUnit"
        value="${p ? esc(p.unit) : 'كيلو'}">

    </div>

    <div class="form-group">

      <label>
        رابط الصورة (URL)
      </label>

      <input
        id="mImage"
        value="${p ? esc(p.image) : ''}"
        placeholder="https://example.com/image.jpg">

    </div>

    <div class="form-group">

      <label>
        السوق
      </label>

      <select id="mMarket">

        ${db.markets
          .map(
            m =>
              `
              <option
                ${
                  p &&
                  p.market === m.name
                    ? 'selected'
                    : ''
                }>
                ${esc(m.name)}
              </option>
              `
          )
          .join('')}

      </select>

    </div>

    <button
      class="primary"
      onclick="saveProduct(${id || 0})">

      ${
        p
          ? 'حفظ التعديلات'
          : 'إضافة المنتج'
      }

    </button>

  `;

  if (p) {

    document.getElementById(
      'mCat'
    ).value =
      p.category;

  }

  document.getElementById(
    'modal'
  ).classList.add('show');

}


// ============================================================
// حفظ المنتج
// ============================================================
function saveProduct(id) {

  if (!isAdmin()) {

    return toast(
      'صلاحية مرفوضة'
    );

  }

  const name =
    document
      .getElementById('mName')
      .value
      .trim();

  const price =
    Number(
      document
        .getElementById('mPrice')
        .value
    );

  if (!name || !price) {

    return toast(
      'أدخل اسم المنتج والسعر'
    );

  }

  const data = {

    name,

    category:
      document.getElementById(
        'mCat'
      ).value,

    price,

    unit:
      document
        .getElementById('mUnit')
        .value
        .trim() ||
      'كيلو',

    market:
      document.getElementById(
        'mMarket'
      ).value,

    image:
      document
        .getElementById('mImage')
        .value
        .trim() ||
      'https://via.placeholder.com/150'

  };

  if (id) {

    Object.assign(
      db.products.find(
        p => p.id === id
      ),
      data
    );

    toast(
      'تم تعديل المنتج'
    );

  } else {

    data.id =
      Date.now();

    db.products.push(
      data
    );

    toast(
      'تمت إضافة المنتج'
    );

  }

  save();

  closeModal();

  renderAll();

}


// ============================================================
// حذف المنتج
// ============================================================
function deleteProduct(id) {

  if (!isAdmin()) {

    return toast(
      'الحذف للمدير فقط'
    );

  }

  if (
    confirm(
      'هل تريد حذف المنتج؟'
    )
  ) {

    db.products =
      db.products.filter(
        p => p.id !== id
      );

    Object.keys(
      db.favorites
    ).forEach(uid => {

      db.favorites[uid] =
        db.favorites[uid].filter(
          x => x !== id
        );

    });

    save();

    renderAll();

    toast(
      'تم حذف المنتج'
    );

  }

}


// ============================================================
// إضافة سوق
// ============================================================
function openMarketModal() {

  if (!isAdmin()) {

    return toast(
      'إضافة الأسواق للمدير فقط'
    );

  }

  document.getElementById(
    'modalTitle'
  ).textContent =
    'إضافة سوق';

  document.getElementById(
    'modalBody'
  ).innerHTML = `

    <div class="form-group">

      <label>
        اسم السوق
      </label>

      <input
        id="marketName"
        placeholder="مثال: سوق أم درمان">

    </div>

    <div class="form-group">

      <label>
        المدينة
      </label>

      <input
        id="marketCity"
        value="الخرطوم">

    </div>

    <div class="form-group">

      <label>
        رابط الصورة (URL)
      </label>

      <input
        id="marketImage"
        placeholder="https://example.com/market.jpg">

    </div>

    <button
      class="primary"
      onclick="saveMarket()">

      إضافة السوق

    </button>

  `;

  document.getElementById(
    'modal'
  ).classList.add('show');

}


// ============================================================
// حفظ السوق
// ============================================================
function saveMarket() {

  if (!isAdmin()) {

    return toast(
      'صلاحية مرفوضة'
    );

  }

  const name =
    document
      .getElementById(
        'marketName'
      )
      .value
      .trim();

  const city =
    document
      .getElementById(
        'marketCity'
      )
      .value
      .trim();

  const image =
    document
      .getElementById(
        'marketImage'
      )
      .value
      .trim();

  if (!name) {

    return toast(
      'أدخل اسم السوق'
    );

  }

  db.markets.push({

    id: Date.now(),

    name,

    city:
      city ||
      'الخرطوم',

    image:
      image ||
      'https://via.placeholder.com/500'

  });

  save();

  closeModal();

  renderAll();

  toast(
    'تمت إضافة السوق'
  );

}


// ============================================================
// إغلاق النافذة
// ============================================================
function closeModal() {

  document
    .getElementById('modal')
    .classList
    .remove('show');

}


// ============================================================
// لوحة المدير
// ============================================================
function renderAdmin() {

  const a =
    id =>
      document.getElementById(id);

  if (!a('statProducts')) {
    return;
  }

  if (!isAdmin()) {
    return;
  }

  a('statProducts').textContent =
    db.products.length;

  a('statMarkets').textContent =
    db.markets.length;

  a('statUsers').textContent =
    db.users.length;

  a('adminTable').innerHTML =
    db.products
      .map(
        p => `

          <tr>

            <td>
              ${esc(p.name)}
            </td>

            <td>
              ${money(p.price)}
            </td>

            <td>
              ${esc(p.market)}
            </td>

            <td>

              <div class="actions">

                <button
                  class="btn btn-green"
                  onclick="openProductModal(${p.id})">

                  تعديل

                </button>

                <button
                  class="btn btn-red"
                  onclick="deleteProduct(${p.id})">

                  حذف

                </button>

              </div>

            </td>

          </tr>

        `
      )
      .join('');

}


// ============================================================
// تسجيل الدخول
// ============================================================
function login() {

  const input =
    document
      .getElementById(
        'loginEmail'
      )
      .value
      .trim();

  const pass =
    document.getElementById(
      'loginPass'
    ).value;

  if (!input || !pass) {

    return toast(
      'يرجى إدخال اسم المستخدم وكلمة المرور'
    );

  }

  // دخول المدير
  if (
    (
      input === 'أنس' ||
      input === 'anas@market.com'
    ) &&
    pass === '12345'
  ) {

    let admin =
      db.users.find(
        u =>
          u.name === 'أنس'
      );

    if (!admin) {

      admin =
        ADMIN_USER;

      db.users.push(
        admin
      );

    }

    db.currentUser =
      admin;

    save();

    showScreen('home');

    toast(
      'مرحباً بك يا مدير النظام (أنس)'
    );

    return;

  }

  // دخول المستخدم العادي
  const user =
    db.users.find(
      u =>
        (
          u.name === input ||
          u.email === input
        ) &&
        u.password === pass
    );

  if (user) {

    db.currentUser =
      user;

    save();

    showScreen('home');

    toast(
      `أهلاً بك ${user.name}`
    );

  } else {

    toast(
      'بيانات الدخول غير صحيحة، يرجى إنشاء حساب جديد'
    );

  }

}


// ============================================================
// التسجيل
// ============================================================
function openRegister() {

  document.getElementById(
    'modalTitle'
  ).textContent =
    'إنشاء حساب جديد';

  document.getElementById(
    'modalBody'
  ).innerHTML = `

    <div class="form-group">

      <label>
        اسم المستخدم
      </label>

      <input
        id="rName">

    </div>

    <div class="form-group">

      <label>
        البريد الإلكتروني
      </label>

      <input
        id="rEmail"
        type="email">

    </div>

    <div class="form-group">

      <label>
        كلمة المرور
      </label>

      <input
        id="rPass"
        type="password">

    </div>

    <button
      class="primary"
      onclick="register()">

      إنشاء الحساب

    </button>

  `;

  document.getElementById(
    'modal'
  ).classList.add('show');

}


// ============================================================
// إنشاء حساب
// ============================================================
function register() {

  const name =
    document
      .getElementById(
        'rName'
      )
      .value
      .trim();

  const email =
    document
      .getElementById(
        'rEmail'
      )
      .value
      .trim();

  const password =
    document.getElementById(
      'rPass'
    ).value;

  if (
    !name ||
    !email ||
    !password
  ) {

    return toast(
      'أكمل البيانات'
    );

  }

  if (name === 'أنس') {

    return toast(
      'هذا الاسم محجوز لمدير النظام'
    );

  }

  if (
    db.users.some(
      u =>
        u.email === email ||
        u.name === name
    )
  ) {

    return toast(
      'اسم المستخدم أو البريد الإلكتروني مستخدم بالفعل'
    );

  }

  const user = {

    id: Date.now(),

    name,

    email,

    password,

    role: 'user'

  };

  db.users.push(
    user
  );

  db.currentUser =
    user;

  save();

  closeModal();

  showScreen('home');

  toast(
    'تم إنشاء الحساب بنجاح'
  );

}


// ============================================================
// تحديث الملف الشخصي
// ============================================================
function updateProfile() {

  const u =
    getCurrentUser();

  const nameEl =
    document.getElementById(
      'profileName'
    );

  const emailEl =
    document.getElementById(
      'profileEmail'
    );

  const adminBtn =
    document.getElementById(
      'adminPanelBtn'
    );

  if (nameEl) {

    nameEl.textContent =
      u
        ? u.name
        : 'مستخدم السوق';

  }

  if (emailEl) {

    emailEl.textContent =
      u
        ? u.email
        : '';

  }

  const admin =
    isAdmin();

  if (adminBtn) {

    adminBtn.style.display =
      admin
        ? 'block'
        : 'none';

  }

}


// ============================================================
// تسجيل الخروج
// ============================================================
function logout() {

  db.currentUser =
    null;

  save();

  showScreen(
    'login'
  );

  toast(
    'تم تسجيل الخروج'
  );

}


// ============================================================
// تحديث جميع الواجهات
// ============================================================
function renderAll() {

  document
    .querySelectorAll(
      '.bottom-nav'
    )
    .forEach(
      n =>
        n.innerHTML =
          navHTML()
    );

  renderMarkets();

  renderProducts();

  renderAdmin();

  updateProfile();

}


// ============================================================
// حماية النصوص من HTML
// ============================================================
function esc(s) {

  return String(
    s ?? ''
  ).replace(
    /[&<>"']/g,
    m =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m])
  );

}


// ============================================================
// تشغيل النظام
// ============================================================
if (!getCurrentUser()) {

  showScreen(
    'login'
  );

} else {

  renderAll();

}

initGPS();