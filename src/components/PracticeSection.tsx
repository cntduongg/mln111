import { motion } from 'motion/react';
import { Hammer, Users, FlaskConical, Target, Zap, CheckCircle2, Award } from 'lucide-react';

const practiceTypes = [
  {
    icon: Hammer,
    title: 'Sản xuất vật chất',
    importance: 'Quan trọng nhất',
    description: 'Hoạt động tạo ra của cải vật chất để duy trì sự tồn tại và phát triển của xã hội.',
    examples: 'Trồng lúa, sản xuất công nghiệp, xây dựng hạ tầng.',
    role: 'Là cơ sở cho các hình thức khác.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    imageUrl: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY4NTgxOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Users,
    title: 'Hoạt động chính trị - xã hội',
    importance: 'Quan trọng',
    description: 'Hoạt động nhằm biến đổi các quan hệ xã hội, chế độ xã hội.',
    examples: 'Bầu cử, hoạt động công đoàn, phong trào thanh niên tình nguyện.',
    role: 'Tạo môi trường xã hội để thúc đẩy sản xuất và khoa học.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    imageUrl: 'https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY4NTk3MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: FlaskConical,
    title: 'Thực nghiệm khoa học',
    importance: 'Quan trọng',
    description: 'Hoạt động được tiến hành trong điều kiện nhân tạo để nhận thức và kiểm tra quy luật.',
    examples: 'Thí nghiệm vaccine, mô phỏng khí động học.',
    role: 'Rút ngắn quá trình nhận thức, áp dụng nhanh thành tựu vào đời sống.',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    imageUrl: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njg2NjA3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const roles = [
  {
    icon: Target,
    title: 'Cơ sở của nhận thức',
    description: 'Qua tiếp xúc trực tiếp với sự vật (thực tiễn), con người mới nảy sinh nhu cầu hiểu biết và thu thập tài liệu cảm tính.',
    color: 'indigo',
  },
  {
    icon: Zap,
    title: 'Động lực của nhận thức',
    description: 'Thực tiễn đặt ra các vấn đề (nhu cầu lương thực, chữa bệnh, quản lý...) buộc con người phải nhận thức để giải quyết.',
    color: 'amber',
  },
  {
    icon: Award,
    title: 'Mục đích của nhận thức',
    description: 'Nhận thức không phải để "biết cho vui", mà để quay lại phục vụ, chỉ đạo thực tiễn, cải tạo thế giới.',
    color: 'cyan',
  },
  {
    icon: CheckCircle2,
    title: 'Tiêu chuẩn của chân lý',
    description: 'Chỉ có đem tri thức áp dụng vào thực tiễn mới biết tri thức đó đúng hay sai (Ví dụ: Galileo thả quả cầu để chứng minh định luật rơi tự do).',
    color: 'emerald',
  },
];

export function PracticeSection() {
  return (
    <section id="practice" data-section="practice" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Thực Tiễn
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Thực Tiễn Và Vai Trò Của Nó</h2>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12 border-l-4 border-emerald-500"
        >
          <h3 className="text-xl md:text-2xl mb-4">1. Thực tiễn là gì?</h3>
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-white">
            <p className="text-lg leading-relaxed">
              <strong>Định nghĩa:</strong> Thực tiễn là toàn bộ những hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.
            </p>
          </div>
        </motion.div>

        {/* Three Forms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center">2. Ba hình thức cơ bản của thực tiễn</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {practiceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-emerald-500"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={type.imageUrl} 
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <type.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-sm">{type.title}</h4>
                      <span className="text-xs text-red-600">({type.importance})</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">{type.description}</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <p className="text-xs text-gray-600"><strong>Ví dụ:</strong> {type.examples}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                      <p className="text-xs text-emerald-900"><strong>Vai trò:</strong> {type.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Four Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center">3. Vai trò của thực tiễn đối với nhận thức</h3>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-10 border border-indigo-200">
            <p className="text-center mb-8 text-lg text-indigo-900">4 Vai trò chính</p>
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${role.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <role.icon className={`w-6 h-6 text-${role.color}-600`} />
                    </div>
                    <div>
                      <h4 className="mb-2">{role.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}