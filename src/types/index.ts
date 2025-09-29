export interface User {
  uid: string;
  memberID: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  photoURL?: string;
  createdAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  venue: string;
  photoURL?: string;
  createdBy: string;
  createdAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  photoURL?: string;
  isActive: boolean;
  joinDate: Date;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  link: string;
  publishDate: Date;
  type: 'journal' | 'conference' | 'workshop';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: 'award' | 'recognition' | 'milestone';
  imageURL?: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'event' | 'announcement' | 'achievement';
  date: Date;
  eventID?: string;
  userID?: string;
  isRead: boolean;
}

export interface Society {
  id: string;
  name: string;
  description: string;
  coordinator: string;
  activities: string[];
  logoURL?: string;
}