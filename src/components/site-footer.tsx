export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p>© {new Date().getFullYear()} ClearView Window Repair</p>
          <p>Licensed & Insured | Bonded Professionals</p>
        </div>
        <div>
          <p>244 5th Avenue, New York, NY</p>
          <p>service@clearviewrepair.com | (555) 123-9876</p>
        </div>
      </div>
    </footer>
  );
}
