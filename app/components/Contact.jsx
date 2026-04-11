"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted locally.");
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__panel glass-panel reveal">

          <div className="contact__corner contact__corner--tl" aria-hidden="true" />
          <div className="contact__corner contact__corner--tr" aria-hidden="true" />
          <div className="contact__corner contact__corner--bl" aria-hidden="true" />
          <div className="contact__corner contact__corner--br" aria-hidden="true" />

          <h2 className="contact__heading">AI Audit Intake Interface</h2>
          <p className="contact__subtext cursor-blink">_Awaiting.input_</p>

          <form id="audit-form" className="contact__form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="field-name" className="contact__label">_Initiate.your.name</label>
                <input
                  id="field-name"
                  type="text"
                  className="contact__input"
                  placeholder="NAME_ENTRY..."
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="contact__field">
                <label htmlFor="field-email" className="contact__label">_Establish.comms_link</label>
                <input
                  id="field-email"
                  type="email"
                  className="contact__input"
                  placeholder="EMAIL_ENCRYPTED..."
                  required
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="field-goals" className="contact__label">_Objective.description</label>
              <textarea
                id="field-goals"
                className="contact__textarea"
                placeholder="DESCRIBE_GOALS..."
                rows="4"
              />
            </div>

            <div className="contact__footer">
              <div className="contact__encrypt-badge">
                SECURE CHANNEL 256-BIT ENCRYPTION ACTIVE<br />
                HANDSHAKE_ESTABLISHED.V4
              </div>
              <button type="submit" className="contact__submit" suppressHydrationWarning>
                <span className="contact__submit-text">Request a Call</span>
                <div className="contact__submit-fill" aria-hidden="true" />
                <div className="contact__submit-glow" aria-hidden="true" />
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}
