import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Gamepad2, CheckCircle, XCircle, Trophy, RotateCcw, Star } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatable: string;
}

// Ma trận 30 câu hỏi
const allQuestions: Question[] = [
  {
    id: 1,
    question: 'Bạn mua một chiếc áo mới trực tuyến. Khi mở hộp, bạn thấy màu sắc khác với ảnh trên web. Điều này minh họa nguyên tắc nào?',
    options: [
      'Thế giới vật chất tồn tại khách quan',
      'Ý thức là bản sao chủ quan của thế giới',
      'Thực tiễn là tiêu chuẩn kiểm tra chân lý',
      'Không liên quan đến triết học'
    ],
    correctAnswer: 1,
    explanation: 'Màu sắc trên màn hình (chủ quan) khác với màu thật của áo (khách quan) vì bị ảnh hưởng bởi ánh sáng, màn hình, góc nhìn - đây là ví dụ về "ý thức là bản sao chủ quan".',
    relatable: '📱 Đây là lý do tại sao shop thời trang luôn ghi "Màu sắc có thể chênh lệch 5-10% so với ảnh thật"!'
  },
  {
    id: 2,
    question: 'Bạn nghĩ mình nấu ăn ngon, nhưng người yêu nói "hơi mặn". Làm sao biết ai đúng?',
    options: [
      'Bạn đúng vì bạn là đầu bếp',
      'Người yêu đúng vì họ là người ăn',
      'Cho nhiều người khác thử và xem phản hồi',
      'Không có đúng sai, mỗi người một khẩu vị'
    ],
    correctAnswer: 2,
    explanation: 'Đây chính là "thực tiễn là tiêu chuẩn kiểm tra chân lý"! Muốn biết món ăn có thật sự mặn không, phải cho nhiều người thử (thực tiễn xã hội) để kiểm chứng.',
    relatable: '🍜 Các đầu bếp chuyên nghiệp luôn cho đồng nghiệp nếm thử trước khi phục vụ khách!'
  },
  {
    id: 3,
    question: 'Trong một cuộc tranh cãi, bạn bè bảo "mình thấy thế này mà!" và không chịu nghe ý kiến khác. Họ đang vi phạm nguyên tắc nào?',
    options: [
      'Nguyên tắc toàn diện - chỉ nhìn một phía',
      'Nguyên tắc phát triển - cố chấp không thay đổi',
      'Nguyên tắc lịch sử cụ thể - không xét hoàn cảnh',
      'Cả A và B đều đúng'
    ],
    correctAnswer: 3,
    explanation: 'Khi ai đó chỉ khăng khăng "mình thấy thế này", họ vừa thiếu toàn diện (chỉ nhìn góc độ của mình), vừa cố chấp không phát triển nhận thức.',
    relatable: '💬 Đây là lý do tại sao "empathy" (thấu hiểu) lại quan trọng trong giao tiếp!'
  },
  {
    id: 4,
    question: 'Bạn học code theo tutorial và "hiểu" rồi. Nhưng khi làm project thực tế thì... bug tràn lan! Bạn thiếu giai đoạn nào?',
    options: [
      'Giai đoạn 1: Nhận thức cảm tính',
      'Giai đoạn 2: Nhận thức lý tính',
      'Giai đoạn 3: Áp dụng vào thực tiễn',
      'Không thiếu giai đoạn nào, chỉ là chưa giỏi'
    ],
    correctAnswer: 2,
    explanation: 'Bạn đã qua giai đoạn 1 (xem video), giai đoạn 2 (hiểu lý thuyết), nhưng thiếu giai đoạn 3 (thực hành thực tế). Chỉ khi code thực tế, gặp lỗi, debug, bạn mới thực sự "hiểu"!',
    relatable: '💻 "Tutorial hell" - hiện tượng học mãi tutorial nhưng không dám code thực tế!'
  },
  {
    id: 5,
    question: 'Mẹ bảo "hồi xưa mẹ làm thế này thì được, con cứ làm đi". Nhưng bây giờ thời đại khác rồi. Mẹ đang quên nguyên tắc gì?',
    options: [
      'Nguyên tắc toàn diện',
      'Nguyên tắc phát triển',
      'Nguyên tắc lịch sử - cụ thể',
      'Nguyên tắc thực tiễn'
    ],
    correctAnswer: 2,
    explanation: 'Kinh nghiệm "hồi xưa" đúng trong bối cảnh thời đó, nhưng bây giờ hoàn cảnh khác rồi! Đây chính là "nguyên tắc lịch sử - cụ thể" - phải xét theo bối cảnh.',
    relatable: '👵 Nhưng nhiều khi lời mẹ vẫn đúng đấy, vì có những nguyên lý bất biến! Balance is key.'
  },
  {
    id: 6,
    question: 'Hai người nhìn cùng một bức ảnh meme: người A cười sặc, người B không thấy buồn cười. Tại sao?',
    options: [
      'Người B không có khiếu hài hước',
      'Ý thức của mỗi người bị ảnh hưởng bởi kinh nghiệm, văn hóa khác nhau',
      'Bức ảnh meme khách quan nên ai cũng phải cười',
      'A và B đang sống trong hai thế giới khác nhau'
    ],
    correctAnswer: 1,
    explanation: 'Bức ảnh meme (khách quan) giống nhau, nhưng ý thức về nó (chủ quan) khác biệt tùy theo kiến thức văn hóa, kinh nghiệm cá nhân. Một ví dụ hoàn hảo về "ý thức là bản sao chủ quan"!',
    relatable: '😂 Gen Z cười meme "no context" còn boomer thì... "cái gì vui ở đây ta?"'
  },
  {
    id: 7,
    question: 'Bạn đọc review sản phẩm 5 sao rần rần, mua về thì thất vọng. Bài học triết học là gì?',
    options: [
      'Review là fake, shop trả tiền mua',
      'Thực tiễn (dùng thử) quan trọng hơn lý thuyết (review)',
      'Đừng tin vào internet',
      'Mình xui thôi'
    ],
    correctAnswer: 1,
    explanation: 'Review chỉ là nhận thức của người khác (chủ quan). Muốn biết sản phẩm có thật sự tốt không, bạn phải TỰ DÙNG THỬ (thực tiễn) mới biết đúng sai!',
    relatable: '⭐ Đây là lý do tại sao các shop tốt thường có chính sách "đổi trả trong 7 ngày"!'
  },
  {
    id: 8,
    question: 'Bạn học thuộc lòng công thức Toán nhưng không biết áp dụng bài tập. Bạn đang ở giai đoạn nào và thiếu gì?',
    options: [
      'Ở giai đoạn lý tính, thiếu thực tiễn',
      'Ở giai đoạn cảm tính, cần học thêm lý thuyết',
      'Đã hoàn thành chu trình nhận thức',
      'Toán khó quá thôi, không phải do triết học'
    ],
    correctAnswer: 0,
    explanation: 'Bạn đã "hiểu" công thức (nhận thức lý tính) nhưng chưa "áp dụng" (thực tiễn). Chỉ khi làm nhiều bài tập, gặp nhiều dạng, bạn mới thực sự nắm vững!',
    relatable: '📐 Đây là lý do tại sao giáo viên luôn bắt làm bài tập về nhà - để luyện giai đoạn 3!'
  },
  {
    id: 9,
    question: 'Bạn xem TikTok về cách làm bánh, rồi tự tin vào bếp. Kết quả: bánh cháy khét. Sai ở đâu?',
    options: [
      'TikTok dạy sai',
      'Chỉ có nhận thức lý tính (xem video) chưa đủ, cần thực tiễn nhiều lần',
      'Bạn không có tài năng làm bánh',
      'Lò nướng bị hỏng'
    ],
    correctAnswer: 1,
    explanation: 'Xem video chỉ cho bạn nhận thức lý tính (hiểu lý thuyết). Nhưng kỹ năng thực sự chỉ đến khi bạn THỰC HÀNH nhiều lần, thất bại, điều chỉnh. Đó là giai đoạn 3!',
    relatable: '🎂 Các baker chuyên nghiệp cũng phải thử nghiệm công thức hàng chục lần mới hoàn hảo!'
  },
  {
    id: 10,
    question: 'Bạn thấy bạn thân đăng story buồn. Bạn nghĩ "chắc cãi nhau với người yêu". Hóa ra... họ buồn vì mất điện thoại. Bạn đã mắc lỗi gì?',
    options: [
      'Chủ quan suy đoán không dựa trên thực tiễn',
      'Nguyên tắc toàn diện - thiếu thông tin',
      'Cả A và B',
      'Không sai, dự đoán là bình thường'
    ],
    correctAnswer: 2,
    explanation: 'Bạn đã suy đoán (chủ quan) mà không hỏi thực tế (thực tiễn), và chỉ dựa trên một góc nhìn hẹp (thiếu toàn diện). Đây là lỗi kép!',
    relatable: '📱 Đừng bao giờ giả định - hãy hỏi trực tiếp! "Assume = making an ASS out of U and ME"'
  },
  {
    id: 11,
    question: 'Các nhà khoa học thử nghiệm vaccine COVID-19 trên hàng nghìn người trước khi phê duyệt. Họ đang áp dụng nguyên tắc nào?',
    options: [
      'Nguyên tắc toàn diện',
      'Thực tiễn là tiêu chuẩn kiểm tra chân lý',
      'Nguyên tắc phát triển',
      'Nguyên tắc lịch sử cụ thể'
    ],
    correctAnswer: 1,
    explanation: 'Thử nghiệm lâm sàng chính là THỰC TIỄN để kiểm chứng vaccine có thực sự an toàn và hiệu quả không. Lý thuyết tốt đẹp thế nào cũng phải qua thực tế mới được công nhận!',
    relatable: '💉 Đây là lý do vaccine mất nhiều năm phát triển - phải test kỹ càng!'
  },
  {
    id: 12,
    question: 'Bạn đọc sách "7 thói quen thành công" và áp dụng ngay 100%. Nhưng cuộc sống vẫn... bình thường. Tại sao?',
    options: [
      'Sách viết sai',
      'Bạn áp dụng máy móc, không xét đến hoàn cảnh cụ thể của mình',
      'Bạn cần đọc thêm sách khác',
      'Thành công cần thời gian'
    ],
    correctAnswer: 1,
    explanation: 'Vi phạm "nguyên tắc lịch sử - cụ thể"! Những gì đúng với tác giả (doanh nhân Mỹ 30 năm trước) chưa chắc đúng 100% với bạn (sinh viên Việt Nam hiện tại). Phải điều chỉnh cho phù hợp!',
    relatable: '📚 Self-help books là công cụ, không phải công thức ma thuật!'
  },
  {
    id: 13,
    question: 'Bạn tranh luận với người yêu về việc nhà. Ai cũng nói "tôi đã làm nhiều hơn!". Làm sao giải quyết?',
    options: [
      'Xem camera an ninh để đếm',
      'Lập bảng Excel ghi chép cụ thể (thực tiễn kiểm chứng)',
      'Cứ tranh đi, ai thua ai biết',
      'Không ai đúng hết'
    ],
    correctAnswer: 1,
    explanation: 'Khi cả hai đều có "ý thức chủ quan" khác nhau, cần một tiêu chuẩn KHÁCH QUAN (ghi chép thực tế) để kiểm chứng. Đây là áp dụng "thực tiễn là tiêu chuẩn"!',
    relatable: '📊 Nhiều cặp đôi hiện đại dùng app chia việc nhà để tránh tranh cãi!'
  },
  {
    id: 14,
    question: 'Bạn nghe tin đồn "uống nước chanh buổi sáng giảm cân thần kỳ". Nên làm gì trước khi tin?',
    options: [
      'Uống luôn, thử chứ sao',
      'Tìm hiểu nghiên cứu khoa học, thử nghiệm có kiểm soát',
      'Hỏi bạn bè xem ai đã thử',
      'Tin ngay, vì nhiều người nói thế'
    ],
    correctAnswer: 1,
    explanation: 'Đây là phân biệt "ý kiến chủ quan" (tin đồn) và "chân lý khách quan" (nghiên cứu khoa học). Chỉ thực tiễn có kiểm soát mới đáng tin!',
    relatable: '🍋 Internet đầy "mẹo thần thánh", nhưng khoa học mới là vua!'
  },
  {
    id: 15,
    question: 'Bạn xem một bộ phim kinh dị và sợ hãi. Cảm giác sợ này thuộc giai đoạn nhận thức nào?',
    options: [
      'Nhận thức cảm tính - trực quan sinh động',
      'Nhận thức lý tính - tư duy trừu tượng',
      'Thực tiễn',
      'Không phải nhận thức'
    ],
    correctAnswer: 0,
    explanation: 'Cảm giác sợ, vui, buồn đều là NHẬN THỨC CẢM TÍNH - phản ánh trực tiếp từ giác quan (mắt nhìn cảnh đáng sợ → não xử lý → cảm xúc sợ hãi).',
    relatable: '🎬 Đạo diễn phim kinh dị rất giỏi khai thác nhận thức cảm tính của bạn!'
  },
  {
    id: 16,
    question: 'Newton thấy táo rơi và phát minh ra định luật vận hành. Đây là ví dụ về điều gì?',
    options: [
      'May mắn',
      'Từ nhận thức cảm tính (táo rơi) → lý tính (định luật) → thực tiễn (kiểm chứng)',
      'Táo ma thuật',
      'Newton thông minh bẩm sinh'
    ],
    correctAnswer: 1,
    explanation: 'Đây là chu trình hoàn chỉnh: Quan sát (cảm tính) → Suy luận (lý tính) → Thí nghiệm kiểm chứng (thực tiễn). Ba giai đoạn nhận thức chuẩn!',
    relatable: '🍎 Nhiều phát minh vĩ đại bắt đầu từ quan sát đơn giản!'
  },
  {
    id: 17,
    question: 'Trong đại dịch COVID, khoa học ban đầu nói "không cần khẩu trang", sau đó đổi thành "bắt buộc đeo". Điều này chứng minh gì?',
    options: [
      'Khoa học mâu thuẫn, không đáng tin',
      'Nhận thức có tính tương đối - phát triển theo bằng chứng mới',
      'Các nhà khoa học nói xạo',
      'Không có chân lý tuyệt đối'
    ],
    correctAnswer: 1,
    explanation: 'Đây là tính TƯƠNG ĐỐI của chân lý! Khi có thêm dữ liệu, nghiên cứu, nhận thức được điều chỉnh để gần với chân lý hơn. Đó là quá trình bình thường của khoa học!',
    relatable: '😷 Khoa học không hoàn hảo từ đầu, mà tiến bộ dần qua thực tiễn!'
  },
  {
    id: 18,
    question: 'Bạn học lái xe: đầu tiên sợ sệt (cảm tính), sau đó hiểu lý thuyết giao thông (lý tính). Nhưng khi nào bạn mới thực sự "biết lái"?',
    options: [
      'Khi đọc xong sách lý thuyết',
      'Khi thi đậu bằng A1',
      'Khi tự lái trên đường nhiều lần (thực tiễn)',
      'Khi xem YouTube "cách lái xe"'
    ],
    correctAnswer: 2,
    explanation: 'Chỉ khi BẠN TỰ LÁI thực tế nhiều lần, gặp nhiều tình huống (thực tiễn), bạn mới thực sự "biết lái". Lý thuyết chỉ là bước đệm!',
    relatable: '🚗 "Practice makes perfect" - câu này chính là triết học nhận thức!'
  },
  {
    id: 19,
    question: 'Thầy giáo dạy "Trái đất hình cầu". Học sinh hỏi "sao em nhìn phẳng?". Mâu thuẫn này giải thích thế nào?',
    options: [
      'Học sinh sai vì không tin thầy',
      'Nhận thức cảm tính (mắt thường) có giới hạn, cần lý tính (khoa học) để hiểu đúng',
      'Cả hai đều sai',
      'Trái đất vừa phẳng vừa cầu'
    ],
    correctAnswer: 1,
    explanation: 'Mắt thường (cảm tính) thấy phẳng vì tầm nhìn hạn chế. Nhưng khi dùng khoa học (vệ tinh, toán học - lý tính), ta thấy Trái đất hình cầu. Đây là sự vượt lên của lý tính so với cảm tính!',
    relatable: '🌍 Flat-earthers là những người chỉ tin vào cảm tính, từ chối lý tính!'
  },
  {
    id: 20,
    question: 'Bạn nghe tin "Việt Nam vào top 10 nền kinh tế năm 2045". Đây là loại chân lý gì?',
    options: [
      'Chân lý tuyệt đối',
      'Chân lý tương đối - còn phụ thuộc nhiều yếu tố',
      'Không phải chân lý, chỉ là dự đoán',
      'Fake news'
    ],
    correctAnswer: 2,
    explanation: 'Đây là DỰ ĐOÁN/GIẢ THUYẾT dựa trên xu hướng hiện tại, CHƯA PHẢI chân lý vì chưa xảy ra và chưa được thực tiễn kiểm chứng. Chỉ đến 2045 mới biết đúng sai!',
    relatable: '📈 Mọi kế hoạch tương lai đều là giả thuyết - thực tế mới là thánh!'
  },
  {
    id: 21,
    question: 'Bạn đọc tin "Ăn tỏi trị ung thư" trên Facebook. Nguyên tắc nào giúp bạn phán đoán đúng?',
    options: [
      'Nguyên tắc toàn diện - tìm nhiều nguồn',
      'Thực tiễn là tiêu chuẩn - xem có nghiên cứu khoa học không',
      'Nguyên tắc lịch sử cụ thể - ai viết, khi nào, tại sao',
      'Cả A, B, C'
    ],
    correctAnswer: 3,
    explanation: 'Cần kết hợp cả 3: (A) Tìm nhiều nguồn tin khác nhau, (B) Xem có nghiên cứu uy tín không, (C) Xét nguồn gốc bài viết. Đây là tư duy phản biện chuẩn!',
    relatable: '🧄 Fake news y tế rất nguy hiểm - hãy xác minh kỹ trước khi tin!'
  },
  {
    id: 22,
    question: 'Bạn chơi game và thua 10 ván liên tiếp. Bạn kết luận "game này hack rồi!". Đây là lỗi tư duy gì?',
    options: [
      'Chủ quan, không dựa vào thực tiễn kiểm chứng',
      'Thiếu toàn diện - không xem xét kỹ năng bản thân',
      'Kết luận vội vàng',
      'Cả A, B, C'
    ],
    correctAnswer: 3,
    explanation: 'Bạn đã (A) kết luận chủ quan không chứng cứ, (B) không nhìn nhận yếu tố kỹ năng của mình, (C) kết luận sau quá ít dữ liệu (10 ván). Ba lỗi cùng lúc!',
    relatable: '🎮 "It\'s not a bug, it\'s a feature... called skill issue!"'
  },
  {
    id: 23,
    question: 'Một nông dân trồng lúa theo kinh nghiệm ông bà. Nhưng giờ khí hậu thay đổi, năng suất giảm. Ông ấy nên làm gì?',
    options: [
      'Tiếp tục theo kinh nghiệm cũ',
      'Kết hợp kinh nghiệm cũ với khoa học mới (giống lúa chống hạn, tưới tiêu thông minh)',
      'Bỏ nghề nông dân',
      'Đổ lỗi cho trời'
    ],
    correctAnswer: 1,
    explanation: 'Đây là "nguyên tắc phát triển" và "lịch sử - cụ thể"! Kinh nghiệm cũ quý báu nhưng phải KẾT HỢP với khoa học hiện đại khi điều kiện thay đổi.',
    relatable: '🌾 Nông nghiệp 4.0 = truyền thống + công nghệ!'
  },
  {
    id: 24,
    question: 'Bạn xem video "cách kiếm 100 triệu/tháng" và tin ngay. Bạn đang thiếu giai đoạn nào?',
    options: [
      'Nhận thức cảm tính',
      'Nhận thức lý tính - phân tích phê phán',
      'Thực tiễn',
      'Cả B và C'
    ],
    correctAnswer: 3,
    explanation: 'Bạn đã CÓ cảm tính (xem video), nhưng THIẾU lý tính (suy nghĩ phê phán: có hợp lý không?) và thiếu thực tiễn (kiểm chứng xem thực tế có ai làm được không).',
    relatable: '💰 "Get rich quick" schemes thường lợi dụng người thiếu tư duy phản biện!'
  },
  {
    id: 25,
    question: 'Trong thí nghiệm khoa học, tại sao phải làm lại nhiều lần, không chỉ một lần?',
    options: [
      'Vì nhà khoa học rảnh',
      'Để đảm bảo kết quả có tính lặp lại, không phải ngẫu nhiên (thực tiễn kiểm chứng đầy đủ)',
      'Vì sợ máy móc hỏng',
      'Để tốn tiền nghiên cứu'
    ],
    correctAnswer: 1,
    explanation: 'Một lần thành công có thể là ngẫu nhiên. Chỉ khi lặp lại nhiều lần, trong nhiều điều kiện khác nhau, kết quả mới đáng tin. Đây là THỰC TIỄN nghiêm ngặt!',
    relatable: '🔬 Đây là lý do nhiều nghiên cứu y khoa mất hàng năm mới công bố!'
  },
  {
    id: 26,
    question: 'Bạn thấy bạn thân thay đổi hành vi đột ngột. Theo nguyên tắc toàn diện, bạn nên?',
    options: [
      'Kết luận ngay họ có vấn đề',
      'Tìm hiểu nhiều góc độ: sức khỏe, gia đình, học tập, tình cảm',
      'Không quan tâm',
      'Hỏi Facebook xem mọi người nghĩ sao'
    ],
    correctAnswer: 1,
    explanation: 'Nguyên tắc toàn diện đòi hỏi xem xét SỰ VẬT TRONG MỐI LIÊN HỆ với nhiều yếu tố khác nhau, không vội kết luận một chiều.',
    relatable: '🤝 Sự thấu hiểu bắt đầu từ nhìn nhận đa chiều!'
  },
  {
    id: 27,
    question: 'AI ChatGPT đưa ra câu trả lời tự tin. Bạn nên áp dụng nguyên tắc nào?',
    options: [
      'Tin 100% vì AI thông minh',
      'Thực tiễn kiểm chứng - đối chiếu với nguồn khác, kiểm tra tính logic',
      'Không tin gì cả',
      'Copy paste luôn'
    ],
    correctAnswer: 1,
    explanation: 'AI có thể sai, có thể "hallucinate" (tưởng tượng thông tin). Luôn cần KIỂM CHỨNG qua nhiều nguồn và thực tế. Thực tiễn là vua!',
    relatable: '🤖 "Trust but verify" - câu châm ngôn thời đại AI!'
  },
  {
    id: 28,
    question: 'Bạn học môn Triết và thầy giảng "chân lý có tính cụ thể". Ví dụ nào đúng nhất?',
    options: [
      '"Nước sôi ở 100°C" - đúng ở 1 atm, sai ở áp suất cao',
      '"1+1=2" - đúng mọi lúc mọi nơi',
      '"Mặt trời mọc đằng Đông" - đúng ở Trái Đất, sai ở Mặt Trăng',
      'Cả A và C'
    ],
    correctAnswer: 3,
    explanation: 'Cả A và C đều thể hiện tính CỤ THỂ của chân lý - phụ thuộc vào điều kiện, hoàn cảnh cụ thể. Không có chân lý nào tách rời khỏi bối cảnh!',
    relatable: '🌡️ Đây là lý do các công thức khoa học luôn kèm "điều kiện áp dụng"!'
  },
  {
    id: 29,
    question: 'Bạn và người yêu xem phim cùng nhau. Bạn thấy hay, người yêu thấy dở. Ai đúng?',
    options: [
      'Bạn đúng',
      'Người yêu đúng',
      'Cả hai đều có "chân lý chủ quan" riêng về cảm nhận thẩm mỹ',
      'Phim khách quan nên phải có một đáp án đúng'
    ],
    correctAnswer: 2,
    explanation: 'Thẩm mỹ, cảm xúc có tính CHỦ QUAN cao. Phim (khách quan) giống nhau, nhưng GIÁ TRỊ của nó với mỗi người (chủ quan) khác nhau tùy thị hiếu. Cả hai đều "đúng" về phía mình!',
    relatable: '🎥 Đây là lý do Rotten Tomatoes có 2 điểm: Critics vs Audience!'
  },
  {
    id: 30,
    question: 'Trong một dự án nhóm, mọi người tranh cãi kịch liệt. Theo CNDVBC, nên giải quyết thế nào?',
    options: [
      'Nghe theo leader',
      'Thực tiễn: làm thử cả hai hướng, xem kết quả thực tế thế nào',
      'Bỏ phiếu đa số',
      'Bỏ cuộc'
    ],
    correctAnswer: 1,
    explanation: 'Khi có nhiều ý kiến (chủ quan) khác nhau, cách tốt nhất là ĐƯA VÀO THỰC TIỄN kiểm chứng. Làm thử prototype, A/B testing, xem kết quả thực tế nào tốt hơn!',
    relatable: '👥 Startup hiện đại làm MVP (Minimum Viable Product) để test thị trường - đó là triết học!'
  },
];

