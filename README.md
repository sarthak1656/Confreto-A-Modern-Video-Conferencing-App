# Confreto – A Modern Video Conferencing App

🔗 **Live Site**: [https://confreto.vercel.app](https://confreto.vercel.app)  

Confreto is a real-time video conferencing web application built with Next.js, TypeScript, and Stream Video SDK. It features powerful meeting management capabilities, secure user authentication using Clerk, and a responsive design for seamless cross-device experience.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Video SDK**: [Stream Video React SDK](https://getstream.io/video/sdk/react/)
- **UI Styling**: [Tailwind CSS](https://tailwindcss.com/), Radix UI, Lucide Icons
- **Date & Time**: [date-fns](https://date-fns.org/)
- **Utilities**: clsx, uuid, class-variance-authority
- **State & Logic**: Modular components, reusable hooks, scalable architecture

---

## ✨ Features

### 🔐 Authentication
- Secure sign-in and sign-up via Clerk
- Supports social and email/password login
- Role-based access control for managing users

### 📞 Real-Time Video Meetings
- **Start New Meeting**: Instantly start a new video call
- **Personal Room**: One-click access to your unique personal meeting room
- **Join via Link**: Shareable meeting links for guests or team members

### 🛠️ Meeting Controls
- Toggle mic/cam
- Screen sharing
- Emoji reactions
- Participant management (mute, pin, block, allow screen share)
- Grid layout & sound control
- Live recording capabilities

### 📅 Scheduling & History
- **Upcoming Meetings**: Schedule future calls with date & time
- **Past Meetings**: View previously held meetings with metadata
- **Recorded Meetings**: Playback available for recorded sessions

### ✅ UX & Optimization
- Fully responsive design across all devices
- Smooth transitions and animated UI
- Optimized for performance and code reusability

---

## 📦 Dependencies

```json
"dependencies": {
  "@clerk/nextjs": "^5.7.5",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-popover": "^1.0.7",
  "@radix-ui/react-slot": "^1.0.2",
  "@radix-ui/react-toast": "^1.1.5",
  "@stream-io/node-sdk": "^0.1.12",
  "@stream-io/video-react-sdk": "^0.5.1",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "date-fns": "^3.4.0",
  "lucide-react": "^0.350.0",
  "next": "14.1.3",
  "react": "^18",
  "react-datepicker": "^6.3.0",
  "react-dom": "^18",
  "tailwind-merge": "^2.2.1",
  "tailwindcss-animate": "^1.0.7",
  "uuid": "^9.0.1"
}
```

---

## 🛠️ Dev Dependencies

```json
"devDependencies": {
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-datepicker": "^6.2.0",
  "@types/react-dom": "^18",
  "@types/uuid": "^9.0.8",
  "autoprefixer": "^10.0.1",
  "eslint": "^8",
  "eslint-config-next": "14.1.3",
  "eslint-config-prettier": "^9.1.0",
  "eslint-config-standard": "^17.1.0",
  "eslint-plugin-tailwindcss": "^3.14.3",
  "postcss": "^8",
  "prettier": "^3.2.5",
  "tailwindcss": "^3.3.0",
  "typescript": "^5"
}
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sarthak1656/Confreto-A-Modern-Video-Conferencing-App.git
cd Confreto-A-Modern-Video-Conferencing-App
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file and include:

```
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

> 💡 Note: For development, make sure to add your `https://confreto.vercel.app` domain under **Clerk → Development instance allowed origins**.

---

## 💻 Run Locally

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## 📤 Deploy

You can deploy this app easily with [Vercel](https://vercel.com/) or any Next.js-supported hosting platform.

---

## 🧱 Project Architecture

- `app/` - Next.js app directory
- `components/` - UI and layout components
- `lib/` - Helpers and utilities
- `hooks/` - Custom React hooks
- `types/` - TypeScript interfaces and types
- `public/` - Static assets like logos and icons
- `styles/` - Tailwind CSS and global styles

---

## 🧑‍💻 Author

Made with ❤️ by [Sarthak](https://github.com/sarthak1656)
