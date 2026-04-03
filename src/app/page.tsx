"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Phone,
  BookOpen,
  PenTool,
  Rocket,
  Globe,
} from "lucide-react"; // নতুন আইকন
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Trophy,
  Microscope,
  Palette,
  Clock,
  Loader2,
  Calendar,
  // যদি আমার দেওয়া নতুন কোডটি ব্যবহার করেন
} from "lucide-react";
import Link from "next/link";
import NoticeBoard from "@/components/NoticeBoard";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const staticSettings = {
  schoolNameBn: "ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ",
  schoolNameEn: "Cantonment Public School & College",
};

const stats = [
  { key: "students", value: "২৫০০+", icon: Users },
  { key: "teachers", value: "১২০+", icon: GraduationCap },
  { key: "labs", value: "০৬", icon: Microscope },
  { key: "success", value: "১০০%", icon: Trophy },
];

const deptCards = [
  {
    icon: Microscope,
    color: "bg-blue-600",
    titleKey: "Science Lab",
    titleBn: "বিজ্ঞানাগার",
    descBn:
      "আধুনিক যন্ত্রপাতি সমৃদ্ধ ল্যাব যেখানে হাতে-কলমে শেখার সুযোগ রয়েছে।",
    descEn: "Fully equipped modern labs for practical scientific exploration.",
  },
  {
    icon: BookOpen,
    color: "bg-indigo-600",
    titleKey: "Library",
    titleBn: "লাইব্রেরি",
    descBn: "১০,০০০+ বইয়ের সংগ্রহ নিয়ে আমাদের রয়েছে বিশাল ডিজিটাল লাইব্রেরি।",
    descEn: "A vast collection of 10,000+ books with digital access.",
  },
  {
    icon: Palette,
    color: "bg-rose-600",
    titleKey: "Arts & Culture",
    titleBn: "শিল্প ও সংস্কৃতি",
    descBn: "চিত্রাঙ্কন, বিতর্ক এবং সংগীত চর্চার জন্য বিশেষ ক্লাব সুবিধা।",
    descEn: "Specialized clubs for painting, debating, and music.",
  },
  {
    icon: Trophy,
    color: "bg-amber-600",
    titleKey: "Sports Complex",
    titleBn: "ক্রীড়া কমপ্লেক্স",
    descBn: "বিশাল খেলার মাঠ এবং পেশাদার কোচিংয়ের মাধ্যমে খেলাধুলা চর্চা।",
    descEn: "Large playground with professional sports coaching facilities.",
  },
];

const schoolSchedule = [
  {
    nameBn: "অ্যাসেম্বলি",
    nameEn: "Assembly",
    time: "08:00 AM",
    tagBn: "বাধ্যতামূলক",
    tagEn: "Mandatory",
  },
  {
    nameBn: "১ম পিরিয়ড",
    nameEn: "1st Period",
    time: "08:30 AM",
    tagBn: "একাডেমিক",
    tagEn: "Academic",
  },
  {
    nameBn: "টিফিন বিরতি",
    nameEn: "Tiffin Break",
    time: "11:00 AM",
    tagBn: "বিশ্রাম",
    tagEn: "Break",
  },
  {
    nameBn: "২য় পিরিয়ড",
    nameEn: "2nd Period",
    time: "11:30 AM",
    tagBn: "একাডেমিক",
    tagEn: "Academic",
  },
  {
    nameBn: "স্পোর্টস/ক্লাব",
    nameEn: "Sports/Club",
    time: "01:30 PM",
    tagBn: "সহ-শিক্ষা",
    tagEn: "Co-Curricular",
  },
  {
    nameBn: "ছুটি",
    nameEn: "Dismissal",
    time: "02:30 PM",
    tagBn: "বাস",
    tagEn: "Home",
  },
];

const events = [
  {
    date: "২০ এপ্রিল",
    dateEn: "Apr 20",
    titleBn: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    titleEn: "Annual Sports Day",
    timeBn: "সকাল ০৮:০০",
    timeEn: "08:00 AM",
    tag: "🏅",
  },
  {
    date: "১৫ মে",
    dateEn: "May 15",
    titleBn: "বিজ্ঞান ও প্রযুক্তি মেলা",
    titleEn: "Science & Tech Fair",
    timeBn: "সকাল ০৯:৩০",
    timeEn: "09:30 AM",
    tag: "🚀",
  },
];

