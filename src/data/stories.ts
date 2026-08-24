import story1 from "../assets/story1.jpg";
import story1_2 from "../assets/story1-2.jpg";
import story2 from "../assets/story2.jpg";
import story2_2 from "../assets/story2-2.jpg";
import story2_3 from "../assets/story2-3.jpg";
import story2_4 from "../assets/story2-4.jpg";
import story2_5 from "../assets/story2-5.jpg";
import story3 from "../assets/story3.jpg";
import story3_4 from "../assets/story3-4.jpg";
import story4 from "../assets/story4.jpg";
import story4_2 from "../assets/story4-2.jpg"; 
import story4_3 from "../assets/story4-3.jpg";
import story4_4 from "../assets/story4-4.jpg";
import story4_5 from "../assets/story4-5.jpg";  


export interface Story {
  id: number;
  title: string;
  cardTitle: string;
  cardImage: string;
  tag: string;
  images: string[];
  videos?: string[];
  imageFit?: "cover" | "contain";
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Trạm Mặt Trời – Lan tỏa năng lượng tích cực",
    cardTitle: "Trạm Mặt Trời – Lan tỏa năng lượng tích cực",
    cardImage: story1,
    tag: "Đối tác",
    images: [story1, story1_2],
    imageFit: "contain",
    description:
      "Đằng sau mỗi nụ cười tại Trạm Mặt Trời là hành trình hiện thực hóa một ý tưởng thương hiệu. AS Group đã cùng Sun Life phát triển những linh vật và quà tặng mang tinh thần tích cực, giúp không gian sự kiện trở nên sinh động, gần gũi và tạo nên những khoảnh khắc đáng nhớ cho khách tham quan. Đó cũng là cách chúng tôi tin rằng một món quà có thể kể nên câu chuyện của thương hiệu.",
  },
  {
    id: 2,
    title: "365 ngày - Không bỏ lỡ một sinh nhật nào",
    cardTitle: "365 ngày - Không bỏ lỡ một sinh nhật nào",
    cardImage: story2,
    tag: "Khách hàng",
    images: [story2, story2_2, story2_3, story2_4, story2_5],
    imageFit: "cover",
    description:
      "Mỗi món quà được gửi đúng dịp không chỉ là lời chúc mừng mà còn là cầu nối giữa doanh nghiệp và khách hàng. Với hệ thống quản lý ngày đặc biệt cùng mạng lưới giao hoa tại 34 tỉnh thành, AS Group giúp thương hiệu của quý khách luôn hiện diện trong những khoảnh khắc ý nghĩa.",
  },
  {
    id: 3,
    title: "Sự chăm chút của AS Group",
    cardTitle: "Sự chăm chút của AS Group",
    cardImage: story3,
    tag: "Nội bộ",
    images: [story3,story3_4],
    imageFit: "cover",
    description:
      "Phía sau mỗi sản phẩm là những ngày làm việc khẩn trương của đội ngũ AS Group. Khi thời gian gấp rút, các bộ phận luôn sát cánh hỗ trợ nhau để hoàn thành từng công đoạn đúng kế hoạch, từ sản xuất, kiểm tra chất lượng đến đóng gói. Chính tinh thần đồng đội ấy giúp mỗi đơn hàng được bàn giao đúng tiến độ mà vẫn giữ trọn sự chỉn chu trong từng chi tiết.",
  },
  {
    id: 4,
    title: "Đồng hành cùng Manulife tạo nên những trải nghiệm kết nối",
    cardTitle: "Đồng hành cùng Manulife tạo nên những trải nghiệm kết nối",
    cardImage: story4,
    tag: "Nội bộ",
    images: [story4, story4_2, story4_3, story4_4, story4_5],
    imageFit: "cover",
    description:
      "Một sự kiện thành công không chỉ được ghi nhớ bởi sân khấu hay chương trình, mà còn bởi những trải nghiệm mà người tham dự mang về. Đồng hành cùng Manulife qua nhiều hoạt động từ hội nghị, giải chạy đến các chương trình gắn kết nội bộ, AS Group đã góp phần tạo nên những sản phẩm và không gian trải nghiệm mang đậm dấu ấn thương hiệu. Đó là hành trình biến ý tưởng thành những khoảnh khắc kết nối, truyền cảm hứng và để lại giá trị lâu dài sau mỗi sự kiện.",
  },
];