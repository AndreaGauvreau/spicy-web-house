'use client'

import { useState, type FormEvent } from 'react'
import { form as copy, needOptions } from '@/content/contact'
import { company } from '@/content/site'
import styles from './contact.module.css'
import site from './site.module.css'

/**
 * The form does not send anything to a server. On submit it prepares an email to the company address
 * and opens it in the visitor's email app, so no personal data passes through this site.
 */
export function ContactForm() {
  // The prepared message, once the visitor has submitted the form.
  const [href, setHref] = useState<string | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const read = (key: string) => String(data.get(key) ?? '').trim()

    const need = read('need')
    const lines = [
      `${copy.fields.name}: ${read('name')}`,
      `${copy.fields.email}: ${read('email')}`,
      `${copy.fields.company}: ${read('company') || '-'}`,
      `${copy.fields.need}: ${need}`,
      `${copy.fields.timeline}: ${read('timeline') || '-'}`,
      `${copy.fields.budget}: ${read('budget') || '-'}`,
      '',
      `${copy.fields.message}:`,
      read('message'),
    ]
    const next = `mailto:${company.email}?subject=${encodeURIComponent(`Project enquiry: ${need}`)}&body=${encodeURIComponent(lines.join('\n'))}`

    setHref(next)
    window.location.href = next
  }

  return (
    <form id="contact-form" className={styles.form} onSubmit={onSubmit} aria-label="Contact form">
      <div className={styles.pair}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {copy.fields.name}
          </label>
          <input className={styles.input} id="name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {copy.fields.email}
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="company">
          {copy.fields.company}
          <span className={styles.optional}>{copy.optional}</span>
        </label>
        <input
          className={styles.input}
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
        />
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{copy.fields.need}</legend>
        <div className={styles.choices}>
          {needOptions.map((option, index) => (
            <label key={option} className={styles.choice}>
              <input type="radio" name="need" value={option} required={index === 0} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.pair}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="timeline">
            {copy.fields.timeline}
            <span className={styles.optional}>{copy.optional}</span>
          </label>
          <input className={styles.input} id="timeline" name="timeline" type="text" maxLength={160} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget">
            {copy.fields.budget}
            <span className={styles.optional}>{copy.optional}</span>
          </label>
          <input className={styles.input} id="budget" name="budget" type="text" maxLength={160} />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {copy.fields.message}
        </label>
        <textarea className={styles.textarea} id="message" name="message" required minLength={10} maxLength={1500} />
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className={`${site.btn} ${site.btnPrimary}`}>
          {copy.submit}
        </button>
        <p className={styles.hint}>{copy.hint}</p>
      </div>

      {href ? (
        <p className={styles.status} role="status">
          {copy.opened}{' '}
          <a href={href}>{copy.openAgain}</a>
          {copy.orWrite} <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      ) : null}
    </form>
  )
}
