import styles from './PageHeader.module.css'

export default function PageHeader({ icon, eyebrow, title, subtitle, stats }) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pattern} aria-hidden="true">
        <span>🌾</span>
        <span>🤝</span>
        <span>💰</span>
        <span>🌿</span>
        <span>🏛️</span>
        <span>📈</span>
      </div>
      <div className={styles.inner}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {stats && stats.length > 0 && (
          <div className={styles.statPills}>
            {stats.map((stat) => (
              <div className={styles.statPill} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z" fill="#f4f8fb" />
      </svg>
    </div>
  )
}
