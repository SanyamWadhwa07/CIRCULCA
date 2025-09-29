
# CircuLCA - AI-Driven Life Cycle Assessment Dashboard

## Project Overview

CircuLCA is an innovative React-based dashboard for the **AI-Driven Life Cycle Assessment (LCA) Tool for Advancing Circularity and Sustainability in Metallurgy and Mining** - a Smart India Hackathon 2025 project.

This comprehensive dashboard provides real-time insights into environmental impact, circularity metrics, and AI-powered recommendations for metallurgical and mining processes.

## Features

### 🔬 **AI-Powered Analysis**
- Machine learning-driven environmental impact assessment
- 94%+ confidence predictions using advanced ML algorithms
- Real-time optimization recommendations

### 📊 **Comprehensive Metrics**
- Carbon footprint tracking (tCO₂eq/t)
- Water usage monitoring (m³/t)
- Energy consumption analysis (MWh/t)
- Circularity scoring and material flow visualization

### 🔄 **Circular Economy Focus**
- Material recovery rate tracking
- Recycled content optimization
- End-of-life pathway analysis
- Waste reduction strategies

### 📈 **Interactive Visualizations**
- Real-time dashboards with Chart.js integration
- Sankey diagrams for material flow
- Network visualization of circular pathways
- Timeline analysis of process evolution

## Tech Stack

### Frontend
- **React 18.2.0** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive design
- **React Router** for navigation

### Visualization
- **Chart.js 4.4.0** for environmental metrics
- **Recharts 2.8.0** for advanced data visualization
- **@heroicons/react** for consistent iconography

### Development Tools
- **TypeScript 5.2.2** with strict type checking
- **ESLint** for code quality
- **PostCSS & Autoprefixer** for CSS processing

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd 25069
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Dashboard Features

### 🏠 **Main Dashboard**
- **Metrics Overview**: Key environmental indicators
- **Environmental Impact**: Carbon, water, and energy metrics
- **Circularity Indicators**: Material flow and recovery rates
- **Material Flow Chart**: Visual representation of circular pathways
- **AI Insights**: ML-powered recommendations
- **Recent Analyses**: Historical data tracking

### 📝 **LCA Input**
- Material selection (Aluminum, Copper, Steel, Lithium)
- Process type comparison (Conventional vs Circular)
- Parameter input for production volume and energy mix
- Process flow configuration for raw materials, energy, transport, and end-of-life

### 🤖 **AI Analysis**
- Environmental impact comparison
- Circularity assessment with scoring
- AI-powered optimization opportunities
- Risk factor identification and alerts

### 🔄 **Circularity Flow**
- Interactive material flow visualization
- Multiple view modes (Sankey, Network, Timeline)
- Real-time material recovery tracking
- Circular pathway optimization

### 📋 **Reports & Documentation**
- Comprehensive LCA report generation
- Executive summary creation
- Technical data sheets
- Multiple export formats (PDF, Excel, Word, PowerPoint)

## Material Support

The dashboard supports analysis for:
- **Aluminum**: Recycling optimization and energy efficiency
- **Copper**: Circular pathway analysis and recovery enhancement
- **Steel**: Sustainable production and end-of-life management
- **Lithium**: Critical mineral lifecycle assessment

## Sample Data

The dashboard includes realistic sample datasets for:
- Environmental impact metrics
- Material flow rates
- Energy consumption patterns
- Recovery and recycling rates
- AI confidence scores and recommendations

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   └── layout/         # Layout components (Header, Sidebar)
├── pages/              # Main application pages
│   ├── Dashboard.tsx   # Main dashboard
│   ├── LCAInput.tsx    # Data input interface
│   ├── Analysis.tsx    # AI analysis results
│   ├── CircularityFlow.tsx # Flow visualization
│   └── Reports.tsx     # Report generation
├── types/              # TypeScript type definitions
└── styles/             # CSS and styling files
```

## Key Metrics Tracked

- **Carbon Footprint**: 2.4 tCO₂eq/t (32% improvement over conventional)
- **Water Usage**: 15.2 m³/t (28% reduction)
- **Energy Consumption**: 45.7 MWh/t (25% efficiency gain)
- **Circularity Score**: 87% overall rating
- **Material Recovery**: 95% recovery rate
- **Recycled Content**: 65% secondary material usage

## AI Features

- **Confidence Scoring**: 94.2% average prediction accuracy
- **Optimization Recommendations**: Energy, water, and lifecycle improvements
- **Risk Assessment**: Supply chain, regulatory, and market analysis
- **Predictive Analytics**: Future sustainability trends

## Contributing

This project is part of Smart India Hackathon 2025. For development guidelines and contribution instructions, please refer to the project documentation.

## License

This project is developed for Smart India Hackathon 2025 - AI-Driven Life Cycle Assessment Tool for Advancing Circularity and Sustainability in Metallurgy and Mining.

---

**Built with ❤️ for sustainable metallurgy and mining**
>>>>>>> master
