import SocialIcons from './SocialIcons';
import { contactInfo } from '../data/contactInfo';

export default function Footer() {
  const { phone, email } = contactInfo;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <SocialIcons />
        <div className="footer-contact">
          {phone && <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>}
          {phone && email && <span className="footer-sep"> · </span>}
          {email && <a href={`mailto:${email}`}>{email}</a>}
        </div>
        <p>© {new Date().getFullYear()} PJR Engineering Services.</p>
      </div>
    </footer>
  );
}
