// i18n.js
// 语言包：包含 UI 文本与 SEO 内容（8 种语言）
// 语言 keys: en, zh, es, ar, hi, pt, ru, ja
const I18N = {
  "en": {
    "langName": "English",
    "dir": "ltr",
    "ui": {
      "title": "YouTube Thumbnail Downloader",
      "inputPlaceholder": "Paste YouTube video URL or ID",
      "btnFetch": "Get Thumbnails",
      "btnClear": "Clear",
      "preview": "Preview",
      "download": "Download",
      "noResult": "No thumbnails found for this video.",
      "invalid": "Please enter a valid YouTube URL or video ID.",
      "checking": "Checking thumbnails..."
    },
    "seoHtml": `
      <h1>YouTube Thumbnail Downloader — How to download a thumbnail</h1>
      <p><strong>What is a YouTube thumbnail?</strong> A thumbnail is the static image that represents a video on YouTube. Creators use thumbnails to attract viewers. Thumbnails are publicly accessible images hosted by YouTube.</p>
      <h2>How to download a YouTube thumbnail</h2>
      <ol>
        <li>Copy the YouTube video link (or the video ID).</li>
        <li>Paste it into the input box above and click "<em>Get Thumbnails</em>".</li>
        <li>Choose the available size (default, hqdefault, maxresdefault) and click "<em>Download</em>" to save the image.</li>
      </ol>
      <h2>Why use thumbnails?</h2>
      <p>Thumbnails help design cover images, analyze competitors, create video previews, and prepare marketing materials. They are useful for creators and designers.</p>
      <h2>FAQ</h2>
      <h3>Is downloading thumbnails legal?</h3>
      <p>Generally thumbnails are publicly available; downloading them for personal use is typically allowed. For commercial use or redistribution, obtain permission from the copyright owner.</p>
      <h3>Can I use the image commercially?</h3>
      <p>Check the copyright status; seek permission for commercial usage.</p>
      <h2>Disclaimer</h2>
      <p>This tool only retrieves public YouTube thumbnails. It does not bypass any access controls or download video content. Users must comply with YouTube's Terms of Service and respect copyright. This site is not affiliated with YouTube or Google.</p>
    `
  },
  "zh": {
    "langName": "简体中文",
    "dir": "ltr",
    "ui": {
      "title": "YouTube 封面下载器",
      "inputPlaceholder": "粘贴 YouTube 视频链接或视频 ID",
      "btnFetch": "获取封面",
      "btnClear": "清空",
      "preview": "预览",
      "download": "下载",
      "noResult": "未找到该视频的封面。",
      "invalid": "请输入有效的 YouTube 链接或视频 ID。",
      "checking": "正在检测封面..."
    },
    "seoHtml": `
      <h1>YouTube 封面下载器 — 如何下载 YouTube 封面</h1>
      <p><strong>什么是 YouTube 封面？</strong> 封面是用来代表视频的静态图片，通常由创作者设置以吸引点击。YouTube 将封面以公开图片的方式托管。</p>
      <h2>如何下载 YouTube 封面</h2>
      <ol>
        <li>复制 YouTube 视频链接或视频 ID。</li>
        <li>将链接粘贴到上方输入框并点击“获取封面”。</li>
        <li>选择可用尺寸（default、hqdefault、maxresdefault 等），点击“下载”保存图片。</li>
      </ol>
      <h2>为什么需要封面？</h2>
      <p>封面用于设计缩略图、分析竞品、制作宣传图或课程素材，对自媒体创作者和设计师非常有用。</p>
      <h2>常见问题</h2>
      <h3>下载封面合法吗？</h3>
      <p>封面通常为公开资源，个人使用通常允许。若作商业用途或再分发，请获取版权方授权。</p>
      <h3>可以商用吗？</h3>
      <p>商用前请核实版权并取得许可。</p>
      <h2>免责声明</h2>
      <p>本工具仅获取公开的 YouTube 封面图片，不绕过任何访问控制，不下载视频内容。用户须遵守 YouTube 服务条款并尊重版权。本站与 YouTube/Google 无关联。</p>
    `
  },
  "es": {
    "langName": "Español",
    "dir": "ltr",
    "ui": {
      "title": "Descargador de miniaturas de YouTube",
      "inputPlaceholder": "Pega la URL del video de YouTube o la ID",
      "btnFetch": "Obtener miniaturas",
      "btnClear": "Limpiar",
      "preview": "Vista previa",
      "download": "Descargar",
      "noResult": "No se encontraron miniaturas para este video.",
      "invalid": "Por favor introduce una URL de YouTube o ID válida.",
      "checking": "Comprobando miniaturas..."
    },
    "seoHtml": `
      <h1>Descargador de miniaturas de YouTube — Cómo descargar miniaturas</h1>
      <p><strong>¿Qué es una miniatura de YouTube?</strong> La miniatura es la imagen estática que representa un video. Es pública y alojada por YouTube.</p>
      <h2>Cómo descargar una miniatura</h2>
      <ol>
        <li>Copia el enlace del video o su ID.</li>
        <li>Pégalo en el cuadro de arriba y haz clic en "Obtener miniaturas".</li>
        <li>Selecciona la resolución disponible y presiona "Descargar".</li>
      </ol>
      <h2>¿Por qué usar miniaturas?</h2>
      <p>Sirven para diseñar portadas, analizar competidores y crear material promocional.</p>
      <h2>Preguntas frecuentes</h2>
      <h3>¿Es legal descargar miniaturas?</h3>
      <p>En general son recursos públicos; para uso comercial, obtén permiso del autor.</p>
      <h2>Aviso legal</h2>
      <p>Esta herramienta solo accede a miniaturas públicas de YouTube. No elude controles de acceso ni descarga contenido de video. Cumple con los términos de YouTube y respeta los derechos de autor.</p>
    `
  },
  "ar": {
    "langName": "العربية",
    "dir": "rtl",
    "ui": {
      "title": "محمل صور مصغرة يوتيوب",
      "inputPlaceholder": "ألصق رابط فيديو يوتيوب أو معرف الفيديو",
      "btnFetch": "جلب الصور المصغرة",
      "btnClear": "مسح",
      "preview": "معاينة",
      "download": "تحميل",
      "noResult": "لم يتم العثور على صور مصغرة لهذا الفيديو.",
      "invalid": "الرجاء إدخال رابط يوتيوب صالح أو معرف الفيديو.",
      "checking": "جارٍ التحقق من الصور المصغرة..."
    },
    "seoHtml": `
      <h1>محمل صور مصغرة YouTube — كيفية تنزيل الصورة المصغرة</h1>
      <p><strong>ما هي الصورة المصغرة على YouTube؟</strong> هي صورة ثابتة تمثل الفيديو وتعتمد عليها لزيادة جاذبية النقرات. تُستضاف الصور المصغرة علناً على خوادم YouTube.</p>
      <h2>كيفية تنزيل الصورة المصغرة</h2>
      <ol>
        <li>انسخ رابط الفيديو أو معرف الفيديو.</li>
        <li>الصقه في حقل الإدخال أعلاه ثم اضغط "جلب الصور المصغرة".</li>
        <li>اختر الحجم المتاح ثم اضغط "تحميل" لحفظ الصورة.</li>
      </ol>
      <h2>لماذا نحتاج الصور المصغرة؟</h2>
      <p>تستخدم لتصميم أغلفة، تحليل المنافسين، وإنشاء مواد تسويقية.</p>
      <h2>الأسئلة الشائعة</h2>
      <h3>هل تنزيل الصور المصغرة قانوني؟</h3>
      <p>عادةً ما تكون الصور متاحة للعامة؛ للاستخدام التجاري، احصل على إذن المالك.</p>
      <h2>إخلاء المسؤولية</h2>
      <p>الأداة تقوم فقط بجلب الصور المصغرة العامة من YouTube، ولا تتجاوز أي ضوابط وصول. يجب على المستخدمين الالتزام بشروط خدمة YouTube واحترام حقوق الطبع والنشر.</p>
    `
  },
  "hi": {
    "langName": "हिन्दी",
    "dir": "ltr",
    "ui": {
      "title": "YouTube थम्बनेल डाउनलोडर",
      "inputPlaceholder": "YouTube वीडियो URL या ID पेस्ट करें",
      "btnFetch": "थम्बनेल प्राप्त करें",
      "btnClear": "साफ़ करें",
      "preview": "पूर्वावलोकन",
      "download": "डाउनलोड",
      "noResult": "इस वीडियो के लिए कोई थम्बनेल नहीं मिला।",
      "invalid": "कृपया वैध YouTube URL या वीडियो ID दर्ज करें।",
      "checking": "थम्बनेल जाँचे जा रहे हैं..."
    },
    "seoHtml": `
      <h1>YouTube थम्बनेल डाउनलोडर — थम्बनेल कैसे डाउनलोड करें</h1>
      <p><strong>YouTube थम्बनेल क्या है?</strong> थम्बनेल वह स्थिर छवि है जो वीडियो का प्रतिनिधित्व करती है। यह YouTube द्वारा सार्वजनिक रूप से होस्ट की जाती है।</p>
      <h2>थम्बनेल कैसे डाउनलोड करें</h2>
      <ol>
        <li>वीडियो लिंक या ID कॉपी करें।</li>
        <li>ऊपर के इनपुट में पेस्ट करें और "थम्बनेल प्राप्त करें" क्लिक करें।</li>
        <li>उपलब्ध साइज चुनें और "डाउनलोड" पर क्लिक करके सेव करें।</li>
      </ol>
      <h2>क्यों थम्बनेल उपयोगी हैं?</h2>
      <p>थम्बनेल सामग्री निर्माता और डिजाइनरों के लिए उपयोगी होते हैं—वे प्रचार, एनालिसिस और प्रिव्यू के लिए काम आते हैं।</p>
      <h2>डिसक्लेमर</h2>
      <p>यह टूल केवल सार्वजनिक रूप से उपलब्ध थम्बनेल लाता है। किसी भी कॉपीराइट सामग्री के वाणिज्यिक उपयोग से पहले अनुमति लें।</p>
    `
  },
  "pt": {
    "langName": "Português",
    "dir": "ltr",
    "ui": {
      "title": "Downloader de miniaturas do YouTube",
      "inputPlaceholder": "Cole a URL do vídeo do YouTube ou o ID",
      "btnFetch": "Obter miniaturas",
      "btnClear": "Limpar",
      "preview": "Visualizar",
      "download": "Baixar",
      "noResult": "Nenhuma miniatura encontrada para este vídeo.",
      "invalid": "Por favor insira uma URL do YouTube ou ID válido.",
      "checking": "Verificando miniaturas..."
    },
    "seoHtml": `
      <h1>Downloader de miniaturas do YouTube — Como baixar miniaturas</h1>
      <p><strong>O que é uma miniatura do YouTube?</strong> É a imagem estática que representa um vídeo. As miniaturas são hospedadas publicamente pelo YouTube.</p>
      <h2>Como baixar</h2>
      <ol>
        <li>Copie o link do vídeo ou o ID.</li>
        <li>Cole na caixa acima e clique em "Obter miniaturas".</li>
        <li>Selecione a resolução disponível e clique em "Baixar".</li>
      </ol>
      <h2>Aviso legal</h2>
      <p>Ferramenta para acesso a miniaturas públicas. Para uso comercial, obter autorização do detentor dos direitos.</p>
    `
  },
  "ru": {
    "langName": "Русский",
    "dir": "ltr",
    "ui": {
      "title": "Загрузчик обложек YouTube",
      "inputPlaceholder": "Вставьте ссылку на видео YouTube или ID",
      "btnFetch": "Получить обложки",
      "btnClear": "Очистить",
      "preview": "Предпросмотр",
      "download": "Скачать",
      "noResult": "Для этого видео обложек не найдено.",
      "invalid": "Пожалуйста, введите действительную ссылку YouTube или ID видео.",
      "checking": "Проверяем обложки..."
    },
    "seoHtml": `
      <h1>Загрузчик обложек YouTube — как скачать обложку</h1>
      <p><strong>Что такое обложка YouTube?</strong> Это статичное изображение, представляющее видео. Обложки хранятся публично на серверах YouTube.</p>
      <h2>Как скачать</h2>
      <ol>
        <li>Скопируйте ссылку на видео или его ID.</li>
        <li>Вставьте в поле выше и нажмите "Получить обложки".</li>
        <li>Выберите доступный размер и нажмите "Скачать".</li>
      </ol>
      <h2>Отказ от ответственности</h2>
      <p>Инструмент получает только общедоступные обложки YouTube. Для коммерческого использования получите разрешение от правообладателя.</p>
    `
  },
  "ja": {
    "langName": "日本語",
    "dir": "ltr",
    "ui": {
      "title": "YouTube サムネイル ダウンローダー",
      "inputPlaceholder": "YouTube の動画 URL または ID を貼り付けてください",
      "btnFetch": "サムネイル取得",
      "btnClear": "クリア",
      "preview": "プレビュー",
      "download": "ダウンロード",
      "noResult": "この動画のサムネイルは見つかりませんでした。",
      "invalid": "有効な YouTube URL または動画 ID を入力してください。",
      "checking": "サムネイルを確認しています..."
    },
    "seoHtml": `
      <h1>YouTube サムネイル ダウンローダー — サムネイルのダウンロード方法</h1>
      <p><strong>YouTube のサムネイルとは？</strong> 動画を代表する静止画像です。通常、YouTube に公開されています。</p>
      <h2>サムネイルのダウンロード方法</h2>
      <ol>
        <li>動画の URL または ID をコピーします。</li>
        <li>上の入力欄に貼り付け、「サムネイル取得」をクリックします。</li>
        <li>表示された解像度から選んで「ダウンロード」をクリックします。</li>
      </ol>
      <h2>免責事項</h2>
      <p>本ツールは公開されているサムネイルのみを取得します。商用利用の際は権利者の許可を確認してください。</p>
    `
  }
};
