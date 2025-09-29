# IEEE Student Branch Web Application

A modern, fully-featured web application built for IEEE Student Branch management with React, TailwindCSS, and Firebase integration. Features glassmorphism design, role-based authentication, and comprehensive branch management capabilities.

## 🚀 Features

### Frontend (React + TailwindCSS + Glassmorphism)
- **Modern UI/UX**: Glassmorphism design with frosted panels, animated backgrounds, and smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Role-based Interface**: Different views and capabilities for students and admins
- **Real-time Updates**: Live notifications and data synchronization
- **Interactive Components**: Hover effects, animations, and micro-interactions

### Backend (Firebase Integration)
- **Authentication**: Secure login/signup with IEEE Member ID and password
- **Firestore Database**: Real-time data storage for users, events, publications, and more
- **Cloud Storage**: File upload capabilities for photos and documents
- **Cloud Functions**: Automated notifications and backend processing
- **Security Rules**: Role-based access control and data protection

### Key Pages & Features
- **Home**: Hero section with IEEE branding and events preview
- **Dashboard**: Role-based dashboard with quick actions and recent activity
- **Team Management**: Add/edit team members with photo upload and camera capture
- **Events**: Create, manage, and register for IEEE events
- **Publications**: Research papers and technical publications showcase
- **Achievements**: Timeline of milestones, awards, and recognition
- **Societies**: IEEE societies (ComSoc, CS, SIGHT, WIE) with coordinators and activities

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### 1. Clone and Install
```bash
git clone [repository-url]
cd ieee-student-branch
npm install
```

### 2. Firebase Configuration
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication, Firestore, and Storage
3. Create a web app and copy the configuration
4. Update `src/lib/firebase.ts` with your Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 3. Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Events - admins can write, all can read
    match /events/{eventId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Notifications - users can only access their own
    match /notifications/{notificationId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userID;
    }
  }
}
```

### 4. Storage Security Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.resource.size < 5 * 1024 * 1024; // 5MB limit
    }
  }
}
```

### 5. Development Server
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── GlassCard.tsx
│   │   ├── NotificationBell.tsx
│   │   ├── AnimatedBackground.tsx
│   │   └── ProtectedRoute.tsx
│   └── layout/           # Layout components
│       └── Navbar.tsx
├── contexts/             # React contexts
│   └── AuthContext.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Team.tsx
│   ├── Events.tsx
│   ├── Publications.tsx
│   ├── Achievements.tsx
│   └── Societies.tsx
├── lib/                 # Utilities and config
│   └── firebase.ts
├── types/               # TypeScript definitions
│   └── index.ts
└── hooks/               # Custom React hooks
    └── useAuth.ts
```

## 🎨 Design System

### Colors
- **IEEE Blue**: #00629B
- **Glassmorphism**: Semi-transparent whites with blur effects
- **Gradients**: Blue to purple, yellow to orange accents
- **Status Colors**: Success (green), warning (yellow), error (red)

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Regular weight, readable line heights
- **Scale**: Consistent sizing system (text-sm to text-6xl)

### Spacing
- **System**: 8px base unit (0.5rem)
- **Containers**: Max-width with responsive padding
- **Components**: Consistent internal spacing

## 🔐 Authentication & Authorization

### User Roles
- **Student**: Basic access to view events, publications, achievements
- **Admin**: Full access including create/edit capabilities

### Authentication Flow
1. User registers with IEEE Member ID, name, email, password
2. Firebase Auth creates account
3. User document created in Firestore with role assignment
4. Protected routes enforce role-based access

## 🔄 Data Flow

### Events Management
1. Admin creates event → Firebase Storage (photos) → Firestore (event data)
2. Cloud Function triggers notification creation
3. Real-time updates to all users
4. Students can register/view events

### Team Management
1. Admin adds team member → Photo upload to Storage
2. Member data stored in Firestore
3. Real-time updates to team page
4. Camera capture integration for profile photos

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Environment Variables
- Development: Use Firebase Emulators
- Production: Firebase project configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

### Performance
- Lazy loading for routes
- Image optimization
- Bundle splitting
- Firebase caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the IEEE Student Branch team
- Check Firebase documentation for backend issues

---

Built with ❤️ for the IEEE Student Branch community