export default function Home() {
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const floatingElements = [
    { icon: BookOpen, color: "text-[#fbbf24]", x: "10%", y: "20%", delay: 0 },
    { icon: Rocket, color: "text-white", x: "70%", y: "15%", delay: 0.2 },
    { icon: PenTool, color: "text-[#fbbf24]", x: "30%", y: "60%", delay: 0.4 },
    { icon: Globe, color: "text-white", x: "80%", y: "70%", delay: 0.6 },
  ];

  const schoolName =
    language === "bn"
      ? staticSettings.schoolNameBn
      : staticSettings.schoolNameEn;

  return (
    <div className="space-y-24 pb-20 bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* --- BACKGROUND LAYER --- */}
        <div className="absolute inset-0 z-0">
          {/* Chalk Doodle Background Image */}
          <Image
            src="https://i.ibb.co.com/DfR6BPJ7/back-school-chalk-doodle-style-600nw-2478758625.webp"
            alt="Doodle Background"
            fill
            className="object-cover opacity-20"
            priority
          />

          {/* Red Shape (Custom Wave/Organic Shape) */}
          <div
            className="absolute inset-0 bg-[#b91c1c] z-10"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 40%, 65% 55%, 45% 90%, 0 100%)",
            }}
          />

          {/* Desktop Red Shape Override */}
          <div
            className="hidden lg:block absolute inset-0 bg-[#b91c1c] z-10 shadow-2xl"
            style={{
              clipPath: "polygon(0 0, 75% 0, 50% 100%, 0 100%)",
            }}
          />

          {/* Yellow Circle Decoration */}
          <div className="absolute right-[2%] lg:right-[8%] top-[10%] lg:top-[15%] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-[#fbbf24] rounded-full z-0 opacity-100 shadow-inner" />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 pt-10 lg:pt-0"
            >
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                {language === "bn"
                  ? "ভর্তি চলছে - ২০২৬"
                  : "Admissions Open - 2026"}
              </div>

              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic drop-shadow-2xl">
                {language === "bn" ? "ভর্তি" : "Open School"} <br />
                <span className="text-[#fbbf24] drop-shadow-lg">
                  {language === "bn" ? "চলছে" : "Admission"}
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-md font-medium">
                {language === "bn"
                  ? "আধুনিক শিক্ষা ব্যবস্থা, দক্ষ শিক্ষক এবং আপনার সন্তানের সুন্দর ভবিষ্যতের নিশ্চয়তা।"
                  : "We offer exciting school admission deals, certified teachers, and tailored learning plans to help you succeed!"}
              </p>

              <div className="flex flex-wrap gap-8 pt-4 items-center">
                {/* Enroll Button */}
                <Link
                  href="/admission"
                  className="bg-white text-black px-10 py-4 rounded-xl font-black text-sm transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-2 uppercase"
                >
                  {language === "bn" ? "এখনই আবেদন করুন" : "Enroll Now"}
                </Link>

                {/* Call Info */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#fbbf24] flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider italic">
                      Call For More Info
                    </span>
                    <span className="text-lg lg:text-2xl font-black text-white tracking-tighter italic group-hover:text-[#fbbf24] transition-colors">
                      01234 567 890
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <div className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse"></div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-[0.2em]">
                  Now Open For Registration
                </p>
              </div>
            </motion.div>

            {/* --- RIGHT CONTENT (CREATIVE DOODLE ELEMENTS) --- */}
            <div className="relative h-[400px] lg:h-[700px] flex items-center justify-center">
              {/* হলুদ বৃত্তের ভেতরে এই ডুডল উপাদানগুলো ভাসবে */}
              <div className="relative w-full h-full">
                {floatingElements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: [0, -20, 0], // উপরে-নিচে ভাসার ইফেক্ট
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 4,
                      repeat: Infinity, // আজীবন ভাসতে থাকবে
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.color} drop-shadow-2xl`}
                    style={{
                      left: item.x,
                      top: item.y,
                    }}
                  >
                    {/* আইকনের সাইজ */}
                    <item.icon
                      size={80}
                      strokeWidth={1.5}
                      className="lg:scale-150"
                    />
                  </motion.div>
                ))}
              </div>

              {/* সেন্টার পিস (আপনি চাইলে এখানে লোগোও দিতে পারেন) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute z-30 bg-white/5 backdrop-blur-xl border-4 border-[#fbbf24] p-10 rounded-full shadow-2xl"
              >
                <div className="text-center text-[#fbbf24] space-y-2">
                  <Rocket size={60} className="mx-auto" />
                  <p className="text-3xl font-black uppercase tracking-tighter">
                    ২০২৬
                  </p>
                  <p className="text-xs font-bold uppercase text-white/80">
                    ভর্তি
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 text-center space-y-4 border border-slate-100 group hover:border-blue-500/30 transition-all"
            >
              <div className="inline-flex p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-slate-900">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                {language === "bn"
                  ? stat.key === "students"
                    ? "ছাত্র-ছাত্রী"
                    : stat.key === "teachers"
                      ? "শিক্ষক"
                      : stat.key === "labs"
                        ? "ল্যাব"
                        : "সাফল্য"
                  : stat.key}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* School Schedule Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-12 border shadow-2xl relative overflow-hidden text-white"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-4xl font-black text-amber-400 tracking-tight">
                {language === "bn" ? "দৈনিক সময়সূচী" : "Daily Schedule"}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 font-bold">
                <Calendar className="w-4 h-4" />
                <span className="text-sm uppercase tracking-widest">
                  Academic Routine 2026
                </span>
              </div>
            </div>
            <div className="px-8 py-3 bg-gray-50/30 rounded-2xl border text-amber-400 font-bold">
              {new Date().toLocaleDateString(
                language === "bn" ? "bn-BD" : "en-US",
                { weekday: "long", day: "numeric", month: "long" },
              )}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-12 h-12 animate-spin text-amber-400" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {schoolSchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/30 p-8 rounded-[2.5rem] text-center space-y-4 border border-amber-400 hover:bg-white/10 transition-all group"
                >
                  <div className="w-16 h-16 border-2 border-dashed border-amber-400/50 rounded-full flex items-center justify-center mx-auto text-amber-400 group-hover:border-solid transition-all">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      {language === "bn" ? item.nameBn : item.nameEn}
                    </h3>
                    <p className="text-sm font-black text-amber-400 uppercase tracking-tighter">
                      {item.time}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      {language === "bn" ? item.tagBn : item.tagEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Principal Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-12 items-center md:items-start bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-blue-900/5">
            <div className="relative w-full md:w-64 h-80 shrink-0 overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1888"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">
                Message from Principal
              </div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                শিক্ষা ও শৃঙ্খলাই আমাদের মূল শক্তি
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed italic">
                "একটি সমৃদ্ধ জাতি গঠনে সঠিক শিক্ষার কোনো বিকল্প নেই। আমরা আমাদের
                প্রতিটি শিক্ষার্থীকে নৈতিকতা ও আধুনিক জ্ঞানের সমন্বয়ে গড়ে তুলতে
                প্রতিশ্রুতিবদ্ধ।"
              </p>
              <div>
                <h4 className="font-black text-slate-900 text-xl">
                  কর্নেল এম. এ. রহমান
                </h4>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                  অধ্যক্ষ, ক্যান্টনমেন্ট স্কুল
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <NoticeBoard />
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="bg-gray-50/30 py-24 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-amber-400 font-black uppercase tracking-widest text-sm">
              Why Choose Us
            </h2>
            <h2 className="text-4xl md:text-5xl font-black">
              আমাদের বিশেষত্বসমূহ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {deptCards.map((dept, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-[2.5rem] p-8 shadow-2xl hover:bg-white hover:text-slate-900 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 ${dept.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
                >
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4">
                  {language === "bn" ? dept.titleBn : dept.titleKey}
                </h3>
                <p className="opacity-60 font-medium group-hover:opacity-100 transition-opacity">
                  {language === "bn" ? dept.descBn : dept.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-slate-900">
            {language === "bn" ? "আসন্ন ইভেন্ট" : "Upcoming Events"}
          </h2>
          <Link
            href="/events"
            className="text-blue-600 font-bold flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 flex items-center gap-8 shadow-lg shadow-blue-900/5"
            >
              <div className="bg-blue-600 text-white p-6 rounded-[1.5rem] text-center min-w-[100px]">
                <span className="block text-3xl font-black">
                  {language === "bn"
                    ? event.date.split(" ")[0]
                    : event.dateEn.split(" ")[1]}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                  {language === "bn"
                    ? event.date.split(" ")[1]
                    : event.dateEn.split(" ")[0]}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">
                  {language === "bn" ? event.titleBn : event.titleEn}
                </h3>
                <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />{" "}
                    {language === "bn" ? event.timeBn : event.timeEn}
                  </span>
                  <span className="text-2xl">{event.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] overflow-hidden px-8 py-20 text-white text-center shadow-2xl shadow-blue-600/20">
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <div className="text-5xl">🎓</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ শুরু হোক এখান থেকেই
            </h2>
            <p className="text-white/80 text-xl font-medium">
              ২০২৬ শিক্ষাবর্ষে প্লে থেকে ৯ম শ্রেণী পর্যন্ত সীমিত আসনে ভর্তি
              চলছে।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admission"
                className="bg-amber-400 hover:bg-amber-500 text-blue-950 px-12 py-5 rounded-[2rem] font-black text-xl transition-all shadow-2xl"
              >
                এখনই আবেদন করুন
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-12 py-5 rounded-[2rem] font-black text-xl transition-all">
                যোগাযোগ করুন
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
