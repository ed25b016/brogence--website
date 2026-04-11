export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bloom--right bloom bloom-animated" aria-hidden="true" />
      <div className="hero__bloom--left bloom bloom-animated" aria-hidden="true" />

      {/* Hero Content */}
      <div className="container">
        <div className="hero__content stagger">
          <div className="hero__status">
            <div className="status-pulse" aria-hidden="true" />
            <span className="hero__status-text">System.Status: Active</span>
          </div>

          <h1 className="hero__headline">
            WE BUILD SYSTEMS
            THAT TURN <em>DEAD TRAFFIC</em> INTO
            REVENUE.
          </h1>

          <div className="hero__cta-row">
            <a href="#contact" className="hero__cta">Book Your Free AI Audit</a>
            <div className="hero__meta">
              <span>CORE PROTOCOL V.4.0.1</span>
              <span>LATENCY: 12MS</span>
              <span>AUTHORITY: HIGH-LEVEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
