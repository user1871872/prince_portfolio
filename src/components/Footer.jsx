import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <SocialIcons />
        {/* Add your name or company here. */}
        <p>© {new Date().getFullYear()} PJR Engineering Services.</p>
      </div>
    </footer>
  );
}
