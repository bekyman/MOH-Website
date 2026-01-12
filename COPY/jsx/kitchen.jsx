import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Settings, 
  Home, 
  LogOut, 
  Clock, 
  CheckCircle2, 
  Timer, 
  ChefHat,
  User,
  Users,
  PlusCircle
} from 'lucide-react';

const KitchenDisplaySystem = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [orders, setOrders] = useState([
    {
      id: "1024",
      type: "Employee",
      elapsed: "04:22",
      items: [
        { name: "Key Wot (ቀይ ወጥ)", qty: 1 },
        { name: "Brown Rice (ቡናማ ሩዝ)", qty: 2 }
      ],
      status: "Pending"
    },
    {
      id: "1025",
      type: "Non-Employee",
      elapsed: "01:10",
      items: [
        { name: "Shiro (ሽሮ)", qty: 1 }
      ],
      status: "Pending"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ChefHat className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">MoH KITCHEN</h1>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Kitchen Display System</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
            <LayoutDashboard size={18} />
            <span className="font-semibold">ዳሽቦርድ</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
            <ClipboardList size={18} />
            <span className="font-semibold">የትዕዛዝ ዝርዝር</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
            <Settings size={18} />
            <span className="font-semibold">ማስተካከያ</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase">የኩሽና ሰዓት</p>
            <p className="text-lg font-mono font-bold text-blue-600">{currentTime}</p>
          </div>
          <button className="bg-red-50 text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Orders</p>
              <h3 className="text-3xl font-bold text-gray-800">{orders.length}</h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
              <ClipboardList size={24} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">System Status</p>
              <h3 className="text-lg font-bold text-green-600 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </h3>
            </div>
            <div className="bg-green-100 p-3 rounded-xl text-green-600">
              <CheckCircle2 size={24} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Terminal ID</p>
              <h3 className="text-lg font-bold text-gray-800">KDS-MAIN-01</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
              <Home size={24} />
            </div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              {/* Order Header */}
              <div className={`p-4 flex justify-between items-center border-b ${
                order.type === 'Employee' ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${order.type === 'Employee' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'}`}>
                    {order.type === 'Employee' ? <User size={18} /> : <Users size={18} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{order.type}</p>
                    <h2 className="text-xl font-black text-gray-800">#{order.id}</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-orange-600 font-bold">
                    <Timer size={16} />
                    <span>{order.elapsed}</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Elapsed</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="flex-1 p-5 space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-md bg-white flex items-center justify-center font-bold text-blue-600 border border-gray-200 shadow-sm">
                        {item.qty}
                      </span>
                      <span className="text-lg font-bold text-gray-700">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm">
                  <CheckCircle2 size={20} />
                  Mark In Progress
                </button>
              </div>
            </div>
          ))}

          {/* Waiting for New Order Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-10 bg-gray-50/50">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-200">
              <PlusCircle size={32} className="text-gray-300 animate-pulse" />
            </div>
            <p className="font-bold text-gray-500 text-center">አዲስ ትዕዛዝ በመጠባበቅ ላይ...</p>
            <p className="text-xs text-gray-400 mt-1">Waiting for new orders</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-gray-200 p-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500">ሰራተኛ (Employee)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500">እንግዳ (Non-Employee)</span>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-400">© 2024 MoH Cafeteria Kitchen Display System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default KitchenDisplaySystem;