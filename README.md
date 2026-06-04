# 🏥 TECH.CARE DASHBOARD

A modern, responsive healthcare analytics dashboard built with React and Vite. Visualize patient data, medical metrics, and health statistics with beautiful, interactive charts and a clean user interface. xxx

![TECH.CARE Dashboard](https://github.com/user-attachments/assets/5e167a93-e706-441a-be3c-749085c51863)

![Dashboard Preview](https://github.com/user-attachments/assets/588719a2-dcf7-4df2-8104-fa603982e78f)

## ✨ Features

- 📊 **Interactive Charts** - Real-time data visualization with Chart.js and Recharts 
- 📱 **Responsive Design** - Fully responsive UI that works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean and professional dashboard interface
- 🔄 **API Integration** - Axios for seamless backend communication
- 📈 **Healthcare Metrics** - Display patient data, health statistics, and medical analytics
- 🎯 **Easy Navigation** - Intuitive interface with React Icons for better UX

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.0
- **Charting Libraries**: 
  - Chart.js 4.5.1
  - Recharts 3.8.1
  - react-chartjs-2 5.3.1
- **HTTP Client**: Axios 1.16.0
- **Icons**: React Icons 5.6.0
- **Linting**: ESLint 9.8.0

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunalkumar67/coalition-dashboard.git
   cd coalition-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the dashboard**
   - **Local**: http://localhost:5173/
   - **Network**: Use `npm run dev -- --host` to expose on network

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```
##
<img width="1200" height="600" alt="image" src="https://github.com/user-attachments/assets/27f75d94-0646-4123-b24c-f5bca299b38f" />


## 📁 Project Structure

```
coalition-dashboard/
├── src/                    # Source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API services
│   ├── styles/           # CSS styles
│   └── App.jsx          # Main application component
├── public/               # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## 🎯 Usage

### Running the Application

```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Code Quality Check

```bash
npm run lint
```

## 📊 Features Overview

### Dashboard Components

- **Patient Overview** - Display patient statistics and demographics
- **Health Metrics** - Visual representation of vital signs and health indicators
- **Analytics Charts** - Interactive charts for data analysis
- **Real-time Data** - Live updates from backend API

## 🔌 API Integration

The dashboard uses Axios for API communication. Configure your backend endpoint in the service files:

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://your-api-endpoint.com/api'
});
```

## 🎨 Customization

### Styling

- Modify CSS files in `src/styles/` directory
- Use CSS modules or inline styles as needed
- Customize chart colors and themes in component files

### Adding New Charts

1. Import Chart.js or Recharts
2. Create a new component in `src/components/`
3. Integrate with your data source
4. Add to dashboard layout

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found

Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Build Issues

Clear the dist folder and rebuild:
```bash
rm -rf dist
npm run build
```

## 📝 Development Guidelines

- Follow ESLint rules for code quality
- Use functional components with hooks
- Keep components modular and reusable
- Add PropTypes or TypeScript for type safety
- Comment complex logic and algorithms

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kunal Kumar** - [GitHub Profile](https://github.com/kunalkumar67)

## 📧 Contact

For questions or suggestions, please open an issue on the [GitHub repository](https://github.com/kunalkumar67/coalition-dashboard/issues).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Charts by [Chart.js](https://www.chartjs.org/) and [Recharts](https://recharts.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Hey connections! 🚀** If you found this project useful, please give it a ⭐
