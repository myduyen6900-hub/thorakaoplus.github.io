const products = [
  {
    id: 'kem-nghe',
    name: 'Kem nghệ Collagen dưỡng trắng',
    brand: 'Thorakao Plus',
    price: 89000,
    oldPrice: 128000,
    rating: '4.8 · 2.1k đã bán',
    tag: 'Best seller',
    category: 'kem-nghe',
    keywords: 'kem nghệ dưỡng trắng collagen',
    badge: 'Kem nghệ',
    desc: 'Sản phẩm chủ đề chính của Thorakao Plus, lấy cảm hứng từ kem nghệ truyền thống nhưng làm mới theo hướng sang hơn, ấm hơn và phù hợp website thương mại điện tử hiện đại.',
    benefit: 'Hỗ trợ làm sáng da, giảm cảm giác xỉn màu, phù hợp với layout ưu tiên kem nghệ.',
    use: 'Lấy lượng vừa đủ, thoa lên vùng da sạch vào buổi tối hoặc theo hướng dẫn trên bao bì.',
    ingredients: 'Nghệ, collagen, chiết xuất thiên nhiên, nền dưỡng ẩm nhẹ.',
    note: 'Nên dùng thử trên vùng da nhỏ trước khi sử dụng rộng rãi.',
    pills: ['Kem nghệ', 'Da mặt', 'Thiên nhiên'],
    emoji: '🟡'
  },
  {
    id: 'serum-sen',
    name: 'Serum hoa sen chống lão hoá',
    brand: 'Thorakao Plus',
    price: 119000,
    oldPrice: 149000,
    rating: '4.9 · 1.5k đã bán',
    tag: 'Mới',
    category: 'serum',
    keywords: 'serum hoa sen chống lão hóa',
    badge: 'Serum',
    desc: 'Serum nhẹ, thiên về dưỡng ẩm và làm mềm da. Phối màu theo tông kem nghệ để đồng bộ toàn bộ website.',
    benefit: 'Hỗ trợ da mịn hơn, trông khỏe hơn và đều màu hơn.',
    use: 'Sau bước rửa mặt và toner, lấy 2–3 giọt thoa đều lên mặt.',
    ingredients: 'Hoa sen, chiết xuất thực vật, dưỡng chất cấp ẩm.',
    note: 'Bảo quản nơi khô mát, tránh ánh nắng trực tiếp.',
    pills: ['Serum', 'Cấp ẩm', 'Mềm da'],
    emoji: '🌸'
  },
  {
    id: 'dau-goi-bo-ket',
    name: 'Dầu gội bồ kết phục hồi tóc',
    brand: 'Thorakao Plus',
    price: 65000,
    oldPrice: 82000,
    rating: '4.7 · 3.4k đã bán',
    tag: 'Truyền thống',
    category: 'hair',
    keywords: 'dầu gội bồ kết phục hồi tóc',
    badge: 'Haircare',
    desc: 'Sản phẩm tóc mang bản sắc truyền thống Việt, rất hợp với thương hiệu Thorakao khi chuyển sang phiên bản Thorakao Plus.',
    benefit: 'Hỗ trợ tóc sạch, mềm hơn và dễ vào nếp hơn.',
    use: 'Làm ướt tóc, lấy lượng vừa đủ, massage nhẹ rồi xả sạch bằng nước.',
    ingredients: 'Bồ kết, thảo mộc, chiết xuất thiên nhiên.',
    note: 'Không để sản phẩm dính trực tiếp vào mắt.',
    pills: ['Bồ kết', 'Tóc', 'Thảo mộc'],
    emoji: '🫧'
  },
  {
    id: 'kem-chong-nang',
    name: 'Kem chống nắng SPF50 nha đam',
    brand: 'Thorakao Plus',
    price: 95000,
    oldPrice: 109000,
    rating: '4.7 · 980 đã bán',
    tag: 'Bảo vệ',
    category: 'sun',
    keywords: 'kem chống nắng spf50 nha đam',
    badge: 'Sun care',
    desc: 'Kem chống nắng nhẹ mặt, hợp bộ nhận diện nền kem nghệ và màu vàng ấm.',
    benefit: 'Hỗ trợ bảo vệ da trước ánh nắng và dùng hằng ngày.',
    use: 'Thoa trước khi ra ngoài 15–20 phút, nhắc lại sau vài giờ.',
    ingredients: 'Nha đam, bộ lọc chống nắng, nền dưỡng nhẹ.',
    note: 'Lắc đều trước khi dùng nếu bao bì có hướng dẫn.',
    pills: ['SPF50', 'Nha đam', 'Daily use'],
    emoji: '☀️'
  },
  {
    id: 'combo-tet',
    name: 'Combo quà tặng Tết Thorakao Plus',
    brand: 'Thorakao Plus',
    price: 249000,
    oldPrice: 299000,
    rating: '4.9 · Set quà',
    tag: 'Combo',
    category: 'combo',
    keywords: 'combo quà tết thorakao plus',
    badge: 'Gift set',
    desc: 'Bộ quà tặng được phối riêng để nhìn sang hơn, phù hợp tặng người thân, khách hàng hoặc làm landing page mùa lễ.',
    benefit: 'Tạo cảm giác chỉn chu, dễ bán, dễ làm bundle upsell.',
    use: 'Có thể dùng làm set bán lẻ hoặc hộp quà theo mùa.',
    ingredients: 'Kem nghệ, serum, dầu gội, chống nắng.',
    note: 'Đây là combo demo, có thể thay số lượng sản phẩm tùy nhu cầu.',
    pills: ['Combo', 'Quà tặng', 'Mùa lễ'],
    emoji: '🎁'
  },
  {
    id: 'sua-rua-mat-nghe',
    name: 'Sữa rửa mặt nghệ dịu nhẹ',
    brand: 'Thorakao Plus',
    price: 72000,
    oldPrice: 89000,
    rating: '4.6 · 850 đã bán',
    tag: 'Da mặt',
    category: 'cleanser',
    keywords: 'sữa rửa mặt nghệ dịu nhẹ',
    badge: 'Cleanser',
    desc: 'Sản phẩm nền cho routine làm đẹp, giữ màu chủ đạo kem nghệ và tạo cảm giác thân thiện cho người dùng.',
    benefit: 'Hỗ trợ làm sạch bụi bẩn, mang lại cảm giác da nhẹ và thoáng hơn.',
    use: 'Dùng sáng và tối, tạo bọt nhẹ rồi rửa lại bằng nước sạch.',
    ingredients: 'Nghệ, chất làm sạch dịu nhẹ, dưỡng ẩm.',
    note: 'Tránh tiếp xúc trực tiếp với mắt.',
    pills: ['Rửa mặt', 'Nghệ', 'Dịu nhẹ'],
    emoji: '🧼'
  }
];

