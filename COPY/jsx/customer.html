import React, { useState, useMemo } from 'react';
import { 
  ShoppingCart, 
  User, 
  Languages, 
  ChevronRight, 
  Plus, 
  Minus, 
  Trash2, 
  CheckCircle,
  Clock,
  Info
} from 'lucide-react';

const CustomerPortal = () => {
  const [lang, setLang] = useState('am'); // 'am' for Amharic, 'en' for English
  const [isEmployee, setIsEmployee] = useState(true);
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);

  // Content Dictionary
  const content = {
    am: {
      title: "የጤና ሚኒስቴር የሰራተኞች ክበብ",
      subtitle: "የምግብ አገልግሎት መግቢያ",
      employee: "የውስጥ ሰራተኛ",
      visitor: "እንግዳ",
      menu: "የዛሬ ምግቦች",
      cart: "የእርስዎ ጋሪ",
      total: "ጠቅላላ ዋጋ",
      checkout: "ትዕዛዝ አጠናቅ",
      empty: "ምንም የተመረጠ ምግብ የለም",
      subsidized: "ለሰራተኞች ቅናሽ ተደርጓል",
      visitorPrice: "መደበኛ ዋጋ",
      categories: { all: "ሁሉም", breakfast: "ቁርስ", lunch: "ምሳ", drinks: "መጠጦች" },
      success: "ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል!"
    },
    en: {
      title: "MoH Cafeteria Portal",
      subtitle: "Cafeteria Service Access",
      employee: "Employee",
      visitor: "Visitor",
      menu: "Today's Meals",
      cart: "Your Cart",
      total: "Total Price",
      checkout: "Checkout",
      empty: "No items selected",
      subsidized: "Subsidized for Employees",
      visitorPrice: "Regular Price",
      categories: { all: "All", breakfast: "Breakfast", lunch: "Lunch", drinks: "Drinks" },
      success: "Order placed successfully!"
    }
  };

  const t = content[lang];

  // Menu items based on the provided document
  const menuItems = [
    { id: 1, name: { am: "ሻይ", en: "Tea" }, empPrice: 5, extPrice: 10, cat: "drinks" },
    { id: 2, name: { am: "ቡና", en: "Coffee" }, empPrice: 5, extPrice: 15, cat: "drinks" },
    { id: 9, name: { am: "ጨጨብሳ እስፕሻል", en: "Chechebsa Special" }, empPrice: 30, extPrice: 100, cat: "breakfast" },
    { id: 15, name: { am: "በርገር", en: "Burger" }, empPrice: 45, extPrice: 150, cat: "lunch" },
    { id: 26, name: { am: "በያይነት", en: "Beyaynetu" }, empPrice: 25, extPrice: 130, cat: "lunch" },
    { id: 32, name: { am: "ጎመን በስጋ", en: "Gomen Besiga" }, empPrice: 50, extPrice: 200, cat: "lunch" },
  ];

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return newQty === 0 ? null : { ...item, qty: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const total = cart.reduce((sum, item) => {
    const price = isEmployee ? item.empPrice : item.extPrice;
    return sum + (price * item.qty);
  }, 0);

  const handleCheckout = () => {
    setOrderStatus('success');
    setCart([]);
    setTimeout(() => setOrderStatus(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Header with MoH Logo Concept */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white text-[8px] font-bold text-center leading-tight">MoH<br/>ETH</span>
            </div>
            <div>
              <h1 className="text-sm md:text-base font-bold text-slate-800">{t.title}</h1>
              <p className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider">{t.subtitle}</p>
            </div>
          </div>
          
          <button 
            onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
            className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <Languages size={16} />
            <span>{lang === 'am' ? 'English' : 'አማርኛ'}</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Menu */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Type Selector */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center space-x-3 text-slate-600">
              <User size={20} />
              <span className="text-sm font-bold">{isEmployee ? t.employee : t.visitor}</span>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setIsEmployee(true)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${isEmployee ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'}`}
              >
                {t.employee}
              </button>
              <button 
                onClick={() => setIsEmployee(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${!isEmployee ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'}`}
              >
                {t.visitor}
              </button>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-800 flex items-center">
              <Clock className="mr-2 text-emerald-500" size={20} />
              {t.menu}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-md">
                        {t.categories[item.cat]}
                      </span>
                      <h3 className="font-bold text-slate-800 mt-1">{lang === 'am' ? item.name.am : item.name.en}</h3>
                      <div className="mt-2">
                        <span className="text-lg font-black text-slate-900">
                          {isEmployee ? item.empPrice : item.extPrice} ብር
                        </span>
                        {!isEmployee && <span className="text-[10px] text-slate-400 ml-2 line-through">{item.empPrice} ብር</span>}
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-emerald-600 text-white p-2 rounded-xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-transform active:scale-95"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Cart */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden sticky top-24">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-800 flex items-center">
                <ShoppingCart className="mr-2 text-emerald-600" size={20} />
                {t.cart}
              </h3>
            </div>

            <div className="p-6 min-h-[200px] max-h-[400px] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-3 py-10">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p className="text-sm font-medium">{t.empty}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800">{lang === 'am' ? item.name.am : item.name.en}</p>
                        <p className="text-xs text-emerald-600 font-bold">
                          {(isEmployee ? item.empPrice : item.extPrice) * item.qty} ብር
                        </p>
                      </div>
                      <div className="flex items-center bg-slate-100 rounded-lg p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:text-emerald-600"><Minus size={14} /></button>
                        <span className="px-3 text-xs font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:text-emerald-600"><Plus size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-slate-500">{t.total}</span>
                  <span className="text-2xl font-black text-slate-900">{total} ብር</span>
                </div>
                
                <div className="flex items-center space-x-2 text-[10px] text-slate-500 bg-white p-2 rounded-lg border border-slate-200">
                  <Info size={14} className="text-emerald-500" />
                  <span>{isEmployee ? t.subsidized : t.visitorPrice}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <span>{t.checkout}</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Success Message */}
          {orderStatus === 'success' && (
            <div className="mt-4 bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center space-x-3 animate-bounce">
              <CheckCircle className="text-emerald-600" />
              <p className="text-sm font-bold text-emerald-800">{t.success}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CustomerPortal;