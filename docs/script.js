// Cart — localStorage-backed; ready for when real products exist.
const CART_KEY = 'wildemade_cart';

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const setCart = (c) => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); };

function addToCart(id, name, price) {
  const cart = getCart();
  const found = cart.find(i => i.id === id);
  if (found) found.qty += 1;
  else cart.push({ id, name, price, qty: 1 });
  setCart(cart);
  toast(`Added ${name}`);
  openCart();
}

function removeFromCart(id) {
  setCart(getCart().filter(i => i.id !== id));
}

function renderCart() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count ? `Cart (${count})` : 'Cart';

  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.<br/>Fresh things coming soon.</div>';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div>
        <div>${i.name}</div>
        <small style="color:var(--text-muted)">Qty ${i.qty}</small>
      </div>
      <div style="text-align:right">
        <div>$${(i.price * i.qty).toFixed(2)}</div>
        <button onclick="removeFromCart('${i.id}')" style="background:none;border:none;color:var(--text-muted);font-size:0.75rem;cursor:pointer">remove</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-backdrop')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-backdrop')?.classList.remove('open');
}

function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

// Shop filters
function filterProducts(category) {
  document.querySelectorAll('.filter').forEach(f => f.classList.toggle('active', f.dataset.filter === category));
  document.querySelectorAll('.product').forEach(p => {
    p.style.display = (category === 'all' || p.dataset.category === category) ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', renderCart);
