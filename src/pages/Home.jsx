import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import styles from './Home.module.css'

const STATS = [
  { icon: '🌱', value: '2022', label: 'Established' },
  { icon: '🤝', value: '200+', label: 'Active Members' },
  { icon: '📍', value: '8+', label: 'Districts Served' },
]

const NEWS_ITEMS = [
  { img: '/images/index-img/01.jpeg', title: 'First Meeting', tag: 'Milestone' },
  { img: '/images/index-img/03.jpeg', title: 'Second Meeting', tag: 'Milestone' },
  { img: '/images/index-img/02.jpeg', title: 'Co-Operative Week Celebration', tag: 'Community' },
]

export default function Home() {
  return (
    <>
      <section className={styles.heroV2}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              Welcome To <br />
              <span className={styles.highlight}>Basundhara Multipurpose Cooperative Society</span>
            </h1>
            <p>
              Empowering the citizens of Assam through cooperative excellence, financial inclusion, and sustainable
              community development.
            </p>
            <div className={styles.ctaGroup}>
              <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Become a Member
              </Link>
              <Link to="/about" className={`${styles.btn} ${styles.btnOutline}`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className={styles.statsBar}>
        {STATS.map((stat) => (
          <div className={styles.statItem} key={stat.label}>
            <span className={styles.statIcon}>{stat.icon}</span>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </Reveal>

      <section className={styles.aboutModern}>
        <Reveal className={styles.aboutImgStack}>
          <img src="/images/index-img/Mainimg.jpeg" alt="Our Community" className={styles.aboutImgMain} />
          <div className={styles.aboutBadge}>
            <strong>200+</strong>
            <span>Members Strong</span>
          </div>
        </Reveal>
        <Reveal delay={120} className={styles.aboutText}>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2>About Us</h2>
          <p>
            Basundhara Multi-Purpose Co-Operative Society Limited, established in 2022 and based in Guwahati,
            operates across multiple districts of Assam with a vision to serve as a nodal Primary Co-Operative
            Society, providing savings, credit, business, and agri-based services to promote the socio-economic
            growth of its members through collective strength.
          </p>
          <div className={styles.readMoreLink}>
            <Link to="/about">Read Our Story &rarr;</Link>
          </div>
        </Reveal>
      </section>

      <section className={styles.initiativesModern}>
        <Reveal className={styles.sectionHeader}>
          <span className={styles.eyebrow}>What's Happening</span>
          <h2>News & Events</h2>
        </Reveal>
        <div className={styles.iGrid}>
          {NEWS_ITEMS.map((item, index) => (
            <Reveal delay={index * 100} className={styles.iCard} key={item.title}>
              <div className={styles.iImgWrapper}>
                <img src={item.img} alt="Meeting" />
              </div>
              <div className={styles.iContent}>
                <span className={styles.iTag}>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
