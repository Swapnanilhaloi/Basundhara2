import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import styles from './Contact.module.css'

const CONTACT_DETAILS = [
  { icon: '📧', label: 'Email', value: 'basundharacooperative@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 86385-93984' },
  { icon: '📍', label: 'Address', value: 'House No.74, Kushal Nagar, Bamunimaidan, Guwahati 781021' },
  { icon: '🕒', label: 'Office Hours', value: 'Monday – Saturday, 10:00 AM – 5:00 PM' },
]

const WHY_JOIN = [
  'Open to residents across 8 districts of Assam',
  'Eligible for loans after 6 months of membership',
  'Monthly & fixed deposit schemes for members',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <PageHeader
        icon="📮"
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have questions or want to get in touch? We'd love to hear from you and welcome you into the cooperative."
      />
      <div className={styles.contactLayout}>
        <Reveal className={styles.infoPanel}>
          <h3>Reach Out To Us</h3>
          <p className={styles.infoIntro}>
            Whether you're curious about membership, savings schemes, or loans — our team at Guwahati is here to help.
          </p>
          <ul className={styles.infoList}>
            {CONTACT_DETAILS.map((detail) => (
              <li key={detail.label}>
                <span className={styles.infoIcon}>{detail.icon}</span>
                <div>
                  <strong>{detail.label}</strong>
                  <span>{detail.value}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.whyJoin}>
            <h4>Why Join Basundhara?</h4>
            <ul>
              {WHY_JOIN.map((item) => (
                <li key={item}><span className={styles.check}>✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} as="section" className={styles.contactSection}>
          {submitted && (
            <p className={styles.successMessage}>Thanks for reaching out! We'll get back to you soon.</p>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
          </form>
        </Reveal>
      </div>
    </>
  )
}
