import { company, isTodo } from '@/content/site'
import { Val } from './Val'

/** The public contact address as a mailto link. */
export function Email() {
  if (isTodo(company.email)) return <Val>{company.email}</Val>
  return <a href={`mailto:${company.email}`}>{company.email}</a>
}
