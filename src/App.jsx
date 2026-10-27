import React, { useState, useMemo, useEffect } from 'react';
import {
  ShoppingBag,
  Search,
  Heart,
  X,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Truck,
  CreditCard,
  Package,
  Star,
  ChevronRight,
  ShieldCheck,
  ArrowLeft,
  Clock,
  MapPin,
  Check,
  Tag,
  SlidersHorizontal,
  Wine,
  Info,
  Award,
  Droplets,
  Share2,
  Smartphone,
  Phone,
  MessageCircle,
  Store,
  Mail,
  User,
  Home,
  Sparkles,
  Gift,
  Beer,
  Utensils,
  ChevronDown,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  CheckCircle,
  Calendar,
} from 'lucide-react';

const LOGO_URL = 'https://i.postimg.cc/jwMrHC8N/logo.png';
const STORE_NAME = 'LA CANTINA DI LOLE';
const STORE_TAGLINE = 'Vini Sfusi, in Bottiglia e Non Solo...';
const STORE_ADDRESS = 'Via Omodei 3, 20095 Cusano Milanino (MI)';
const STORE_EMAIL = 'lacantinadilole@gmail.com';
const STORE_PHONE = '02 49656697';
const STORE_WHATSAPP = '+39 3476957399';
const WHATSAPP_RAW = '393476957399';

const OPENING_HOURS = [
  { day: 'Lunedì', hours: '16:00 - 19:30' },
  { day: 'Martedì - Venerdì', hours: '09:30 - 12:30 | 16:00 - 19:30' },
  { day: 'Sabato', hours: '09:30 - 12:30 | 16:00 - 19:00' },
  { day: 'Domenica', hours: 'Chiuso' },
];

const DELIVERY_ZONES = [
  {
    fascia: 0,
    minSpend: 0.0,
    label: 'Fascia 0 - Spesa Gratuita',
    towns: ['Cusano Milanino'],
  },
  {
    fascia: 1,
    minSpend: 25.0,
    label: 'Fascia 1 - Min. € 25,00',
    towns: [
      'Paderno Dugnano',
      'Bresso',
      'Cormano',
      'Cinisello Balsamo',
      'Nova Milanese',
    ],
  },
  {
    fascia: 2,
    minSpend: 40.0,
    label: 'Fascia 2 - Min. € 40,00',
    towns: [
      'Sesto San Giovanni',
      'Senago',
      'Varedo',
      'Limbiate',
      'Desio',
      'Muggiò',
      'Cassina Nuova',
      'Novate Milanese',
      'Meda',
      'Seveso',
      'Barlassina',
    ],
  },
  {
    fascia: 3,
    minSpend: 50.0,
    label: 'Fascia 3 - Min. € 50,00',
    towns: [
      'Milano Niguarda',
      'Milano Greco',
      'Milano Isola',
      'Milano Quarto-Oggiaro',
      'Milano Gallaratese',
      'Milano San Siro',
      'Monza',
      'Lissone',
      'Seregno',
      'Lentate Sul Seveso',
    ],
  },
  {
    fascia: 4,
    minSpend: 70.0,
    label: 'Fascia 4 - Min. € 70,00',
    towns: [
      'Saronno',
      'Arese',
      'Garbagnate Milanese',
      'Ceriano Laghetto',
      'Solaro',
    ],
  },
];

const MAIN_CATEGORIES = [
  'Tutti i Prodotti',
  'Vini Sfusi & Bag-in-Box',
  'Vini in Bottiglia',
  'Birre & Distillati',
  'Sfiziosità & Regali',
];