export function QuizGame() {
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  // Hàm random 10 câu hỏi từ 30 câu
  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };

  // Khởi tạo game với 10 câu random
  useEffect(() => {
    const randomQuestions = getRandomQuestions();
    setGameQuestions(randomQuestions);
    setAnsweredQuestions(new Array(10).fill(false));
  }, []);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null || gameQuestions.length === 0) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === gameQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestart = () => {
    const randomQuestions = getRandomQuestions();
    setGameQuestions(randomQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameFinished(false);
    setAnsweredQuestions(new Array(10).fill(false));
  };

  const getScoreMessage = () => {
    const percentage = (score / gameQuestions.length) * 100;
    if (percentage === 100) return { text: 'Xuất sắc! Bạn là bậc thầy triết học! 🏆', color: 'from-yellow-500 to-orange-600' };
    if (percentage >= 75) return { text: 'Rất tốt! Bạn đã nắm vững lý luận! 🎉', color: 'from-green-500 to-emerald-600' };
    if (percentage >= 50) return { text: 'Khá đấy! Cần ôn lại một chút! 📚', color: 'from-blue-500 to-indigo-600' };
    return { text: 'Cần cố gắng thêm! Đọc lại nhé! 💪', color: 'from-purple-500 to-pink-600' };
  };

  if (gameQuestions.length === 0) {
    return <div className="py-16 text-center">Đang tải câu hỏi...</div>;
  }

  const question = gameQuestions[currentQuestion];

  return (
    <section id="quiz" data-section="quiz" className="py-16 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
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
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl mb-4">Minigame: Kiểm Tra Kiến Thức</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            10 câu hỏi ngẫu nhiên từ kho 30 câu - áp dụng lý luận nhận thức vào đời thường! 🎮
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!gameFinished ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-violet-200"
            >
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    Câu {currentQuestion + 1} / {gameQuestions.length}
                  </span>
                  <span className="text-sm font-semibold text-violet-600">
                    Điểm: {score}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl mb-6 leading-relaxed">
                  {question.question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showWrong = showResult && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedAnswer !== null}
                        whileHover={selectedAnswer === null ? { scale: 1.02, x: 5 } : {}}
                        whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          showCorrect
                            ? 'border-green-500 bg-green-50'
                            : showWrong
                            ? 'border-red-500 bg-red-50'
                            : isSelected
                            ? 'border-violet-500 bg-violet-50'
                            : 'border-gray-200 hover:border-violet-300 hover:bg-violet-50'
                        } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            showCorrect
                              ? 'bg-green-500'
                              : showWrong
                              ? 'bg-red-500'
                              : isSelected
                              ? 'bg-violet-500'
                              : 'bg-gray-300'
                          }`}>
                            {showCorrect ? (
                              <CheckCircle className="w-5 h-5 text-white" />
                            ) : showWrong ? (
                              <XCircle className="w-5 h-5 text-white" />
                            ) : (
                              <span className="text-white font-semibold">{String.fromCharCode(65 + index)}</span>
                            )}
                          </div>
                          <span className="flex-1">{option}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className={`rounded-xl p-6 ${
                      selectedAnswer === question.correctAnswer
                        ? 'bg-green-50 border-2 border-green-500'
                        : 'bg-red-50 border-2 border-red-500'
                    }`}>
                      <div className="flex items-start gap-3 mb-3">
                        {selectedAnswer === question.correctAnswer ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            selectedAnswer === question.correctAnswer ? 'text-green-900' : 'text-red-900'
                          }`}>
                            {selectedAnswer === question.correctAnswer ? 'Chính xác! 🎉' : 'Chưa đúng rồi! 🤔'}
                          </h4>
                          <p className="text-sm leading-relaxed text-gray-700">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-700">
                          <strong className="text-violet-600">💡 Fun fact:</strong> {question.relatable}
                        </p>
                      </div>
                    </div>

                    <motion.button
                      onClick={handleNextQuestion}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {currentQuestion < gameQuestions.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả →'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-violet-200 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Trophy className="w-20 h-20 text-yellow-500" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl mb-4">Hoàn Thành!</h3>
              
              <div className={`bg-gradient-to-r ${getScoreMessage().color} rounded-2xl p-6 text-white mb-6`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {Array.from({ length: Math.ceil((score / gameQuestions.length) * 5) }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-semibold mb-2">
                  Điểm số: {score}/{gameQuestions.length}
                </p>
                <p className="text-lg">
                  {getScoreMessage().text}
                </p>
              </div>

              <div className="bg-violet-50 rounded-xl p-6 mb-6">
                <p className="leading-relaxed text-gray-700">
                  Bạn đã trải qua <strong className="text-violet-600">ba giai đoạn nhận thức</strong> trong game này:
                  <br />
                  1️⃣ Đọc câu hỏi (cảm tính) → 2️⃣ Suy nghĩ phân tích (lý tính) → 3️⃣ Chọn đáp án kiểm chứng (thực tiễn)!
                </p>
              </div>

              <motion.button
                onClick={handleRestart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Chơi lại (10 câu mới)
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
