import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AMAZON_PRODUCT_URL, CONTACT_EMAIL, PRODUCT } from '@/config'

const faqs = [
  {
    q: 'Where do I buy motion patch?',
    a: `On Amazon. This site is marketing only — there is no cart or checkout here. Use the Shop on Amazon buttons, which open the product listing in a new tab.`,
  },
  {
    q: 'How long does a patch last?',
    a: `Each patch is effective for up to ${PRODUCT.durationHours} hours. You can use 1–3 patches a day. Always follow the label.`,
  },
  {
    q: 'What is in it?',
    a: `Main ingredients: ${PRODUCT.ingredients.join(', ')}. The formula is all-natural and drug-free.`,
  },
  {
    q: 'Who is it for?',
    a: 'People who get motion sickness in cars, on boats, in the air, on rides, while fishing or kayaking, in VR or gaming, or on other moving travel. It is for external use on intact skin behind the earlobe.',
  },
  {
    q: 'Will it make me drowsy?',
    a: 'motion patch is positioned as non-drowsy and fast-acting. It is not a drug. Individual responses vary — read the label.',
  },
  {
    q: 'How many patches are in a box?',
    a: `A box contains ${PRODUCT.boxCount} patches. Sachets contain ${PRODUCT.sachetCount} patches each.`,
  },
  {
    q: 'I have a question about my order.',
    a: `Order, shipping, payment, and returns are handled by Amazon. Use Amazon order support for those issues. For brand questions, email ${CONTACT_EMAIL}.`,
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This website is not medical advice and motion patch is not a drug. If you have a medical condition, take other products, or are unsure whether a patch is appropriate, talk with a clinician and follow the label.',
  },
]

export function Faq() {
  return (
    <>
      <Seo
        title="motion patch FAQ"
        description="Answers about Amazon orders, 12-hour wear time, ingredients, and who motion patch is for."
        path="/faq"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
          FAQ
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">
          Quick answers before you pack.
        </h1>
        <p className="mt-4 text-lg text-muted">
          Buying happens on Amazon. Duration, ingredients, and use come from
          the product label — we do not add extra medical claims here.
        </p>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                {item.a}
                {index === 0 ? (
                  <p className="mt-3">
                    <a
                      className="font-extrabold text-navy underline decoration-yellow decoration-4 underline-offset-4"
                      href={AMAZON_PRODUCT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open the Amazon listing
                    </a>
                  </p>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl bg-mist p-6">
          <p className="font-extrabold text-navy">Still looking?</p>
          <p className="mt-2 text-muted">
            Brand questions go to{' '}
            <a
              className="font-bold text-navy underline"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            . Order issues go to Amazon.
          </p>
          <div className="mt-5">
            <AmazonButton />
          </div>
        </div>
      </section>
    </>
  )
}
