import type { FaqItem } from '@/content/faq'
import { PlusIcon } from './icons'
import styles from './site.module.css'

/** Questions and answers as native disclosure widgets: keyboard friendly, readable without scripts. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className={`${styles.faq} reveal`}>
      {items.map((item) => (
        <details key={item.q} className={styles.faqItem}>
          <summary>
            {item.q}
            <span className={styles.faqIcon} aria-hidden="true">
              <PlusIcon />
            </span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
