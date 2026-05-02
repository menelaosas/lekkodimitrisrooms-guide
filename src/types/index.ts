// ─── Site-wide shared types ───────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface CvEntry {
  years: string;
  title: string;
  institution: string;
}

export interface CredentialItem {
  title: string;
  subtitle: string;
}

export interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string[];
}

export interface HoursRow {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface OfficeFeature {
  label: string;
}

// ─── Contact form ─────────────────────────────────────────────────────────────

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  reason: string;
  message?: string;
}
