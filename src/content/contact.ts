export const contactPage = {
  eyebrow: 'Contact',
  headline: 'Tell us about your project.',
  sub: 'Book a free intro call or send us a few lines. We read every message and reply personally.',
}

/** The "Call" line of the direct contact block: a link down to the form, where the visitor asks for the call. */
export const callLabel = 'Book a free intro call'

export const needOptions = ['Website', 'Web app', 'Mobile app', 'Brand and motion', 'Not sure yet'] as const

export const form = {
  fields: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    need: 'What do you need?',
    timeline: 'Timeline',
    budget: 'Budget',
    message: 'Tell us about your project',
  },
  optional: 'optional',
  submit: 'Send message',
  /** The form prepares an email in the visitor's own email app: nothing is sent from this site. */
  hint: 'This opens your email app with your message ready to send.',
  opened:
    "Your email app should now open with your message ready. Press send there and we'll be in touch soon to set up your intro call. Nothing opened?",
  openAgain: 'Open the message again',
  orWrite: ', or write to',
}

export const nextSteps = {
  headline: 'What happens next',
  steps: [
    'We read your message and get back to you.',
    'We set up a free intro call to understand your goals.',
    "You get a clear scope, plan and quote. If we're not the right fit, we'll tell you straight away.",
  ],
}

export const reassurance = 'No commitment, no sales pitch. Just a conversation about what you\'re building.'
