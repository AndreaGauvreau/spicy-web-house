import type { Project } from '@/content/work'
import { ExternalIcon } from './icons'
import styles from './site.module.css'

/** One project. The whole card is a link to the live site, in a new tab. */
export function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`${styles.work} reveal`}>
      <div className={styles.workTop}>
        <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.workIndustry}>{project.industry}</span>
      </div>

      <div>
        <h3 className={styles.workName}>{project.name}</h3>
        <p className={styles.workTagline}>{project.tagline}</p>
      </div>

      <div className={styles.workBottom}>
        <span className={styles.workMeta}>Services: {project.services}</span>
        <a className={styles.workLink} href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer">
          {project.domain}
          <ExternalIcon />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  )
}
