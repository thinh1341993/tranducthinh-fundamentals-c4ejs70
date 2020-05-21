let search = document.getElementById('search')
let submit = document.getElementById('submit')

let newshtml

function shownews() {
    for (i = 0; i < 5; i++) {

        newshtml += `<li  style="float: left;
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
    }
    newdata.innerHTML = newshtml
}
shownews()

submit.addEventListener('click', () => {
    timkiem()

})

search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});