const state = {
  cart: [],
  filter: 'all',
  search: '',
  sort: 'popular',
  currentProduct: null
};

const currency = n => new Intl.NumberFormat('vi-VN').format(n) + 'đ';

function renderHeaderCartCount() {
  const cartCount = document.getElementById('cartCount');
  if(!cartCount) return;
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getFilteredProducts() {
  let list = [...products];
  if(state.filter !== 'all') list = list.filter(p => p.category === state.filter);
  if(state.search.trim()){
    const q = state.search.trim().toLowerCase();
    list = list.filter(p => [p.name, p.brand, p.keywords, p.category, p.badge, p.desc].join(' ').toLowerCase().includes(q));
  }
  if(state.sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if(state.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if(state.sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name, 'vi'));
  return list;
}

function renderProductGrid(targetId = 'productGrid') {
  const grid = document.getElementById(targetId);
  if(!grid) return;
  const list = getFilteredProducts();
  grid.innerHTML = list.length ? list.map(p => `
    <article class="card product-card" data-id="${p.id}">
      <div class="product-media">
        <div class="tag">${p.tag}</div>
        <button class="wish" aria-label="Yêu thích">♡</button>
        <div class="placeholder">
          <div>
            <div style="font-size:34px; margin-bottom:8px">${p.emoji}</div>
            <div style="font-size:13px; line-height:1.4">${p.badge}<br>${p.name}</div>
          </div>
        </div>
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="rating">⭐ ${p.rating}</div>
        <div class="price-row">
          <div class="price-now">${currency(p.price)}</div>
          <div class="price-old">${currency(p.oldPrice)}</div>
        </div>
        <div class="action-row">
          <button class="small-btn small-primary add-cart-btn" data-id="${p.id}">Thêm vào giỏ</button>
          <button class="small-btn small-secondary detail-btn" data-id="${p.id}">Xem chi tiết</button>
        </div>
      </div>
    </article>
  `).join('') : `<div class="card" style="grid-column:1/-1; padding:24px; text-align:center; color:var(--muted);">Không tìm thấy sản phẩm phù hợp.</div>`;

  grid.querySelectorAll('.detail-btn, .product-card').forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.target.closest('.add-cart-btn') || e.target.closest('.wish')) return;
      const id = el.dataset.id || e.currentTarget.dataset.id;
      openProduct(id);
    });
  });
  grid.querySelectorAll('.add-cart-btn').forEach(btn => btn.addEventListener('click', () => addToCart(btn.dataset.id)));
  grid.querySelectorAll('.wish').forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? '#C96B4B' : '#333';
  }));
}

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if(!p) return;
  state.currentProduct = p;

  const modal = document.getElementById('productModal');
  if(!modal) return;

  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalBrand = document.getElementById('modalBrand');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const modalOld = document.getElementById('modalOld');
  const modalPills = document.getElementById('modalPills');
  const modalBenefit = document.getElementById('modalBenefit');
  const modalUse = document.getElementById('modalUse');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalNote = document.getElementById('modalNote');
  const modalImageArea = document.getElementById('modalImageArea');

  modalTag.textContent = p.tag;
  modalTitle.textContent = p.name;
  modalBrand.textContent = p.brand;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = currency(p.price);
  modalOld.textContent = currency(p.oldPrice);
  modalPills.innerHTML = p.pills.map(x => `<span class="pill">${x}</span>`).join('');
  modalBenefit.textContent = p.benefit;
  modalUse.textContent = p.use;
  modalIngredients.textContent = p.ingredients;
  modalNote.textContent = p.note;
  modalImageArea.innerHTML = `
    <div style="width:100%; height:100%; border-radius:22px; background:linear-gradient(135deg,#FFF8E1,#FFF3D0); display:grid; place-items:center; padding:20px;">
      <div style="width:min(320px, 90%); aspect-ratio: 3/4; border-radius:30px; background:linear-gradient(180deg,#7A4E1D,#D9A441 55%, #C96B4B); box-shadow:0 28px 40px rgba(122,78,29,.2); display:grid; place-items:center; color:white; text-align:center; padding:18px;">
        <div>
          <div style="font-size:14px; letter-spacing:3px; margin-bottom:8px;">THORAKAO</div>
          <div style="font-size:34px; font-weight:900; line-height:1; margin-bottom:8px;">PLUS</div>
          <div style="font-size:13px; opacity:.9; line-height:1.7;">${p.name}</div>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('show');
}

function addToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  const found = state.cart.find(x => x.id === id);
  if(found) found.qty += 1;
  else state.cart.push({ id: p.id, qty:1 });
  updateCart();
  openCart();
}

function updateCart(){
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if(!cartItems || !cartTotal) return;

  renderHeaderCartCount();
  if(!state.cart.length){
    cartItems.innerHTML = `<div style="padding:24px; text-align:center; color:var(--muted);">Giỏ hàng đang trống.</div>`;
    cartTotal.textContent = '0đ';
    return;
  }

  let total = 0;
  cartItems.innerHTML = state.cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if(!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <div class="thumb">${p.emoji}</div>
        <div>
          <h6 style="margin:0 0 4px; font-size:14px; line-height:1.35">${p.name}</h6>
          <p style="margin:0; color:var(--muted); font-size:12px">${currency(p.price)} · ${p.brand}</p>
          <div class="qty-box">
            <button class="qty-btn" data-action="minus" data-id="${p.id}">−</button>
            <span><b>${item.qty}</b></span>
            <button class="qty-btn" data-action="plus" data-id="${p.id}">+</button>
            <button class="qty-btn" data-action="remove" data-id="${p.id}" style="margin-left:6px;">x</button>
          </div>
        </div>
        <div style="font-weight:900; color:var(--terracotta)">${currency(p.price * item.qty)}</div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = currency(total);

  cartItems.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const found = state.cart.find(x => x.id === id);
      if(!found) return;
      if(action === 'plus') found.qty += 1;
      if(action === 'minus') found.qty -= 1;
      if(action === 'remove' || found.qty <= 0) state.cart = state.cart.filter(x => x.id !== id);
      updateCart();
    });
  });
  localStorage.setItem('thorakao_cart', JSON.stringify(state.cart));
}

function openCart(){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if(drawer) drawer.classList.add('show');
  if(overlay) overlay.classList.add('show');
}
function closeCart(){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if(drawer) drawer.classList.remove('show');
  if(overlay) overlay.classList.remove('show');
}

function bindGlobalUi(){
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const overlay = document.getElementById('drawerOverlay');
  const modal = document.getElementById('productModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if(openCartBtn) openCartBtn.addEventListener('click', openCart);
  if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if(overlay) overlay.addEventListener('click', () => { closeCart(); if(modal) modal.classList.remove('show'); });
  if(closeModalBtn) closeModalBtn.addEventListener('click', () => modal.classList.remove('show'));

  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const sortSelect = document.getElementById('sortSelect');

  if(searchInput){
    searchInput.addEventListener('input', () => { state.search = searchInput.value; renderProductGrid(); });
    if(searchBtn) searchBtn.addEventListener('click', () => { state.search = searchInput.value; renderProductGrid(); });
  }
  if(sortSelect){
    sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; renderProductGrid(); });
  }

  const imageInput = document.getElementById('imageInput');
  const resetPreviewBtn = document.getElementById('resetPreviewBtn');
  const previewBox = document.getElementById('previewBox');
  const productNameInput = document.getElementById('productNameInput');

  if(imageInput && previewBox){
    imageInput.addEventListener('change', function(){
      const file = this.files && this.files[0];
      if(!file){
        previewBox.innerHTML = `<div><div style="font-size:18px; font-weight:900; color:var(--caramel); margin-bottom:6px;">Ảnh preview</div><div style="font-size:13px;">Chưa có ảnh được chọn</div></div>`;
        return;
      }
      const url = URL.createObjectURL(file);
      const name = productNameInput ? (productNameInput.value || 'Sản phẩm') : 'Sản phẩm';
      previewBox.innerHTML = `<img src="${url}" alt="${name}">`;
    });
  }
  if(resetPreviewBtn){
    resetPreviewBtn.addEventListener('click', () => {
      if(imageInput) imageInput.value = '';
      if(previewBox) previewBox.innerHTML = `<div><div style="font-size:18px; font-weight:900; color:var(--caramel); margin-bottom:6px;">Ảnh preview</div><div style="font-size:13px;">Chưa có ảnh được chọn</div></div>`;
    });
  }

  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });
}

function loadCartFromStorage(){
  try{
    const saved = JSON.parse(localStorage.getItem('thorakao_cart') || '[]');
    if(Array.isArray(saved)) state.cart = saved;
  }catch(e){}
}

function renderCategoryFilters(targetId='categoryFilters'){
  const el = document.getElementById(targetId);
  if(!el) return;
  const categories = [
    { id:'all', label:'Tất cả' },
    { id:'kem-nghe', label:'Kem nghệ' },
    { id:'serum', label:'Serum' },
    { id:'hair', label:'Tóc' },
    { id:'sun', label:'Chống nắng' },
    { id:'combo', label:'Combo' },
    { id:'cleanser', label:'Sữa rửa mặt' }
  ];
  el.innerHTML = categories.map(cat => `<button class="chip-btn filter-btn ${state.filter===cat.id ? 'active':''}" data-cat="${cat.id}">${cat.label}</button>`).join('');
  el.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.cat;
      renderCategoryFilters(targetId);
      renderProductGrid();
    });
  });
}

function initHome(){
  loadCartFromStorage();
  bindGlobalUi();
  renderHeaderCartCount();
  renderCategoryFilters();
  renderProductGrid();
  updateCart();
}

function initProductsPage(){
  initHome();
  state.filter = 'all';
  renderCategoryFilters();
  renderProductGrid();
}

function initReviewsPage(){
  loadCartFromStorage();
  bindGlobalUi();
  renderHeaderCartCount();
}

function initCartPage(){
  loadCartFromStorage();
  bindGlobalUi();
  updateCart();
}

function initProductDetailPage(){
  loadCartFromStorage();
  bindGlobalUi();
  renderHeaderCartCount();
  const qs = new URLSearchParams(location.search);
  const id = qs.get('id') || 'kem-nghe';
  openProduct(id);
}