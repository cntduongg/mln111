import { motion } from 'motion/react';
import { Eye, Brain, Workflow, Lightbulb } from 'lucide-react';

const iconVariants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-1/4 text-cyan-400"
        variants={iconVariants}
        animate="animate"
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 blur-xl bg-cyan-400"
            variants={glowVariants}
            animate="animate"
          />
          <Eye className="w-16 h-16 relative z-10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-48 right-1/4 text-purple-400"
        variants={iconVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 blur-xl bg-purple-400"
            variants={glowVariants}
            animate="animate"
          />
          <Brain className="w-16 h-16 relative z-10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/3 text-emerald-400"
        variants={iconVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 blur-xl bg-emerald-400"
            variants={glowVariants}
            animate="animate"
          />
          <Workflow className="w-16 h-16 relative z-10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-48 right-1/3 text-amber-400"
        variants={iconVariants}
        animate="animate"
        transition={{ delay: 6 }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 blur-xl bg-amber-400"
            variants={glowVariants}
            animate="animate"
          />
          <Lightbulb className="w-16 h-16 relative z-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-purple-200 border border-purple-400/30">
              Triết Học Mác - Lênin
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Lý Luận Nhận Thức Của<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Chủ Nghĩa Duy Vật Biện Chứng
            </span>
          </h1>

          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Khám phá con đường biện chứng của sự nhận thức chân lý,<br className="hidden md:block" />
            từ trực quan sinh động đến thực tiễn cách mạng
          </p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.a
              href="#intro"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bắt Đầu Học
            </motion.a>
            <motion.a
              href="#principles"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ba Nguyên Tắc
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white/70 rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
