export interface Fortune {
  id: number;
  title: string;
  rank: "Thượng Thượng Cát" | "Đại Cát" | "Thượng Kiết" | "Trung Cát" | "Bình An Vô Sự";
  category: string;
  poem: string[];
  meaning: string;
  career: string;
  love: string;
  health: string;
  advice: string;
}

export const FORTUNES: Fortune[] = [
  {
    id: 1,
    title: "Quẻ Số 1: Quan Âm Khai Hoa",
    rank: "Thượng Thượng Cát",
    category: "Vạn sự hanh thông",
    poem: [
      "Xuân về hoa cỏ trổ màu tươi",
      "Gió mát trăng thanh nở nụ cười",
      "Phước đức tích dày trời đất trợ",
      "Công danh rạng rỡ khắp muôn nơi.",
    ],
    meaning: "Đây là quẻ điềm lành tột bậc. Người bốc được quẻ này mọi việc ấp ủ bấy lâu nay đã đến lúc đơm hoa kết trái. Nhờ phước lành sâu dày, mọi trở ngại đều tan biến.",
    career: "Thăng tiến rộng mở, thi cử đỗ đạt, việc kinh doanh phát đạt.",
    love: "Người thương tâm đầu ý hợp, duyên lành đưa lối sớm kết lương duyên.",
    health: "Thân tâm an lạc, bệnh tật tiêu trừ, khí sắc hồng hào.",
    advice: "Giữ lòng khiêm cung, chăm làm việc thiện để phước báo bền lâu.",
  },
  {
    id: 2,
    title: "Quẻ Số 2: Trăng Soi Đáy Nước",
    rank: "Bình An Vô Sự",
    category: "Kiên nhẫn đợi thời",
    poem: [
      "Bóng nguyệt lung linh đáy nước trong",
      "Đừng vội buông tay hãy giữ lòng",
      "Gió lặng sóng yên trời tỏ rạng",
      "Chờ ngày mây tản thỏa ước mong.",
    ],
    meaning: "Sự việc hiện tại có chút hư ảo hoặc chưa đúng thời cơ. Tránh nóng vội, hấp tấp mà hỏng việc lớn. Giữ vững chánh niệm, thời cơ vàng sẽ tự đến.",
    career: "Nên thủ thế, củng cố kỹ năng hiện tại, không nên đầu tư mạo hiểm.",
    love: "Tình duyên cần sự chân thành và thấu hiểu, chớ vội vàng đốt cháy giai đoạn.",
    health: "Tránh suy nghĩ âu lo quá độ, chú ý giấc ngủ và chế độ tịnh dưỡng.",
    advice: "Thực hành thiền định, buông bỏ chấp niệm để tâm trí sáng suốt.",
  },
  {
    id: 3,
    title: "Quẻ Số 3: Bồ Đề Tỏa Bóng",
    rank: "Đại Cát",
    category: "Quý nhân phù trợ",
    poem: [
      "Cây lành trái ngọt đón duyên may",
      "Bồ Đề che chở tháng cùng ngày",
      "Gặp người tri kỷ chung chí hướng",
      "Tương lai xán lạn nắm trong tay.",
    ],
    meaning: "Có quý nhân xuất hiện giúp đỡ trên đường đời. Những mối quan hệ chân thành, đạo đức sẽ dẫn lối bạn vượt qua mọi thử thách một cách thần kỳ.",
    career: "Hợp tác thành công, đối tác đáng tin cậy, ký kết thuận lợi.",
    love: "Gặp được ý trung nhân thấu hiểu tâm hồn, cùng nhau tu dưỡng an yên.",
    health: "Sức khỏe dồi dào, tâm hồn thanh tịnh nhẹ nhõm.",
    advice: "Biết ơn và đền đáp những ân tình đã nhận được trong đời.",
  },
  {
    id: 4,
    title: "Quẻ Số 4: Hoa Sen Tinh Khiết",
    rank: "Thượng Kiết",
    category: "Tâm an vạn sự an",
    poem: [
      "Gần bùn chẳng chút bợn nhơ nham",
      "Tỏa ngát hương thanh dứt bụi trần",
      "Tâm sáng tựa gương soi bốn cõi",
      "An lành gõ cửa đón mùa xuân.",
    ],
    meaning: "Giữ được phẩm hạnh trong sạch giữa môi trường phức tạp. Đức độ của bạn là tấm bùa hộ mệnh quý giá nhất giúp thu hút bình an và thịnh vượng.",
    career: "Được cấp trên tin cậy, đồng nghiệp kính trọng nhờ tài đức vẹn toàn.",
    love: "Tình cảm thanh tao, chân thật, xây dựng trên sự tin tưởng tuyệt đối.",
    health: "Tinh thần phấn chấn, không còn vướng bận ưu phiền.",
    advice: "Luôn giữ tâm nguyện ban đầu, không dao động trước cám dỗ phù hoa.",
  },
  {
    id: 5,
    title: "Quẻ Số 5: Thuyền Vượt Trùng Dương",
    rank: "Trung Cát",
    category: "Vượt khó thành công",
    poem: [
      "Biển rộng mênh mông rẽ sóng trôi",
      "Gian nan thử sức chớ than ôi",
      "Vững tay chèo lái qua bão tố",
      "Bến đỗ bình an rực ánh ngời.",
    ],
    meaning: "Hiện tại có thể có vài thử thách chông gai, nhưng đó là phép thử rèn luyện bản lĩnh. Chỉ cần vững chí và không nản lòng, thành công rực rỡ đang đợi ở phía trước.",
    career: "Dự án mới đòi hỏi nhiều nỗ lực nhưng sẽ thu về kết quả xứng đáng.",
    love: "Đôi bên cùng nắm tay vượt qua định kiến hoặc khó khăn ban đầu.",
    health: "Chú ý rèn luyện thể thao, nâng cao sức đề kháng dẻo dai.",
    advice: "Dũng cảm đối diện nghịch cảnh, coi nghịch cảnh là người thầy tôi luyện.",
  },
  {
    id: 6,
    title: "Quẻ Số 6: Chuông Chiều Thức Tỉnh",
    rank: "Thượng Kiết",
    category: "Giác ngộ & An lạc",
    poem: [
      "Vọng tiếng chuông ngân giữa cảnh chiều",
      "Rũ sạch phiền lo dứt hắt hiu",
      "Quay về bến giác tìm an lạc",
      "Hạnh phúc quanh ta đẹp biết bao.",
    ],
    meaning: "Tâm hồn bạn sắp đón nhận một sự sáng tỏ lớn. Những khúc mắc, gút thắt trong lòng từ bấy lâu nay bỗng chốc được tháo gỡ nhẹ nhàng như trút được gánh nặng nghìn cân.",
    career: "Tìm ra hướng đi đúng đắn, chuyển hướng công việc phù hợp với đam mê.",
    love: "Gia đình hòa thuận, mâu thuẫn hóa giải, thấu hiểu và sẻ chia sâu sắc.",
    health: "Khỏe khoắn từ bên trong, tinh thần thư thái nhẹ nhàng.",
    advice: "Dành thời gian chăm sóc nội tâm, gần gũi thiên nhiên và chánh niệm.",
  },
];

