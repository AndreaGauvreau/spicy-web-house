import { isTodo } from '@/content/site'
import styles from '@/app/(legal)/legal.module.css'

/** Prints a company value, or a visible marker while it is still to be completed. */
export function Val({ children }: { children: string | undefined }) {
  if (isTodo(children)) return <span className={styles.todo}>[to be completed]</span>
  return <>{children}</>
}
