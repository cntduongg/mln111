import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TableOfContentsProps {
  activeSection: string;
}

const sections = [
  { id: 'intro', label: 'Giới Thiệu', icon: '📖' },
  { id: 'principles', label: 'Ba Nguyên Tắc', icon: '⚡' },
  { id: 'principle-1', label: 'Thế giới vật chất', icon: '1️⃣', indent: true },
  { id: 'principle-2', label: 'Ý thức & phản ánh', icon: '2️⃣', indent: true },
  { id: 'principle-3', label: 'Thực tiễn & chân lý', icon: '3️⃣', indent: true },
  { id: 'methodology', label: 'Phương Pháp Luận', icon: '🎯' },
  { id: 'nature', label: 'Bản Chất Nhận Thức', icon: '🧠' },
  { id: 'stages', label: 'Ba Giai Đoạn', icon: '📊' },
  { id: 'practice', label: 'Thực Tiễn', icon: '🔨' },
  { id: 'process', label: 'Quá Trình Nhận Thức', icon: '🔄' },
  { id: 'truth', label: 'Chân Lý', icon: '✨' },
  { id: 'conclusion', label: 'Kết Luận', icon: '🎓' },
  { id: 'quiz', label: 'Minigame', icon: '🎮' },
];

export function TableOfContents({ activeSection }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden xl:flex fixed left-8 top-24 z-50 items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span className="text-sm font-medium">
          {isOpen ? 'Đóng' : 'Mục Lục'}
        </span>
      </motion.button>

      {/* Table of Contents Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="hidden xl:block fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* TOC Panel */}
            <motion.nav
              className="hidden xl:block fixed left-8 top-44 z-40 w-80"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Menu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Mục Lục</h3>
                      <p className="text-xs text-indigo-100">Điều hướng nhanh</p>
                    </div>
                  </div>
                </div>

                {/* Navigation List - Custom scrollbar hidden */}
                <div className="p-4 max-h-[calc(100vh-20rem)] overflow-y-auto scrollbar-hide">
                  <ul className="space-y-1">
                    {sections.map((section, index) => (
                      <motion.li
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <a
                          href={`#${section.id}`}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200 ${
                            section.indent ? 'ml-4' : ''
                          } ${
                            activeSection === section.id
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:scale-102'
                          }`}
                        >
                          <span className="text-lg flex-shrink-0">{section.icon}</span>
                          <span className="text-sm font-medium flex-1">{section.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            activeSection === section.id 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                          }`} />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gradient-to-r from-gray-50 to-indigo-50 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    {sections.length} phần • Click để điều hướng
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}