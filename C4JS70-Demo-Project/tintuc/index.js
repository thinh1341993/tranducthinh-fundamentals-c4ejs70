let newsdata = [{
    link: 'https://ncov.moh.gov.vn/web/guest/-/ban-tin-dich-covid-19-trong-24h-qua-17-ngay-khong-co-ca-mac-trong-cong-ong-nhung-ung-phot-lo-cac-khuyen-cao-phong-chong-dich',
    image: 'https://ncov.moh.gov.vn/image/journal/article?img_id=7043075&t=1588473649999',
    title: 'Bản tin dịch COVID-19 trong 24h qua: 17 ngày không có ca mắc trong cộng đồng, nhưng đừng “phớt lờ” các khuyến cáo phòng, chống dịch',
    content: 'Tính đến 6h sáng nay 3/5, tròn 17 ngày Việt Nam không có ca lây nhiễm trong cộng đồng. Tuy nhiên, không vì thế mà chúng ta được phép chủ quan, lơ là các biện pháp phòng chống dịch bệnh, đặc biệt trong những ngày nghỉ lễ đã có hiện tượng nhiều nơi người dân tụ tập đông người và "quên" mang khẩu trang. Dịch bệnh vẫn còn diễn biến phức tạp tại các nước trên thế giới, nguy cơ dịch bệnh xâm nhập vào nước ta vẫn còn hiện hữu, Ban Chỉ đạo Quốc gia khuyến cáo người dân thực hiện các biện pháp phòng bệnh.'
},
{
    link:'https://ncov.moh.gov.vn/web/guest/-/bo-y-te-yeu-cau-cac-co-so-kinh-doanh-duoc-trien-khai-bien-phap-ung-pho-phong-chong-dich-covid-19',
    image:'https://ncov.moh.gov.vn/image/journal/article?img_id=7042545&t=1588333173929',
    title:'Bộ Y tế yêu cầu các cơ sở kinh doanh dược triển khai biện pháp ứng phó phòng chống dịch COVID-19',
    content:'Bộ Y tế vừa có công văn gửi Sở Y tế các tỉnh, thành phố trực thuộc Trung ương; các cơ sở kinh doanh thuốc, nguyên liệu làm thuốc, hướng dẫn biện pháp ứng phó tại cơ sở kinh doanh dược giai đoạn phòng, chống dịch COVID-19.'
}]

let news = document.getElementById('news')
let search = document.getElementById('search')
let submit = document.getElementById('submit')
console.dir(search, submit)
console.log(newsdata[0].title)
console.log(newsdata[0].title.search(/24h/i))
for (i = 0; i < newsdata.length; i++) {
    news.innerHTML += `<a href="${newsdata[i].link}" target="blank"><img src="${newsdata[i].image}"></a>
                        <a href="${newsdata[i].link}" target="blank">${newsdata[i].title}</a>
                        <p>${newsdata[i].content}</p>`
}

submit.addEventListener('click', () => {
    let html
    for (i = 0; i < newsdata.length; i++) {
        if (newsdata[i].title.search(`${search.value}`) != -1 || newsdata[i].content.search(`${search.value}`) != -1) {
            html += `<a href="${newsdata[i].link}" target="blank"><img src="${newsdata[i].image}"></a>
    <a href="${newsdata[i].link}" target="blank">${newsdata[i].title}</a>
    <p>${newsdata[i].content}</p>`
        }
        else {
            news.innerHTML = `khong tim thay`
        }
    }
    news.innerHTML = html
})