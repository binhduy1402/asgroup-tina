export interface Collection {
  id: string;
  title: string;
  tagline?: string;
  icon?: string;
  description: string;
  image: string;
  url: string;
  badge?: string;
  highlights?: string[];
}

export interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  category: "Doanh Nghiệp" | "Sự Kiện" | "Cá Nhân Hóa" | string;
  longDescription?: string;
  client?: string;
  year?: string;
  components?: string[];
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "processing" | "quoted" | "completed";
  createdAt: string;
}
