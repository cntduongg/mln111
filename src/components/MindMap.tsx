import { motion } from 'motion/react';
import { Brain, Eye, Lightbulb, Target, RefreshCw, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export function MindMap() {
  return (
    <section id="mindmap" data-section="mindmap" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4">Sơ Đồ Tư Duy Tổng Quát</h2>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            Toàn bộ hệ thống Lý luận nhận thức của Chủ nghĩa duy vật biện chứng trong một sơ đồ
          </p>
        </motion.div>

        {/* Main Mind Map */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Center: Core Definition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="md:col-span-12 lg:col-span-4 lg:col-start-5"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl border-4 border-white/30 h-full flex flex-col justify-center">
              <div className="text-center">
                <Brain className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl mb-4">LÝ LUẬN NHẬN THỨC</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  Con đường từ không biết đến biết, từ biết ít đến biết nhiều
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Foundations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl text-center mb-8 text-purple-200">Ba Nguyên Tắc Nền Tảng</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg mb-3">1. Thế giới vật chất<br/>tồn tại khách quan</h4>
              <p className="text-sm text-purple-200 leading-relaxed">
                Thực tại tồn tại độc lập với ý thức con người
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-lg mb-3">2. Ý thức là bản sao<br/>chủ quan</h4>
              <p className="text-sm text-purple-200 leading-relaxed">
                Nhận thức bị ảnh hưởng bởi góc nhìn, kinh nghiệm
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg mb-3">3. Thực tiễn là<br/>tiêu chuẩn chân lý</h4>
              <p className="text-sm text-purple-200 leading-relaxed">
                Hành động thực tế kiểm chứng nhận thức đúng/sai
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* The Process: Dialectical Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl text-center mb-8 text-purple-200">Con Đường Nhận Thức (Vòng Xoắn Ốc)</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {/* Stage 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-center"
              >
                <Eye className="w-10 h-10 mx-auto mb-3" />
                <h4 className="mb-2">Giai đoạn 1</h4>
                <p className="text-sm opacity-90">Nhận thức<br/>Cảm tính</p>
                <p className="text-xs mt-2 opacity-75">(Giác quan)</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>

              {/* Stage 2 */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center"
              >
                <Lightbulb className="w-10 h-10 mx-auto mb-3" />
                <h4 className="mb-2">Giai đoạn 2</h4>
                <p className="text-sm opacity-90">Nhận thức<br/>Lý tính</p>
                <p className="text-xs mt-2 opacity-75">(Tư duy)</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>

              {/* Stage 3 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-center"
              >
                <Target className="w-10 h-10 mx-auto mb-3" />
                <h4 className="mb-2">Giai đoạn 3</h4>
                <p className="text-sm opacity-90">Quay lại<br/>Thực tiễn</p>
                <p className="text-xs mt-2 opacity-75">(Hành động)</p>
              </motion.div>
            </div>

            {/* Spiral Back */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <RefreshCw className="w-6 h-6 text-yellow-400" />
              <p className="text-center text-purple-200">
                Sau đó lại quay về Giai đoạn 1 ở mức cao hơn (Vòng xoắn ốc đi lên)
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Four Key Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 shadow-xl"
          >
            <Target className="w-10 h-10 mb-3" />
            <h4 className="text-lg mb-2">Thực Tiễn</h4>
            <p className="text-sm opacity-90">Sản xuất, Chính trị, Thực nghiệm</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-xl"
          >
            <RefreshCw className="w-10 h-10 mb-3" />
            <h4 className="text-lg mb-2">Phương Pháp Luận</h4>
            <p className="text-sm opacity-90">Toàn diện, Phát triển, Lịch sử, Thực tiễn</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl"
          >
            <TrendingUp className="w-10 h-10 mb-3" />
            <h4 className="text-lg mb-2">Quá Trình Nhận Thức</h4>
            <p className="text-sm opacity-90">Cảm tính → Lý tính → Thực tiễn</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-6 shadow-xl"
          >
            <Sparkles className="w-10 h-10 mb-3" />
            <h4 className="text-lg mb-2">Chân Lý</h4>
            <p className="text-sm opacity-90">Khách quan, Cụ thể, Tương đối, Tuyệt đối</p>
          </motion.div>
        </div>

        {/* Key Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-yellow-500/50"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-yellow-400 mb-3">Công thức V.I.Lênin</p>
              <blockquote className="text-xl md:text-2xl leading-relaxed italic">
                "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn – đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức thực tại khách quan."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
