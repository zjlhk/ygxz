// script.js
// Main logic: i18n init, extract video ID, check thumbnails, render UI, download

// Utility: detect initial language
function detectLang() {
  const urlParams = new URLSearchParams(location.search);
  const hl = urlParams.get('hl');
  if (hl && I18N[hl]) return hl;

  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en';
  const primary = nav.split('-')[0];
  // map zh to zh, es to es, ar, hi, pt, ru, ja, otherwise en
  return I18N[primary] ? primary : 'en';
}

let currentLang = detectLang();

// DOM references
const siteTitle = document.getElementById('site-title');
const langSelect = document.getElementById('lang-select');
const videoInput = document.getElementById('video-input');
const fetchBtn = document.getElementById('fetch-btn');
const clearBtn = document.getElementById('clear-btn');
const statusP = document.getElementById('status');
const thumbGrid = document.getElementById('thumb-grid');
const seoArticle = document.getElementById('seo-article');
const yearSpan = document.getElementById('year');

// fill year
yearSpan.textContent = new Date().getFullYear();

// populate language dropdown
(function populateLangs(){
  Object.keys(I18N).forEach(key=>{
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = I18N[key].langName;
    langSelect.appendChild(opt);
  });
  langSelect.value = currentLang;
})();

function applyLang(lang) {
  currentLang = lang;
  const pack = I18N[lang];
  // direction (rtl for Arabic)
  document.documentElement.setAttribute('dir', pack.dir || 'ltr');
  // UI text
  siteTitle.textContent = pack.ui.title;
  videoInput.placeholder = pack.ui.inputPlaceholder;
  fetchBtn.textContent = pack.ui.btnFetch;
  clearBtn.textContent = pack.ui.btnClear;
  statusP.textContent = '';
  // SEO article
  seoArticle.innerHTML = pack.seoHtml;
  // set language select value
  langSelect.value = lang;
}

applyLang(currentLang);

// listen for manual change
langSelect.addEventListener('change', (e)=>{
  applyLang(e.target.value);
});

// clear
clearBtn.addEventListener('click', ()=>{
  videoInput.value = '';
  thumbGrid.innerHTML = '';
  statusP.textContent = '';
});

// extract video ID from many YouTube URL formats
function extractVideoID(input) {
  if (!input) return null;
  input = input.trim();
  // if pure ID (11 chars alnum - covers most)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const u = new URL(input);
    // youtube.com/watch?v=ID or &v=
    if (u.hostname.includes('youtube.com')) {
      if (u.searchParams.get('v')) return u.searchParams.get('v');
      // /shorts/ID or /watch/ID
      const paths = u.pathname.split('/').filter(Boolean);
      if (paths.includes('shorts')) {
        return paths[paths.indexOf('shorts') + 1];
      }
      // /embed/ID
      if (paths.includes('embed')) {
        return paths[paths.indexOf('embed') + 1];
      }
    }
    if (u.hostname === 'youtu.be') {
      const paths = u.pathname.split('/').filter(Boolean);
      return paths[0];
    }
  } catch (e) {
    // maybe raw id included with extra params
    const m = input.match(/[a-zA-Z0-9_-]{11}/);
    return m ? m[0] : null;
  }
  // fallback: find id pattern
  const m = input.match(/[a-zA-Z0-9_-]{11}/);
  return m ? m[0] : null;
}

// list of standard thumbnail names
const THUMBS = ['default.jpg','mqdefault.jpg','hqdefault.jpg','sddefault.jpg','maxresdefault.jpg'];

function setStatus(msg) {
  statusP.textContent = msg;
}

// check image existence using Image() load/error
function checkImage(url, timeout = 7000) {
  return new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const timer = setTimeout(()=> {
      if (!done) { done = true; resolve(false); }
    }, timeout);
    img.onload = ()=>{ if(!done){ done=true; clearTimeout(timer); resolve(true);} };
    img.onerror = ()=>{ if(!done){ done=true; clearTimeout(timer); resolve(false);} };
    // Prevent caching issues by appending timestamp? Not necessary normally.
    img.src = url + '?_=' + Date.now();
  });
}

// attempt to download via fetch->blob. If CORS blocks, fallback to open in new tab.
async function downloadImage(url, filename) {
  try {
    const res = await fetch(url, {mode: 'cors'});
    if (!res.ok) throw new Error('Network response not ok');
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(blobUrl), 30000);
  } catch (err) {
    // fallback: open in new tab; user can right-click Save As
    window.open(url, '_blank');
  }
}

// render the thumbnails grid given videoID
async function renderThumbnails(videoID) {
  thumbGrid.innerHTML = '';
  if (!videoID) {
    setStatus(I18N[currentLang].ui.invalid);
    return;
  }

  setStatus(I18N[currentLang].ui.checking);
  const base = `https://img.youtube.com/vi/${videoID}/`;
  const found = [];

  // check each
  for (const name of THUMBS) {
    const url = base + name;
    // check existence
    // We await sequentially to reduce simultaneous image loads; for faster UX consider parallel.
    const exists = await checkImage(url);
    if (exists) found.push({name, url});
  }

  if (found.length === 0) {
    setStatus(I18N[currentLang].ui.noResult);
    return;
  }

  setStatus('');
  // render cards
  found.forEach(item=>{
    const card = document.createElement('div');
    card.className = 'thumb-card';

    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.name;

    const meta = document.createElement('div');
    meta.className = 'thumb-meta';

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = item.name;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const previewBtn = document.createElement('button');
    previewBtn.className = 'small-btn secondary';
    previewBtn.textContent = I18N[currentLang].ui.preview;
    previewBtn.onclick = ()=> window.open(item.url, '_blank');

    const dlBtn = document.createElement('button');
    dlBtn.className = 'small-btn';
    dlBtn.textContent = I18N[currentLang].ui.download;
    dlBtn.onclick = ()=> downloadImage(item.url, `${videoID}-${item.name}`);

    actions.appendChild(previewBtn);
    actions.appendChild(dlBtn);

    meta.appendChild(label);
    meta.appendChild(actions);

    card.appendChild(img);
    card.appendChild(meta);

    thumbGrid.appendChild(card);
  });
}

// button click handler
fetchBtn.addEventListener('click', async ()=>{
  const raw = videoInput.value || '';
  const id = extractVideoID(raw);
  if (!id) {
    setStatus(I18N[currentLang].ui.invalid);
    return;
  }
  await renderThumbnails(id);
});

// support pressing Enter while in input
videoInput.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter') fetchBtn.click();
});

// On load: if input has something (maybe from ?v=) attempt auto fetch
(function autoFromUrl(){
  const params = new URLSearchParams(location.search);
  const v = params.get('v') || params.get('video') || params.get('id');
  if (v) {
    videoInput.value = v;
    fetchBtn.click();
  }
})();
