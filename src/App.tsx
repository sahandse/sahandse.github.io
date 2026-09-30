const apps = [
  {
    name: 'نتیجه',
    subtitle: 'فوتبال، لحظه‌به‌لحظه',
    description: 'نتایج زنده، جزئیات مسابقه، جدول لیگ، تیم‌ها و بازیکنان محبوب در یک تجربه سریع و مینیمال.',
    url: 'https://sahandse.github.io/natijeh/',
    accent: '#5cf2a5',
    accent2: '#b7ffd9',
    tags: ['Football', 'Live Score', 'Android'],
    logo: 'https://raw.githubusercontent.com/sahandse/natijeh-app/master/branding/natijeh-app-icon.svg',
    preview: null,
    mark: null,
    code: 'NATIJEH',
  },
  {
    name: 'قیمت بازار',
    subtitle: 'طلا، سکه، ارز و رمزارز',
    description: 'نمایش سریع قیمت‌های مهم بازار، تغییرات و جزئیات در یک رابط فارسی، خلوت و مدرن.',
    url: 'https://sahandse.github.io/Gheymat/',
    accent: '#f6c85f',
    accent2: '#ffe8a3',
    tags: ['Market', 'Gold', 'Crypto'],
    logo: null,
    preview: 'https://raw.githubusercontent.com/sahandse/Gheymat/main/assets/app-home.webp',
    mark: '🪙',
    code: 'GHEYMAT',
  },
  {
    name: 'داریک',
    subtitle: 'مدیریت مالی آفلاین و شخصی',
    description: 'مدیریت حساب‌ها، درآمد و هزینه، اقساط، وام‌ها و گزارش‌های مالی با رابط فارسی و استفاده آفلاین.',
    url: 'https://sahandse.github.io/Daricapp/',
    accent: '#13ba82',
    accent2: '#7ef0c7',
    tags: ['Finance', 'Offline', 'Android'],
    logo: null,
    preview: 'https://raw.githubusercontent.com/sahandse/Daricapp/main/assets/screen-home-dark.webp',
    mark: 'د',
    code: 'DARIC',
  },
]

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-box">S</span>
          <div><b>Sahand</b><small>Apps & Projects</small></div>
        </div>
        <div className="hint"><span className="hint-dot" /> SCROLL TO EXPLORE</div>
      </header>

      <div className="snap-wrap">
        {apps.map((app, index) => (
          <section
            className="app-slide"
            key={app.name}
            style={{'--accent': app.accent, '--accent2': app.accent2} as React.CSSProperties}
          >
            <div className="grid-bg" />
            <div className="noise" />
            <div className="glow glow-main" />
            <div className="glow glow-small" />

            <div className="slide-inner">
              <div className="visual">
                <div className="orbit orbit-a" />
                <div className="orbit orbit-b" />
                <div className="orbit orbit-c" />

                {app.preview ? (
                  <div className="device-stack">
                    <div className="phone-frame">
                      <img src={app.preview} alt={`نمایی از ${app.name}`} />
                    </div>
                    <div className="floating-logo brand-mark">
                      <span>{app.mark}</span>
                    </div>
                    <div className="floating-chip">{app.code}</div>
                  </div>
                ) : (
                  <div className="hero-logo-wrap">
                    <div className="hero-logo-card">
                      {app.logo ? <img src={app.logo} alt={`لوگوی ${app.name}`} /> : <span>{app.mark}</span>}
                    </div>
                    <div className="floating-chip">{app.code}</div>
                  </div>
                )}
              </div>

              <article className="copy">
                <div className="eyebrow"><i /> APP {String(index + 1).padStart(2, '0')}</div>
                <h1>{app.name}</h1>
                <h2>{app.subtitle}</h2>
                <p>{app.description}</p>
                <div className="tags">{app.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="actions">
                  <a className="cta" href={app.url}>
                    <span>ورود به سایت</span>
                    <b>↗</b>
                  </a>
                  <span className="live-pill"><i /> LIVE PROJECT</span>
                </div>
              </article>
            </div>

            <div className="scroll-index">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>/ {String(apps.length).padStart(2, '0')}</span>
            </div>
            <div className="ghost">{String(index + 1).padStart(2, '0')}</div>
          </section>
        ))}
      </div>
    </main>
  )
}
