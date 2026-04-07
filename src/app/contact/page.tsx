export default function ContactPage() {
  return (
    <div className="stack">
      <section>
        <p className="kicker">Get Started</p>
        <h1>Contact Us</h1>
        <p>
          Call us or send a request below and our team will follow up with a
          free estimate.
        </p>
      </section>

      <section className="card">
        <div className="contact-grid">
          <div>
            <h2>Contact Details</h2>
            <p>
              <strong>Phone:</strong> (555) 123-9876
            </p>
            <p>
              <strong>Email:</strong> service@clearviewrepair.com
            </p>
            <p>
              <strong>Hours:</strong> Mon-Sat, 8:00 AM to 7:00 PM
            </p>
          </div>
          <form className="form" action="#" method="post">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(555) 000-0000" />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what needs repair"
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Request Estimate
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