const PRODUCT_CATALOG = [
  // --- VINI SFUSI & BAG-IN-BOX (The 10 exact wines) ---
  {
    id: 'sfuso-1',
    name: 'ROSSO SECCO BARRICATO',
    producer: 'Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'Vino Rosso',
    alcohol: '15% Vol.',
    pricePerLiter: 4.5,
    rating: 4.9,
    reviewsCount: 42,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description:
      'Vino rosso affinato in botte di legno, dalla grande struttura e dal sorso avvolgente. Note intense di prugna matura, cacao e spezie calde.',
    tastingNotes:
      'Prugna in confettura, fichi secchi, vaniglia e spezie di legno nobile.',
    foodPairing:
      'Arrosti di carne rossa, spezzatini, cacciagione e formaggi molto stagionati.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 22.5,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 14.5,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 5.0,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-2',
    name: 'ROSSO AMABILE',
    producer: 'Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'Vino Rosso',
    alcohol: '14% Vol.',
    pricePerLiter: 3.8,
    rating: 4.8,
    reviewsCount: 38,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    description:
      'Vino rosso dal gusto morbido, caldo e piacevolmente amabile. Un sorso vellutato caratterizzato da spiccate note di frutti rossi maturi.',
    tastingNotes:
      'Ciliegia marasca, amarena dolce, mora di rovo e un finale morbido.',
    foodPairing:
      'Primi piatti con ragù ricchi, formaggi a pasta filata, castagne e dolci da forno.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 19.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 12.5,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.5,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-3',
    name: 'VINO ROSSO NEBIUS',
    producer: 'Danilo Spinoglio',
    origin: 'Sala Monferrato (AL) - Piemonte',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'Vino Rosso',
    alcohol: '14% Vol.',
    pricePerLiter: 4.0,
    rating: 4.9,
    reviewsCount: 56,
    image:
      'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=800&q=80',
    description:
      'Eccellenza piemontese dal carattere elegante e fiero. Colore rosso rubino con riflessi granati, bouquet complesso e buona persistenza.',
    tastingNotes:
      'Frutti di bosco, viole secche, nota leggera di liquirizia e spezie nobili.',
    foodPairing:
      'Carni alla griglia, bolliti misti, primi piatti piemontesi e risotti saporiti.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 20.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 13.0,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.8,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-4',
    name: 'VINO ROSSO DOLCET',
    producer: 'Danilo Spinoglio',
    origin: 'Sala Monferrato (AL) - Piemonte',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'Vino Rosso',
    alcohol: '13% Vol.',
    pricePerLiter: 3.6,
    rating: 4.7,
    reviewsCount: 29,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    description:
      'Vino da tutto pasto fresco, equilibrato e beverino. Perfetto per la tavola quotidiana grazie alla sua piacevole giovinezza fruttata.',
    tastingNotes:
      'Mirtillo fresco, prugna rossa e finale di mandorla tipico della tradizione monferrina.',
    foodPairing:
      'Antipasti di salumi, primi al pomodoro, frittate e carni bianche.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 18.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.8,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.2,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-5',
    name: 'BARBERA FERMO IGT',
    producer: 'Azienda Agricola Manuelina',
    origin: 'Santa Maria della Versa (PV) - Lombardia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'IGT Provincia di Pavia',
    alcohol: '12,5% Vol.',
    pricePerLiter: 3.5,
    rating: 4.8,
    reviewsCount: 64,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description:
      "La classica Barbera dell'Oltrepò Pavese vinificata ferma. Colore rosso vivo, spiccata freschezza acida e gusto schietto e genuino.",
    tastingNotes:
      'Ciliegia croccante, ribes rosso e una schietta nota vinosa e fresca.',
    foodPairing:
      'Salumi tradizionali lombardi, risotti con salsiccia, cotoletta alla milanese e formaggi freschi.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 17.5,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.5,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.0,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-6',
    name: 'REFOSCO IGT',
    producer: 'Azienda Agricola Bosco del Corner',
    origin: 'Gorgo al Monticano (TV) - Veneto',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosso',
    denomination: 'IGT Marca Trevigiana',
    alcohol: '12% Vol.',
    pricePerLiter: 3.4,
    rating: 4.7,
    reviewsCount: 31,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    description:
      'Vino dal colore rosso intenso con riflessi violacei. Bouquet piacevolmente erbaceo e fruttato con tannini leggeri e morbidi.',
    tastingNotes:
      'Mora di siepe, prugna selvatica e una leggera e stuzzicante nota speziata.',
    foodPairing: 'Carni di maiale, umidi di carne, polenta e formaggi mezzani.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 17.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.0,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 3.9,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-7',
    name: 'CHARDONNAY FERMO IGT',
    producer: 'Azienda Agricola Manuelina',
    origin: 'Santa Maria della Versa (PV) - Lombardia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Bianco',
    denomination: 'IGT Provincia di Pavia',
    alcohol: '14% Vol.',
    pricePerLiter: 3.9,
    rating: 4.9,
    reviewsCount: 52,
    image:
      'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=800&q=80',
    description:
      "Chardonnay elegante e ricco dell'Oltrepò Pavese. Colore giallo paglierino con riflessi dorati, profumo floreale e gusto pieno ed armonico.",
    tastingNotes:
      "Mela dorata, fiori d'acacia, crosta di pane e cenno di frutta esotica.",
    foodPairing:
      'Risotti di mare, fritture di pesce, carni bianche e formaggi di capra.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 19.5,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 12.8,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.6,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-8',
    name: 'BIANCO DELLA PUGLIA',
    producer: 'Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Bianco',
    denomination: 'Vino Bianco',
    alcohol: '13% Vol.',
    pricePerLiter: 3.5,
    rating: 4.8,
    reviewsCount: 45,
    image:
      'https://images.unsplash.com/photo-1566997250265-4424cf3e4787?auto=format&fit=crop&w=800&q=80',
    description:
      'Vino bianco pugliese radioso e sapido. Aromi freschi di agrumi e macchia mediterranea, con un sorso piacevolmente minerale e dissetante.',
    tastingNotes:
      'Pesca bianca, fiori di limone e una piacevole nota salina sul finale.',
    foodPairing:
      'Antipasti di mare, crudi di pesce, spaghetti alle vongole e verdure grigliate.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 17.5,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.5,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.0,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-9',
    name: 'ROSATO SECCO',
    producer: 'Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosato',
    denomination: 'Vino Rosato',
    alcohol: '13% Vol.',
    pricePerLiter: 3.6,
    rating: 4.8,
    reviewsCount: 33,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    description:
      'Rosato pugliese cristallino e fragrante. Gusto asciutto, equilibrato e ricco di freschezza, con aromi nitidi di piccoli frutti rossi.',
    tastingNotes:
      'Fragolina di bosco, melograno, agrume rosa e spiccata acidità.',
    foodPairing:
      'Pizza, primi piatti al pomodoro fresco, salumi delicati e zuppe di pesce.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 18.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.8,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.2,
        popular: false,
      },
    ],
  },
  {
    id: 'sfuso-10',
    name: 'ROSATO AMABILE',
    producer: 'Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Vini Sfusi & Bag-in-Box',
    type: 'Rosato',
    denomination: 'Vino Rosato',
    alcohol: '13% Vol.',
    pricePerLiter: 3.6,
    rating: 4.9,
    reviewsCount: 27,
    image:
      'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80',
    description:
      'Rosato morbido dal finale delicatamente dolce. Seducente al palato, ideale per chi cerca un vino amabile e mai stancante.',
    tastingNotes:
      'Lamponi dolci, petali di rosa e una nota caramellata sfumata.',
    foodPairing:
      'Aperitivi con formaggi freschi, crostate di frutta e dolci lievitati.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bib5',
        name: 'Bag-in-Box 5 Litri',
        liters: 5,
        price: 18.0,
        popular: true,
      },
      {
        id: 'bib3',
        name: 'Bag-in-Box 3 Litri',
        liters: 3,
        price: 11.8,
        popular: false,
      },
      {
        id: 'bot1',
        name: 'Bottiglia 1 Litro (Sfuso)',
        liters: 1,
        price: 4.2,
        popular: false,
      },
    ],
  },

  // --- VINI IN BOTTIGLIA ---
  {
    id: 'bot-1',
    name: "BAROLO DOCG 'PRAPÒ'",
    producer: 'Azienda Vinicola Langhe',
    origin: "Serralunga d'Alba (CN) - Piemonte",
    mainCategory: 'Vini in Bottiglia',
    type: 'Rosso',
    denomination: 'DOCG Barolo',
    alcohol: '14.5% Vol.',
    pricePerLiter: 42.66,
    rating: 5.0,
    reviewsCount: 18,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description:
      'Re dei vini, affinato 36 mesi in botti di rovere. Struttura immensa, tannino setoso ed aromi complessi di tartufo, cuoio e tabacco.',
    tastingNotes:
      'Rosa appassita, tartufo nero, cuoio, tabacco da pipa e ciliegia sotto spirito.',
    foodPairing:
      "Brasati al Barolo, cacciagione da pelo, piatti al tartufo e formaggi d'alpeggio.",
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bot075',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 32.0,
        popular: true,
      },
    ],
  },
  {
    id: 'bot-2',
    name: 'AMARONE DELLA VALPOLICELLA DOCG',
    producer: 'Cantina Artigianale Negrar',
    origin: 'Negrar (VR) - Veneto',
    mainCategory: 'Vini in Bottiglia',
    type: 'Rosso',
    denomination: 'DOCG Amarone Classico',
    alcohol: '15.5% Vol.',
    pricePerLiter: 46.66,
    rating: 4.9,
    reviewsCount: 22,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    description:
      "Ottenuto dall'appassimento sui graticci delle uve Corvinone e Rondinella. Imponente, caldo, avvolgente con spiccate note di amarena e cioccolato.",
    tastingNotes:
      'Amarena sciroppata, cioccolato fondente, spezie dolci e vaniglia.',
    foodPairing:
      'Carni rosse in umido, stufati, formaggio Monte Veronese e meditazione a fine pasto.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bot075',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 35.0,
        popular: true,
      },
    ],
  },
  {
    id: 'bot-3',
    name: 'VERMENTINO DI GALLURA SUPERIORE DOCG',
    producer: 'Tenuta Vigna Antica',
    origin: 'Arzachena (SS) - Sardegna',
    mainCategory: 'Vini in Bottiglia',
    type: 'Bianco',
    denomination: 'DOCG Vermentino di Gallura',
    alcohol: '13.5% Vol.',
    pricePerLiter: 21.33,
    rating: 4.8,
    reviewsCount: 15,
    image:
      'https://images.unsplash.com/photo-1566997250265-4424cf3e4787?auto=format&fit=crop&w=800&q=80',
    description:
      'Giallo dorato e brillante. Profilo aromatico intenso di macchia mediterranea, mirto, mandorla fresca ed un finale marino indimenticabile.',
    tastingNotes:
      'Fiori gialli, mirto bianco, rosmarino, pesca ed una spiccata nota salina.',
    foodPairing:
      'Grigliate di pesce, aragosta alla catalana, primi ai frutti di mare e pecorino fresco.',
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bot075',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 16.0,
        popular: true,
      },
    ],
  },
  {
    id: 'bot-4',
    name: 'FRANCIACORTA BRUT MILLESIMATO DOCG',
    producer: 'Cantina Franciacorta Selezione',
    origin: 'Erbusco (BS) - Lombardia',
    mainCategory: 'Vini in Bottiglia',
    type: 'Bollicine',
    denomination: 'DOCG Franciacorta',
    alcohol: '12.5% Vol.',
    pricePerLiter: 32.0,
    rating: 4.9,
    reviewsCount: 30,
    image:
      'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=800&q=80',
    description:
      'Metodo Classico affinato almeno 30 mesi sui lieviti. Perlage finissimo, aromi di crosta di pane tostata, mela verde ed agrumi.',
    tastingNotes:
      'Nocciola, lievito di pasticceria, mela renetta ed una freschezza vibrante.',
    foodPairing:
      "Aperitivi d'eccellenza, crudità di mare, fritture ed a tutto pasto nelle occasioni speciali.",
    allergens: 'Contiene Solfiti',
    formats: [
      {
        id: 'bot075',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 24.0,
        popular: true,
      },
    ],
  },

  // --- BIRRE & DISTILLATI ---
  {
    id: 'birra-1',
    name: 'BIRRA AGRICOLA BIONDA ARTIGIANALE',
    producer: 'Birrificio Contadino LoLe',
    origin: 'Lombardia',
    mainCategory: 'Birre & Distillati',
    type: 'Birra',
    denomination: 'Birra Agricola Non Filtrata',
    alcohol: '5.2% Vol.',
    pricePerLiter: 9.33,
    rating: 4.8,
    reviewsCount: 19,
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80',
    description:
      'Birra a bassa fermentazione, prodotta con orzo coltivato a km0. Bionda dorata, non filtrata, fresca con aromi floreali e mielati.',
    tastingNotes:
      'Miele di acacia, crosta di pane, luppolo nobile erbaceo e finale pulito.',
    foodPairing:
      'Pizza artigianale, hamburger, taglieri di salumi e formaggi di media stagionatura.',
    allergens: 'Contiene Glutine (Orzo)',
    formats: [
      {
        id: 'bir75',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 7.0,
        popular: true,
      },
    ],
  },
  {
    id: 'birra-2',
    name: "AMBER ALE ARTIGIANALE 'LOLE CRAFT'",
    producer: 'Birrificio Contadino LoLe',
    origin: 'Lombardia',
    mainCategory: 'Birre & Distillati',
    type: 'Birra',
    denomination: 'Birra Rossa Artigianale',
    alcohol: '6.5% Vol.',
    pricePerLiter: 11.0,
    rating: 4.9,
    reviewsCount: 14,
    image:
      'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80',
    description:
      'Birra ambrata ad alta fermentazione. Note calde di caramello, tostato e frutta secca bilanciate da un luppolo agrumato.',
    tastingNotes:
      "Caramello bruno, nocciola tostata, scorza d'arancia e malto ricchissimo.",
    foodPairing:
      'Carni alla griglia, formaggi erborinati, porchetta e focacce farcite.',
    allergens: 'Contiene Glutine (Orzo)',
    formats: [
      {
        id: 'bir50',
        name: 'Bottiglia 50 cl',
        liters: 0.5,
        price: 5.5,
        popular: true,
      },
    ],
  },
  {
    id: 'dist-1',
    name: 'GRAPPA DI AMARONE BARRICATA',
    producer: 'Distilleria Artigianale',
    origin: 'Veneto',
    mainCategory: 'Birre & Distillati',
    type: 'Distillati',
    denomination: 'Grappa Invecchiata',
    alcohol: '40% Vol.',
    pricePerLiter: 56.0,
    rating: 5.0,
    reviewsCount: 11,
    image:
      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80',
    description:
      'Distillata a bagnomaria da vinacce di Amarone e maturata 18 mesi in piccole botti di rovere. Colore ambrato e gusto vellutato.',
    tastingNotes: 'Uva passa, cacao, vaniglia dolce, cannella e legno antico.',
    foodPairing: 'Cioccolato fondente 70%, sigaro o come raffinato fine pasto.',
    allergens: 'Nessun allergene indicato',
    formats: [
      {
        id: 'dis50',
        name: 'Bottiglia 50 cl',
        liters: 0.5,
        price: 28.0,
        popular: true,
      },
    ],
  },

  // --- SFIZIOSITÀ & REGALI ---
  {
    id: 'food-1',
    name: 'OLIO EXTRA VERGINE DI OLIVA BIOLOGICO PUGLIESE',
    producer: 'Frantoio Tenute Buccoliero',
    origin: 'Sava (TA) - Puglia',
    mainCategory: 'Sfiziosità & Regali',
    type: 'Olio & Prodotti',
    denomination: 'EVO Biologico 100% Italiano',
    alcohol: '0% Vol.',
    pricePerLiter: 11.0,
    rating: 5.0,
    reviewsCount: 36,
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    description:
      'Olio estratto a freddo da olive Coratina ed Ogliarola. Gusto fruttato medio, con piacevoli note erbacee ed un pizzico piccante genuino.',
    tastingNotes:
      'Pomodoro verde, carciofo fresco, mandorla amara e finale fruttato intenso.',
    foodPairing:
      'A crudo su bruschette, insalate, carni alla griglia, zuppe di legumi e verdure.',
    allergens: 'Nessun allergene',
    formats: [
      {
        id: 'olio5l',
        name: 'Lattina 5 Litri',
        liters: 5,
        price: 55.0,
        popular: true,
      },
      {
        id: 'olio75',
        name: 'Bottiglia 75 cl',
        liters: 0.75,
        price: 12.0,
        popular: false,
      },
    ],
  },
  {
    id: 'food-2',
    name: "TARALLI ARTIGIANALI PUGLIESI ALL'OLIO EVO",
    producer: 'Panificio Tradizionale Pugliese',
    origin: 'Puglia',
    mainCategory: 'Sfiziosità & Regali',
    type: 'Olio & Prodotti',
    denomination: 'Prodotto Da Forno Artigianale',
    alcohol: '0% Vol.',
    pricePerLiter: 9.75,
    rating: 4.9,
    reviewsCount: 28,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description:
      "Taralli bolliti e poi infornati, fatti a mano secondo l'antica ricetta con farina di grano italiano e olio extra vergine di oliva.",
    tastingNotes:
      'Friabilità perfetta, profumo di grano e olio buono, fragranza irresistibile.',
    foodPairing:
      "L'accompagnamento ideale per aperitivi con il vino sfuso de La Cantina di LoLe.",
    allergens: 'Contiene Glutine',
    formats: [
      {
        id: 'tar400',
        name: 'Busta 400g',
        liters: 0.4,
        price: 3.9,
        popular: true,
      },
    ],
  },
  {
    id: 'gift-1',
    name: "CESTA DEGUSTAZIONE 'GUSTO & TRADIZIONE LOLE'",
    producer: 'Selezione La Cantina di LoLe',
    origin: 'Italia',
    mainCategory: 'Sfiziosità & Regali',
    type: 'Idee Regalo',
    denomination: 'Confezione Regalo Luxury',
    alcohol: 'Misto',
    pricePerLiter: 0,
    rating: 5.0,
    reviewsCount: 17,
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    description:
      'Elegante cesta in legno contenente: 1 Bag-in-Box 5L Rosso Secco Barricato, 1 Bottiglia Barolo DOCG, 1 Lattina Olio EVO 75cl e 2 buste di Taralli Artigianali.',
    tastingNotes:
      'Un viaggio completo nei sapori più genuini della nostra cantina.',
    foodPairing:
      "L'idea regalo perfetta per festività, ricorrenze o cene speciali.",
    allergens: 'Vedi singoli prodotti contenuti',
    formats: [
      {
        id: 'cesta1',
        name: 'Confezione Regalo Completa',
        liters: 1,
        price: 79.0,
        popular: true,
      },
    ],
  },
];

