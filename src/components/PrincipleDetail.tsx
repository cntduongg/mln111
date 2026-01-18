import { motion } from 'motion/react';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PrincipleDetailProps {
  number: number;
  title: string;
  content: string;
  example?: string;
  conclusion?: string;
  sectionId: string;
  color: 'indigo' | 'purple' | 'emerald';
  imageUrl?: string;
  imageAlt?: string;
  whyImportant?: string;
  diagram?: React.ReactNode;
}

const colorConfig = {
  indigo: {
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
    borderColor: 'border-indigo-300',
    textColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-500',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-600',
    badgeBg: 'bg-purple-500',
  },
  emerald: {
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-500',
  },
};

export function PrincipleDetail({
  number,
  title,
  content,
  example,
  conclusion,
  sectionId,
  color,
  imageUrl,
  imageAlt,
  whyImportant,
  diagram,
}: PrincipleDetailProps) {
  const colors = colorConfig[color];

  return (
    <section id={sectionId} data-section={sectionId} className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-br ${colors.bgGradient} rounded-2xl shadow-xl p-8 md:p-10 border-l-4 ${colors.borderColor}`}
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-2xl">{number}</span>
            </motion.div>
            <div>
              <motion.span
                className={`inline-block px-3 py-1 ${colors.badgeBg} text-white text-xs rounded-full mb-2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Nguyên Tắc {number}
              </motion.span>
              <h3 className="text-xl md:text-2xl">
                {title}
              </h3>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-200">
            <p className="leading-relaxed">
              {content}
            </p>
          </div>

          {/* Image */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 rounded-xl overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt || title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          )}

          {/* Why Important */}
          {whyImportant && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6"
            >
              <h4 className="text-sm text-blue-900 mb-2 font-semibold">Tại sao nguyên tắc này là nền tảng?</h4>
              <p className="text-sm leading-relaxed text-gray-700">
                {whyImportant}
              </p>
            </motion.div>
          )}

          {/* Diagram */}
          {diagram && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              {diagram}
            </motion.div>
          )}

          {/* Example */}
          {example && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6"
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-amber-900 mb-2">Ví Dụ Minh Họa</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {example}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Conclusion */}
          {conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`bg-gradient-to-r ${colors.gradient} rounded-xl p-6 text-white`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm mb-2 opacity-90">Kết Luận</h4>
                  <p className="leading-relaxed">
                    {conclusion}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}