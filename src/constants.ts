import { Doctor, Service, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Salma Barlaskar',
    specialty: 'Gynecology',
    qualification: 'MBBS, MD (O&G)',
    image: '/doc1.png',
    reviews: 124,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Dr. Ashok K. Goala',
    specialty: 'General Medicine',
    qualification: 'MBBS, MD (Medicine)',
    image: '/doc2.png',
    reviews: 210,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Dr. Rohit Tigga',
    specialty: 'Orthopedic',
    qualification: 'MBBS, MS (Ortho)',
    image: '/doc2.png',
    reviews: 156,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Dr. Debanjali Das',
    specialty: 'ENT Specialist',
    qualification: 'MBBS, MS (ENT)',
    image: '/doc1.png',
    reviews: 98,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Dr. Nandita Nath',
    specialty: 'Pediatrics',
    qualification: 'MBBS, MD (Ped)',
    image: '/doc1.png',
    reviews: 187,
    rating: 4.9
  },
  {
    id: '6',
    name: 'Dr. Annesha Roy',
    specialty: 'Dermatology',
    qualification: 'MBBS, MD (Derm)',
    image: '/doc1.png',
    reviews: 142,
    rating: 4.8
  }
];

export const SERVICES: Service[] = [
  {
    id: 'blood',
    title: 'Blood Test',
    description: 'Comprehensive hematology and biochemistry profiles.',
    icon: 'Droplets'
  },
  {
    id: 'ecg',
    title: 'ECG',
    description: 'Advanced cardiac monitoring and rhythm analysis.',
    icon: 'Activity'
  },
  {
    id: 'xray',
    title: 'Digital X-Ray',
    description: 'High-resolution imaging with minimal radiation.',
    icon: 'Scan'
  },
  {
    id: 'sonography',
    title: 'Sonography',
    description: 'Expert ultrasound and fetal monitoring.',
    icon: 'Waves'
  },
  {
    id: 'doppler',
    title: 'Colour Doppler',
    description: 'Specialized vascular and blood flow imaging.',
    icon: 'Wind'
  },
  {
    id: 'endoscopy',
    title: 'Endoscopy',
    description: 'Minimally invasive internal examinations.',
    icon: 'Eye'
  },
  {
    id: 'microbiology',
    title: 'Microbiology',
    description: 'Advanced culture and sensitivity testing.',
    icon: 'Microscope'
  },
  {
    id: 'pathology',
    title: 'Pathology',
    description: 'Expert tissue and cellular diagnostics.',
    icon: 'FlaskConical'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Swapan Biswas',
    location: 'Silchar',
    text: 'Ultra Care has been a game-changer for me. The online booking and home collection service is incredibly convenient.',
    rating: 5
  },
  {
    id: '2',
    name: 'Tanmoy Chakraborty',
    location: 'Silchar',
    text: 'Very professional staff and accurate reports. The digital X-ray quality is excellent.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sahidul Islam',
    location: 'Hailakandi',
    text: 'Best diagnostic center in the region. The doctors are very helpful and the facilities are top-notch.',
    rating: 5
  }
];
