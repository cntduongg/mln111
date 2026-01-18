import { motion } from 'motion/react';
import { Lightbulb, CheckCircle2, MapPin, Infinity, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const properties = [
  {
    icon: CheckCircle2,
    title: 'Tính khách quan',
    badge: 'Quan trọng nhất',
    description: 'Nội dung của chân lý không phụ thuộc vào ý muốn chủ quan của con người',
    example: 'Trái đất quay quanh mặt trời dù con người có thích hay không',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1600570146487-34b4e0c4080a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODYxMDkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Thiên nhiên Việt Nam - sự tồn tại khách quan',
  },
  {
    icon: MapPin,
    title: 'Tính cụ thể',
    badge: 'Quan trọng',
    description: 'Không có chân lý trừu tượng, chân lý luôn gắn với điều kiện lịch sử - cụ thể xác định',
    example: 'Nước sôi ở 100°C là chân lý, nhưng chỉ đúng ở áp suất 1 atm',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1707944745891-922795a805dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2ODY1ODgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Nghiên cứu khoa học - điều kiện cụ thể',
  },
  {
    icon: TrendingUp,
    title: 'Tính tương đối',
    badge: 'Quan trọng',
    description: 'Phản ánh đúng nhưng chưa hoàn toàn đầy đủ, cần được bổ sung thêm theo lịch sử',
    example: 'Kiến thức khoa học luôn phát triển, hoàn thiện qua thời gian',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    imageUrl: 'https://images.unsplash.com/photo-1752920299211-28be8c9b0121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBsZWFybmluZ3xlbnwxfHx8fDE3Njg2NjEyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Học tập và nghiên cứu - kiến thức phát triển',
  },
  {
    icon: Infinity,
    title: 'Tính tuyệt đối',
    badge: 'Mục tiêu',
    description: 'Phản ánh đầy đủ, trọn vẹn hiện thực (là cái đích hướng tới)',
    example: 'Chân lý hoàn toàn tuyệt đối là lý tưởng mà nhận thức con người tiến dần tới',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    imageUrl: 'https://images.unsplash.com/photo-1763650287502-72bb711906cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3Njg1ODY3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Công nghệ tiên tiến - hướng tới chân lý tuyệt đối',
  },
];

export function TruthSection() {
  return (
    <section id="truth" data-section="truth" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            Chân Lý
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Chân Lý Và Tính Chất Của Chân Lý</h2>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12 border-l-4 border-amber-500"
        >
          <h3 className="text-xl md:text-2xl mb-6">1. Chân lý là gì?</h3>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Là những tri thức phù hợp với hiện thực khách quan và đã được thực tiễn kiểm nghiệm.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Properties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center">2. Các tính chất của chân lý</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br from-white to-${property.color}-50 rounded-2xl shadow-xl p-6 border-t-4 border-${property.color}-500 hover:shadow-2xl transition-all`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${property.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <property.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className={`px-3 py-1 bg-${property.color}-100 text-${property.color}-800 text-xs rounded-full`}>
                    {property.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl mb-3">{property.title}</h4>

                {/* Image */}
                <motion.div 
                  className="mb-3 rounded-lg overflow-hidden shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={property.imageUrl}
                    alt={property.imageAlt}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>

                {/* Description */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-3 border border-gray-200">
                  <p className="text-sm leading-relaxed text-gray-700">
                    {property.description}
                  </p>
                </div>

                {/* Example */}
                <div className={`bg-${property.color}-50 rounded-lg p-4 border border-${property.color}-200`}>
                  <p className="text-xs text-gray-600">
                    <strong className={`text-${property.color}-800`}>Ví dụ:</strong> {property.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Relationship Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center">
              <h4 className="text-xl mb-6">Mối quan hệ giữa Tương đối và Tuyệt đối</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="w-6 h-6" />
                    <h5>Tương Đối</h5>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">
                    Nhận thức hiện tại, đúng nhưng chưa đầy đủ, cần tiếp tục phát triển
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Infinity className="w-6 h-6" />
                    <h5>Tuyệt Đối</h5>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">
                    Mục tiêu cuối cùng, nhận thức hoàn chỉnh, trọn vẹn về thực tại
                  </p>
                </div>
              </div>
              <motion.div
                className="mt-6 inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 40px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm">
                  Tương đối dần tiến tới Tuyệt đối qua quá trình nhận thức không ngừng
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}