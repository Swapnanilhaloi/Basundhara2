import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import styles from './About.module.css'

const FOCUS_AREAS = [
  { icon: '💰', title: 'Savings', desc: 'Secure deposit and savings schemes that help members build financial security over time.' },
  { icon: '🤝', title: 'Credit', desc: 'Accessible loans for members after six months of membership, with flexibility in genuine need.' },
  { icon: '🏢', title: 'Business', desc: 'Support for member-led enterprises and consumer durables through collective purchasing power.' },
  { icon: '🌾', title: 'Agri-Based Services', desc: 'Investing corpus funds into agriculture to uplift the rural economy of Assam.' },
]

const WHY_COOPERATIVE = [
  'Open Membership',
  'Each for all and all for each',
  'Concern for society',
  'Economic participation by the members',
  'Common Economic Goal',
  'Elimination of middlemen',
  'Element of Self Help',
  'Democratic Member Control',
]

const COOP_AS_BUSINESS = [
  'Collective Capital',
  'Collective Ownership',
  'Adequate Human Resources',
  'Transparency and accountability',
  'Affordable quality of goods and services',
  'Presence of the elements of service and profit',
]

const QUICK_FACTS = [
  { icon: '📜', label: 'Registered Under', value: 'Assam Co-Operative Societies Act, 2007' },
  { icon: '🌱', label: 'Established', value: '2022' },
  { icon: '🏙️', label: 'Head Office', value: 'Guwahati, Assam' },
  { icon: '🗺️', label: 'Coverage', value: 'Kamrup(Metro), Kamrup, Nalbari, Barpeta, Nagaon, Morigoan, Koliabor, Hojai' },
  { icon: '👥', label: 'Governance', value: '21 Directors across banking, industry, business, legal, agriculture & education' },
]

export default function About() {
  return (
    <>
      <PageHeader
        icon="🌿"
        eyebrow="Our Story"
        title="About Us"
        subtitle="A cooperative built on trust, collective strength, and the socio-economic upliftment of our members."
        stats={[
          { value: '2022', label: 'Established' },
          { value: '21', label: 'Directors' },
          { value: '8+', label: 'Districts' },
        ]}
      />

      <div className={styles.aboutWrapper}>
        <Reveal as="section" className={styles.aboutSection}>
          <p>
            Basundhara Multi-Purpose Co-Operative Society Limited is a Co-Operative Society registered under the Assam
            Co-Operative Societies Act, 2007 in the year 2022 with a Vision to be a nodal Primary Co-Operative Society in
            the area of operation with objective to provide various services related to savings, credit, business,
            industry, consumer durables to its members. It operates from its Head Office at Guwahati and looks after the
            entire districts of Kamrup(Metro), Kamrup, Nalbari, Barpeta, Nagaon, Morigoan, Koliabor and Hojai.
          </p>
          <div className={styles.governanceCallout}>
            <span className={styles.governanceIcon}>👥</span>
            <p>
              Managed by a group of <strong>21 Directors</strong> nominated from different fields like banking,
              industry, business, legal, agriculture, education and training.
            </p>
          </div>
          <p>
            Our first priority is to create a corpus fund through contribution from the members and utilise it in Agri
            business after acquiring suitable land. We aim to uplift the socio-economic development of our members. We
            are also committed to stand behind our members in need as united force.
          </p>
        </Reveal>

        <Reveal delay={100} className={styles.aboutSidebar}>
          <h3>Quick Facts</h3>
          <ul>
            {QUICK_FACTS.map((fact) => (
              <li key={fact.label}>
                <span className={styles.sidebarIcon}>{fact.icon}</span>
                <div>
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <section className={styles.focusSection}>
        <Reveal className={styles.focusHeader}>
          <span className={styles.eyebrowDark}>What We Offer</span>
          <h2>Our Focus Areas</h2>
        </Reveal>
        <div className={styles.focusGrid}>
          {FOCUS_AREAS.map((area, index) => (
            <Reveal delay={index * 80} className={styles.focusCard} key={area.title}>
              <span className={styles.focusIcon}>{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className={styles.benefitsSection}>
        <h3 className={styles.benefitsHeading}>The Benefits of Co-operatives</h3>
        <div className={styles.benefitsColumns}>
          <div>
            <h4><span className={styles.colIcon}>🌱</span> Why Cooperative</h4>
            <ul>
              {WHY_COOPERATIVE.map((item) => (
                <li key={item}><span className={styles.check}>✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4><span className={styles.colIcon}>📊</span> Cooperative as Business</h4>
            <ul>
              {COOP_AS_BUSINESS.map((item) => (
                <li key={item}><span className={styles.check}>✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  )
}
