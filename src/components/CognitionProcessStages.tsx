import { motion } from 'motion/react';
import { Eye, Brain, Quote } from 'lucide-react';

export function CognitionProcessStages() {
  return (
    <section id="process" data-section="process" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Các Giai Đoạn
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Các Giai Đoạn Của Quá Trình Nhận Thức</h2>
        </motion.div>

        {/* Lenin Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 md:p-10 text-white mb-12"
        >
          <div className="flex items-start gap-4 mb-4">
            <Quote className="w-8 h-8 flex-shrink-0 opacity-70" />
            <div>
              <p className="text-sm uppercase tracking-wide opacity-90 mb-2">Công thức của V.I.Lênin</p>
              <blockquote className="text-lg md:text-xl leading-relaxed italic">
                "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức hiện thực khách quan."
              </blockquote>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Stage 1: Sensory Cognition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-amber-500"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2">Giai đoạn 1: Nhận thức cảm tính</h3>
                <span className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-sm rounded-full">
                  Trực quan sinh động
                </span>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-gray-700">
              Là giai đoạn đầu, phản ánh trực tiếp vẻ ngoài của sự vật.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Cảm giác</h4>
                <p className="text-xs text-gray-600">
                  Hình ảnh sơ khai nhất, nảy sinh khi sự vật tác động vào giác quan (nóng, lạnh, đỏ, xanh...).
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Tri giác</h4>
                <p className="text-xs text-gray-600">
                  Tổng hợp nhiều cảm giác để tạo nên hình ảnh trọn vẹn về sự vật (quả táo tròn, đỏ, ngọt).
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Biểu tượng</h4>
                <p className="text-xs text-gray-600">
                  Hình ảnh được lưu giữ trong trí nhớ và tái hiện lại khi không còn tiếp xúc trực tiếp với sự vật.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stage 2: Rational Cognition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-purple-500"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2">Giai đoạn 2: Nhận thức lý tính</h3>
                <span className="inline-block px-3 py-1 bg-purple-200 text-purple-900 text-sm rounded-full">
                  Tư duy trừu tượng
                </span>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-gray-700">
              Là giai đoạn cao, phản ánh gián tiếp bản chất, quy luật của sự vật.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Khái niệm</h4>
                <p className="text-xs text-gray-600 mb-2">
                  Hình thức tư duy phản ánh những đặc tính bản chất chung nhất
                </p>
                <div className="bg-purple-50 rounded p-2 border border-purple-200">
                  <p className="text-xs text-purple-800">
                    Ví dụ: "Con người", "Giai cấp"
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Phán đoán</h4>
                <p className="text-xs text-gray-600 mb-2">
                  Liên kết các khái niệm để khẳng định hoặc phủ định một tính chất nào đó
                </p>
                <div className="bg-purple-50 rounded p-2 border border-purple-200">
                  <p className="text-xs text-purple-800">
                    Ví dụ: "Đồng dẫn điện tốt"
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <h4 className="text-sm mb-2">Suy luận</h4>
                <p className="text-xs text-gray-600">
                  Từ những phán đoán đã có để rút ra phán đoán mới (kết luận) mà không cần trực tiếp quan sát.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Relationship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <h4 className="text-xl mb-4 text-center">Mối quan hệ giữa hai giai đoạn</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <p className="text-sm">
                  ✓ Nhận thức cảm tính là <strong>cơ sở</strong>
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <p className="text-sm">
                  ✓ Nhận thức lý tính là <strong>bước nhảy vọt</strong> để nắm bắt bản chất
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}