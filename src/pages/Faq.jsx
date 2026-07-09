import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import styles from './Faq.module.css'

const CATEGORIES = {
  membership: { label: 'Membership', icon: '🪪' },
  loans: { label: 'Loans', icon: '🤝' },
  savings: { label: 'Savings & Deposits', icon: '💰' },
}

const FAQS = [
  {
    category: 'membership',
    q: 'How to become a shareholder?',
    a: 'A person residing in the districts of Kamrup(Metro), Kamrup, Nalbari, Barpeta, Nagaon, Morigoan, Koliabor and Hojai can be a shareholder of this Co-operative society. The individual should be age of 18 years and above. The individual should be introduced by two existing members confirming his identity and good reputation in the society. The society reserve the right to accept or reject membership of a proposed member.',
  },
  {
    category: 'membership',
    q: 'What is the fee structure?',
    a: 'Admission Fee is Rs.100/- which is non-refundable. Share money Rs. 5000/- and Rs. 500/- monthly compulsory deposit. Thus, initial deposit is Rs. 5600/- for joining as shareholder. We do not accept cash. Deposit should be in the bank account of the society only.',
  },
  {
    category: 'membership',
    q: 'Can a shareholder quit from the Society, if not satisfied?',
    a: 'Yes, a shareholder can quit from the society after two years of joining.',
  },
  {
    category: 'loans',
    q: 'Can a shareholder take loan from the society?',
    a: 'Yes, after six months of joining in the society, a member is eligible for loan. However, society may consider loan in lesser period also in emergency/merits.',
  },
  {
    category: 'savings',
    q: 'Is there any deposit scheme in the society?',
    a: 'Yes, monthly deposit schemes for members only. A shareholder can deposit Rs. 1000/- per month and more as per their convenience. Deposit Tenure: 24 months.',
  },
  {
    category: 'savings',
    q: 'Is there any Fixed deposit scheme in the society?',
    a: 'Yes, there is a Fixed Deposit scheme for members only. Minimum Rs. 5000/- and maximum Rs. 1,00,000/- per shareholder. Maximum period is five years. Rate of interest is @ 8% per annum upto one year. One year and upto three years the rate of interest is @ 9% per annum. Three years and above the rate of interest is @ 12% per annum.',
  },
  {
    category: 'savings',
    q: 'Is there any Monthly Income Plan scheme in the society?',
    a: 'Yes, there is a Fixed Deposit scheme for members only. Basundhara Monthly Income Plan',
    list: [
      'The Monthly Income Plan (MIP) scheme is intended for the members who regularly need a source of supplemental income each month.',
      'Under the MIP scheme, interest on deposit is paid on a monthly basis. Interest earned on each deposit serves as an additional source of income.',
      'Rate of interest:',
      '12% per annum for deposit Rs. 100000 and above',
      '15% per annum for deposit Rs. 500000 and above',
      'Minimum period: 12 month and up to 60 months',
      'Pre-mature penalty is 1% per annum deduction.',
    ],
  },
  {
    category: 'membership',
    q: 'What are the benefits of becoming shareholder as well as member?',
    a: 'Yes, Be a part of a business group. Every share holder has equal rights in the Cooperative. Entitled to get dividend against share contribution, loan in financial need, grow capital through cooperative etc. Also get chance to engage in social activities to uplift the rural economy and help grow the nation. For further details please contact us at the above address.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return FAQS
    return FAQS.filter(
      (faq) => faq.q.toLowerCase().includes(term) || faq.a.toLowerCase().includes(term),
    )
  }, [search])

  return (
    <>
      <PageHeader
        icon="💬"
        eyebrow="Need Help?"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Basundhara Multi-Purpose Co-Operative Society Limited."
      />
      <section className={styles.faqSection}>
        <Reveal className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search questions... e.g. loan, deposit, membership"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Reveal>

        {filtered.length === 0 ? (
          <p className={styles.noResults}>No questions match "{search}". Try a different keyword.</p>
        ) : (
          <div className={styles.faqContainer}>
            {filtered.map((faq, index) => {
              const isActive = openIndex === index
              const category = CATEGORIES[faq.category]
              return (
                <Reveal delay={(index % 4) * 40} className={styles.faqWrap} key={faq.q}>
                  <div className={`${styles.faqItem} ${isActive ? styles.active : ''}`}>
                    <button className={styles.faqQuestion} onClick={() => setOpenIndex(isActive ? null : index)}>
                      <span className={styles.qNumber}>{String(index + 1).padStart(2, '0')}</span>
                      <span className={styles.qText}>
                        <span className={styles.categoryTag}>
                          {category.icon} {category.label}
                        </span>
                        {faq.q}
                      </span>
                      <span className={styles.faqIcon}>+</span>
                    </button>
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                      {faq.list && (
                        <ul>
                          {faq.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
