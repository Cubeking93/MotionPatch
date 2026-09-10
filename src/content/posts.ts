import { P6, PRODUCT } from '@/config'

export type Inline =
  | string
  | { label: string; to: string }
  | { label: string; href: string }

export type Block =
  | { type: 'p'; children: Inline[] }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: Inline[][] }
  | { type: 'img'; src: string; alt: string; caption?: string }
  | { type: 'imgs'; items: { src: string; alt: string }[] }

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  keywords: string
  image: string
  imageAlt: string
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-use-a-motion-sickness-patch',
    title: 'How to use a motion sickness patch behind the ear',
    description:
      'A clear guide to applying a nausea relief patch behind the earlobe, how long a motion sickness patch lasts, and when a wristband may be a better fit.',
    date: '2026-09-08',
    keywords:
      'how to use a motion sickness patch, nausea relief patch behind the ear, ginger motion sickness patch, 12 hour motion sickness patch',
    image: 'assets/product-sunrise.png',
    imageAlt: 'motion patch box and sachet with a 12-hour badge',
    body: [
      {
        type: 'p',
        children: [
          'A motion sickness patch is a small, drug-free disc you wear on clean skin behind the earlobe. motion patch is an all-natural nausea relief patch with ginger extract and menthol. Each patch is made for external use only and can last up to ',
          `${PRODUCT.durationHours} hours`,
          '. Read the label every time — this is not medical advice and the patch is not a drug.',
        ],
      },
      {
        type: 'h2',
        text: 'Apply the nausea relief patch before you start moving',
      },
      {
        type: 'p',
        children: [
          'Put the motion sickness patch on before the car, boat, or plane starts moving when you can. Peel the transparent film, then place the gel side on hair-free skin just behind the earlobe. You can use 1–3 patches a day. See the full ',
          { label: 'how to use directions', to: '/how-to-use' },
          ' for warnings, storage, and what to do if skin gets irritated.',
        ],
      },
      {
        type: 'ul',
        items: [
          ['External use only — do not swallow a patch.'],
          ['Skin should be clean, dry, and free of lotion at the spot.'],
          [
            'Avoid wounds, eczema, damaged skin, and contact with eyes.',
          ],
          [
            `Wear up to ${PRODUCT.durationHours} hours, then remove and discard.`,
          ],
        ],
      },
      {
        type: 'h2',
        text: 'What is in this ginger motion sickness patch',
      },
      {
        type: 'p',
        children: [
          'The formula is all-natural and drug-free: ginger extract and menthol. It is positioned as non-drowsy and fast-acting so you can stay alert on a drive or a flight. A box holds ',
          `${PRODUCT.boxCount} patches`,
          '; each sachet holds ',
          `${PRODUCT.sachetCount}`,
          '. Buy the listing on Amazon — there is no checkout on this site.',
        ],
      },
      {
        type: 'img',
        src: 'assets/notebook-flatlay.png',
        alt: 'motion patch box and sachets on a travel desk',
      },
      {
        type: 'h2',
        text: 'Kids and families: bands or a kids patch',
      },
      {
        type: 'p',
        children: [
          'motion patch is the adult travel patch from P6. For children, start on ',
          { label: 'P6 Health', href: P6.home },
          '. Many families pack ',
          {
            label: 'P6 Original Nausea Relief Bands',
            href: P6.kidsBands,
          },
          ' — drug-free acupressure wristbands sized for smaller wrists. For ages 6+, P6 also makes ',
          {
            label: 'P6 Motion Sickness Patches for Kids',
            href: P6.kidsPatches,
          },
          ' (a different formula: ginger and cinnamon). The kids-patch insert wins if it disagrees with any page copy.',
        ],
      },
      {
        type: 'img',
        src: 'assets/p6/kids-patches-how.jpg',
        alt: 'P6 Motion Sickness Patches for Kids box showing apply-behind-the-ear directions',
        caption:
          'P6 Motion Sickness Patches for Kids (ages 6+) — a different product from adult motion patch.',
      },
      {
        type: 'imgs',
        items: [
          {
            src: 'assets/p6/kids-patches-hero.jpg',
            alt: 'P6 Nausea Relief Patch Kids box, sachet, and round patches',
          },
          {
            src: 'assets/p6/kids-bands-pink-blue.jpg',
            alt: 'P6 Nausea Relief Bracelet Kids box with pink and blue wristbands in cases',
          },
        ],
      },
      {
        type: 'p',
        children: [
          'More on how the bands sit on the P6 point is in the ',
          { label: 'P6 FAQ', href: P6.faq },
          '. Adults who prefer a reusable wristband can look at ',
          {
            label: 'P6 Original Nausea Relief Bands for Adults',
            href: P6.adultBands,
          },
          '.',
        ],
      },
    ],
  },
  {
    slug: 'motion-sickness-patch-vs-wristband',
    title: 'Motion sickness patch vs wristband: which should you pack?',
    description:
      'Compare a drug-free motion sickness patch with P6 nausea relief bands so you can pack the right nausea support for cars, cruises, and kids.',
    date: '2026-09-06',
    keywords:
      'motion sickness patch vs wristband, nausea relief bands, P6 acupressure bands, drug-free motion sickness patch',
    image: 'assets/benefits-sailboat.png',
    imageAlt: 'Traveler holding a motion patch box on a sailboat',
    body: [
      {
        type: 'p',
        children: [
          'P6 makes more than one way to travel without the queasy stretch. A motion sickness patch (motion patch) sits behind the ear. A nausea relief band sits on the wrist. Both are drug-free. Neither is a prescription scopolamine patch, and neither replaces a medicine your clinician prescribed.',
        ],
      },
      {
        type: 'h2',
        text: 'Choose a motion sickness patch for a set-and-forget travel day',
      },
      {
        type: 'p',
        children: [
          'Pack motion patch when you want a low-profile nausea relief patch that can last up to ',
          `${PRODUCT.durationHours} hours`,
          '. Peel, apply behind the earlobe, and keep your hands free for the wheel, a paddle, or a boarding pass. Ingredients are ginger extract and menthol. Shop it on Amazon from any ',
          { label: 'Shop on Amazon', to: '/' },
          ' button on this site.',
        ],
      },
      {
        type: 'img',
        src: 'assets/hero-before-after.png',
        alt: 'motion patch sachets next to the box',
      },
      {
        type: 'h2',
        text: 'Choose P6 bands when you want a reusable wrist option',
      },
      {
        type: 'p',
        children: [
          'P6 bands are acupressure wristbands. A stud sits on the inner wrist at the P6 point. Wear one on each wrist. Browse the full ',
          { label: 'P6 collection', href: P6.collection },
          ' or go straight to ',
          {
            label: 'adult nausea relief bands',
            href: P6.adultBands,
          },
          '. The ',
          { label: 'P6 about page', href: P6.about },
          ' explains the parent brand and the P6 point in more detail.',
        ],
      },
      {
        type: 'img',
        src: 'assets/p6/adult-bands-white.jpg',
        alt: 'P6 Original Nausea Relief Bands for Adults in white',
        caption: 'Reusable P6 adult bands from p6health.com — wrist, not behind the ear.',
      },
      {
        type: 'h2',
        text: 'What to pack for kids',
      },
      {
        type: 'p',
        children: [
          'For car-sick kids, most families start with ',
          {
            label: 'P6 Original Nausea Relief Bands',
            href: P6.kidsBands,
          },
          ' (the kids-sized bands). A floppy band on a tiny wrist will not sit on the point. For ages 6+ only, P6 also sells ',
          {
            label: 'motion sickness patches for kids',
            href: P6.kidsPatches,
          },
          '. Do not put an adult travel patch on a child unless the label says you can — motion patch copy here is for the adult product.',
        ],
      },
      {
        type: 'imgs',
        items: [
          {
            src: 'assets/p6/kids-patches-box.jpg',
            alt: 'P6 Motion Sickness Patches for Kids product box',
          },
          {
            src: 'assets/p6/kids-bands-royal.jpg',
            alt: 'P6 kids nausea relief bands in royal blue',
          },
        ],
      },
      {
        type: 'p',
        children: [
          'A simple split: adults who want a 12-hour nausea relief patch pack motion patch. Kids who need a wristband pack P6 kids bands. Some bags hold both.',
        ],
      },
    ],
  },
  {
    slug: 'car-sickness-patch-for-road-trips',
    title: 'Car sickness patch for road trips: what to pack in the glove box',
    description:
      'How a car sickness patch and P6 kids bands can cover winding roads — drug-free nausea relief for drivers, passengers, and car-sick kids.',
    date: '2026-09-04',
    keywords:
      'car sickness patch, carsickness patch, motion sickness in the car, road trip nausea relief, kids car sickness bands',
    image: 'assets/hero-before-after.png',
    imageAlt:
      'Before and after car ride: motion sickness versus a smoother drive',
    body: [
      {
        type: 'p',
        children: [
          'Winding roads, stop-and-go traffic, and the back seat are classic carsickness triggers. A car sickness patch is one drug-free option for adults who want nausea relief without a drowsy tablet. motion patch is a motion sickness patch you apply behind the ear before you pull out of the driveway.',
        ],
      },
      {
        type: 'h2',
        text: 'Why people look for a carsickness patch',
      },
      {
        type: 'p',
        children: [
          'A tablet can wait in a bottle you forget. A nausea relief patch stays on the skin. motion patch is all-natural (ginger extract and menthol), non-drowsy, and effective for up to ',
          `${PRODUCT.durationHours} hours`,
          ' — long enough for a mountain pass or a full day of errands. Keep a sachet (2 patches) in the glove box and the 20-patch box at home.',
        ],
      },
      {
        type: 'img',
        src: 'assets/applications-mosaic.png',
        alt: 'motion patch used across travel days',
      },
      {
        type: 'h2',
        text: 'Kids who get car sick: start with P6 bands',
      },
      {
        type: 'p',
        children: [
          'Parents often want something other than medicine for a 20-minute school run. That is what ',
          {
            label: 'P6 Original Nausea Relief Bands',
            href: P6.kidsBands,
          },
          ' are for: reusable, drug-free wristbands in a kids size. Put them on before the first turn if you can. The ',
          { label: 'P6 FAQ', href: P6.faq },
          ' covers fit and the P6 point. For ages 6+, there are also ',
          {
            label: 'P6 Motion Sickness Patches for Kids',
            href: P6.kidsPatches,
          },
          '.',
        ],
      },
      {
        type: 'imgs',
        items: [
          {
            src: 'assets/p6/kids-patches-lifestyle.jpg',
            alt: 'P6 kids motion sickness patches lifestyle product photo',
          },
          {
            src: 'assets/p6/kids-bands-pink-pink.jpg',
            alt: 'Pink P6 kids nausea relief wristbands in a travel case',
          },
        ],
      },
      {
        type: 'p',
        children: [
          'A practical glove-box kit: motion patch for the adult who gets carsick as a passenger, and P6 kids bands for the child in the back. Both live under the ',
          { label: 'P6', href: P6.home },
          ' brand. Motion patch purchases stay on Amazon; P6 bands and kids patches are listed on ',
          { label: 'p6health.com', href: P6.home },
          '.',
        ],
      },
      {
        type: 'p',
        children: [
          'Still useful in the car: cool air, a horizon view, and a break. A patch or band is not a guarantee and is not a substitute for a product your clinician recommended.',
        ],
      },
    ],
  },
  {
    slug: 'sea-sickness-patch-for-cruises',
    title: 'Sea sickness patch for cruises, ferries, and small boats',
    description:
      'Pack a sea sickness patch for cruise days and choppy water. Drug-free nausea relief for adults, plus P6 kids bands for young sailors.',
    date: '2026-09-02',
    keywords:
      'sea sickness patch, cruise motion sickness patch, seasickness nausea relief, boat motion sickness, ferry nausea',
    image: 'assets/applications-mosaic.png',
    imageAlt: 'Boating, kayaking, and cruise scenes for motion sickness travel',
    body: [
      {
        type: 'p',
        children: [
          'Swells, tenders, and the first night at sea are when people search for a sea sickness patch. motion patch is a drug-free nausea relief patch aimed at seasickness as well as carsickness and airsickness. Apply it behind the earlobe before you leave the dock when you can.',
        ],
      },
      {
        type: 'h2',
        text: 'A cruise-day motion sickness patch',
      },
      {
        type: 'p',
        children: [
          'Each motion patch can last up to ',
          `${PRODUCT.durationHours} hours`,
          ' — useful from a morning tender to an evening sail-away. The formula is ginger extract and menthol. It is not a prescription seasickness patch and it is not a drug. Follow the ',
          { label: 'label directions', to: '/how-to-use' },
          ' and skip it on irritated or broken skin.',
        ],
      },
      {
        type: 'ul',
        items: [
          ['Cruises and cabin days when you still feel the roll.'],
          ['Ferries, water taxis, and fishing boats.'],
          ['Kayaks and small craft where you want hands free.'],
        ],
      },
      {
        type: 'img',
        src: 'assets/hero-brand-boat.png',
        alt: 'motion patch on a boat day',
      },
      {
        type: 'h2',
        text: 'Kids on the boat',
      },
      {
        type: 'p',
        children: [
          'For children, pack ',
          {
            label: 'P6 kids nausea relief bands',
            href: P6.kidsBands,
          },
          ' from ',
          { label: 'P6 Health', href: P6.home },
          '. They are wristbands, not this adult patch. Ages 6+ can use ',
          {
            label: 'P6 Motion Sickness Patches for Kids',
            href: P6.kidsPatches,
          },
          ' when that label fits. Adults who want a wrist option on deck can add ',
          { label: 'P6 adult bands', href: P6.adultBands },
          '.',
        ],
      },
      {
        type: 'img',
        src: 'assets/p6/kids-patches-hero.jpg',
        alt: 'P6 kids nausea relief patches box, sachet, and patches',
        caption: 'P6 kids patches (6+) if a wristband is not the right fit for that child.',
      },
      {
        type: 'imgs',
        items: [
          {
            src: 'assets/p6/kids-bands-white-pink.jpg',
            alt: 'White and pink P6 kids nausea relief bands',
          },
          {
            src: 'assets/p6/adult-bands-royal.jpg',
            alt: 'Royal blue P6 adult nausea relief bands',
          },
        ],
      },
      {
        type: 'p',
        children: [
          'Mid-ship, fresh air, and looking at the horizon still help. A sea sickness patch is one more item in the kit — not a promise the water will feel still.',
        ],
      },
    ],
  },
  {
    slug: 'motion-sickness-patch-for-flying',
    title: 'Motion sickness patch for flying: airport to landing',
    description:
      'How a drug-free motion sickness patch can cover takeoff, turbulence, and long connections — plus what P6 makes for kids who get airsick.',
    date: '2026-08-30',
    keywords:
      'motion sickness patch for flying, airsickness patch, airplane nausea relief, flight motion sickness, airport travel nausea',
    image: 'assets/notebook-flatlay.png',
    imageAlt: 'motion patch box and sachets packed for travel',
    body: [
      {
        type: 'p',
        children: [
          'Turbulence, a hot cabin, and a seat that does not see the horizon can bring on airsickness. A motion sickness patch for flying is a drug-free option if you want nausea relief without a drowsy tablet at the gate. motion patch applies behind the ear and can last up to ',
          `${PRODUCT.durationHours} hours`,
          '.',
        ],
      },
      {
        type: 'h2',
        text: 'When to put the flight nausea patch on',
      },
      {
        type: 'p',
        children: [
          'Apply it before boarding when you can — in the rideshare to the airport is fine. Keep the gel side on clean, hair-free skin behind the earlobe. One patch can cover a short hop plus a layover if you stay inside the 12-hour window; otherwise use a fresh patch (1–3 times a day per the label). Full steps live on ',
          { label: 'how to use', to: '/how-to-use' },
          '.',
        ],
      },
      {
        type: 'img',
        src: 'assets/product-sunrise.png',
        alt: 'motion patch box packed for travel',
      },
      {
        type: 'h2',
        text: 'What to pack for a family flight',
      },
      {
        type: 'p',
        children: [
          'Adults: motion patch in a 2-patch sachet, plus the 20-patch box if you fly often. Kids: ',
          {
            label: 'P6 Original Nausea Relief Bands',
            href: P6.kidsBands,
          },
          ' for a snug wrist, or ',
          {
            label: 'P6 Motion Sickness Patches for Kids',
            href: P6.kidsPatches,
          },
          ' if they are 6+ and that product’s label fits. See the rest of the lineup on ',
          { label: 'p6health.com', href: P6.home },
          '.',
        ],
      },
      {
        type: 'img',
        src: 'assets/p6/kids-patches-box.jpg',
        alt: 'P6 Motion Sickness Patches for Kids box',
        caption: 'Kids patches are a separate P6 SKU — ages 6+ only, ginger and cinnamon.',
      },
      {
        type: 'imgs',
        items: [
          {
            src: 'assets/p6/kids-bands-pink-blue.jpg',
            alt: 'P6 kids nausea relief bracelet kit in pink and blue',
          },
          {
            src: 'assets/p6/adult-bands-white-pink.jpg',
            alt: 'P6 adult nausea relief bands in white and pink',
          },
        ],
      },
      {
        type: 'p',
        children: [
          'motion patch is a P6 brand. Bands stay on ',
          { label: 'P6 Health', href: P6.collection },
          '; this patch sells on Amazon. Neither product is medical advice. If you get airsick and already have a plan from a clinician, keep that plan.',
        ],
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function relatedPosts(slug: string, count = 3) {
  return posts.filter((post) => post.slug !== slug).slice(0, count)
}
