/**
 * Every buy CTA on this marketing site opens this URL in a new tab.
 * Paste the live Amazon listing here — there is no cart or checkout on motionpatch.com.
 */
export const AMAZON_PRODUCT_URL = 'https://www.amazon.com'

export const SITE_URL = 'https://www.motionpatch.com'
export const CONTACT_EMAIL = 'hello@motionpatch.com'
export const BRAND_NAME = 'motion patch'
export const PARENT_BRAND = 'P6'

export const P6 = {
  home: 'https://p6health.com',
  collection: 'https://p6health.com/collections/p6',
  faq: 'https://p6health.com/pages/faq',
  about: 'https://p6health.com/pages/about',
  kidsBands: 'https://p6health.com/products/p6-original-nausea-relief-bands',
  adultBands: 'https://p6health.com/products/p6-original-nausea-relief-bands-for-adults',
  kidsPatches: 'https://p6health.com/products/p6-motion-sickness-patches-for-kids',
} as const

export const PRODUCT = {
  category: 'Nausea Relief · Powered by Nature',
  durationHours: 12,
  boxCount: 20,
  sachetCount: 2,
  ingredients: ['Ginger Extract', 'Menthol'] as const,
  madeIn: 'China',
}
