import { motion } from 'motion/react';
import { CheckCircle, RefreshCw, Target, Compass, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Conclusion() {
  return (
    <section id="conclusion" data-section="conclusion" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Tổng Kết
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Kết Luận</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tổng hợp những điểm cốt lõi của lý luận nhận thức duy vật biện chứng
          </p>
          
          {/* Hero Image */}
          <motion.div 
            className="mt-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750231211707-e2cd6e304584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwc3VjY2VzcyUyMGFjaGlldmVtZW50JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4NjYxNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Thành tựu và tiến bộ"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Conclusion 1: Hệ thống lý luận */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-indigo-400">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-xs rounded-full mb-2">
                  Kết Luận 1
                </span>
                <h3 className="text-xl md:text-2xl">
                  Một hệ thống lý luận chặt chẽ, nhất quán từ nền tảng đến mục đích
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200"
              >
                <p className="leading-relaxed">
                  <strong className="text-indigo-600">Thế giới khách quan</strong> là điểm xuất phát và đối tượng cần nhận thức.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200"
              >
                <p className="leading-relaxed">
                  <strong className="text-indigo-600">Ý thức chủ quan</strong> là sự phản ánh năng động, sáng tạo nhưng không thể thoát ly khỏi thế giới khách quan đó.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200"
              >
                <p className="leading-relaxed">
                  <strong className="text-indigo-600">Thực tiễn</strong> chính là cầu nối, là tiêu chuẩn tối cao để kiểm nghiệm và điều chỉnh mối quan hệ giữa khách quan và chủ quan, biến nhận thức thành sức mạnh cải tạo hiện thực.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion 2: Con đường biện chứng */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-purple-400">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs rounded-full mb-2">
                  Kết Luận 2
                </span>
                <h3 className="text-xl md:text-2xl">
                  Con đường biện chứng của sự nhận thức chân lý
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200">
                <p className="leading-relaxed mb-4">
                  Quá trình nhận thức không phải là một hành động tức thời mà là một chu trình vận động không ngừng:
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 text-center">
                    Thực tiễn → Nhận thức (Từ cảm tính đến lý tính) → Thực tiễn (mới) → Nhận thức (mới)...
                  </p>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200">
                <p className="leading-relaxed text-gray-700">
                  Chu trình này lặp lại liên tục, mỗi vòng khấu phản ánh hiện thực sâu sắc và toàn diện hơn. Nó giải thích vì sao tri thức nhân loại luôn phát triển, và không có chân lý nào là bất biến, tuyệt đối trong mọi hoàn cảnh.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion 3: Ý nghĩa phương pháp luận */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-emerald-400">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs rounded-full mb-2">
                  Kết Luận 3
                </span>
                <h3 className="text-xl md:text-2xl">
                  Ý nghĩa phương pháp luận sâu sắc
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-emerald-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-emerald-900">Tôn trọng khách quan</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Xuất phát từ sự thật, từ điều kiện thực tế, tránh suy nghĩ chủ quan, áp đặt.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-emerald-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-emerald-900">Xem xét toàn diện, lịch sử - cụ thể</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Phải đặt sự vật trong mối liên hệ tổng thể và bối cảnh cụ thể để hiểu đúng bản chất.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-emerald-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-emerald-900">Gắn lý thuyết với thực tiễn</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Mọi lý thuyết, chủ trương, kế hoạch cuối cùng đều phải được kiểm nghiệm và điều chỉnh qua thực tiễn sinh động. "Chân lý là cụ thể".
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-emerald-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-emerald-900">Khiêm tốn trong nhận thức</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Hiểu rằng nhận thức của mình có thể chỉ là tương đối, một phần của chân lý, luôn cần được bổ sung và phát triển.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-10 text-white text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl leading-relaxed mb-4">
              "Chân lý là cụ thể"
            </p>
            <p className="text-lg opacity-90">
              Lý luận nhận thức của chủ nghĩa duy vật biện chứng không chỉ là triết học, mà là công cụ để con người nhận thức và cải tạo thế giới.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}