import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <p>Emergency Service Available</p>
          <p>
            Call Now: <a href="tel:+15551239876">(555) 123-9876</a>
          </p>
          <p>Mon-Sat: 8:00 AM to 8:00 PM</p>
        </div>
      </div>

      <div className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            ClearView Window Repair
          </Link>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
