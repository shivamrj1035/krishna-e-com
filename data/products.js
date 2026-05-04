import { encryptImageUrl } from '@/utils/crypto';

// Google Drive Fallback Image ID: 1QOYoQZk9OAw2csywXNSG8Py99BEZfocz
const FALLBACK_IMAGE_SOURCE = 'https://drive.google.com/uc?export=download&id=1QOYoQZk9OAw2csywXNSG8Py99BEZfocz';

export const categories = [
  { 
    id: 1, 
    name: 'Laddu Gopal Dresses', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 2, 
    name: 'Mor Pankh', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 3, 
    name: 'Jewellery', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 4, 
    name: 'Jhula & Decor', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 5, 
    name: 'Festive Kits', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 6, 
    name: 'Bhog & Prasad', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
  { 
    id: 7, 
    name: 'Flutes & Accessories', 
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE)
  },
];

export const products = [
  {
    id: 1,
    name: 'Premium Mor Pankh Dress',
    price: 1499,
    rating: 5,
    reviews: 256,
    badge: 'BEST SELLER',
    category: 'Laddu Gopal Dresses',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: true,
    isNew: false
  },
  {
    id: 2,
    name: 'Handcrafted Silver Flute',
    price: 2499,
    rating: 5,
    reviews: 184,
    badge: 'EXCLUSIVE',
    category: 'Flutes & Accessories',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: true,
    isNew: true
  },
  {
    id: 3,
    name: 'Divine Shringar Set',
    price: 1799,
    rating: 4,
    reviews: 305,
    badge: 'POPULAR',
    category: 'Jewellery',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: true,
    isNew: false
  },
  {
    id: 4,
    name: 'Decorative Velvet Jhula',
    price: 3599,
    rating: 5,
    reviews: 92,
    badge: 'NEW',
    category: 'Jhula & Decor',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: false,
    isNew: true
  },
  {
    id: 5,
    name: 'Real Mor Pankh Fan',
    price: 899,
    rating: 4,
    reviews: 128,
    badge: 'HOT SELLING',
    category: 'Mor Pankh',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: true,
    isNew: false
  },
  {
    id: 6,
    name: 'Janmashtami Special Bhog Thali',
    price: 1299,
    rating: 5,
    reviews: 156,
    badge: 'FESTIVE',
    category: 'Bhog & Prasad',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: false,
    isNew: true
  },
  {
    id: 7,
    name: 'Kundan Work Mukut Set',
    price: 1599,
    rating: 5,
    reviews: 210,
    badge: 'BEST SELLER',
    category: 'Jewellery',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: true,
    isNew: false
  },
  {
    id: 8,
    name: 'Designer Peacock Dress',
    price: 1899,
    rating: 4,
    reviews: 142,
    badge: 'NEW ARRIVAL',
    category: 'Laddu Gopal Dresses',
    image: encryptImageUrl(FALLBACK_IMAGE_SOURCE),
    isTrending: false,
    isNew: true
  }
];
