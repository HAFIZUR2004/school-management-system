'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, BookOpen, Home, Info, GraduationCap, 
  ClipboardList, Image as ImageIcon, Phone, 
  Download, Lock, Globe, LayoutDashboard, LogOut,
  Bell // নোটিশের জন্য নতুন আইকন
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();

  // স্কুলের জন্য প্রয়োজনীয় মেনু আইটেম
  const navItems = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: language === 'bn' ? 'নোটিশ' : 'Notice', path: '/notices', icon: Bell }, // নতুন
    { name: t('nav.about'), path: '/about', icon: Info },
    { name: language === 'bn' ? 'একাডেমিক' : 'Academic', path: '/academic', icon: BookOpen }, // আপডেট
    { name: t('nav.admission'), path: '/admission', icon: GraduationCap },
    { name: t('nav.results'), path: '/results', icon: ClipboardList },
    { name: t('nav.gallery'), path: '/gallery', icon: ImageIcon },
    { name: t('nav.contact'), path: '/contact', icon: Phone },
  ];

  const toggleLanguage = () => setLanguage(language === 'bn' ? 'en' : 'bn');

  const dashboardLink = !user ? '/login' : (user.role === 'admin' ? '/admin/dashboard' : '/student/dashboard');
  const dashboardLabel = !user 
    ? (language === 'bn' ? 'লগইন' : 'Login') 
    : (user.role === 'admin' ? 'Admin Panel' : 'Student Panel');

  return (
    // থিম অনুযায়ী বর্ডার এবং ব্যাকগ্রাউন্ড
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#b91c1c]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* --- Logo Section --- */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* স্কুলের থিম রেড কালার আইকন বক্স */}
              <div className="w-12 h-12 bg-[#b91c1c] rounded-xl flex items-center justify-center text-[#fbbf24] font-black text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
                CP
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
                  {language === 'bn' ? 'ক্যান্টনমেন্ট পাবলিক' : 'Cantonment Public'}
                </span>
                <span className="text-[10px] text-[#b91c1c] font-bold uppercase tracking-[0.2em]">
                  School & College
                </span>
              </div>
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 py-2 rounded-lg text-[13px] font-bold transition-all flex items-center space-x-1.5 uppercase tracking-tight",
                  pathname === item.path 
                    ? "text-[#b91c1c] bg-[#b91c1c]/5" 
                    : "text-slate-600 hover:text-[#b91c1c] hover:bg-slate-50"
                )}
              >
                <item.icon className={cn("w-4 h-4", pathname === item.path ? "text-[#b91c1c]" : "text-slate-400")} />
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="flex items-center space-x-3 ml-4 border-l-2 border-slate-100 pl-4">
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage} 
                className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#fbbf24] hover:text-black transition-all text-xs font-black border border-slate-200"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'EN' : 'বাংলা'}</span>
              </button>

              {/* Dashboard Button - Theme Color Amber */}
              <Link
                href={dashboardLink}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center space-x-2 border-2 uppercase tracking-widest shadow-md",
                  user 
                    ? "bg-[#b91c1c] border-[#b91c1c] text-white hover:opacity-90" 
                    : "bg-[#fbbf24] border-[#fbbf24] text-black hover:bg-black hover:text-white hover:border-black"
                )}
              >
                {user ? <LayoutDashboard className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                <span>{dashboardLabel}</span>
              </Link>

              {user && (
                <button 
                  onClick={logout} 
                  className="p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button onClick={toggleLanguage} className="text-[10px] font-black bg-[#fbbf24] px-2 py-1.5 rounded-lg border border-black/5">
              {language === 'bn' ? 'EN' : 'বাংলা'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white bg-[#b91c1c] p-2 rounded-xl shadow-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t-4 border-[#b91c1c] absolute w-full shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex px-5 py-4 rounded-2xl text-base font-black items-center space-x-4 transition-all uppercase tracking-tighter",
                    pathname === item.path 
                      ? "text-[#b91c1c] bg-[#b91c1c]/5 border-l-4 border-[#b91c1c]" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                <Link 
                  href={dashboardLink} 
                  onClick={() => setIsOpen(false)} 
                  className="flex px-5 py-5 rounded-2xl text-base font-black text-black bg-[#fbbf24] items-center justify-center space-x-3 shadow-xl shadow-[#fbbf24]/20 uppercase italic"
                >
                  {user ? <LayoutDashboard className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                  <span>{dashboardLabel}</span>
                </Link>
                
                {user && (
                  <button 
                    onClick={logout} 
                    className="w-full flex px-5 py-5 rounded-2xl text-base font-black text-red-600 bg-red-50 items-center justify-center space-x-3 border border-red-100"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>LOGOUT</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}