export interface Resume {
  // Unique ID for storage
  id: string;
  title: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  testimonials: Testimonial[];
  photoUrl?: string;
  createdAt: Date;
}

export interface Skill {
  name: string;
  rating: number;
}

export interface Experience {
  title: string;
  company: string;
  years: string;
  rating: number;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Testimonial {
  text: string;
  author: string;
}
