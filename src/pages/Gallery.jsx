import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import styles from './Gallery.module.css'

const GALLERY_ITEMS = [
  { img: '/images/gallery/event1.jpg', alt: 'Community Event', title: 'Annual Meeting 2024', desc: 'Members gathering for our annual cooperative meeting' },
  { img: '/images/gallery/event2.jpg', alt: 'Training Session', title: 'Financial Literacy Workshop', desc: 'Educational session on financial planning and savings' },
  { img: '/images/gallery/event3.jpg', alt: 'Community Service', title: 'Community Service Day', desc: 'Members participating in local community initiatives' },
  { img: '/images/gallery/event4.jpg', alt: 'Cultural Event', title: 'Cultural Celebration', desc: 'Traditional festivities and cultural programs' },
  { img: '/images/gallery/event5.jpg', alt: 'Award Ceremony', title: 'Achievement Awards', desc: 'Recognizing outstanding member contributions' },
  { img: '/images/gallery/event6.jpg', alt: 'Youth Program', title: 'Youth Development Program', desc: 'Empowering young members through skill development' },
  { img: '/images/gallery/event7.jpg', alt: 'Board Meeting', title: 'Board Meeting', desc: 'Strategic planning and governance discussions' },
  { img: '/images/gallery/event8.jpg', alt: 'Health Camp', title: 'Health Awareness Camp', desc: 'Promoting health and wellness in the community' },
  { img: '/images/gallery/event9.jpg', alt: 'Agricultural Fair', title: 'Agricultural Fair', desc: 'Showcasing local produce and farming innovations' },
]

export default function Gallery() {
  return (
    <>
      <PageHeader
        icon="📸"
        eyebrow="In Pictures"
        title="Photo Gallery"
        subtitle="Explore moments from our community events, meetings, and activities."
      />
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal delay={(index % 3) * 80} className={styles.galleryItem} key={item.title}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className={styles.galleryOverlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
