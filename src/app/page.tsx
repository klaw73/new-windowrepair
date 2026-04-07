import Link from "next/link";

const highlights = [
  "Broken glass replacement",
  "Foggy double-pane repair",
  "Frame and seal restoration",
  "Track and lock adjustments"
];

const stats = [
  { value: "11,203", label: "Happy clients" },
  { value: "4.8", label: "Average rating" },
  { value: "14,420", label: "Jobs complete" },
  { value: "28", label: "Qualified staff" }
];

export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero hero-grid">
        <div>
          <p className="kicker">#1 Window Repair Service</p>
          <h1>Professional Window Glass Replacement and Repair in NYC</h1>
          <p>
            Experience fast turnaround, transparent pricing, and certified
            technicians for residential and commercial window repairs.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
          <ul className="hero-points">
            <li>Same-day emergency support</li>
            <li>Free in-home estimates</li>
            <li>Licensed and insured team</li>
          </ul>
        </div>

        <aside className="quote-panel">
          <h2>Get a Glazier Now</h2>
          <form className="form" action="#" method="post">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(555) 000-0000" required />
            </label>
            <label>
              Number of Windows
              <input type="number" name="windowsCount" min={1} placeholder="e.g. 4" required />
            </label>
            <button type="submit" className="btn btn-primary full">
              Request Call Back
            </button>
          </form>
        </aside>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section>
        <p className="kicker">What Window Services Do We Have?</p>
        <h2>Popular Services</h2>
        <div className="card-grid">
          {highlights.map((item) => (
            <article key={item} className="card">
              <h3>{item}</h3>
              <p>
                Skilled repairs that extend the life of your windows and improve
                comfort throughout the year.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Quick Repair Estimate</h2>
        <p>
          Share your contact information and the number of windows that need
          repair. We will reach out with a quote.
        </p>
        <form className="form" action="#" method="post">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your full name" required />
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
            <input type="tel" name="phone" placeholder="(555) 000-0000" required />
          </label>
          <label>
            Number of Windows
            <input
              type="number"
              name="windowsCount"
              min={1}
              placeholder="e.g. 4"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Get My Estimate
          </button>
        </form>
      </section>
    </div>
  );
}
