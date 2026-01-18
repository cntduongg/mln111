import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { IntroSection } from './components/IntroSection';
import { CorePrinciples } from './components/CorePrinciples';
import { PrincipleDetail } from './components/PrincipleDetail';
import { Methodology } from './components/Methodology';
import { NatureOfCognition } from './components/NatureOfCognition';
import { CognitionStages } from './components/CognitionStages';
import { PracticeSection } from './components/PracticeSection';
import { CognitionProcessStages } from './components/CognitionProcessStages';
import { TruthSection } from './components/TruthSection';
import { Conclusion } from './components/Conclusion';
import { QuizGame } from './components/QuizGame';
import { MindMap } from './components/MindMap';
import { AIChatbox } from './components/AIChatbox';

export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section') || '');
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 antialiased">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Table of Contents - Desktop Only */}
      <TableOfContents activeSection={activeSection} />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="relative">
        <IntroSection />
        <CorePrinciples />
        <PrincipleDetail 
          number={1}
          title="Thế giới vật chất tồn tại khách quan"
          content="Phương pháp luận cho rằng có một thực tại vững chắc tồn tại độc lập với suy nghĩ của chúng ta. Hãy tưởng tượng một quả táo trên bàn. Nó vẫn ở đó, với hình dáng, trọng lượng và cấu trúc vật lý của nó, cho dù bạn có đang nhìn nó, nhắm mắt lại, hay thậm chí không hề biết đến sự tồn tại của nó. Nó không phải là sản phẩm của tư duy hay một ảo giác."
          sectionId="principle-1"
          color="indigo"
          imageUrl="https://images.unsplash.com/photo-1576941240045-23e895800053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBhcHBsZSUyMG9uJTIwdGFibGV8ZW58MXx8fHwxNzY4MzU5NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          imageAlt="Quả táo đỏ trên bàn - biểu tượng cho thế giới vật chất tồn tại khách quan"
          whyImportant="Nếu không thừa nhận điều này, mọi cuộc tranh luận về sự thật sẽ trở nên vô nghĩa. Chúng ta sẽ rơi vào thuyết duy tâm chủ quan, nơi mỗi người có một 'thế giới' riêng và không có tiêu chuẩn chung nào để đối chiếu. Toàn bộ nền khoa học tự nhiên đều dựa trên tiền đề này. Các nhà khoa học nghiên cứu các định luật (như trọng lực, di truyền) với niềm tin rằng chúng tồn tại khách quan, không phụ thuộc vào việc họ có tin hay không."
          diagram={
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-indigo-200">
              <img 
                src="https://images.unsplash.com/photo-1707944745899-104a4b12d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBpbiUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY4MzU5NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nhà khoa học trong phòng thí nghiệm"
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <p className="text-sm text-gray-700 text-center italic">
                Khoa học dựa trên niềm tin vào sự tồn tại khách quan của các định luật tự nhiên
              </p>
            </div>
          }
        />
        <PrincipleDetail 
          number={2}
          title="Ý thức chỉ là bản sao chủ quan của thế giới khách quan"
          content="Cho rằng mọi thông tin khi được chủ thể tiếp thu sẽ trở thành một thông tin chủ quan, đúng với quan điểm và góc nhìn của chủ thể cho đến khi được thực tiễn kiểm chứng."
          example="Ví dụ nhé: đặt hai người ở hai đầu của con số 6, hoặc 9. Vật thể thật chỉ có một, nhưng do góc nhìn khác nhau, người này thấy số 6, người kia lại thấy số 9. Điều đó cho thấy: có một thực tại khách quan, nhưng ý thức của ta về nó bị ảnh hưởng bởi vị trí, góc nhìn, quan điểm. Cùng một câu nói, nhưng người nghe với tâm trạng khác nhau, kinh nghiệm khác nhau, sẽ hiểu theo cách khác nhau."
          sectionId="principle-2"
          color="purple"
          whyImportant="Nguyên tắc này dạy ta sự khiêm tốn trong nhận định. Nó cảnh báo rằng cái chúng ta tưởng là 'sự thật hiển nhiên' nhiều khi chỉ là một góc nhìn chủ quan, một 'bản sao' có thể chưa hoàn chỉnh. Nó tạo ra khoảng cách giữa thế giới thật và hiểu biết của ta, và chính khoảng cách đó đòi hỏi một cầu nối."
          diagram={
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 border-2 border-purple-300">
              <div className="text-center space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="font-semibold text-purple-900">THẾ GIỚI THẬT (Khách quan)</p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-indigo-100 rounded-lg p-4 border border-indigo-300">
                  <p className="text-sm text-indigo-900">[giác quan tiếp nhận]</p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="font-semibold text-pink-900">HÌNH ẢNH TRONG ĐẦU (Chủ quan)</p>
                </div>
              </div>
            </div>
          }
        />
        <PrincipleDetail 
          number={3}
          title="Thực tiễn là tiêu chuẩn kiểm tra chân lý"
          content="Làm thế nào để biết nhận thức nào khớp với thực tại? Phải dùng thực tiễn làm cầu nối. Ta chủ động tác động vào thế giới khách quan (cho xe chạy qua cầu). Hành động đó sẽ tạo ra một kết quả khách quan (cầu đổ hay đứng vững). Kết quả khách quan này sẽ xác nhận hoặc bác bỏ nhận thức chủ quan của ta."
          example="Ví dụ: ta giả thuyết rằng 'cây cầu này chắc'. Để kiểm chứng, cho xe tải chở nặng chạy qua. Kỹ sư dùng máy móc đo độ rung, độ chịu lực. Nếu cầu đứng vững, thì nhận thức 'cầu chắc' là đúng. Nếu cầu sập, thì nhận thức đó sai."
          conclusion="Thực tiễn chính là phép thử cuối cùng để phân biệt đâu là kiến thức thật, đâu chỉ là ảo tưởng."
          sectionId="principle-3"
          color="emerald"
          imageUrl="https://images.unsplash.com/photo-1759849556089-b5789046530b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjgzMTU5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          imageAlt="Cây cầu và kỹ thuật xây dựng - biểu tượng cho thực tiễn kiểm chứng"
          whyImportant="Vì thực tiễn mang tính vật chất, khách quan và phổ biến. Một thí nghiệm thành công có thể được lặp lại bởi bất kỳ ai, ở bất kỳ đâu, và cho kết quả nhất quán. Nó đưa chúng ta ra khỏi mớ hỗn độn của các ý kiến chủ quan và trở về với tiêu chuẩn chung của thế giới vật chất."
        />
        <NatureOfCognition />
        <Methodology />
        <CognitionStages />
        <PracticeSection />
        <CognitionProcessStages />
        <TruthSection />
        <Conclusion />
        <QuizGame />
        <MindMap />
      </main>

      <footer className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            Lý Luận Nhận Thức Của Chủ Nghĩa Duy Vật Biện Chứng
          </p>
          <p className="text-xs mt-2 opacity-60">
            Static React Academic Website • 2026
          </p>
        </div>
      </footer>

      <AIChatbox />
    </div>
  );
}