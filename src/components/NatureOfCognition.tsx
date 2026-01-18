import { motion } from 'motion/react';
import { BookOpen, Globe, Brain, Eye, Lightbulb, TrendingUp, Atom, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NatureOfCognition() {
  return (
    <section id="nature" data-section="nature" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4">Bản Chất Của Nhận Thức</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thừa nhận sự tồn tại khách quan của thế giới và khả năng nhận thức của con người
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Part 1: Existence & Ability */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sự tồn tại khách quan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-indigo-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl">Sự tồn tại khách quan của thế giới</h3>
              </div>
              
              {/* Image for objective world */}
              <motion.div 
                className="mb-3 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697015556424-756b0f152f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwbW91bnRhaW4lMjBsYW5kc2NhcGUlMjBtYWplc3RpY3xlbnwxfHx8fDE3Njg2NjEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Thiên nhiên Việt Nam - thế giới khách quan"
                  className="w-full h-40 object-cover"
                />
              </motion.div>
              
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong className="text-indigo-700">Thế giới vật chất tồn tại độc lập với ý thức:</strong> Dù con người có nghĩ đến hay không, có biết đến hay không, thì sự vật vẫn tồn tại với những thuộc tính vốn có.
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-indigo-200">
                  <p className="text-indigo-900">
                    <strong>Ví dụ:</strong> Quả táo vẫn có khối lượng, hình dáng, vị ngọt chua… ngay cả khi chưa ai nhìn thấy nó.
                  </p>
                </div>
                <p className="italic text-gray-600">
                  Đây là sự khác biệt căn bản với chủ nghĩa duy tâm, vốn cho rằng thế giới chỉ tồn tại trong ý niệm hoặc tinh thần.
                </p>
              </div>
            </motion.div>

            {/* Khả năng nhận thức */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-emerald-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl">Khả năng nhận thức của con người</h3>
              </div>
              
              {/* Image for human cognition */}
              <motion.div 
                className="mb-3 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565962228387-da024ecebfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGVvcGxlJTIwY29tbXVuaXR5JTIwd29ya3xlbnwxfHx8fDE3Njg2NjEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Con người nhận thức và làm việc"
                  className="w-full h-40 object-cover"
                />
              </motion.div>
              
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  Nhận thức không phải là sự "tưởng tượng" hay "ảo giác", mà là quá trình phản ánh hiện thực vào trong tư duy.
                </p>
                <p>
                  Nhờ <strong className="text-emerald-700">thực tiễn</strong> (lao động, sản xuất, thí nghiệm, trải nghiệm), con người kiểm chứng và bổ sung tri thức, khiến nhận thức ngày càng đầy đủ và chính xác hơn.
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                  <p className="text-emerald-900">
                    <strong>Ví dụ:</strong> Từ việc quan sát bầu trời, con người dần xây dựng nên thiên văn học, rồi phát triển thành khoa học vũ trụ hiện đại.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Definition Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-cyan-200"
          >
            <div className="space-y-6">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 mb-4"
                >
                  <Eye className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl">Bản Chất Của Nhận Thức</h3>
                </motion.div>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Từ ba nguyên tắc nền tảng, ta có thể thấy rõ bản chất của nhận thức. Nhận thức không phải là thứ có sẵn, trời ban, hay bỗng nhiên lóe sáng trong tâm trí. Nó là kết quả của một quá trình tương tác.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-lg md:text-xl text-center leading-relaxed">
                  Nhận thức là quá trình tác động biện chứng giữa chủ thể nhận thức và khách thể nhận thức trên cơ sở hoạt động thực tiễn của con người.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Part 2: Three Key Aspects */}
          <div className="space-y-6">
            {/* 1. Tương tác chủ-khách thể */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-purple-200"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">Tương Tác Chủ - Khách Thể</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Khi bạn (chủ thể) dùng tay sờ, mắt nhìn, hoặc thao tác (hành động/thực tiễn) với một đồ vật, sự việc (khách thể/thế giới), thì hiểu biết mới hình thành. Không có sự tương tác cụ thể đó, sẽ không có nhận thức.
                  </p>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                    <p className="text-purple-900">
                      <strong>Có tương tác, mới có hiểu biết.</strong>
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
                    <div className="text-center space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-md">
                        <p className="text-sm text-purple-900">CHỦ THỂ<br/>(Con người)</p>
                      </div>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </motion.div>
                      </div>
                      <div className="bg-purple-200/50 rounded-lg p-2 border border-purple-300">
                        <p className="text-xs text-purple-900">Thực tiễn<br/>(Tương tác)</p>
                      </div>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </motion.div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-md">
                        <p className="text-sm text-pink-900">KHÁCH THỂ<br/>(Thế giới)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Vận động và phát triển */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border border-amber-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl">Nhận thức là một quá trình biện chứng có vận động và phát triển</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nhận thức không đi theo đường thẳng, mà luôn có sự mâu thuẫn – giải quyết – tiến lên.
                  </p>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-amber-200">
                    <p className="text-amber-900 mb-3">
                      <strong>Vận động và phát triển:</strong> Con người không ngừng mở rộng hiểu biết, từ cảm tính đến lý tính, từ hiện tượng đến bản chất.
                    </p>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 border border-amber-300">
                      <p className="text-sm text-gray-700">
                        <strong className="text-amber-800">Ví dụ: Khoa học về vũ trụ.</strong> Ban đầu con người nghĩ Trái Đất là trung tâm, sau đó phát hiện Mặt Trời là trung tâm, rồi tiến đến thuyết Big Bang. Nhận thức luôn thay đổi, bổ sung, phát triển theo thực tiễn và bằng chứng mới.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Phản ánh tích cực, chủ động, sáng tạo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl shadow-xl p-8 border border-rose-200"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-md">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl">Phản ánh hiện thực khách quan một cách tích cực, chủ động, sáng tạo</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Nhận thức là quá trình phản ánh hiện thực khách quan một cách tích cực, chủ động, sáng tạo bởi con người trên cơ sở thực tiễn mang tính lịch sử cụ thể.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-rose-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Atom className="w-5 h-5 text-rose-600" />
                      <p className="text-sm text-rose-900">
                        <strong>Phản ánh hiện thực khách quan</strong>
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Ý thức không tự có, mà hình thành từ thế giới vật chất.
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-rose-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-fuchsia-600" />
                      <p className="text-sm text-fuchsia-900">
                        <strong>Tích cực, chủ động, sáng tạo</strong>
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Con người không chỉ "chép lại" hiện thực, mà còn phân tích, tổng hợp, giả thuyết, sáng tạo ra tri thức mới.
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-rose-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-rose-600" />
                      <p className="text-sm text-rose-900">
                        <strong>Thực tiễn lịch sử cụ thể</strong>
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Nhận thức gắn với điều kiện xã hội, thời đại.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-rose-100 to-fuchsia-100 rounded-lg p-5 border border-rose-300">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-rose-800">Ví dụ:</strong> Khi chế tạo vaccine COVID-19, các nhà khoa học không chỉ phản ánh virus như nó vốn có, mà còn chủ động nghiên cứu, sáng tạo ra công nghệ mRNA – một bước tiến mới trong y học.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}