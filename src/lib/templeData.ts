export interface TempleZone {
  id: string;
  name: string;
  shortName: string;
  desc: string;
  cameraPos: [number, number, number];
  cameraTarget: [number, number, number];
  actions: string[];
}

export const TEMPLE_ZONES: TempleZone[] = [
  {
    id: "gate",
    name: "Cổng Tam Quan",
    shortName: "Cổng chùa",
    desc: "Cửa Phật thanh tịnh đón người có duyên gieo hạt lành.",
    cameraPos: [0, 2.5, 18],
    cameraTarget: [0, 2, 0],
    actions: ["chuong", "laibaiphat"],
  },
  {
    id: "yard",
    name: "Sân Chùa Bồ Đề",
    shortName: "Sân chùa",
    desc: "Lư hương trầm nghi ngút khói thơm, cây bồ đề tỏa bóng mát dịu.",
    cameraPos: [0, 3, 10],
    cameraTarget: [0, 2, 0],
    actions: ["thaphuong", "tranghat", "gomo"],
  },
  {
    id: "hall",
    name: "Chánh Điện Đại Hùng",
    shortName: "Chánh Điện",
    desc: "Đức Phật Thích Ca hoàng kim trang nghiêm, từ bi soi sáng tâm hồn.",
    cameraPos: [0, 3.2, 5],
    cameraTarget: [0, 3.6, -6],
    actions: ["laibaiphat", "thaphuong", "gomo", "congduc"],
  },
  {
    id: "pond",
    name: "Hồ Sen & Hoa Đăng",
    shortName: "Hồ Sen",
    desc: "Mặt hồ tĩnh lặng, hoa đăng trôi bềnh bồng chở theo muôn lời ước nguyện.",
    cameraPos: [14, 3.5, 6],
    cameraTarget: [10, 0.5, 0],
    actions: ["thahoadang", "xinxam", "tranghat"],
  },
  {
    id: "belltower",
    name: "Tháp Chuông Đại Hồng",
    shortName: "Tháp Chuông",
    desc: "Tiếng chuông ngân sớm hôm nhắc người tỉnh thức trở về hiện tại.",
    cameraPos: [-14, 4.5, 6],
    cameraTarget: [-10, 3, 0],
    actions: ["thinhchuong", "gomo", "tranghat"],
  },
];

export const MEDITATIVE_QUOTES = [
  "Đi chậm một chút, thở sâu một chút.",
  "Lòng lặng rồi, ở đâu cũng là chùa.",
  "Gieo một hạt lành, đợi một mùa an.",
  "Buông bớt một điều, nhẹ thêm một bước.",
  "Nụ cười hiền là nén hương thơm nhất.",
  "Lên chùa hôm nay, mang bình an về nhà.",
  "Mỗi tiếng chuông là một lần trở về chánh niệm.",
  "Tâm an vạn sự an, tâm bình thế giới bình.",
  "Bao dung với chính mình, từ bi với muôn loài.",
  "Gặp nhau nơi cửa Phật là duyên lành từ muôn kiếp.",
];

export const MERIT_LEVELS = [
  { level: 1, title: "Sơ Phát Tâm", minMerit: 0, icon: "🌱" },
  { level: 2, title: "Thiện Tri Thức", minMerit: 50, icon: "🪷" },
  { level: 3, title: "Tâm Tinh Tấn", minMerit: 150, icon: "🕯️" },
  { level: 4, title: "Bồ Đề Tâm", minMerit: 350, icon: "📿" },
  { level: 5, title: "Chánh Niệm Tâm", minMerit: 700, icon: "✨" },
  { level: 6, title: "Tuệ Giác An Nhiên", minMerit: 1200, icon: "🕊️" },
  { level: 7, title: "Đại Từ Bi", minMerit: 2000, icon: "🌟" },
];

export const MANTRA_LIST = [
  "Nam Mô A Di Đà Phật",
  "Nam Mô Quán Thế Âm Bồ Tát",
  "Nam Mô Bổn Sư Thích Ca Mâu Ni Phật",
  "Nam Mô Đại Trí Văn Thù Sư Lợi Bồ Tát",
  "Nam Mô Đại Hạnh Phổ Hiền Bồ Tát",
  "Nam Mô Dược Sư Lưu Ly Quang Vương Phật",
];

