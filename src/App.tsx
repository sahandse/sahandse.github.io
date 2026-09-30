const apps = [
  {
    name: 'نتیجه',
    subtitle: 'فوتبال، لحظه‌به‌لحظه',
    description: 'نتایج زنده، جزئیات مسابقه، جدول لیگ، تیم‌ها و بازیکنان محبوب در یک تجربه سریع و مینیمال.',
    url: 'https://sahandse.github.io/natijeh/',
    accent: '#5cf2a5',
    tags: ['Football', 'Live Score', 'Android'],
  },
  {
    name: 'قیمت بازار',
    subtitle: 'طلا، سکه، ارز و رمزارز',
    description: 'نمایش سریع قیمت‌های مهم بازار، تغییرات و جزئیات در یک رابط فارسی، خلوت و مدرن.',
    url: 'https://sahandse.github.io/Gheymat',
    accent: '#f6c85f',
    tags: ['Market', 'Gold', 'Crypto'],
  },
  {
    name: 'داریک',
    subtitle: 'مدیریت مالی آفلاین و شخصی',
    description: 'مدیریت حساب‌ها، درآمد و هزینه، اقساط، وام‌ها و گزارش‌های مالی با رابط فارسی و استفاده آفلاین.',
    url: 'https://sahandse.github.io/Daricapp',
    accent: '#7aa8ff',
    tags: ['Finance', 'Offline', 'Android'],
  },
]

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand"><span>S</span><div><b>Sahand</b><small>Apps & Projects</small></div></div>
        <div className="hint">Scroll to explore</div>
      </header>

      <div className="snap-wrap">
        {apps.map((app, index) => (
          <section className="app-slide" key={app.name} style={{'--accent': app.accent} as React.CSSProperties}>
            <div className="grid-bg" />
            <div className="glow" />
            <div className="slide-inner">
              <div className="visual">
                <div className="orbit orbit-a" />
                <div className="orbit orbit-b" />
                <div className="logo-card"><span>{app.name.charAt(0)}</span></div>
              </div>

              <article className="copy">
                <div className="eyebrow"><i /> APP {String(index + 1).padStart(2, '0')}</div>
                <h1>{app.name}</h1>
                <h2>{app.subtitle}</h2>
                <p>{app.description}</p>
                <div className="tags">{app.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="cta" href={app.url}>ورود به سایت <b>↗</b></a>
              </article>
            </div>
            <div className="ghost">{String(index + 1).padStart(2, '0')}</div>
          </section>
        ))}
      </div>
    </main>
  )
}
