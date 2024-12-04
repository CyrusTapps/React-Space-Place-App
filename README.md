# The Space Place

A modern React application that provides an interactive space exploration experience, featuring NASA imagery, space news, solar system visualization, and International Space Station tracking.

## Features

- 🚀 Real-time space news updates
- 🌠 Daily NASA astronomy pictures
- 🌍 Interactive 3D solar system viewer
- 🛸 ISS location tracking and live feeds
- 🌌 Dynamic star field background
- 📱 Responsive design for all devices

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Routing:** React Router DOM 6.28 (configured for v7 when necessary)
- **State Management:** Zustand 5.0
- **UI Components:**
  - Material UI 6.1
  - Heroicons 2.1
  - Framer Motion 11.11
- **3D Rendering:** Google Model Viewer 4.0
- **HTTP Client:** Axios 1.7
- **Mobile Support:** Capacitor 6.1

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/CyrusTapps/React-Space-Place-App
cd React-Space-Place-App
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your API keys:

```env
VITE_NASA_API_URL=https://api.nasa.gov
VITE_NASA_API_KEY=your_nasa_api_key
VITE_SPACEFLIGHT_API_URL=https://api.spaceflightnewsapi.net/v4
```

4. Start development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## Project Structure

```
SpacePlaceApp/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   └── main.jsx        # Application entry point
├── public/            # Static assets
└── .env.example       # Environment variables template
```

## API Dependencies

- NASA API - For astronomy pictures and data
- Spaceflight News API - For space-related news
- ISS Location API - For tracking the International Space Station

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Support

- Android (via Capacitor)
- iOS (via Capacitor)
- Responsive web design for all screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Shawn M. Tapps
