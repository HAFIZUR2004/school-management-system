"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bell, 
  Calendar, 
  Download, 
  Search, 
  ChevronRight, 
  FileText,
  Clock,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// ডামি নোটিশ ডাটা
const noticesData = [
  {
    id: 1,
    titleBn: "২০২৬ শিক্ষাবর্ষের বার্ষিক ক্রীড়া প্রতিযোগিতার সময়সূচী",
    titleEn: "Schedule for Annual Sports Competition 2026",
    date: "১০ এপ্রিল, ২০২৬",
    category: "Academic",
    isNew: true,
  },
  {
    id: 2,
    titleBn: "পবিত্র ঈদুল ফিতর উপলক্ষে ছুটির নোটিশ",
    titleEn: "Holiday Notice for Holy Eid-ul-Fitr",
    date: "০৫ এপ্রিল, ২০২৬",
    category: "Holiday",
    isNew: true,
  },
  {
    id: 3,
    titleBn: "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশ প্রসঙ্গে",
    titleEn: "Publication of First Term Exam Results",
    date: "২৮ মার্চ, ২০২৬",
    category: "Exam",
    isNew: false,
  },
  {
    id: 4,
    titleBn: "অভিভাবক সমাবেশের আমন্ত্রণ পত্র",
    titleEn: "Invitation for Parent-Teacher Meeting",
    date: "২২ মার্চ, ২০২৬",
    category: "Event",
    isNew: false,
  },
];

export default function NoticePage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotices = noticesData.filter(notice => 
    (language === 'bn' ? notice.titleBn : notice.titleEn).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- Header Section --- */}
      <section className="relative bg-[#b91c1c] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fbbf24] rounded-full -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-[#fbbf24] font-bold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'bn' ? 'হোমপেজে ফিরে যান' : 'Back to Home'}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
          >
            {language === 'bn' ? 'নোটিশ' : 'Notice'} <span className="text-[#fbbf24]">{language === 'bn' ? 'বোর্ড' : 'Board'}</span>
          </motion.h1>
          <p className="text-white/80 mt-4 max-w-xl font-medium">
            {language === 'bn' 
              ? 'স্কুলের সকল গুরুত্বপূর্ণ ঘোষণা, পরীক্ষার সময়সূচী এবং ছুটির আপডেট এখানে পাওয়া যাবে।' 
              : 'Find all important announcements, exam schedules, and holiday updates here.'}
          </p>
        </div>
      </section>

      {/* --- Filter & Search Section --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={language === 'bn' ? "নোটিশ খুঁজুন..." : "Search notices..."}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#b91c1c] font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            {['All', 'Academic', 'Exam', 'Holiday'].map((cat) => (
              <button key={cat} className="px-5 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-[#b91c1c] hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Notice List --- */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="space-y-4">
          {filteredNotices.map((notice, index) => (
            <motion.div 
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-[2rem] border-l-[8px] border-[#fbbf24] hover:border-[#b91c1c] shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="hidden md:flex w-16 h-16 bg-slate-100 rounded-2xl items-center justify-center text-[#b91c1c] group-hover:bg-[#b91c1c] group-hover:text-white transition-all">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 rounded-full">
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase bg-red-100 text-red-600 px-2 py-1 rounded-full animate-pulse">
                        <Bell className="w-3 h-3" /> New
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-[#b91c1c] transition-colors leading-tight">
                    {language === 'bn' ? notice.titleBn : notice.titleEn}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {notice.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> ১০:৩০ AM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-none pt-4 md:pt-0">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#b91c1c] text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all">
                  <Download className="w-4 h-4" /> {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                </button>
                <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-[#fbbf24] hover:text-black transition-all">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 text-slate-200">🔍</div>
            <h3 className="text-2xl font-bold text-slate-400">
              {language === 'bn' ? 'কোন নোটিশ পাওয়া যায়নি' : 'No notices found'}
            </h3>
          </div>
        )}
      </section>
    </div>
  );
}