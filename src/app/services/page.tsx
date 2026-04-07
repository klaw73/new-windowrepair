const serviceList = [
  {
    title: "Glass Replacement",
    description:
      "Cracked or shattered panes replaced with high-quality safety or insulated glass."
  },
  {
    title: "Seal Failure Repair",
    description:
      "Fix condensation and fogging issues in double-pane windows by restoring proper seals."
  },
  {
    title: "Window Hardware Repair",
    description:
      "Repair or replace locks, handles, hinges, and balances for smooth operation."
  },
  {
    title: "Draft and Leak Fixes",
    description:
      "Stop air and water leaks with frame adjustments, caulking, and weather stripping."
  }
];

export default function ServicesPage() {
  return (
    <div className="stack">
      <section>
        <p className="kicker">What We Do</p>
        <h1>Window Repair Services</h1>
        <p>
          Our team handles everything from simple residential fixes to complex
          commercial window restoration.
        </p>
      </section>

      <section className="card-grid">
        {serviceList.map((service) => (
          <article key={service.title} className="card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
