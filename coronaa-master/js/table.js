let table = document.getElementById('table')
let city
let k = 10
let tablek
let world
let tableVNTG = document.getElementById('tableVNTG')
let marquee = document.getElementById('marquee')
let marqueedata
window.onload = async() => {
    await getData();
    getmarquee()
    highchart();
    combobox();
    await getDataTable();
    getDataTable2();
    tablecity();
    shownewsdata2()
}

async function getmarquee() {
    let api = await fetch("https://gnews.io/api/v2?q=Corona&lang=vi&country=vn&token=4584b98e5b9f3c41f190a17e767ac19b")
    data = await api.json()
    marqueedata = data.articles
    console.log(marqueedata)
    for (i = 0; i < marqueedata.length; i++) {
        marquee.innerHTML += `<a style="font-size: 15px;margin-left: 20px;margin-right: 20px;" href='${marqueedata[i].link}' target="_blank" class ='title'>${marqueedata[i].title}</a>`
    }
}

async function getDataTable() {
    let api = await fetch("https://ncov-data.herokuapp.com/api/corona?fbclid=IwAR0WyLosDC2c0nIygwBybdPbw2YrtRKZ3kUspCh-oLMJFDgTi9wqIgkv44k")
    data = await api.json()
    city = data.data.vietnam.list
    console.log(city)
}

async function getDataTable2() {
    let api = await fetch("https://ncov-data.herokuapp.com/api/corona?fbclid=IwAR1ifJzSjPDsxlODtV4HUI2NrUIyA6z44NoagC3lM1J41zkicCbXy4xwKKY")
    data = await api.json()
    world = data.data
    console.log(world)
    tableVNTG.innerHTML += `<tr>
    <th style='background: #D81212;color: #FFFFFF;'>Việt Nam</th>
    <td style='color: #FF1245;'>Số Ca Nhiễm<br>${world.vietnam.confirmed}</td>
    <td style='color: #D1650B;'>Đang Điều Trị<br>${world.vietnam.confirmed - world.vietnam.deaths - world.vietnam.recovered}</td>
    <td style='color: #0B6FA4;'>Số Ca Khỏi Bệnh<br>${world.vietnam.recovered}</td>
    <td style='color: #333333;'>Số Ca Tử Vong<br>${world.vietnam.deaths}</td>
</tr>
<tr>
    <th style='background: #0B6FA4;color: #FFFFFF;'>Thế Giới</th>
    <td style='color: #FF1245;'>Số Ca Nhiễm<br>${new Intl.NumberFormat().format(world.global.confirmed)}</td>
    <td style='color: #D1650B;'>Đang Điều Trị<br>${new Intl.NumberFormat().format(world.global.confirmed - world.global.deaths - world.global.recovered)}</td>
    <td style='color: #0B6FA4;'>Số Ca Khỏi Bệnh<br>${new Intl.NumberFormat().format(world.global.recovered)}</td>
    <td style='color: #333333;'>Số Ca Tử Vong<br>${new Intl.NumberFormat().format(world.global.deaths)}</td>
</tr>`
}

function tablecity() {
    tablek = `<thead>
                        <th>Tỉnh, Thành Phố</th>
                        <th>Số ca nhiễm</th>
                        <th>Khỏi</th>
                        <th>Tử vong</th>
                        </thead>`
    for (i = 0; i < city.length; i++) {
        tablek += `<tr>
                <td>${city[i].name}</td>
                <td>${city[i].confirmed}</td>
                <td>${city[i].recovered}</td>
                <td>${city[i].deaths}</td>
            </tr>`
        table.innerHTML = tablek
    }
}

function shownewsdata2() {

    news.innerHTML = `
    <div>
        <a href="${newsdata[0].link}">
            <img style=" 
        width: 500px;
        height: 300px;" src="${newsdata[0].image}"></a>
    </div>
    <div>
        <a style="font-size: large;font-weight: bold;color: blue;" href="${newsdata[0].link}" target="blank">${newsdata[0].title}</a>
    </div>
    <div>
        <p style="margin-block-start: 0;max-height: 150px;overflow: auto;
        margin-block-end: 0;">${newsdata[0].content}</p>
    </div>
`
    for (i = 1; i < 4; i++) {
        newsli.innerHTML += `
        <li  style="float: left;
    width: 100%;
    border: 1px solid #ededed;
    background: #f4f3f3;
    margin-top: 15px;
    position: relative;
    display: flex;
    justify-content: space-between;
    ">
            <div style="display: inline-block">
                <a href="${newsdata[i].link}" target="blank">
                    <img style="  border: 1px solid #ddd;
                    border-radius: 4px;
                    padding-right: 5px;width: 200px;
                height: 150px;
                float: left;" src="${newsdata[i].image}"></a>
            </div>
            <div style="width: 500px;display: inline-block">

                <a style="font-size: medium;font-weight: bold;color: blue;max-height: 80px;overflow: auto;" href="${newsdata[i].link}"
                    target="blank">${newsdata[i].title}</a>
                <div>
                    <p style="margin-block-start: 0;max-height: 90px;overflow: auto;
                margin-block-end: 0;">${newsdata[i].content}</p>
                </div>

            </div>
            </li>`
    }
}

submit1.addEventListener('click', () => {

    window.location.replace("tintuc.html")
    timkiem()
})

search1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});