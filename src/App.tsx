import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, Droplets, Sun, TrendingUp, Settings, Bell, User,
  TreePine, Apple, Carrot, Leaf, Wheat, Wind, Tractor,
  CloudRain, Droplet as DropletIcon, Sun as SunIcon, Thermometer
} from 'lucide-react';

type FarmMetric = {
  id: string;
  name: string;
  value: string | number;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
  change: string;
};

type Crop = {
  id: string;
  name: string;
  type: 'fruit' | 'vegetable' | 'grain' | 'herb';
  plantedDate: string;
  harvestDate: string;
  progress: number;
  status: 'growing' | 'ready' | 'needs-attention';
  season?: string;
  profit?: number;
  growth?: number;
};

const App: React.FC = () => {
  // State variables (commented out since they're not currently used)
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock equipment data with required properties
  const equipment = [
    { 
      id: 1, 
      name: 'Tractor', 
      status: 'operational',
      condition: 'good',
      efficiency: 0.95
    },
    { 
      id: 2, 
      name: 'Irrigation System', 
      status: 'maintenance',
      condition: 'needs_repair',
      efficiency: 0.65
    },
    { 
      id: 3, 
      name: 'Harvester', 
      status: 'operational',
      condition: 'excellent',
      efficiency: 0.92
    }
  ] as const;
  
  // Marked with underscore to indicate it's intentionally unused for now
  const _farmMetrics: FarmMetric[] = [
    {
      id: 'temperature',
      name: 'Temperature',
      value: '22°C',
      icon: <Thermometer className="w-6 h-6 text-terracotta" />,
      trend: 'up',
      change: '+2°C'
    },
    {
      id: 'humidity',
      name: 'Humidity',
      value: '65%',
      icon: <DropletIcon className="w-6 h-6 text-sky" />,
      trend: 'down',
      change: '-5%'
    },
    {
      id: 'soil-moisture',
      name: 'Soil Moisture',
      value: '42%',
      icon: <Droplets className="w-6 h-6 text-sky-500" />,
      trend: 'neutral',
      change: '0%'
    },
    {
      id: 'light',
      name: 'Light',
      value: 'High',
      icon: <SunIcon className="w-6 h-6 text-yellow-500" />,
      trend: 'up',
      change: '10%'
    }
  ];

  const crops: Crop[] = [
    {
      id: 'tomato',
      name: 'Tomatoes',
      type: 'vegetable',
      plantedDate: '2023-05-15',
      harvestDate: '2023-08-30',
      progress: 85,
      status: 'growing'
    },
    {
      id: 'wheat',
      name: 'Wheat',
      type: 'grain',
      plantedDate: '2023-04-10',
      harvestDate: '2023-09-20',
      progress: 65,
      status: 'growing'
    },
    {
      id: 'basil',
      name: 'Basil',
      type: 'herb',
      plantedDate: '2023-06-01',
      harvestDate: '2023-07-30',
      progress: 95,
      status: 'ready'
    }
  ];

  // Helper function to get status color
  // Marked with underscore to indicate it's intentionally unused for now
  const _getStatusColor = (status: Crop['status']) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'needs-attention':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  // Helper function to get crop icon
  // Marked with underscore to indicate it's intentionally unused for now
  const _getCropIcon = (type: Crop['type']) => {
    switch (type) {
      case 'fruit':
        return <Apple className="w-5 h-5 text-red-500" />;
      case 'vegetable':
        return <Carrot className="w-5 h-5 text-orange-500" />;
      case 'grain':
        return <Wheat className="w-5 h-5 text-amber-600" />;
      case 'herb':
        return <Leaf className="w-5 h-5 text-green-600" />;
      default:
        return <Sprout className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 relative overflow-hidden">
      {/* Animated Farm Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Leaves */}
        <motion.div
          className="absolute top-20 left-10 text-6xl animate-float-gentle"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍃
        </motion.div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-farm-green/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-farm-green hover:text-grass-green cursor-pointer transition-colors animate-float-gentle" />
              <Settings className="w-5 h-5 text-farm-green hover:text-grass-green cursor-pointer transition-colors animate-float-gentle" />
              <div className="w-8 h-8 bg-farm-green rounded-full flex items-center justify-center animate-grow">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button className="text-farm-green hover:text-grass-green font-medium transition-colors hover:animate-pulse">Dashboard</button>
              <button className="text-farm-green hover:text-grass-green font-medium transition-colors hover:animate-pulse">Crops</button>
              <button className="text-farm-green hover:text-grass-green font-medium transition-colors hover:animate-pulse">Weather</button>
              <button className="text-farm-green hover:text-grass-green font-medium transition-colors hover:animate-pulse">Market</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-6">
                Welcome to Your Farm Paradise
              </h2>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 text-yellow-500"
                >
                  <Sun className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cultivate your dreams, harvest success, and build a thriving agricultural empire with smart farming technology and sustainable practices.
            </p>
            
            {/* Floating Farm Elements */}
            <div className="relative mt-12">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-0 text-green-500"
              >
                <Leaf className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-16 top-8 text-emerald-600"
              >
                <TreePine className="w-10 h-10" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-1/4 -top-4 text-red-500"
              >
                <Apple className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-1/3 -top-2 text-orange-500"
              >
                <Carrot className="w-7 h-7" />
              </motion.div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-green-700">12</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Active Crops</h3>
              <p className="text-sm text-gray-600">Growing strong</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-700">85%</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Soil Moisture</h3>
              <p className="text-sm text-gray-600">Optimal levels</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-yellow-700">28°C</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Temperature</h3>
              <p className="text-sm text-gray-600">Perfect weather</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-purple-700">+15%</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Growth Rate</h3>
              <p className="text-sm text-gray-600">Above average</p>
            </motion.div>
          </div>

          {/* Main Dashboard */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Crops Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Wheat className="w-6 h-6 text-green-600 mr-3" />
                    My Crops
                  </h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all font-medium">
                    Plant New
                  </button>
                </div>
                
                <div className="space-y-4">
                  {crops.map((crop, index) => (
                    <motion.div
                      key={crop.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Sprout className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{crop.name}</h4>
                          <p className="text-sm text-gray-600">{crop.season} • ${crop.profit} profit</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Growth</p>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${crop.growth}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                            />
                          </div>
                        </div>
                        <span className="font-bold text-green-700">{crop.growth}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weather & Equipment Sidebar */}
            <div className="space-y-6">
              {/* Weather Widget */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CloudRain className="w-5 h-5 text-blue-600 mr-2" />
                  Weather Forecast
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">Today</span>
                    </div>
                    <span className="font-semibold text-gray-800">28°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CloudRain className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Tomorrow</span>
                    </div>
                    <span className="font-semibold text-gray-800">22°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wind className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">Wind</span>
                    </div>
                    <span className="font-semibold text-gray-800">12 km/h</span>
                  </div>
                </div>
              </div>

              {/* Equipment Status */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Tractor className="w-5 h-5 text-green-600 mr-2" />
                  Equipment
                </h3>
                <div className="space-y-3">
                  {equipment.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.condition}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-green-600">{item.efficiency}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all font-medium">
                  View All Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-green-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-farm-green to-leaf-green rounded-full flex items-center justify-center animate-grow">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-earth-brown font-nature">AgriVerse</span>
            </div>
            <p className="text-gray-600">
              &copy; 2024 AgriVerse. Cultivating the future of farming simulation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
