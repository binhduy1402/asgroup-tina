import { Collection, PhilosophyItem, WorkflowStep, Project, Testimonial } from "./types";

import collection1 from "./assets/collection/collection1.jpg";
import collection2 from "./assets/collection/collection2.png";
import collection3 from "./assets/collection/collection3.jpg";
import collection4 from "./assets/collection/collection4.jpg";

export const BRAND_INFO = {
  name: "AS Group",
  tagline: "Heritage & Grace",
  hotline: "0903 731 769",
  email: "tina@asgroup.vn",
  address: "District 2, Ho Chi Minh City, VietNam",
};

export const COMPANY_STATS = [
{
value: "34",
label: "Tỉnh thành phục vụ",
},
{
value: "298+",
label: "Doanh nghiệp",
},
{
value: "1.000.000+",
label: "Quà tặng mỗi năm",
},
{
value: "18+",
label: "Năm kinh nghiệm",
},
];

export const NAVIGATION_LINKS = [
{ label: "Sản Phẩm", href: "#collections" },
{ label: "Năng Lực", href: "#our-story" },
{ label: "Câu Chuyện", href: "#philosophy" },
{ label: "Dự Án", href: "#capabilities" },
{ label: "Liên Hệ", href: "#contact" },
];

export const COLLECTIONS: Collection[] = [
{
id: "customer-gifts",
title: "Quà Khách Hàng",
tagline: "Gắn kết thương hiệu",
icon: "Users",
description:
"Những bộ quà tặng được thiết kế theo nhận diện thương hiệu, giúp doanh nghiệp tạo ấn tượng chuyên nghiệp và gia tăng trải nghiệm khách hàng trong mọi dịp.",
image: collection1,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-cham-soc-khach-hang/",
badge: "KHÁCH HÀNG",
highlights: [
"Thiết kế theo bộ nhận diện",
"Giftset đa dạng ngân sách",
"Bao bì cao cấp theo yêu cầu",
],
},

{
id: "event-gifts",
title: "Quà Sự Kiện",
tagline: "Nổi bật mọi chương trình",
icon: "CalendarDays",
description:
"Từ hội nghị, triển lãm đến sự kiện ra mắt sản phẩm, AS Group cung cấp giải pháp quà tặng giúp doanh nghiệp tạo dấu ấn với khách tham dự.",
image: collection2,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-su-kien/",
badge: "SỰ KIỆN",
highlights: [
"Sản xuất số lượng lớn",
"Giao hàng đúng tiến độ",
"Thiết kế riêng theo sự kiện",
],
},

{
id: "vip-gifts",
title: "Quà VIP",
tagline: "Tinh tế & đẳng cấp",
icon: "Crown",
description:
"Những bộ quà tặng cao cấp được tuyển chọn kỹ lưỡng, phù hợp dành tặng đối tác chiến lược, khách hàng VIP và lãnh đạo doanh nghiệp.",
image: collection3,
url: "https://fesgift.com/qua-tang-ca-nhan/qua-theo-nguoi-nhan-qua-tang-ca-nhan/cho-vip-cua-ban-qua-theo-nguoi-nhan-qua-tang-ca-nhan/",
badge: "VIP",
highlights: [
"Quà tặng cao cấp",
"Cá nhân hóa theo yêu cầu",
"Nâng tầm hình ảnh doanh nghiệp",
],
},

{
id: "employee-gifts",
title: "Quà Đội Ngũ",
tagline: "Gắn kết nội bộ",
icon: "UsersRound",
description:
"Quà tặng dành cho nhân viên trong các dịp onboarding, sinh nhật, lễ Tết hay chương trình khen thưởng, góp phần xây dựng văn hóa doanh nghiệp.",
image: collection4,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-gan-ket-doi-ngu/",
badge: "ĐỘI NGŨ",
highlights: [
"Quà Onboarding",
"Quà sinh nhật, tri ân nhân viên",
"Quà lễ tết doanh nghiệp",
],
},
];

