import { motion } from 'motion/react';
import { HelpCircle, Eye, FlaskConical } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const principles = [
  {
    number: 1,
    icon: HelpCircle,
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
    borderColor: 'border-indigo-200',
    title: 'Thế giới vật chất tồn tại khách quan',
    question: 'Một thứ gì đó có thực sự tồn tại?',
    link: 'principle-1',
    imageUrl: 'https://images.unsplash.com/photo-1688501935726-d231682e79d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMHBsYW5ldCUyMG5hdHVyZXxlbnwxfHx8fDE3Njg1ODIwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Thế giới tồn tại khách quan',
  },
  {
    number: 2,
    icon: Eye,
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    title: 'Ý thức là bản sao chủ quan của thế giới',
    question: 'Nó là như thế này vì nó là như thế? Hay vì ta nghĩ là nó như thế?',
    link: 'principle-2',
    imageUrl: 'https://images.unsplash.com/photo-1600779547364-2fe8fe3c45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwdGhpbmtpbmclMjBjb250ZW1wbGF0aW9ufGVufDF8fHx8MTc2ODY2MTMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Suy tư và nhận thức',
  },
  {
    number: 3,
    icon: FlaskConical,
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    borderColor: 'border-emerald-200',
    title: 'Thực tiễn là tiêu chuẩn kiểm tra chân lý',
    question: 'Muốn biết 1 thứ như thế này hay thế kia, ta nên kiểm tra nó',
    link: 'principle-3',
    imageUrl: 'https://images.unsplash.com/photo-1768498950658-87ecfe232b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50JTIwdGVzdGluZyUyMHNjaWVuY2V8ZW58MXx8fHwxNzY4NjYxMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageAlt: 'Thí nghiệm và kiểm chứng thực tiễn',
  },
];

export function CorePrinciples() {
  const scrollToPrinciple = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="principles" data-section="principles" className="py-16 md:py-24 bg-gradient-to-br from-slate-100 to-gray-100">
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
            Nền Tảng Triết Học
          </motion.span>
          <h2 className="text-3xl md:text-4xl mb-4">Ba Nguyên Tắc Cốt Lõi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khung khái niệm cơ bản định hình cách chúng ta hiểu về nhận thức và chân lý
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group cursor-pointer"
              onClick={() => scrollToPrinciple(principle.link)}
            >
              <div className={`bg-gradient-to-br ${principle.bgGradient} rounded-2xl shadow-xl p-6 border ${principle.borderColor} h-full transition-all duration-300 hover:shadow-2xl`}>
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${principle.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-xl">{principle.number}</span>
                  </motion.div>
                  <motion.div
                    className={`text-${principle.color}-500`}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <principle.icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-lg mb-3 leading-tight">
                  {principle.title}
                </h3>
                
                {/* Image */}
                <motion.div 
                  className="mb-3 rounded-lg overflow-hidden shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={principle.imageUrl}
                    alt={principle.imageAlt}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
                
                <div className={`bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-${principle.color}-200`}>
                  <p className="text-sm text-gray-700 italic">
                    → {principle.question}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <p className="text-xs text-gray-500 text-center">
                    Nhấp để xem chi tiết →
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Arrows - Desktop */}
        <div className="hidden lg:flex justify-center items-center gap-4 mt-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}