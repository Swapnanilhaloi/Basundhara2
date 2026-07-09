import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.contactCol}`}>
          <h4>Contact Us</h4>
          <p>Email: basundharacooperative@gmail.com</p>
          <p>Phone: +91 86385-93984</p>
          <p>Address: House No.74, Kushal Nagar, Bamunimaidan, Guwahati 781021</p>
        </div>
        <div className={`${styles.footerSection} ${styles.linksCol}`}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.followCol}`}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Basundhara Multi-Purpose Co-Operative Society Limited. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
