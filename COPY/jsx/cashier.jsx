import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Utensils, 
  ClipboardList, 
  Package, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Globe, 
  ShoppingCart, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Users,
  ChevronRight,
  Printer,
  Trash2
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const CafeteriaManagementSystem = () => {
  const [language, setLanguage] = useState('amharic'); // Default to Amharic as per context
  const [activeTab, setActiveTab] = useState('pos');
  const [cart, setCart] = useState([]);
  const [customerType, setCustomerType] = useState('employee'); // 'employee' or 'external'

  // Translations
  const t = {
    english: {
      title: "MoH Cafeteria Management",
      dashboard: "Dashboard",
      pos: "POS Terminal",
      inventory: "Inventory",
      orders: "Orders",
      settings: "Settings",
      logout: "Logout",
      totalSales: "Total Sales",
      pendingOrders: "Pending Orders",
      activeUsers: "Active Users",
      addDish: "Add New Dish",
      dishName: "Dish Name",
      price: "Price",
      status: "Status",
      employee: "Employee",
      external: "External",
      addToCart: "Add to Cart",
      checkout: "Checkout",
      total: "Total",
      receipt: "Receipt",
      search: "Search menu...",
      tableware: "Tableware Tracking"
    },
    amharic: {
      title: "የጤና ሚኒስቴር የሰራተኞች ክበብ",
      dashboard: "ዳሽቦርድ",
      pos: "መሸጫ (POS)",
      inventory: "ክምችት",
      orders: "ትዕዛዞች",
      settings: "ቅንብሮች",
      logout: "ውጣ",
      totalSales: "ጠቅላላ ሽያጭ",
      pendingOrders: "ያልተጠናቀቁ ትዕዛዞች",
      activeUsers: "ተጠቃሚዎች",
      addDish: "አዲስ ምግብ ጨምር",
      dishName: "የምግብ ስም",
      price: "ዋጋ",
      status: "ሁኔታ",
      employee: "የውስጥ ሰራተኛ",
      external: "ለውጭ ሰራተኛ",
      addToCart: "ጨምር",
      checkout: "ክፈል",
      total: "ጠቅላላ",
      receipt: "ደረሰኝ",
      search: "ምግብ ፈልግ...",
      tableware: "የዕቃዎች ቁጥጥር"
    }
  };

  const content = t[language];

  // Menu Data from the document
  const menuItems = [
    { id: 1, name: { en: "Tea", am: "ሻይ" }, empPrice: 5, extPrice: 10, category: "Beverage" },
    { id: 2, name: { en: "Coffee", am: "ቡና" }, empPrice: 5, extPrice: 15, category: "Beverage" },
    { id: 8, name: { en: "Chechebsa Normal", am: "ጨጨብሳ ኖርማል" }, empPrice: 20, extPrice: 80, category: "Breakfast" },
    { id: 9, name: { en: "Chechebsa Special", am: "ጨጨብሳ እስፕሻል" }, empPrice: 30, extPrice: 100, category: "Breakfast" },
    { id: 15, name: { en: "Burger", am: "በርገር" }, empPrice: 45, extPrice: 150, category: "Lunch" },
    { id: 26, name: { en: "Beyaynetu", am: "በያይነት" }, empPrice: 25, extPrice: 130, category: "Lunch" },
    { id: 32, name: { en: "Gomen Besiga", am: "ጎመን በስጋ" }, empPrice: 50, extPrice: 200, category: "Lunch" },
    { id: 34, name: { en: "Pasta Forno", am: "ፓስታ ፉርኖ" }, empPrice: 50, extPrice: 200, category: "Lunch" },
  ];

  const salesData = [
    { name: '08:00', sales: 400 },
    { name: '10:00', sales: 700 },
    { name: '12:00', sales: 1200 },
    { name: '14:00', sales: 900 },
    { name: '16:00', sales: 500 },
  ];

  const addToCart = (item) => {
    const price = customerType === 'employee' ? item.empPrice : item.extPrice;
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1, currentPrice: price }]);
    }
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.currentPrice * item.qty), 0);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex flex-col items-center border-b border-slate-100">
          {/* Placeholder for MoH Logo */}
          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-lg overflow-hidden">
             <div className="text-white text-xs font-bold text-center p-1">
                FEDERAL MINISTRY OF HEALTH
             </div>
          </div>
          <h1 className="text-sm font-bold text-center text-emerald-800 uppercase tracking-wider">
            {content.title}
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">{content.dashboard}</span>
          </button>
          <button 
            onClick={() => setActiveTab('pos')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'pos' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <ShoppingCart size={20} />
            <span className="font-medium">{content.pos}</span>
          </button>
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'inventory' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Package size={20} />
            <span className="font-medium">{content.inventory}</span>
          </button>
          <button 
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50"
          >
            <Utensils size={20} />
            <span className="font-medium">{content.tableware}</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={() => setLanguage(language === 'english' ? 'amharic' : 'english')}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <Globe size={18} />
            <span className="text-sm font-semibold">{language === 'english' ? 'አማርኛ' : 'English'}</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 mt-2 text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">{content.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold text-slate-800">
              {activeTab === 'dashboard' ? content.dashboard : activeTab === 'pos' ? content.pos : content.inventory}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">Admin User</p>
              <p className="text-xs text-emerald-600 flex items-center justify-end">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1 animate-pulse"></span>
                System Online
              </p>
            </div>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
              AD
            </div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-emerald-500 text-sm font-bold">+12.5%</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{content.totalSales}</p>
                  <h3 className="text-2xl font-bold text-slate-900">ETB 14,240.50</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                      <Clock size={24} />
                    </div>
                    <span className="text-amber-500 text-sm font-bold">High Priority</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{content.pendingOrders}</p>
                  <h3 className="text-2xl font-bold text-slate-900">14</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      <Users size={24} />
                    </div>
                    <span className="text-blue-500 text-sm font-bold">Live Now</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{content.activeUsers}</p>
                  <h3 className="text-2xl font-bold text-slate-900">86</h3>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Hourly Sales Performance</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                      />
                      <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} dot={{r: 6, fill: '#10b981'}} activeDot={{r: 8}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Menu Selection */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder={content.search}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex bg-white border border-slate-200 rounded-xl p-1">
                    <button 
                      onClick={() => setCustomerType('employee')}
                      className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${customerType === 'employee' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500'}`}
                    >
                      {content.employee}
                    </button>
                    <button 
                      onClick={() => setCustomerType('external')}
                      className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${customerType === 'external' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500'}`}
                    >
                      {content.external}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => addToCart(item)}
                      className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all text-left group"
                    >
                      <div className="w-full h-24 bg-slate-100 rounded-xl mb-3 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                        <Utensils size={32} />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-1">{language === 'english' ? item.name.en : item.name.am}</h4>
                      <p className="text-emerald-600 font-bold">
                        ETB {customerType === 'employee' ? item.empPrice : item.extPrice}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart / Checkout */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[calc(100vh-180px)] sticky top-24">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold flex items-center">
                    <ShoppingCart className="mr-2 text-emerald-600" size={20} />
                    Current Order
                  </h3>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                      <ClipboardList size={48} strokeWidth={1} />
                      <p>Cart is empty</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-sm">{language === 'english' ? item.name.en : item.name.am}</p>
                          <p className="text-xs text-slate-500">ETB {item.currentPrice} x {item.qty}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-emerald-600">ETB {item.currentPrice * item.qty}</span>
                          <button 
                            onClick={() => setCart(cart.filter(i => i.id !== item.id))}
                            className="text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-6 bg-slate-50 rounded-b-2xl border-t border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">{content.total}</span>
                    <span className="text-2xl font-black text-slate-900">ETB {cartTotal.toFixed(2)}</span>
                  </div>
                  <button 
                    disabled={cart.length === 0}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center justify-center space-x-2"
                  >
                    <CheckCircle2 size={20} />
                    <span>{content.checkout}</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 text-slate-500 text-sm font-bold hover:text-slate-700">
                    <Printer size={16} />
                    <span>Print Receipt</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">Inventory Management</h3>
                  <p className="text-sm text-slate-500">የምግብ ዝርዝር እና ክምችት መቆጣጠሪያ</p>
                </div>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold flex items-center space-x-2 hover:bg-emerald-700 transition-colors">
                  <Plus size={18} />
                  <span>{content.addDish}</span>
                </button>
              </div>
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{content.dishName}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Level</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{content.status}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: "Grilled Salmon", stock: "24 Portions", status: "Available" },
                    { name: "Ethiopian Coffee", stock: "150 Cups", status: "Available" },
                    { name: "Injera", stock: "85 Pieces", status: "Low Stock" },
                    { name: "Tuna Special", stock: "0 Portions", status: "Sold Out" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{row.name}</td>
                      <td className="px-6 py-4 text-slate-600">{row.stock}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          row.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 
                          row.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' : 
                          'bg-red-100 text-red-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-emerald-600 hover:text-emerald-800 font-bold text-sm">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CafeteriaManagementSystem;