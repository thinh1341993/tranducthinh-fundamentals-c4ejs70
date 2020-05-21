let newsdata = [{
        link: 'https://ncov.moh.gov.vn/web/guest/-/thu-tuong-viet-nam-a-buoc-sang-trang-thai-binh-thuong-moi-',
        image: 'http://baochinhphu.vn/Uploaded/dangdinhnam/2020_05_19/NQH03648%202.jpg',
        title: "Thủ tướng: Việt Nam đã bước sang trạng thái 'bình thường mới'",
        content: 'Phát biểu tại Khoá họp thứ 73 Đại hội đồng Tổ chức Y tế Thế giới (WHO) được tổ chức trực tuyến lần đầu tiên trong lịch sử tổ chức này, Thủ tướng Nguyễn Xuân Phúc cho biết, Việt Nam đã bước sang trạng thái “bình thường mới”, vừa tập trung phục hồi, phát triển kinh tế, vừa không chủ quan trong phòng, chống dịch hiệu quả.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-gan-13-000-nguoi-ang-cach-ly-phong-ngua-dich-benh-covid-19',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7049526&t=1590033010768',
        title: 'Bản tin dịch COVID-19 trong 24h qua: Gần 13.000 người đang cách ly phòng ngừa dịch bệnh COVID-19',
        content: 'Tính đến 9h sáng ngày 21/5, Việt Nam đã bước sang ngày thứ 35 không có ca lây nhiễm trong cộng đồng. Hiện vẫn còn gần 13.000 người phải cách ly phòng ngừa dịch bệnh COVID-19.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/phi-cong-mac-covid-19-co-cai-thien-hom-nay-chuyen-gia-hang-au-ca-nuoc-hoi-chan-ban-cach-cuu-mang',
        image: 'http://giadinh.mediacdn.vn/thumb_w/640/2020/5/19/195-2-1589843570313228276503.jpg',
        title: 'Phi công mắc COVID-19 có cải thiện, hôm nay chuyên gia hàng đầu cả nước hội chẩn bàn cách cứu mạng',
        content: 'Tình trạng lâm sàng của nam phi công này có cải thiện nhưng chưa có dấu hiệu hồi phục. Dự kiến, chiều 19/5, sẽ có thêm cuộc Hội chẩn 3 miền đánh giá khả năng ghép phổi.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/hai-tiep-vien-hang-khong-vietnam-airlines-mac-covid-19-viet-nam-co-324-ca-nhiem',
        image: 'http://giadinh.mediacdn.vn/2020/5/7/anh-chup-man-hinh-2020-05-07-luc-173511-1588847728890441750359.png',
        title: 'Bộ GD&ĐT chỉ đạo các trường không giãn cách, không bắt học sinh đeo khẩu trang',
        content: '4 bệnh nhân COVID-19 được công bố lúc 18h ngày 18/5 đều trên chuyến bay từ nước ngoài về Việt Nam, được cách ly ngay.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/bo-gd-t-chi-ao-cac-truong-khong-gian-cach-khong-bat-hoc-sinh-eo-khau-trang',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7048755&t=1589857837041',
        title: 'Bản tin dịch COVID-19 trong 24h qua: Nguy cơ lây nhiễm trong cộng đồng còn tiềm ẩn, người dân không lơ là phòng bệnh',
        content: 'Mặc dù đã sang ngày thứ 33 Việt Nam không ghi nhận trường hợp mắc mới lây nhiễm trong cộng đồng, nguy cơ lây nhiễm trong cộng đồng hiện nay rất thấp nhưng vẫn còn tiềm ẩn. Người dân cần thích nghi với trạng thái "bình thường mới", không lơ là các biện pháp phòng bệnh đã được ngành y tế khuyến cáo.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/them-3-nguoi-mac-covid-19-khoi-benh-can-trong-om-lua-tu-nguoi-nhap-canh-trai-phep',
        image: 'http://giadinh.mediacdn.vn/thumb_w/640/2020/5/18/185-1589787581203965364440.jpg',
        title: 'Thêm 3 người mắc COVID-19 khỏi bệnh, cẩn trọng "đốm lửa" từ người nhập cảnh trái phép',
        content: 'Các chuyên gia nhận định dù nguy cơ có ca mắc COVID-19 trong cộng đồng là rất thấp nhưng vẫn còn, nhất là từ các trường hợp nhập cảnh trái phép.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-duy-tri-cac-bien-phap-ve-sinh-ca-nhan-nang-cao-y-thuc-phong-benh-trong-nhan-dan',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7048445&t=1590050551429',
        title: 'Bản tin dịch COVID-19 trong 24h qua: Duy trì các biện pháp vệ sinh cá nhân, nâng cao ý thức phòng bệnh trong nhân dân',
        content: 'Theo các chuyên gia, tình hình dịch bệnh trên thế giới vẫn còn rất phức tạp, nên dù Việt Nam đã qua 1 tháng không có các trường hợp mắc bệnh COVID-19 mới trong cộng đồng, người dân không được chủ quan. Nhận định tình hình, tất cả các trường hợp mắc mới gần đây đều là những người nhập cảnh vào Việt Nam, được cách ly ngay nên không có khả năng lây ra cộng đồng. Người dân hình thành nhiều thói quen tốt như rửa tay bằng xà phòng.'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-khong-con-tinh-trang-lay-nhiem-trong-cong-ong-tuy-nhien-khong-uoc-mat-canh-giac',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7048060&t=1590050045795',
        title: 'Bản tin dịch COVID-19 trong 24h qua: Không còn tình trạng lây nhiễm trong cộng đồng, tuy nhiên không được mất cảnh giác',
        content: 'Bước sang ngày thứ 31 không có ca mắc mới COVID-19 do lây nhiễm trong cộng đồng. Trong 24h qua có thêm 5 ca bệnh mới, mặc dù vậy đây đều là các bệnh nhân được cách ly ngay khi nhập cảnh, không có khả năng lây lan ra cộng đồng. Tuy nhiên, tình hình dịch bệnh thế giới vẫn còn diễn biến phức tạp. Tại cuộc họp của Thường trực Chính phủ về công tác phòng chống dịch COVID-19 mới đây, Thủ tướng nêu rõ, chúng ta không còn tình trạng lây nhiễm trong cộng đồng, nhưng không được mất cảnh giác khi dịch bệnh còn lây nhiễm ở nhiều nước và chưa có vaccine, thuốc đặc trị...'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-a-30-ngay-khong-co-ca-mac-moi-trong-cong-ong-nhung-tiep-tuc-quan-ly-tot-ben-trong-va-khoa-chat-tu-ben-ngoai-',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7047755&t=1590012916934',
        title: 'Bản tin dịch COVID-19 trong 24h qua: Đã 30 ngày không có ca mắc mới trong cộng đồng, nhưng “tiếp tục quản lý tốt bên trong và khóa chặt từ bên ngoài”',
        content: 'Hôm nay, Việt Nam bước sang ngày 30 không có ca mắc mới COVID-19 do lây nhiễm trong cộng đồng. 02 ca bệnh mới là hành khách về nước trên các chuyến bay từ Dubai và Nga đều được cách ly ngay khi nhập cảnh, không có khả năng lây lan ra cộng đồng. Tại cuộc họp của Thường trực Chính phủ về công tác phòng chống dịch COVID-19 ngày hôm qua, Thủ tướng nêu rõ, chúng ta không còn tình trạng lây nhiễm trong cộng đồng. Đây chính là điều kiện để chúng ta thu hút đầu tư phát triển. Tuy nhiên, không được mất cảnh giác khi dịch bệnh còn lây nhiễm ở nhiều nước và chưa có vaccine, thuốc đặc trị... “tiếp tục quản lý tốt bên trong và khóa chặt từ bên ngoài”'
    },
    {
        link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-29-ngay-khong-co-ca-nhiem-trong-cong-ong-tiep-tuc-thuc-hien-nhiem-vu-kep-',
        image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7047475&t=1590053154969',
        title: 'Bản tin dịch COVID-19 trong 24h qua: 29 ngày không có ca nhiễm trong cộng đồng, tiếp tục thực hiện "nhiệm vụ kép"',
        content: 'Bước sang ngày thứ 29 Việt Nam không có ca mắc mới do lây nhiễm trong cộng đồng. 24 hành khách về nước trên chuyến bay từ Mátxcơva (Liên bang Nga) dương tính với virus SARS-CoV-2 đều đã được cách ly ngay khi nhập cảnh, không có khả năng lây lan ra cộng đồng. Người dân cần tiếp tục thực hiện các biện pháp phòng, chống dịch COVID-19 trong tình hình mới theo chỉ đạo của Thủ tướng Chính phủ với nhiệm "nhiệm vụ kép" - vừa phát triển kinh tế, vừa phòng chống dịch COVID-19.'
    }
]

let news = document.getElementById('news')
let newsli = document.getElementById('newsli')
let newdata = document.getElementById('newdata')


let search1 = document.getElementById('search1')
let submit1 = document.getElementById('submit1')
let body = document.getElementById('body')