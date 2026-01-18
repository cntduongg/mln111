import { motion } from 'motion/react';
import { Compass, TrendingUp, History, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const methodologies = [
  {
    icon: Compass,
    title: 'Nguyên tắc toàn diện',
    description: 'Khi nhận thức sự vật, phải xem xét trong mối liên hệ với các sự vật khác, không tách rời.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    imageUrl: 'https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBwbGFubmluZ3xlbnwxfHx8fDE3Njg2NjEzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Làm việc nhóm - nhận thức toàn diện',
  },
  {
    icon: TrendingUp,
    title: 'Nguyên tắc phát triển',
    description: 'Nhận thức phải thấy sự vật luôn biến đổi, vận động, không đứng yên.',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    imageUrl: 'https://images.unsplash.com/photo-1764422680760-e565473d0351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBkZXZlbG9wbWVudCUyMHByb2dyZXNzfGVufDF8fHx8MTc2ODY2MTM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Phát triển và tăng trưởng',
  },
  {
    icon: History,
    title: 'Nguyên tắc lịch sử – cụ thể',
    description: 'Nhận thức phải gắn với điều kiện, hoàn cảnh lịch sử cụ thể, tránh áp dụng máy móc.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    imageUrl: 'https://images.unsplash.com/photo-1568137222326-e90f57629a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwdGltZWxpbmUlMjBhcmNoaXZlfGVufDF8fHx8MTc2ODY2MTM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Lịch sử và bối cảnh',
  },
  {
    icon: Target,
    title: 'Nguyên tắc thực tiễn',
    description: 'Mọi nhận thức phải được kiểm nghiệm bằng thực tiễn, coi thực tiễn là tiêu chuẩn của chân lý.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    imageUrl: 'https://images.unsplash.com/photo-1767448068187-5be3cbc848c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFjdGljZSUyMHdvcmtzaG9wJTIwaGFuZHMlMjBvbnxlbnwxfHx8fDE3Njg2NjEzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Thực hành và làm việc',
  },
];

export function Methodology() {
  return (
    <section id="methodology" data-section="methodology" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Phương Pháp Luận
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">
            Phương Pháp Luận Duy Vật Biện Chứng Trong Nhận Thức
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bốn nguyên tắc cơ bản để nhận thức sự vật một cách khoa học và toàn diện
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {methodologies.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`bg-gradient-to-br ${method.bgGradient} rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-${method.color}-400`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <method.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl mb-3">
                    {method.title}
                  </h3>
                  
                  {/* Image */}
                  <motion.div 
                    className="mb-3 rounded-lg overflow-hidden shadow-md"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={method.imageUrl}
                      alt={method.imageAlt}
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                    <p className="text-sm leading-relaxed text-gray-700">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden"
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
          <div className="relative z-10 text-center">
            <h4 className="text-xl md:text-2xl mb-4">
              Tổng Kết Phương Pháp Luận
            </h4>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Bốn nguyên tắc này hướng dẫn chúng ta nhận thức sự vật một cách khoa học: <strong>toàn diện</strong> trong mối liên hệ, <strong>phát triển</strong> không ngừng, <strong>lịch sử – cụ thể</strong> theo bối cảnh, và luôn được <strong>kiểm nghiệm bằng thực tiễn</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}