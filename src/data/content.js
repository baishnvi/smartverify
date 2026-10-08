export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '40M+', label: 'verifications completed' },
  { value: '38 sec', label: 'median time to decision' },
  { value: '190+', label: 'countries and territories' },
  { value: '99.99%', label: 'API uptime, last 12 months' },
];

export const documentTypes = [
  'Passport', 'Driving licence', 'National ID', 'Residence permit',
  'Aadhaar', 'PAN card', 'Voter ID', '6,000+ more',
];

export const sanctionLists = ['UN', 'OFAC', 'EU', 'UK HMT', 'PEP lists', 'Adverse media'];

export const steps = [
  { title: 'Send a link', text: 'Share a verification link by email, SMS or embed it in your app. No SDK needed to get started.' },
  { title: 'Customer verifies', text: 'They photograph an ID and take a short selfie. The flow guides them and retries blurry shots on the spot.' },
  { title: 'Get a decision', text: 'Document, face, liveness and sanctions checks run together. You get a clear approve or decline by webhook.' },
  { title: 'Review the edge cases', text: 'Unclear results land in a review queue with evidence attached, so your team decides in seconds.' },
];

export const useCases = [
  {
    id: 'fintech',
    label: 'Fintech',
    title: 'Open accounts without the paperwork queue',
    text: 'Meet KYC rules and let customers fund their account in the same session.',
    points: ['Document and selfie check in one flow', 'AML screening before the account opens', 'Audit trail stored for every decision'],
    outcome: 'Typical result: onboarding falls from two days to about four minutes.',
  },
  {
    id: 'marketplaces',
    label: 'Marketplaces',
    title: 'Keep fake sellers and buyers out',
    text: 'Verify people once and show a trust badge on every listing they create.',
    points: ['Re-check when payout details change', 'Duplicate identity detection across accounts', 'Badge and status available through the API'],
    outcome: 'Typical result: fraudulent signups drop by more than half in the first quarter.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Confirm who is on the other side of the call',
    text: 'Make sure patients and clinicians are who they say they are before sharing records.',
    points: ['Privacy-first processing with regional data hosting', 'Quick re-verification for returning users', 'Works on any phone browser'],
    outcome: 'Typical result: no-shows from failed logins fall because verification takes under a minute.',
  },
  {
    id: 'gig',
    label: 'Gig platforms',
    title: 'Onboard thousands of workers a week',
    text: 'Check licences, right-to-work documents and identity at the volume your growth needs.',
    points: ['Driving licence and vehicle document checks', 'Automatic expiry reminders', 'Bulk status export for operations teams'],
    outcome: 'Typical result: new workers are cleared to start the same day they apply.',
  },
];

export const plans = [
  {
    name: 'Starter',
    price: 49,
    blurb: 'For teams validating their first flow.',
    features: ['100 verifications a month', 'Document and face match', 'Email support', 'Sandbox and live API'],
  },
  {
    name: 'Growth',
    price: 199,
    blurb: 'For products with steady signup volume.',
    features: ['500 verifications a month', 'Liveness and AML screening', 'Review queue and webhooks', 'Priority chat support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: null,
    blurb: 'For regulated businesses at scale.',
    features: ['Custom volume pricing', 'Regional data hosting', 'Single sign-on and audit logs', 'Dedicated success manager'],
  },
];

export const testimonials = [
  {
    quote: 'We replaced three vendors with SmartVerify. Approvals that used to wait overnight now clear while the customer is still on the signup page.',
    name: 'Priya Nair',
    role: 'Head of Risk, Lendly',
    large: true,
  },
  {
    quote: 'The review queue is the best part. My team sees the document, the selfie and the reason in one screen.',
    name: 'Daniel Okafor',
    role: 'Operations Lead, Carryon',
  },
  {
    quote: 'Integration took an afternoon. The sandbox behaves exactly like production.',
    name: 'Sofia Martins',
    role: 'Staff Engineer, Plotline',
  },
];

export const faqs = [
  {
    q: 'How long does a verification take?',
    a: 'Most customers finish in under a minute and we return a decision in about 38 seconds at the median. Unclear cases go to your review queue.',
  },
  {
    q: 'Which countries and documents are supported?',
    a: 'We support more than 6,000 document types from over 190 countries and territories, including passports, national IDs and driving licences.',
  },
  {
    q: 'How is customer data protected?',
    a: 'Data is encrypted in transit and at rest. You choose where it is hosted and how long it is kept, and you can delete any record through the API.',
  },
  {
    q: 'Can I match the flow to my brand?',
    a: 'Yes. Set your logo, colours and wording from the dashboard, or embed the flow in your own app with our SDKs.',
  },
  {
    q: 'Am I charged for failed attempts?',
    a: 'You pay only for completed verifications. If a customer abandons the flow or the photo cannot be read, it does not count.',
  },
];

export const footerColumns = [
  { title: 'Product', links: ['Document verification', 'Face match', 'AML screening', 'API reference'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Documentation', 'Status', 'Security', 'Help centre'] },
  { title: 'Legal', links: ['Privacy policy', 'Terms of service', 'Data processing'] },
];
