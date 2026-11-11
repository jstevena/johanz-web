// - Render halaman About dari data.js -
function renderAbout() {
  const $ = id => document.getElementById(id);

  $('hero-title').textContent = ABOUT.headline;
  $('hero-intro').innerHTML = ABOUT.intro.map(t => `<p>${t}</p>`).join('');

  const markHTML = s => `<span class="tool-mark" style="background:${s.bg};color:${s.fg}">${s.abbr}</span>`;
  $('creative-skills').innerHTML = CREATIVE_SKILLS.map((s, i) => `
    <div class="tool">
      ${s.icon ? `<img class="tool-icon" data-i="${i}" src="${s.icon}" alt="${s.title}" loading="lazy" />` : markHTML(s)}
      <div><span class="tool-title">${s.title}</span><span class="tool-desc">${s.desc}</span></div>
    </div>`).join('');

  // kalau file png belum ada, balik ke kotak abbr
  document.querySelectorAll('.tool-icon').forEach(img => {
    img.addEventListener('error', () => {
      img.outerHTML = markHTML(CREATIVE_SKILLS[img.dataset.i]);
    }, { once: true });
  });

  $('network-slots').innerHTML = NETWORK_SLOTS.map(s => `
    <div class="slot">${s.img
      ? `<img src="${s.img}" alt="${s.title}" loading="lazy" />`
      : `<strong>${s.title}</strong><span>Coming soon</span>`}</div>`).join('');

  $('network-stack').innerHTML = NETWORK_STACK.map(t => `<span class="chip">${t}</span>`).join('');
  $('video-more').href = VIDEO_CHANNEL;
}

// Thumbnail dulu, iframe baru dimuat saat diklik (hemat bandwidth + privasi)
function videoItem(v) {
  return `
    <div class="video-item">
      <div class="video-frame" data-id="${v.id}">
        <button class="video-thumb" aria-label="Play: ${v.title || 'video'}"
                style="background-image:url('https://i.ytimg.com/vi/${v.id}/hqdefault.jpg')">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <span class="video-title">${v.title || ''}</span>
    </div>`;
}

function renderVideos() {
  const area = document.getElementById('video-area');
  const list = VIDEOS.filter(v => v.id && v.id.trim());
  if (!list.length) {
    area.innerHTML = '<p class="video-empty">Videos coming soon. For now, the archive is on YouTube.</p>';
    return;
  }
  area.innerHTML = `<div class="video-grid">${list.map(videoItem).join('')}</div>`;

  area.addEventListener('click', e => {
    const btn = e.target.closest('.video-thumb');
    if (!btn) return;
    const frame = btn.parentElement;
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${frame.dataset.id}?autoplay=1&rel=0"
      title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  renderVideos();
});
