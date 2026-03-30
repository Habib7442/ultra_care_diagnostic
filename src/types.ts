export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  image: string;
  reviews?: number;
  rating?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}
