import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Mail, Gift, BookOpen, MapPin, ChevronDown, Sparkles, X, School, Baby, ArrowRight, Map, Home, Phone, MessageSquare, Car, Bus, Hotel, Users, Camera, Video, Plus, Upload, Trash2, Wand2, ArrowLeft } from 'lucide-react';

const FlyingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: `${Math.random() * 120 - 10}vh`, // Start at various heights for immediate visibility
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{ 
            y: '-20vh',
            opacity: [0, 0.8, 0.8, 0],
            x: [
              null, 
              `${(Math.random() * 100)}vw`, 
              `${(Math.random() * 100)}vw`
            ],
            rotate: [0, 180, -180, 360]
          }}
          transition={{ 
            duration: Math.random() * 8 + 10, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: i * 0.2 // Spread out the start times
          }}
          className="absolute text-red-500"
        >
          <Heart 
            fill="currentColor" 
            size={Math.random() * 30 + 15} 
            className="drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
          />
        </motion.div>
      ))}
    </div>
  );
};

const ChildhoodChapterIntro = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="min-h-screen flex items-center justify-center p-6 relative z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-stone-400 font-bold hover:text-[#FF6B6B] transition-colors"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/chapter1')}
        className="cursor-pointer group relative max-w-md w-full"
      >
        {/* Decorative Elements around card */}
        <div className="absolute -top-12 -left-12 text-6xl animate-bounce">🎈</div>
        <div className="absolute -bottom-12 -right-12 text-6xl animate-pulse">🍭</div>
        
        <div className="bg-white p-12 rounded-[3rem] shadow-[20px_20px_0px_#FFADAD] border-8 border-white text-center space-y-8">
          <div className="w-32 h-32 bg-[#FFADAD] rounded-full mx-auto flex items-center justify-center text-white shadow-inner group-hover:rotate-12 transition-transform duration-500">
            <Baby size={64} />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-stone-400 font-black tracking-[0.3em] uppercase text-sm">Chapter 1</h3>
            <h2 className="text-5xl font-['Comic_Sans_MS',_cursive] font-black text-[#FF6B6B]">Childhood</h2>
            <p className="text-stone-500 text-lg font-medium leading-relaxed">
              Click to travel back in time to where our story first blossomed...
            </p>
          </div>

          <div className="pt-6">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-flex items-center gap-3 text-[#FF6B6B] font-black uppercase tracking-widest text-sm"
            >
              Open Chapter <ArrowRight />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const ChildhoodChapter = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter1-intro')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-stone-400 font-bold hover:text-[#FF6B6B] transition-colors font-sans"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>
      {/* Playful Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Colorful Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              backgroundColor: ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF'][Math.floor(Math.random() * 7)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Floating School Icons */}
        <School className="absolute top-10 left-10 text-orange-200 w-24 h-24 rotate-[-15deg]" />
        <BookOpen className="absolute bottom-10 right-10 text-blue-200 w-24 h-24 rotate-[15deg]" />
        <Sparkles className="absolute top-1/4 right-1/4 text-yellow-200 w-16 h-16 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center py-8">
        {/* Crayon-style Heading */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-['Comic_Sans_MS',_cursive] font-bold text-[#FF6B6B] drop-shadow-sm">
            School Days!
          </h2>
          <div className="h-2 w-32 bg-yellow-300 mx-auto rounded-full mt-2 rotate-[-1deg]"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
          
          {/* Boy Character Card */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -5 }}
            animate={{ x: 0, opacity: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="bg-white p-3 rounded-[1.5rem] shadow-[8px_8px_0px_#A0C4FF] border-4 border-[#A0C4FF] relative overflow-visible group">
              {/* Photo Frame */}
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-[1.2rem] overflow-hidden border-4 border-stone-100 shadow-inner bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807daa2b56ff?auto=format&fit=crop&q=80&w=800" 
                  alt="3-year-old Boy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={(e) => console.log("Nursery Boy image loaded")}
                  onError={(e) => {
                    console.error("Nursery Boy image failed to load");
                    e.target.src = "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800"; // Backup URL
                  }}
                />
              </div>
              
              {/* Paper Clip Decoration */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-14 bg-stone-200 rounded-lg opacity-80 border-2 border-stone-300 rotate-[-10deg]"></div>
              
              <div className="mt-4 text-center">
                <span className="inline-block px-6 py-1.5 bg-[#A0C4FF] text-white rounded-xl font-bold text-lg tracking-widest shadow-sm">
                  ME
                </span>
              </div>
            </div>
            
            {/* Playful Stickers for Boy */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -left-4 bg-yellow-100 p-2 rounded-2xl border-2 border-yellow-300 shadow-sm"
            >
              <span className="text-xl">🎨</span>
            </motion.div>
          </motion.div>

          {/* Fun Transition Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            onAnimationComplete={() => setTimeout(() => setShowNext(true), 1000)}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  className="w-3 h-3 rounded-full bg-yellow-400"
                />
              ))}
            </div>
            <Sparkles className="text-yellow-400 w-10 h-10" />
          </motion.div>

          {/* Girl Character Card */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="bg-white p-3 rounded-[1.5rem] shadow-[8px_8px_0px_#FFADAD] border-4 border-[#FFADAD] relative overflow-visible group">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-[1.2rem] overflow-hidden border-4 border-stone-100 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600" 
                  alt="Little Girl"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tape Decoration */}
              <div className="absolute top-0 right-8 w-16 h-6 bg-pink-100 opacity-60 rounded border border-pink-200 rotate-[30deg]"></div>

              <div className="mt-4 text-center">
                <span className="inline-block px-6 py-1.5 bg-[#FFADAD] text-white rounded-xl font-bold text-lg tracking-widest shadow-sm">
                  YOU
                </span>
              </div>
            </div>

            {/* Playful Stickers for Girl */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 bg-pink-100 p-2 rounded-2xl border-2 border-pink-300 shadow-sm"
            >
              <span className="text-xl">✨</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center max-w-2xl"
        >
          <p className="text-xl md:text-2xl font-['Comic_Sans_MS',_cursive] text-stone-600 leading-relaxed px-4">
            Way back in nursery... I was just a silly kid, but there was something about you. 
            You had the most innocent smile and these tiny, twinkling eyes that made the whole 
            classroom feel like home. I probably didn't know what 'beautiful' meant back then, 
            but my heart certainly did! ✨
          </p>
        </motion.div>

        {/* Playful Next Button */}
        <AnimatePresence>
          {showNext && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/chapter2')}
              className="mt-8 group flex items-center gap-3 bg-[#FFD6A5] text-[#8B4513] px-8 py-3.5 rounded-[1.5rem] font-black text-lg shadow-[0_6px_0px_#FFADAD] border-4 border-white transition-all"
            >
              Next Chapter! 🚀
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ReconnectionChapter = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter1')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-brand-400 font-bold hover:text-brand-900 transition-colors"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <div className="absolute inset-0 opacity-10">
        <Map className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-10 text-center"
        >
          Chapter 2: The Start of Love & Journey to Proposal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4"
            >
              <div className="p-3 bg-rose-100 rounded-2xl text-rose-500">
                <MapPin size={24} />
              </div>
              <p className="text-brand-800 font-medium italic">"I used to try to find you at all places, be it school, tuition and etc..."</p>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-rose-200"
            >
              <div className="flex justify-center mb-6">
                 <motion.div
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="p-4 bg-rose-500 rounded-full text-white shadow-lg"
                 >
                   <Heart fill="currentColor" size={40} />
                 </motion.div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-center text-brand-900 mb-4">The Big Moment</h3>
              <p className="text-brand-600 text-center leading-relaxed">
                "In 11th grade, I finally gathered the courage. I proposed, and the world stood still until you said YES."
              </p>
              <div className="flex justify-center mt-6">
                <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">Proposal Accepted</div>
              </div>
            </motion.div>
          </div>

          <div className="relative space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setShowNext(true)}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group"
            >
              <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 p-1">
                <div className="relative overflow-hidden rounded-tl-[2rem]">
                  <img 
                    src="/VPS_01.webp" 
                    alt="Vivekanand Public School 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
                <div className="relative overflow-hidden rounded-tr-[2rem]">
                  <img 
                    src="/VPS_02.webp" 
                    alt="Vivekanand Public School 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
                <div className="relative overflow-hidden rounded-bl-[2rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1516589174184-c6858b16ecb0?auto=format&fit=crop&q=80&w=600" 
                    alt="Boy and girl holding hands"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
                <div className="relative overflow-hidden rounded-br-[2rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600" 
                    alt="School Memories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white z-10">
                <p className="font-serif italic text-lg drop-shadow-md">"A promise for forever"</p>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">Vivekanand Public School Days</p>
              </div>
            </motion.div>
            
            {/* Sparkle effects */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  delay: i * 0.4 
                }}
                className="absolute text-yellow-400"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              >
                <Sparkles size={24} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Chapter Button */}
        <AnimatePresence>
          {showNext && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(225, 29, 72, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/chapter3')}
              className="mt-16 group flex items-center gap-4 bg-brand-600 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl border-4 border-white transition-all"
            >
              Next Chapter! 🚀
              <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const DistanceChapter = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter2')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-slate-400 font-bold hover:text-slate-600 transition-colors font-sans"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-10 text-center"
        >
          Chapter 3: The Silent Storm & Growing Distance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
          <div className="relative order-2 md:order-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setTimeout(() => setShowNext(true), 1500)}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-200 bg-slate-100 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=800" 
                alt="Stormy Sea"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-0 right-0 text-center text-white px-6">
                <p className="font-serif italic text-xl mb-2">"Silence is the loudest cry..."</p>
                <div className="h-0.5 w-12 bg-white/40 mx-auto"></div>
              </div>
            </motion.div>

            {/* Floating Rain/Silence elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                className="absolute text-slate-400"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              >
                <div className="w-1 h-4 bg-slate-300/30 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-500">
                  <X size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">The Misunderstanding</h3>
              </div>
              <p className="text-slate-600 leading-relaxed italic text-lg">
                "Small cracks appeared where there should have been bridges. Simple words were lost in translation, 
                and for a while, it felt like the colors were fading from our world."
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-500">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">Moving Away</h3>
              </div>
              <p className="text-slate-600 leading-relaxed italic text-lg">
                "Life pulled us in different directions. The distance wasn't just in miles, 
                but in the space between our hearts that grew quieter every day."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Next Chapter Button */}
        <AnimatePresence>
          {showNext && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(100, 116, 139, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/chapter4')}
              className="mt-16 group flex items-center gap-4 bg-slate-800 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl border-4 border-white transition-all"
            >
              Next Chapter! 🚀
              <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ReunionChapter = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);

  const moments = [
    { title: "The Birthday Call", desc: "A phone call on your birthday changed everything this time and we again started getting together.", icon: Phone },
    { title: "Chachi Helped", desc: "A unexpected meeting that brought us together again, even if just for a moment.", icon: Sparkles },
    { title: "Met in Your Room", desc: "Whispered conversations in the comfort of your personal space.", icon: Home },
    { title: "Met at Home", desc: "Being under the same roof, feeling the warmth of familiarity.", icon: MapPin },
    { title: "Phone & Messages", desc: "Late night talks and endless texts that kept us connected across the void.", icon: Mail }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter3')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-stone-400 font-bold hover:text-rose-600 transition-colors font-sans"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center py-12">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-6 text-center"
        >
          Chapter 4: The Bittersweet Reunion
        </motion.h2>
        <p className="text-stone-500 italic mb-12 text-center max-w-2xl">
          "For a moment, the world felt whole again. We met, we laughed, and for a heartbeat, I thought the distance had vanished."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full mb-16">
          {moments.map((moment, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] shadow-lg border border-rose-50 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-rose-50 rounded-2xl text-rose-500">
                <moment.icon size={32} />
              </div>
              <h3 className="font-bold text-rose-900 text-lg">{moment.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{moment.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onAnimationComplete={() => setTimeout(() => setShowNext(true), 2000)}
          className="w-full max-w-3xl bg-rose-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle cracks overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,20 L30,40 L10,70 L50,90 L90,50 L70,10 L100,30" stroke="white" fill="none" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 space-y-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-rose-200 uppercase tracking-widest">The Breaking Point</h3>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-rose-100 text-lg md:text-xl leading-relaxed italic">
                "But then, the storm returned, colder than before. You walked away again, 
                and this time, the silence was deafening."
              </p>
              
              <p className="text-rose-200/70 text-base md:text-lg leading-relaxed font-light italic">
                I still find myself looking back, wondering... did I make mistakes I was too blind to see? 
                Or was it simply that I couldn't find the right way to express the depth of my love? 
                Maybe you had your own reasons, your own battles that pulled you away. 
                Whatever it was, watching you leave felt like the world losing its light.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="py-6 px-8 bg-white/10 rounded-2xl border border-white/20 inline-block"
            >
              <p className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-lg">
                "Do not talk to me ever."
              </p>
            </motion.div>

            <p className="text-rose-300 text-sm font-medium">Those five words were the silence that broke me.</p>
          </div>
        </motion.div>

        {/* Next Chapter Button */}
        <AnimatePresence>
          {showNext && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(159, 18, 57, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/chapter5')}
              className="mt-16 group flex items-center gap-4 bg-rose-900 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl border-4 border-white transition-all"
            >
              Next Chapter! 🚀
              <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const GodsPlanChapter = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const timeline = [
    {
      date: "Jan 23, 2026",
      title: "The Spark",
      desc: "A very good friend asked me about you, and I finally spoke your name again, sharing everything I felt.",
      icon: Users,
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      date: "The Revelation",
      title: "Feelings Shared",
      desc: "She told you how I truly felt. The walls we built started to crumble.",
      icon: Sparkles,
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      date: "The Long Nights",
      title: "Soul to Soul",
      desc: "Endless messages through the night. We clarified doubts, shared our favorite songs, revisited old stories, and healed every misunderstanding.",
      icon: MessageSquare,
      color: "bg-pink-100",
      textColor: "text-pink-600"
    },
    {
      date: "Feb 8, 2026",
      title: "The First Meet",
      desc: "Finally, we met. It was super loving, like no time had passed at all. The beginning of our forever.",
      icon: Heart,
      color: "bg-rose-100",
      textColor: "text-rose-600"
    },
    {
      date: "Feb 21 - Mar 21",
      title: "The Journey of Meetings",
      desc: "Feb 21 in the car, March 4, and March 21 in the car. Every moment was a treasure leading us back.",
      icon: Car,
      color: "bg-emerald-100",
      textColor: "text-emerald-600"
    },
    {
      date: "March 29, 2026",
      title: "Unforgettable & True",
      desc: "A day so loving and unforgettable. Just you and me, together without limits, being our truest selves.",
      icon: Heart,
      color: "bg-rose-100",
      textColor: "text-rose-600"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen py-20 px-4 overflow-hidden z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter4')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-stone-400 font-bold hover:text-rose-600 transition-colors font-sans"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-rose-900 mb-4">
            Chapter 5: God's Wish & Our Third Reunion
          </h2>
          <p className="text-stone-500 italic text-lg max-w-2xl mx-auto">
            "Destiny has a way of bringing back what's meant to stay. This is how we found our way home."
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative w-full max-w-4xl space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-rose-100 -translate-x-1/2 hidden md:block" />

          {timeline.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Desktop Center Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-rose-100 z-10 hidden md:flex items-center justify-center">
                <step.icon size={20} className={step.textColor} />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-xl border border-rose-50 hover:shadow-2xl transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl ${step.color} ${step.textColor} md:hidden`}>
                    <step.icon size={24} />
                  </div>
                  <div>
                    <span className={`text-sm font-bold uppercase tracking-widest ${step.textColor}`}>{step.date}</span>
                    <h3 className="text-2xl font-bold text-rose-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed italic">{step.desc}</p>
              </div>
              
              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>

        {/* Animation Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 w-full max-w-4xl bg-rose-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-rose-100 mb-8 text-center uppercase tracking-widest">The Journey to Delhi</h3>
            
            <div className="relative h-64 flex flex-col justify-center items-center">
              {/* Road */}
              <div className="absolute w-full h-2 bg-rose-800/50 rounded-full bottom-20">
                <motion.div 
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex gap-8 w-full justify-around opacity-20"
                >
                  {[...Array(10)].map((_, i) => <div key={i} className="w-8 h-1 bg-white rounded-full" />)}
                </motion.div>
              </div>

              {/* Bus Animation */}
              <motion.div
                animate={{ 
                  x: [-200, 200],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  x: { repeat: Infinity, duration: 8, ease: "linear" },
                  y: { repeat: Infinity, duration: 0.5 }
                }}
                className="absolute flex flex-col items-center gap-2"
              >
                <div className="bg-white p-4 rounded-2xl text-rose-900 shadow-xl relative">
                  <Bus size={48} />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-rose-50 text-rose-900 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                    She's on her way! 🚌
                  </div>
                </div>
              </motion.div>

              {/* Destination Indicators */}
              <div className="absolute w-full flex justify-between px-10 bottom-24">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-white/10 rounded-full"><MapPin size={24} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">Start</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-white text-rose-900 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"><Hotel size={32} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-100">Delhi Hotel</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white text-rose-900 rounded-2xl"><Car size={24} /></div>
                  <h4 className="font-bold text-xl">The Car Meetings</h4>
                </div>
                <p className="text-rose-100/80 italic leading-relaxed">
                  "From that first hug at the hotel to our deep conversations in the car until March 21... 
                  every drive was a journey back to each other."
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center">
                <Sparkles className="text-rose-200 mb-4" size={40} />
                <p className="text-xl font-serif italic text-rose-50">"Truly, it was God's wish that we found our way back."</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Treasure Box Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/treasure-box')}
          className="mt-20 group flex items-center gap-4 bg-white text-rose-900 px-12 py-5 rounded-full font-black text-xl shadow-2xl border-4 border-rose-100 transition-all hover:bg-rose-50"
        >
          View The Treasure Box 🎁
          <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const StoryRecap = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  
  const recapMoments = [
    { 
      title: "The Beginning", 
      chapter: "Chapter 1", 
      desc: "Nursery days. Tiny desks, innocent smiles, and the first time my heart noticed you.", 
      icon: Baby, 
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "The Proposal", 
      chapter: "Chapter 2", 
      desc: "In 11th grade, I found the words. You said yes, and the world finally made sense.", 
      icon: Heart, 
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "The Silence", 
      chapter: "Chapter 3", 
      desc: "The storm came. Misunderstandings grew like mountains between us.", 
      icon: X, 
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "The Reunion", 
      chapter: "Chapter 4", 
      desc: "A brief meeting that felt like home, until your words broke me into pieces.", 
      icon: Phone, 
      image: "https://images.unsplash.com/photo-1521133306232-d01cb9673965?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "God's Wish", 
      chapter: "Chapter 5", 
      desc: "Destiny wasn't done with us. In 2026, we found our way back to the truth.", 
      icon: Sparkles, 
      image: "https://images.unsplash.com/photo-1516589174184-c6858b16ecb0?auto=format&fit=crop&q=80&w=1200" 
    }
  ];

  const next = () => index < recapMoments.length - 1 ? setIndex(index + 1) : navigate('/welcome');
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-rose-950 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Cinematic Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img src={recapMoments[index].image} className="w-full h-full object-cover grayscale" alt="cinematic bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950 via-transparent to-rose-950" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 z-50">
        <motion.button
          whileHover={{ x: -10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          disabled={index === 0}
          className={`p-4 rounded-full glass border border-white/20 text-white ${index === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
        >
          <ArrowLeft size={32} />
        </motion.button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-8 z-50">
        <motion.button
          whileHover={{ x: 10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="p-4 rounded-full glass border border-white/20 text-white shadow-2xl"
        >
          <ArrowRight size={32} />
        </motion.button>
      </div>

      {/* Main Content Flow */}
      <div className="relative z-10 w-full max-w-5xl px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-32 h-32 bg-rose-500/20 backdrop-blur-3xl rounded-full flex items-center justify-center border-4 border-rose-500 shadow-[0_0_50px_rgba(244,63,94,0.3)]"
            >
              {React.createElement(recapMoments[index].icon, { size: 64, className: "text-white" })}
            </motion.div>

            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-rose-400 font-black tracking-[0.5em] uppercase text-sm"
              >
                {recapMoments[index].chapter}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl font-serif italic text-white"
              >
                {recapMoments[index].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-rose-100/70 font-light max-w-3xl leading-relaxed italic"
              >
                "{recapMoments[index].desc}"
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute -bottom-32 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: `${((index + 1) / recapMoments.length) * 100}%` }}
            className="h-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,1)]"
          />
        </div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-950 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-950 to-transparent pointer-events-none" />
      
      {/* Film Grain/Noise Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
};

const TreasureBoxChapter = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600', caption: "Your smile is the only light I ever need." },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1524492459426-0370428d022b?auto=format&fit=crop&q=80&w=600', caption: "Capturing the grace in your every move." },
  ]);

  const [letters, setLetters] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1578852612716-854e527abf5e?auto=format&fit=crop&q=80&w=400", caption: "The very first note you ever sent me." }
  ]);
  const [songs, setSongs] = useState([
    { id: 1, title: "Our First Song", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newSongTitle, setNewSongTitle] = useState("");
  const [newSongLink, setNewSongLink] = useState("");

  const romanticCaptions = [
    "A beauty that words could never truly capture.",
    "The way you look at the world makes it more beautiful.",
    "My favorite view will always be you.",
    "Radiating grace and pure innocence.",
    "The world stops when you smile.",
    "A heart as beautiful as your face.",
    "Forever mesmerized by your presence."
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newCaption = romanticCaptions[Math.floor(Math.random() * romanticCaptions.length)];
      setItems([{ id: Date.now(), type: file.type.startsWith('video') ? 'video' : 'image', url, caption: newCaption }, ...items]);
    }
  };

  const handleLetterUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLetters([{ id: Date.now(), url, caption: "A piece of our history preserved." }, ...letters]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const removeLetter = (id) => {
    setLetters(letters.filter(l => l.id !== id));
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    if (newSongTitle && newSongLink) {
      setSongs([{ id: Date.now(), title: newSongTitle, link: newSongLink }, ...songs]);
      setNewSongTitle("");
      setNewSongLink("");
    }
  };

  const removeSong = (id) => {
    setSongs(songs.filter(s => s.id !== id));
  };

  if (selectedCategory === 'songs') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="min-h-screen py-20 px-4 relative z-10"
      >
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setSelectedCategory(null)}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 text-brand-400 font-bold hover:text-brand-900 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Box
        </motion.button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-4">Our Playlist</h2>
            <p className="text-brand-600 italic">"The melodies that tell our story."</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-rose-50 mb-12">
            <form onSubmit={handleAddSong} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Song Title" 
                  value={newSongTitle}
                  onChange={(e) => setNewSongTitle(e.target.value)}
                  className="px-6 py-4 rounded-2xl bg-rose-50 border-none focus:ring-2 focus:ring-rose-200 outline-none font-medium"
                />
                <input 
                  type="url" 
                  placeholder="YouTube Link" 
                  value={newSongLink}
                  onChange={(e) => setNewSongLink(e.target.value)}
                  className="px-6 py-4 rounded-2xl bg-rose-50 border-none focus:ring-2 focus:ring-rose-200 outline-none font-medium"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-900 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-brand-800 transition-all flex items-center justify-center gap-2"
              >
                <Plus size={24} />
                Add to Playlist
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {songs.map((song) => (
                <motion.div
                  key={song.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-6 rounded-3xl shadow-md border border-rose-50 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-500">
                      <Music size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-900">{song.title}</h3>
                      <a 
                        href={song.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-rose-400 text-sm hover:underline flex items-center gap-1 mt-1"
                      >
                        Listen on YouTube <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeSong(song.id)}
                    className="p-3 text-rose-300 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 size={24} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  }

  if (selectedCategory === 'letters') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="min-h-screen py-20 px-4 relative z-10"
      >
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setSelectedCategory(null)}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 text-brand-400 font-bold hover:text-brand-900 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Box
        </motion.button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-4">Handwritten Letters</h2>
            <p className="text-brand-600 italic">"Every word we ever wrote, kept safe."</p>
          </div>

          <div className="flex justify-center mb-12">
            <label className="cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleLetterUpload} />
              <div className="bg-brand-900 text-white px-10 py-4 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-brand-800 transition-all active:scale-95">
                <Upload size={24} />
                <span className="font-bold tracking-wide">Upload Letter</span>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {letters.map((letter) => (
                <motion.div
                  key={letter.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-4 rounded-[2rem] shadow-xl border border-rose-50 group relative"
                >
                  <button 
                    onClick={() => removeLetter(letter.id)}
                    className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50"
                  >
                    <Trash2 size={18} />
                  </button>
                  <div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-4 border border-rose-50">
                    <img src={letter.url} className="w-full h-full object-cover" alt="Handwritten Letter" />
                  </div>
                  <p className="text-stone-600 italic text-center text-sm px-4">"{letter.caption}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate('/chapter5')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-brand-400 font-bold hover:text-brand-900 transition-colors"
      >
        <ArrowRight className="rotate-180 w-6 h-6" />
        Back
      </motion.button>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="inline-block p-4 bg-white rounded-full shadow-xl mb-6"
          >
            <Gift size={48} className="text-brand-500" />
          </motion.div>
          <h2 className="text-5xl font-serif font-bold text-brand-900 uppercase tracking-tight">The Treasure Box</h2>
          <p className="text-brand-600 text-lg mt-4 italic font-serif">"Our memories, preserved for eternity."</p>
        </div>

        {/* New Beauty Gallery Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-left">
              <h3 className="text-3xl font-serif font-bold text-rose-900 flex items-center gap-3">
                <Sparkles className="text-rose-400" />
                Her Radiant Beauty
              </h3>
              <p className="text-stone-500 mt-2 italic">A collection of moments where your beauty outshone everything else.</p>
            </div>
            
            <label className="cursor-pointer group">
              <input type="file" accept="image/*,video/*" className="hidden" onChange={handleFileUpload} />
              <div className="bg-rose-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-rose-800 transition-all active:scale-95">
                <Plus size={24} />
                <span className="font-bold tracking-wide">Add Memory</span>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-rose-50 flex flex-col space-y-4 group relative"
                >
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-rose-50 relative shadow-inner">
                    {item.type === 'video' ? (
                      <video src={item.url} controls className="w-full h-full object-cover" />
                    ) : (
                      <img src={item.url} alt="Memory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="px-2 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Wand2 size={14} className="text-rose-400" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-300">Magic Caption</span>
                    </div>
                    <p className="text-stone-700 italic font-medium leading-relaxed">
                      "{item.caption}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'letters', icon: Mail, title: "Handwritten Letters", desc: `${letters.length} letters preserved. Click to view or add more.`, color: "bg-blue-50" },
            { id: 'songs', icon: Music, title: "Audio Cassettes", desc: `${songs.length} songs in our playlist. Click to listen or add more.`, color: "bg-purple-50" },
            { 
              id: 'gifts',
              icon: Gift, 
              title: "Special Gifts", 
              desc: "Tokens of love from across the years.", 
              color: "bg-rose-50",
              images: [
                "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=400", // Women's T-shirt
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400", // Shirt
                "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400", // Watch
                "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=400"  // Rose Flowers
              ]
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => (item.id === 'letters' || item.id === 'songs') && setSelectedCategory(item.id)}
              className={`p-10 rounded-[2.5rem] ${item.color} shadow-xl border border-white/50 flex flex-col items-center text-center space-y-6 hover:shadow-2xl transition-all cursor-pointer`}
            >
              <div className="p-5 bg-white rounded-3xl text-brand-500 shadow-inner">
                <item.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">{item.title}</h3>
              <p className="text-brand-600 leading-relaxed">{item.desc}</p>
              
              {item.images ? (
                <div className="grid grid-cols-2 gap-2 w-full h-48">
                  {item.images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl border-2 border-white shadow-sm">
                      <img src={src} className="w-full h-full object-cover" alt={`Holding hands ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full h-48 rounded-2xl bg-white/40 border-2 border-dashed border-brand-200 flex items-center justify-center text-brand-300 font-bold uppercase text-xs tracking-widest">
                  Gallery Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen flex flex-col items-center justify-center text-center z-10 px-6"
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-brand-300"></div>
          <span className="text-xs font-bold tracking-[0.4em] text-brand-600 uppercase">Our Digital Memoir</span>
          <div className="h-[1px] w-12 bg-brand-300"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-serif italic text-brand-900 leading-tight">
            A Beautiful <br />
            <span className="text-brand-500 not-italic font-sans font-black tracking-tighter">Love Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-700 font-light leading-relaxed max-w-lg mx-auto italic">
            "I hope you will like seeing how our life traversed through every up and down... 
            but through it all, my only wish is to be with you forever."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#db2777", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/chapter1-intro')}
            className="group flex items-center gap-4 bg-white shadow-xl border border-brand-200 text-brand-600 px-12 py-5 rounded-full transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Begin Experience</span>
            <Heart className="w-5 h-5 fill-current animate-pulse" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StoryRecap />} />
        <Route path="/welcome" element={<HeroSection />} />
        <Route path="/chapter1-intro" element={<ChildhoodChapterIntro />} />
        <Route path="/chapter1" element={<ChildhoodChapter />} />
        <Route path="/chapter2" element={<ReconnectionChapter />} />
        <Route path="/chapter3" element={<DistanceChapter />} />
        <Route path="/chapter4" element={<ReunionChapter />} />
        <Route path="/chapter5" element={<GodsPlanChapter />} />
        <Route path="/treasure-box" element={<TreasureBoxChapter />} />
        <Route path="/recap" element={<StoryRecap />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-brand-50">
        {/* Universal Consistent Background - Stays across all pages */}
        <div className="fixed inset-0 z-0">
          {/* Soft Romantic Background Image */}
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full opacity-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=2000" 
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Consistent Pink Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/90 via-brand-50/60 to-brand-100/90 shadow-inner"></div>
        </div>

        <FlyingHearts />

        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
