"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Clock,
  Target,
  Trophy,
  GraduationCap,
  Users,
  Microscope,
  Star,
  CheckCircle2,
  ArrowRight,
  Library,
  Laptop,
  HeartPulse,
  Coffee,
  Globe,
  Medal,
} from "lucide-react";
import Image from "next/image";

export default function AcademicPage() {
  return (
    <div className="pb-20 bg-gray-50/30 min-h-screen font-sans">
      {/* --- 1. PREMIUM MASKED HERO --- */}
      <section className="bg-primary text-white py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://i.ibb.co.com/dw7ShQgd/imagr.jpg"
            alt="Academic"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 space-y-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-primary border rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-primary/40"
          >
            <GraduationCap className="text-white w-12 h-12" />
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Excellence <br />{" "}
            <span className="text-secondary italic">Redefined</span>
          </h1>
        </div>
      </section>

      {/* --- 2. FLOATING STATS BAR --- */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-30">
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-wrap justify-between items-center gap-8 border border-gray-100">
          {[
            {
              label: "Success Rate",
              val: "100%",
              icon: <Trophy className="text-primary" />,
            },
            {
              label: "Expert Mentors",
              val: "50+",
              icon: <Users className="text-primary" />,
            },
            {
              label: "Research Labs",
              val: "12",
              icon: <Microscope className="text-primary" />,
            },
            {
              label: "Global Alumni",
              val: "5K+",
              icon: <Globe className="text-primary" />,
            },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-2xl">{s.icon}</div>
              <div>
                <div className="text-2xl font-black text-secondary">
                  {s.val}
                </div>
                <div className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. ACADEMIC PILLARS (GRID) --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary uppercase tracking-tight">
            Our Core <span className="text-primary">Pillars</span>
          </h2>
          <p className="text-gray-400 mt-2 font-medium uppercase tracking-[0.2em] text-xs">
            Foundation of Leadership
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Military Discipline",
              icon: <ShieldCheck />,
              color: "bg-blue-50 text-blue-600",
            },
            {
              title: "Academic Rigor",
              icon: <BookOpen />,
              color: "bg-red-50 text-red-600",
            },
            {
              title: "Moral Values",
              icon: <Star />,
              color: "bg-amber-50 text-amber-600",
            },
            {
              title: "Physical Fitness",
              icon: <HeartPulse />,
              color: "bg-emerald-50 text-emerald-600",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all group"
            >
              <div
                className={`w-16 h-16 ${p.color} rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary uppercase tracking-tighter">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. THE CURRICULUM OVERVIEW --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 border border-gray-100 shadow-sm">
          <div className="flex-1 space-y-6">
            <span className="text-primary font-black uppercase tracking-widest text-sm">
              Balanced Learning
            </span>
            <h2 className="text-5xl font-black text-secondary leading-none">
              Blending Science <br /> & Spirituality
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed italic">
              "We provide a curriculum that prepares students for both this
              world and the next, focusing on modern science and Islamic
              values."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 text-secondary font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" /> MERN Stack
                Training
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" /> Hifz-ul-Quran
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-primary rounded-full animate-blob blur-3xl opacity-10"></div>
            <Image
              src="https://i.ibb.co.com/dw7ShQgd/imagr.jpg"
              alt="Edu"
              fill
              className="rounded-[3rem] object-cover rotate-3 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- 5. TIMELINE OF EXCELLENCE --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-secondary mb-16">
          Academic <span className="text-primary italic">Journey</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Induction & Orientation",
              desc: "Setting the foundation of discipline.",
            },
            {
              step: "02",
              title: "Intensive Academic Training",
              desc: "Focusing on core subjects and skills.",
            },
            {
              step: "03",
              title: "Leadership Development",
              desc: "Assuming responsibilities in student government.",
            },
            {
              step: "04",
              title: "Final Assessment & Graduation",
              desc: "Ready to conquer the professional world.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-8 bg-white p-8 rounded-3xl border border-gray-50 hover:border-primary/20 transition-all cursor-default group"
            >
              <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors">
                {item.step}
              </span>
              <div>
                <h4 className="text-xl font-bold text-secondary">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. MODERN FACILITIES --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-secondary rounded-[3rem] p-16 flex flex-col justify-end text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform">
              <Laptop size={200} />
            </div>
            <h3 className="text-4xl font-black uppercase mb-4">
              Smart <br /> Campus
            </h3>
            <p className="text-white/60">
              High-speed internet, digital classrooms, and 24/7 technical
              support for all cadets.
            </p>
          </div>
          <div className="bg-primary rounded-[3rem] p-12 text-white flex flex-col justify-between">
            <Library size={48} />
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2">
                Central Library
              </h3>
              <p className="text-white/70 text-sm italic">
                Over 15,000 collections including digital archives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. DAILY SYNC (ROUTINE) --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[4rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-primary p-10 text-center text-white">
            <h2 className="text-3xl font-black uppercase tracking-widest">
              The Daily Sync
            </h2>
          </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                time: "05:00 AM",
                task: "Tahajjud & Fajr",
                sub: "Spiritual Awakening",
              },
              {
                time: "08:30 AM",
                task: "Morning Assembly",
                sub: "Discipline Start",
              },
              {
                time: "02:00 PM",
                task: "Lunch & Prayer",
                sub: "Recharge Break",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="text-center border-r last:border-0 border-gray-100"
              >
                <div className="text-3xl font-black text-primary mb-2">
                  {t.time}
                </div>
                <div className="text-lg font-bold text-secondary uppercase tracking-tighter">
                  {t.task}
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  {t.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. CO-CURRICULAR CLUBS --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <h2 className="text-5xl font-black text-secondary uppercase leading-none">
            Beyond <br /> <span className="text-primary italic">Books</span>
          </h2>
          <div className="flex gap-2">
            {["Debate", "Coding", "Sports", "Photography"].map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-white rounded-full text-[10px] font-bold text-secondary border border-gray-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 rounded-[3rem] overflow-hidden relative group">
            <Image
              src="https://i.ibb.co.com/dw7ShQgd/imagr.jpg"
              alt="Club"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <h4 className="text-white text-2xl font-bold">
                Science & Robotics Club
              </h4>
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded-[3rem] overflow-hidden relative group">
            <Image
              src="https://i.ibb.co.com/dw7ShQgd/imagr.jpg"
              alt="Club"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-inner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <h4 className="text-white text-2xl font-bold">
                BNCC & Scout Wing
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. FACULTY RECOGNITION --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 bg-white rounded-[4rem] border border-gray-50 mb-24">
        <div className="text-center space-y-6">
          <Medal className="mx-auto text-primary w-12 h-12" />
          <h2 className="text-4xl font-bold text-secondary italic">
            Our Faculty is Our Pride
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mentors from top universities and retired military officials ensure
            the best quality of training.
          </p>
          <button className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            Meet The Mentors <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* --- 10. DYNAMIC ADMISSION CTA --- */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-primary p-16 rounded-[4rem] flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="text-center md:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight italic">
              Enroll for <br /> Session 2026
            </h2>
            <p className="text-white/70 mt-4 font-bold uppercase tracking-[0.3em] text-xs">
              Only limited seats available for Grade 6-9
            </p>
          </div>
          <div className="z-10">
            <button className="bg-secondary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
