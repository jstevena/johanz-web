// - Render halaman About dari data.js -
function renderAbout() {
  const intro = document.getElementById('about-intro');
  if (intro) intro.innerHTML = ABOUT.intro.map(t => `<p>${t}</p>`).join('');

  const skills = document.getElementById('creative-skills');
  if (skills) skills.innerHTML = CREATIVE_SKILLS.map(s => `
    <div class="page-btn">
      <span class="page-icon"><i class="${s.icon}"></i></span>
      <span class="page-title">${s.title}</span>
      <span class="skill-desc">${s.desc}</span>
    </div>
  `).join('');

  const chips = document.getElementById('network-stack');
  if (chips) chips.innerHTML = NETWORK_STACK.map(t => `<span class="chip">${t}</span>`).join('');

  const more = document.getElementById('video-more');
  if (more) more.href = VIDEO_CHANNEL;
}

// - Video: thumbnail dulu, iframe baru dimuat saat diklik (hemat bandwidth + privasi) -
function renderVideos() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;

  const list = VIDEOS.filter(v => v.id && v.id.trim());
  if (!list.length) {
    grid.innerHTML = '<p class="video-empty">Videos coming soon. For now, the archive is on YouTube.</p>';
    return;
  }

  grid.innerHTML = list.map(v => `
    <div class="video-item">
      <div class="video-frame" data-id="${v.id}">
        <button class="video-thumb" aria-label="Play: ${v.title || 'video'}"
                style="background-image:url('https://i.ytimg.com/vi/${v.id}/hqdefault.jpg')">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <span class="video-title">${v.title || ''}</span>
    </div>
  `).join('');

  grid.addEventListener('click', e => {
    const btn = e.target.closest('.video-thumb');
    if (!btn) return;
    const frame = btn.parentElement;
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${frame.dataset.id}?autoplay=1&rel=0"
      title="YouTube video" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  renderVideos();
});
