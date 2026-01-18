import { motion } from 'motion/react';
import { Eye, Brain, Cog, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stages = [
  {
    number: 1,
    icon: Eye,
    title: 'TRẢI NGHIỆM TRỰC TIẾP',
    subtitle: 'Nhận thức cảm tính',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    content: 'Đây là bước khởi đầu, khi ta tiếp xúc trực tiếp với sự vật bằng giác quan. Ta thấy nó, nghe nó, sờ nó, nếm nó. Tất cả thông tin ban đầu đều đến từ đây.',
    imageUrl: 'https://images.unsplash.com/photo-1681347203228-f1d53a4140c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZmFybWVyJTIwcmljZSUyMGZpZWxkfGVufDF8fHx8MTc2ODY2MTIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Nông dân Việt Nam quan sát ruộng lúa - trải nghiệm trực tiếp',
  },
  {
    number: 2,
    icon: Brain,
    title: 'SUY NGẪM, ĐÚC KẾT',
    subtitle: 'Nhận thức lý tính',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    content: 'Từ những cảm nhận rời rạc, bộ não bắt đầu làm việc: so sánh, phân tích, tổng hợp, suy luận để tìm ra bản chất, quy luật bên trong. Ta chuyển từ "thấy" sang "hiểu".',
    imageUrl: 'https://images.unsplash.com/photo-1701627091488-027ddbf45dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njg2NjEyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Sinh viên Việt Nam học tập, suy ngẫm',
  },
  {
    number: 3,
    icon: Cog,
    title: 'ÁP DỤNG VÀO THỰC TẾ',
    subtitle: 'Thực tiễn kiểm chứng',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    content: 'Đây là bước then chốt, nơi lý thuyết được đem ra kiểm chứng và hiện thực hóa. Ta dùng hiểu biết của mình để tác động trở lại thế giới, giải quyết vấn đề, hoặc tạo ra cái mới.',
    imageUrl: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4NjQ3OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Công nhân xây dựng áp dụng kiến thức vào thực tế',
  },
];

export function CognitionStages() {
  return (
    <section id="stages" data-section="stages" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Con Đường Nhận Thức
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Ba Giai Đoạn Của Quá Trình</h2>
        </motion.div>

        <div className="space-y-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className={`bg-gradient-to-br ${stage.bgGradient} rounded-2xl shadow-xl p-8 border-l-4 border-${stage.color}-400`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${stage.gradient} rounded-2xl flex items-center justify-center shadow-lg relative`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stage.icon className="w-10 h-10 text-white" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm shadow-md">
                        {stage.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl mb-1">
                        GIAI ĐOẠN {stage.number}: {stage.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 bg-${stage.color}-200 text-${stage.color}-800 text-xs rounded-full`}>
                        {stage.subtitle}
                      </span>
                    </div>
                    
                    {/* Image */}
                    <motion.div 
                      className="mb-4 rounded-xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={stage.imageUrl}
                        alt={stage.imageAlt}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                      <p className="leading-relaxed text-gray-700">
                        {stage.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Connector */}
              {index < stages.length - 1 && (
                <motion.div
                  className="flex justify-center my-4"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Cycle Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="text-center space-y-4">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block"
            >
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"></div>
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">Vòng Xoáy Đi Lên</h3>
            <p className="text-lg leading-relaxed">
              Kết quả của giai đoạn 3 không phải là dấu chấm hết. Những thành công hay thất bại trong thực tế sẽ tạo ra những trải nghiệm mới, sâu sắc hơn, đưa ta trở lại <strong>Giai đoạn 1</strong>, nhưng với một tầm cao mới, để bắt đầu một vòng nhận thức mới, tiến bộ hơn.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mt-6">
              <p className="text-xl">
                Và thứ thúc đẩy cũng như thứ kiểm chứng của mọi vòng nhận thức ấy chính là <strong>thực tiễn</strong>.
              </p>
              <p className="text-sm opacity-90 italic mt-4">
                Chính vì thế, để hiểu sâu hơn, chúng ta cần bàn đến phần tiếp theo: Thực tiễn và vai trò của thực tiễn đối với nhận thức.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}