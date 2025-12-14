# Phevon The Grand Hotel & Spa

A modern, luxury hotel website built with React, TypeScript, and Node.js. Features a complete booking system with payment integration, guest reviews, and AI-powered customer support.

## 🏨 Features

- **Room Browsing & Booking**: Browse luxury suites with detailed information and real-time availability
- **Secure Payments**: Integrated with Chapa payment gateway for secure transactions
- **Guest Reviews**: Verified review system for confirmed bookings
- **AI Concierge**: 24/7 chatbot assistant for instant customer support
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Elegant design with luxury aesthetics using Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API communication
- **date-fns** for date handling

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Prisma ORM** with SQLite database
- **Chapa** payment integration
- **CORS**, **Helmet**, **Compression** middleware

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Phevon-the-Grand-Hotel-and-Spa
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL="file:./dev.db"
PORT=5000
CHAPA_SECRET_KEY=your_chapa_secret_key_here
```

Run database migrations and seed:

```bash
npx prisma migrate dev
npx prisma generate
npm run build
node dist/prisma/seed.js
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Phevon-the-Grand-Hotel-and-Spa/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── seed.ts
│   │   └── migrations/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── database/
│   │   └── app.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## 🎨 Design System

- **Primary Color**: Pure White (#FFFFFF)
- **Accent Color**: Luxury Gold (#D4AF37)
- **Secondary Color**: Charcoal (#36454F)
- **Typography**: Playfair Display (serif) for headings, Lato (sans-serif) for body

## 🔑 Environment Variables

### Backend (.env)
- `DATABASE_URL`: SQLite database connection string
- `PORT`: Server port (default: 5000)
- `CHAPA_SECRET_KEY`: Chapa payment gateway secret key

### Frontend (.env)
- `VITE_API_URL`: Backend API base URL

## 📦 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_API_URL`

### Backend (Railway/Render)
1. Build the backend: `npm run build`
2. Deploy with start command: `npm start`
3. Set environment variables: `DATABASE_URL`, `CHAPA_SECRET_KEY`, `PORT`
4. Run migrations: `npx prisma migrate deploy`

## 🧪 Testing

### Build Verification
```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm run build
```

## 📝 API Endpoints

- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room by ID
- `POST /api/bookings` - Create a booking
- `GET /api/payments/verify/:tx_ref` - Verify payment
- `POST /api/reviews` - Submit a review
- `GET /api/reviews/:roomId` - Get reviews for a room
- `POST /api/ai/chat` - Chat with AI assistant

## 🤝 Contributing

This is a portfolio/demonstration project. Feel free to fork and customize for your own use.

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- Design inspiration from luxury hotel websites
- Chapa for payment processing
- Unsplash for placeholder images
