export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__grid">

          <div className="services__main glass-panel glow-top reveal">
            <div>
              <div className="services__protocol">Protocol 01</div>
              <h2 className="services__title">Your 24/7<br />Digital Staff</h2>
              <p className="services__body">
                Replace manual operations with autonomous neural networks. Our agents handle leads, support, and scheduling without human intervention.
              </p>
            </div>
            <div className="services__schematic">
              <img
                src="/assets/neural-schematic.png"
                alt="Neural network schematic"
                loading="lazy"
              />
              <span className="services__schematic-label">DEEP_LEARNING_MATRIX.EXE</span>
            </div>
          </div>

          <div className="services__side">
            <div className="services__side-panel glass-panel glow-top reveal">
              <div>
                <div className="services__protocol">Protocol 02</div>
                <h3 className="services__title">Conversational Intelligence</h3>
                <p className="services__body">
                  NLP-driven interaction nodes that replicate elite sales psychology in real-time chats.
                </p>
              </div>
              <div className="services__icon services__icon--primary">
                <span className="material-symbols-outlined">hub</span>
              </div>
            </div>

            <div className="services__side-panel glass-panel glow-top reveal">
              <div>
                <div className="services__protocol">Protocol 03</div>
                <h3 className="services__title">High-Converting Storefronts</h3>
                <p className="services__body">
                  Hyper-optimized landing structures engineered for maximum psychographic resonance.
                </p>
              </div>
              <div className="services__icon services__icon--secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
