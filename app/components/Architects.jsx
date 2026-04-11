export default function Architects() {
  return (
    <section className="architects" id="architects">
      <div className="container">
        <div className="architects__header reveal">
          <h2 className="architects__heading">Systems Architects</h2>
          <div className="architects__bar neon-bar" />
        </div>

        <div className="architects__grid">
          <div className="architect-card glass-panel reveal">
            <div className="architect-card__photo grayscale-lift">
              <img
                src="/assets/danish_rashid.png"
                alt="Danish Rashid — Founder"
                loading="lazy"
              />
            </div>
            <div className="architect-card__info">
              <div className="architect-card__id architect-card__id--primary">ID: FOUNDER-DR-01</div>
              <h4 className="architect-card__name">Danish Rashid</h4>
              <div className="architect-card__role architect-card__role--primary">Founder</div>
              <p className="architect-card__spec">
                Specialization: Neural Topology Optimization. Lead architect of the core Brogence intelligence ecosystem.
              </p>
            </div>
          </div>

          <div className="architect-card architect-card--accent glass-panel reveal">
            <div className="architect-card__photo grayscale-lift">
              <img
                src="/assets/danish_bajwa.png"
                alt="Danish Bajwa — Co-founder"
                loading="lazy"
              />
            </div>
            <div className="architect-card__info">
              <div className="architect-card__id architect-card__id--secondary">ID: COFOUNDER-DB-02</div>
              <h4 className="architect-card__name">Danish Bajwa</h4>
              <div className="architect-card__role architect-card__role--secondary">Co-founder</div>
              <p className="architect-card__spec">
                Specialization: Structural Integrity & Scalability. Engineering resilient frameworks for high-velocity global expansion.
              </p>
            </div>
          </div>

          <div className="architect-card glass-panel reveal">
            <div className="architect-card__photo grayscale-lift">
              <img
                src="/assets/shahid_ali.png"
                alt="Shahid Ali — Chief Marketing Officer"
                loading="lazy"
              />
            </div>
            <div className="architect-card__info">
              <div className="architect-card__id architect-card__id--primary">ID: CMO-SA-03</div>
              <h4 className="architect-card__name">Shahid Ali</h4>
              <div className="architect-card__role architect-card__role--primary">Chief Marketing Officer</div>
              <p className="architect-card__spec">
                Specialization: Strategic Growth & Psycho-Mapping. Crafting narrative structures that redefine market dynamics.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
