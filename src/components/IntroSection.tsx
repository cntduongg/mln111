import { motion } from 'motion/react';
import { Mountain, User, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function IntroSection() {
  return (
    <section id="intro" data-section="intro" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl mb-6">
            Lý Luận Nhận Thức Của Chủ Nghĩa Duy Vật Biện Chứng
          </h2>

          {/* Hero Image */}
          <motion.div 
            className="mb-6 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632309301942-5dcfac708f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGlua2luZyUyMGNvbnRlbXBsYXRpb24lMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2ODY2MTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Suy tư và nhận thức triết học"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <div className="space-y-6 leading-relaxed">
            <p className="text-lg">
              <strong className="text-indigo-600">Chủ nghĩa duy vật biện chứng</strong> là sự kết hợp giữa chủ nghĩa duy vật (khẳng định vật chất có trước, ý thức có sau) và phép biện chứng (coi sự vật luôn vận động, phát triển trong mâu thuẫn và liên hệ).
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400">
              <p className="text-lg text-gray-800">
                Có bao giờ bạn tự hỏi: <strong>Làm sao chúng ta biết những gì mình biết là đúng?</strong> Làm sao để phân biệt kiến thức thật với ảo tưởng?
              </p>
            </div>
            <p>
              Phương pháp luận khẳng định con người hoàn toàn có khả năng nhận thức thế giới một cách đúng đắn. Nó chống lại quan điểm duy tâm, siêu hình, đồng thời đề cao sự sáng tạo của tư duy trong việc cải tạo tự nhiên và xã hội.
            </p>
          </div>

          {/* Visual Metaphors */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm mb-1">Khách Thể</h4>
                <p className="text-xs text-gray-600">Hiện thực khách quan</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm mb-1">Chủ Thể</h4>
                <p className="text-xs text-gray-600">Con người nhận thức</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm mb-1">Thực Tiễn</h4>
                <p className="text-xs text-gray-600">Cầu nối kiểm chứng</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}