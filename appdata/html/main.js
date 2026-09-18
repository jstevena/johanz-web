// - Render Profile & Entries dari data.js -
function renderProfile() {
  const avatarImg = document.getElementById('profile-avatar');
  const nameEl     = document.getElementById('profile-name');
  const taglineEl  = document.getElementById('profile-tagline');
  const footerEl   = document.getElementById('footer-text');

  if (avatarImg) avatarImg.src = PROFILE.avatar;
  if (avatarImg) avatarImg.alt = PROFILE.name || 'avatar';
  if (nameEl)    nameEl.textContent = PROFILE.name;
  if (taglineEl) taglineEl.textContent = PROFILE.tagline;
  if (footerEl)  footerEl.textContent = PROFILE.footer;
}

function renderPageLinks() {
  const container = document.getElementById('page-links');
  if (!container) return;

  container.innerHTML = PAGE_LINKS.map(entry => `
    <a href="${entry.href}" target="_blank" rel="noopener noreferrer" class="page-btn">
      <span class="page-icon"><i class="${entry.icon}"></i></span>
      <span class="page-title">${entry.title}</span>
    </a>
  `).join('');
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  container.innerHTML = SOCIAL_LINKS.map(entry => `
    <a href="${entry.href}" target="_blank" class="link-btn ${entry.className}">
      <span class="btn-icon"><i class="${entry.icon}"></i></span>
      <div class="btn-text">
        <span class="btn-title">${entry.title}</span>
        <span class="btn-desc">${entry.desc || ''}</span>
      </div>
      <span class="btn-arrow">›</span>
    </a>
  `).join('');
}

function renderContactLinks() {
  const container = document.getElementById('contact-links');
  if (!container) return;

  container.innerHTML = CONTACT_LINKS.map(entry => `
    <a href="${entry.href}" target="_blank" class="contact-btn ${entry.className}">
      <span class="contact-icon"><i class="${entry.icon}"></i></span>
      <div class="contact-text">
        <span class="contact-platform">${entry.platform}</span>
        <span class="contact-value">${entry.value || ''}</span>
      </div>
      <span class="contact-arrow">›</span>
    </a>
  `).join('');
}

// - Theme Toggle -
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('toggle-label').textContent = isDark ? 'Light' : 'Dark';
  document.getElementById('toggle-icon').textContent = isDark ? '☀️' : '🌙';
}

// - Custom Cursor (desktop only) -
function setupCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  // Create dot + ring (once)
  let dot  = document.querySelector('.cursor-dot');
  let ring = document.querySelector('.cursor-ring');
  if (!dot) {
    dot  = document.createElement('div');
    ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let mx = 0, my = 0, rx = 0, ry = 0;

    // Dot follows instantly; ring lags behind (magnetic feel)
    (function tick() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    })();

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    // Ripple on click
    document.addEventListener('mousedown', e => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top  = e.clientY + 'px';
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());

      dot.style.transform = 'translate(-50%, -50%) scale(0.6)';
      setTimeout(() => dot.style.transform = 'translate(-50%, -50%) scale(1)', 120);
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '0.5';
    });
  }

  // Morph ring into a rounded square on hover.
  // Pakai event delegation (capture) biar entry yang dirender
  // belakangan dari data.js tetap kebagian efek hover ini,
  // tanpa perlu di-bind ulang tiap kali render.
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button')) {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button')) {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    }
  });
}

// - Toggle auto-hide (mobile only, saat scroll ke bawah) -
function setupToggleAutoHide() {
  const toggleWrap = document.querySelector('.toggle-wrap');
  if (!toggleWrap) return;

  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // di desktop / tablet, toggle selalu keliatan
    if (!isMobile()) {
      toggleWrap.classList.remove('toggle-hidden');
      lastScrollY = currentY;
      return;
    }

    // deket paling atas, tetep keliatan
    if (currentY < 40) {
      toggleWrap.classList.remove('toggle-hidden');
    } else if (currentY > lastScrollY) {
      // scroll ke bawah → sembunyiin
      toggleWrap.classList.add('toggle-hidden');
    } else {
      // scroll ke atas → muncul lagi
      toggleWrap.classList.remove('toggle-hidden');
    }

    lastScrollY = currentY;
  }, { passive: true });
}

// - Init -
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderPageLinks();
  renderSocialLinks();
  renderContactLinks();
  setupCustomCursor();
  setupToggleAutoHide();
});