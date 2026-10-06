import { COURSE_PRICE_AMD } from "@/lib/pricing";
import type { Course } from "@/lib/types";

/** Source-verified product facts; detailed curriculum awaits live-catalogue review. */
export const coursesHy: Course[] = [
  {
    slug: "basic-cannabis-cultivation",
    title: "Կանեփի աճեցման հիմունքներ",
    shortDescription: "Կանեփի աճեցման մասին ներածական առցանց դասընթաց՝ սկսնակների համար։",
    status: "available",
    price: COURSE_PRICE_AMD,
    level: "Սկսնակ",
    format: "Անգլերեն տեսադասեր և օժանդակ ուսումնական նյութեր",
    moduleCount: 6,
    instructionLanguage: "en",
    heroDescription: "Կանեփի աճեցման մասին ներածական առցանց դասընթաց՝ սկսնակների համար։",
    overview: [
      "Կանեփի աճեցման մասին ներածական առցանց դասընթաց՝ սկսնակների համար։",
      "Վեց բաժին՝ տեսադասերով և օժանդակ ուսումնական նյութերով։ Ուսուցման հիմնական լեզուն անգլերենն է։",
      "Թվային կրթական բովանդակություն։ Դասընթացի գնումը ֆիզիկական ապրանքներ չի ներառում։"
    ],
    included: [
      "Դասընթացի վեց բաժին",
      "Տեսադասեր",
      "Օժանդակ ուսումնական նյութեր"
    ],
    requirements: [
      "Ինտերնետին միացված սարք",
      "Անգլերեն ուսումնական նյութերը հասկանալու կարողություն"
    ],
    audience: [
      "Սկսնակներ, որոնք փնտրում են կանեփի աճեցման մասին ներածական դասընթաց։"
    ]
  },
  {
    slug: "pests-and-diseases",
    title: "Վնասատուներ և հիվանդություններ",
    shortDescription:
      "Սովորի՛ր կանխել, ճանաչել և բուժել այն վնասատուները, բորբոսն ու հիվանդությունները, որոնք սպառնում են ներսի բույսերին։",
    status: "coming-soon",
  },
  {
    slug: "plant-nutrition-basics",
    title: "Բույսի սնուցման հիմունքներ",
    shortDescription:
      "Տիրապետի՛ր պարարտանյութերին, սնուցման ժամանակացույցին, pH-ին և EC-ին, որպեսզի բույսերդ ամեն փուլում ստանան հենց այն, ինչ պետք է։",
    status: "coming-soon",
  },
  {
    slug: "seed-starting-and-propagation",
    title: "Սերմ և բազմացում",
    shortDescription:
      "Ավելի խորը մտի՛ր ծլման, ծիլերի, մատղաշ ճյուղերի և արդեն ունեցած բույսերիցդ նորերը բազմացնելու մեջ։",
    status: "coming-soon",
  },
  {
    slug: "hydroponics-for-beginners",
    title: "Հիդրոպոնիկա սկսնակների համար",
    shortDescription:
      "Ծանոթացի՛ր առանց հողի աճեցմանը — պարզ համակարգերից մինչև սննդային լուծույթ, pH-ի կարգավորում և արմատների առողջություն։",
    status: "coming-soon",
  },
  {
    slug: "harvest-and-storage",
    title: "Բերքահավաք և պահպանում",
    shortDescription:
      "Տիրապետի՛ր բերքահավաքի ժամանակին, մշակմանը, չորացմանը և պահպանմանը, որպեսզի տանը աճեցրածդ չվատնվի։",
    status: "coming-soon",
  },
];