export default function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [currentTab, setCurrentTab] = useState('home'); // 'home' | 'catalog' | 'delivery' | 'story' | 'orders' | 'profile' | 'checkout' | 'confirmation'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFormatMap, setSelectedFormatMap] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Modals
  const [isSommelierModalOpen, setIsSommelierModalOpen] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] =
    useState('Tutti i Prodotti');
  const [selectedWineType, setSelectedWineType] = useState('Tutti');
  const [maxPrice, setMaxPrice] = useState(80.0);

  // Cart & Delivery Calculator State
  const [cart, setCart] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState('home_delivery'); // 'home_delivery' | 'store_pickup'
  const [selectedMunicipality, setSelectedMunicipality] =
    useState('Cusano Milanino');
  const [wishlist, setWishlist] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Checkout Form Details
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Cusano Milanino',
    postalCode: '20095',
    province: 'MI',
    notes: '',
    deliveryDay: 'Prima data utile',
  });
  const [paymentMethod, setPaymentMethod] = useState('delivery_pos'); // 'delivery_pos' | 'delivery_cash' | 'store_pickup_pay' | 'card_online'

  const [currentOrder, setCurrentOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const currentFasciaInfo = useMemo(() => {
    const found = DELIVERY_ZONES.find((zone) =>
      zone.towns.includes(selectedMunicipality)
    );
    return found || DELIVERY_ZONES[0];
  }, [selectedMunicipality]);

  const getSelectedFormat = (product) => {
    const formatId = selectedFormatMap[product.id] || product.formats[0].id;
    return product.formats.find((f) => f.id === formatId) || product.formats[0];
  };

  const handleFormatChange = (productId, formatId) => {
    setSelectedFormatMap((prev) => ({ ...prev, [productId]: formatId }));
  };

  const addToCart = (product, customFormat = null) => {
    const format = customFormat || getSelectedFormat(product);
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.format.id === format.id
      );
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prevCart, { product, format, quantity: 1 }];
    });
    showToast(`${product.name} (${format.name}) aggiunto al carrello!`);
  };

  const updateCartQty = (productId, formatId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId && item.format.id === formatId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId, formatId) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.product.id === productId && item.format.id === formatId)
      )
    );
    showToast('Prodotto rimosso dal carrello.');
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      showToast('Rimosso dai preferiti.');
    } else {
      setWishlist([...wishlist, product]);
      showToast('Aggiunto ai tuoi prodotti preferiti ❤️');
    }
  };

  const cartSubtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.format.price * item.quantity,
      0
    );
  }, [cart]);

  const discountVal = useMemo(() => {
    if (appliedDiscount <= 0) return 0;
    if (appliedDiscount < 1) return cartSubtotal * appliedDiscount;
    return Math.min(appliedDiscount, cartSubtotal);
  }, [cartSubtotal, appliedDiscount]);

  const deliveryThresholdMet = useMemo(() => {
    if (deliveryMethod === 'store_pickup') return true;
    return cartSubtotal >= currentFasciaInfo.minSpend;
  }, [cartSubtotal, deliveryMethod, currentFasciaInfo]);

  const amountNeededForFreeDelivery = useMemo(() => {
    if (deliveryMethod === 'store_pickup') return 0;
    return Math.max(0, currentFasciaInfo.minSpend - cartSubtotal);
  }, [cartSubtotal, deliveryMethod, currentFasciaInfo]);

  const cartTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - discountVal);
  }, [cartSubtotal, discountVal]);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'LOLE10') {
      setAppliedDiscount(0.1);
      showToast('Sconto del 10% applicato con successo!');
    } else if (code === 'BENVENUTO5') {
      setAppliedDiscount(5.0);
      showToast('Sconto fisso di € 5,00 applicato!');
    } else {
      showToast('Codice promozionale non valido. Prova LOLE10');
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedMainCategory === 'Tutti i Prodotti' ||
        product.mainCategory === selectedMainCategory;

      const matchesType =
        selectedWineType === 'Tutti' || product.type === selectedWineType;

      const currentFormatPrice = getSelectedFormat(product).price;
      const matchesPrice = currentFormatPrice <= maxPrice;

      return matchesSearch && matchesCategory && matchesType && matchesPrice;
    });
  }, [
    searchQuery,
    selectedMainCategory,
    selectedWineType,
    maxPrice,
    selectedFormatMap,
  ]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (deliveryMethod === 'home_delivery' && !deliveryThresholdMet) {
      showToast(
        `Attenzione: Per ${selectedMunicipality} la spesa minima d'ordine è € ${currentFasciaInfo.minSpend.toFixed(
          2
        )}.`
      );
      return;
    }

    const orderId = `LOLE-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('it-IT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      items: [...cart],
      total: cartTotal,
      deliveryMethod: deliveryMethod,
      municipality: selectedMunicipality,
      shippingAddress:
        deliveryMethod === 'store_pickup'
          ? `Ritiro in Negozio - ${STORE_ADDRESS}`
          : `${shippingDetails.address}, ${shippingDetails.city} (${shippingDetails.province})`,
      paymentMethod:
        paymentMethod === 'delivery_pos'
          ? 'POS / Carta alla Consegna'
          : paymentMethod === 'delivery_cash'
          ? 'Contanti alla Consegna'
          : paymentMethod === 'store_pickup_pay'
          ? 'In Negozio al Ritiro'
          : 'Carta Online',
      status:
        deliveryMethod === 'store_pickup'
          ? 'Pronto per il Ritiro in Negozio'
          : 'In Consegna a Domicilio',
    };

    setCurrentOrder(newOrder);
    setOrderHistory([newOrder, ...orderHistory]);
    setCart([]);
    setCurrentTab('confirmation');
    showToast('Ordine registrato con successo!');
  };

  const getWhatsAppOrderLink = () => {
    if (!currentOrder) return '#';
    let text = `Ciao *La Cantina di LoLe*! 🍷\nHo appena effettuato l'ordine *${currentOrder.id}* tramite l'App.\n\n*Dettagli Ordine:*\n`;
    currentOrder.items.forEach((item) => {
      text += `• ${item.product.name} (${item.format.name}) x${
        item.quantity
      } - €${(item.format.price * item.quantity).toFixed(2)}\n`;
    });
    text += `\n*Totale Ordine:* €${currentOrder.total.toFixed(
      2
    )}\n*Modalità:* ${
      currentOrder.deliveryMethod === 'store_pickup'
        ? 'Ritiro in Via Omodei 3'
        : 'Consegna a Domicilio a ' + currentOrder.municipality
    }\n*Pagamento:* ${currentOrder.paymentMethod}\n*Cliente:* ${
      shippingDetails.firstName
    } ${shippingDetails.lastName} - Tel: ${shippingDetails.phone}`;

    return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2B140A] font-sans flex flex-col antialiased selection:bg-[#70141a] selection:text-[#F4EADA] pb-20 md:pb-0">
      {}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#2B140A] text-[#F4EADA] px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border-2 border-[#C59B4E] transition-all animate-bounce text-xs font-bold">
          <Wine className="w-4 h-4 text-[#C59B4E] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {}
      {!isAgeVerified && (
        <div className="fixed inset-0 z-50 bg-[#1B1311]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FBF8F3] rounded-3xl max-w-md w-full p-6 text-center space-y-6 shadow-2xl border-2 border-[#C59B4E] relative">
            <div className="p-4 bg-[#F4EADA] rounded-2xl border border-[#C59B4E]/30 flex justify-center items-center">
              <img
                src={LOGO_URL}
                alt={STORE_NAME}
                className="max-h-20 w-auto object-contain"
              />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#70141a] bg-[#70141a]/10 px-3 py-1 rounded-full">
                Controllo Età Legale (18+)
              </span>
              <h2 className="text-xl font-serif font-bold text-[#2B140A] pt-2">
                Benvenuto a La Cantina di LoLe
              </h2>
              <p className="text-xs text-[#3a1c10] leading-relaxed">
                Per acquistare i nostri vini sfusi, in bottiglia, birre
                artigianali e distillati, conferma di aver compiuto 18 anni.
              </p>
            </div>

            <div className="p-3 bg-[#EFE6D5] rounded-2xl text-[11px] text-[#2B140A] flex items-center justify-center space-x-2 border border-[#C59B4E]/40">
              <MapPin className="w-4 h-4 text-[#70141a] shrink-0" />
              <span className="font-semibold">{STORE_ADDRESS}</span>
            </div>

            <div className="flex flex-col space-y-2.5 pt-1">
              <button
                onClick={() => {
                  setIsAgeVerified(true);
                  showToast('Benvenuto su La Cantina di LoLe!');
                }}
                className="w-full bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA] font-bold py-3.5 px-4 rounded-xl text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-4 h-4 text-[#C59B4E]" />
                <span>Dichiaro di avere 18 o più Anni — Entra</span>
              </button>

              <button
                onClick={() =>
                  alert(
                    "L'accesso alla vendita di alcolici è riservato ai maggiorenni ai sensi di legge."
                  )
                }
                className="w-full bg-transparent hover:bg-[#EFE6D5] text-[#3a1c10] font-semibold py-2 px-3 rounded-xl text-[11px]"
              >
                Non ho ancora 18 anni
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <div className="bg-[#1B1311] text-[#EFE6D5] text-[11px] py-2 px-4 border-b border-[#C59B4E]/30 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2 mx-auto md:mx-0">
          <MapPin className="w-3.5 h-3.5 text-[#C59B4E]" />
          <span>
            Bottega: <strong>{STORE_ADDRESS}</strong>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href={`https://wa.me/${WHATSAPP_RAW}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-[#C59B4E] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-500" />
            <span>
              WhatsApp Ordini: <strong>{STORE_WHATSAPP}</strong>
            </span>
          </a>
          <a
            href={`tel:${STORE_PHONE}`}
            className="flex items-center space-x-1 hover:text-[#C59B4E] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B4E]" />
            <span>
              Chiamaci: <strong>{STORE_PHONE}</strong>
            </span>
          </a>
        </div>
      </div>

      {}
      <header className="sticky top-0 z-30 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E2D4C0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo & Tagline */}
          <button
            onClick={() => setCurrentTab('home')}
            className="flex items-center space-x-3 text-left"
          >
            <img
              src={LOGO_URL}
              alt={STORE_NAME}
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <div className="hidden sm:block border-l border-[#C59B4E]/40 pl-3">
              <span className="font-serif font-bold text-sm tracking-wide text-[#70141a] block uppercase">
                {STORE_NAME}
              </span>
              <span className="text-[10px] text-[#3a1c10]/80 italic">
                {STORE_TAGLINE}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-[#3a1c10]">
            <button
              onClick={() => setCurrentTab('home')}
              className={
                currentTab === 'home'
                  ? 'text-[#70141a] border-b-2 border-[#70141a] pb-1'
                  : 'hover:text-[#70141a]'
              }
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentTab('catalog');
                setSelectedMainCategory('Tutti i Prodotti');
              }}
              className={
                currentTab === 'catalog' &&
                selectedMainCategory === 'Tutti i Prodotti'
                  ? 'text-[#70141a] border-b-2 border-[#70141a] pb-1'
                  : 'hover:text-[#70141a]'
              }
            >
              Catalogo Completo
            </button>
            <button
              onClick={() => {
                setCurrentTab('catalog');
                setSelectedMainCategory('Vini Sfusi & Bag-in-Box');
              }}
              className={
                selectedMainCategory === 'Vini Sfusi & Bag-in-Box'
                  ? 'text-[#70141a] border-b-2 border-[#70141a] pb-1'
                  : 'hover:text-[#70141a]'
              }
            >
              Vini Sfusi
            </button>
            <button
              onClick={() => setCurrentTab('delivery')}
              className={
                currentTab === 'delivery'
                  ? 'text-[#70141a] border-b-2 border-[#70141a] pb-1'
                  : 'hover:text-[#70141a]'
              }
            >
              Calcolatore Consegne
            </button>
            <button
              onClick={() => setCurrentTab('story')}
              className={
                currentTab === 'story'
                  ? 'text-[#70141a] border-b-2 border-[#70141a] pb-1'
                  : 'hover:text-[#70141a]'
              }
            >
              La Nostra Storia
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
                'Ciao La Cantina di LoLe! Vorrei informazioni sui vini sfusi e disponibilità.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex bg-emerald-700 hover:bg-emerald-800 text-white p-2.5 rounded-2xl shadow-sm text-xs font-bold items-center space-x-1.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ordina via WhatsApp</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA] p-2.5 rounded-2xl shadow-md transition-all active:scale-95 flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5 text-[#C59B4E]" />
              <span className="hidden sm:inline text-xs font-bold uppercase">
                Carrello
              </span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C59B4E] text-[#2B140A] font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FBF8F3]">
                  {cart.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {/* ==================== HOME PAGE TAB ==================== */}
        {currentTab === 'home' && (
          <div className="space-y-10">
            {/* HERO BANNER - INSPIRED BY LACANTINADILOLE.IT */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1B1311] via-[#2B140A] to-[#5A0F1D] text-[#F4EADA] p-8 sm:p-12 border-b-4 border-[#C59B4E] shadow-2xl">
              <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none">
                <Wine className="w-96 h-96 text-[#C59B4E]" />
              </div>

              <div className="max-w-2xl space-y-5 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-[#C59B4E]/20 text-[#C59B4E] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#C59B4E]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Servizio Consegne a Domicilio Attivo</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FBF8F3] leading-tight">
                  Stai comodo a Casa,
                  <br />
                  <span className="text-[#C59B4E]">
                    il vino Sfuso lo portiamo noi!
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-[#EFE6D5] leading-relaxed">
                  I migliori vini artigianali italiani sfusi, in confezione
                  Bag-in-Box ecologica e bottiglie selezionate. Consegniamo dal
                  Lunedì al Sabato a Cusano Milanino, Paderno Dugnano, Monza,
                  Milano e Comuni limitrofi.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => {
                      setCurrentTab('catalog');
                      setSelectedMainCategory('Vini Sfusi & Bag-in-Box');
                    }}
                    className="bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA] font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
                  >
                    <Wine className="w-4 h-4 text-[#C59B4E]" />
                    <span>Scopri i Vini Sfusi</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('delivery')}
                    className="bg-[#EFE6D5] hover:bg-white text-[#2B140A] font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
                  >
                    <Truck className="w-4 h-4 text-[#70141a]" />
                    <span>Verifica Consegna nel tuo Comune</span>
                  </button>
                </div>
              </div>
            </div>

            {/* QUICK HIGHLIGHT FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#F4EADA] p-5 rounded-2xl border border-[#C59B4E]/30 flex items-start space-x-3">
                <Truck className="w-8 h-8 text-[#70141a] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B140A]">
                    Consegna Diretta
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    Portiamo la spesa direttamente alla tua porta di casa.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4EADA] p-5 rounded-2xl border border-[#C59B4E]/30 flex items-start space-x-3">
                <CreditCard className="w-8 h-8 text-[#70141a] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B140A]">
                    Pagamento POS
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    Paga comodamente alla consegna con carta, bancomat o
                    contanti.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4EADA] p-5 rounded-2xl border border-[#C59B4E]/30 flex items-start space-x-3">
                <Award className="w-8 h-8 text-[#70141a] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B140A]">
                    Piccole Cantine
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    Selezioniamo solo produttori artigianali d'eccellenza.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4EADA] p-5 rounded-2xl border border-[#C59B4E]/30 flex items-start space-x-3">
                <Store className="w-8 h-8 text-[#70141a] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B140A]">
                    Ritiro Gratuito
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    Ordina online e ritira subito in Via Omodei 3 a Cusano
                    Milanino.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURED WINES PREVIEW */}
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-[#E2D4C0] pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#70141a] block">
                    Selezione della Cantina
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#2B140A]">
                    I Vini Sfusi Più Apprezzati
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentTab('catalog')}
                  className="text-xs font-bold text-[#70141a] hover:underline flex items-center space-x-1"
                >
                  <span>Vedi Tutti</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCT_CATALOG.slice(0, 3).map((wine) => (
                  <div
                    key={wine.id}
                    className="bg-[#FBF8F3] rounded-3xl border border-[#E2D4C0] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <div className="relative h-48 bg-[#EFE6D5] overflow-hidden">
                      <img
                        src={wine.image}
                        alt={wine.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#70141a] text-[#F4EADA] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                        {wine.type}
                      </span>
                    </div>

                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#C59B4E] uppercase block">
                          {wine.producer} • {wine.origin}
                        </span>
                        <h3 className="font-serif font-bold text-base text-[#2B140A] uppercase">
                          {wine.name}
                        </h3>
                        <p className="text-xs text-[#3a1c10]/80 line-clamp-2 mt-1">
                          {wine.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E2D4C0] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-[#3a1c10]/70 block">
                            Da soli:
                          </span>
                          <span className="font-extrabold text-sm text-[#70141a]">
                            €{wine.pricePerLiter.toFixed(2)} / Litro
                          </span>
                        </div>
                        <button
                          onClick={() => addToCart(wine)}
                          className="bg-[#70141a] text-[#F4EADA] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#8c1c24] transition-all flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Acquista</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTEGRATED MUNICIPALITY DELIVERY CALCULATOR PREVIEW */}
            <div className="bg-[#F4EADA] p-6 sm:p-8 rounded-3xl border-2 border-[#C59B4E] space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-[#70141a]" />
                <h3 className="text-xl font-serif font-bold text-[#2B140A]">
                  Verifica Rapida Fascia di Consegna
                </h3>
              </div>

              <p className="text-xs text-[#3a1c10]">
                Seleziona il tuo comune per scoprire la soglia di spesa minima e
                le condizioni di consegna a domicilio:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={selectedMunicipality}
                  onChange={(e) => setSelectedMunicipality(e.target.value)}
                  className="flex-1 bg-[#FBF8F3] border border-[#C59B4E] text-xs font-bold text-[#2B140A] p-3 rounded-xl focus:outline-none"
                >
                  {DELIVERY_ZONES.flatMap((zone) => zone.towns)
                    .sort()
                    .map((town) => (
                      <option key={town} value={town}>
                        {town}
                      </option>
                    ))}
                </select>

                <button
                  onClick={() => setCurrentTab('delivery')}
                  className="bg-[#70141a] text-[#F4EADA] font-bold px-6 py-3 rounded-xl text-xs uppercase"
                >
                  Mostra Dettagli Fascia
                </button>
              </div>

              <div className="p-3 bg-[#FBF8F3] rounded-xl text-xs flex justify-between items-center border border-[#E2D4C0]">
                <span>
                  Comune selezionato: <strong>{selectedMunicipality}</strong>
                </span>
                <span className="font-bold text-[#70141a]">
                  {currentFasciaInfo.minSpend === 0
                    ? 'Nessuna Spesa Minima!'
                    : `Spesa Minima: € ${currentFasciaInfo.minSpend.toFixed(
                        2
                      )}`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CATALOG TAB ==================== */}
        {currentTab === 'catalog' && (
          <div className="space-y-6">
            {/* Catalog Banner */}
            <div className="bg-[#1B1311] text-[#F4EADA] p-6 rounded-3xl border-b-4 border-[#C59B4E] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B4E]">
                Qualità & Passione Artigianale
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F3]">
                Catalogo Prodotti La Cantina di LoLe
              </h1>
              <p className="text-xs text-[#EFE6D5]">
                Sfoglia le nostre selezioni di Vini Sfusi, Bag-in-Box, Bottiglie
                pregiate, Birre artigianali ed idee regalo.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {MAIN_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedMainCategory(cat)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                    selectedMainCategory === cat
                      ? 'bg-[#70141a] text-[#F4EADA] shadow-md scale-105'
                      : 'bg-[#F4EADA] text-[#3a1c10] hover:bg-[#EFE6D5] border border-[#C59B4E]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter Drawer & Search Bar */}
            <div className="bg-[#F4EADA] p-4 rounded-2xl border border-[#E2D4C0] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Search Input */}
                <div className="relative sm:col-span-2">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#3a1c10]/60" />
                  <input
                    type="text"
                    placeholder="Cerca per nome vino, produttore o regione..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FBF8F3] border border-[#C59B4E]/40 text-xs text-[#2B140A] focus:outline-none"
                  />
                </div>

                {/* Wine Type Filter */}
                <select
                  value={selectedWineType}
                  onChange={(e) => setSelectedWineType(e.target.value)}
                  className="bg-[#FBF8F3] border border-[#C59B4E]/40 text-xs font-bold text-[#2B140A] py-2.5 px-3 rounded-xl focus:outline-none"
                >
                  <option value="Tutti">
                    Tutti i Tipi (Rosso, Bianco, Rosato...)
                  </option>
                  <option value="Rosso">Solo Vini Rossi</option>
                  <option value="Bianco">Solo Vini Bianchi</option>
                  <option value="Rosato">Solo Vini Rosati</option>
                  <option value="Birra">Birre Artigianali</option>
                  <option value="Distillati">Distillati & Grappe</option>
                  <option value="Olio & Prodotti">Olio & Sfiziosità</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const currentFormat = getSelectedFormat(product);
                const isWishlisted = wishlist.some((w) => w.id === product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-[#FBF8F3] rounded-3xl border border-[#E2D4C0] shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden relative"
                  >
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#FBF8F3]/90 text-[#70141a] hover:scale-110 transition-transform shadow-sm"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-[#70141a]' : ''
                        }`}
                      />
                    </button>

                    {/* Image & Badge */}
                    <div className="relative h-44 bg-[#EFE6D5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <span className="bg-[#1B1311]/90 text-[#F4EADA] text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                          {product.alcohol}
                        </span>
                        <span className="bg-[#70141a]/90 text-[#F4EADA] text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                          {product.denomination}
                        </span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#C59B4E] uppercase tracking-wider block">
                          {product.producer} • {product.origin}
                        </span>
                        <h3 className="font-serif font-bold text-sm text-[#2B140A] uppercase">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#3a1c10]/80 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Format Selector Box */}
                      <div className="space-y-1.5 bg-[#F4EADA] p-2.5 rounded-2xl border border-[#C59B4E]/30">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#70141a] block">
                          Seleziona Formato:
                        </label>
                        <select
                          value={currentFormat.id}
                          onChange={(e) =>
                            handleFormatChange(product.id, e.target.value)
                          }
                          className="w-full bg-[#FBF8F3] border border-[#C59B4E]/40 text-xs font-bold text-[#2B140A] rounded-xl py-1.5 px-2 focus:outline-none"
                        >
                          {product.formats.map((f) => (
                            <option key={f.id} value={f.id}>
                              {f.name} — €{f.price.toFixed(2)}
                            </option>
                          ))}
                        </select>

                        {product.pricePerLiter > 0 && (
                          <div className="flex justify-between items-center text-[11px] pt-1">
                            <span className="text-[#3a1c10]/70">
                              Prezzo al litro:
                            </span>
                            <span className="font-extrabold text-[#70141a]">
                              €{product.pricePerLiter.toFixed(2)} / L
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center space-x-2 pt-1">
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsSommelierModalOpen(true);
                          }}
                          className="p-2 rounded-xl bg-[#EFE6D5] text-[#70141a] hover:bg-[#E2D4C0]"
                          title="Scheda Sommelier"
                        >
                          <Info className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA] py-2.5 px-3 rounded-xl font-bold text-xs shadow transition-all active:scale-95 flex items-center justify-center space-x-1.5"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>
                            Aggiungi • €{currentFormat.price.toFixed(2)}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== DELIVERY CALCULATOR TAB ==================== */}
        {currentTab === 'delivery' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-[#1B1311] text-[#F4EADA] p-6 rounded-3xl border-b-4 border-[#C59B4E] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B4E]">
                Servizio Domicilio La Cantina di LoLe
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F3]">
                Calcolatore Fasce & Spesa Minima Consegna
              </h1>
              <p className="text-xs text-[#EFE6D5]">
                Consegniamo il vino sfuso in Bag-in-Box e bottiglie direttamente
                a casa tua dal Lunedì al Sabato, anche con pagamento via POS
                wireless alla consegna!
              </p>
            </div>

            {/* Interactive Search Tool */}
            <div className="bg-[#F4EADA] p-6 rounded-3xl border-2 border-[#C59B4E] space-y-5">
              <h3 className="font-serif font-bold text-lg text-[#2B140A] flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#70141a]" />
                <span>Seleziona il tuo Comune di Residenza</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#70141a] block mb-1">
                    Scegli dalla lista:
                  </label>
                  <select
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                    className="w-full bg-[#FBF8F3] border-2 border-[#C59B4E] p-3 rounded-xl text-xs font-bold text-[#2B140A] focus:outline-none"
                  >
                    {DELIVERY_ZONES.flatMap((zone) => zone.towns)
                      .sort()
                      .map((town) => (
                        <option key={town} value={town}>
                          {town}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="bg-[#FBF8F3] p-4 rounded-xl border border-[#E2D4C0] flex flex-col justify-center space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#70141a]">
                    {currentFasciaInfo.label}
                  </span>
                  <span className="text-xl font-bold text-[#2B140A]">
                    {currentFasciaInfo.minSpend === 0
                      ? 'Nessuna Spesa Minima Richiesta!'
                      : `Minimo d'ordine: € ${currentFasciaInfo.minSpend.toFixed(
                          2
                        )}`}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Consegna Gratuita al raggiungimento della soglia
                  </span>
                </div>
              </div>
            </div>

            {/* FULL FASCIE TABLE */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#2B140A]">
                Tutte le Fasce di Consegna Dettagliate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DELIVERY_ZONES.map((zone) => (
                  <div
                    key={zone.fascia}
                    className={`p-5 rounded-2xl border transition-all ${
                      zone.towns.includes(selectedMunicipality)
                        ? 'bg-[#F4EADA] border-2 border-[#70141a] shadow-md'
                        : 'bg-[#FBF8F3] border-[#E2D4C0]'
                    }`}
                  >
                    <div className="flex justify-between items-center border-b border-[#E2D4C0] pb-2 mb-3">
                      <h4 className="font-serif font-bold text-sm text-[#70141a]">
                        {zone.label}
                      </h4>
                      <span className="text-xs font-extrabold bg-[#70141a] text-[#F4EADA] px-2.5 py-0.5 rounded-full">
                        {zone.minSpend === 0
                          ? 'Min. € 0,00'
                          : `Min. € ${zone.minSpend.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {zone.towns.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${
                            t === selectedMunicipality
                              ? 'bg-[#70141a] text-[#F4EADA] font-bold'
                              : 'bg-[#EFE6D5] text-[#2B140A]'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== OUR STORY TAB (FROM LACANTINADILOLE.IT) ==================== */}
        {currentTab === 'story' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-[#1B1311] text-[#F4EADA] p-8 rounded-3xl border-b-4 border-[#C59B4E] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B4E]">
                La Nostra Filosofia
              </span>
              <h1 className="text-3xl font-serif font-bold text-[#FBF8F3]">
                La Storia de La Cantina di LoLe
              </h1>
              <p className="text-xs text-[#EFE6D5] leading-relaxed">
                Dal cuore di Cusano Milanino alla ricerca appassionata delle
                migliori cantine artigianali d'Italia.
              </p>
            </div>

            <div className="bg-[#FBF8F3] p-8 rounded-3xl border border-[#E2D4C0] space-y-6 text-sm leading-relaxed text-[#3a1c10]">
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-xl text-[#70141a]">
                  Un Viaggio tra Passione e Territorio
                </h3>
                <p>
                  <strong>La Cantina di LoLe</strong> nasce dal desiderio
                  profondo di portare sulla tavola di tutti i giorni vini
                  autentici, genuini e ricchi di storia. La nostra selezione
                  parte dalla ricerca diretta di{' '}
                  <strong>piccole cantine artigianali</strong> a tiratura
                  limitata, distribuite nelle regioni a maggior vocazione
                  vitivinicola d'Italia: dalla Lombardia al Piemonte, dal Veneto
                  alla Puglia.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E2D4C0]">
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-[#2B140A] flex items-center space-x-2">
                    <Award className="w-5 h-5 text-[#C59B4E]" />
                    <span>Qualità & Unicità del Vino Sfuso</span>
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    Crediamo fermamente che il vino sfuso possa raggiungere
                    vette di eccellenza pari alle grandi bottiglie. Con la
                    confezione Bag-in-Box, garantiamo la perfetta conservazione
                    del vino sottovuoto, mantenendo intatte la freschezza e le
                    proprietà organolettiche fino all'ultimo bicchiere.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-[#2B140A] flex items-center space-x-2">
                    <Utensils className="w-5 h-5 text-[#C59B4E]" />
                    <span>Abbinamenti Culinari & Accoglienza</span>
                  </h4>
                  <p className="text-xs text-[#3a1c10]/80">
                    In bottega ad accogliervi troverete sempre un consiglio
                    esperto per abbinare al meglio ciascun vino alle vostre
                    ricette preferite, ai formaggi tipici o ai salumi
                    artigianali della nostra selezione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ORDERS HISTORY TAB ==================== */}
        {currentTab === 'orders' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#2B140A]">
              I Tuoi Ordini Effettuati
            </h2>

            {orderHistory.length === 0 ? (
              <div className="bg-[#F4EADA] rounded-3xl p-10 text-center space-y-4 border border-[#E2D4C0]">
                <Package className="w-12 h-12 text-[#70141a] mx-auto opacity-30" />
                <p className="text-xs font-semibold text-[#3a1c10]">
                  Non hai ancora effettuato ordini recenti in questa sessione.
                </p>
                <button
                  onClick={() => setCurrentTab('catalog')}
                  className="bg-[#70141a] text-[#F4EADA] px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  Inizia gli Acquisti nel Catalogo
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {orderHistory.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-[#FBF8F3] p-6 rounded-3xl border border-[#E2D4C0] space-y-4 shadow-sm"
                  >
                    <div className="flex justify-between items-center border-b border-[#E2D4C0] pb-3 text-xs">
                      <div>
                        <span className="font-mono font-bold text-[#70141a] block text-sm">
                          {ord.id}
                        </span>
                        <span className="text-[#3a1c10]/70">{ord.date}</span>
                      </div>
                      <span className="bg-[#C59B4E]/20 text-[#2B140A] px-3 py-1 rounded-full font-bold text-xs border border-[#C59B4E]/40">
                        {ord.status}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {ord.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-[#3a1c10]"
                        >
                          <span>
                            {item.product.name} ({item.format.name}) x
                            {item.quantity}
                          </span>
                          <span className="font-bold">
                            €{(item.format.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-[#E2D4C0] text-xs font-bold">
                      <span>Totale Saldato:</span>
                      <span className="text-[#70141a] text-base">
                        €{ord.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== STORE CONTACTS & HOURS TAB ==================== */}
        {currentTab === 'profile' && (
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="bg-[#F4EADA] p-6 rounded-3xl border border-[#E2D4C0] text-center space-y-3">
              <img
                src={LOGO_URL}
                alt={STORE_NAME}
                className="h-20 w-auto mx-auto object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-[#2B140A]">
                  {STORE_NAME}
                </h3>
                <p className="text-xs text-[#3a1c10]">{STORE_TAGLINE}</p>
              </div>
            </div>

            <div className="bg-[#FBF8F3] p-5 rounded-3xl border border-[#E2D4C0] space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#70141a] uppercase tracking-wider flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Indirizzo & Contatti Diretti</span>
              </h4>
              <div className="text-xs space-y-2 text-[#3a1c10]">
                <p>
                  📍 <strong>Indirizzo Bottega:</strong> {STORE_ADDRESS}
                </p>
                <p>
                  📞 <strong>Telefono Fisso:</strong> {STORE_PHONE}
                </p>
                <p>
                  💬 <strong>WhatsApp Ordini:</strong> {STORE_WHATSAPP}
                </p>
                <p>
                  📧 <strong>Email:</strong> {STORE_EMAIL}
                </p>
              </div>
            </div>

            <div className="bg-[#FBF8F3] p-5 rounded-3xl border border-[#E2D4C0] space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#70141a] uppercase tracking-wider flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Orari di Apertura Negozio</span>
              </h4>
              <div className="space-y-2 text-xs">
                {OPENING_HOURS.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-[#E2D4C0] pb-1 text-[#3a1c10]"
                  >
                    <span className="font-semibold">{h.day}:</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CHECKOUT TAB ==================== */}
        {currentTab === 'checkout' && (
          <div className="max-w-xl mx-auto space-y-6 bg-[#FBF8F3] p-6 rounded-3xl border border-[#E2D4C0]">
            <div className="flex items-center space-x-2 border-b border-[#E2D4C0] pb-3">
              <button
                onClick={() => setCurrentTab('catalog')}
                className="p-1.5 rounded-xl bg-[#F4EADA]"
              >
                <ArrowLeft className="w-4 h-4 text-[#2B140A]" />
              </button>
              <h2 className="text-lg font-serif font-bold text-[#2B140A]">
                Checkout Ordine
              </h2>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#70141a]">
                  1. Dati del Cliente
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Nome"
                    value={shippingDetails.firstName}
                    onChange={(e) =>
                      setShippingDetails({
                        ...shippingDetails,
                        firstName: e.target.value,
                      })
                    }
                    className="p-2.5 bg-[#F4EADA] rounded-xl text-xs border border-[#C59B4E]/40 focus:outline-none"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Cognome"
                    value={shippingDetails.lastName}
                    onChange={(e) =>
                      setShippingDetails({
                        ...shippingDetails,
                        lastName: e.target.value,
                      })
                    }
                    className="p-2.5 bg-[#F4EADA] rounded-xl text-xs border border-[#C59B4E]/40 focus:outline-none"
                  />
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Telefono Cellulare per Consegna"
                  value={shippingDetails.phone}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      phone: e.target.value,
                    })
                  }
                  className="w-full p-2.5 bg-[#F4EADA] rounded-xl text-xs border border-[#C59B4E]/40 focus:outline-none"
                />
              </div>

              {deliveryMethod === 'home_delivery' && (
                <div className="space-y-3 pt-2 border-t border-[#E2D4C0]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#70141a]">
                    2. Indirizzo di Consegna
                  </h3>
                  <input
                    required
                    type="text"
                    placeholder="Via / Piazza e Numero Civico"
                    value={shippingDetails.address}
                    onChange={(e) =>
                      setShippingDetails({
                        ...shippingDetails,
                        address: e.target.value,
                      })
                    }
                    className="w-full p-2.5 bg-[#F4EADA] rounded-xl text-xs border border-[#C59B4E]/40 focus:outline-none"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-[#3a1c10] block mb-1">
                        Comune Selezionato:
                      </label>
                      <select
                        value={selectedMunicipality}
                        onChange={(e) =>
                          setSelectedMunicipality(e.target.value)
                        }
                        className="w-full p-2.5 bg-[#F4EADA] rounded-xl text-xs font-bold border border-[#C59B4E]/40 focus:outline-none"
                      >
                        {DELIVERY_ZONES.flatMap((zone) => zone.towns)
                          .sort()
                          .map((town) => (
                            <option key={town} value={town}>
                              {town}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-[#3a1c10] block mb-1">
                        Note per il Fattorino:
                      </label>
                      <input
                        type="text"
                        placeholder="Piano, Citofono..."
                        value={shippingDetails.notes}
                        onChange={(e) =>
                          setShippingDetails({
                            ...shippingDetails,
                            notes: e.target.value,
                          })
                        }
                        className="w-full p-2.5 bg-[#F4EADA] rounded-xl text-xs border border-[#C59B4E]/40 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-2 border-t border-[#E2D4C0]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#70141a]">
                  3. Modalità di Pagamento
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('delivery_pos')}
                    className={`p-3 rounded-xl border text-xs font-bold text-center ${
                      paymentMethod === 'delivery_pos'
                        ? 'bg-[#70141a] text-[#F4EADA]'
                        : 'bg-[#F4EADA] text-[#2B140A]'
                    }`}
                  >
                    POS / Carta alla Consegna
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('delivery_cash')}
                    className={`p-3 rounded-xl border text-xs font-bold text-center ${
                      paymentMethod === 'delivery_cash'
                        ? 'bg-[#70141a] text-[#F4EADA]'
                        : 'bg-[#F4EADA] text-[#2B140A]'
                    }`}
                  >
                    Contanti alla Consegna
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA] font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg"
              >
                Conferma & Invia Ordine • €{cartTotal.toFixed(2)}
              </button>
            </form>
          </div>
        )}

        {/* ==================== ORDER CONFIRMATION TAB ==================== */}
        {currentTab === 'confirmation' && currentOrder && (
          <div className="max-w-md mx-auto text-center space-y-6 bg-[#FBF8F3] p-6 rounded-3xl border-2 border-[#C59B4E]">
            <div className="w-16 h-16 bg-[#70141a] text-[#F4EADA] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-[#C59B4E]" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-serif font-bold text-[#2B140A]">
                Ordine Inviato!
              </h2>
              <p className="text-xs text-[#3a1c10]">
                Codice Riferimento:{' '}
                <strong className="text-[#70141a] font-mono">
                  {currentOrder.id}
                </strong>
              </p>
            </div>

            <div className="bg-[#F4EADA] p-4 rounded-2xl border border-[#E2D4C0] text-left text-xs space-y-2">
              <p>
                📍 <strong>Destinazione:</strong> {currentOrder.shippingAddress}
              </p>
              <p>
                💳 <strong>Pagamento:</strong> {currentOrder.paymentMethod}
              </p>
              <p className="font-bold text-[#70141a] text-sm pt-2 border-t border-[#E2D4C0]">
                Totale da Saldare: €{currentOrder.total.toFixed(2)}
              </p>
            </div>

            {/* DIRECT WHATSAPP ACTION BUTTON */}
            <a
              href={getWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Invia la ricevuta su WhatsApp al Negozio</span>
            </a>

            <button
              onClick={() => setCurrentTab('catalog')}
              className="w-full bg-[#70141a] text-[#F4EADA] font-bold py-3 rounded-xl text-xs uppercase"
            >
              Torna al Catalogo
            </button>
          </div>
        )}
      </main>

      {}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end">
          <div className="bg-[#FBF8F3] max-w-md w-full h-full flex flex-col shadow-2xl border-l border-[#C59B4E]">
            <div className="p-4 bg-[#1B1311] text-[#F4EADA] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#C59B4E]" />
                <h3 className="font-serif font-bold text-sm">
                  Il Tuo Carrello Ordini
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery Method & Municipality selector */}
            <div className="p-3 bg-[#F4EADA] border-b border-[#E2D4C0] space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDeliveryMethod('home_delivery')}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border ${
                    deliveryMethod === 'home_delivery'
                      ? 'bg-[#70141a] text-[#F4EADA] border-[#70141a]'
                      : 'bg-[#FBF8F3] text-[#3a1c10]'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Consegna Domicilio</span>
                </button>

                <button
                  onClick={() => setDeliveryMethod('store_pickup')}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border ${
                    deliveryMethod === 'store_pickup'
                      ? 'bg-[#70141a] text-[#F4EADA] border-[#70141a]'
                      : 'bg-[#FBF8F3] text-[#3a1c10]'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Ritiro in Negozio</span>
                </button>
              </div>

              {deliveryMethod === 'home_delivery' && (
                <div className="pt-2">
                  <label className="text-[10px] font-bold text-[#70141a] uppercase block mb-1">
                    Comune di Consegna:
                  </label>
                  <select
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                    className="w-full bg-[#FBF8F3] border border-[#C59B4E] text-xs font-bold text-[#2B140A] py-1.5 px-2 rounded-xl focus:outline-none"
                  >
                    {DELIVERY_ZONES.flatMap((zone) => zone.towns)
                      .sort()
                      .map((town) => (
                        <option key={town} value={town}>
                          {town}
                        </option>
                      ))}
                  </select>

                  <div className="mt-2 text-[11px] p-2 bg-[#FBF8F3] rounded-lg border border-[#E2D4C0]">
                    {deliveryThresholdMet ? (
                      <span className="text-emerald-700 font-bold flex items-center space-x-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>
                          Soglia minima raggiunta per {selectedMunicipality}!
                        </span>
                      </span>
                    ) : (
                      <span className="text-amber-800 font-semibold">
                        Aggiungi altri{' '}
                        <strong>
                          € {amountNeededForFreeDelivery.toFixed(2)}
                        </strong>{' '}
                        per l'ordine minimo a {selectedMunicipality}.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Wine className="w-12 h-12 text-[#70141a] mx-auto opacity-30" />
                  <p className="text-xs font-semibold text-slate-600">
                    Il tuo carrello è vuoto.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.format.id}`}
                    className="bg-[#F4EADA] p-3 rounded-2xl border border-[#E2D4C0] flex items-center space-x-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-xs text-[#2B140A] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[10px] text-[#70141a] font-semibold block">
                        {item.format.name}
                      </span>
                      <span className="text-xs font-bold text-[#2B140A]">
                        €{item.format.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 bg-[#FBF8F3] rounded-lg p-1 border border-[#C59B4E]/30">
                      <button
                        onClick={() =>
                          updateCartQty(item.product.id, item.format.id, -1)
                        }
                        className="p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1.5">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartQty(item.product.id, item.format.id, 1)
                        }
                        className="p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.product.id, item.format.id)
                      }
                      className="text-red-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-4 bg-[#F4EADA] border-t border-[#E2D4C0] space-y-3">
                <div className="flex justify-between text-sm font-extrabold text-[#2B140A]">
                  <span>Totale:</span>
                  <span className="text-[#70141a]">
                    €{cartTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  disabled={
                    deliveryMethod === 'home_delivery' && !deliveryThresholdMet
                  }
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentTab('checkout');
                  }}
                  className={`w-full font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow ${
                    deliveryMethod === 'home_delivery' && !deliveryThresholdMet
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#70141a] hover:bg-[#8c1c24] text-[#F4EADA]'
                  }`}
                >
                  Procedi al Checkout • €{cartTotal.toFixed(2)}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {}
      {isSommelierModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBF8F3] rounded-3xl max-w-md w-full p-6 space-y-5 border-2 border-[#C59B4E] relative">
            <button
              onClick={() => setIsSommelierModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#EFE6D5]"
            >
              <X className="w-4 h-4 text-[#2B140A]" />
            </button>

            <div className="flex items-center space-x-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 rounded-2xl object-cover shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase text-[#C59B4E]">
                  {selectedProduct.producer}
                </span>
                <h3 className="font-serif font-bold text-base text-[#2B140A] uppercase">
                  {selectedProduct.name}
                </h3>
                <span className="text-xs font-bold text-[#70141a]">
                  {selectedProduct.alcohol} • {selectedProduct.denomination}
                </span>
              </div>
            </div>

            <div className="space-y-3 bg-[#F4EADA] p-4 rounded-2xl border border-[#E2D4C0] text-xs">
              <div>
                <strong className="text-[#70141a] block mb-0.5">
                  Note di Degustazione Sommelier:
                </strong>
                <p className="text-[#3a1c10] leading-relaxed">
                  {selectedProduct.tastingNotes}
                </p>
              </div>
              <div>
                <strong className="text-[#70141a] block mb-0.5">
                  Abbinamenti Enogastronomici:
                </strong>
                <p className="text-[#3a1c10] leading-relaxed">
                  {selectedProduct.foodPairing}
                </p>
              </div>
              <div>
                <strong className="text-[#70141a] block mb-0.5">
                  Allergeni:
                </strong>
                <p className="text-[#3a1c10]">{selectedProduct.allergens}</p>
              </div>
            </div>

            <button
              onClick={() => {
                addToCart(selectedProduct);
                setIsSommelierModalOpen(false);
              }}
              className="w-full bg-[#70141a] text-[#F4EADA] font-bold py-3 rounded-xl text-xs uppercase"
            >
              Aggiungi al Carrello Ora
            </button>
          </div>
        </div>
      )}

      {}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#1B1311] text-[#EFE6D5] border-t border-[#C59B4E]/30 lg:hidden flex justify-around items-center py-2 px-1">
        <button
          onClick={() => setCurrentTab('home')}
          className={`flex flex-col items-center space-y-0.5 ${
            currentTab === 'home' ? 'text-[#C59B4E]' : 'text-slate-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button
          onClick={() => setCurrentTab('catalog')}
          className={`flex flex-col items-center space-y-0.5 ${
            currentTab === 'catalog' ? 'text-[#C59B4E]' : 'text-slate-400'
          }`}
        >
          <Wine className="w-5 h-5" />
          <span className="text-[10px] font-bold">Vini</span>
        </button>

        <button
          onClick={() => setCurrentTab('delivery')}
          className={`flex flex-col items-center space-y-0.5 ${
            currentTab === 'delivery' ? 'text-[#C59B4E]' : 'text-slate-400'
          }`}
        >
          <Truck className="w-5 h-5" />
          <span className="text-[10px] font-bold">Consegne</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center space-y-0.5 text-slate-400 relative"
        >
          <ShoppingBag className="w-5 h-5 text-[#C59B4E]" />
          <span className="text-[10px] font-bold">Carrello</span>
          {cart.length > 0 && (
            <span className="absolute -top-1 right-2 bg-[#70141a] text-[#F4EADA] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
              {cart.reduce((a, c) => a + c.quantity, 0)}
            </span>
          )}
        </button>

        <button
          onClick={() => setCurrentTab('profile')}
          className={`flex flex-col items-center space-y-0.5 ${
            currentTab === 'profile' ? 'text-[#C59B4E]' : 'text-slate-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">Bottega</span>
        </button>
      </nav>

      {}
      <footer className="bg-[#1B1311] text-[#F4EADA] border-t-4 border-[#C59B4E] mt-16 py-10 px-4 text-center space-y-4">
        <img
          src={LOGO_URL}
          alt={STORE_NAME}
          className="h-16 w-auto mx-auto object-contain bg-[#F4EADA] p-2 rounded-2xl"
        />
        <p className="text-xs font-serif font-bold text-[#C59B4E] uppercase tracking-wider">
          {STORE_NAME} — {STORE_TAGLINE}
        </p>
        <p className="text-xs text-[#EFE6D5]">
          {STORE_ADDRESS} — Tel: {STORE_PHONE} — WA: {STORE_WHATSAPP}
        </p>
        <p className="text-[10px] text-slate-400">
          © {new Date().getFullYear()} La Cantina di LoLe. Tutti i diritti
          riservati. Bevi responsabilmente.
        </p>
      </footer>
    </div>
  );
}
