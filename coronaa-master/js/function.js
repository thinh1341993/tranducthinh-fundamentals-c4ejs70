function timkiem() {
    let html
    for (i = 0; i < newsdata.length; i++) {
        if (newsdata[i].title.toLowerCase().search(`${search.value.toLowerCase()}`) != -1 || newsdata[i].content.toLowerCase().search(`${search.value.toLowerCase()}`) != -1) {
            html += `<li  style="float: left;
            margin-left: 50px;
        width: 70%;
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
                <div style="display: inline-block;width: 700px;">
    
                    <a style="font-size: medium;font-weight: bold;color: blue;max-height: 80px;overflow: auto;" href="${newsdata[i].link}"
                        target="blank">${newsdata[i].title}</a>
                    <div>
                        <p style="margin-block-start: 0;
                    margin-block-end: 0;">${newsdata[i].content}</p>
                    </div>
    
                </div>
                </li>`
        } else {
            newdata.innerHTML = `Không Tìm Thấy Thông Tin`
        }
    }
    newdata.innerHTML = html
}