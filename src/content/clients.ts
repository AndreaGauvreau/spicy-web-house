export type Client = {
  name: string
  /** Square logo in /public/logos, e.g. '/logos/acme.png'. */
  logo?: string
  /** Stand-in tile. Replace with a real logo before launch. */
  placeholder?: boolean
}

export const clients: Client[] = [
  { name: 'Client 1', placeholder: true },
  { name: 'Client 2', placeholder: true },
  { name: 'Client 3', placeholder: true },
  { name: 'Client 4', placeholder: true },
  { name: 'Client 5', placeholder: true },
  { name: 'Client 6', placeholder: true },
  { name: 'Client 7', placeholder: true },
  { name: 'Client 8', placeholder: true },
]
